import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
const RAW_DATA_STRING = `
{
  "chunk_summary": "Bão cát cuộn trào trên trạm xăng bỏ hoang. Viper lùi lại ngắm bắn từ xa, trong khi Buzz chớp thời cơ lao tới vồ lấy Riko. Jax lập tức lao lên can thiệp, nện búa tạ vào Buzz. Riko dù bị trói chân vẫn kịp ghim mũi tên nổ vào Buzz, thiêu đốt hắn. Ngay sau đó, Viper hoàn tất ngắm bắn, khai hỏa luồng đạn xuyên giáp cực mạnh hất văng Jax về phía sau.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": { "hp": 1088, "x": 10, "y": 14 },
    "char_riko_02": { "hp": 500, "x": 11, "y": 14 },
    "raider_krieg_boss": { "hp": 1800, "x": 10, "y": 12 },
    "raider_buzz_01": { "hp": 375, "x": 11, "y": 13 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 7 }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "NARRATIVE",
      "content": "Bão cát làm mờ tầm nhìn, không khí nồng nặc mùi gỉ sét và dầu máy."
    },
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_particles": {
        "x": -800,
        "y": -200,
        "emitter_type": "stream",
        "particle_count": 400,
        "lifetime_ms": 3500,
        "start_color": "#EEE8AA",
        "end_color": "#DAA520",
        "start_scale": 2.5,
        "end_scale": 1.2,
        "speed": 40,
        "spread_angle": 5
      }
    },
    {
      "time_offset_ms": 0,
      "type": "MOVE",
      "actor_id": "raider_viper_02",
      "target_x": 15,
      "target_y": 7
    },
    {
      "time_offset_ms": 100,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 10,
      "target_y": 9
    },
    {
      "time_offset_ms": 200,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 9,
      "target_y": 11
    },
    {
      "time_offset_ms": 300,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 11,
      "target_y": 14
    },
    {
      "time_offset_ms": 400,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 10,
      "target_y": 11
    },
    {
      "time_offset_ms": 800,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_particles": {
        "x": -800,
        "y": 0,
        "emitter_type": "pulse",
        "particle_count": 150,
        "lifetime_ms": 2500,
        "start_color": "#F4A460",
        "end_color": "#B8860B",
        "start_scale": 4.0,
        "end_scale": 2.0,
        "speed": 60,
        "spread_angle": 2
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 99, "yoyo": false }
    },
    {
      "time_offset_ms": 990,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 11,
      "target_y": 13
    },
    {
      "time_offset_ms": 1000,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11,
        "y": 13,
        "scale": 0.4,
        "opacity": 1,
        "rotation_deg": -15,
        "duration_ms": 120,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 1120,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 16,
        "y": 7,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 180,
        "duration_ms": 200,
        "ease": "power1.out"
      }
    },
    {
      "time_offset_ms": 1320,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11,
        "y": 13,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": 360,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 1470,
      "type": "SKILL",
      "actor_id": "raider_buzz_01",
      "target_id": "char_riko_02",
      "hp_change": -200,
      "is_critical": false
    },
    {
      "time_offset_ms": 1470,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_particles": {
        "x": 11,
        "y": 30,
        "emitter_type": "burst",
        "particle_count": 40,
        "lifetime_ms": 450,
        "start_color": "#808080",
        "end_color": "#D3D3D3",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 12,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 1470,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-200",
        "x": 11,
        "y": -6,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13,
        "y": 14,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -2,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 1480,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Cút ra khỏi người tao!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 1500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[-7, 18], [1, 2], [11, 16], [21, 2], [29, 18], [23, 34], [-1, 34]],
        "radius": 0, "width": 0, "height": 0,
        "fill_color": "#2F4F4F", "fill_alpha": 1.0,
        "line_width": 3, "line_color": "#000000", "line_alpha": 1.0
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 11,
        "y": 12,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 1500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_mesh": {
        "path_points": [[-13, 50], [11, 26], [35, 50]],
        "thickness": 8,
        "color": "#8B4513",
        "distortion_amplitude": 6,
        "animation_speed": 4,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 1600,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 10,
      "target_y": 13
    },
    {
      "time_offset_ms": 1600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_mesh": {
        "path_points": [[-19, 42], [11, 46], [41, 42]],
        "thickness": 6,
        "color": "#696969",
        "distortion_amplitude": 5,
        "animation_speed": 5,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 1800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_mesh": {
        "path_points": [[10, 12], [12, 10], [14, 13]],
        "thickness": 28,
        "color": "#708090",
        "distortion_amplitude": 2,
        "animation_speed": 1,
        "style": "dash_trail"
      },
      "blend_mode": { "mode": "NORMAL" }
    },
    {
      "time_offset_ms": 2250,
      "type": "ATTACK",
      "actor_id": "char_jax_01",
      "target_id": "raider_buzz_01",
      "hp_change": -215,
      "is_critical": false
    },
    {
      "time_offset_ms": 2250,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 25,
        "emitter_type": "burst",
        "particle_count": 35,
        "lifetime_ms": 600,
        "start_color": "#D2B48C",
        "end_color": "#8B4513",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 8,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 2250,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11.4,
        "y": 13.4,
        "scale": 0.85,
        "opacity": 1,
        "rotation_deg": -8,
        "duration_ms": 120,
        "ease": "power2.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 2250,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-215",
        "x": 11,
        "y": -7,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 13,
        "y": 13,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -2,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 2300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 8,
        "height": 24,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 1,
        "line_color": "#FFFF00",
        "line_alpha": 0.5
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "glow",
        "intensity": 3.0,
        "color": "#FF4500",
        "radius": 15,
        "duration_ms": 100
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 9, "yoyo": true }
    },
    {
      "time_offset_ms": 2500,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 10,
      "target_y": 12
    },
    {
      "time_offset_ms": 3200,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 400,
        "height": 8,
        "fill_color": "#FF0000",
        "fill_alpha": 0.9,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 9,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "power1.inOut"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 29, "yoyo": true }
    },
    {
      "time_offset_ms": 3200,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_filters": {
        "target_id": "raider_viper_02",
        "filter_type": "blur",
        "intensity": 8.0,
        "color": "#FF4500",
        "radius": 25,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -260,
      "is_critical": false
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[-1, -19], [23, -19], [23, 1], [43, 1], [43, 25], [23, 25], [23, 45], [-1, 45], [-1, 25], [-21, 25], [-21, 1], [-1, 1]],
        "radius": 0, "width": 0, "height": 0,
        "fill_color": "#FF8C00", "fill_alpha": 1.0,
        "line_width": 3, "line_color": "#1A1A1A", "line_alpha": 0.9
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 10,
        "y": 12,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": -10,
        "duration_ms": 150,
        "ease": "bounce.out"
      },
      "pixi_particles": {
        "x": 11,
        "y": 13,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 1000,
        "start_color": "#FF4500",
        "end_color": "#000000",
        "start_scale": 1.8,
        "end_scale": 0.1,
        "speed": 18,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-260",
        "x": 11,
        "y": -7,
        "color": "#FF4500",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 13,
        "y": 13,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -2,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 37,
        "emitter_type": "fountain",
        "particle_count": 35,
        "lifetime_ms": 900,
        "start_color": "#FFA500",
        "end_color": "#FF0000",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 8,
        "spread_angle": 50
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 23,
        "emitter_type": "stream",
        "particle_count": 25,
        "lifetime_ms": 1500,
        "start_color": "#2F4F4F",
        "end_color": "#000000",
        "start_scale": 0.8,
        "end_scale": 2.0,
        "speed": 4,
        "spread_angle": 25
      }
    },
    {
      "time_offset_ms": 3400,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 3,
        "emitter_type": "fountain",
        "particle_count": 40,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#333333",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 6,
        "spread_angle": 60
      }
    },
    {
      "time_offset_ms": 4700,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 800,
        "height": 40,
        "fill_color": "#0000FF",
        "fill_alpha": 0.8,
        "line_width": 6,
        "line_color": "#00BFFF",
        "line_alpha": 1.0
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 13,
        "y": 7,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4700,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_mesh": {
        "path_points": [[15, 7], [45, 7]],
        "thickness": 22,
        "color": "#00FFFF",
        "distortion_amplitude": 20,
        "animation_speed": 12,
        "style": "lightning_arc"
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 15,
        "y": 7,
        "emitter_type": "stream",
        "particle_count": 120,
        "lifetime_ms": 700,
        "start_color": "#87CEEB",
        "end_color": "#FFFFFF",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 30,
        "spread_angle": 25
      }
    },
    {
      "time_offset_ms": 4750,
      "type": "SKILL",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -412,
      "is_critical": false
    },
    {
      "time_offset_ms": 4750,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 12,
        "y": 13,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -10,
        "duration_ms": 250,
        "ease": "power2.out"
      },
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 56,
        "height": 56,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.95,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 4750,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-412",
        "x": 10,
        "y": -6,
        "color": "#FFFF00",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 12,
        "y": 13,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -2,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4760,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 10,
      "target_y": 14
    },
    {
      "time_offset_ms": 4900,
      "type": "DIALOGUE",
      "actor_id": "char_jax_01",
      "content": "Khá lắm...",
      "emotion": "STOIC"
    }
  ]
}
{
  "chunk_summary": "Krieg điên cuồng lao tới nhắm vào Riko, vung cưa máy xé rách lớp phòng thủ của cô nàng mỏng manh. Riko hoảng loạn kêu cứu. Ngay lập tức, Jax tiến lên, vận sức tung một cú nện búa tạ phá đất cực mạnh, nghiền nát Buzz thành đống bùn và hất văng Krieg khiến gã choáng váng. Chớp thời cơ, Riko phản công bằng một phát nỏ hiểm hóc.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": { "hp": 1088, "x": 10, "y": 15 },
    "char_riko_02": { "hp": 50, "x": 12, "y": 16 },
    "raider_krieg_boss": { "hp": 1290, "x": 11, "y": 14 },
    "raider_buzz_01": { "hp": 0, "x": 11, "y": 14 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 5100,
      "type": "NARRATIVE",
      "content": "Krieg gầm rống điên dại, gạt Jax sang một bên để lao thẳng vào Riko đang yếu ớt!"
    },
    {
      "time_offset_ms": 5200,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 12,
      "target_y": 16
    },
    {
      "time_offset_ms": 5400,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 11,
      "target_y": 15
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 4,
        "y": 0,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 15,
        "duration_ms": 250,
        "ease": "power2.in"
      },
      "pixi_particles": {
        "x": 0,
        "y": 0,
        "emitter_type": "stream",
        "particle_count": 60,
        "lifetime_ms": 350,
        "start_color": "#8B0000",
        "end_color": "#FF0000",
        "start_scale": 1.5,
        "end_scale": 0,
        "speed": 0,
        "spread_angle": 0
      }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[-54, -54], [54, -54], [54, 54], [-54, 54]],
        "thickness": 8,
        "color": "#8B0000",
        "distortion_amplitude": 25,
        "animation_speed": 20,
        "style": "whip_curve"
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 0,
        "y": 0,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": -720,
        "duration_ms": 200,
        "ease": "linear"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 200, "repeat": 2, "yoyo": false }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 0,
        "y": 0,
        "emitter_type": "burst",
        "particle_count": 50,
        "lifetime_ms": 450,
        "start_color": "#FFA500",
        "end_color": "#808080",
        "start_scale": 1.8,
        "end_scale": 0.3,
        "speed": 22,
        "spread_angle": 360
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 200, "repeat": 2, "yoyo": false }
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 0,
        "y": 0,
        "emitter_type": "pulse",
        "particle_count": 30,
        "lifetime_ms": 600,
        "start_color": "#696969",
        "end_color": "#A9A9A9",
        "start_scale": 1.0,
        "end_scale": 2.5,
        "speed": 5,
        "spread_angle": 360
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 200, "repeat": 2, "yoyo": false }
    },
    {
      "time_offset_ms": 5850,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_riko_02",
      "hp_change": -150,
      "is_critical": false
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#FF0000",
        "radius": 12,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": -1.2,
        "y": -0.8,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -5,
        "duration_ms": 120,
        "ease": "elastic.in"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 6050,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_riko_02",
      "hp_change": -140,
      "is_critical": false
    },
    {
      "time_offset_ms": 6050,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#FF0000",
        "radius": 12,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": -1.2,
        "y": -0.8,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -5,
        "duration_ms": 120,
        "ease": "elastic.in"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 6250,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_riko_02",
      "hp_change": -160,
      "is_critical": false
    },
    {
      "time_offset_ms": 6250,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#FF0000",
        "radius": 12,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": -1.2,
        "y": -0.8,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -5,
        "duration_ms": 120,
        "ease": "elastic.in"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 6300,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Chết tiệt, cứu tao với ông già!!",
      "emotion": "PANIC"
    },
    {
      "time_offset_ms": 6400,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 10,
      "target_y": 15
    },
    {
      "time_offset_ms": 6600,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 11,
      "target_y": 14
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#BDB76B",
        "radius": 20,
        "duration_ms": 1000
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 3,
        "y": 0,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 40,
        "ease": "power1.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 40, "repeat": 25, "yoyo": true }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_mesh": {
        "path_points": [[0, -2], [0, 4]],
        "thickness": 45,
        "color": "#FFFF00",
        "distortion_amplitude": 8,
        "animation_speed": 3,
        "style": "whip_curve"
      },
      "blend_mode": { "mode": "ADD" }
    },
    {
      "time_offset_ms": 7850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "shockwave",
        "intensity": 5.0,
        "color": "#FFFFFF",
        "radius": 200,
        "duration_ms": 600
      }
    },
    {
      "time_offset_ms": 7900,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -360,
      "is_critical": false
    },
    {
      "time_offset_ms": 7900,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[0, 0], [-5, 6], [5, 6], [-2, 8], [3, 8]],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "#8B4513",
        "fill_alpha": 0.9,
        "line_width": 2,
        "line_color": "#FFBF00",
        "line_alpha": 1.0
      },
      "pixi_particles": {
        "x": 0,
        "y": 4,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 800,
        "start_color": "#FFBF00",
        "end_color": "#8B4513",
        "start_scale": 2.0,
        "end_scale": 0.1,
        "speed": 22,
        "spread_angle": 90
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 1.5,
        "y": 1.5,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 15,
        "duration_ms": 250,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 7900,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 0,
        "y": -40,
        "emitter_type": "pulse",
        "particle_count": 3,
        "lifetime_ms": 1500,
        "start_color": "#FFD700",
        "end_color": "#FFA500",
        "start_scale": 1.5,
        "end_scale": 1.5,
        "speed": 3,
        "spread_angle": 360
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 0.5,
        "y": 0,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 8,
        "duration_ms": 150,
        "ease": "power1.inOut"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 9, "yoyo": true }
    },
    {
      "time_offset_ms": 7900,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_buzz_01",
      "hp_change": -375,
      "is_critical": true
    },
    {
      "time_offset_ms": 7900,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "CRIT",
        "x": 0,
        "y": -45,
        "color": "#FF4500",
        "font_size": 48,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -30,
        "fade_duration_ms": 1000
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 3,
        "y": 0,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": 5,
        "duration_ms": 100,
        "ease": "elastic.out"
      },
      "pixi_particles": {
        "x": 0,
        "y": -45,
        "emitter_type": "burst",
        "particle_count": 50,
        "lifetime_ms": 700,
        "start_color": "#FFFF00",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0,
        "speed": 20,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 7910,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 11,
      "target_y": 14
    },
    {
      "time_offset_ms": 8100,
      "type": "NARRATIVE",
      "content": "Cú nện phá đất của Jax nghiền nát Buzz thành đống bùn máu, đồng thời khiến Krieg choáng váng khụy gối."
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_mesh": {
        "path_points": [[0, 0], [8, 0]],
        "thickness": 3,
        "color": "#FFFFFF",
        "distortion_amplitude": 0,
        "animation_speed": 8,
        "style": "dash_trail"
      },
      "blend_mode": { "mode": "ADD" }
    },
    {
      "time_offset_ms": 8580,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -150,
      "is_critical": false
    },
    {
      "time_offset_ms": 8580,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 0,
        "y": 0,
        "emitter_type": "burst",
        "particle_count": 20,
        "lifetime_ms": 300,
        "start_color": "#E0E0E0",
        "end_color": "#FFFFFF",
        "start_scale": 1.0,
        "end_scale": 0,
        "speed": 12,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 8580,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[-2, 2], [0, 0], [2, -2]],
        "thickness": 5,
        "color": "#E0FFFF",
        "distortion_amplitude": 25,
        "animation_speed": 15,
        "style": "lightning_arc"
      },
      "blend_mode": { "mode": "SCREEN" },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": -0.2,
        "y": -0.2,
        "scale": 1.1,
        "opacity": 1,
        "rotation_deg": 3,
        "duration_ms": 100,
        "ease": "power1.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 9600,
      "type": "MOVE",
      "actor_id": "raider_viper_02",
      "target_x": 15,
      "target_y": 10
    }
  ]
}
{
  "chunk_summary": "Bị dồn vào chân tường, Riko điên cuồng bắn mũi tên thuốc nổ thẳng vào vị trí Krieg đang đứng cạnh thùng phi xăng. Vụ nổ liên hoàn hất tung tất cả, cướp đi sinh mạng Riko, khiến Krieg trọng thương và Jax bị vạ lây. Lợi dụng sự hỗn loạn, Viper tung luồng đạn xuyên giáp từ xa hất văng Jax. Krieg lập tức áp sát bồi thêm một nhát cưa máy tàn độc, nhưng người cựu binh gấu sẹo vẫn lỳ lợm đứng vững trên vũng máu.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": { "hp": 93, "x": 9, "y": 15 },
    "char_riko_02": { "hp": 0, "x": 12, "y": 16 },
    "raider_krieg_boss": { "hp": 740, "x": 10, "y": 15 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 10000,
      "type": "NARRATIVE",
      "content": "Bão cát thét gào. Riko đã bị dồn vào chân tường, trong khi Krieg lừ lừ tiến đến với chiếc cưa máy rỉ máu."
    },
    {
      "time_offset_ms": 10200,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 11,
      "target_y": 15
    },
    {
      "time_offset_ms": 10500,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Chết chung đi thằng khốn!!",
      "emotion": "DESPERATE"
    },
    {
      "time_offset_ms": 10600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 8,
        "height": 24,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 1,
        "line_color": "#FFFF00",
        "line_alpha": 0.5
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 3.0,
        "color": "#FF4500",
        "radius": 15,
        "duration_ms": 100
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 9, "yoyo": true }
    },
    {
      "time_offset_ms": 11600,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -250,
      "is_critical": false
    },
    {
      "time_offset_ms": 11600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[-1, -17], [23, -17], [23, 3], [43, 3], [43, 27], [23, 27], [23, 47], [-1, 47], [-1, 27], [-21, 27], [-21, 3], [-1, 3]],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "#FF8C00",
        "fill_alpha": 1.0,
        "line_width": 3,
        "line_color": "#1A1A1A",
        "line_alpha": 0.9
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 14,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": -10,
        "duration_ms": 150,
        "ease": "bounce.out"
      },
      "pixi_particles": {
        "x": 11,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 1000,
        "start_color": "#FF4500",
        "end_color": "#000000",
        "start_scale": 1.8,
        "end_scale": 0.1,
        "speed": 18,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 11700,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 11,
        "y": 5,
        "emitter_type": "fountain",
        "particle_count": 40,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#333333",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 6,
        "spread_angle": 60
      }
    },
    {
      "time_offset_ms": 11700,
      "type": "NARRATIVE",
      "content": "Ngọn lửa từ mũi tên kích nổ trực tiếp thùng phi xăng ngay cạnh đó!"
    },
    {
      "time_offset_ms": 11750,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 80,
        "width": 0,
        "height": 0,
        "fill_color": "#FF4500",
        "fill_alpha": 1.0,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 11,
        "y": 15,
        "scale": 2.5,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      },
      "pixi_particles": {
        "x": 11,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 150,
        "lifetime_ms": 1500,
        "start_color": "#1A1A1A",
        "end_color": "#000000",
        "start_scale": 2.2,
        "end_scale": 0.3,
        "speed": 40,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "shockwave",
        "intensity": 8.0,
        "color": "#FF4500",
        "radius": 220,
        "duration_ms": 900
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -300,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "char_jax_01",
      "hp_change": -300,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "char_riko_02",
      "hp_change": -300,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-300",
        "x": 12,
        "y": -4,
        "color": "#FF4500",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13,
        "y": 18,
        "scale": 0.5,
        "opacity": 0.2,
        "rotation_deg": 90,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-300",
        "x": 11,
        "y": -5,
        "color": "#FF4500",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 14,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -15,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-300",
        "x": 10,
        "y": -5,
        "color": "#FF4500",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.5,
        "y": 14.5,
        "scale": 0.9,
        "opacity": 1,
        "rotation_deg": 5,
        "duration_ms": 100,
        "ease": "power1.inOut"
      }
    },
    {
      "time_offset_ms": 12250,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": { "layer": "bg" },
      "pixi_particles": {
        "x": 11,
        "y": 15,
        "emitter_type": "fountain",
        "particle_count": 60,
        "lifetime_ms": 3000,
        "start_color": "#FF8C00",
        "end_color": "#FF0000",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 4,
        "spread_angle": 45
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 64,
        "width": 0,
        "height": 0,
        "fill_color": "#000000",
        "fill_alpha": 0.95,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 400,
        "height": 8,
        "fill_color": "#FF0000",
        "fill_alpha": 0.9,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 12,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "power1.inOut"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 29, "yoyo": true }
    },
    {
      "time_offset_ms": 12500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_filters": {
        "target_id": "raider_viper_02",
        "filter_type": "blur",
        "intensity": 8.0,
        "color": "#FF4500",
        "radius": 25,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 800,
        "height": 40,
        "fill_color": "#0000FF",
        "fill_alpha": 0.8,
        "line_width": 6,
        "line_color": "#00BFFF",
        "line_alpha": 1.0
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 13,
        "y": 10,
        "scale": 1.0,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_mesh": {
        "path_points": [[15, 10], [45, 10]],
        "thickness": 22,
        "color": "#00FFFF",
        "distortion_amplitude": 20,
        "animation_speed": 12,
        "style": "lightning_arc"
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 15,
        "y": 10,
        "emitter_type": "stream",
        "particle_count": 120,
        "lifetime_ms": 700,
        "start_color": "#87CEEB",
        "end_color": "#FFFFFF",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 30,
        "spread_angle": 25
      }
    },
    {
      "time_offset_ms": 14050,
      "type": "SKILL",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -400,
      "is_critical": false
    },
    {
      "time_offset_ms": 14050,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 12,
        "y": 15,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -10,
        "duration_ms": 250,
        "ease": "power2.out"
      },
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 56,
        "height": 56,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.95,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 14050,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-400",
        "x": 10,
        "y": -5,
        "color": "#FFFF00",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 14060,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 9,
      "target_y": 15
    },
    {
      "time_offset_ms": 14200,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 10,
      "target_y": 15
    },
    {
      "time_offset_ms": 14500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[10, 15], [11, 17]],
        "thickness": 16,
        "color": "#8B0000",
        "distortion_amplitude": 18,
        "animation_speed": 10,
        "style": "whip_curve"
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 15,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 12,
        "duration_ms": 40,
        "ease": "power1.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 6, "yoyo": true }
    },
    {
      "time_offset_ms": 14620,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -295,
      "is_critical": false
    },
    {
      "time_offset_ms": 14620,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 45,
        "lifetime_ms": 500,
        "start_color": "#8A0303",
        "end_color": "#4A0000",
        "start_scale": 1.2,
        "end_scale": 0.1,
        "speed": 15,
        "spread_angle": 140
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.2,
        "y": 15,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -6,
        "duration_ms": 80,
        "ease": "power2.inOut"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 14620,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-295",
        "x": 9,
        "y": -5,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 14620,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9,
        "y": 15,
        "emitter_type": "pulse",
        "particle_count": 10,
        "lifetime_ms": 1200,
        "start_color": "#8B0000",
        "end_color": "#800000",
        "start_scale": 1.2,
        "end_scale": 0.3,
        "speed": 5,
        "spread_angle": 180
      },
      "timeline_sequence": { "delay_ms": 1000, "stagger_ms": 0, "repeat": 3, "yoyo": false }
    },
    {
      "time_offset_ms": 14800,
      "type": "NARRATIVE",
      "content": "Bóng dáng khổng lồ của Jax rỉ máu ròng ròng nhưng quyết không ngã xuống."
    }
  ]
}
{
  "chunk_summary": "Giữa cơn bão cát mù mịt, Jax với cơ thể đầy thương tích dồn chút sức tàn cuối cùng vung búa tạ giáng thẳng vào Krieg. Tuy nhiên, sự lỳ lợm của người cựu binh không thể chống lại số lượng kẻ thù. Tia laser từ súng ngắm của Viper khóa chặt và xuyên thủng ngực Jax, ngay trước khi lưỡi cưa máy rỉ sét của Krieg chẻ dọc phần giáp còn lại. Jax gục ngã trên vũng máu. Đội B giành chiến thắng tàn bạo.",
  "is_game_over": true,
  "winning_team": "B",
  "updated_state": {
    "char_jax_01": { "hp": 0, "x": 9, "y": 15 },
    "char_riko_02": { "hp": 0, "x": 12, "y": 16 },
    "raider_krieg_boss": { "hp": 510, "x": 9, "y": 15 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 15000,
      "type": "NARRATIVE",
      "content": "Máu trào ra từ những vết rách trên bộ giáp nặng nề. Jax biết đây là thời khắc cuối cùng."
    },
    {
      "time_offset_ms": 15100,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_particles": {
        "x": -800,
        "y": 0,
        "emitter_type": "pulse",
        "particle_count": 150,
        "lifetime_ms": 2500,
        "start_color": "#F4A460",
        "end_color": "#B8860B",
        "start_scale": 4.0,
        "end_scale": 2.0,
        "speed": 60,
        "spread_angle": 2
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": false }
    },
    {
      "time_offset_ms": 15200,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -20,
      "is_critical": false
    },
    {
      "time_offset_ms": 15200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-20",
        "x": 9,
        "y": -5,
        "color": "#800000",
        "font_size": 24,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -30,
        "fade_duration_ms": 600
      }
    },
    {
      "time_offset_ms": 15300,
      "type": "DIALOGUE",
      "actor_id": "char_jax_01",
      "content": "Đến đây... lũ rác rưởi!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 15400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_mesh": {
        "path_points": [[0, -1], [2, -3], [4, 0]],
        "thickness": 28,
        "color": "#708090",
        "distortion_amplitude": 2,
        "animation_speed": 1,
        "style": "dash_trail"
      },
      "blend_mode": { "mode": "NORMAL" }
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [[15, 10], [9, 15]],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 2,
        "line_color": "#FF0000",
        "line_alpha": 0.8
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 10,
        "scale": 1,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 1000,
        "ease": "power1.in"
      }
    },
    {
      "time_offset_ms": 15850,
      "type": "ATTACK",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -230,
      "is_critical": false
    },
    {
      "time_offset_ms": 15850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 10,
        "y": 27,
        "emitter_type": "burst",
        "particle_count": 35,
        "lifetime_ms": 600,
        "start_color": "#D2B48C",
        "end_color": "#8B4513",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 8,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 15850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10.4,
        "y": 15.4,
        "scale": 0.85,
        "opacity": 1,
        "rotation_deg": -8,
        "duration_ms": 120,
        "ease": "power2.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 15850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-230",
        "x": 10,
        "y": -5,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 16200,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -20,
      "is_critical": false
    },
    {
      "time_offset_ms": 16200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-20",
        "x": 9,
        "y": -5,
        "color": "#800000",
        "font_size": 24,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -30,
        "fade_duration_ms": 600
      }
    },
    {
      "time_offset_ms": 16500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "pixi_filters": {
        "target_id": "raider_viper_02",
        "filter_type": "glow",
        "intensity": 4.0,
        "color": "#FFFF00",
        "radius": 15,
        "duration_ms": 200
      }
    },
    {
      "time_offset_ms": 16500,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [[15, 10], [9, 15]],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 4,
        "line_color": "#FFFFFF",
        "line_alpha": 1.0
      },
      "blend_mode": { "mode": "ADD" },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 10,
        "scale": 1,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 16520,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -210,
      "is_critical": false
    },
    {
      "time_offset_ms": 16520,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 50,
        "lifetime_ms": 400,
        "start_color": "#FFFFFF",
        "end_color": "#FFFF00",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 15,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 16520,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-210",
        "x": 9,
        "y": -5,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 16600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[10, 15], [11, 17]],
        "thickness": 16,
        "color": "#8B0000",
        "distortion_amplitude": 18,
        "animation_speed": 10,
        "style": "whip_curve"
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 15,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 12,
        "duration_ms": 40,
        "ease": "power1.out"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 6, "yoyo": true }
    },
    {
      "time_offset_ms": 16720,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -285,
      "is_critical": false
    },
    {
      "time_offset_ms": 16720,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 45,
        "lifetime_ms": 500,
        "start_color": "#8A0303",
        "end_color": "#4A0000",
        "start_scale": 1.2,
        "end_scale": 0.1,
        "speed": 15,
        "spread_angle": 140
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.2,
        "y": 15,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": -6,
        "duration_ms": 80,
        "ease": "power2.inOut"
      },
      "timeline_sequence": { "delay_ms": 0, "stagger_ms": 0, "repeat": 1, "yoyo": true }
    },
    {
      "time_offset_ms": 16720,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "fg" },
      "pixi_text": {
        "content": "-285",
        "x": 9,
        "y": 5,
        "color": "#FFFFFF",
        "font_size": 32,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -50,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 16800,
      "type": "NARRATIVE",
      "content": "Hai đòn chí tử cùng lúc găm vào cơ thể tàn tạ của người cựu binh. Jax đổ gục xuống vũng máu."
    },
    {
      "time_offset_ms": 16900,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 8.5,
        "y": 15.5,
        "scale": 0.8,
        "opacity": 0.3,
        "rotation_deg": -90,
        "duration_ms": 500,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 17200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 20,
        "width": 0,
        "height": 0,
        "fill_color": "#8B0000",
        "fill_alpha": 0.8,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 15,
        "scale": 2.5,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 2000,
        "ease": "power1.out"
      }
    },
    {
      "time_offset_ms": 17500,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "Hahahaha! Mảnh sắt vụn cuối cùng cũng vỡ!",
      "emotion": "MANIACAL"
    },
    {
      "time_offset_ms": 18000,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 9,
      "target_y": 15
    },
    {
      "time_offset_ms": 19500,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "pixi_particles": {
        "x": -800,
        "y": 200,
        "emitter_type": "stream",
        "particle_count": 300,
        "lifetime_ms": 3000,
        "start_color": "#EEE8AA",
        "end_color": "#DAA520",
        "start_scale": 2.0,
        "end_scale": 1.0,
        "speed": 45,
        "spread_angle": 5
      }
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

    // 2. Cập nhật dữ liệu nâng cấp (đã lượng hóa chi tiết) cho kịch bản Sa mạc
    useMainStore.setState({
      // Môi trường Sa mạc bão cát
      mapPreviewUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop', 
      mapDescription: "Trạm Xăng Bỏ Hoang Trên Sa Mạc Chết: Kích thước 20x20. Bão cát mù mịt làm giảm 20% độ chính xác của các đòn đánh tầm xa. Xung quanh là xác xe phế liệu. ĐẶC BIỆT: Có 2 'Thùng Phi Xăng' ở tọa độ (12, 15) và (8, 6), được tính là chướng ngại vật. Nếu Thùng Phi Xăng nhận bất kỳ sát thương Lửa nào, nó sẽ phát nổ ngay lập tức, gây 300 sát thương diện rộng trong bán kính 2 ô xung quanh và để lại vũng lửa cháy trong 3 giây (gây 50 sát thương/giây nếu đứng trên đó).",
      
      // Avatar giả lập cho các nhân vật
      uploadedShapes: [
        { id: "shape-jax", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Jax&background=8B4513&color=fff&size=150&bold=true" },
        { id: "shape-riko", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Riko&background=FF8C00&color=fff&size=150&bold=true" },
        { id: "shape-krieg", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Krieg&background=8B0000&color=fff&size=150&bold=true" },
        { id: "shape-buzz", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Buzz&background=2F4F4F&color=fff&size=150&bold=true" },
        { id: "shape-viper", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Viper&background=006400&color=fff&size=150&bold=true" }
      ],

      // Đội hình A: Những người sống sót
      teamA: [
        {
          id: "char_jax_01",
          team: 'A',
          name: "Jax 'Gấu Sẹo'",
          personality: "Trầm lỳ, kiên nhẫn. Một cựu binh sẵn sàng lấy thân mình làm lá chắn chắn đạn cho đồng đội. Thà gãy xương chứ tuyệt đối không lùi bước.",
          basicAttackDesc: "Nện búa tạ: Tầm đánh 1 ô. Gây 100% Sát thương vật lý (220 dmg) lên 1 mục tiêu đơn. Tốc độ vung búa chậm.",
          skillDesc: "Cú Nện Phá Đất: Thời gian gồng (cast time): 1 giây. Jax đập búa xuống đất tạo sóng xung kích hình nón (cone) hướng về phía trước, quét qua 3 ô. Sát thương: 350 Sát thương vật lý. Hiệu ứng: Đẩy lùi (Knockback) tất cả kẻ địch trúng chiêu lùi lại 1 ô và gây Choáng (Stun) trong 1.5 giây.",
          stats: { hp: 1500, maxHp: 1500, agility: 30, damage: 220, range: 1 },
          shapeId: "shape-jax",
          position: { x: 10, y: 14 }
        },
        {
          id: "char_riko_02",
          team: 'A',
          name: "Riko 'Cáo Cát'",
          personality: "Nhanh nhẹn, ranh mãnh và hay chửi thề khi gặp áp lực. Luôn tìm góc khuất để bắn lén chứ không giáp lá cà.",
          basicAttackDesc: "Bắn nỏ tự chế: Tầm bắn 6 ô. Gây 100% Sát thương vật lý (150 dmg). Có 20% tỷ lệ đòn đánh xuyên giáp (gây sát thương chuẩn).",
          skillDesc: "Mũi Tên Nổ: Bắn một mũi tên thuốc nổ vào 1 mục tiêu trong tầm 6 ô. Mũi tên dính chặt vào mục tiêu và đếm ngược 1 giây trước khi nổ. Phạm vi nổ: Bán kính 1 ô xung quanh mục tiêu (hình chữ thập). Sát thương nổ: 250 Sát thương Lửa (Fire dmg). Hiệu ứng: Thiêu đốt kẻ địch (mất 30 HP/giây trong 3 giây). Kỹ năng này CÓ THỂ kích nổ Thùng Phi Xăng trên bản đồ.",
          stats: { hp: 700, maxHp: 700, agility: 90, damage: 150, range: 6 },
          shapeId: "shape-riko",
          position: { x: 11, y: 17 }
        }
      ],

      // Đội hình B: Toán cướp sa mạc
      teamB: [
        {
          id: "raider_krieg_boss",
          team: 'B',
          name: "Thủ lĩnh Krieg",
          personality: "Thủ lĩnh toán cướp. Tâm thần, tàn bạo. Hành động vô cùng liều lĩnh và điên dại. Sẽ ưu tiên nhắm vào mục tiêu có HP thấp nhất.",
          basicAttackDesc: "Cưa máy rỉ sét: Tầm đánh 1 ô. Gây 100% Sát thương vật lý (280 dmg). Mỗi đòn đánh trúng áp dụng cộng dồn 'Chảy Máu' gây 20 HP/giây trong 2 giây.",
          skillDesc: "Vũ Điệu Đồ Tể: Lao thẳng về phía trước (Dash) tối đa 3 ô để tiếp cận mục tiêu, sau đó xoay cưa máy điên cuồng. Phạm vi: Tất cả các ô liền kề xung quanh Krieg (bán kính 1 ô). Sát thương: Chém 3 nhát liên tiếp, mỗi nhát 150 dmg (Tổng 450 dmg). Hiệu ứng: Kẻ địch trúng chiêu bị giảm 50% tốc độ di chuyển trong 2 giây.",
          stats: { hp: 1800, maxHp: 1800, agility: 50, damage: 280, range: 1 },
          shapeId: "shape-krieg",
          position: { x: 10, y: 5 }
        },
        {
          id: "raider_buzz_01",
          team: 'B',
          name: "Buzz",
          personality: "Kẻ nghiện chất kích thích, di chuyển lảo đảo nhưng lao vào con mồi cực kỳ nhanh. Thích tập kích lính bắn tỉa hoặc hỗ trợ.",
          basicAttackDesc: "Vuốt sắt: Tầm đánh 1 ô. Tốc độ đánh cực nhanh. Gây 100% Sát thương vật lý (130 dmg).",
          skillDesc: "Cú Vồ Khát Máu: Chỉ định 1 mục tiêu trong bán kính 4 ô. Lập tức nhảy vọt (Jump) xuyên qua các chướng ngại vật để đáp xuống một ô trống cạnh mục tiêu. Gây ngay lập tức 200 sát thương vật lý và Trói Chân (Root - không thể di chuyển nhưng vẫn có thể đánh) mục tiêu trong 1 giây.",
          stats: { hp: 850, maxHp: 850, agility: 80, damage: 130, range: 1 },
          shapeId: "shape-buzz",
          position: { x: 8, y: 7 }
        },
        {
          id: "raider_viper_02",
          team: 'B',
          name: "Viper",
          personality: "Kẻ bắn tỉa máu lạnh. Tàn nhẫn và tính toán, luôn giữ khoảng cách tối đa với kẻ địch.",
          basicAttackDesc: "Bắn tỉa súng trường: Tầm bắn 9 ô. Gây 100% Sát thương vật lý (200 dmg). Cần 1 giây ngắm bắn trước khi nổ súng.",
          skillDesc: "Phát Đạn Xuyên Giáp: Thời gian ngắm bắn (cast time): 1.5 giây. Bắn một tia đạn đạo xuyên thấu theo một đường thẳng dài 10 ô, rộng 1 ô. Xuyên qua tất cả các mục tiêu (cả bạn lẫn thù) trên đường đạn bay. Sát thương: 400 Sát thương Chuẩn (True dmg - bỏ qua mọi kháng cự). Kẻ địch trúng đạn bị Đẩy Lùi 1 ô.",
          stats: { hp: 600, maxHp: 600, agility: 65, damage: 200, range: 9 },
          shapeId: "shape-viper",
          position: { x: 15, y: 4 }
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
      className="fixed top-4 right-4 z-50 bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.8)] border-2 border-orange-400 animate-pulse transition-all"
    >
      🚀 TEST BẢN ĐỒ SA MẠC NÂNG CẤP
    </button>
  );
}
