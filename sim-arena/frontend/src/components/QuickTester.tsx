import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG CÁC CHUNK JSON CỦA BẠN VÀO ĐÂY
// (Hãy copy toàn bộ các object JSON từ kết quả AI và dán vào giữa cặp dấu backtick)
// =========================================================================
const RAW_DATA_STRING = `

{
  "chunk_summary": "Trận chiến tại Lò Luyện Ngục mở màn với cái nóng khắc nghiệt bòn rút sinh lực của tất cả. Tận dụng tốc độ vượt trội, Nyx lao đến tập kích Lyra trong chớp mắt. Tuy nhiên, cô nàng xạ thủ không hề hoảng sợ, lập tức lùi lại và xả 'Bão Đạn' hất văng sát thủ bóng tối. Cùng lúc đó, cỗ máy thịt Karn và bức tường thép Braum lao vào nhau, trao đổi những đòn đánh vật lý nặng nề giữa cơn mưa tàn lửa.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 307, "x": 6, "y": 15 },
    "char_A2": { "hp": 671, "x": 9, "y": 12 },
    "char_B1": { "hp": 260, "x": 9, "y": 13 },
    "char_B2": { "hp": 623, "x": 10, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 100,
      "type": "NARRATIVE",
      "content": "Cái nóng của Lò Luyện Ngục bắt đầu bào mòn sinh lực. Lửa bao trùm chiến trường."
    },
    {
      "time_offset_ms": 500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 9,
      "target_y": 13
    },
    {
      "time_offset_ms": 600,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 7,
      "target_y": 14
    },
    {
      "time_offset_ms": 700,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 10,
      "target_y": 11
    },
    {
      "time_offset_ms": 800,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 14
    },
    {
      "time_offset_ms": 1800,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Chết trong im lặng đi...",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 2000,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 2000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[-0.8, -1.0], [0, 0], [-0.8, 1.0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 0.05,
        "taper_end": 0.05,
        "color": "#000000",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[-0.9, -1.1], [-0.1, 0], [-0.9, 1.1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#800080",
        "alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2050,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 2050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-58",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 2200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Cái bóng phiền phức! Tránh ra!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 2400,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 6,
      "target_y": 15
    },
    {
      "time_offset_ms": 2500,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -125,
      "is_critical": false
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.0,
        "duration_ms": 200,
        "ease": "power1.out"
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [1, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#ADD8E6",
        "alpha": 0.5,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2700,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.2,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 2700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 2750,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.3,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.4,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 2950,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.4,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3100,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.6,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3100,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.3,
        "end_scale": 2.0,
        "speed": 6.0,
        "emit_angle": 0,
        "spread_angle": 45,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 3150,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.6,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3150,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.9,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3150,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-125",
        "color": "#FF0000",
        "font_size": 0.6,
        "float_distance_x": 0.3,
        "float_distance_y": -0.8,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3200,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 9,
      "target_y": 12
    },
    {
      "time_offset_ms": 3500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": 0.5,
        "duration_ms": 150,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 3600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.0], [1.2, 0], [0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#708090",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.5,
        "start_color": "#A9A9A9",
        "end_color": "#D3D3D3",
        "start_scale": 0.6,
        "end_scale": 0.1,
        "speed": 3.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 3650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 3650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-42",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Nghiền nát đống sắt vụn của ngươi!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 4200,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -64,
      "is_critical": false
    },
    {
      "time_offset_ms": 4200,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 4300,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 4300,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 4300,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-64",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    }
  ]
}
{
  "chunk_summary": "Braum kích hoạt giao thức bảo vệ tối đa, dậm mạnh tạo sóng xung kích dung nham làm choáng cả Karn và Nyx. Ngay khi tỉnh lại, Karn điên cuồng vung xích sắt móc trúng Braum, kéo lê và phá nát lớp giáp của gã khổng lồ. Lợi dụng sự hỗn loạn, Nyx hóa bóng lướt xuyên qua tàn lửa, tập kích thành công Lyra. Cùng lúc, cái nóng khủng khiếp của Lò Luyện Ngục tiếp tục bào mòn sinh lực của tất cả những kẻ đang đứng trên sàn đấu.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 232, "x": 6, "y": 15 },
    "char_A2": { "hp": 591, "x": 9, "y": 12 },
    "char_B1": { "hp": 203, "x": 7, "y": 14 },
    "char_B2": { "hp": 522, "x": 10, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 5100,
      "type": "NARRATIVE",
      "content": "Sàn kim loại tiếp tục sôi sục. Hơi nóng nung chảy mọi hàng phòng ngự!"
    },
    {
      "time_offset_ms": 5300,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Phát hiện đe dọa diện rộng. Kích hoạt Rung Chấn.",
      "emotion": "ROBOTIC"
    },
    {
      "time_offset_ms": 5500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 5500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B1",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 1.2,
        "y": -0.8,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 5650,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.3,
        "scale_y": 0.7,
        "y": 0,
        "duration_ms": 100,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 5750,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 2.0,
        "line_width": 0.4,
        "line_color": "#FFA500",
        "fill_color": "#FFD700",
        "fill_alpha": 0.3,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 250,
        "scale_x": 0.1,
        "scale_y": 0.1
      }
    },
    {
      "time_offset_ms": 5750,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.0,
        "scale_y": 1.0,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": -1.2,
        "duration_ms": 250,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "y": -1.2,
        "duration_ms": 250,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 5900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 400,
        "emit_rate": 20,
        "spawn_width": 1.2,
        "spawn_height": 1.2,
        "start_color": "#FFD700",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "particle_lifetime_ms": 300,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 5900,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 400,
        "emit_rate": 20,
        "spawn_width": 1.2,
        "spawn_height": 1.2,
        "start_color": "#FFD700",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "particle_lifetime_ms": 300,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-38",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.9,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-42",
        "color": "#FF0000",
        "font_size": 0.6,
        "float_distance_x": 0.3,
        "float_distance_y": -0.8,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 5900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.5,
        "offset_y": -1.2,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.4],
        "fade_in_ms": 100,
        "lifetime_ms": 1000,
        "fade_out_ms": 200,
        "rotation_deg": 360
      }
    },
    {
      "time_offset_ms": 5900,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.5,
        "offset_y": -1.2,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.4],
        "fade_in_ms": 100,
        "lifetime_ms": 1000,
        "fade_out_ms": 200,
        "rotation_deg": 360
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "GRAARRR! Kẻ cản đường phải bị xé xác!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 7000,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [5.0, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#696969",
        "alpha": 1.0,
        "fade_in_ms": 100,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 7250,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": -4.0,
        "duration_ms": 150,
        "ease": "power3.in"
      }
    },
    {
      "time_offset_ms": 7250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "emit_rate": 30,
        "spawn_radius": 0.4,
        "start_color": "#A9A9A9",
        "end_color": "#808080",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "particle_lifetime_ms": 200,
        "speed": 2.0
      }
    },
    {
      "time_offset_ms": 7400,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "spawn_radius": 0.6,
        "start_color": "#808080",
        "end_color": "#696969",
        "start_scale": 0.4,
        "end_scale": 0.05,
        "particle_lifetime_ms": 400,
        "speed": 3.5,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 7250,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 7250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-65",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 14
    },
    {
      "time_offset_ms": 8000,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -60,
      "is_critical": false
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 1000,
        "emit_rate": 15,
        "spawn_radius": 1.5,
        "start_color": "#1A1A1A",
        "end_color": "#000000",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 0.5,
        "particle_lifetime_ms": 800
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 4.0,
        "duration_ms": 250,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[-4.0, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#333333",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 9250,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "spawn_radius": 0.8,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "particle_lifetime_ms": 700,
        "speed": 3.0,
        "spread_angle": 360,
        "gravity_y": 3.0
      }
    },
    {
      "time_offset_ms": 9250,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 9250,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-60",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.1,
        "start_color": "#00FFFF",
        "end_color": "#8A2BE2",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 1.5,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 8550,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 1.0,
        "taper_end": 0.1,
        "color": "#00FFFF",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "animation_speed": 5.0,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 8650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 0.5,
        "start_color": "#8A2BE2",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 8650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 8650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-48",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 9800,
      "type": "NARRATIVE",
      "content": "Toàn bộ chiến trường bốc cháy dữ dội!"
    },
    {
      "time_offset_ms": 9900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 9900,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 9900,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 9900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    }
  ]
}
{
  "chunk_summary": "Sức nóng của Lò Luyện Ngục tiếp tục bào mòn sinh lực các chiến binh. Nyx áp sát tung những nhát chém vô ảnh vào Lyra, nhưng nữ xạ thủ lập tức tạo khoảng cách và đáp trả bằng luồng plasma rực sáng. Cùng lúc, Karn và Braum lao vào cuộc chiến thể lực tàn khốc, liên tục tung ra các đòn rìu đẫm máu và đập khiên chát chúa giữa cơn mưa tàn lửa.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 172, "x": 5, "y": 17 },
    "char_A2": { "hp": 516, "x": 9, "y": 12 },
    "char_B1": { "hp": 133, "x": 7, "y": 14 },
    "char_B2": { "hp": 467, "x": 10, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 10200,
      "type": "NARRATIVE",
      "content": "Nhiệt độ Lò Luyện Ngục không ngừng tăng lên. Mọi thứ đang nóng chảy!"
    },
    {
      "time_offset_ms": 10500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -45,
      "is_critical": false
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[-0.8, -1.0], [0, 0], [-0.8, 1.0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 0.05,
        "taper_end": 0.05,
        "color": "#000000",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 10550,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[-0.9, -1.1], [-0.1, 0], [-0.9, 1.1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#800080",
        "alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-45",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 11500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 5,
      "target_y": 17
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -55,
      "is_critical": false
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.1,
        "start_color": "#00FFFF",
        "end_color": "#8A2BE2",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 1.5,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 12050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 1.0,
        "taper_end": 0.1,
        "color": "#00FFFF",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "animation_speed": 5.0,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 12150,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 0.5,
        "start_color": "#8A2BE2",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.9,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-55",
        "color": "#FF0000",
        "font_size": 0.6,
        "float_distance_x": 0.3,
        "float_distance_y": -0.8,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -40,
      "is_critical": false
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": 0.5,
        "duration_ms": 150,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 12600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.0], [1.2, 0], [0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#708090",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.5,
        "start_color": "#A9A9A9",
        "end_color": "#D3D3D3",
        "start_scale": 0.6,
        "end_scale": 0.1,
        "speed": 3.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-40",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -60,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-60",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 14500,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Ngươi múa dao chậm quá đấy, cái bóng xám xịt ạ!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 14900,
      "type": "NARRATIVE",
      "content": "Cả 4 chiến binh liên tục mất đi sinh lực do nhiệt lượng khổng lồ từ sàn đấu."
    }
  ]
}
{
  "chunk_summary": "Lyra giải phóng toàn bộ hỏa lực với 'Bão Đạn', đẩy lùi và băm vằn Nyx. Cảm nhận được cơ thể đang dần tan chảy do nhiệt độ cực hạn của Lò Luyện Ngục, sát thủ bóng tối liều mạng lướt đi tung đòn ảo ảnh cuối cùng vào Lyra. Trong khi đó, Karn và Braum vẫn điên cuồng trao đổi sát thương cận chiến trước khi Braum dậm mạnh tạo dư chấn làm choáng ác thú. Vài giây sau, sinh lực cạn kiệt, Nyx hoàn toàn gục ngã và hóa thành tro bụi giữa biển lửa.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 69, "x": 4, "y": 18 },
    "char_A2": { "hp": 443, "x": 9, "y": 12 },
    "char_B1": { "hp": 0, "x": 7, "y": 15 },
    "char_B2": { "hp": 410, "x": 10, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 15000,
      "type": "NARRATIVE",
      "content": "Lò Luyện Ngục đang sôi lên! Mọi thứ dần bốc hơi dưới chân các chiến binh."
    },
    {
      "time_offset_ms": 15200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Cháy thành tro đi, đồ rác rưởi!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 15500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 4,
      "target_y": 18
    },
    {
      "time_offset_ms": 15500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 13
    },
    {
      "time_offset_ms": 15500,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -180,
      "is_critical": true
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "CRIT",
        "color": "#FF4500",
        "font_size": 0.9,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 500,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 1.3,
        "scale_y": 0.7,
        "skew_x": -0.2,
        "duration_ms": 150,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15550,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 30,
        "spawn_radius": 0.5,
        "start_color": "#FFD700",
        "end_color": "#FFFF00",
        "start_scale": 0.4,
        "end_scale": 0.05,
        "particle_lifetime_ms": 400,
        "speed": 5.0,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.0,
        "duration_ms": 200,
        "ease": "power1.out"
      }
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [1, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#ADD8E6",
        "alpha": 0.5,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.2,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 15750,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.3,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.4,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 15900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 15950,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.4,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.6,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.3,
        "end_scale": 2.0,
        "speed": 6.0,
        "emit_angle": 0,
        "spread_angle": 45,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 0.6,
        "duration_ms": 100,
        "ease": "power1.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "color_tint": "#8B0000",
        "tint_alpha": 0.9,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_text": {
        "content": "-",
        "color": "#FF0000",
        "font_size": 0.6,
        "float_distance_x": 0.3,
        "float_distance_y": -0.8,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 15
    },
    {
      "time_offset_ms": 16700,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Cái chết... không phân biệt một ai.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 16800,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -88,
      "is_critical": false
    },
    {
      "time_offset_ms": 16800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 1000,
        "emit_rate": 15,
        "spawn_radius": 1.5,
        "start_color": "#1A1A1A",
        "end_color": "#000000",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 0.5,
        "particle_lifetime_ms": 800
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 4.0,
        "duration_ms": 250,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_mesh": {
        "path_points": [[-4.0, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#333333",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 18050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 40,
        "spawn_radius": 0.8,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "particle_lifetime_ms": 700,
        "speed": 3.0,
        "spread_angle": 360,
        "gravity_y": 3.0
      }
    },
    {
      "time_offset_ms": 18050,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 18050,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_text": {
        "content": "-88",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 17100,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-58",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 17600,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Kẻ thù chưa bị triệt tiêu. Áp dụng dư chấn.",
      "emotion": "ROBOTIC"
    },
    {
      "time_offset_ms": 17800,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 1.2,
        "y": -0.8,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 17950,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.3,
        "scale_y": 0.7,
        "y": 0,
        "duration_ms": 100,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 18050,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 2.0,
        "line_width": 0.4,
        "line_color": "#FFA500",
        "fill_color": "#FFD700",
        "fill_alpha": 0.3,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 250,
        "scale_x": 0.1,
        "scale_y": 0.1
      }
    },
    {
      "time_offset_ms": 18050,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.0,
        "scale_y": 1.0,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 18150,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": -1.2,
        "duration_ms": 250,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 18200,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 400,
        "emit_rate": 20,
        "spawn_width": 1.2,
        "spawn_height": 1.2,
        "start_color": "#FFD700",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "particle_lifetime_ms": 300,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 18150,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 18150,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-42",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18200,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.5,
        "offset_y": -1.2,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.4],
        "fade_in_ms": 100,
        "lifetime_ms": 1000,
        "fade_out_ms": 200,
        "rotation_deg": 360
      }
    },
    {
      "time_offset_ms": 18200,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.08,
        "duration_ms": 1000,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 19500,
      "type": "NARRATIVE",
      "content": "Nhiệt độ cực hạn rút cạn sinh lực. Sát thủ bóng đêm hoàn toàn gục ngã!"
    },
    {
      "time_offset_ms": 19800,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 19800,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 19800,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 19800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    }
  ]
}
{
  "chunk_summary": "Khi cái bóng của Nyx vừa tan biến thành tro bụi, Karn nổi điên điên cuồng lao đến một vị trí thuận lợi, tung sợi xích sắt tử thần móc thẳng vào ngực Braum và kéo giật cỗ máy khổng lồ về phía mình. Lớp giáp của Braum bị phá vỡ nghiêm trọng. Không bỏ lỡ cơ hội, Lyra ngay lập tức di chuyển vào tầm ngắm, khai hỏa tia plasma hỗ trợ, trong khi Braum cũng kiên cường đáp trả bằng một cú nện khiên chát chúa. Lò Luyện Ngục tiếp tục rực lửa, bòn rút sinh lực của tất cả những kẻ còn sống sót.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 54, "x": 1, "y": 10 },
    "char_A2": { "hp": 366, "x": 5, "y": 10 },
    "char_B1": { "hp": 0, "x": 7, "y": 15 },
    "char_B2": { "hp": 306, "x": 5, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 20000,
      "type": "NARRATIVE",
      "content": "Bóng Đêm đã tàn lụi, nhưng Lò Luyện Ngục vẫn không ngừng gầm thét."
    },
    {
      "time_offset_ms": 20200,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 1,
      "target_y": 10
    },
    {
      "time_offset_ms": 20500,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 5,
      "target_y": 10
    },
    {
      "time_offset_ms": 20800,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 9,
      "target_y": 10
    },
    {
      "time_offset_ms": 22000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Một mình tao sẽ xé xác tất cả bọn mày!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0, 0], [5.0, 0]],
        "is_closed_path": false,
        "thickness": 0.3,
        "color": "#696969",
        "alpha": 1.0,
        "fade_in_ms": 100,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 22750,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -62,
      "is_critical": false
    },
    {
      "time_offset_ms": 22750,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": -4.0,
        "duration_ms": 150,
        "ease": "power3.in"
      }
    },
    {
      "time_offset_ms": 22750,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 150,
        "emit_rate": 30,
        "spawn_radius": 0.4,
        "start_color": "#A9A9A9",
        "end_color": "#808080",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "particle_lifetime_ms": 200,
        "speed": 2.0
      }
    },
    {
      "time_offset_ms": 22750,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 22750,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-62",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 22900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "spawn_radius": 0.6,
        "start_color": "#808080",
        "end_color": "#696969",
        "start_scale": 0.4,
        "end_scale": 0.05,
        "particle_lifetime_ms": 400,
        "speed": 3.5,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 23500,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.1,
        "start_color": "#00FFFF",
        "end_color": "#8A2BE2",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 1.5,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 23550,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 1.0,
        "taper_end": 0.1,
        "color": "#00FFFF",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "animation_speed": 5.0,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 23650,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -47,
      "is_critical": false
    },
    {
      "time_offset_ms": 23650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 0.5,
        "start_color": "#8A2BE2",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 23650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 23650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-47",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 24000,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": 0.5,
        "duration_ms": 150,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 24100,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.0], [1.2, 0], [0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#708090",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 24150,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 24150,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.5,
        "start_color": "#A9A9A9",
        "end_color": "#D3D3D3",
        "start_scale": 0.6,
        "end_scale": 0.1,
        "speed": 3.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 24150,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 24150,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-42",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 24800,
      "type": "NARRATIVE",
      "content": "Sàn kim loại tiếp tục nung chảy giáp trụ của những kẻ còn trụ lại."
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 24900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    }
  ]
}
{
  "chunk_summary": "Braum và Karn tiếp tục cuộc đụng độ thể lực đẫm máu giữa biển lửa. Dù giáp trụ đã vỡ nát, Braum vẫn kiên cường cản bước tiến của ác thú, tạo khoảng trống hoàn hảo. Từ phía sau, Lyra khôn khéo lùi lại một bước, xả toàn bộ hỏa lực của 'Bão Đạn' thẳng vào Karn, đẩy lùi và bòn rút sinh lực hắn. Cả ba kẻ sống sót đều đang thoi thóp dưới cái nóng thiêu đốt tột độ của Lò Luyện Ngục, trận chiến đã bước vào những giây phút sinh tử cuối cùng.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 39, "x": 0, "y": 10 },
    "char_A2": { "hp": 224, "x": 5, "y": 10 },
    "char_B1": { "hp": 0, "x": 7, "y": 15 },
    "char_B2": { "hp": 80, "x": 6, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 25000,
      "type": "NARRATIVE",
      "content": "Máu và kim loại hòa quyện. Nhiệt lượng Lò Luyện Ngục đang nuốt chửng tất cả!"
    },
    {
      "time_offset_ms": 25200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Ngươi sắp thành đống thịt nướng rồi đấy, con quái vật!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 25500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -62,
      "is_critical": false
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 25600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-62",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 0,
      "target_y": 10
    },
    {
      "time_offset_ms": 25800,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -125,
      "is_critical": false
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.0,
        "duration_ms": 200,
        "ease": "power1.out"
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [1, 0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "color": "#ADD8E6",
        "alpha": 0.5,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": { "x": -1.2, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 26050,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": { "x": 0.3, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26200,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": { "x": -1.4, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26200,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.2,
        "end_scale": 1.5,
        "speed": 5.0,
        "emit_angle": 0,
        "spread_angle": 30,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 26250,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": { "x": 0.4, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26400,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": { "x": -1.6, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26400,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.2,
        "start_color": "#FF4500",
        "end_color": "#FF8C00",
        "start_scale": 0.3,
        "end_scale": 2.0,
        "speed": 6.0,
        "emit_angle": 0,
        "spread_angle": 45,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 26450,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": { "x": 0.6, "duration_ms": 100, "ease": "power1.out", "yoyo": true, "repeat": 1 }
    },
    {
      "time_offset_ms": 26450,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 26450,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-125",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 6,
      "target_y": 10
    },
    {
      "time_offset_ms": 27200,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 5,
      "target_y": 10
    },
    {
      "time_offset_ms": 27500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 27500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": 0.5,
        "duration_ms": 150,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 27600,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.0], [1.2, 0], [0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.6,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#708090",
        "alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 27650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 250,
        "spawn_radius": 0.5,
        "start_color": "#A9A9A9",
        "end_color": "#D3D3D3",
        "start_scale": 0.6,
        "end_scale": 0.1,
        "speed": 3.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 27650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 27650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-38",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "RRAAAGH! Chết đi đồ sắt vụn!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 28700,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 28700,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 28800,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 28700,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 28700,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-65",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 29200,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 29200,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.1,
        "start_color": "#00FFFF",
        "end_color": "#8A2BE2",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 1.5,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 29250,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 1.0,
        "taper_end": 0.1,
        "color": "#00FFFF",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "animation_speed": 5.0,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 29350,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 0.5,
        "start_color": "#8A2BE2",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 29350,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 29350,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-48",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 29800,
      "type": "NARRATIVE",
      "content": "Tia lửa điện và khói độc bốc lên ngùn ngụt, trận chiến đã đi đến hồi kết."
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 29900,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    }
  ]
}
{
  "chunk_summary": "Với chút sinh lực thoi thóp cuối cùng, Karn điên cuồng vung rìu chém mạnh vào Braum hòng tìm kiếm một sự kết liễu đồng quy ư tận. Tuy nhiên, bức tường thép vẫn đứng vững và đáp trả bằng cú dậm Rung Chấn làm choáng ác thú. Tận dụng cơ hội, Lyra lướt lên ngang tầm, kết liễu cuộc đời của Đao Phủ bằng một luồng plasma lạnh lùng. Karn gục ngã giữa biển lửa, khép lại trận chiến sinh tử. Kỷ Nguyên Công Nghệ giành chiến thắng cuối cùng tại Lò Luyện Ngục.",
  "is_game_over": true,
  "winning_team": "team_A",
  "updated_state": {
    "char_A1": { "hp": 24, "x": 2, "y": 10 },
    "char_A2": { "hp": 151, "x": 5, "y": 10 },
    "char_B1": { "hp": 0, "x": 7, "y": 15 },
    "char_B2": { "hp": 0, "x": 6, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 30000,
      "type": "NARRATIVE",
      "content": "Sàn đấu bốc hơi đến mức cực hạn. Sinh tử đếm ngược từng giây."
    },
    {
      "time_offset_ms": 30200,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "Chết cùng tao đi, đồ rác rưởi!!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 30500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_mesh": {
        "path_points": [[0.5, -1.5], [1.5, 0], [0.5, 1.5]],
        "is_closed_path": false,
        "thickness": 0.7,
        "taper_start": 0.1,
        "taper_end": 0.1,
        "color": "#DC143C",
        "alpha": 0.9,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 30600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 300,
        "spawn_radius": 0.5,
        "start_color": "#B22222",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 3.0,
        "emit_angle": 0,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.8,
        "duration_ms": 100,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_text": {
        "content": "-58",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_x": 0.5,
        "float_distance_y": -0.5,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 100,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31000,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "Đe dọa mức độ nghiêm trọng. Khởi động loại bỏ mục tiêu.",
      "emotion": "ROBOTIC"
    },
    {
      "time_offset_ms": 31200,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -39,
      "is_critical": false
    },
    {
      "time_offset_ms": 31200,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 1.2,
        "y": -0.8,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 31350,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.3,
        "scale_y": 0.7,
        "y": 0,
        "duration_ms": 100,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 31450,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 2.0,
        "line_width": 0.4,
        "line_color": "#FFA500",
        "fill_color": "#FFD700",
        "fill_alpha": 0.3,
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 250,
        "scale_x": 0.1,
        "scale_y": 0.1
      }
    },
    {
      "time_offset_ms": 31450,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.0,
        "scale_y": 1.0,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 31550,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": -1.2,
        "duration_ms": 250,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 31600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "emit_duration_ms": 400,
        "emit_rate": 20,
        "spawn_width": 1.2,
        "spawn_height": 1.2,
        "start_color": "#FFD700",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "particle_lifetime_ms": 300,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 31550,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 31550,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-39",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31600,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_graphics": {
        "shape_type": "circle",
        "radius": 0.5,
        "offset_y": -1.2,
        "line_width": 0.1,
        "line_color": "#FFD700",
        "line_dash": [0.2, 0.4],
        "fade_in_ms": 100,
        "lifetime_ms": 1000,
        "fade_out_ms": 200,
        "rotation_deg": 360
      }
    },
    {
      "time_offset_ms": 31600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.08,
        "duration_ms": 1000,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 31800,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 2,
      "target_y": 10
    },
    {
      "time_offset_ms": 32500,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Ngủ ngoan nhé, cục thịt thối.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 32700,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -250,
      "is_critical": false
    },
    {
      "time_offset_ms": 32700,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 200,
        "spawn_radius": 0.1,
        "start_color": "#00FFFF",
        "end_color": "#8A2BE2",
        "start_scale": 0.8,
        "end_scale": 0.1,
        "speed": 1.5,
        "spread_angle": 360,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 32750,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_mesh": {
        "path_points": [[0, 0], [4, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "taper_start": 1.0,
        "taper_end": 0.1,
        "color": "#00FFFF",
        "alpha": 1.0,
        "blend_mode": "ADD",
        "animation_speed": 5.0,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 32850,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_particles": {
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 300,
        "spawn_width": 0.5,
        "spawn_height": 0.5,
        "start_color": "#8A2BE2",
        "end_color": "#00FFFF",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4.0,
        "spread_angle": 180,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 32850,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.1,
        "duration_ms": 150,
        "ease": "rough.ease"
      }
    },
    {
      "time_offset_ms": 32850,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_text": {
        "content": "-250",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 33500,
      "type": "NARRATIVE",
      "content": "Karn ngã gục. Lò Luyện Ngục đã thiêu rụi toàn bộ phe Quái Vật."
    },
    {
      "time_offset_ms": 34900,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 34900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    },
    {
      "time_offset_ms": 34900,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "emitter_type": "continuous",
        "offset_y": 0.8,
        "emit_duration_ms": 2000,
        "emit_rate": 8,
        "spawn_width": 1.2,
        "start_color": "#FF4500",
        "end_color": "#8B0000",
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "start_scale": 0.25,
        "end_scale": 0.05,
        "particle_lifetime_ms": 600,
        "speed": 1.5,
        "gravity_y": -1.5,
        "blend_mode": "ADD"
      }
    },
    {
      "time_offset_ms": 34900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#FF2200",
        "tint_alpha": 0.6,
        "duration_ms": 800,
        "yoyo": true,
        "repeat": -1
      }
    }
  ]
}

`;
// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING || RAW_DATA_STRING.trim() === '' || RAW_DATA_STRING.includes('[DÁN CÁC CHUNK JSON MỚI CỦA BẠN VÀO ĐÂY]')) {
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

    // 2. Cập nhật dữ liệu cho kịch bản Lò Luyện Ngục
    useMainStore.setState({
      mapPreviewUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop',
      mapDescription: "Lò Luyện Ngục (Inferno Forge): Kích thước 20x20. Cái nóng thiêu đốt làm mất 3 HP/giây của tất cả đơn vị. Đứng yên quá lâu sẽ bị hiệu ứng nung chảy giáp.",
      
      uploadedShapes: [
        { id: "shape-lyra", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Lyra&background=FF4500&color=fff&size=150&bold=true" },
        { id: "shape-braum", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Braum&background=A9A9A9&color=fff&size=150&bold=true" },
        { id: "shape-nyx", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Nyx&background=1A1A1A&color=9400D3&size=150&bold=true" },
        { id: "shape-karn", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Karn&background=8B0000&color=FFD700&size=150&bold=true" }
      ],

      teamA: [
        {
          id: "char_A1",
          team: 'A',
          name: "Lyra 'Hỏa Tiễn'",
          personality: "Kiêu ngạo, tốc độ cực nhanh, thích chơi đùa với hỏa lực. Thường có những câu thoại mỉa mai.",
          basicAttackDesc: "Đạn Plasma (Tầm 4 ô) - Bắn tia laser cường độ cao.",
          skillDesc: "Bão Đạn - Nhảy lùi lại 1 ô và xả liên tiếp 3 phát đạn vào mục tiêu, gây sát thương lớn và đẩy lùi kẻ địch 1 ô. Hồi chiêu: 10 giây.",
          stats: { hp: 380, maxHp: 380, agility: 6, damage: 45, range: 4 },
          shapeId: "shape-lyra",
          position: { x: 6, y: 18 }
        },
        {
          id: "char_A2",
          team: 'A',
          name: "Braum 'Thiết Tường'",
          personality: "Lầm lì, vững chãi như một ngọn núi thép. Lời nói ngắn gọn, rập khuôn như máy móc.",
          basicAttackDesc: "Đập Khiên (Tầm 1 ô) - Dùng khiên gai nện mạnh vào mục tiêu cận chiến.",
          skillDesc: "Rung Chấn Dung Nham - Dậm dứt khoát xuống sàn đấu, tạo một làn sóng xung kích bán kính 2 ô, hất tung kẻ địch lên không (gây choáng 1 giây) và áp dụng hiệu ứng làm chậm. Hồi chiêu: 12 giây.",
          stats: { hp: 750, maxHp: 750, agility: 3, damage: 40, range: 1 },
          shapeId: "shape-braum",
          position: { x: 7, y: 17 }
        }
      ],

      teamB: [
        {
          id: "char_B1",
          team: 'B',
          name: "Nyx 'Bóng Đêm'",
          personality: "Lạnh lùng, tàn độc, thoắt ẩn thoắt hiện. Thích sự im lặng của cái chết.",
          basicAttackDesc: "Lưỡi Dao Bóng Tối (Tầm 1 ô) - Chém cận chiến tốc độ cao.",
          skillDesc: "Ảo Ảnh Sát Tự - Lướt xuyên qua mục tiêu theo đường thẳng (tối đa 4 ô), để lại một cái bóng nổ tung sau 1 giây. Gây hiệu ứng Mù và Chảy máu. Hồi chiêu: 8 giây.",
          stats: { hp: 400, maxHp: 400, agility: 7, damage: 55, range: 1 },
          shapeId: "shape-nyx",
          position: { x: 14, y: 5 }
        },
        {
          id: "char_B2",
          team: 'B',
          name: "Karn 'Đao Phủ'",
          personality: "Cuồng nộ, khát máu, luôn gầm thét, tìm kiếm sự phá hủy.",
          basicAttackDesc: "Rìu Xoay (Tầm 2 ô) - Quét búa rìu diện rộng.",
          skillDesc: "Xích Sắt Tử Thần - Phóng lưỡi rìu móc xích thẳng về phía trước (tối đa 5 ô), nếu trúng sẽ kéo giật nạn nhân về sát phía mình và gây hiệu ứng Vỡ Giáp (giảm giáp trong 3 giây). Hồi chiêu: 15 giây.",
          stats: { hp: 680, maxHp: 680, agility: 4, damage: 60, range: 2 },
          shapeId: "shape-karn",
          position: { x: 13, y: 6 }
        }
      ],

      Master_Timeline: combinedTimeline,
      appStage: 'PHASE_5_SIMULATING'
    });
  };

  return (
    <button
      onClick={handleQuickStart}
      className="fixed top-4 right-4 z-50 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.8)] border-2 border-orange-400 animate-pulse transition-all"
    >
      🔥 TEST LÒ LUYỆN NGỤC
    </button>
  )
}