import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG CÁC CHUNK JSON CỦA BẠN VÀO ĐÂY
// (Hãy copy toàn bộ các object JSON từ kết quả AI và dán vào giữa cặp dấu backtick)
// =========================================================================
const RAW_DATA_STRING = `

  {
  "chunk_summary": "Giây phút đầu tiên của trận chiến diễn ra dưới cái lạnh thấu xương của Tàn Tích Băng Giá. Tất cả các đơn vị đồng loạt lao về khu vực trung tâm để thu hẹp khoảng cách. Zark lợi dụng tốc độ vượt trội áp sát Kael, tung một nhát phi tiêu độc chết người. Kael lập tức phản công bằng một cú chém trọng kiếm hất văng Zark về phía sau, cùng lúc Aura từ tuyến sau bắn tia sáng hỗ trợ. Grok lầm lỳ tiến lên vung xích giáng đòn mạnh vào Kael, trong khi bão tuyết và trạng thái chảy máu liên tục bòn rút sinh lực của tất cả.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 390, "x": 8, "y": 13 },
    "char_A2": { "hp": 576, "x": 9, "y": 11 },
    "char_B1": { "hp": 264, "x": 11, "y": 10 },
    "char_B2": { "hp": 790, "x": 10, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "NARRATIVE",
      "content": "Bão tuyết gào thét càn quét Tàn Tích Băng Giá, cái lạnh cắt da thấu xương bắt đầu bào mòn sinh lực của tất cả."
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": {
        "layer": "fg"
      }
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "GLOBAL",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 5000,
        "particle_lifetime_ms": 2000,
        "spawn_width": 20.0,
        "spawn_height": 20.0,
        "start_color": "#E0FFFF",
        "end_color": "#FFFFFF",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 8.0,
        "wind_x": 5.0,
        "gravity_y": 1.0,
        "blend_mode": "SCREEN"
      }
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_filters": {
        "filter_type": "frost",
        "intensity": 0.8,
        "color": "#E0FFFF",
        "duration_ms": 5000
      }
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_filters": {
        "filter_type": "frost",
        "intensity": 0.8,
        "color": "#E0FFFF",
        "duration_ms": 5000
      }
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_filters": {
        "filter_type": "frost",
        "intensity": 0.8,
        "color": "#E0FFFF",
        "duration_ms": 5000
      }
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "filter_type": "frost",
        "intensity": 0.8,
        "color": "#E0FFFF",
        "duration_ms": 5000
      }
    },
    {
      "time_offset_ms": 200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 10,
      "target_y": 10
    },
    {
      "time_offset_ms": 300,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 8,
      "target_y": 13
    },
    {
      "time_offset_ms": 400,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 9,
      "target_y": 12
    },
    {
      "time_offset_ms": 500,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 10,
      "target_y": 9
    },
    {
      "time_offset_ms": 1000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 1000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 1000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 1000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 1000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 1000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 1000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 1000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 1500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Lạnh thế này, máu chảy ra chắc sẽ đông lại đẹp mắt lắm đây...",
      "emotion": "SADISTIC"
    },
    {
      "time_offset_ms": 2000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 2000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 2000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 2000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 2000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 2000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 2000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 2000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -62,
      "is_critical": false
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-62",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 3000,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.2,
        "start_color": "#8B0000",
        "end_color": "#800000",
        "start_alpha": 1.0,
        "end_alpha": 0.2,
        "start_scale": 0.1,
        "end_scale": 0.3,
        "speed": 1.5,
        "gravity_y": 2.0
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 9,
      "target_y": 11
    },
    {
      "time_offset_ms": 3200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B1",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 3300,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 11,
      "target_y": 10
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-48",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3600,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -5
    },
    {
      "time_offset_ms": 3600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 3750,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 3900,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 3900,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 3900,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3900,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-38",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 4200,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 10,
      "target_y": 10
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4600,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -5
    },
    {
      "time_offset_ms": 4600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 4700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 4700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-42",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 5000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 5000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 5000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 5000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 5000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 5000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 5000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 5000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}
{
  "chunk_summary": "Trận chiến bước sang giai đoạn khốc liệt nhất. Zark bất ngờ tung kỹ năng dịch chuyển ra sau lưng Aura, chém một đòn chí mạng khiến cô bị câm lặng. Ở tuyến trên, Grok gầm thét đập nát mặt đất bằng Địa Chấn Máu, trói chân Kael. Tuy nhiên, Kael đã kịp thời dựng Lá Chắn Bất Hoại chặn đứng toàn bộ sát thương. Dù bị dồn ép, Aura cố gắng lùi lại và ngay khi trạng thái câm lặng kết thúc, cô niệm phép Nova Bùng Nổ làm mù Zark, cùng lúc đó lá chắn của Kael phát nổ, hất văng và làm choáng Grok. Bão tuyết vẫn không ngừng bòn rút sinh mạng của tất cả.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 237, "x": 7, "y": 12 },
    "char_A2": { "hp": 566, "x": 9, "y": 11 },
    "char_B1": { "hp": 164, "x": 8, "y": 13 },
    "char_B2": { "hp": 685, "x": 10, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 5200,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Lạnh quá à? Để ta sưởi ấm cho ngươi bằng máu nhé...",
      "emotion": "SADISTIC"
    },
    {
      "time_offset_ms": 5500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0, -1.2], [1.04, -0.6], [1.04, 0.6], [0, 1.2], [-1.04, 0.6], [-1.04, -0.6], [0, -1.2]],
        "is_closed_path": true,
        "thickness": 0.15,
        "color": "#00FFFF",
        "alpha": 0.6,
        "blend_mode": "SCREEN",
        "fade_in_ms": 200,
        "lifetime_ms": 4000,
        "fade_out_ms": 0
      }
    },
    {
      "time_offset_ms": 5800,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 5800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 500,
        "spawn_radius": 0.8,
        "start_color": "#000000",
        "end_color": "#1A1A1A",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 1.5
      }
    },
    {
      "time_offset_ms": 5800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.0,
        "duration_ms": 50
      }
    },
    {
      "time_offset_ms": 5950,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 14
    },
    {
      "time_offset_ms": 5950,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "offset_x": 1.0,
        "opacity": 1.0,
        "duration_ms": 0
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [1.5, 1], [2.5, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#8A2BE2",
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6050,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -85,
      "is_critical": true
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "local_shake_x": 0.4,
        "local_shake_y": 0.1,
        "duration_ms": 200,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 1.4,
        "scale_y": 0.6,
        "offset_x": -0.4,
        "duration_ms": 100,
        "ease": "power4.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "CRIT -85",
        "font_size": 3.0,
        "color": "#FFA500",
        "font_weight": "bold",
        "stroke_color": "#FF0000",
        "stroke_thickness": 0.2,
        "float_distance_y": -2.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, -0.8], [0.8, 0], [0, 0.8], [-0.8, 0], [0, -0.8]],
        "is_closed_path": true,
        "thickness": 0.1,
        "color": "#800080",
        "alpha": 0.8,
        "distortion_amplitude": 0.1,
        "fade_in_ms": 200,
        "lifetime_ms": 2000,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 2000,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.8,
        "start_color": "#EE82EE",
        "end_color": "#DA70D6",
        "start_scale": 0.05,
        "end_scale": 0.0,
        "speed": 0.1
      }
    },
    {
      "time_offset_ms": 6200,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Aura, lùi lại ngay! Lá chắn của tôi sắp kích nổ!",
      "emotion": "PROTECTIVE"
    },
    {
      "time_offset_ms": 6500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 7,
      "target_y": 12
    },
    {
      "time_offset_ms": 6500,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 6500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.6,
        "scale_x": 1.2,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 100,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.2,
        "duration_ms": 250,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 6900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#B22222",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 6900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.7,
        "local_shake_y": 0.3,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 6950,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 600,
        "spawn_radius": 2.0,
        "start_color": "#8B4513",
        "end_color": "#FFFFFF",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 5.0,
        "spread_angle": 60,
        "emit_angle": 0
      }
    },
    {
      "time_offset_ms": 6950,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 6950,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "BLOCKED",
        "font_size": 2.0,
        "color": "#00FFFF",
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 6950,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [-0.5, 0.5, -0.3, 0.0, -0.1, 0.5, 0.2, -0.1, 0.5, 0.5],
        "offset_y": 0.5,
        "fill_color": "#8B0000",
        "fill_alpha": 0.9,
        "fade_in_ms": 150,
        "lifetime_ms": 2500,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 7200,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "RAGHHHH! ĐỨNG YÊN!!!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 7500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 7550,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 7600,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -45,
      "is_critical": false
    },
    {
      "time_offset_ms": 7600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 7600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 7600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-45",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8100,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 13
    },
    {
      "time_offset_ms": 8200,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 8300,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 8300,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 8300,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FFFFFF",
        "tint_alpha": 1.0,
        "scale_x": 1.2,
        "scale_y": 0.8,
        "offset_x": -0.2,
        "duration_ms": 50,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 8300,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-58",
        "font_size": 2.0,
        "color": "#FF0000",
        "font_weight": "bold",
        "float_distance_y": -2.0,
        "float_duration_ms": 600,
        "float_ease": "power2.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FFFFFF",
        "tint_alpha": 1.0,
        "duration_ms": 1000,
        "ease": "power1.in"
      }
    },
    {
      "time_offset_ms": 8800,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Ánh sáng, xin hãy thanh tẩy bóng tối...",
      "emotion": "DETERMINED"
    },
    {
      "time_offset_ms": 9000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_filters": {
        "filter_type": "shockwave",
        "radius": 2.0,
        "thickness": 0.5,
        "intensity": 1.5,
        "color": "#FFFFFF",
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 500,
        "spawn_radius": 2.0,
        "start_color": "#E0F7FA",
        "end_color": "#FFFFFF",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 3.0,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 9550,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "local_shake_x": 0.4,
        "local_shake_y": 0.4,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 9550,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -90,
      "is_critical": false
    },
    {
      "time_offset_ms": 9550,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 9550,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-90",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 9550,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 3000,
        "particle_lifetime_ms": 800,
        "spawn_width": 1.0,
        "spawn_height": 0.5,
        "offset_y": -0.5,
        "start_color": "#FFFFFF",
        "end_color": "#F0F8FF",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.6,
        "end_scale": 1.2,
        "speed": 0.2,
        "rotation_speed_variance": 45
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 600,
        "spawn_radius": 1.2,
        "start_color": "#00FFFF",
        "end_color": "#00008B",
        "start_scale": 0.4,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -50,
      "is_critical": false
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-50",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.8,
        "scale_x": 1.1,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.6,
        "offset_y": -1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.1],
        "rotation_deg": 360,
        "fade_in_ms": 100,
        "lifetime_ms": 1500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 10000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 10000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 10000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 10000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 10000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 10000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 10000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 10000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}
{
  "chunk_summary": "Ánh sáng từ Nova Bùng Nổ vẫn còn hiệu lực khiến Zark (B1) bị mù tạm thời, những nhát dao của hắn quờ quạng trong không khí và hoàn toàn trượt khỏi Aura (A1). Tận dụng cơ hội, Aura liên tục bắn tia sáng áp đảo Zark. Ở tuyến trên, Grok (B2) vừa tỉnh lại sau cơn choáng đã điên cuồng quất xích sắt vào Kael (A2), nhưng Kael vững vàng vung trọng kiếm hất văng gã đồ tể lùi lại. Khi hiệu ứng mù vừa kết thúc, Zark lập tức chớp thời cơ tung một nhát dao tẩm độc chí mạng, khiến Aura bắt đầu mất máu liên tục. Bão tuyết vẫn vô tình càn quét, bòn rút sinh lực của cả 4 người.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 152, "x": 7, "y": 12 },
    "char_A2": { "hp": 466, "x": 9, "y": 11 },
    "char_B1": { "hp": 81, "x": 8, "y": 13 },
    "char_B2": { "hp": 623, "x": 11, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 10000,
      "type": "NARRATIVE",
      "content": "Ánh sáng thanh tẩy vẫn thiêu đốt võng mạc của Zark. Hắn điên cuồng vung dao trong bóng tối."
    },
    {
      "time_offset_ms": 10500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Khốn kiếp! Mắt ta... Ngươi trốn ở đâu rồi?!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 10600,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 10600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "MISS",
        "font_size": 2.0,
        "color": "#808080",
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 11500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 11650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -35,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-35",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 11500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 11700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 11700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 11700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 11700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-48",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12100,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 12100,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "MISS",
        "font_size": 2.0,
        "color": "#808080",
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Tránh xa nàng ra, đồ quái vật!",
      "emotion": "PROTECTIVE"
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12550,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12600,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -52,
      "is_critical": false
    },
    {
      "time_offset_ms": 12600,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 11,
      "target_y": 10
    },
    {
      "time_offset_ms": 12600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 12600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 12600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-52",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 13000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 13000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 13000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 13000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 13650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 13800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 13800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 13800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 13800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-38",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 13600,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-65",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 3000,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.2,
        "start_color": "#8B0000",
        "end_color": "#800000",
        "start_alpha": 1.0,
        "end_alpha": 0.2,
        "start_scale": 0.1,
        "end_scale": 0.3,
        "speed": 1.5,
        "gravity_y": 2.0
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "NARRATIVE",
      "content": "Ngay khi thị lực hồi phục, Zark đã khoét một nhát dao chí mạng. Máu của Tinh Linh Ánh Sáng bắt đầu nhuộm đỏ nền tuyết."
    },
    {
      "time_offset_ms": 14000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 14200,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 14200,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 14200,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 14200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-42",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -5
    },
    {
      "time_offset_ms": 14500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.2,
        "color": "#8B0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 15000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 15000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 15000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 15000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 15000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 15000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 15000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 15000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 15000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -5
    },
    {
      "time_offset_ms": 15000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.2,
        "color": "#8B0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    }
  ]
}
{
  "chunk_summary": "Trận chiến tiếp diễn đầy tàn khốc. Bất chấp thị lực chưa hoàn toàn hồi phục, Zark cố tung một nhát dao tẩm độc găm thẳng vào người Aura khiến cô liên tục mất máu. Tuy nhiên, vết thương không làm Tinh Linh Ánh Sáng chùn bước; cô tụ quang năng bắn trả liên tiếp hai tia sáng thanh tẩy, chính thức kết liễu mạng sống của gã sát thủ. Ở tuyến trên, Grok điên cuồng quất xích sắt, móc trúng và kéo Kael lại gần, nhưng vị Kỵ Sĩ Thép ngay lập tức đáp trả bằng một cú chém uy lực hất văng gã đồ tể ra xa. Bão tuyết vẫn không ngừng gào thét.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 65, "x": 7, "y": 12 },
    "char_A2": { "hp": 365, "x": 10, "y": 11 },
    "char_B1": { "hp": 0, "x": 8, "y": 13 },
    "char_B2": { "hp": 506, "x": 12, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 15200,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Máu... Ta cần thêm máu để sưởi ấm...",
      "emotion": "SADISTIC"
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 15650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 15800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-38",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[0, 0], [3, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#00FF00",
        "distortion_amplitude": 0.2,
        "distortion_frequency": 2.0,
        "fade_in_ms": 50,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 400,
        "spawn_width": 3.0,
        "spawn_height": 0.2,
        "start_color": "#006400",
        "end_color": "#000000",
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "start_scale": 0.5,
        "end_scale": 1.2,
        "speed": 0.5,
        "gravity_y": -0.5
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -62,
      "is_critical": false
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-62",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 3000,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.2,
        "start_color": "#8B0000",
        "end_color": "#800000",
        "start_alpha": 1.0,
        "end_alpha": 0.2,
        "start_scale": 0.1,
        "end_scale": 0.3,
        "speed": 1.5,
        "gravity_y": 2.0
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 16500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -44,
      "is_critical": false
    },
    {
      "time_offset_ms": 16700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 16700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-44",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16600,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -5
    },
    {
      "time_offset_ms": 16600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.2,
        "color": "#8B0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16800,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16850,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16900,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -52,
      "is_critical": false
    },
    {
      "time_offset_ms": 16900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 16900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-52",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "ATTACK",
      "target_id": "char_B1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 17650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -39,
      "is_critical": false
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 0.5,
        "scale_y": 1.5,
        "color_tint": "#8B0000",
        "tint_alpha": 0.8,
        "duration_ms": 80,
        "ease": "elastic.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-39",
        "font_size": 1.5,
        "color": "#FF0000",
        "float_distance_y": -1.5,
        "float_duration_ms": 300,
        "float_ease": "bounce.out",
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 17900,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Lạnh quá... bóng tối bao trùm...",
      "emotion": "DESPAIR"
    },
    {
      "time_offset_ms": 17950,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.0,
        "duration_ms": 500,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 17950,
      "type": "NARRATIVE",
      "content": "Kẻ Săn Mồi gục ngã xuống nền tuyết trắng, cơ thể bất động hòa vào bão tuyết."
    },
    {
      "time_offset_ms": 17600,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -5
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.2,
        "color": "#8B0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 18000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 18000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 18000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -47,
      "is_critical": false
    },
    {
      "time_offset_ms": 18700,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 10,
      "target_y": 11
    },
    {
      "time_offset_ms": 18700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 18700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-47",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18600,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -5
    },
    {
      "time_offset_ms": 18600,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5",
        "font_size": 1.2,
        "color": "#8B0000",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 19000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 19000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 19000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 19000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 19000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 19000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 19200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 19250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 19300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -55,
      "is_critical": true
    },
    {
      "time_offset_ms": 19300,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 12,
      "target_y": 10
    },
    {
      "time_offset_ms": 19300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 19300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-55",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 20000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 20000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 20000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 20000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 20000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 20000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}
{
  "chunk_summary": "Thấy đồng đội gục ngã, Grok (B2) nổi điên gầm thét, vận lực nện búa tạ xuống đất tung Địa Chấn Máu càn quét thẳng vào Kael (A2). Dù Kael đã kịp thời dựng Lá Chắn Bất Hoại để cản phần lớn sát thương, dư chấn của đòn đánh vẫn khiến anh bị trói chân tại chỗ. Ở phía sau, Aura (A1) mặc kệ sinh lực đang cạn kiệt vì bão tuyết, liên tục bắn tia sáng yểm trợ để bào mòn gã đồ tể. Trận chiến đạt đến đỉnh điểm khi lá chắn của Kael hấp thụ đủ sát thương và phát nổ, hất văng và làm choáng Grok giữa cơn bão tuyết cuồng nộ.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 55, "x": 7, "y": 12 },
    "char_A2": { "hp": 291, "x": 10, "y": 11 },
    "char_B1": { "hp": 0, "x": 8, "y": 13 },
    "char_B2": { "hp": 427, "x": 12, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 20500,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "GRAAAA! NGHIỀN NÁT... TẤT CẢ!!!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 21000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0, -1.2], [1.04, -0.6], [1.04, 0.6], [0, 1.2], [-1.04, 0.6], [-1.04, -0.6], [0, -1.2]],
        "is_closed_path": true,
        "thickness": 0.15,
        "color": "#00FFFF",
        "alpha": 0.6,
        "blend_mode": "SCREEN",
        "fade_in_ms": 200,
        "lifetime_ms": 4000,
        "fade_out_ms": 0
      }
    },
    {
      "time_offset_ms": 21500,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 21500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.6,
        "scale_x": 1.2,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 21700,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 100,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 21700,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 21700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.2,
        "duration_ms": 250,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 21900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#B22222",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 21900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.7,
        "local_shake_y": 0.3,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 21950,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 600,
        "spawn_radius": 2.0,
        "start_color": "#8B4513",
        "end_color": "#FFFFFF",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 5.0,
        "spread_angle": 60,
        "emit_angle": 0
      }
    },
    {
      "time_offset_ms": 21950,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -20,
      "is_critical": false
    },
    {
      "time_offset_ms": 21950,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 21950,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-20 (Shield Blocked 50)",
        "font_size": 2.0,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 21950,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [-0.5, 0.5, -0.3, 0.0, -0.1, 0.5, 0.2, -0.1, 0.5, 0.5],
        "offset_y": 0.5,
        "fill_color": "#8B0000",
        "fill_alpha": 0.9,
        "fade_in_ms": 150,
        "lifetime_ms": 2500,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22200,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 22350,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -33,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-33",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 23000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 23000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 23000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 23000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 23000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 23000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 23500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 23700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -44,
      "is_critical": false
    },
    {
      "time_offset_ms": 23700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 23700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 23700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-44",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 24000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 24000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 24000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 24000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 24000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 24000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 24650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 24800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -36,
      "is_critical": false
    },
    {
      "time_offset_ms": 24800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 24800,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 24800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-36",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 600,
        "spawn_radius": 1.2,
        "start_color": "#00FFFF",
        "end_color": "#00008B",
        "start_scale": 0.4,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.8,
        "scale_x": 1.1,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 25000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.6,
        "offset_y": -1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.1],
        "rotation_deg": 360,
        "fade_in_ms": 100,
        "lifetime_ms": 1500,
        "fade_out_ms": 100
      }
    }
  ]
}
{
  "chunk_summary": "Grok bị choáng đứng chôn chân giữa bão tuyết, trở thành bia đỡ đạn cho Aura và Kael. Kỵ Sĩ Thép áp sát, tung những nhát trọng kiếm uy lực đẩy lùi gã đồ tể. Tuy nhiên, ngay khi tỉnh lại, Grok điên cuồng vung xích đáp trả, quất mạnh và kéo giật Kael về phía mình. Cả hai lao vào một trận giằng co tàn bạo, liên tục đánh bật và kéo nhau trên nền tuyết nhuốm máu. Ở tuyến sau, Aura chỉ còn thoi thóp nhưng vẫn kiên cường yểm trợ đồng đội. Bão tuyết vô tình vẫn cướp đi sinh mệnh của họ mỗi giây.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 45, "x": 7, "y": 12 },
    "char_A2": { "hp": 187, "x": 13, "y": 10 },
    "char_B1": { "hp": 0, "x": 8, "y": 13 },
    "char_B2": { "hp": 246, "x": 14, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 25200,
      "type": "NARRATIVE",
      "content": "Grok tê liệt trong dư chấn của vụ nổ ánh sáng. Kael không bỏ lỡ cơ hội, lập tức áp sát."
    },
    {
      "time_offset_ms": 25500,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 11,
      "target_y": 10
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 25650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -34,
      "is_critical": false
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-34",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 25850,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 25900,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -49,
      "is_critical": false
    },
    {
      "time_offset_ms": 25900,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 13,
      "target_y": 10
    },
    {
      "time_offset_ms": 25900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 25900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 25900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-49",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 26000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 26000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 26000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "KHỐN KIẾP! TA SẼ CẮT CỔ NGƯƠI!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 27000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 27000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 27000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 27000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 27000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 27000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 27200,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 27400,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 27400,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 12,
      "target_y": 10
    },
    {
      "time_offset_ms": 27400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 27400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 27400,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-48",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 28000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 28000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 28000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 28200,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 28350,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -36,
      "is_critical": false
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-36",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 28550,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 28600,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -52,
      "is_critical": false
    },
    {
      "time_offset_ms": 28600,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 14,
      "target_y": 10
    },
    {
      "time_offset_ms": 28600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 28600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 28600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-52",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 29000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 29000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 29000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 29000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 29000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 29000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 29500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 29700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -46,
      "is_critical": false
    },
    {
      "time_offset_ms": 29700,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 13,
      "target_y": 10
    },
    {
      "time_offset_ms": 29700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 29700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 29700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-46",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 30000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 30000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 30000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 30000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 30000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 30000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}
{
  "chunk_summary": "Aura bất chấp cái lạnh buốt giá đang đóng băng cơ thể, liên tục di chuyển tiến lên để giữ gã Đồ Tể trong tầm ngắm. Ở tuyến trên, Kael và Grok lao vào một màn giằng co đẫm máu. Kael vung trọng kiếm chém lùi con quái vật, nhưng Grok lập tức quất xích sắt móc trúng và kéo giật chàng Kỵ Sĩ lại gần. Không lùi bước, Kael kích hoạt Lá Chắn Bất Hoại vừa kịp lúc cản phá đòn roi chí mạng tiếp theo của Grok, rồi bồi thêm một cú chém uy lực hất văng hắn ra xa. Tận dụng khoảng trống, Aura phóng liên tiếp các tia sáng thanh tẩy, dồn gã quái vật vào bờ vực thoi thóp.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 35, "x": 12, "y": 10 },
    "char_A2": { "hp": 135, "x": 14, "y": 10 },
    "char_B1": { "hp": 0, "x": 8, "y": 13 },
    "char_B2": { "hp": 62, "x": 16, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 30200,
      "type": "NARRATIVE",
      "content": "Aura rùng mình trong bão tuyết, cố gắng bước tới để không để mất dấu Grok."
    },
    {
      "time_offset_ms": 30500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 10,
      "target_y": 11
    },
    {
      "time_offset_ms": 31000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 31000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 31000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 31000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 31000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 31000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 31200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 31300,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 15,
      "target_y": 10
    },
    {
      "time_offset_ms": 31300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 31300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 31300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-48",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 31500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 31700,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 14,
      "target_y": 10
    },
    {
      "time_offset_ms": 31700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "offset_x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 31700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 31700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-42",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 32000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 32000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 32000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 32000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 32000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 32000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 32200,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 11,
      "target_y": 10
    },
    {
      "time_offset_ms": 32350,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 32650,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -36,
      "is_critical": false
    },
    {
      "time_offset_ms": 32650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 32650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 32650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-36",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 33000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 33000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 33000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 33000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 33000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 33000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 33200,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Chắn lại! Ta sẽ không lùi bước!",
      "emotion": "DETERMINED"
    },
    {
      "time_offset_ms": 33500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 33500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0, -1.2], [1.04, -0.6], [1.04, 0.6], [0, 1.2], [-1.04, 0.6], [-1.04, -0.6], [0, -1.2]],
        "is_closed_path": true,
        "thickness": 0.15,
        "color": "#00FFFF",
        "alpha": 0.6,
        "blend_mode": "SCREEN",
        "fade_in_ms": 200,
        "lifetime_ms": 4000,
        "fade_out_ms": 0
      }
    },
    {
      "time_offset_ms": 33800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [2, 0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#CD5C5C",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 34000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 34000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "BLOCKED",
        "font_size": 2.0,
        "color": "#00FFFF",
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 34000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 34000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 34000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 34000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 34000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 34000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 34200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 34250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 34300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -52,
      "is_critical": false
    },
    {
      "time_offset_ms": 34300,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 16,
      "target_y": 10
    },
    {
      "time_offset_ms": 34300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 34300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 34300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-52",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 34600,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 12,
      "target_y": 10
    },
    {
      "time_offset_ms": 34700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 34850,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-38",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 35000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}
{
  "chunk_summary": "Grok dốc toàn lực giáng một đòn Địa Chấn Máu càn quét Kael, nhưng dư chấn không đủ để quật ngã Kỵ Sĩ Thép. Đúng lúc đó, Lá Chắn Bất Hoại của Kael phát nổ, làm choáng hoàn toàn gã Đồ Tể. Nắm lấy thời cơ, Aura từ phía sau tung tia sáng chí mạng, trong khi Kael vung thanh trọng kiếm giáng đòn quyết định chẻ đôi con quái vật. Grok gục ngã và bị vùi lấp trong cơn bão tuyết. Trận chiến đẫm máu kết thúc, nhường chỗ cho tiếng gió rít gào, nhưng cái lạnh vẫn tiếp tục ăn mòn sinh mệnh của những kẻ sống sót.",
  "is_game_over": true,
  "winning_team": "A",
  "updated_state": {
    "char_A1": { "hp": 25, "x": 12, "y": 10 },
    "char_A2": { "hp": 85, "x": 15, "y": 10 },
    "char_B1": { "hp": 0, "x": 8, "y": 13 },
    "char_B2": { "hp": 0, "x": 17, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 35200,
      "type": "NARRATIVE",
      "content": "Cơn bão tuyết ngày càng dữ dội. Grok chỉ còn là một cỗ máy tàn tạ, nhưng bản năng hoang dã vẫn thôi thúc hắn tung đòn cuối cùng."
    },
    {
      "time_offset_ms": 35500,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 15,
      "target_y": 10
    },
    {
      "time_offset_ms": 36000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 36000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 36000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 36000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 36000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 36000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 36200,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 36200,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.6,
        "scale_x": 1.2,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 100,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.2,
        "duration_ms": 250,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -40,
      "is_critical": false
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "offset_x": -0.3,
        "duration_ms": 100,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-40",
        "font_size": 3.0,
        "font_weight": "bold",
        "color": "#FF4500",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 36400,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [-0.5, 0.5, -0.3, 0.0, -0.1, 0.5, 0.2, -0.1, 0.5, 0.5],
        "offset_y": 0.5,
        "fill_color": "#8B0000",
        "fill_alpha": 0.9,
        "fade_in_ms": 150,
        "lifetime_ms": 2500,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 36500,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "RAGHHHH... CHẾT!!",
      "emotion": "RAGING"
    },
    {
      "time_offset_ms": 36600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 3.0,
        "is_pie_slice": true,
        "start_angle_deg": -30,
        "end_angle_deg": 30,
        "fill_color": "#B22222",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 36600,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.7,
        "local_shake_y": 0.3,
        "duration_ms": 300,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 36650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 80,
        "particle_lifetime_ms": 600,
        "spawn_radius": 2.0,
        "start_color": "#8B4513",
        "end_color": "#FFFFFF",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 5.0,
        "spread_angle": 60,
        "emit_angle": 0
      }
    },
    {
      "time_offset_ms": 36700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "taper_start": 1.5,
        "taper_end": 0.2,
        "color": "#FFFFCC",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 36850,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.0,
        "gravity_y": 0.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -35,
      "is_critical": false
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "spawn_radius": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-35",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 37000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 37000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 37500,
      "type": "NARRATIVE",
      "content": "Lá chắn của Kael đạt giới hạn và bùng nổ dữ dội!"
    },
    {
      "time_offset_ms": 37500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.8,
        "scale_x": 1.1,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 37500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.6,
        "offset_y": -1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.1],
        "rotation_deg": 360,
        "fade_in_ms": 100,
        "lifetime_ms": 1500,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 38000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 38000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 38000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 38000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 38000,
      "type": "ATTACK",
      "target_id": "char_B2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 38000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 38200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 1.5,
        "is_pie_slice": true,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "fill_color": "#C0C0C0",
        "fill_alpha": 0.9,
        "blend_mode": "ADD",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 38250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, -1], [1.5, 1]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#E5E4E2",
        "distortion_amplitude": 0.2,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 38300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -50,
      "is_critical": false
    },
    {
      "time_offset_ms": 38300,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 17,
      "target_y": 10
    },
    {
      "time_offset_ms": 38300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "offset_x": 1.0,
        "duration_ms": 200,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 38300,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_y": 0.5,
        "scale_x": 1.3,
        "color_tint": "#800000",
        "tint_alpha": 0.9,
        "duration_ms": 150,
        "ease": "power3.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 38300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-50",
        "font_size": 2.5,
        "color": "#8B0000",
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "float_ease": "power1.inOut",
        "fade_in_ms": 100,
        "lifetime_ms": 600,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 38500,
      "type": "NARRATIVE",
      "content": "Nhát chém ngàn cân của Kael chẻ đôi cỗ máy thịt rồ dại. Grok ngã gục, máu tuôn trào rồi nhanh chóng đông cứng lại dưới cái lạnh tàn khốc."
    },
    {
      "time_offset_ms": 38550,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "opacity": 0.0,
        "duration_ms": 500,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 39000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 39000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 39000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 39000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 39200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Chúng ta... làm được rồi, Kael...",
      "emotion": "EXHAUSTED"
    },
    {
      "time_offset_ms": 39500,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Giữ lấy hơi thở đi. Trận bão này chưa tan đâu.",
      "emotion": "CALM"
    },
    {
      "time_offset_ms": 40000,
      "type": "ATTACK",
      "target_id": "char_A1",
      "hp_change": -2
    },
    {
      "time_offset_ms": 40000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 40000,
      "type": "ATTACK",
      "target_id": "char_A2",
      "hp_change": -2
    },
    {
      "time_offset_ms": 40000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-2",
        "font_size": 1.0,
        "color": "#ADD8E6",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 100,
        "lifetime_ms": 700,
        "fade_out_ms": 200
      }
    }
  ]
}


`;
// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING || RAW_DATA_STRING.trim() === '' || RAW_DATA_STRING.includes('[DÁN CÁC CHUNK JSON CỦA BẠN VÀO ĐÂY')) {
      alert("Đồng nghiệp ơi! Hãy paste nội dung kịch bản JSON vào biến RAW_DATA_STRING trước nhé!");
      return;
    }

    // 1. Thuật toán tự động sửa lỗi JSON đứt đoạn và nối tất cả timeline lại
    let combinedTimeline = [];
    try {
      // Sửa lỗi các ngoặc nhọn dính liền nhau } { thành }, { và bọc trong mảng []
      const fixedJsonString = `[${RAW_DATA_STRING.trim().replace(/}\s*\{/g, '},{')}]`;
      const parsedChunks = JSON.parse(fixedJsonString);
      
      // Gộp tất cả mảng timeline của các chunk lại thành một Master_Timeline duy nhất
      combinedTimeline = parsedChunks.flatMap((chunk: any) => chunk.timeline);
      console.log("🔥 Đã nối thành công:", combinedTimeline.length, "sự kiện VFX và Hành động!");
    } catch (error) {
      alert("Lỗi parse dữ liệu. Hãy kiểm tra lại xem nội dung copy đã đủ chưa nhé!");
      console.error("Parse Error:", error);
      return;
    }

    // 2. Cập nhật dữ liệu nâng cấp cho kịch bản Tàn Tích Băng Giá
    useMainStore.setState({
      // Môi trường Tàn Tích Băng Giá
      mapPreviewUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000&auto=format&fit=crop', // Ảnh nền bão tuyết
      mapDescription: "Tàn Tích Băng Giá: Kích thước 20x20. Một vùng đất hoang tàn bị bão tuyết bao phủ. Bão tuyết liên tục thổi qua làm giảm 20% sự nhanh nhẹn (agility) của tất cả đơn vị. Đặc biệt, cái lạnh cắt da sẽ gây sát thương liên tục (trừ 2 HP/giây) cho bất kỳ nhân vật nào đang đứng trên sân.",
      
      // Avatar giả lập cho các nhân vật
      uploadedShapes: [
        { id: "shape-aura", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Aura&background=FFFACD&color=b8860b&size=150&bold=true" },
        { id: "shape-kael", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Kael&background=708090&color=fff&size=150&bold=true" },
        { id: "shape-zark", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Zark&background=4B0082&color=fff&size=150&bold=true" },
        { id: "shape-grok", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Grok&background=8B0000&color=fff&size=150&bold=true" }
      ],

      // Đội hình A (Đã x2 Máu theo yêu cầu)
      teamA: [
        {
          id: "char_A1",
          team: 'A',
          name: "Aura 'Tinh Linh Ánh Sáng'",
          personality: "Một tinh linh cổ đại được đánh thức từ giấc ngủ sâu. Tính cách hiền hòa, giọng điệu nhẹ nhàng nhưng luôn kiên quyết bảo vệ sự sống bằng mọi giá.",
          basicAttackDesc: "Tia Sáng Thanh Tẩy: Bắn một luồng sáng hội tụ cực mạnh, tầm bắn 4 ô, sát thương đơn mục tiêu.",
          skillDesc: "Nova Bùng Nổ: Tụ lực trong 1 giây, tạo một vụ nổ ánh sáng hình tròn bán kính 2 ô xung quanh bản thân. Gây sát thương lớn và làm mù (mất khả năng đánh trúng) kẻ địch trong 3 giây. Hồi chiêu: 10 giây.",
          stats: { hp: 400, maxHp: 400, agility: 70, damage: 35, range: 4 },
          shapeId: "shape-aura",
          position: { x: 6, y: 18 }
        },
        {
          id: "char_A2",
          team: 'A',
          name: "Kael 'Kỵ Sĩ Thép'",
          personality: "Cựu chỉ huy đội cận vệ, luôn tuân thủ kỷ luật thép và sẵn sàng hy sinh làm lá chắn cho đồng đội. Tính cách trầm tĩnh, lạnh lùng, ít nói.",
          basicAttackDesc: "Chém Trọng Kiếm: Tấn công cận chiến 1 ô bằng thanh gươm khổng lồ, mỗi nhát chém có lực tác động mạnh làm đánh văng mục tiêu lùi lại 1 ô.",
          skillDesc: "Lá Chắn Bất Hoại: Kích hoạt khiên năng lượng bao bọc cơ thể chặn 50 sát thương. Khiên sẽ tự động phát nổ sau 4 giây, gây choáng (Stun) 1.5 giây cho tất cả kẻ địch đứng ở ô sát vách. Hồi chiêu: 12 giây.",
          stats: { hp: 700, maxHp: 700, agility: 40, damage: 50, range: 1 },
          shapeId: "shape-kael",
          position: { x: 7, y: 17 }
        }
      ],

      // Đội hình B (Đã x2 Máu theo yêu cầu)
      teamB: [
        {
          id: "char_B1",
          team: 'B',
          name: "Zark 'Kẻ Săn Mồi'",
          personality: "Sát thủ tàn nhẫn sinh ra từ hố sâu tuyệt vọng. Thích chơi đùa với con mồi trước khi kết liễu, thường buông những lời chế giễu ớn lạnh.",
          basicAttackDesc: "Phi Tiêu Độc: Ném dao găm tẩm độc sắc lẹm, tầm bắn 3 ô, gây trạng thái Chảy Máu (trừ thêm 5 HP/giây trong suốt 3 giây).",
          skillDesc: "Bóng Ma Bước Nhảy: Dịch chuyển tức thời đến ô ngay phía sau lưng mục tiêu (tầm thi triển tối đa 5 ô). Tung đòn đánh úp chí mạng và gây câm lặng (không thể dùng kỹ năng) trong 2 giây. Hồi chiêu: 8 giây.",
          stats: { hp: 360, maxHp: 360, agility: 90, damage: 60, range: 3 },
          shapeId: "shape-zark",
          position: { x: 14, y: 5 }
        },
        {
          id: "char_B2",
          team: 'B',
          name: "Grok 'Đồ Tể'",
          personality: "Một thí nghiệm sinh học thất bại, chỉ còn lại bản năng phá hoại rồ dại. Tính cách hoang dã, thường gầm gừ và thét gào thay vì nói chuyện rõ chữ.",
          basicAttackDesc: "Quật Xích Sắt: Tầm bắn 2 ô, vung sợi xích gỉ sét quất mạnh vào kẻ địch, có xác suất kéo chúng lại gần mình 1 ô.",
          skillDesc: "Địa Chấn Máu: Nện búa tạ liên tiếp xuống mặt đất tạo sóng âm sát thương diện rộng hình nón hướng về phía trước (độ dài 3 ô). Kẻ địch nếu nằm trong vùng này sẽ bị trói chân (Root) không thể di chuyển trong 2.5 giây. Hồi chiêu: 15 giây.",
          stats: { hp: 800, maxHp: 800, agility: 30, damage: 45, range: 2 },
          shapeId: "shape-grok",
          position: { x: 13, y: 6 }
        }
      ],

      // Bơm toàn bộ Master_Timeline đã nối vào máy chạy
      Master_Timeline: combinedTimeline,

      // Chuyển thẳng sang màn hình giả lập (Phase 5)
      appStage: 'PHASE_5_SIMULATING'
    });
  };

  return (
    <button
      onClick={handleQuickStart}
      className="fixed top-4 right-4 z-50 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(8,145,178,0.8)] border-2 border-cyan-400 animate-pulse transition-all"
    >
      🚀 TEST TÀN TÍCH BĂNG GIÁ
    </button>
  )
}