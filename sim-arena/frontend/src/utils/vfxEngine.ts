import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { useMainStore } from '../store/useMainStore';

// NẠP THÊM 2 THƯ VIỆN VỪA CÀI
import * as particles from '@pixi/particle-emitter';
import { ShockwaveFilter } from 'pixi-filters';

let appBg: PIXI.Application | null = null;
let appFg: PIXI.Application | null = null;

const CELL_SIZE = 50;

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

const handleLifecycle = (
  obj: PIXI.Container | PIXI.Sprite | PIXI.Graphics | PIXI.Text, 
  payload: any, 
  simulationSpeed: number, 
  stage: PIXI.Container
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
        }
      });
    } else {
      if (!obj.destroyed) {
        stage.removeChild(obj);
        obj.destroy();
      }
    }
  }, (fadeIn + lifetime) / simulationSpeed));
};

export const initVFXEngine = async (bgCanvasId: string, fgCanvasId: string) => {
  const bgCanvas = document.getElementById(bgCanvasId) as HTMLCanvasElement;
  const fgCanvas = document.getElementById(fgCanvasId) as HTMLCanvasElement;

  if (!bgCanvas || !fgCanvas) return;

  if (appBg) {
    appBg.destroy(true, { children: true, texture: true });
    appBg = null;
  }
  if (appFg) {
    appFg.destroy(true, { children: true, texture: true });
    appFg = null;
  }

  appBg = new PIXI.Application({ backgroundAlpha: 0, width: 1000, height: 1000, clearBeforeRender: true });
  await appBg.init({ canvas: bgCanvas, width: 1000, height: 1000, backgroundAlpha: 0, clearBeforeRender: true });

  appFg = new PIXI.Application({ backgroundAlpha: 0, width: 1000, height: 1000, clearBeforeRender: true });
  await appFg.init({ canvas: fgCanvas, width: 1000, height: 1000, backgroundAlpha: 0, clearBeforeRender: true });

  console.log('VFX Engine (PixiJS + GSAP + Particles + Filters) Initialized!');
};

export const clearAllVFX = () => {
  clearTracked();
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

export const executeVFX = (vfxEvent: any, simulationSpeed: number) => {
  if (!appBg || !appFg) return;

  const targetApp = vfxEvent.canvas_layer?.layer === 'bg' ? appBg : appFg;
  const stage = targetApp.stage;
  const sequence = normalizeSequence(vfxEvent.timeline_sequence);
  const blendMode = resolveBlendMode(vfxEvent.blend_mode?.mode);

  // ------------------------------------------
  // 1. GSAP TWEEN (XỬ LÝ LUÔN COLOR_TINT CHO DOM)
  // ------------------------------------------
  if (vfxEvent.gsap_tween) {
    const { 
      target_id, x, y, from_x, from_y, 
      scale_x, scale_y, scale, opacity, rotation_deg, color_tint,
      duration_ms, ease, local_shake_x, local_shake_y, 
      repeat, yoyo 
    } = vfxEvent.gsap_tween;
    
    const domTarget = target_id === 'GLOBAL' ? '#arena-board' : `#char-${target_id || vfxEvent.target_id}`;
    const duration = ((duration_ms ?? 500) / 1000) / simulationSpeed;

    if (local_shake_x || local_shake_y) {
      const sx = (local_shake_x || 0) * CELL_SIZE;
      const sy = (local_shake_y || 0) * CELL_SIZE;
      const shakeCount = repeat !== undefined ? repeat : Math.max(1, Math.floor((duration * 1000) / 50));
      gsap.fromTo(domTarget,
        { x: -sx, y: -sy },
        { x: sx, y: sy, duration: 0.05 / simulationSpeed, repeat: shakeCount, yoyo: true, ease: 'none', clearProps: 'x,y' }
      );
    }

    const toConfig: gsap.TweenVars = {
      duration,
      ease: ease || 'power1.out',
      delay: (sequence.delayMs / 1000) / simulationSpeed,
      repeat: sequence.repeat ?? repeat ?? 0,
      yoyo: sequence.yoyo || yoyo || false,
      overwrite: 'auto'
    };

    if (sequence.staggerMs) toConfig.repeatDelay = (sequence.staggerMs / 1000) / simulationSpeed;
    if (scale !== undefined) toConfig.scale = scale;
    else {
      if (scale_x !== undefined) toConfig.scaleX = scale_x;
      if (scale_y !== undefined) toConfig.scaleY = scale_y;
    }
    if (opacity !== undefined) toConfig.opacity = opacity;
    if (rotation_deg !== undefined) toConfig.rotation = rotation_deg;
    if (x !== undefined) toConfig.left = `${x * 5}%`;
    if (y !== undefined) toConfig.top = `${y * 5}%`;

    // SỬA LỖI COLOR_TINT CHO DOM ELEMENT BẰNG CSS FILTER
    if (color_tint) {
      toConfig.filter = `drop-shadow(0 0 10px ${color_tint}) hue-rotate(45deg) brightness(1.2)`;
      toConfig.clearProps = toConfig.clearProps ? `${toConfig.clearProps},filter` : 'filter';
    }

    if (from_x !== undefined && from_y !== undefined) {
      gsap.fromTo(domTarget, { left: `${from_x * 5}%`, top: `${from_y * 5}%` }, toConfig);
    } else {
      gsap.to(domTarget, toConfig);
    }
  }

  // ------------------------------------------
  // 2. PIXI GRAPHICS (BẢN VẼ HÌNH CƠ BẢN)
  // ------------------------------------------
  if (vfxEvent.pixi_graphics) {
    const payload = vfxEvent.pixi_graphics;
    const durationMs = payload.lifetime_ms || vfxEvent.duration_ms || 1000;

    scheduleEffect(() => {
      const graphics = new PIXI.Graphics();
      if (blendMode !== null) graphics.blendMode = blendMode;

      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const points = payload.points || [];
      const p0 = points[0] ? { x: points[0][0], y: points[0][1] } : fallbackPos;

      const fill = payload.fill_color ? parseColor(payload.fill_color) : null;
      const stroke = payload.line_color ? parseColor(payload.line_color) : null;
      const fillAlpha = fill ? (payload.fill_alpha ?? 1) * fill.alpha : 0;
      const strokeAlpha = stroke ? (payload.line_alpha ?? 1) * stroke.alpha : 0;
      const strokeWidth = (payload.line_width ?? (stroke ? 0.05 : 0)) * CELL_SIZE;

      const applyFillStroke = () => {
        if (fill) graphics.fill({ color: fill.color, alpha: fillAlpha });
        if (stroke && strokeWidth > 0) graphics.stroke({ width: strokeWidth, color: stroke.color, alpha: strokeAlpha });
      };

      if (payload.shape_type === 'rect') {
        const rectW = (payload.width ?? 1) * CELL_SIZE;
        const rectH = (payload.height ?? 1) * CELL_SIZE;
        graphics.rect(p0.x * CELL_SIZE - rectW/2, p0.y * CELL_SIZE - rectH/2, rectW, rectH);
        applyFillStroke();
      } else {
        const radius = (payload.radius ?? 1) * CELL_SIZE;
        graphics.circle(p0.x * CELL_SIZE, p0.y * CELL_SIZE, radius);
        applyFillStroke();
      }

      stage.addChild(graphics);
      handleLifecycle(graphics, payload, simulationSpeed, stage);

    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 3. PIXI TEXT (CÓ THÊM ĐƯỜNG VIỀN STROKE)
  // ------------------------------------------
  if (vfxEvent.pixi_text) {
    const payload = vfxEvent.pixi_text;
    const durationMs = payload.lifetime_ms || payload.fade_duration_ms || 1500;

    scheduleEffect(() => {
      const dropShadowDistanceX = (payload.drop_shadow_distance_x || 0) * CELL_SIZE;
      const dropShadowDistanceY = (payload.drop_shadow_distance_y || 0) * CELL_SIZE;

      const textStyle = new PIXI.TextStyle({
        fontFamily: payload.font_family || '"Arial Black", Arial, sans-serif',
        fontSize: (payload.font_size || 0.5) * CELL_SIZE,
        fill: payload.color || '#FFFFFF',
        fontWeight: (payload.font_weight as any) || 'bold',
        stroke: payload.stroke_color || '#000000',
        strokeThickness: (payload.stroke_thickness || 0.05) * CELL_SIZE, // Đã thêm viền
        dropShadow: payload.drop_shadow || dropShadowDistanceX > 0 || dropShadowDistanceY > 0,
        dropShadowDistance: Math.max(dropShadowDistanceX, dropShadowDistanceY)
      } as any);

      const textObj = new PIXI.Text({ text: String(payload.content), style: textStyle });
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);

      textObj.x = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      textObj.y = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;
      textObj.anchor.set(0.5);

      if (blendMode !== null) textObj.blendMode = blendMode;
      stage.addChild(textObj);

      const floatY = (payload.float_distance_y !== undefined ? payload.float_distance_y : -1) * CELL_SIZE;
      gsap.to(textObj, {
        y: textObj.y + floatY,
        duration: (payload.float_duration_ms || durationMs) / 1000 / simulationSpeed,
        ease: 'power2.out'
      });

      handleLifecycle(textObj, payload, simulationSpeed, stage);

    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 4. PIXI PARTICLES ENGINE (NÂNG CẤP XỊN SÒ)
  // ------------------------------------------
  if (vfxEvent.pixi_particles) {
    const payload = vfxEvent.pixi_particles;
    const durationMs = payload.emit_duration_ms || payload.lifetime_ms || 1000;

    scheduleEffect(() => {
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const originX = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      const originY = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;

      const container = new PIXI.Container();
      container.x = originX;
      container.y = originY;
      stage.addChild(container);

      // Tạo Base Texture cho Hạt
      const particleGraphic = new PIXI.Graphics();
      particleGraphic.circle(0, 0, 10);
      particleGraphic.fill({ color: 0xffffff });
      const particleTexture = targetApp.renderer.generateTexture(particleGraphic);

      // Đổi Data AI sang chuẩn @pixi/particle-emitter
      const particleLifetimeSec = (payload.particle_lifetime_ms || 1000) / 1000 / simulationSpeed;
      const startColor = parseColor(payload.start_color, '#ffffff');
      const endColor = parseColor(payload.end_color ?? payload.start_color, '#ffffff');
      
      const speedPx = (payload.speed ?? 2) * CELL_SIZE;
      const gravity = (payload.gravity_y || 0) * CELL_SIZE * 10;
      const spread = payload.spread_angle ?? 360;
      
      const config: particles.EmitterConfigV3 = {
        lifetime: { min: particleLifetimeSec * 0.8, max: particleLifetimeSec },
        frequency: payload.emitter_type === 'burst' ? 1000 : (payload.emit_rate ? 1 / payload.emit_rate : 0.05),
        emitterLifetime: durationMs / 1000 / simulationSpeed,
        maxParticles: payload.burst_count || payload.particle_count || 100,
        addAtBack: false,
        pos: { x: 0, y: 0 },
        behaviors: [
          {
            type: 'alpha',
            config: { alpha: { list: [{ value: startColor.alpha, time: 0 }, { value: endColor.alpha, time: 1 }], isStepped: false } }
          },
          {
            type: 'scale',
            config: { scale: { list: [{ value: payload.start_scale || 1, time: 0 }, { value: payload.end_scale || 0.1, time: 1 }], isStepped: false } }
          },
          {
            type: 'color',
            config: { color: { list: [{ value: startColor.hexString, time: 0 }, { value: endColor.hexString, time: 1 }], isStepped: false } }
          },
          {
            type: 'moveSpeed',
            config: { speed: { list: [{ value: speedPx, time: 0 }, { value: speedPx * (1 - (payload.friction || 0)), time: 1 }], isStepped: false } }
          },
          {
            type: 'moveAcceleration',
            config: { x: 0, y: gravity }
          },
          {
            type: 'rotation',
            config: { minStart: -spread/2, maxStart: spread/2, minSpeed: 0, maxSpeed: 0 }
          },
          {
            type: 'blendMode',
            config: { blendMode: blendMode || 'normal' }
          }
        ]
      };

      const emitter = new particles.Emitter(container as any, particles.upgradeConfig(config, [particleTexture]));
      
      if (payload.emitter_type === 'burst') {
        emitter.emit = true;
        emitter.playOnce(() => emitter.destroy());
      } else {
        emitter.emit = true;
      }

      // Vòng lặp cập nhật Emitter
      let elapsed = Date.now();
      const emitterTicker = trackTicker(new PIXI.Ticker());
      emitterTicker.add(() => {
        const now = Date.now();
        emitter.update((now - elapsed) * 0.001);
        elapsed = now;
      });
      emitterTicker.start();

      // Dọn dẹp
      trackTimeout(setTimeout(() => {
        emitterTicker.stop();
        emitterTicker.destroy();
        activeTickers.delete(emitterTicker);
        emitter.destroy();
        particleTexture.destroy(true);
        if (!container.destroyed) {
          stage.removeChild(container);
          container.destroy();
        }
      }, (durationMs + (particleLifetimeSec * 1000) + 500) / simulationSpeed));

    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 5. PIXI MESH (GIỮ NGUYÊN DRAW MESH BẰNG GRAPHICS)
  // ------------------------------------------
  if (vfxEvent.pixi_mesh) {
    const payload = vfxEvent.pixi_mesh;
    const durationMs = payload.lifetime_ms || vfxEvent.duration_ms || 500;

    scheduleEffect(() => {
      const points = payload.path_points || [];
      if (points.length < 2) return;

      const graphics = new PIXI.Graphics();
      if (blendMode !== null) graphics.blendMode = blendMode;
      stage.addChild(graphics);

      const stroke = parseColor(payload.color, '#ffffff');
      const strokeWidth = (payload.thickness ?? 0.2) * CELL_SIZE;
      const basePoints = points.map((p: number[]) => ({ x: p[0] * CELL_SIZE, y: p[1] * CELL_SIZE }));

      graphics.moveTo(basePoints[0].x, basePoints[0].y);
      for (let i = 1; i < basePoints.length; i += 1) {
        graphics.lineTo(basePoints[i].x, basePoints[i].y);
      }
      graphics.stroke({ width: strokeWidth, color: stroke.color, alpha: stroke.alpha });

      handleLifecycle(graphics, payload, simulationSpeed, stage);
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 6. PIXI FILTERS (TÍCH HỢP SHOCKWAVE THẬT)
  // ------------------------------------------
  if (vfxEvent.pixi_filters) {
    const payload = vfxEvent.pixi_filters;
    const durationMs = payload.duration_ms || 1000;

    scheduleEffect(() => {
      const targetId = payload.target_id || vfxEvent.target_id;
      if (!targetId || targetId === 'GLOBAL') return;

      const pos = resolveTargetPosition(targetId);

      if (payload.filter_type === 'shockwave') {
        const shockwave = new ShockwaveFilter(
          { x: pos.x * CELL_SIZE, y: pos.y * CELL_SIZE },
          {
            amplitude: (payload.amplitude || 3) * 10,
            wavelength: (payload.wavelength || 1.5) * CELL_SIZE,
            brightness: 1,
            radius: -1 // Bắt đầu từ 0
          }
        );
        
        stage.filters = [...(stage.filters || []), shockwave];

        // Animate hiệu ứng lan tỏa
        gsap.to(shockwave, {
          time: (durationMs / 1000) / simulationSpeed,
          radius: (payload.radius || 10) * CELL_SIZE,
          duration: (durationMs / 1000) / simulationSpeed,
          ease: 'power2.out',
          onComplete: () => {
            if (stage.filters) {
              stage.filters = stage.filters.filter(f => f !== shockwave);
            }
          }
        });
      }
    }, sequence, durationMs, simulationSpeed);
  }
};