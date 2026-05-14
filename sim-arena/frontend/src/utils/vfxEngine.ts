import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useMainStore } from '../store/useMainStore';
import { ShockwaveFilter } from 'pixi-filters';

// Đăng ký RoughEase và MotionPathPlugin để xử lý rung lắc & quỹ đạo cong
gsap.registerPlugin(RoughEase, MotionPathPlugin);

let appBg: PIXI.Application | null = null;
let appFg: PIXI.Application | null = null;

let isReady = false;
let initToken = 0;
let pendingQueue: Array<{ event: any; speed: number }> = [];
let resizeObserver: ResizeObserver | null = null;
let resizeTarget: HTMLElement | null = null;

const CELL_SIZE = 50; // Kích thước của 1 ô lưới
const GRID_SIZE = 20;
const BASE_SIZE = GRID_SIZE * CELL_SIZE;

type TimerHandle = ReturnType<typeof setTimeout>;
type IntervalHandle = ReturnType<typeof setInterval>;

const activeTimers = new Set<TimerHandle>();
const activeIntervals = new Set<IntervalHandle>();
const activeTickers = new Set<PIXI.Ticker>();

const trackTimeout = (handle: TimerHandle) => {
  activeTimers.add(handle);
  return handle;
};

const trackInterval = (handle: IntervalHandle) => {
  activeIntervals.add(handle);
  return handle;
};

const trackTicker = (ticker: PIXI.Ticker) => {
  activeTickers.add(ticker);
  return ticker;
};

const clearTracked = () => {
  activeTimers.forEach(clearTimeout);
  activeTimers.clear();
  activeIntervals.forEach(clearInterval);
  activeIntervals.clear();
  activeTickers.forEach((ticker) => {
    ticker.stop();
    ticker.destroy();
  });
  activeTickers.clear();
};

const updateRendererLayout = () => {
  if (!resizeTarget) return;

  const rect = resizeTarget.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const size = Math.min(width, height);
  const scale = size / BASE_SIZE;

  [appBg, appFg].forEach((app) => {
    if (!app) return;
    app.renderer.resize(width, height);
    app.stage.scale.set(scale);
    app.stage.position.set((width - BASE_SIZE * scale) / 2, (height - BASE_SIZE * scale) / 2);
  });
};

const attachResizeObserver = (target: HTMLElement) => {
  if (resizeObserver) resizeObserver.disconnect();
  resizeTarget = target;
  resizeObserver = new ResizeObserver(() => updateRendererLayout());
  resizeObserver.observe(target);
  updateRendererLayout();
};

const detachResizeObserver = () => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
  resizeTarget = null;
};

const safeDestroyApp = (app: PIXI.Application | null) => {
  if (!app) return;

  const anyApp = app as any;
  try {
    if (typeof anyApp._cancelResize === 'function') {
      app.destroy(true, { children: true, texture: true });
      return;
    }
  } catch {
    // Fallback below
  }

  try {
    app.stage?.removeChildren();
  } catch {
    // ignore
  }
  try {
    app.stage?.destroy?.({ children: true });
  } catch {
    // ignore
  }
  try {
    app.renderer?.destroy?.(true);
  } catch {
    // ignore
  }
  try {
    app.destroy?.();
  } catch {
    // ignore
  }
};

const waitForCanvases = (
  bgCanvasId: string,
  fgCanvasId: string,
  boardId: string,
  timeoutMs = 2000
) => new Promise<{
  bgCanvas: HTMLCanvasElement;
  fgCanvas: HTMLCanvasElement;
  board: HTMLElement;
} | null>((resolve) => {
  const start = typeof performance !== 'undefined' ? performance.now() : Date.now();

  const tick = () => {
    const bgCanvas = document.getElementById(bgCanvasId) as HTMLCanvasElement | null;
    const fgCanvas = document.getElementById(fgCanvasId) as HTMLCanvasElement | null;
    const board = document.getElementById(boardId) as HTMLElement | null;

    if (bgCanvas && fgCanvas && board) {
      resolve({ bgCanvas, fgCanvas, board });
      return;
    }

    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    if (now - start >= timeoutMs) {
      resolve(null);
      return;
    }

    requestAnimationFrame(tick);
  };

  tick();
});

const flushQueue = () => {
  if (!isReady) return;
  const queued = pendingQueue.splice(0, pendingQueue.length);
  queued.forEach(({ event, speed }) => executeVFX(event, speed));
};

const resolveTargetPosition = (targetId?: string) => {
  const state = useMainStore.getState();
  const targetChar = [...state.teamA, ...state.teamB].find((c) => c.id === targetId);
  if (targetChar?.position) {
    return { x: targetChar.position.x, y: targetChar.position.y };
  }
  return { x: 10, y: 10 }; // Fallback
};

const parseColor = (value?: string, fallback = '#ffffff') => {
  const raw = (value ?? fallback).trim();
  if (!raw) return { color: 0xffffff, alpha: 1, hexString: '#ffffff' };

  const rgbMatch = raw.match(/rgba?\s*\(([^)]+)\)/i);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(',').map((v) => v.trim());
    const r = Math.max(0, Math.min(255, parseInt(parts[0] || '0', 10)));
    const g = Math.max(0, Math.min(255, parseInt(parts[1] || '0', 10)));
    const b = Math.max(0, Math.min(255, parseInt(parts[2] || '0', 10)));
    const a = parts.length > 3 ? Math.max(0, Math.min(1, parseFloat(parts[3] || '1'))) : 1;
    const hexString = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    return { color: (r << 16) | (g << 8) | b, alpha: a, hexString };
  }

  try {
    const pixiColor = new PIXI.Color(raw);
    return { color: pixiColor.toNumber(), alpha: 1, hexString: pixiColor.toHex() };
  } catch {
    return { color: 0xffffff, alpha: 1, hexString: '#ffffff' };
  }
};

const resolveBlendMode = (mode?: string) => {
  switch ((mode || '').toUpperCase()) {
    case 'ADD': return 'add';
    case 'MULTIPLY': return 'multiply';
    case 'SCREEN': return 'screen';
    case 'OVERLAY': return 'overlay';
    case 'NORMAL': return 'normal';
    default: return null;
  }
};

const normalizeSequence = (seq?: any) => ({
  delayMs: Math.max(0, seq?.delay_ms ?? 0),
  staggerMs: Math.max(0, seq?.stagger_ms ?? 0),
  repeat: seq?.repeat ?? 0,
  yoyo: !!seq?.yoyo
});

const scheduleEffect = (
  runOnce: () => void,
  sequence: ReturnType<typeof normalizeSequence>,
  durationMs: number,
  simulationSpeed: number
) => {
  const delayMs = sequence.delayMs || 0;
  const staggerMs = sequence.staggerMs || 0;
  const repeat = sequence.repeat ?? 0;
  const intervalMs = Math.max(staggerMs || durationMs || 100, 16);

  if (repeat <= -1) {
    const start = () => {
      runOnce();
      trackInterval(setInterval(runOnce, intervalMs / simulationSpeed));
    };
    if (delayMs > 0) trackTimeout(setTimeout(start, delayMs / simulationSpeed));
    else start();
    return;
  }

  const totalRuns = repeat + 1;
  for (let i = 0; i < totalRuns; i += 1) {
    const whenMs = delayMs + i * intervalMs;
    trackTimeout(setTimeout(runOnce, whenMs / simulationSpeed));
  }
};

// NÂNG CẤP: Thêm onComplete để dọn dẹp các Ticker chạy ngầm
const handleLifecycle = (
  obj: PIXI.Container | PIXI.Sprite | PIXI.Graphics | PIXI.Text,
  payload: any,
  simulationSpeed: number,
  stage: PIXI.Container,
  onComplete?: () => void
) => {
  const fadeIn = (payload.fade_in_ms || 0) / simulationSpeed;
  const lifetime = (payload.lifetime_ms || 1000) / simulationSpeed;
  const fadeOut = (payload.fade_out_ms || 0) / simulationSpeed;
  const targetAlpha = obj.alpha;

  if (fadeIn > 0) {
    obj.alpha = 0;
    gsap.to(obj, { alpha: targetAlpha, duration: fadeIn / 1000, ease: 'power1.inOut' });
  }

  trackTimeout(setTimeout(() => {
    if (fadeOut > 0) {
      gsap.to(obj, {
        alpha: 0,
        duration: fadeOut / 1000,
        ease: 'power1.inOut',
        onComplete: () => {
          if (!obj.destroyed) {
            stage.removeChild(obj);
            obj.destroy();
          }
          if (onComplete) onComplete();
        }
      });
    } else {
      if (!obj.destroyed) {
        stage.removeChild(obj);
        obj.destroy();
      }
      if (onComplete) onComplete();
    }
  }, (fadeIn + lifetime) / simulationSpeed));
};

export const initVFXEngine = async (bgCanvasId: string, fgCanvasId: string) => {
  const token = ++initToken;
  isReady = false;

  const ready = await waitForCanvases(bgCanvasId, fgCanvasId, 'arena-board');
  if (!ready || token !== initToken) return;

  const { bgCanvas, fgCanvas, board } = ready;

  clearTracked();
  detachResizeObserver();
  safeDestroyApp(appBg);
  safeDestroyApp(appFg);
  appBg = null;
  appFg = null;

  appBg = new PIXI.Application();
  await appBg.init({
    canvas: bgCanvas,
    backgroundAlpha: 0,
    autoDensity: true,
    resolution: window.devicePixelRatio || 1,
    clearBeforeRender: true
  });

  appFg = new PIXI.Application();
  await appFg.init({
    canvas: fgCanvas,
    backgroundAlpha: 0,
    autoDensity: true,
    resolution: window.devicePixelRatio || 1,
    clearBeforeRender: true
  });

  if (token !== initToken) {
    safeDestroyApp(appBg);
    safeDestroyApp(appFg);
    appBg = null;
    appFg = null;
    return;
  }

  attachResizeObserver(board);

  isReady = true;
  flushQueue();

  console.log('VFX Engine (PixiJS + GSAP + Particles + Filters) Nâng cấp Initialized!');
};

export const clearAllVFX = () => {
  clearTracked();
  pendingQueue.length = 0;
  if (appBg) {
    appBg.stage.removeChildren();
    appBg.stage.filters = [];
  }
  if (appFg) {
    appFg.stage.removeChildren();
    appFg.stage.filters = [];
  }
  gsap.killTweensOf('*');

  const board = document.getElementById('arena-board');
  if (board) {
    board.style.filter = '';
    board.style.transform = '';
  }

  const nodes = document.querySelectorAll('[id^="char-"]');
  nodes.forEach((node) => {
    const element = node as HTMLElement;
    element.style.filter = '';
    element.style.transform = '';
  });
};

export const destroyVFXEngine = () => {
  isReady = false;
  pendingQueue.length = 0;
  detachResizeObserver();
  clearAllVFX();
  safeDestroyApp(appBg);
  safeDestroyApp(appFg);
  appBg = null;
  appFg = null;
};

export const executeVFX = (vfxEvent: any, simulationSpeed: number) => {
  if (!appBg || !appFg || !isReady) {
    pendingQueue.push({ event: vfxEvent, speed: simulationSpeed });
    return;
  }

  const targetApp = vfxEvent.canvas_layer?.layer === 'bg' ? appBg : appFg;
  const stage = targetApp.stage;
  const sequence = normalizeSequence(vfxEvent.timeline_sequence);
  const blendMode = resolveBlendMode(vfxEvent.blend_mode?.mode || vfxEvent.blend_mode);

  // ------------------------------------------
  // 1. GSAP TWEEN
  // ------------------------------------------
  if (vfxEvent.gsap_tween) {
    try {
      const {
      target_id, x, y, from_x, from_y, offset_x, offset_y, motion_path_points,
      scale_x, scale_y, skew_x, skew_y, transform_origin, opacity, rotation_deg, color_tint, tint_alpha,
      duration_ms, delay_ms, ease, local_shake_x, local_shake_y,
      repeat, yoyo
    } = vfxEvent.gsap_tween;

    const domTarget = target_id === 'GLOBAL' ? '#arena-board' : `#char-${target_id || vfxEvent.target_id}`;
    const duration = ((duration_ms ?? 500) / 1000) / simulationSpeed;

    // 🚀 VÁ LỖI 1: Setup tọa độ xuất phát (từ from_x, from_y) để tránh lỗi giật cục / Teleport
    if (from_x !== undefined && from_y !== undefined) {
      let fX = from_x; if (offset_x) fX += offset_x;
      let fY = from_y; if (offset_y) fY += offset_y;
      gsap.set(domTarget, { left: `${fX * 5}%`, top: `${fY * 5}%` });
    }

    if (local_shake_x || local_shake_y) {
      const sx = (local_shake_x || 0) * CELL_SIZE;
      const sy = (local_shake_y || 0) * CELL_SIZE;
      const shakeCount = repeat !== undefined ? repeat : Math.max(1, Math.floor((duration * 1000) / 50));
      gsap.fromTo(domTarget,
        { x: -sx, y: -sy },
        { x: sx, y: sy, duration: 0.05 / simulationSpeed, repeat: shakeCount, yoyo: true, ease: 'none', clearProps: 'x,y' }
      );
    }

    const specificDelay = delay_ms !== undefined ? delay_ms : sequence.delayMs;

    const toConfig: gsap.TweenVars = {
      duration,
      ease: ease || 'power1.out', // Sẽ tự nhận diện 'rough.ease' vì đã register
      delay: (specificDelay / 1000) / simulationSpeed,
      repeat: sequence.repeat ?? repeat ?? 0,
      yoyo: sequence.yoyo || yoyo || false,
      overwrite: 'auto'
    };

    if (sequence.staggerMs) toConfig.repeatDelay = (sequence.staggerMs / 1000) / simulationSpeed;
    if (scale_x !== undefined) toConfig.scaleX = scale_x;
    if (scale_y !== undefined) toConfig.scaleY = scale_y;
    if (skew_x !== undefined) toConfig.skewX = skew_x;
    if (skew_y !== undefined) toConfig.skewY = skew_y;
    if (opacity !== undefined) toConfig.opacity = opacity;
    if (rotation_deg !== undefined) toConfig.rotation = rotation_deg;
    if (transform_origin !== undefined) toConfig.transformOrigin = transform_origin;
    
    // Hỗ trợ motion_path_points (Lưu ý: Để chạy thực tế sau này cần đăng ký MotionPathPlugin của GSAP)
    if (motion_path_points !== undefined && Array.isArray(motion_path_points)) {
      toConfig.motionPath = { 
        path: motion_path_points.map((p: number[]) => ({ x: `${p[0] * 5}%`, y: `${p[1] * 5}%` })),
        curviness: 1.2
      };
    }

    if (x !== undefined) {
       let finalX = x;
       if(offset_x) finalX += offset_x;
       toConfig.left = `${finalX * 5}%`;
    }
    if (y !== undefined) {
       let finalY = y;
       if(offset_y) finalY += offset_y;
       toConfig.top = `${finalY * 5}%`;
    }

    // NÂNG CẤP: Xử lý màu sắc có Alpha trong CSS Filter
    if (color_tint) {
      const parsedTint = parseColor(color_tint);
      const r = (parsedTint.color >> 16) & 255;
      const g = (parsedTint.color >> 8) & 255;
      const b = parsedTint.color & 255;
      const finalAlpha = tint_alpha !== undefined ? tint_alpha : parsedTint.alpha;
      
      toConfig.filter = `drop-shadow(0 0 10px rgba(${r}, ${g}, ${b}, ${finalAlpha})) hue-rotate(45deg) brightness(1.2)`;
      toConfig.clearProps = toConfig.clearProps ? `${toConfig.clearProps},filter` : 'filter';
    }

    gsap.to(domTarget, toConfig);
    } catch (error) {
      console.warn('[VFX] gsap_tween error:', error);
    }
  }

  

  // ------------------------------------------
  // 3. PIXI TEXT (Với Grid Units)
  // ------------------------------------------
  if (vfxEvent.pixi_text) {
    const payload = vfxEvent.pixi_text;
    const durationMs = payload.lifetime_ms || payload.fade_duration_ms || 1500;

    scheduleEffect(() => {
      try {
      const dropShadowDistanceX = (payload.drop_shadow_distance_x || 0) * CELL_SIZE;
      const dropShadowDistanceY = (payload.drop_shadow_distance_y || 0) * CELL_SIZE;

      const parsedFill = parseColor(payload.color, '#FFFFFF');
      const parsedStroke = parseColor(payload.stroke_color, '#000000');

      const textStyle = new PIXI.TextStyle({
        fontFamily: payload.font_family || '"Arial Black", Arial, sans-serif',
        fontSize: (payload.font_size || 0.5) * CELL_SIZE,
        fill: parsedFill.hexString,
        fontWeight: (payload.font_weight as any) || 'bold',
        stroke: parsedStroke.hexString,
        strokeThickness: (payload.stroke_thickness || 0.05) * CELL_SIZE,
        dropShadow: payload.drop_shadow || dropShadowDistanceX > 0 || dropShadowDistanceY > 0,
        dropShadowDistance: Math.max(Math.abs(dropShadowDistanceX), Math.abs(dropShadowDistanceY)),
        dropShadowColor: payload.drop_shadow_color || '#000000',
        dropShadowBlur: payload.drop_shadow_blur || 0,
        letterSpacing: (payload.letter_spacing || 0) * CELL_SIZE,
        align: payload.align || 'center'
      } as any);

      const textObj = new PIXI.Text({ text: String(payload.content), style: textStyle });
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);

      textObj.x = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      textObj.y = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;
      
      textObj.anchor.set(payload.anchor_x ?? 0.5, payload.anchor_y ?? 0.5);
      if (payload.scale_x !== undefined) textObj.scale.x = payload.scale_x;
      if (payload.scale_y !== undefined) textObj.scale.y = payload.scale_y;

      textObj.alpha = parsedFill.alpha; // Đồng bộ kênh alpha từ parseColor
      if (blendMode !== null) textObj.blendMode = blendMode as any;
      stage.addChild(textObj);

      const floatY = (payload.float_distance_y !== undefined ? payload.float_distance_y : -1) * CELL_SIZE;
      const floatX = (payload.float_distance_x || 0) * CELL_SIZE;
      
      gsap.to(textObj, {
        x: textObj.x + floatX,
        y: textObj.y + floatY,
        duration: (payload.float_duration_ms || durationMs) / 1000 / simulationSpeed,
        ease: payload.float_ease || 'power2.out'
      });

      handleLifecycle(textObj, payload, simulationSpeed, stage);
      } catch (error) {
        console.warn('[VFX] pixi_text error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 4. PIXI PARTICLES ENGINE (CUSTOM V8 - FIXED)
  // ------------------------------------------
  if (vfxEvent.pixi_particles) {
    const payload = vfxEvent.pixi_particles;
    const isContinuous = payload.emitter_type === 'stream' || payload.emitter_type === 'fountain' || payload.emitter_type === 'continuous';
    const durationMs = payload.emit_duration_ms || payload.lifetime_ms || 1000;

    scheduleEffect(() => {
      try {
        const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
        const originX = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
        const originY = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;

        const container = new PIXI.Container();
        container.x = originX;
        container.y = originY;
        stage.addChild(container);

        // Map các thông số vật lý (ĐÃ BỔ SUNG ĐẦY ĐỦ CELL_SIZE MAPING)
        const baseSpeed = (payload.speed ?? 2) * CELL_SIZE;
        const speedVariance = (payload.speed_variance ?? 0) * CELL_SIZE;
        const startColor = parseColor(payload.start_color, '#ffffff');
        const endColor = parseColor(payload.end_color ?? payload.start_color, '#ffffff');
        const spread = payload.spread_angle ?? 360;
        const emitAngle = payload.emit_angle ?? 0;
        
        const gravity = (payload.gravity_y || 0) * CELL_SIZE * 10;
        const windX = (payload.wind_x || 0) * CELL_SIZE * 10;
        const radialAccel = (payload.radial_acceleration || 0) * CELL_SIZE;
        const tangentialAccel = (payload.tangential_acceleration || 0) * CELL_SIZE;
        const startAlpha = payload.start_alpha !== undefined ? payload.start_alpha : startColor.alpha;
        
        const spawnW = (payload.spawn_width || 0) * CELL_SIZE;
        const spawnH = (payload.spawn_height || 0) * CELL_SIZE;
        const spawnRadius = (payload.spawn_radius || 0) * CELL_SIZE;
        
        const baseParticleLifetime = (payload.particle_lifetime_ms || 1000) / 1000 / simulationSpeed;
        const lifetimeVariance = (payload.lifetime_variance_ms || 0) / 1000 / simulationSpeed;

        // Hàm sinh 1 hạt đơn lẻ
        const spawnParticle = () => {
          const p = new PIXI.Graphics();
          
          if (payload.shape_type === 'star') {
            p.moveTo(0, -5).lineTo(1, -1).lineTo(5, 0).lineTo(1, 1).lineTo(0, 5).lineTo(-1, 1).lineTo(-5, 0).lineTo(-1, -1).fill({ color: startColor.color, alpha: startColor.alpha });
          } else if (payload.shape_type === 'rect') {
            p.rect(-3, -3, 6, 6).fill({ color: startColor.color, alpha: startColor.alpha });
          } else {
            p.circle(0, 0, 4).fill({ color: startColor.color, alpha: startColor.alpha });
          }
          
          if (blendMode !== null) p.blendMode = blendMode as any;
          
          // Logic vị trí xuất hiện
          if (spawnRadius > 0) {
            const r = Math.random() * spawnRadius;
            const theta = Math.random() * 2 * Math.PI;
            p.x = r * Math.cos(theta);
            p.y = r * Math.sin(theta);
          } else {
            p.x = (Math.random() - 0.5) * spawnW;
            p.y = (Math.random() - 0.5) * spawnH;
          }
          
          p.alpha = startAlpha;
          
          // NÂNG CẤP: Tính toán độ dao động kích thước hạt (start_scale_variance)
          const scaleVar = payload.start_scale_variance || 0;
          const finalStartScale = Math.max(0.01, (payload.start_scale ?? 1) + (Math.random() * 2 - 1) * scaleVar);
          p.scale.set(finalStartScale);
          
          container.addChild(p);

          // Động học (Hỗ trợ Variance)
          const angle = (emitAngle - spread / 2 + Math.random() * spread) * (Math.PI / 180);
          const actualSpeed = baseSpeed + (Math.random() * 2 - 1) * speedVariance;
          const velocityX = Math.cos(angle) * actualSpeed;
          const velocityY = Math.sin(angle) * actualSpeed;
          
          const actualLifetime = Math.max(0.1, baseParticleLifetime + (Math.random() * 2 - 1) * lifetimeVariance);

          // Xử lý lực cản (Friction) làm giảm quãng đường đi được theo thời gian
          const friction = Math.max(0, Math.min(payload.friction || 0, 0.99));
          const distanceMultiplier = Math.pow(1 - friction, actualLifetime);

          const finalX = p.x + (velocityX * actualLifetime * distanceMultiplier) + (windX * actualLifetime) + (tangentialAccel * actualLifetime * actualLifetime);
          const finalY = p.y + (velocityY * actualLifetime * distanceMultiplier) + (gravity * actualLifetime) + (radialAccel * actualLifetime * actualLifetime);

          // Xử lý gia tốc quay
          const rotSpeedVar = payload.rotation_speed_variance !== undefined ? payload.rotation_speed_variance : Math.PI * 4;
          const targetRotation = (Math.random() - 0.5) * rotSpeedVar;

          gsap.to(p, {
            x: finalX,
            y: finalY,
            alpha: payload.end_alpha ?? endColor.alpha,
            scaleX: payload.end_scale ?? 0.1,
            scaleY: payload.end_scale ?? 0.1,
            rotation: targetRotation,
            duration: actualLifetime,
            ease: 'power1.out',
            onComplete: () => {
              if (!p.destroyed) p.destroy();
            }
          });
        };

        // Logic điều phối súng bắn
        if (isContinuous) {
          const emitRate = payload.emit_rate || 30;
          const intervalMs = Math.max(16, 1000 / emitRate) / simulationSpeed;
          
          const emitterInterval = trackInterval(setInterval(spawnParticle, intervalMs));
          
          trackTimeout(setTimeout(() => {
            clearInterval(emitterInterval);
            activeIntervals.delete(emitterInterval);
          }, durationMs / simulationSpeed));

        } else {
          const particleCount = payload.burst_count || 30;
          for (let i = 0; i < particleCount; i++) spawnParticle();
        }

        // Hủy container an toàn
        const totalGCWaitTime = (durationMs / simulationSpeed) + (baseParticleLifetime + lifetimeVariance) * 1000 + 500;
        
        trackTimeout(setTimeout(() => {
          if (!container.destroyed) {
            stage.removeChild(container);
            container.destroy({ children: true });
          }
        }, totalGCWaitTime));

      } catch (error) {
        console.warn('[VFX] custom pixi_particles error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 5. PIXI MESH (NÂNG CẤP LỚN: Animation Ticker, Subdivide, Dash Trail)
  // ------------------------------------------
  if (vfxEvent.pixi_mesh) {
    const payload = vfxEvent.pixi_mesh;
    const durationMs = payload.lifetime_ms || vfxEvent.duration_ms || 500;

    scheduleEffect(() => {
      try {
        const points = payload.path_points || [];
        if (points.length < 2) return;

      const graphics = new PIXI.Graphics();
      if (blendMode !== null) graphics.blendMode = blendMode as any;
      stage.addChild(graphics);

      const stroke = parseColor(payload.color, '#ffffff');
      const strokeWidth = (payload.thickness ?? 0.2) * CELL_SIZE;
      // Map base points (Đã neo theo vị trí gốc của nhân vật)
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const baseX = (payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0);
      const baseY = (payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0);

      let basePoints: Array<{ x: number; y: number }> = points.map((p: number[]) => ({ 
        x: (baseX + p[0]) * CELL_SIZE, 
        y: (baseY + p[1]) * CELL_SIZE 
      }));

      // Tự động chia nhỏ đoạn thẳng nếu AI chỉ cấp 2 điểm (A->B) để tạo khớp uốn lượn
      if (basePoints.length === 2) {
        const segments = 15;
        const newPoints: Array<{ x: number; y: number }> = [];
        for (let i = 0; i <= segments; i++) {
          newPoints.push({
            x: basePoints[0].x + (basePoints[1].x - basePoints[0].x) * (i / segments),
            y: basePoints[0].y + (basePoints[1].y - basePoints[0].y) * (i / segments)
          });
        }
        basePoints = newPoints;
      }

      const animSpeed = payload.animation_speed || 1;
      const distAmp = (payload.distortion_amplitude || 0) * CELL_SIZE;
      const isDashTrail = payload.style === 'dash_trail';
      
      let elapsedFrames = 0;

      // Khởi tạo vòng lặp render động cho Mesh/Đường thẳng
      const meshTicker = trackTicker(new PIXI.Ticker());
      meshTicker.add(() => {
        elapsedFrames += meshTicker.deltaMS * 0.01 * animSpeed;
        graphics.clear();

        // Tính toán các điểm lượn sóng (áp dụng distortion_frequency)
        const distFreq = payload.distortion_frequency !== undefined ? payload.distortion_frequency : 1;
        const currentPoints = basePoints.map((p: { x: number; y: number }, i: number) => {
          if (distAmp === 0 || i === 0 || i === basePoints.length - 1) return p;
          return {
            x: p.x + Math.sin(elapsedFrames + i * distFreq) * distAmp,
            y: p.y + Math.cos(elapsedFrames + i * distFreq) * distAmp
          };
        });

        // NÂNG CẤP HOÀN MỸ 100%: Xử lý vuốt nhọn (Taper)
        // AI có thể truyền boolean (true = nhọn) hoặc số (0.0 đến 1.0)
        const parseTaper = (val: any, defaultVal: number) => {
          if (val === undefined) return defaultVal;
          if (typeof val === 'boolean') return val ? 0.0 : 1.0;
          return Number(val);
        };
        const tStart = parseTaper(payload.taper_start, 1.0);
        const tEnd = parseTaper(payload.taper_end, 1.0);

        if (isDashTrail) {
          // Logic vẽ vệt kiếm (Dash Trail) có vuốt dần độ dày
          const totalPoints = currentPoints.length;
          const progress = ((elapsedFrames * 2) % 150) / 100; 
          const headIndex = Math.floor(progress * totalPoints);
          const tailLength = Math.max(3, Math.floor(totalPoints * 0.4)); 
          const startIndex = Math.max(0, headIndex - tailLength);

          if (headIndex > 0 && startIndex < totalPoints) {
            const endIndex = Math.min(headIndex, totalPoints - 1);
            const activeLength = Math.max(1, endIndex - startIndex);

            // Vẽ từng đốt của vệt kiếm để biến thiên độ dày
            for (let i = startIndex; i < endIndex; i++) {
              graphics.moveTo(currentPoints[i].x, currentPoints[i].y);
              graphics.lineTo(currentPoints[i+1].x, currentPoints[i+1].y);

              const localProgress = (i - startIndex) / activeLength; // 0 ở đuôi, 1 ở đầu
              const currentWidth = strokeWidth * (tStart + (tEnd - tStart) * localProgress);

              graphics.stroke({ width: currentWidth, color: stroke.color, alpha: stroke.alpha, cap: 'round', join: 'round' });
            }
          }
        } else {
          // Vẽ Mesh liền mạch có vuốt nhọn
          const segments = currentPoints.length - 1;
          for (let i = 0; i < segments; i++) {
            graphics.moveTo(currentPoints[i].x, currentPoints[i].y);
            graphics.lineTo(currentPoints[i+1].x, currentPoints[i+1].y);
            
            if (i === segments - 1 && payload.is_closed_path) {
                graphics.moveTo(currentPoints[i+1].x, currentPoints[i+1].y);
                graphics.lineTo(currentPoints[0].x, currentPoints[0].y);
            }

            const pointProgress = i / Math.max(1, segments - 1);
            let currentWidth = strokeWidth;
            
            // Xử lý động lực học hình dáng (Shape Dynamics)
            if (tStart !== 1.0 || tEnd !== 1.0) {
               const baseTaper = tStart 
               + (tEnd - tStart) * pointProgress;
               // Hiệu ứng hạt đậu/giọt nước: Nếu vuốt nhọn cả 2 đầu, thân giữa sẽ phình to mượt mà
               const bulge = (tStart < 0.5 && tEnd < 0.5) ? (4 * pointProgress * (1 - pointProgress)) : 0;
               currentWidth = strokeWidth * Math.max(baseTaper, bulge);
            }

            const strokeOptions: any = { 
              width: currentWidth, 
              color: stroke.color, 
              // 🚀 VÁ LỖI 2: Ưu tiên lấy Alpha từ payload (AI cấp) để xử lý tàng hình/làm mờ
              alpha: payload.alpha !== undefined ? payload.alpha : stroke.alpha,
              cap: payload.cap_style || 'round',
              join: 'round'
            };

            if (payload.texture_type) {
               const scrollSpeed = payload.texture_scroll_speed_x || payload.animation_speed || 1;
               strokeOptions.alpha = stroke.alpha * (0.6 + 0.4 * Math.sin(elapsedFrames * scrollSpeed));
            }

            graphics.stroke(strokeOptions);
          }
        }
      });
      meshTicker.start();

      // Dọn dẹp an toàn khi hiệu ứng kết thúc vòng đời
      handleLifecycle(graphics, payload, simulationSpeed, stage, () => {
        meshTicker.stop();
        meshTicker.destroy();
        activeTickers.delete(meshTicker);
      });
      } catch (error) {
        console.warn('[VFX] pixi_mesh error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 2. PIXI GRAPHICS (Với Grid Units)
  // ------------------------------------------
  if (vfxEvent.pixi_graphics) {
    const payload = vfxEvent.pixi_graphics;
    const durationMs = payload.lifetime_ms || vfxEvent.duration_ms || 1000;

    scheduleEffect(() => {
      try {
        const graphics = new PIXI.Graphics();
        if (blendMode !== null) graphics.blendMode = blendMode as any;

        const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
        const cx = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
        const cy = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;

        const fill = payload.fill_color ? parseColor(payload.fill_color) : null;
        const stroke = payload.line_color ? parseColor(payload.line_color) : null;
        const fillAlpha = fill ? (payload.fill_alpha ?? 1) * fill.alpha : 0;
        const strokeAlpha = stroke ? (payload.line_alpha ?? 1) * stroke.alpha : 0;
        const strokeWidth = (payload.line_width ?? (stroke ? 0.05 : 0)) * CELL_SIZE;

        if (payload.shape_type === 'rect' || payload.shape_type === 'rectangle') {
          const rectW = (payload.width ?? 1) * CELL_SIZE;
          const rectH = (payload.height ?? 1) * CELL_SIZE;
          const cornerRadius = (payload.corner_radius || 0) * CELL_SIZE;
          if (cornerRadius > 0) {
            graphics.roundRect(cx - rectW / 2, cy - rectH / 2, rectW, rectH, cornerRadius);
          } else {
            graphics.rect(cx - rectW / 2, cy - rectH / 2, rectW, rectH);
          }
        } else if (payload.shape_type === 'ellipse') {
          const ellipseW = (payload.width ?? 1) * CELL_SIZE / 2;
          const ellipseH = (payload.height ?? 1) * CELL_SIZE / 2;
          graphics.ellipse(cx, cy, ellipseW, ellipseH);
        } else if (payload.shape_type === 'line') {
          const pts = payload.points || [];
          if (pts.length > 0) {
            // Đã cộng thêm cx, cy để dời nét vẽ về đúng vị trí nhân vật
            graphics.moveTo(cx + pts[0][0] * CELL_SIZE, cy + pts[0][1] * CELL_SIZE);
            for (let i = 1; i < pts.length; i++) {
              graphics.lineTo(cx + pts[i][0] * CELL_SIZE, cy + pts[i][1] * CELL_SIZE);
            }
          }
        } else if (payload.shape_type === 'polygon') {
          // Bổ sung hỗ trợ vẽ đa giác (polygon) từ mảng 1 chiều
          const pts = payload.points || [];
          if (pts.length >= 4) { 
            graphics.moveTo(cx + pts[0] * CELL_SIZE, cy + pts[1] * CELL_SIZE);
            for (let i = 2; i < pts.length; i += 2) {
              graphics.lineTo(cx + pts[i] * CELL_SIZE, cy + pts[i+1] * CELL_SIZE);
            }
            graphics.closePath();
          }
        } else if (payload.is_pie_slice || payload.start_angle_deg !== undefined || payload.end_angle_deg !== undefined) {
          const radius = (payload.radius ?? 1) * CELL_SIZE;
          const startAngle = (payload.start_angle_deg || 0) * (Math.PI / 180);
          const endAngle = (payload.end_angle_deg || 360) * (Math.PI / 180);
          if (payload.is_pie_slice) graphics.moveTo(cx, cy);
          graphics.arc(cx, cy, radius, startAngle, endAngle);
          if (payload.is_pie_slice) graphics.lineTo(cx, cy);
        } else {
          const radius = (payload.radius ?? 1) * CELL_SIZE;
          graphics.circle(cx, cy, radius);
        }

        if (fill) graphics.fill({ color: fill.color, alpha: fillAlpha });
        if (stroke && strokeWidth > 0) {
          const strokeStyleObj: any = { width: strokeWidth, color: stroke.color, alpha: strokeAlpha };
          if (payload.line_dash) strokeStyleObj.dashArray = payload.line_dash.map((d: number) => d * CELL_SIZE);
          graphics.stroke(strokeStyleObj);
        }

        if (payload.scale_x !== undefined) graphics.scale.x = payload.scale_x;
        if (payload.scale_y !== undefined) graphics.scale.y = payload.scale_y;
        if (payload.rotation_deg !== undefined) graphics.angle = payload.rotation_deg;

        stage.addChild(graphics);
        handleLifecycle(graphics, payload, simulationSpeed, stage);
      } catch (error) {
        console.warn('[VFX] pixi_graphics error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 6. PIXI FILTERS (Shockwave)
  // ------------------------------------------
  if (vfxEvent.pixi_filters) {
    const payload = vfxEvent.pixi_filters;
    const durationMs = payload.duration_ms || 1000;

    scheduleEffect(() => {
      try {
      const targetId = payload.target_id || vfxEvent.target_id;
      if (!targetId || targetId === 'GLOBAL') return;

      const fallbackPos = resolveTargetPosition(targetId);
      const cx = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      const cy = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;

      if (payload.filter_type === 'shockwave' || payload.filter_type === 'wave') {
        const targetRadius = (payload.radius || 10) * CELL_SIZE;
        const shockwave = new ShockwaveFilter({
          center: { x: cx, y: cy },
          amplitude: (payload.amplitude || 3) * (payload.intensity || 1) * 10,
          wavelength: (payload.wavelength || 1.5) * CELL_SIZE,
          brightness: 1,
          radius: -1 // Bắt đầu từ 0
        });
        
        stage.filters = [...(stage.filters || []), shockwave];

        // Thủ thuật: Vẽ thêm vòng năng lượng (color & thickness) nở ra cùng tốc độ với sóng âm
        if (payload.color || payload.thickness) {
            const waveRing = new PIXI.Graphics();
            const ringColor = parseColor(payload.color, '#ffffff');
            const ringThick = (payload.thickness || 0.2) * CELL_SIZE;
            
            waveRing.circle(cx, cy, targetRadius);
            waveRing.stroke({ width: ringThick, color: ringColor.color, alpha: ringColor.alpha });
            
            waveRing.scale.set(0.01);
            waveRing.alpha = 1;
            waveRing.x = cx; waveRing.y = cy;
            waveRing.pivot.set(cx, cy); // Scale từ tâm
            
            if (blendMode !== null) waveRing.blendMode = blendMode as any;
            stage.addChild(waveRing);
            
            // GSAP đồng bộ với Shockwave filter
            gsap.to(waveRing.scale, { x: 1, y: 1, duration: (durationMs / 1000) / simulationSpeed, ease: 'power2.out' });
            gsap.to(waveRing, { alpha: 0, duration: (durationMs / 1000) / simulationSpeed, ease: 'power2.in' });
            
            trackTimeout(setTimeout(() => {
                if (!waveRing.destroyed) { stage.removeChild(waveRing); waveRing.destroy(); }
            }, durationMs / simulationSpeed));
        }

        gsap.to(shockwave, {
          time: (durationMs / 1000) / simulationSpeed,
          radius: targetRadius,
          duration: (durationMs / 1000) / simulationSpeed,
          ease: 'power2.out',
          onComplete: () => {
            if (stage.filters) stage.filters = stage.filters.filter(f => f !== shockwave);
          }
        });
      }
       else if (payload.filter_type === 'blur') {
        // Hỗ trợ thêm hiệu ứng Blur (nhòe)
        const blurFilter = new PIXI.BlurFilter();
        blurFilter.blur = (payload.intensity || 1) * 5;
        stage.filters = [...(stage.filters || []), blurFilter];

        gsap.to(blurFilter, {
          blur: 0,
          duration: (durationMs / 1000) / simulationSpeed,
          ease: 'power1.out',
          onComplete: () => {
            if (stage.filters) stage.filters = stage.filters.filter(f => f !== blurFilter);
          }
        });
      } else {
        // Hướng mở rộng: Fallback cho mọi filter_type AI "bịa" ra (VD: glitch, pixelate, invert...)
        // Dùng ColorMatrixFilter nháy màu (hue) để báo hiệu có filter chạy
        const fallbackFilter = new PIXI.ColorMatrixFilter();
        stage.filters = [...(stage.filters || []), fallbackFilter];
        
        const intensity = payload.intensity || 1;
        
        gsap.to({ val: 0 }, {
          val: 360 * intensity,
          duration: (durationMs / 1000) / simulationSpeed,
          onUpdate: function() {
             fallbackFilter.hue(this.targets()[0].val, false);
          },
          onComplete: () => {
            if (stage.filters) stage.filters = stage.filters.filter(f => f !== fallbackFilter);
          }
        });
      }
      } catch (error) {
        console.warn('[VFX] pixi_filters error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }
};
