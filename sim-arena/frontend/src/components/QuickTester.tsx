import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// (Hãy copy toàn bộ các object JSON từ file giả lập.py và dán vào giữa cặp dấu backtick)
// =========================================================================
const RAW_DATA_STRING = `
{
  "chunk_summary": "Chiến dịch bắt đầu không một lời do dự. Blade-9 kích hoạt tàng hình, hóa thành bóng ma lướt nhanh về phía trận tuyến của đối phương. Phản ứng tức thời, Bolder giậm mạnh xuống đất tạo lớp khiên đá bảo vệ mình và Ignis. Dù bị che khuất tầm nhìn bởi sương mù và tàng hình, Ignis vẫn phán đoán chuẩn xác quỹ đạo di chuyển của Blade-9 khi kẻ địch tiến vào vùng khí độc, lập tức ném một Quả Cầu Lửa bùng nổ, thiêu đốt lớp giáp cơ khí và làm lộ diện hoàn toàn sát thủ drone.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 150, "x": 7, "y": 15 },
    "char_A2": { "hp": 300, "x": 7, "y": 14 },
    "char_B1": { "hp": 120, "x": 14, "y": 6 },
    "char_B2": { "hp": 112, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "NARRATIVE",
      "content": "Khu di tích Nguyên Tử chìm trong im lặng trước cơn bão. Tập đoàn Cơ Khí bắt đầu đợt thanh trừng."
    },
    {
      "time_offset_ms": 100,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 100,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "opacity": 0.3,
        "duration_ms": 200,
        "ease": "steps(5)"
      },
      "blend_mode": { "mode": "SCREEN" },
      "pixi_mesh": {
        "path_points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]],
        "is_closed_path": true,
        "thickness": 0.2,
        "color": "#00FF00",
        "alpha": 0.8,
        "distortion_amplitude": 0.1,
        "animation_speed": 2.0,
        "fade_in_ms": 100,
        "lifetime_ms": 3000,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 200,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "rectangle",
        "width": 1.2,
        "height": 0.1,
        "fill_color": "#00FF00",
        "fill_alpha": 0.6,
        "fade_in_ms": 0,
        "lifetime_ms": 600,
        "fade_out_ms": 0
      },
      "gsap_tween": {
        "offset_y": 1.0,
        "duration_ms": 600,
        "ease": "linear",
        "repeat": 4
      }
    },
    {
      "time_offset_ms": 500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 500,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": { "layer": "fg" },
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0, -2], [1.7, -1], [1.7, 1], [0, 2], [-1.7, 1], [-1.7, -1]],
        "is_closed_path": true,
        "thickness": 0.15,
        "color": "#D2B48C",
        "alpha": 0.7,
        "fade_in_ms": 200,
        "lifetime_ms": 5000,
        "fade_out_ms": 400
      },
      "gsap_tween": {
        "scale_x": 1.05,
        "scale_y": 1.05,
        "duration_ms": 1500,
        "ease": "sine.inOut",
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 8,
        "emit_duration_ms": 4500,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.5,
        "spawn_height": 3.5,
        "start_color": "#FFD700",
        "end_color": "#DAA520",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "gravity_y": 1.5,
        "speed": 0.8
      }
    },
    {
      "time_offset_ms": 1000,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 10,
      "target_y": 8
    },
    {
      "time_offset_ms": 1200,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 7,
      "target_y": 15
    },
    {
      "time_offset_ms": 1300,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 7,
      "target_y": 14
    },
    {
      "time_offset_ms": 2000,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 8,
      "target_y": 11
    },
    {
      "time_offset_ms": 2500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 14,
      "target_y": 6
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "fg" },
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_alpha": 0.8,
        "fade_in_ms": 100,
        "lifetime_ms": 500,
        "fade_out_ms": 50
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "motion_path_points": [[0, 0], [2.5, -2.5], [5, 0]],
        "duration_ms": 500,
        "ease": "power2.inOut",
        "scale_x": 1.2,
        "scale_y": 1.2,
        "yoyo": true,
        "repeat": 4
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -63,
      "is_critical": false
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 2.0,
        "wavelength": 1.5,
        "thickness": 0.5,
        "duration_ms": 600
      },
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 400,
        "ease": "rough.ease",
        "color_tint": "#FF0000",
        "tint_alpha": 0.6
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-63",
        "color": "#FF0000",
        "font_size": 1.5,
        "font_weight": "bold",
        "float_distance_y": -2.0,
        "float_duration_ms": 1000,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 3510,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 100,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#8B0000",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 4.5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 3520,
      "type": "VFX",
      "target_id": "char_B2",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "rectangle",
        "width": 3.0,
        "height": 3.0,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.8,
        "corner_radius": 0.5,
        "fade_in_ms": 100,
        "lifetime_ms": 3000,
        "fade_out_ms": 1000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 2500,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#555555",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "gravity_y": -1.5,
        "speed": 1.0
      }
    },
    {
      "time_offset_ms": 3800,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Cảnh báo... Nhiệt độ lõi vượt ngưỡng. Lỗi quang học.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 4500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-5",
        "color": "#FF8C00",
        "font_size": 1.2,
        "font_weight": "bold",
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
  "chunk_summary": "Tập Đoàn Cơ Khí bắt đầu phản công! X-Sniper di chuyển vào vị trí ngắm bắn hoàn hảo, khóa mục tiêu vào trục dọc nơi Ignis và Bolder đang đứng. Trong lúc Blade-9 vẫn đang chật vật vì khí độc và vết bỏng, Bolder lao tới giậm nát mặt đất bằng kỹ năng Earth Smash, khiến sát thủ drone bị choáng nặng. Ngay khi tia laser xuyên thấu của X-Sniper xé toạc không khí bắn tới, Ignis phản xạ chớp nhoáng, hóa thành luồng khói lửa lướt khỏi quỹ đạo đạn, để lại Bolder gánh chịu toàn bộ sát thương xuyên giáp.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 150, "x": 4, "y": 15 },
    "char_A2": { "hp": 236, "x": 8, "y": 12 },
    "char_B1": { "hp": 120, "x": 7, "y": 6 },
    "char_B2": { "hp": 62, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 5000,
      "type": "NARRATIVE",
      "content": "X-Sniper vào vị trí. Đường đạn tử thần đã được khóa chặt!"
    },
    {
      "time_offset_ms": 5100,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-10 (Poison & Burn)",
        "color": "#32CD32",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 5100,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -10,
      "is_critical": false
    },
    {
      "time_offset_ms": 5200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 6
    },
    {
      "time_offset_ms": 5500,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 12
    },
    {
      "time_offset_ms": 6000,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_y": 0.6,
        "scale_x": 1.3,
        "duration_ms": 300,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 6300,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -40,
      "is_critical": false
    },
    {
      "time_offset_ms": 6300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-40",
        "color": "#8B4513",
        "font_size": 1.8,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 700,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6300,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 150,
        "ease": "bounce.out"
      },
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 1.2,
        "wavelength": 2.0,
        "duration_ms": 400
      }
    },
    {
      "time_offset_ms": 6310,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": { "layer": "bg" },
      "pixi_mesh": {
        "path_points": [[0,0], [0.5, 1.5], [-0.3, 2.5], [0.8, 3]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#4A3B22",
        "alpha": 0.9,
        "distortion_amplitude": 0.1,
        "fade_in_ms": 50,
        "lifetime_ms": 1500,
        "fade_out_ms": 500
      }
    },
    {
      "time_offset_ms": 6320,
      "type": "VFX",
      "target_id": "char_B2",
      "canvas_layer": { "layer": "bg" },
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, 3], [-1.5, 3]],
        "is_closed_path": true,
        "color": "#8B4513",
        "alpha": 1.0,
        "distortion_amplitude": 0.5,
        "animation_speed": 0.0,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 300
      },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 60,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 2.0,
        "start_color": "#A0522D",
        "end_color": "#808080",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.5,
        "gravity_y": 2.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 6500,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 6500,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "local_shake_x": 0.2,
        "local_shake_y": 0.0,
        "duration_ms": 300,
        "ease": "rough.ease",
        "color_tint": "#00FFFF",
        "tint_alpha": 0.5
      }
    },
    {
      "time_offset_ms": 6600,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 6600,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "ellipse",
        "width": 1.5,
        "height": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 2000,
        "fade_out_ms": 800
      },
      "pixi_filters": {
        "filter_type": "wave",
        "amplitude": 0.2,
        "wavelength": 0.8,
        "duration_ms": 2000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1500,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.5,
        "spawn_height": 0.8,
        "start_color": "#FF0000",
        "end_color": "#808080",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "gravity_y": -2.0,
        "speed": 1.5
      }
    },
    {
      "time_offset_ms": 6650,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 4,
      "target_y": 15
    },
    {
      "time_offset_ms": 6650,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_y": 1.5,
        "scale_x": 0.5,
        "duration_ms": 150,
        "ease": "power4.in",
        "color_tint": "#FFFFFF",
        "tint_alpha": 0.9
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "ellipse",
        "width": 1.5,
        "height": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 2000,
        "fade_out_ms": 800
      },
      "pixi_filters": {
        "filter_type": "wave",
        "amplitude": 0.2,
        "wavelength": 0.8,
        "duration_ms": 2000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1500,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.5,
        "spawn_height": 0.8,
        "start_color": "#FF0000",
        "end_color": "#808080",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "gravity_y": -2.0,
        "speed": 1.5
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,0], [8,0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#00FFFF",
        "alpha": 1.0,
        "distortion_amplitude": 0.2,
        "animation_speed": 15.0,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,0], [8,0]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#FFFFFF",
        "alpha": 1.0,
        "distortion_amplitude": 0.0,
        "animation_speed": 0.0,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 6810,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_mesh": {
        "path_points": [[1, -0.6], [1, 0.6], [3, -0.6], [3, 0.6], [5, -0.6], [5, 0.6], [7, -0.6], [7, 0.6]],
        "is_closed_path": false,
        "thickness": 0.1,
        "color": "#00FFFF",
        "alpha": 0.9,
        "distortion_amplitude": 0.3,
        "animation_speed": 25.0,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 6810,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 300,
        "spawn_width": 8.0,
        "spawn_height": 0.5,
        "start_color": "#FFFFFF",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.5,
        "spread_angle": 180,
        "shape_type": "star"
      }
    },
    {
      "time_offset_ms": 6820,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -64,
      "is_critical": false
    },
    {
      "time_offset_ms": 6820,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.8,
        "duration_ms": 150,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 6820,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-64",
        "color": "#00FFFF",
        "font_size": 2.0,
        "font_weight": "bold",
        "float_distance_y": -2.0,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 1000,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6850,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 150,
        "ease": "back.out(1.7)",
        "color_tint": "#FFFFFF",
        "tint_alpha": 0.0
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Mục tiêu ưu tiên S đã tẩu thoát. Cập nhật quỹ đạo: Gây sát thương tối đa lên đơn vị phòng ngự.",
      "emotion": "COLD"
    }
  ]
}
{
  "chunk_summary": "Vừa thoát khỏi trạng thái choáng, Blade-9 lập tức tung đòn chém kép tử thần vào Bolder, xé rách lớp phòng ngự và gây chảy máu nghiêm trọng, đồng thời X-Sniper ném mìn lưới khóa chặt chân đấu sĩ đất. Bất chấp sự hỗn loạn, Ignis giữ khoảng cách an toàn, ngưng tụ hỏa lực tung Quả Cầu Lửa tàn phá thẳng vào tàn tích nơi Blade-9 đang đứng. Bị ăn trọn sát thương kết hợp với khí độc, cỗ máy sát thủ hoàn toàn bốc cháy và tan nát. Giờ đây, X-Sniper phải đối mặt với cơn thịnh nộ của hai Vệ Binh Ma Thuật.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 150, "x": 4, "y": 11 },
    "char_A2": { "hp": 168, "x": 8, "y": 12 },
    "char_B1": { "hp": 120, "x": 7, "y": 6 },
    "char_B2": { "hp": 0, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 10000,
      "type": "NARRATIVE",
      "content": "Chất độc len lỏi vào vi mạch của Blade-9. Trận chiến không có chỗ cho sự nhân từ."
    },
    {
      "time_offset_ms": 10100,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 10100,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-5 (Poison)",
        "color": "#32CD32",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Kích hoạt giao thức thanh trừng...",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 10800,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 10800,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.5,
        "duration_ms": 200,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -30,
      "is_critical": false
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-30",
        "color": "#8B0000",
        "font_size": 1.5,
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      },
      "gsap_tween": {
        "local_shake_x": 0.3,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 11200,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -28,
      "is_critical": false
    },
    {
      "time_offset_ms": 11200,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-28",
        "color": "#8B0000",
        "font_size": 1.5,
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 100
      },
      "gsap_tween": {
        "local_shake_x": 0.4,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 11500,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 11500,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_y": 0.8,
        "duration_ms": 150,
        "ease": "power1.in",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "ROOTED",
        "color": "#DAA520",
        "font_size": 1.2,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 1000,
        "fade_in_ms": 100,
        "lifetime_ms": 2000,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_alpha": 0.8,
        "fade_in_ms": 100,
        "lifetime_ms": 500,
        "fade_out_ms": 50
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "gsap_tween": {
        "motion_path_points": [
          [0, 0],
          [2.5, -2.5],
          [5, 0]
        ],
        "duration_ms": 500,
        "ease": "power2.inOut",
        "scale_x": 1.2,
        "scale_y": 1.2,
        "yoyo": true,
        "repeat": 4
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 2.0,
        "wavelength": 1.5,
        "thickness": 0.5,
        "duration_ms": 600
      },
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 400,
        "ease": "rough.ease",
        "color_tint": "#FF0000",
        "tint_alpha": 0.6
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-65",
        "color": "#FF4500",
        "font_size": 2.2,
        "font_weight": "900",
        "float_distance_y": -2.0,
        "float_duration_ms": 1000,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12510,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 100,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#8B0000",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 4.5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 12520,
      "type": "VFX",
      "target_id": "char_B2",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_graphics": {
        "shape_type": "rectangle",
        "width": 3.0,
        "height": 3.0,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.8,
        "corner_radius": 0.5,
        "fade_in_ms": 100,
        "lifetime_ms": 3000,
        "fade_out_ms": 1000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 2500,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#555555",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "gravity_y": -1.5,
        "speed": 1.0
      }
    },
    {
      "time_offset_ms": 12800,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Lỗi hệ thống... Năng lượng lõi cạn kiệt...",
      "emotion": "AGONY"
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -10,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-10 (Bleed)",
        "color": "#FF0000",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 4,
      "target_y": 11
    },
    {
      "time_offset_ms": 14800,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Tín hiệu đồng minh đã tắt. Chuẩn bị đánh giá lại tình hình.",
      "emotion": "COLD"
    }
  ]
}
{
  "chunk_summary": "Đơn độc trước hai Vệ Binh sau khi Blade-9 gục ngã, X-Sniper không hề hoảng loạn mà ngay lập tức tính toán lại góc bắn. Cỗ máy dịch chuyển và khai hỏa Đạn Xuyên Giáp thẳng vào Bolder, tàn phá nặng nề đấu sĩ đất bất chấp lớp phòng ngự dày đặc. Chịu sức ép từ khí độc, Ignis hóa thành tàn lửa lướt thoát ra ngoài, ngay lập tức ném một Quả Cầu Lửa rực cháy phản công trúng đích, thiêu đốt X-Sniper. Nhận sát thương lớn, xạ thủ cơ khí lùi sâu về phía sau và bắn tỉa trả đũa bằng laser, kéo dài trận chiến sinh tử.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 87, "x": 4, "y": 8 },
    "char_A2": { "hp": 93, "x": 8, "y": 9 },
    "char_B1": { "hp": 53, "x": 8, "y": 3 },
    "char_B2": { "hp": 0, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 15000,
      "type": "NARRATIVE",
      "content": "Blade-9 đã bị phá hủy. Trọng tâm chiến thuật của X-Sniper lập tức chuyển sang giao thức độc lập."
    },
    {
      "time_offset_ms": 15100,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 15100,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5 (Poison)",
        "color": "#32CD32",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 15200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 6
    },
    {
      "time_offset_ms": 15500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Góc bắn thẳng tuyệt đối. Xóa sổ mục tiêu phòng ngự.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 15800,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "local_shake_x": 0.2,
        "local_shake_y": 0.0,
        "duration_ms": 300,
        "ease": "rough.ease",
        "color_tint": "#00FFFF",
        "tint_alpha": 0.5
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,0], [0,6]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#00FFFF",
        "alpha": 1.0,
        "distortion_amplitude": 0.2,
        "animation_speed": 15.0,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,0], [0,6]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#FFFFFF",
        "alpha": 1.0,
        "distortion_amplitude": 0.0,
        "animation_speed": 0.0,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 16100,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-5 (Poison)",
        "color": "#32CD32",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 16110,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_mesh": {
        "path_points": [[-0.6, 1], [0.6, 1], [-0.6, 3], [0.6, 3], [-0.6, 5], [0.6, 5]],
        "is_closed_path": false,
        "thickness": 0.1,
        "color": "#00FFFF",
        "alpha": 0.9,
        "distortion_amplitude": 0.3,
        "animation_speed": 25.0,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 16110,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 6.0,
        "start_color": "#FFFFFF",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.5,
        "spread_angle": 180,
        "shape_type": "star"
      }
    },
    {
      "time_offset_ms": 16120,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -75,
      "is_critical": false
    },
    {
      "time_offset_ms": 16120,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "local_shake_x": 0.8,
        "duration_ms": 150,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 16120,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-75",
        "color": "#00FFFF",
        "font_size": 2.0,
        "font_weight": "bold",
        "float_distance_y": -2.0,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 1000,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 16300,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 16300,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "ellipse",
        "width": 1.5,
        "height": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 2000,
        "fade_out_ms": 800
      },
      "pixi_filters": {
        "filter_type": "wave",
        "amplitude": 0.2,
        "wavelength": 0.8,
        "duration_ms": 2000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1500,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.5,
        "spawn_height": 0.8,
        "start_color": "#FF0000",
        "end_color": "#808080",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "gravity_y": -2.0,
        "speed": 1.5
      }
    },
    {
      "time_offset_ms": 16350,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_y": 1.5,
        "scale_x": 0.5,
        "duration_ms": 150,
        "ease": "power4.in",
        "color_tint": "#FFFFFF",
        "tint_alpha": 0.9
      }
    },
    {
      "time_offset_ms": 16490,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 4,
      "target_y": 8
    },
    {
      "time_offset_ms": 16500,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "ellipse",
        "width": 1.5,
        "height": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 2000,
        "fade_out_ms": 800
      },
      "pixi_filters": {
        "filter_type": "wave",
        "amplitude": 0.2,
        "wavelength": 0.8,
        "duration_ms": 2000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1500,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.5,
        "spawn_height": 0.8,
        "start_color": "#FF0000",
        "end_color": "#808080",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "gravity_y": -2.0,
        "speed": 1.5
      }
    },
    {
      "time_offset_ms": 16550,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 150,
        "ease": "back.out(1.7)",
        "color_tint": "#FFFFFF",
        "tint_alpha": 0.0
      }
    },
    {
      "time_offset_ms": 16800,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 16800,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": { "layer": "fg" },
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,-2], [1.7,-1], [1.7,1], [0,2], [-1.7,1], [-1.7,-1]],
        "is_closed_path": true,
        "thickness": 0.15,
        "color": "#D2B48C",
        "alpha": 0.7,
        "fade_in_ms": 200,
        "lifetime_ms": 5000,
        "fade_out_ms": 400
      },
      "gsap_tween": {
        "scale_x": 1.05,
        "scale_y": 1.05,
        "duration_ms": 1500,
        "ease": "sine.inOut",
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 16900,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 8,
        "emit_duration_ms": 4500,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.5,
        "spawn_height": 3.5,
        "start_color": "#FFD700",
        "end_color": "#DAA520",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "gravity_y": 1.5,
        "speed": 0.8
      }
    },
    {
      "time_offset_ms": 17200,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 17200,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": { "layer": "fg" },
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_alpha": 0.8,
        "fade_in_ms": 100,
        "lifetime_ms": 500,
        "fade_out_ms": 50
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "motion_path_points": [[0, 0], [2, -1], [4, -2]],
        "duration_ms": 500,
        "ease": "power2.inOut",
        "scale_x": 1.2,
        "scale_y": 1.2,
        "yoyo": true,
        "repeat": 4
      }
    },
    {
      "time_offset_ms": 17700,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -62,
      "is_critical": false
    },
    {
      "time_offset_ms": 17700,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-62",
        "color": "#FF4500",
        "font_size": 2.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 17700,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 2.0,
        "wavelength": 1.5,
        "thickness": 0.5,
        "duration_ms": 600
      },
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 400,
        "ease": "rough.ease",
        "color_tint": "#FF0000",
        "tint_alpha": 0.6
      }
    },
    {
      "time_offset_ms": 17710,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 100,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#8B0000",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 4.5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 17720,
      "type": "VFX",
      "target_id": "char_B1",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "rectangle",
        "width": 3.0,
        "height": 3.0,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.8,
        "corner_radius": 0.5,
        "fade_in_ms": 100,
        "lifetime_ms": 3000,
        "fade_out_ms": 1000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 2500,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#555555",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "gravity_y": -1.5,
        "speed": 1.0
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Cỗ máy dối trá, để xem lớp giáp thép của ngươi chịu được nhiệt độ bao nhiêu!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 18200,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 18200,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-5 (Burn)",
        "color": "#FF8C00",
        "font_size": 1.2,
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 3
    },
    {
      "time_offset_ms": 19000,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 9
    },
    {
      "time_offset_ms": 19200,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -53,
      "is_critical": false
    },
    {
      "time_offset_ms": 19200,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[0,0], [-4,5]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#00FF00",
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 19250,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "local_shake_x": 0.3,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "content": "-53",
        "color": "#FF0000",
        "font_size": 1.5,
        "font_weight": "bold",
        "float_distance_y": -1.0,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 500,
        "fade_out_ms": 150
      }
    }
  ]
}
{
  "chunk_summary": "Nhận thấy X-Sniper đang tính toán lại góc bắn tử thần, Bolder bất chấp luồng khí độc đang ăn mòn cơ thể, lao lên thu hẹp khoảng cách. Một cú Đấm Phá Đất rúng động được tung ra, nghiền nát lớp giáp ngoài và làm chập mạch hệ thống của xạ thủ cơ khí. Không bỏ lỡ cơ hội, Ignis tiến vào tầm ngắm, tung Quả Cầu Lửa cuối cùng dứt điểm hoàn toàn. X-Sniper phát nổ trong vô vọng, đánh dấu chiến thắng đẫm máu cho phe Vệ Binh Ma Thuật.",
  "is_game_over": true,
  "winning_team": "team_A",
  "updated_state": {
    "char_A1": { "hp": 87, "x": 6, "y": 5 },
    "char_A2": { "hp": 88, "x": 8, "y": 4 },
    "char_B1": { "hp": 0, "x": 8, "y": 3 },
    "char_B2": { "hp": 0, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 20000,
      "type": "NARRATIVE",
      "content": "Bolder cắn răng chịu đựng khí độc, sải bước lớn lao thẳng về phía X-Sniper. Không thể để cỗ máy kia khai hỏa thêm lần nào nữa!"
    },
    {
      "time_offset_ms": 20100,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -5,
      "is_critical": false
    },
    {
      "time_offset_ms": 20100,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-5 (Poison)",
        "color": "#32CD32",
        "font_size": 1.0,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 800,
        "fade_in_ms": 50,
        "lifetime_ms": 600,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 20200,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 4
    },
    {
      "time_offset_ms": 20500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 6,
      "target_y": 5
    },
    {
      "time_offset_ms": 21500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 21500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_y": 0.6,
        "scale_x": 1.3,
        "duration_ms": 300,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 21800,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B1",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 21800,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_y": 1.0,
        "scale_x": 1.0,
        "duration_ms": 150,
        "ease": "bounce.out"
      },
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 1.2,
        "wavelength": 2.0,
        "duration_ms": 400
      }
    },
    {
      "time_offset_ms": 21800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-42",
        "color": "#8B4513",
        "font_size": 1.8,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 700,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 21810,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_mesh": {
        "path_points": [[0,0], [0.5, 1.5], [-0.3, 2.5], [0.8, 3]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#4A3B22",
        "alpha": 0.9,
        "distortion_amplitude": 0.1,
        "fade_in_ms": 50,
        "lifetime_ms": 1500,
        "fade_out_ms": 500
      }
    },
    {
      "time_offset_ms": 21820,
      "type": "VFX",
      "target_id": "char_B1",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_mesh": {
        "path_points": [[0,0], [1.5, 3], [-1.5, 3]],
        "is_closed_path": true,
        "color": "#8B4513",
        "alpha": 1.0,
        "distortion_amplitude": 0.5,
        "animation_speed": 0.0,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 300
      },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 60,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 2.0,
        "start_color": "#A0522D",
        "end_color": "#808080",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.5,
        "gravity_y": 2.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Trò chơi kết thúc rồi, tên rác rưởi bằng sắt!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 22200,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 22200,
      "type": "VFX",
      "target_id": "char_A1",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.8,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_alpha": 0.8,
        "fade_in_ms": 100,
        "lifetime_ms": 500,
        "fade_out_ms": 50
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "gsap_tween": {
        "motion_path_points": [[0, 0], [2.5, -2.5], [5, 0]],
        "duration_ms": 500,
        "ease": "power2.inOut",
        "scale_x": 1.2,
        "scale_y": 1.2,
        "yoyo": true,
        "repeat": 4
      }
    },
    {
      "time_offset_ms": 22700,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -65,
      "is_critical": true
    },
    {
      "time_offset_ms": 22700,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-65 CRIT",
        "color": "#FF0000",
        "font_size": 2.5,
        "font_weight": "bold",
        "float_distance_y": -2.0,
        "float_duration_ms": 1000,
        "fade_in_ms": 50,
        "lifetime_ms": 1000,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22700,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_filters": {
        "filter_type": "shockwave",
        "amplitude": 2.0,
        "wavelength": 1.5,
        "thickness": 0.5,
        "duration_ms": 600
      },
      "gsap_tween": {
        "local_shake_x": 0.5,
        "local_shake_y": 0.5,
        "duration_ms": 400,
        "ease": "rough.ease",
        "color_tint": "#FF0000",
        "tint_alpha": 0.6
      }
    },
    {
      "time_offset_ms": 22710,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 100,
        "particle_lifetime_ms": 800,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#8B0000",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 4.5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 22720,
      "type": "VFX",
      "target_id": "char_B1",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_graphics": {
        "shape_type": "rectangle",
        "width": 3.0,
        "height": 3.0,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.8,
        "corner_radius": 0.5,
        "fade_in_ms": 100,
        "lifetime_ms": 3000,
        "fade_out_ms": 1000
      },
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 2500,
        "particle_lifetime_ms": 1000,
        "spawn_width": 3.0,
        "spawn_height": 3.0,
        "start_color": "#555555",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "gravity_y": -1.5,
        "speed": 1.0
      }
    },
    {
      "time_offset_ms": 23500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Cảnh báo... Hỏng hóc lõi động cơ... Nhiệm vụ thất bại...",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 24500,
      "type": "NARRATIVE",
      "content": "Cơ thể kim loại của X-Sniper sụp xuống trong tiếng lách tách của tĩnh điện. Khu di tích Nguyên Tử rốt cuộc cũng trở lại với sự tĩnh lặng chết chóc."
    }
  ]
}

`;
// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING || RAW_DATA_STRING.trim() === '') {
      alert("Đồng nghiệp ơi! Hãy paste nội dung file giả lập.py vào biến RAW_DATA_STRING trước nhé!");
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

    // 2. Cập nhật dữ liệu nâng cấp (đã lượng hóa chi tiết) cho kịch bản Khu Di Tích Nguyên Tử
    useMainStore.setState({
      // Môi trường Khu Di Tích Nguyên Tử
      mapPreviewUrl: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=1000&auto=format&fit=crop', 
      mapDescription: "Khu di tích Nguyên Tử: Kích thước 20x20. Chiến trường chìm trong sương mù và tàn tích máy móc cũ kỹ. ĐẶC BIỆT: Vùng trung tâm có rò rỉ 'Khí Độc', bất kỳ đơn vị nào bước vào sẽ bị trạng thái 'Poison' trừ HP liên tục. Bức tường sương mù làm giảm khả năng khóa mục tiêu nhưng không thể cản được các tia laser công nghệ cao.",
      
      // Avatar giả lập cho các nhân vật (Màu sắc tương ứng với hệ Lửa, Đất, Cyber, Ám khí)
      uploadedShapes: [
        { id: "shape-ignis", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Ignis&background=FF4500&color=fff&size=150&bold=true" },
        { id: "shape-bolder", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Bolder&background=8B4513&color=fff&size=150&bold=true" },
        { id: "shape-xsniper", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=X-Sniper&background=00FFFF&color=000&size=150&bold=true" },
        { id: "shape-blade9", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Blade-9&background=1A1A1A&color=fff&size=150&bold=true" }
      ],

      // Đội hình A: Vệ Binh Ma Thuật
      teamA: [
        {
          id: "char_A1",
          team: 'A',
          name: "Ignis 'Hỏa Thần'",
          personality: "Bậc thầy phép thuật lửa, phản xạ chớp nhoáng. Luôn giữ khoảng cách an toàn, hóa thành tàn lửa để né đạn và tung hỏa lực thiêu rụi kẻ thù.",
          basicAttackDesc: "Tàn Lửa: Tầm bắn 5 ô. Gây sát thương phép và để lại trạng thái Bỏng (Burn).",
          skillDesc: "Quả Cầu Lửa Bùng Nổ: Tụ năng lượng ném một quả cầu lửa khổng lồ gây sát thương diện rộng. Đủ sức thiêu đốt lớp giáp cơ khí và làm lộ diện hoàn toàn kẻ địch đang tàng hình.",
          stats: { hp: 150, maxHp: 150, agility: 80, damage: 65, range: 5 },
          shapeId: "shape-ignis",
          position: { x: 7, y: 15 }
        },
        {
          id: "char_A2",
          team: 'A',
          name: "Bolder 'Đá Tảng'",
          personality: "Chiến binh lực lưỡng hệ Đất, kiên cường và dũng mãnh. Đóng vai trò làm khiên thịt, sẵn sàng lấy thân mình gánh sát thương xuyên giáp cho đồng đội.",
          basicAttackDesc: "Khiên Đá: Cận chiến 1 ô. Đập đối thủ bằng lá chắn đá tảng, tạo lớp giáp ảo bảo vệ bản thân.",
          skillDesc: "Earth Smash (Đấm Phá Đất): Giậm mạnh xuống đất tạo sóng xung kích rúng động. Nghiền nát mặt đất và lớp giáp ngoài của mục tiêu, gây choáng (Stun) và chập mạch hệ thống cơ khí.",
          stats: { hp: 300, maxHp: 300, agility: 30, damage: 45, range: 1 },
          shapeId: "shape-bolder",
          position: { x: 7, y: 14 }
        }
      ],

      // Đội hình B: Tập Đoàn Cơ Khí
      teamB: [
        {
          id: "char_B1",
          team: 'B',
          name: "X-Sniper",
          personality: "Cỗ máy xạ thủ máu lạnh, AI tính toán quỹ đạo hoàn hảo. Luôn dịch chuyển tìm góc bắn thẳng tuyệt đối và khóa mục tiêu vào trục dọc.",
          basicAttackDesc: "Laser bắn tỉa: Tầm bắn 8 ô. Bắn tia laser nhanh như chớp, khó lòng né tránh.",
          skillDesc: "Đạn Xuyên Giáp / Mìn Lưới: Khóa mục tiêu và khai hỏa đạn xuyên thấu xé toạc không khí, gây sát thương cực lớn bất chấp phòng ngự. Có thể ném mìn lưới để khóa chặt chân (Root) kẻ địch lao tới.",
          stats: { hp: 120, maxHp: 120, agility: 60, damage: 75, range: 8 },
          shapeId: "shape-xsniper",
          position: { x: 14, y: 6 }
        },
        {
          id: "char_B2",
          team: 'B',
          name: "Blade-9",
          personality: "Sát thủ Drone tàng hình. Nhanh như bóng ma, thoắt ẩn thoắt hiện để ám sát, không một lời do dự.",
          basicAttackDesc: "Cưa máy / Chém cơ khí: Cận chiến 1 ô. Tốc độ vung đòn cực cao.",
          skillDesc: "Chém Kép Tử Thần: Kích hoạt tàng hình lướt nhanh về trận tuyến đối phương. Tung đòn chém kép xé rách lớp phòng ngự và gây trạng thái Chảy Máu (Bleed) nghiêm trọng.",
          stats: { hp: 120, maxHp: 120, agility: 95, damage: 40, range: 1 },
          shapeId: "shape-blade9",
          position: { x: 8, y: 11 }
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
      🚀 TEST DI TÍCH NGUYÊN TỬ (AI DATA)
    </button>
  )
  