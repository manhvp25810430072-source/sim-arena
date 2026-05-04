import * as PIXI from 'pixi.js';
import gsap from 'gsap';
import * as particles from '@pixi/particle-emitter';
import { useMainStore } from '../store/useMainStore';

// Lưu trữ 2 ứng dụng PixiJS (Nền và Tiền cảnh)
let appBg: PIXI.Application | null = null;
let appFg: PIXI.Application | null = null;

// Hàm khởi tạo Engine, gắn vào 2 thẻ Canvas trên giao diện
export const initVFXEngine = async (bgCanvasId: string, fgCanvasId: string) => {
  const bgCanvas = document.getElementById(bgCanvasId) as HTMLCanvasElement;
  const fgCanvas = document.getElementById(fgCanvasId) as HTMLCanvasElement;

  if (!bgCanvas || !fgCanvas) return;

  // Hủy instance cũ nếu có (dành cho trường hợp re-render)
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

  console.log("🎬 VFX Engine (PixiJS + GSAP) Initialized!");
};

// Hàm dọn dẹp toàn bộ hiệu ứng
export const clearAllVFX = () => {
  if (appBg) appBg.stage.removeChildren();
  if (appFg) appFg.stage.removeChildren();
  gsap.killTweensOf("*"); // Dừng mọi chuyển động vật lý
};

// Hàm cốt lõi: Thông dịch 1 cục JSON của AI thành Hiệu ứng
export const executeVFX = (vfxEvent: any, simulationSpeed: number) => {
  if (!appBg || !appFg) return;

  // Công cụ 7: Chọn lớp Layer (Mặc định là Tiền cảnh - fg)
  const targetApp = vfxEvent.canvas_layer?.layer === 'bg' ? appBg : appFg;
  const stage = targetApp.stage;

  // Hệ số quy đổi tọa độ Grid (0-19) sang Pixel (Kích thước gốc 1000x1000, mỗi ô 50px)
  const CELL_SIZE = 50;

  // --- CÔNG CỤ 8: GSAP TWEEN (VẬT LÝ VÀ CHUYỂN ĐỘNG DOM) ---
  if (vfxEvent.gsap_tween) {
    const { target_id, x, y, from_x, from_y, scale, opacity, rotation_deg, duration_ms, ease } = vfxEvent.gsap_tween;
    const domTarget = target_id === 'GLOBAL' ? '#arena-board' : `#char-${target_id}`;

    // --- CÔNG CỤ 10: TIMELINE SEQUENCE (CẤU HÌNH ĐỘ TRỄ & LẶP) ---
    const seq = vfxEvent.timeline_sequence || {};

    // Cấu hình điểm đến (To)
    const toConfig: any = {
      scale: scale,
      opacity: opacity,
      rotation: rotation_deg,
      duration: duration_ms ? (duration_ms / 1000) / simulationSpeed : 0.5,
      ease: ease || "power1.out",
      delay: seq.delay_ms ? (seq.delay_ms / 1000) / simulationSpeed : 0,
      repeat: seq.repeat || 0,
      yoyo: seq.yoyo || false,
      overwrite: "auto"
    };

    if (x !== undefined) toConfig.left = `${x * 5}%`;
    if (y !== undefined) toConfig.top = `${y * 5}%`;

    // 🚀 NÂNG CẤP: Nếu có truyền from_x, from_y (Sự kiện MOVE), dùng gsap.fromTo
    if (from_x !== undefined && from_y !== undefined) {
      gsap.fromTo(domTarget, { left: `${from_x * 5}%`, top: `${from_y * 5}%` }, toConfig);
    } else {
      gsap.to(domTarget, toConfig);
    }
  }

  // --- CÔNG CỤ 9: CAMERA SHAKE (RUNG MÀN HÌNH) ---
  if (vfxEvent.camera_shake) {
    const { intensity, duration_ms } = vfxEvent.camera_shake;
    
    gsap.fromTo('#arena-board', 
      { x: -intensity, y: -intensity },
      { 
        x: intensity, y: intensity, 
        duration: 0.05, 
        repeat: Math.floor((duration_ms || 300) / 50), 
        yoyo: true, 
        ease: "none",
        clearProps: "x,y" // Tự đưa khung hình về chuẩn khi rung xong
      }
    );
  }

  // --- CÔNG CỤ 1: PIXI GRAPHICS (VẼ HÌNH HỌC) ---
  if (vfxEvent.pixi_graphics) {
    const { shape_type, radius, width, height, fill_color, fill_alpha, line_width, line_color } = vfxEvent.pixi_graphics;
    const graphics = new PIXI.Graphics();

    // Công cụ 6: Blend Mode
    if (vfxEvent.blend_mode && vfxEvent.blend_mode.mode === "ADD") {
      graphics.blendMode = "add";
    }

    if (fill_color) { graphics.fill({ color: fill_color, alpha: fill_alpha ?? 1 }); }
    if (line_width && line_color) { graphics.stroke({ width: line_width, color: line_color }); }

    if (shape_type === 'circle' && radius) {
      const state = useMainStore.getState();
      const targetChar = [...state.teamA, ...state.teamB].find(c => c.id === vfxEvent.target_id);
      
      let cx = targetChar?.position?.x ?? 10;
      let cy = targetChar?.position?.y ?? 10;

      graphics.circle(cx * CELL_SIZE, cy * CELL_SIZE, radius * CELL_SIZE);
    } 
    else if (shape_type === 'rect') {
      graphics.rect(10 * CELL_SIZE, 10 * CELL_SIZE, (width||1) * CELL_SIZE, (height||1) * CELL_SIZE);
    }
    
    stage.addChild(graphics);

    // Tự động xóa đồ họa tĩnh sau duration_ms
    const duration = vfxEvent.duration_ms || 1000;
    setTimeout(() => {
        if (!graphics.destroyed) {
            stage.removeChild(graphics);
            graphics.destroy();
        }
    }, duration / simulationSpeed);
  }

  // --- CÔNG CỤ 2: PIXI TEXT (HIỂN THỊ CHỮ / SỐ SÁT THƯƠNG BẬT LÊN) ---
  if (vfxEvent.pixi_text) {
    const { content, x, y, color, font_size, font_weight, drop_shadow, float_distance_y, fade_duration_ms } = vfxEvent.pixi_text;
    const textStyle = new PIXI.TextStyle({
      fontFamily: '"Arial Black", Arial, sans-serif',
      fontSize: font_size || 24,
      fill: color || '#FFFFFF',
      fontWeight: (font_weight as any) || 'bold',
      dropShadow: drop_shadow ? { alpha: 0.8, color: '#000000', blur: 3, distance: 3 } : undefined
    });

    const textObj = new PIXI.Text({ text: String(content), style: textStyle });
    const state = useMainStore.getState();
    const targetChar = [...state.teamA, ...state.teamB].find(c => c.id === vfxEvent.target_id);
    
    textObj.x = (x !== undefined ? x : (targetChar?.position?.x ?? 10)) * CELL_SIZE;
    textObj.y = (y !== undefined ? y : (targetChar?.position?.y ?? 10)) * CELL_SIZE;
    textObj.anchor.set(0.5); // Căn giữa chữ

    if (vfxEvent.blend_mode && vfxEvent.blend_mode.mode === "ADD") {
      textObj.blendMode = "add";
    }

    stage.addChild(textObj);

    // Kích hoạt GSAP để làm hiệu ứng chữ bay lên và mờ dần
    const floatY = float_distance_y !== undefined ? float_distance_y : -2;
    const fadeMs = fade_duration_ms || 1500;

    gsap.to(textObj, {
      y: textObj.y + (floatY * CELL_SIZE),
      alpha: 0,
      duration: (fadeMs / 1000) / simulationSpeed,
      ease: "power2.out",
      onComplete: () => {
        if (!textObj.destroyed) {
          stage.removeChild(textObj);
          textObj.destroy();
        }
      }
    });
  }

  // --- CÔNG CỤ 3: PIXI PARTICLES (HẠT KHÓI, MÁU, CHƯỞNG LỰC) ---
  if (vfxEvent.pixi_particles) {
    const { x, y, emitter_type, particle_count, lifetime_ms, start_color, end_color, start_scale, end_scale, speed } = vfxEvent.pixi_particles;
    
    const particleGraphic = new PIXI.Graphics().circle(0, 0, 5).fill({ color: 0xffffff });
    const particleTexture = targetApp.renderer.generateTexture(particleGraphic);
    
    const emitterContainer = new PIXI.Container();
    emitterContainer.x = (x !== undefined ? x : 10) * CELL_SIZE;
    emitterContainer.y = (y !== undefined ? y : 10) * CELL_SIZE;
    stage.addChild(emitterContainer);

    const maxLife = (lifetime_ms || 1000) / 1000;
    
    const emitter: particles.Emitter = new particles.Emitter(emitterContainer as any, {
      pos: { x: 0, y: 0 },
      lifetime: { min: maxLife * 0.5, max: maxLife },
      frequency: 0.01,
      spawnChance: 1,
      particlesPerWave: emitter_type === 'burst' ? (particle_count || 50) : 1,
      emitterLifetime: maxLife / simulationSpeed,
      maxParticles: particle_count || 100,
      addAtBack: false,
      behaviors: [
        { type: 'alpha', config: { alpha: { list: [{ value: 1, time: 0 }, { value: 0, time: 1 }] } } },
        { type: 'scale', config: { scale: { list: [{ value: start_scale || 1, time: 0 }, { value: end_scale || 0.1, time: 1 }] } } },
        { type: 'color', config: { color: { list: [{ value: start_color || '#ffffff', time: 0 }, { value: end_color || '#ff0000', time: 1 }] } } },
        { type: 'moveSpeed', config: { speed: { list: [{ value: (speed || 10) * 20, time: 0 }, { value: 0, time: 1 }] } } },
        { type: 'rotationStatic', config: { min: 0, max: 360 } },
        { type: 'spawnShape', config: { type: 'torus', data: { x: 0, y: 0, radius: emitter_type === 'fountain' ? 5 : 20 } } },
        { type: 'textureSingle', config: { texture: particleTexture } }
      ]
    });

    emitter.emit = true;
    
    // Chạy vòng lặp Ticker riêng cho Particle
    const ticker = new PIXI.Ticker();
    ticker.add((tickerObj) => {
      emitter.update(tickerObj.deltaTime * 0.01 * simulationSpeed);
    });
    ticker.start();

    // Dọn dẹp Emitter sau khi phát xong để chống tràn RAM
    setTimeout(() => {
      ticker.stop();
      ticker.destroy();
      emitter.destroy();
      if (!emitterContainer.destroyed) {
        stage.removeChild(emitterContainer);
        emitterContainer.destroy();
      }
    }, ((lifetime_ms || 1000) + 500) / simulationSpeed);
  }

  // --- CÔNG CỤ 4: PIXI MESH (ĐƯỜNG KIẾM, TIA SÉT, DÂY LỬA) ---
  if (vfxEvent.pixi_mesh) {
    const { path_points, thickness, color } = vfxEvent.pixi_mesh;
    if (path_points && path_points.length > 1) {
      const graphics = new PIXI.Graphics();
      graphics.moveTo(path_points[0][0] * CELL_SIZE, path_points[0][1] * CELL_SIZE);
      for (let i = 1; i < path_points.length; i++) {
        graphics.lineTo(path_points[i][0] * CELL_SIZE, path_points[i][1] * CELL_SIZE);
      }
      graphics.stroke({ width: thickness || 5, color: color || '#FFFFFF' });
      
      if (vfxEvent.blend_mode && vfxEvent.blend_mode.mode === "ADD") {
        graphics.blendMode = "add";
      }
      
      stage.addChild(graphics);

      setTimeout(() => {
        if (!graphics.destroyed) {
          stage.removeChild(graphics);
          graphics.destroy();
        }
      }, (vfxEvent.duration_ms || 500) / simulationSpeed);
    }
  }

  // --- CÔNG CỤ 5: PIXI FILTERS (HIỆU ỨNG TỔNG QUAN / BỘ LỌC) ---
  if (vfxEvent.pixi_filters && vfxEvent.target_id === 'GLOBAL') {
    const { filter_type, intensity, duration_ms } = vfxEvent.pixi_filters;
    let effectFilter: PIXI.Filter | null = null;
    
    // Tích hợp các Filter cơ bản có sẵn của PixiJS
    if (filter_type === 'blur') {
      effectFilter = new PIXI.BlurFilter({ strength: intensity || 5 });
    } else if (filter_type === 'color_matrix' || filter_type === 'sepia') {
      effectFilter = new PIXI.ColorMatrixFilter();
      if (filter_type === 'sepia') (effectFilter as PIXI.ColorMatrixFilter).sepia(false);
    }

    if (effectFilter) {
      stage.filters = stage.filters ? [...stage.filters, effectFilter] : [effectFilter];
      
      // Tự động gỡ bỏ bộ lọc sau khi hết thời gian
      setTimeout(() => {
        if (stage.filters) {
          stage.filters = stage.filters.filter(f => f !== effectFilter);
          if (stage.filters.length === 0) stage.filters = null;
        }
      }, (duration_ms || 1000) / simulationSpeed);
    }
  }

};