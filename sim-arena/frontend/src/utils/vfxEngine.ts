import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import { useMainStore } from '../store/useMainStore';

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
  return { x: 10, y: 10 };
};

const parseColor = (value?: string, fallback = '#ffffff') => {
  const raw = (value ?? fallback).trim();
  if (!raw) return { color: 0xffffff, alpha: 1 };

  const rgbMatch = raw.match(/rgba?\s*\(([^)]+)\)/i);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(',').map((v) => v.trim());
    const r = Math.max(0, Math.min(255, parseInt(parts[0] || '0', 10)));
    const g = Math.max(0, Math.min(255, parseInt(parts[1] || '0', 10)));
    const b = Math.max(0, Math.min(255, parseInt(parts[2] || '0', 10)));
    const a = parts.length > 3 ? Math.max(0, Math.min(1, parseFloat(parts[3] || '1'))) : 1;
    return { color: (r << 16) | (g << 8) | b, alpha: a };
  }

  try {
    return { color: new PIXI.Color(raw).toNumber(), alpha: 1 };
  } catch {
    return { color: 0xffffff, alpha: 1 };
  }
};

const resolveBlendMode = (mode?: string) => {
  switch ((mode || '').toUpperCase()) {
    case 'ADD':
      return 'add';
    case 'MULTIPLY':
      return 'multiply';
    case 'SCREEN':
      return 'screen';
    case 'OVERLAY':
      return 'overlay';
    case 'NORMAL':
      return 'normal';
    default:
      return null;
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

    if (delayMs > 0) {
      trackTimeout(setTimeout(start, delayMs / simulationSpeed));
    } else {
      start();
    }
    return;
  }

  const totalRuns = repeat + 1;
  for (let i = 0; i < totalRuns; i += 1) {
    const whenMs = delayMs + i * intervalMs;
    trackTimeout(setTimeout(runOnce, whenMs / simulationSpeed));
  }
};

// Hàm tiện ích xử lý vòng đời: Mờ dần khi bắt đầu (Fade In) và tan biến (Fade Out)
const handleLifecycle = (
  obj: PIXI.Container | PIXI.Sprite | PIXI.Graphics | PIXI.Text | PIXI.Container, 
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

  console.log('VFX Engine (PixiJS + GSAP) Initialized with Grid Cell standard');
};

export const clearAllVFX = () => {
  clearTracked();
  if (appBg) appBg.stage.removeChildren();
  if (appFg) appFg.stage.removeChildren();
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

  if (vfxEvent.gsap_tween) {
    const { 
      target_id, x, y, from_x, from_y, 
      scale_x, scale_y, scale, opacity, rotation_deg, 
      duration_ms, ease, local_shake_x, local_shake_y, 
      repeat, yoyo 
    } = vfxEvent.gsap_tween;
    
    const domTarget = target_id === 'GLOBAL' ? '#arena-board' : `#char-${target_id || vfxEvent.target_id}`;
    const duration = ((duration_ms ?? 500) / 1000) / simulationSpeed;

    // Xử lý rung lắc cục bộ (Shake)
    if (local_shake_x || local_shake_y) {
      const sx = (local_shake_x || 0) * CELL_SIZE;
      const sy = (local_shake_y || 0) * CELL_SIZE;
      const shakeCount = repeat !== undefined ? repeat : Math.max(1, Math.floor((duration * 1000) / 50));
      
      gsap.fromTo(domTarget,
        { x: -sx, y: -sy },
        {
          x: sx,
          y: sy,
          duration: 0.05 / simulationSpeed,
          repeat: shakeCount,
          yoyo: true,
          ease: 'none',
          clearProps: 'x,y'
        }
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

    if (sequence.staggerMs) {
      toConfig.repeatDelay = (sequence.staggerMs / 1000) / simulationSpeed;
    }

    if (scale !== undefined) {
      toConfig.scale = scale;
    } else {
      if (scale_x !== undefined) toConfig.scaleX = scale_x;
      if (scale_y !== undefined) toConfig.scaleY = scale_y;
    }
    
    if (opacity !== undefined) toConfig.opacity = opacity;
    if (rotation_deg !== undefined) toConfig.rotation = rotation_deg;
    if (x !== undefined) toConfig.left = `${x * 5}%`;
    if (y !== undefined) toConfig.top = `${y * 5}%`;

    if (from_x !== undefined && from_y !== undefined) {
      gsap.fromTo(domTarget, { left: `${from_x * 5}%`, top: `${from_y * 5}%` }, toConfig);
    } else {
      gsap.to(domTarget, toConfig);
    }
  }

  if (vfxEvent.pixi_graphics) {
    const payload = vfxEvent.pixi_graphics;
    const durationMs = payload.lifetime_ms || vfxEvent.duration_ms || 1000;

    scheduleEffect(() => {
      const graphics = new PIXI.Graphics();
      if (blendMode !== null) graphics.blendMode = blendMode;

      const points = payload.points || [];
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const p0 = points[0] ? { x: points[0][0], y: points[0][1] } : fallbackPos;

      const fill = payload.fill_color ? parseColor(payload.fill_color) : null;
      const stroke = payload.line_color ? parseColor(payload.line_color) : null;
      const fillAlpha = fill ? (payload.fill_alpha ?? 1) * fill.alpha : 0;
      const strokeAlpha = stroke ? (payload.line_alpha ?? 1) * stroke.alpha : 0;
      const strokeWidth = (payload.line_width ?? (stroke ? 0.05 : 0)) * CELL_SIZE;

      const applyFillStroke = (allowFill: boolean) => {
        if (allowFill && fill) {
          graphics.fill({ color: fill.color, alpha: fillAlpha });
        }
        if (stroke && strokeWidth > 0) {
          graphics.stroke({ width: strokeWidth, color: stroke.color, alpha: strokeAlpha });
        }
      };

      if (payload.shape_type === 'line') {
        const linePoints = points.length >= 2 ? points : [[p0.x, p0.y], [p0.x + 1, p0.y]];
        graphics.moveTo(linePoints[0][0] * CELL_SIZE, linePoints[0][1] * CELL_SIZE);
        for (let i = 1; i < linePoints.length; i += 1) {
          graphics.lineTo(linePoints[i][0] * CELL_SIZE, linePoints[i][1] * CELL_SIZE);
        }
        applyFillStroke(false);
      } else if (payload.shape_type === 'polygon') {
        if (points.length >= 3) {
          const flatPoints = points.flatMap((p: number[]) => [p[0] * CELL_SIZE, p[1] * CELL_SIZE]);
          const graphicsAny = graphics as any;
          if (typeof graphicsAny.poly === 'function') {
            graphicsAny.poly(flatPoints);
          } else if (typeof graphicsAny.drawPolygon === 'function') {
            graphicsAny.drawPolygon(flatPoints);
          }
          applyFillStroke(true);
        }
      } else if (payload.shape_type === 'rect') {
        let rectX = p0.x;
        let rectY = p0.y;
        let rectW = payload.width ?? 1;
        let rectH = payload.height ?? 1;

        if (points.length >= 2) {
          const p1 = points[1];
          rectX = Math.min(p0.x, p1[0]);
          rectY = Math.min(p0.y, p1[1]);
          rectW = Math.max(Math.abs(p1[0] - p0.x), rectW);
          rectH = Math.max(Math.abs(p1[1] - p0.y), rectH);
        }
        graphics.rect(rectX * CELL_SIZE, rectY * CELL_SIZE, rectW * CELL_SIZE, rectH * CELL_SIZE);
        applyFillStroke(true);
      } else {
        const radius = payload.radius ?? 1;
        graphics.circle(p0.x * CELL_SIZE, p0.y * CELL_SIZE, radius * CELL_SIZE);
        applyFillStroke(true);
      }

      graphics.alpha = (fillAlpha > 0 ? fillAlpha : strokeAlpha > 0 ? strokeAlpha : 1);
      stage.addChild(graphics);
      
      handleLifecycle(graphics, payload, simulationSpeed, stage);

    }, sequence, durationMs, simulationSpeed);
  }

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
      const floatDuration = (payload.float_duration_ms || durationMs) / simulationSpeed;

      gsap.to(textObj, {
        y: textObj.y + floatY,
        duration: floatDuration / 1000,
        ease: 'power2.out'
      });

      handleLifecycle(textObj, payload, simulationSpeed, stage);

    }, sequence, durationMs, simulationSpeed);
  }

  if (vfxEvent.pixi_particles) {
    const payload = vfxEvent.pixi_particles;
    const durationMs = payload.emit_duration_ms || payload.lifetime_ms || 1000;

    scheduleEffect(() => {
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const originX = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      const originY = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;
      
      const particleLifetimeMs = payload.particle_lifetime_ms || payload.lifetime_ms || 1000;
      const particleLifetimeSec = (particleLifetimeMs / 1000) / simulationSpeed;

      const startColor = parseColor(payload.start_color, '#ffffff');
      const endColor = parseColor(payload.end_color ?? payload.start_color, payload.start_color || '#ffffff');
      const endAlpha = payload.end_color ? endColor.alpha : 0;

      const container = new PIXI.Container();
      container.x = originX;
      container.y = originY;
      if (blendMode !== null) container.blendMode = blendMode;
      stage.addChild(container);

      const particleGraphic = new PIXI.Graphics();
      particleGraphic.circle(0, 0, 5);
      particleGraphic.fill({ color: 0xffffff });
      const particleTexture = targetApp.renderer.generateTexture(particleGraphic);

      const spread = payload.spread_angle ?? (payload.emitter_type === 'fountain' ? 45 : 360);
      const baseAngle = payload.emitter_type === 'fountain' ? -90 : 0;
      const speedPx = (payload.speed ?? 2) * CELL_SIZE;
      const startScale = payload.start_scale ?? 1;
      const endScale = payload.end_scale ?? 0.1;
      
      const spawnWidth = (payload.spawn_width || 0) * CELL_SIZE;
      const spawnHeight = (payload.spawn_height || 0) * CELL_SIZE;

      const actualLifeTimeMs = particleLifetimeSec * 1000;
      const startR = (startColor.color >> 16) & 255;
      const startG = (startColor.color >> 8) & 255;
      const startB = startColor.color & 255;
      const endR = (endColor.color >> 16) & 255;
      const endG = (endColor.color >> 8) & 255;
      const endB = endColor.color & 255;

      const activeParticles: any[] = [];
      const particleTicker = trackTicker(new PIXI.Ticker());

      particleTicker.add((tickerObj) => {
        const deltaMs = (tickerObj as any).deltaMS ?? (tickerObj as any).deltaTime * 16.6667;
        for (let i = activeParticles.length - 1; i >= 0; i--) {
          const p = activeParticles[i];
          p.elapsed += deltaMs;
          let ratio = p.elapsed / actualLifeTimeMs;
          if (ratio >= 1) {
            if (!p.sprite.destroyed) {
              container.removeChild(p.sprite);
              p.sprite.destroy();
            }
            activeParticles.splice(i, 1);
            continue;
          }

          const easeRatio = 1 - Math.pow(1 - ratio, 2);

          p.sprite.x = p.startX + p.dx * easeRatio;
          p.sprite.y = p.startY + p.dy * easeRatio;
          
          p.sprite.scale.set(startScale + (endScale - startScale) * easeRatio);
          p.sprite.alpha = startColor.alpha + (endAlpha - startColor.alpha) * ratio;

          if (startColor.color !== endColor.color) {
            const r = Math.round(startR + (endR - startR) * ratio);
            const g = Math.round(startG + (endG - startG) * ratio);
            const b = Math.round(startB + (endB - startB) * ratio);
            p.sprite.tint = (r << 16) | (g << 8) | b;
          }
        }
      });
      particleTicker.start();

      const spawnParticle = (angleDeg: number, offsetX: number, offsetY: number) => {
        const sprite = new PIXI.Sprite(particleTexture);
        sprite.anchor.set(0.5);
        sprite.x = offsetX;
        sprite.y = offsetY;
        sprite.scale.set(startScale);
        sprite.alpha = startColor.alpha;
        sprite.tint = startColor.color;
        if (blendMode !== null) sprite.blendMode = blendMode;
        container.addChild(sprite);

        const angleRad = (angleDeg * Math.PI) / 180;
        const dx = Math.cos(angleRad) * speedPx;
        const dy = Math.sin(angleRad) * speedPx;

        activeParticles.push({
          sprite,
          startX: offsetX,
          startY: offsetY,
          dx, dy,
          elapsed: 0
        });
      };

      const spawnBurst = (amount: number) => {
        for (let i = 0; i < amount; i += 1) {
          const angle = baseAngle + (Math.random() - 0.5) * spread;
          const offsetX = (Math.random() - 0.5) * spawnWidth;
          const offsetY = (Math.random() - 0.5) * spawnHeight;
          spawnParticle(angle, offsetX, offsetY);
        }
      };

      // Xử lý logic Emit
      const burstCount = payload.burst_count ?? payload.particle_count ?? 0;
      if (burstCount > 0) {
        spawnBurst(burstCount);
      }

      if (payload.emitter_type === 'stream' || payload.emitter_type === 'fountain' || payload.emit_rate > 0) {
        const intervalMs = 100;
        const rate = payload.emit_rate ?? 10;
        const perTick = Math.max(1, Math.round(rate / (1000 / intervalMs)));
        
        const intervalHandle = trackInterval(setInterval(() => spawnBurst(perTick), intervalMs / simulationSpeed));
        trackTimeout(setTimeout(() => {
          clearInterval(intervalHandle);
        }, durationMs / simulationSpeed));
      }

      // Cleanup hạt sau khi hết vòng đời
      trackTimeout(setTimeout(() => {
        particleTicker.stop();
        particleTicker.destroy();
        activeTickers.delete(particleTicker);
        
        activeParticles.forEach(p => {
          if (!p.sprite.destroyed) p.sprite.destroy();
        });
        
        if (particleTexture) particleTexture.destroy(true);

        if (!container.destroyed) {
          stage.removeChild(container);
          container.destroy();
        }
      }, (durationMs + particleLifetimeMs + 300) / simulationSpeed));
    }, sequence, durationMs, simulationSpeed);
  }

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
      const style = payload.style || 'line';
      const distortion = (payload.distortion_amplitude ?? 0) * CELL_SIZE;
      const animationSpeed = payload.animation_speed ?? 0;

      const basePoints = points.map((p: number[]) => ({ x: p[0] * CELL_SIZE, y: p[1] * CELL_SIZE }));

      if (payload.is_closed_path && basePoints.length > 2) {
        basePoints.push({ ...basePoints[0] });
      }

      const drawLine = (pts: Array<{ x: number; y: number }>) => {
        graphics.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i += 1) {
          graphics.lineTo(pts[i].x, pts[i].y);
        }
      };

      const drawDashed = (pts: Array<{ x: number; y: number }>) => {
        const dash = Math.max(4, strokeWidth * 2);
        const gap = dash;
        for (let i = 0; i < pts.length - 1; i += 1) {
          const start = pts[i];
          const end = pts[i + 1];
          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const steps = Math.max(1, Math.floor(len / (dash + gap)));
          const stepX = dx / steps;
          const stepY = dy / steps;

          for (let s = 0; s < steps; s += 1) {
            const segStartX = start.x + stepX * s;
            const segStartY = start.y + stepY * s;
            const segEndX = segStartX + (stepX * dash) / (dash + gap);
            const segEndY = segStartY + (stepY * dash) / (dash + gap);
            graphics.moveTo(segStartX, segStartY);
            graphics.lineTo(segEndX, segEndY);
          }
        }
      };

      const jitterPoints = () => {
        return basePoints.map((p: { x: number; y: number }, idx: number) => {
          if (idx === 0 || (idx === basePoints.length - 1 && !payload.is_closed_path)) return p;
          const jitterX = (Math.random() * 2 - 1) * distortion;
          const jitterY = (Math.random() * 2 - 1) * distortion;
          return { x: p.x + jitterX, y: p.y + jitterY };
        });
      };

      const render = (pts: Array<{ x: number; y: number }>) => {
        graphics.clear();
        if (style === 'dash_trail') {
          drawDashed(pts);
        } else {
          drawLine(pts);
        }
        graphics.stroke({ width: strokeWidth, color: stroke.color, alpha: stroke.alpha });
      };

      render(distortion > 0 ? jitterPoints() : basePoints);

      let ticker: PIXI.Ticker | null = null;
      if (distortion > 0 && animationSpeed > 0) {
        const intervalMs = Math.max(16, 1000 / (animationSpeed * 10));
        let elapsed = 0;
        ticker = trackTicker(new PIXI.Ticker());
        ticker.add((t) => {
          const deltaMs = (t as any).deltaMS ?? (t as any).deltaTime * 16.6667;
          elapsed += deltaMs;
          if (elapsed >= intervalMs) {
            elapsed = 0;
            render(jitterPoints());
          }
        });
        ticker.start();
      }

      handleLifecycle(graphics, payload, simulationSpeed, stage);

      trackTimeout(setTimeout(() => {
        if (ticker) {
          ticker.stop();
          ticker.destroy();
          activeTickers.delete(ticker);
        }
      }, durationMs / simulationSpeed));

    }, sequence, durationMs, simulationSpeed);
  }

  if (vfxEvent.pixi_filters) {
    const payload = vfxEvent.pixi_filters;
    const durationMs = payload.duration_ms || 1000;

    scheduleEffect(() => {
      const targetId = payload.target_id || vfxEvent.target_id;
      if (!targetId || targetId === 'GLOBAL') return; // Strict Rule: No GLOBAL filters

      const pos = resolveTargetPosition(targetId);
      const filterColor = payload.color || '#ffffff';
      const colorParsed = parseColor(filterColor, '#ffffff');
      const intensity = payload.intensity ?? 1;
      const amplitude = (payload.amplitude ?? 1) * CELL_SIZE;

      const makeRing = (lineWidth = 2, alpha = 0.8) => {
        const ring = new PIXI.Graphics();
        ring.circle(0, 0, amplitude);
        ring.stroke({ width: lineWidth, color: colorParsed.color, alpha });
        ring.x = pos.x * CELL_SIZE;
        ring.y = pos.y * CELL_SIZE;
        if (blendMode !== null) ring.blendMode = blendMode;
        stage.addChild(ring);
        return ring;
      };

      const removeDisplay = (display: PIXI.Graphics) => {
        if (!display.destroyed) {
          stage.removeChild(display);
          display.destroy();
        }
      };

      if (payload.filter_type === 'shockwave') {
        const ring = makeRing(Math.max(2, intensity), 0.9);
        gsap.fromTo(
          ring.scale,
          { x: 0.1, y: 0.1 },
          { x: 1.5, y: 1.5, duration: (durationMs / 1000) / simulationSpeed, ease: 'power2.out' }
        );
        gsap.to(ring, {
          alpha: 0,
          duration: (durationMs / 1000) / simulationSpeed,
          ease: 'power2.out',
          onComplete: () => removeDisplay(ring)
        });
      }
    }, sequence, durationMs, simulationSpeed);
  }
};