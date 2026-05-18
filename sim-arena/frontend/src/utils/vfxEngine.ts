import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { RoughEase } from 'gsap/EasePack';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useMainStore } from '../store/useMainStore';
import * as PixiFilters from 'pixi-filters';

// ==========================================
// 🕵️ TRẠM THU THẬP LOG DEBUG (VFX SPY)
// ==========================================
(window as any).VFX_SPY_LOGS = [];
(window as any).DUMP_SPY = () => {
  const logs = (window as any).VFX_SPY_LOGS;
  console.log("%c📋 DỮ LIỆU RUNTIME GIẢ LẬP (COPY BÊN DƯỚI):", "color: #00ff00; font-size: 16px; font-weight: bold;");
  console.log(JSON.stringify(logs, null, 2));
  console.log(`%cĐã xuất ${logs.length} sự kiện!`, "color: yellow");
};

const clearSpyLogs = () => {
  if (Array.isArray((window as any).VFX_SPY_LOGS)) {
    (window as any).VFX_SPY_LOGS.length = 0;
  }
};
// ==========================================

// Đăng ký RoughEase và MotionPathPlugin để xử lý rung lắc & quỹ đạo cong
gsap.registerPlugin(RoughEase, MotionPathPlugin);
const FILTERS = PixiFilters as Record<string, any>;

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

type VfxDisplay = PIXI.Container | PIXI.Graphics | PIXI.Sprite | PIXI.Text;

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

const vfxRegistry = new Map<string, VfxDisplay>();
const lastVfxByTarget = new Map<string, VfxDisplay>();

const registerVfxObject = (id: string | undefined, targetId: string | undefined, obj: VfxDisplay) => {
  if (id) vfxRegistry.set(id, obj);
  if (targetId) lastVfxByTarget.set(targetId, obj);
};

const unregisterVfxObject = (id: string | undefined, targetId: string | undefined, obj: VfxDisplay) => {
  if (id && vfxRegistry.get(id) === obj) vfxRegistry.delete(id);
  if (targetId && lastVfxByTarget.get(targetId) === obj) lastVfxByTarget.delete(targetId);
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const toNumber = (value: any, fallback = 0) => {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
};

const toPixels = (value: any, fallback = 0) => toNumber(value, fallback) * CELL_SIZE;
const toRadians = (deg: number) => (deg * Math.PI) / 180;

const normalizePoints = (raw: any, offsetX: number, offsetY: number, scale: number) => {
  const points: Array<{ x: number; y: number }> = [];
  if (!Array.isArray(raw) || raw.length === 0) return points;

  if (Array.isArray(raw[0])) {
    raw.forEach((p) => {
      if (!Array.isArray(p) || p.length < 2) return;
      points.push({
        x: (offsetX + toNumber(p[0], 0)) * scale,
        y: (offsetY + toNumber(p[1], 0)) * scale
      });
    });
    return points;
  }

  for (let i = 0; i < raw.length - 1; i += 2) {
    points.push({
      x: (offsetX + toNumber(raw[i], 0)) * scale,
      y: (offsetY + toNumber(raw[i + 1], 0)) * scale
    });
  }
  return points;
};

const resamplePath = (points: Array<{ x: number; y: number }>, spacing: number) => {
  if (points.length < 2 || spacing <= 0) return points;
  const resampled: Array<{ x: number; y: number }> = [points[0]];
  let accumulated = 0;

  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const dx = curr.x - prev.x;
    const dy = curr.y - prev.y;
    const dist = Math.hypot(dx, dy);
    if (dist === 0) continue;

    let t = (spacing - accumulated) / dist;
    while (t <= 1) {
      resampled.push({ x: prev.x + dx * t, y: prev.y + dy * t });
      t += spacing / dist;
    }
    accumulated = (accumulated + dist) % spacing;
  }

  if (resampled.length < 2) resampled.push(points[points.length - 1]);
  return resampled;
};

const smoothPath = (points: Array<{ x: number; y: number }>, segments: number, tension: number) => {
  if (points.length < 3 || segments <= 0) return points;
  const t = clamp(tension, 0, 1);
  const result: Array<{ x: number; y: number }> = [];

  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const startJ = i === 0 ? 0 : 1;

    for (let j = startJ; j <= segments; j += 1) {
      const s = j / segments;
      const s2 = s * s;
      const s3 = s2 * s;
      const a0 = -t * s3 + 2 * t * s2 - t * s;
      const a1 = (2 - t) * s3 + (t - 3) * s2 + 1;
      const a2 = (t - 2) * s3 + (3 - 2 * t) * s2 + t * s;
      const a3 = t * s3 - t * s2;
      result.push({
        x: a0 * p0.x + a1 * p1.x + a2 * p2.x + a3 * p3.x,
        y: a0 * p0.y + a1 * p1.y + a2 * p2.y + a3 * p3.y
      });
    }
  }

  return result;
};

const createRng = (seed: number) => {
  let t = seed >>> 0;
  return () => {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
};

const applyLightningJitter = (
  points: Array<{ x: number; y: number }>,
  amplitude: number,
  seed: number,
  time: number,
  frequency: number
) => {
  if (points.length < 2 || amplitude <= 0) return points;
  const rng = createRng(Math.floor(seed + time * frequency * 1000));
  return points.map((point, index) => {
    if (index === 0 || index === points.length - 1) return point;
    const prev = points[index - 1];
    const next = points[index + 1];
    const dx = next.x - prev.x;
    const dy = next.y - prev.y;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len;
    const ny = dx / len;
    const jitter = (rng() * 2 - 1) * amplitude;
    return { x: point.x + nx * jitter, y: point.y + ny * jitter };
  });
};

const applyDomBlink = (target: gsap.TweenTarget, spec: any, simulationSpeed: number) => {
  if (!spec) return null;
  const cfg = typeof spec === 'object' ? spec : {};
  const intervalMs = Math.max(16, toNumber(cfg.interval_ms ?? cfg.rate_ms ?? cfg.speed_ms ?? 80, 80));
  const minOpacity = clamp(toNumber(cfg.min_opacity ?? cfg.min_alpha ?? 0.1, 0.1), 0, 1);
  const maxOpacity = clamp(toNumber(cfg.max_opacity ?? cfg.max_alpha ?? 1, 1), 0, 1);
  const repeat = cfg.repeat ?? -1;
  const duration = intervalMs / 1000 / simulationSpeed;

  const tween = gsap.to(target, {
    opacity: minOpacity,
    duration,
    repeat,
    yoyo: true,
    ease: cfg.ease || 'none'
  });

  if (cfg.duration_ms) {
    trackTimeout(setTimeout(() => {
      tween.kill();
      gsap.set(target, { opacity: maxOpacity });
    }, cfg.duration_ms / simulationSpeed));
  }

  return () => tween.kill();
};

const applyLocalFlash = (target: { alpha: number }, spec: any, simulationSpeed: number) => {
  if (!spec) return null;
  const cfg = typeof spec === 'object' ? spec : {};
  const intervalMs = Math.max(16, toNumber(cfg.interval_ms ?? cfg.rate_ms ?? cfg.speed_ms ?? 80, 80));
  const minAlpha = clamp(toNumber(cfg.min_alpha ?? cfg.blink_alpha ?? 0.1, 0.1), 0, 1);
  const maxAlpha = clamp(toNumber(cfg.max_alpha ?? target.alpha ?? 1, 1), 0, 1);
  const repeat = cfg.repeat ?? -1;
  const duration = intervalMs / 1000 / simulationSpeed;

  const tween = gsap.to(target, {
    alpha: minAlpha,
    duration,
    repeat,
    yoyo: true,
    ease: cfg.ease || 'none'
  });

  if (cfg.duration_ms) {
    trackTimeout(setTimeout(() => {
      tween.kill();
      target.alpha = maxAlpha;
    }, cfg.duration_ms / simulationSpeed));
  }

  return () => tween.kill();
};

const applyTextEffect = (textObj: PIXI.Text, payload: any, durationMs: number, simulationSpeed: number) => {
  const effectRaw = payload.text_effect || (payload.text_scramble ? 'scramble' : payload.typewriter ? 'typewriter' : '');
  const effect = String(effectRaw || '').toLowerCase();
  if (!effect) return null;

  const content = String(payload.content ?? '');
  const totalMs = toNumber(
    payload.text_effect_duration_ms ?? payload.typewriter_duration_ms ?? payload.text_scramble_duration_ms ?? durationMs,
    durationMs
  );
  const scrambleChars = String(payload.scramble_chars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  const cursorChar = String(payload.cursor_char ?? payload.typewriter_cursor ?? '');
  const state = { progress: 0 };

  if (effect === 'typewriter') textObj.text = '';

  const tween = gsap.to(state, {
    progress: 1,
    duration: totalMs / 1000 / simulationSpeed,
    ease: payload.text_effect_ease || 'none',
    onUpdate: () => {
      const revealCount = Math.floor(state.progress * content.length);
      if (effect === 'scramble') {
        const scrambleCount = Math.max(0, content.length - revealCount);
        let scrambled = '';
        for (let i = 0; i < scrambleCount; i += 1) {
          scrambled += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
        textObj.text = content.slice(0, revealCount) + scrambled;
      } else {
        const cursor = revealCount < content.length ? cursorChar : '';
        textObj.text = content.slice(0, revealCount) + cursor;
      }
    },
    onComplete: () => {
      textObj.text = content;
    }
  });

  return () => tween.kill();
};

const drawSvgPath = (graphics: PIXI.Graphics, svgPath?: string) => {
  if (!svgPath) return false;
  const svgFn = (graphics as any).svg;
  if (typeof svgFn === 'function') {
    svgFn.call(graphics, svgPath);
    return true;
  }
  const GraphicsPath = (PIXI as any).GraphicsPath;
  if (GraphicsPath) {
    graphics.path(new GraphicsPath(svgPath));
    return true;
  }
  return false;
};

const normalizeFilterSpecs = (payload: any) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.filters)) return payload.filters;
  if (payload?.filter_type || payload?.type) return [payload];
  return [];
};

const resolveFilterTarget = (
  payload: any,
  stage: PIXI.Container,
  fallbackPos: { x: number; y: number },
  defaultTargetId?: string
) => {
  const targetVfxId = payload.target_vfx_id || payload.vfx_target_id || payload.attach_vfx_id;
  const targetId = payload.target_id || defaultTargetId;
  let target: VfxDisplay | undefined;

  if (targetVfxId) target = vfxRegistry.get(String(targetVfxId));
  if (!target && targetId) target = lastVfxByTarget.get(String(targetId));

  let owned = false;
  if (!target) {
    const container = new PIXI.Container();
    const originX = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
    const originY = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;
    container.position.set(originX, originY);
    stage.addChild(container);
    target = container;
    owned = true;

    const shapePayload = payload.shape || payload;
    const shapeType = String(shapePayload.shape_type || shapePayload.type || '').toLowerCase();
    const hasShape = !!(shapePayload.svg_path || shapePayload.points || shapePayload.radius || shapePayload.width || shapePayload.height || shapeType);
    if (hasShape) {
      const g = new PIXI.Graphics();
      if (shapeType === 'svg') {
        drawSvgPath(g, shapePayload.svg_path || shapePayload.path || shapePayload.d);
      } else if (shapeType === 'rect' || shapeType === 'rectangle') {
        const w = toPixels(shapePayload.width ?? 1, 1);
        const h = toPixels(shapePayload.height ?? 1, 1);
        g.rect(-w / 2, -h / 2, w, h);
      } else if (shapeType === 'ellipse') {
        const w = toPixels(shapePayload.width ?? 1, 1) / 2;
        const h = toPixels(shapePayload.height ?? 1, 1) / 2;
        g.ellipse(0, 0, w, h);
      } else if (shapeType === 'line' || shapeType === 'path' || shapeType === 'polyline') {
        const pts = normalizePoints(shapePayload.points || shapePayload.path_points || [], 0, 0, CELL_SIZE);
        if (pts.length > 0) {
          g.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i += 1) g.lineTo(pts[i].x, pts[i].y);
        }
      } else if (shapeType === 'polygon') {
        const pts = normalizePoints(shapePayload.points || shapePayload.path_points || [], 0, 0, CELL_SIZE);
        if (pts.length > 0) {
          g.moveTo(pts[0].x, pts[0].y);
          for (let i = 1; i < pts.length; i += 1) g.lineTo(pts[i].x, pts[i].y);
          g.closePath();
        }
      } else {
        const r = toPixels(shapePayload.radius ?? 0.5, 0.5);
        g.circle(0, 0, r);
      }

      const fill = shapePayload.fill_color ? parseColor(shapePayload.fill_color) : parseColor(shapePayload.color, '#ffffff');
      const fillAlpha = shapePayload.fill_alpha !== undefined ? shapePayload.fill_alpha * fill.alpha : fill.alpha;
      if (fill) g.fill({ color: fill.color, alpha: fillAlpha });

      const stroke = shapePayload.line_color ? parseColor(shapePayload.line_color) : null;
      const strokeWidth = toPixels(shapePayload.line_width ?? shapePayload.stroke_width ?? 0, 0);
      if (stroke && strokeWidth > 0) g.stroke({ width: strokeWidth, color: stroke.color, alpha: stroke.alpha });

      container.addChild(g);
    }
  }

  return { target, owned };
};

const applyFilterProps = (filter: any, props?: Record<string, any>) => {
  if (!props) return;
  Object.entries(props).forEach(([key, value]) => {
    if (key in filter) filter[key] = value;
  });
};

const createFilterInstance = (name: string, args?: any[], options?: any) => {
  const Ctor = FILTERS[name];
  if (!Ctor) return null;
  try {
    if (options !== undefined) return new Ctor(options);
    if (args && args.length) return new Ctor(...args);
    return new Ctor();
  } catch {
    try {
      return new Ctor();
    } catch {
      return null;
    }
  }
};

const applyColorMatrix = (filter: PIXI.ColorMatrixFilter, spec: any, modeHint?: string) => {
  const mode = String(spec.mode || spec.color_matrix_mode || modeHint || '').toLowerCase();
  filter.reset();

  if (Array.isArray(spec.matrix) && spec.matrix.length === 20) {
    filter.matrix = spec.matrix;
    return;
  }

  const intensity = toNumber(spec.intensity ?? 1, 1);
  if (mode === 'grayscale' || mode === 'grey' || mode === 'desaturate') filter.blackAndWhite(true);
  if (mode === 'invert' || mode === 'negative') filter.negative(true);
  if (mode === 'sepia') filter.sepia(true);
  if (mode === 'technicolor') filter.technicolor(true);
  if (mode === 'polaroid') filter.polaroid(true);
  if (mode === 'kodachrome') filter.kodachrome(true);
  if (mode === 'predator') filter.predator(intensity, true);

  if (spec.hue !== undefined) filter.hue(toNumber(spec.hue, 0) * intensity, true);
  if (spec.saturate !== undefined) filter.saturate(toNumber(spec.saturate, 1) * intensity, true);
  if (spec.brightness !== undefined) filter.brightness(toNumber(spec.brightness, 1) * intensity, true);
  if (spec.contrast !== undefined) filter.contrast(toNumber(spec.contrast, 1) * intensity, true);
  if (spec.tint) {
    const tint = parseColor(spec.tint);
    filter.tint(tint.color, true);
  }
};

const createFilterFromSpec = (spec: any, center: PIXI.Point) => {
  const type = String(spec.filter_type || spec.type || '').toLowerCase();
  switch (type) {
    case 'pixelate': {
      const size = toPixels(spec.pixel_size ?? spec.size ?? 0.15, 0.15);
      const filter = createFilterInstance('PixelateFilter', [size]);
      if (filter) {
        if ('size' in filter) filter.size = size;
        if ('pixelSize' in filter) filter.pixelSize = size;
      }
      return filter;
    }
    case 'rgb_split':
    case 'rgb':
    case 'chromatic_aberration': {
      const filter = createFilterInstance('RGBSplitFilter');
      if (filter) {
        const offset = toPixels(spec.offset ?? spec.intensity ?? 0.1, 0.1);
        const rx = toPixels(spec.red_offset_x ?? offset, offset);
        const ry = toPixels(spec.red_offset_y ?? 0, 0);
        const gx = toPixels(spec.green_offset_x ?? -offset, -offset);
        const gy = toPixels(spec.green_offset_y ?? 0, 0);
        const bx = toPixels(spec.blue_offset_x ?? offset, offset);
        const by = toPixels(spec.blue_offset_y ?? 0, 0);
        if ('red' in filter) filter.red = new PIXI.Point(rx, ry);
        if ('green' in filter) filter.green = new PIXI.Point(gx, gy);
        if ('blue' in filter) filter.blue = new PIXI.Point(bx, by);
      }
      return filter;
    }
    case 'glitch': {
      const filter = createFilterInstance('GlitchFilter');
      if (filter) {
        const slices = Math.max(1, Math.floor(spec.slices ?? 8));
        if ('slices' in filter) filter.slices = slices;
        applyFilterProps(filter, spec.props);
      }
      return filter;
    }
    case 'glow': {
      const color = parseColor(spec.color ?? '#ffffff').color;
      const filter = createFilterInstance('GlowFilter', [{
        distance: toPixels(spec.distance ?? 0.4, 0.4),
        outerStrength: toNumber(spec.outer_strength ?? 2, 2),
        innerStrength: toNumber(spec.inner_strength ?? 0, 0),
        color,
        quality: toNumber(spec.quality ?? 0.5, 0.5),
        knockout: !!spec.knockout
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'bloom':
    case 'advanced_bloom': {
      const CtorName = FILTERS.AdvancedBloomFilter ? 'AdvancedBloomFilter' : 'BloomFilter';
      const filter = createFilterInstance(CtorName, [{
        threshold: toNumber(spec.threshold ?? 0.5, 0.5),
        bloomScale: toNumber(spec.bloom_scale ?? 1, 1),
        brightness: toNumber(spec.brightness ?? 1, 1),
        blur: toNumber(spec.blur ?? 4, 4),
        quality: toNumber(spec.quality ?? 0.5, 0.5)
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'outline': {
      const color = parseColor(spec.color ?? '#ffffff').color;
      const filter = createFilterInstance('OutlineFilter', [toPixels(spec.thickness ?? 0.1, 0.1), color]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'drop_shadow':
    case 'dropshadow': {
      const color = parseColor(spec.color ?? '#000000').color;
      const filter = createFilterInstance('DropShadowFilter', [{
        distance: toPixels(spec.distance ?? 0.2, 0.2),
        rotation: toRadians(toNumber(spec.rotation_deg ?? 45, 45)),
        color,
        alpha: toNumber(spec.alpha ?? 0.8, 0.8),
        blur: toPixels(spec.blur ?? 0.1, 0.1),
        quality: toNumber(spec.quality ?? 0.5, 0.5),
        shadowOnly: !!spec.shadow_only
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'kawase_blur': {
      const filter = createFilterInstance('KawaseBlurFilter', [toPixels(spec.blur ?? 0.15, 0.15), Math.max(1, Math.floor(spec.quality ?? 4))]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'zoom_blur': {
      const filter = createFilterInstance('ZoomBlurFilter', [{
        strength: toNumber(spec.strength ?? 0.1, 0.1),
        center: spec.center ? new PIXI.Point(spec.center.x, spec.center.y) : center
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'motion_blur': {
      const filter = createFilterInstance('MotionBlurFilter');
      if (filter) {
        if ('velocity' in filter) filter.velocity = { x: toPixels(spec.velocity_x ?? 0, 0), y: toPixels(spec.velocity_y ?? 0, 0) };
        applyFilterProps(filter, spec.props);
      }
      return filter;
    }
    case 'bulge_pinch': {
      const filter = createFilterInstance('BulgePinchFilter', [{
        radius: toPixels(spec.radius ?? 0.6, 0.6),
        strength: toNumber(spec.strength ?? 0.5, 0.5),
        center
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'twist': {
      const filter = createFilterInstance('TwistFilter', [{
        radius: toPixels(spec.radius ?? 0.6, 0.6),
        angle: toRadians(toNumber(spec.angle_deg ?? 25, 25)),
        offset: center
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'old_film': {
      const filter = createFilterInstance('OldFilmFilter');
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'noise': {
      const filter = createFilterInstance('NoiseFilter', [toNumber(spec.noise ?? 0.2, 0.2)]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'crt': {
      const filter = createFilterInstance('CRTFilter');
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'shockwave':
    case 'wave': {
      const filter = createFilterInstance('ShockwaveFilter', [{
        center: { x: center.x, y: center.y },
        amplitude: toNumber(spec.amplitude ?? 0.5, 0.5) * (spec.intensity || 1) * 10,
        wavelength: toPixels(spec.wavelength ?? 0.3, 0.3),
        brightness: toNumber(spec.brightness ?? 1, 1),
        radius: -1
      }]);
      if (filter) applyFilterProps(filter, spec.props);
      return filter;
    }
    case 'color_matrix':
    case 'grayscale':
    case 'invert':
    case 'sepia': {
      const filter = new PIXI.ColorMatrixFilter();
      applyColorMatrix(filter, spec, type);
      return filter;
    }
    case 'blur':
    case 'gaussian_blur': {
      const filter = new PIXI.BlurFilter();
      filter.blur = toPixels(spec.blur ?? spec.intensity ?? 0.15, 0.15);
      return filter;
    }
    default: {
      const filter = new PIXI.ColorMatrixFilter();
      applyColorMatrix(filter, spec, '');
      return filter;
    }
  }
};

const applyFilterTween = (
  filter: any,
  spec: any,
  durationMs: number,
  simulationSpeed: number
) => {
  const type = String(spec.filter_type || spec.type || '').toLowerCase();
  if (type === 'shockwave' || type === 'wave') {
    const targetRadius = toPixels(spec.radius ?? 4, 4);
    const duration = (durationMs / 1000) / simulationSpeed;
    return gsap.to(filter, {
      time: duration,
      radius: targetRadius,
      duration,
      ease: spec.ease || 'power2.out'
    });
  }

  const tweenSpec = spec.tween || spec.animate;
  const toVars = tweenSpec?.to || spec.animate_to || spec.to;
  const fromVars = tweenSpec?.from || spec.animate_from || spec.from;
  if (!toVars) return null;

  const duration = toNumber(tweenSpec?.duration_ms ?? spec.duration_ms ?? durationMs, durationMs) / 1000 / simulationSpeed;
  if (fromVars) gsap.set(filter, fromVars);
  return gsap.to(filter, {
    ...toVars,
    duration,
    ease: tweenSpec?.ease || spec.ease || 'power1.inOut',
    yoyo: tweenSpec?.yoyo || false,
    repeat: tweenSpec?.repeat ?? 0
  });
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
    // 🚀 FIX LỆCH TÂM: Cộng thêm 0.5 để gốc toạ độ PixiJS chỉ thẳng vào giữa ô lưới của nhân vật
    return { x: targetChar.position.x + 0.5, y: targetChar.position.y + 0.5 };
  }
  return { x: 10.5, y: 10.5 }; // Fallback
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
            gsap.killTweensOf(obj);
            if (obj.scale) gsap.killTweensOf(obj.scale);
            stage.removeChild(obj);
            obj.destroy();
          }
          if (onComplete) onComplete();
        }
      });
    } else {
      if (!obj.destroyed) {
        gsap.killTweensOf(obj);
        if (obj.scale) gsap.killTweensOf(obj.scale);
        stage.removeChild(obj);
        obj.destroy();
      }
      if (onComplete) onComplete();
    }
  }, (fadeIn + lifetime) / simulationSpeed));
};

export const initVFXEngine = async (bgCanvasId: string, fgCanvasId: string) => {
  clearSpyLogs(); // 🕵️ Dọn rác log
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
  clearSpyLogs(); // 🕵️ Dọn rác log
  clearTracked();
  pendingQueue.length = 0;
  vfxRegistry.clear();
  lastVfxByTarget.clear();
  if (appBg) {
    appBg.stage.removeChildren();
    appBg.stage.filters = [];
  }
  if (appFg) {
    appFg.stage.removeChildren();
    appFg.stage.filters = [];
  }
  gsap.killTweensOf('*');
  gsap.globalTimeline.clear(); // 🚀 VÁ LỖI: Dọn sạch mọi tween JS chạy ngầm

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

  // 🕵️ BẮT ĐẦU GHI LOG RUNTIME
  const spyEntry = {
    real_time_ms: typeof performance !== 'undefined' ? performance.now() : Date.now(),
    target_id: vfxEvent.target_id || 'GLOBAL',
    speed: simulationSpeed,
    resolved_position: resolveTargetPosition(vfxEvent.target_id),
    blend_mode_raw: vfxEvent.blend_mode,
    blend_mode_resolved: resolveBlendMode(vfxEvent.blend_mode?.mode || vfxEvent.blend_mode),
    active_effects: [] as string[],
    raw_payload: JSON.parse(JSON.stringify(vfxEvent))
  };

  if (vfxEvent.gsap_tween) spyEntry.active_effects.push('gsap_tween');
  if (vfxEvent.pixi_text) spyEntry.active_effects.push('pixi_text');
  if (vfxEvent.pixi_particles) spyEntry.active_effects.push('pixi_particles');
  if (vfxEvent.pixi_mesh) spyEntry.active_effects.push('pixi_mesh');
  if (vfxEvent.pixi_graphics) spyEntry.active_effects.push('pixi_graphics');
  if (vfxEvent.pixi_filters) spyEntry.active_effects.push('pixi_filters');

  (window as any).VFX_SPY_LOGS.push(spyEntry);
  // 🕵️ KẾT THÚC GHI LOG

  const targetApp = vfxEvent.canvas_layer?.layer === 'bg' ? appBg : appFg;
  const stage = targetApp.stage;
  const sequence = normalizeSequence(vfxEvent.timeline_sequence);
  const blendMode = spyEntry.blend_mode_resolved; // Lấy luôn từ biến spy cho nhất quán

  // ------------------------------------------
  // 1. GSAP TWEEN
  // ------------------------------------------
  if (vfxEvent.gsap_tween) {
    try {
      const {
      target_id, x, y, target_x, target_y, from_x, from_y, offset_x, offset_y, motion_path_points,
      scale_x, scale_y, skew_x, skew_y, transform_origin, opacity, rotation_deg, color_tint, tint_alpha,
      duration_ms, delay_ms, ease, local_shake_x, local_shake_y,
      repeat, yoyo
    } = vfxEvent.gsap_tween;

    const isGlobal = target_id === 'GLOBAL';
    const domTarget = isGlobal ? '#arena-board' : `#char-${target_id || vfxEvent.target_id}`;
    const duration = ((duration_ms ?? 500) / 1000) / simulationSpeed;
    
    // 🚀 FIX CỐT LÕI: Đơn vị % để dịch chuyển mượt mà trên Responsive
    // 1 ô lưới = 100% kích thước nhân vật HOẶC 5% kích thước của toàn bản đồ
    const unitPercent = isGlobal ? 5 : 100;

    // 1. Setup tọa độ xuất phát Tuyệt đối
    if (from_x !== undefined && from_y !== undefined) {
      let fX = from_x; if (offset_x) fX += offset_x;
      let fY = from_y; if (offset_y) fY += offset_y;
      gsap.set(domTarget, { left: `${fX * 5}%`, top: `${fY * 5}%` });
    }

    // 2. Rung lắc bằng Percent để chuẩn xác trên mọi kích thước màn hình
    if (local_shake_x || local_shake_y) {
      const sx = (local_shake_x || 0) * unitPercent;
      const sy = (local_shake_y || 0) * unitPercent;
      const shakeCount = repeat !== undefined ? repeat : Math.max(1, Math.floor((duration * 1000) / 50));
      gsap.fromTo(domTarget,
        { xPercent: -sx, yPercent: -sy },
        { xPercent: sx, yPercent: sy, duration: 0.05 / simulationSpeed, repeat: shakeCount, yoyo: true, ease: 'none', clearProps: 'transform' }
      );
    }

    const specificDelay = delay_ms !== undefined ? delay_ms : sequence.delayMs;

    const toConfig: gsap.TweenVars = {
      duration,
      ease: ease || 'power1.out',
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
    
    if (motion_path_points !== undefined && Array.isArray(motion_path_points)) {
      toConfig.motionPath = { 
        path: motion_path_points.map((p: number[]) => ({ left: `${p[0] * 5}%`, top: `${p[1] * 5}%` })),
        curviness: 1.2
      };
    }

    // 🚀 FIX: Dịch chuyển TƯƠNG ĐỐI (VD: AI xuất x: -1.0 để lùi 1 ô)
    if (x !== undefined) {
       toConfig.xPercent = (x + (offset_x || 0)) * unitPercent;
    }
    if (y !== undefined) {
       toConfig.yPercent = (y + (offset_y || 0)) * unitPercent;
    }

    // 🚀 FIX: Dịch chuyển TUYỆT ĐỐI (Được gọi từ hệ thống Move chính)
    if (target_x !== undefined) {
       toConfig.left = `${(target_x + (offset_x || 0)) * 5}%`;
       toConfig.xPercent = 0; // Dọn sạch rác dịch chuyển tương đối trước đó
    }
    if (target_y !== undefined) {
       toConfig.top = `${(target_y + (offset_y || 0)) * 5}%`;
       toConfig.yPercent = 0; // Dọn sạch rác dịch chuyển tương đối trước đó
    }

    // NÂNG CẤP: Xử lý màu sắc có Alpha trong CSS Filter
    if (color_tint && !isGlobal) {
      const parsedTint = parseColor(color_tint);
      const r = (parsedTint.color >> 16) & 255;
      const g = (parsedTint.color >> 8) & 255;
      const b = parsedTint.color & 255;
      const finalAlpha = tint_alpha !== undefined ? tint_alpha : parsedTint.alpha;
      
      toConfig.filter = `drop-shadow(0 0 10px rgba(${r}, ${g}, ${b}, ${finalAlpha})) hue-rotate(45deg) brightness(1.2)`;
      toConfig.clearProps = toConfig.clearProps ? `${toConfig.clearProps},filter` : 'filter';
    }

    gsap.to(domTarget, toConfig);

    const blinkSpec = vfxEvent.gsap_tween.local_flash ?? vfxEvent.gsap_tween.blink;
    if (blinkSpec && !isGlobal) {
      applyDomBlink(domTarget, blinkSpec, simulationSpeed);
    }
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
        stroke: { color: parsedStroke.hexString, width: (payload.stroke_thickness || 0.05) * CELL_SIZE },
        dropShadow: payload.drop_shadow || dropShadowDistanceX > 0 || dropShadowDistanceY > 0,
        dropShadowDistance: Math.max(Math.abs(dropShadowDistanceX), Math.abs(dropShadowDistanceY)),
        dropShadowColor: payload.drop_shadow_color || '#000000',
        dropShadowBlur: payload.drop_shadow_blur || 0,
        letterSpacing: (payload.letter_spacing || 0) * CELL_SIZE,
        align: payload.align || 'center'
      } as any);

      const textObj = new PIXI.Text({ text: String(payload.content), style: textStyle });
      const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
      const vfxId = payload.vfx_id || payload.id || payload.object_id;

      textObj.x = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
      textObj.y = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;
      
      textObj.anchor.set(payload.anchor_x ?? 0.5, payload.anchor_y ?? 0.5);
      if (payload.scale_x !== undefined) textObj.scale.x = payload.scale_x;
      if (payload.scale_y !== undefined) textObj.scale.y = payload.scale_y;

      textObj.alpha = parsedFill.alpha; // Đồng bộ kênh alpha từ parseColor
      if (blendMode !== null) textObj.blendMode = blendMode as any;
      stage.addChild(textObj);
      registerVfxObject(vfxId, vfxEvent.target_id, textObj);

      const floatY = (payload.float_distance_y !== undefined ? payload.float_distance_y : -1) * CELL_SIZE;
      const floatX = (payload.float_distance_x || 0) * CELL_SIZE;
      
      gsap.to(textObj, {
        x: textObj.x + floatX,
        y: textObj.y + floatY,
        duration: (payload.float_duration_ms || durationMs) / 1000 / simulationSpeed,
        ease: payload.float_ease || 'power2.out'
      });

      const cleanupFns: Array<() => void> = [];
      const textEffectCleanup = applyTextEffect(textObj, payload, durationMs, simulationSpeed);
      if (textEffectCleanup) cleanupFns.push(textEffectCleanup);
      const blinkCleanup = applyLocalFlash(textObj, payload.local_flash ?? payload.blink, simulationSpeed);
      if (blinkCleanup) cleanupFns.push(blinkCleanup);

      handleLifecycle(textObj, payload, simulationSpeed, stage, () => {
        cleanupFns.forEach((fn) => fn());
        unregisterVfxObject(vfxId, vfxEvent.target_id, textObj);
      });
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
        const vfxId = payload.vfx_id || payload.id || payload.object_id;
        registerVfxObject(vfxId, vfxEvent.target_id, container);

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
          const shapeType = String(payload.shape_type || payload.shape?.type || 'circle').toLowerCase();
          const svgPath = payload.svg_path || payload.shape?.svg_path || payload.path || payload.d;
          const shapeSizePx = payload.shape_size !== undefined ? payload.shape_size * CELL_SIZE : 4;
          const rectW = payload.shape_width !== undefined ? payload.shape_width * CELL_SIZE : shapeSizePx;
          const rectH = payload.shape_height !== undefined ? payload.shape_height * CELL_SIZE : shapeSizePx;
          const radius = payload.radius !== undefined ? payload.radius * CELL_SIZE : shapeSizePx * 0.5;
          const ellipseW = payload.width !== undefined ? payload.width * CELL_SIZE * 0.5 : rectW * 0.5;
          const ellipseH = payload.height !== undefined ? payload.height * CELL_SIZE * 0.5 : rectH * 0.5;
          const starPoints = Math.max(3, Math.floor(payload.star_points ?? 5));
          const starOuter = payload.outer_radius !== undefined ? payload.outer_radius * CELL_SIZE : radius;
          const starInner = payload.inner_radius !== undefined ? payload.inner_radius * CELL_SIZE : starOuter * 0.45;

          if (shapeType === 'svg') {
            drawSvgPath(p, svgPath);
          } else if (shapeType === 'rect' || shapeType === 'rectangle') {
            p.rect(-rectW / 2, -rectH / 2, rectW, rectH);
          } else if (shapeType === 'ellipse') {
            p.ellipse(0, 0, ellipseW, ellipseH);
          } else if (shapeType === 'polygon') {
            const pts = normalizePoints(payload.points || payload.path_points || [], 0, 0, CELL_SIZE);
            if (pts.length > 0) {
              p.moveTo(pts[0].x, pts[0].y);
              for (let i = 1; i < pts.length; i += 1) p.lineTo(pts[i].x, pts[i].y);
              p.closePath();
            }
          } else if (shapeType === 'line' || shapeType === 'path' || shapeType === 'polyline') {
            const pts = normalizePoints(payload.points || payload.path_points || [], 0, 0, CELL_SIZE);
            if (pts.length > 0) {
              p.moveTo(pts[0].x, pts[0].y);
              for (let i = 1; i < pts.length; i += 1) p.lineTo(pts[i].x, pts[i].y);
            }
          } else if (shapeType === 'star') {
            const step = Math.PI / starPoints;
            p.moveTo(0, -starOuter);
            for (let i = 1; i < starPoints * 2; i += 1) {
              const r = i % 2 === 0 ? starOuter : starInner;
              const angle = -Math.PI / 2 + step * i;
              p.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
            }
            p.closePath();
          } else {
            p.circle(0, 0, radius);
          }

          const fill = payload.fill_color ? parseColor(payload.fill_color) : startColor;
          const fillAlpha = payload.fill_alpha !== undefined ? payload.fill_alpha * fill.alpha : fill.alpha;
          p.fill({ color: fill.color, alpha: fillAlpha });

          if (payload.stroke_color || payload.line_color) {
            const stroke = parseColor(payload.stroke_color || payload.line_color);
            const strokeWidth = payload.line_width !== undefined ? payload.line_width * CELL_SIZE : (payload.stroke_width || 0.02) * CELL_SIZE;
            if (strokeWidth > 0) p.stroke({ width: strokeWidth, color: stroke.color, alpha: stroke.alpha });
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

          const baseShapeScale = toNumber(payload.shape_scale ?? payload.svg_scale ?? 1, 1);
          const scaleVar = payload.start_scale_variance || 0;
          const startScale = Math.max(0.01, (payload.start_scale ?? 1) + (Math.random() * 2 - 1) * scaleVar);
          p.scale.set(baseShapeScale * startScale);

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

          const endScale = (payload.end_scale ?? 0.1) * baseShapeScale;

          // 🚀 VÁ LỖI: Lưu lại tween scale để kiểm soát sinh tử
          const scaleTween = gsap.to(p.scale, {
            x: endScale,
            y: endScale,
            duration: actualLifetime,
            ease: 'power1.out'
          });

          gsap.to(p, {
            x: finalX,
            y: finalY,
            alpha: payload.end_alpha ?? endColor.alpha,
            rotation: targetRotation,
            duration: actualLifetime,
            ease: 'power1.out',
            onComplete: () => {
              scaleTween.kill();
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
            container.children.forEach(child => {
              gsap.killTweensOf(child);
              if (child.scale) gsap.killTweensOf(child.scale);
            });
            gsap.killTweensOf(container);
            if (container.scale) gsap.killTweensOf(container.scale);
            stage.removeChild(container);
            container.destroy({ children: true });
            unregisterVfxObject(vfxId, vfxEvent.target_id, container);
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
        const points = payload.path_points || payload.points || [];
        if (!Array.isArray(points) || points.length < 2) return;

        const graphics = new PIXI.Graphics();
        if (blendMode !== null) graphics.blendMode = blendMode as any;
        const vfxId = payload.vfx_id || payload.id || payload.object_id;
        stage.addChild(graphics);
        registerVfxObject(vfxId, vfxEvent.target_id, graphics);

        const stroke = parseColor(payload.color, '#ffffff');
        const strokeWidth = (payload.thickness ?? 0.2) * CELL_SIZE;
        const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
        const baseX = (payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0);
        const baseY = (payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0);

        let basePoints: Array<{ x: number; y: number }> = normalizePoints(points, baseX, baseY, CELL_SIZE);
        if (basePoints.length < 2) return;

        if (basePoints.length === 2) {
          const segments = Math.max(2, Math.floor(payload.subdivide ?? payload.subdivide_segments ?? 15));
          const newPoints: Array<{ x: number; y: number }> = [];
          for (let i = 0; i <= segments; i += 1) {
            newPoints.push({
              x: basePoints[0].x + (basePoints[1].x - basePoints[0].x) * (i / segments),
              y: basePoints[0].y + (basePoints[1].y - basePoints[0].y) * (i / segments)
            });
          }
          basePoints = newPoints;
        }

        const spacing = payload.point_spacing !== undefined ? payload.point_spacing * CELL_SIZE : 0;
        if (spacing > 0) basePoints = resamplePath(basePoints, spacing);

        const style = String(payload.style || '').toLowerCase();
        const isDashTrail = style === 'dash_trail';
        const useBezier = style === 'bezier' || style === 'curve' || style === 'curved' || payload.curviness !== undefined || payload.bezier === true;
        if (useBezier) {
          const curveSegments = Math.max(1, Math.floor(payload.curve_segments ?? 6));
          const tension = payload.curviness !== undefined ? clamp(payload.curviness, 0, 1) : 0.6;
          basePoints = smoothPath(basePoints, curveSegments, tension);
        }

        const lightning = style === 'lightning';
        const lightningAmp = toPixels(payload.lightning_jitter ?? payload.jitter ?? 0.2, 0.2);
        const lightningFreq = toNumber(payload.lightning_frequency ?? payload.lightning_flicker ?? 6, 6);
        const lightningSeed = toNumber(payload.lightning_seed ?? payload.seed ?? 1, 1);

        const animSpeed = payload.animation_speed || 1;
        const distAmp = toPixels(payload.distortion_amplitude || 0, 0);
        const distFreq = payload.distortion_frequency !== undefined ? payload.distortion_frequency : 1;

        // AI có thể truyền boolean (true = nhọn) hoặc số (0.0 đến 1.0)
        const parseTaper = (val: any, defaultVal: number) => {
          if (val === undefined) return defaultVal;
          if (typeof val === 'boolean') return val ? 0.0 : 1.0;
          return Number(val);
        };
        const tStart = parseTaper(payload.taper_start, 1.0);
        const tEnd = parseTaper(payload.taper_end, 1.0);

        let elapsedFrames = 0;

        const meshTicker = trackTicker(new PIXI.Ticker());
        meshTicker.add(() => {
          elapsedFrames += meshTicker.deltaMS * 0.01 * animSpeed;
          graphics.clear();

          let currentPoints = basePoints;
          if (lightning) {
            currentPoints = applyLightningJitter(currentPoints, lightningAmp, lightningSeed, elapsedFrames, lightningFreq);
          }

          if (distAmp !== 0) {
            currentPoints = currentPoints.map((p, i) => {
              if (i === 0 || i === currentPoints.length - 1) return p;
              return {
                x: p.x + Math.sin(elapsedFrames + i * distFreq) * distAmp,
                y: p.y + Math.cos(elapsedFrames + i * distFreq) * distAmp
              };
            });
          }

          if (isDashTrail) {
            const totalPoints = currentPoints.length;
            const progress = ((elapsedFrames * 2) % 150) / 100;
            const headIndex = Math.floor(progress * totalPoints);
            const tailLength = Math.max(3, Math.floor(totalPoints * 0.4));
            const startIndex = Math.max(0, headIndex - tailLength);

            if (headIndex > 0 && startIndex < totalPoints) {
              const endIndex = Math.min(headIndex, totalPoints - 1);
              const activeLength = Math.max(1, endIndex - startIndex);

              for (let i = startIndex; i < endIndex; i += 1) {
                graphics.moveTo(currentPoints[i].x, currentPoints[i].y);
                graphics.lineTo(currentPoints[i + 1].x, currentPoints[i + 1].y);

                const localProgress = (i - startIndex) / activeLength;
                const currentWidth = strokeWidth * (tStart + (tEnd - tStart) * localProgress);
                graphics.stroke({ width: currentWidth, color: stroke.color, alpha: stroke.alpha, cap: 'round', join: 'round' });
              }
            }
          } else {
            const segments = currentPoints.length - 1;
            for (let i = 0; i < segments; i += 1) {
              graphics.moveTo(currentPoints[i].x, currentPoints[i].y);
              graphics.lineTo(currentPoints[i + 1].x, currentPoints[i + 1].y);

              if (i === segments - 1 && payload.is_closed_path) {
                graphics.moveTo(currentPoints[i + 1].x, currentPoints[i + 1].y);
                graphics.lineTo(currentPoints[0].x, currentPoints[0].y);
              }

              const pointProgress = i / Math.max(1, segments - 1);
              let currentWidth = strokeWidth;
              if (tStart !== 1.0 || tEnd !== 1.0) {
                const baseTaper = tStart + (tEnd - tStart) * pointProgress;
                const bulge = (tStart < 0.5 && tEnd < 0.5) ? (4 * pointProgress * (1 - pointProgress)) : 0;
                currentWidth = strokeWidth * Math.max(baseTaper, bulge);
              }

              const strokeOptions: any = {
                width: currentWidth,
                color: stroke.color,
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

        handleLifecycle(graphics, payload, simulationSpeed, stage, () => {
          meshTicker.stop();
          meshTicker.destroy();
          activeTickers.delete(meshTicker);
          unregisterVfxObject(vfxId, vfxEvent.target_id, graphics);
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
        const vfxId = payload.vfx_id || payload.id || payload.object_id;

        const fallbackPos = resolveTargetPosition(vfxEvent.target_id);
        const cx = ((payload.x !== undefined ? payload.x : fallbackPos.x) + (payload.offset_x || 0)) * CELL_SIZE;
        const cy = ((payload.y !== undefined ? payload.y : fallbackPos.y) + (payload.offset_y || 0)) * CELL_SIZE;

        const shapeType = String(payload.shape_type || payload.type || 'circle').toLowerCase();
        const fill = payload.fill_color ? parseColor(payload.fill_color) : null;
        const stroke = payload.line_color ? parseColor(payload.line_color) : null;
        const fillAlpha = fill ? (payload.fill_alpha ?? 1) * fill.alpha : 0;
        const strokeAlpha = stroke ? (payload.line_alpha ?? 1) * stroke.alpha : 0;
        const strokeWidth = (payload.line_width ?? (stroke ? 0.05 : 0)) * CELL_SIZE;

        if (shapeType === 'svg') {
          const svgPath = payload.svg_path || payload.path || payload.d;
          graphics.position.set(cx, cy);
          drawSvgPath(graphics, svgPath);
        } else if (shapeType === 'path') {
          const centerGridX = cx / CELL_SIZE;
          const centerGridY = cy / CELL_SIZE;
          const pts = normalizePoints(payload.points || payload.path_points || [], centerGridX, centerGridY, CELL_SIZE);
          if (pts.length > 0) {
            graphics.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i += 1) graphics.lineTo(pts[i].x, pts[i].y);
            if (payload.is_closed_path) graphics.closePath();
          }
        } else if (shapeType === 'rect' || shapeType === 'rectangle') {
          const rectW = (payload.width ?? 1) * CELL_SIZE;
          const rectH = (payload.height ?? 1) * CELL_SIZE;
          const cornerRadius = (payload.corner_radius || 0) * CELL_SIZE;
          if (cornerRadius > 0) {
            graphics.roundRect(cx - rectW / 2, cy - rectH / 2, rectW, rectH, cornerRadius);
          } else {
            graphics.rect(cx - rectW / 2, cy - rectH / 2, rectW, rectH);
          }
        } else if (shapeType === 'ellipse') {
          const ellipseW = (payload.width ?? 1) * CELL_SIZE / 2;
          const ellipseH = (payload.height ?? 1) * CELL_SIZE / 2;
          graphics.ellipse(cx, cy, ellipseW, ellipseH);
        } else if (shapeType === 'line') {
          const centerGridX = cx / CELL_SIZE;
          const centerGridY = cy / CELL_SIZE;
          const pts = normalizePoints(payload.points || payload.path_points || [], centerGridX, centerGridY, CELL_SIZE);
          if (pts.length > 0) {
            graphics.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i += 1) graphics.lineTo(pts[i].x, pts[i].y);
          }
        } else if (shapeType === 'polygon') {
          const centerGridX = cx / CELL_SIZE;
          const centerGridY = cy / CELL_SIZE;
          const pts = normalizePoints(payload.points || payload.path_points || [], centerGridX, centerGridY, CELL_SIZE);
          if (pts.length > 0) {
            graphics.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i += 1) graphics.lineTo(pts[i].x, pts[i].y);
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

        const svgScale = payload.svg_scale ?? payload.path_scale ?? 1;
        const scaleX = (payload.scale_x ?? 1) * svgScale;
        const scaleY = (payload.scale_y ?? 1) * svgScale;
        if (scaleX !== 1) graphics.scale.x = scaleX;
        if (scaleY !== 1) graphics.scale.y = scaleY;
        if (payload.rotation_deg !== undefined) graphics.angle = payload.rotation_deg;

        stage.addChild(graphics);
        registerVfxObject(vfxId, vfxEvent.target_id, graphics);
        handleLifecycle(graphics, payload, simulationSpeed, stage, () => {
          unregisterVfxObject(vfxId, vfxEvent.target_id, graphics);
        });
      } catch (error) {
        console.warn('[VFX] pixi_graphics error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }

  // ------------------------------------------
  // 6. PIXI FILTERS (Data-driven, Local Only)
  // ------------------------------------------
  if (vfxEvent.pixi_filters) {
    const payload = vfxEvent.pixi_filters;
    const durationMs = payload.duration_ms || payload.lifetime_ms || 1000;

    scheduleEffect(() => {
      try {
        const targetId = payload.target_id || vfxEvent.target_id;
        if (targetId === 'GLOBAL') return;

        const filterSpecs = normalizeFilterSpecs(payload);
        if (filterSpecs.length === 0) return;

        const fallbackPos = resolveTargetPosition(targetId);
        const { target, owned } = resolveFilterTarget(payload, stage, fallbackPos, targetId);
        if (!target) return;

        const bounds = target.getLocalBounds();
        const center = new PIXI.Point(
          payload.center_x !== undefined ? toPixels(payload.center_x, 0) : bounds.x + bounds.width / 2,
          payload.center_y !== undefined ? toPixels(payload.center_y, 0) : bounds.y + bounds.height / 2
        );

        const filterInstances: PIXI.Filter[] = [];
        const filterTweens: gsap.core.Tween[] = [];

        filterSpecs.forEach((spec: any) => {
          const filter = createFilterFromSpec(spec, center);
          if (!filter) return;
          filterInstances.push(filter);

          const tween = applyFilterTween(filter, spec, durationMs, simulationSpeed);
          if (tween) filterTweens.push(tween);

          const type = String(spec.filter_type || spec.type || '').toLowerCase();
          if (type === 'shockwave' || type === 'wave') {
            const ringColor = parseColor(spec.ring_color || spec.color || '#ffffff');
            const ringRadius = toPixels(spec.radius ?? 2, 2);
            const ringThick = toPixels(spec.thickness ?? 0.15, 0.15);
            const waveRing = new PIXI.Graphics();
            waveRing.circle(0, 0, ringRadius);
            waveRing.stroke({ width: ringThick, color: ringColor.color, alpha: ringColor.alpha });
            waveRing.scale.set(0.01);
            waveRing.alpha = 1;
            if (blendMode !== null) waveRing.blendMode = blendMode as any;

            const ringParent = target instanceof PIXI.Container ? target : stage;
            const ringOffset = target instanceof PIXI.Container && owned ? new PIXI.Point(0, 0) : target.getGlobalPosition?.() ?? new PIXI.Point(0, 0);
            waveRing.position.set(center.x + ringOffset.x, center.y + ringOffset.y);
            ringParent.addChild(waveRing);

            gsap.to(waveRing.scale, { x: 1, y: 1, duration: (durationMs / 1000) / simulationSpeed, ease: 'power2.out' });
            gsap.to(waveRing, { alpha: 0, duration: (durationMs / 1000) / simulationSpeed, ease: 'power2.in' });

            trackTimeout(setTimeout(() => {
              if (!waveRing.destroyed) {
                gsap.killTweensOf(waveRing);
                if (waveRing.scale) gsap.killTweensOf(waveRing.scale);
                ringParent.removeChild(waveRing);
                waveRing.destroy();
              }
            }, durationMs / simulationSpeed));
          }
        });

        if (filterInstances.length === 0) {
          if (owned && target instanceof PIXI.Container && !target.destroyed) {
            stage.removeChild(target);
            target.destroy({ children: true });
          }
          return;
        }

        const existingFilters = target.filters ? [...target.filters] : [];
        target.filters = [...existingFilters, ...filterInstances];

        const areaRadius = payload.filter_area ?? payload.area_radius ?? payload.radius;
        const areaWidth = payload.area_width ?? payload.width;
        const areaHeight = payload.area_height ?? payload.height;
        if (areaRadius || (areaWidth && areaHeight)) {
          const width = areaWidth ? toPixels(areaWidth, 0) : toPixels(areaRadius, 0) * 2;
          const height = areaHeight ? toPixels(areaHeight, 0) : toPixels(areaRadius, 0) * 2;
          if (width > 0 && height > 0) {
            target.filterArea = new PIXI.Rectangle(center.x - width / 2, center.y - height / 2, width, height);
          }
        }

        trackTimeout(setTimeout(() => {
          filterTweens.forEach((tween) => tween.kill());
          if (target.filters) target.filters = target.filters.filter((f) => !filterInstances.includes(f));
          if (owned && target instanceof PIXI.Container && !target.destroyed) {
            stage.removeChild(target);
            target.destroy({ children: true });
          }
        }, durationMs / simulationSpeed));
      } catch (error) {
        console.warn('[VFX] pixi_filters error:', error);
      }
    }, sequence, durationMs, simulationSpeed);
  }
};
