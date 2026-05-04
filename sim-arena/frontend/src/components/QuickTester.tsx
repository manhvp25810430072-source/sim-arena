import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
const RAW_DATA_STRING = `
{
  "chunk_summary": "Bão cát cuồn cuộn nổi lên che khuất tầm nhìn trên sa mạc chết. Jax ngay lập tức xông lên tuyến đầu chặn đường Krieg, hứng chịu những nhát cưa máy tàn bạo nhưng nhanh chóng phản công bằng một cú nện búa phá đất chấn động, hất văng và làm choáng gã thủ lĩnh. Dù vậy, cục diện bỗng chốc đảo chiều khi Buzz lén lút tiếp cận từ sườn để cào xé Jax, và từ xa, tia laser chết chóc của Viper khai hỏa xuyên thủng lớp giáp của anh, đẩy lùi anh về phía sau. Trong khi đó, Riko tận dụng sự hỗn loạn để bắn tỉa Buzz từ góc khuất.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": { "hp": 680, "x": 9, "y": 10 },
    "char_riko_02": { "hp": 700, "x": 12, "y": 13 },
    "raider_krieg_boss": { "hp": 1460, "x": 10, "y": 8 },
    "raider_buzz_01": { "hp": 688, "x": 9, "y": 11 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 9 }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "fg" },
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "x": 10,
        "y": 10,
        "emitter_type": "directional",
        "particle_count": 200,
        "lifetime_ms": 5000,
        "start_color": "#DAA520",
        "end_color": "#BDB76B",
        "start_scale": 0.4,
        "end_scale": 0.2,
        "speed": 15,
        "spread_angle": 5
      }
    },
    {
      "time_offset_ms": 200,
      "type": "NARRATIVE",
      "content": "Bão cát nổi lên dữ dội. Hai phe lập tức lao vào nhau giữa đống phế liệu!"
    },
    {
      "time_offset_ms": 500,
      "type": "MOVE",
      "actor_id": "char_jax_01",
      "target_x": 10,
      "target_y": 10
    },
    {
      "time_offset_ms": 500,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 10,
      "target_y": 9
    },
    {
      "time_offset_ms": 1000,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 9,
      "target_y": 11
    },
    {
      "time_offset_ms": 1200,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 12,
      "target_y": 13
    },
    {
      "time_offset_ms": 1200,
      "type": "MOVE",
      "actor_id": "raider_viper_02",
      "target_x": 15,
      "target_y": 9
    },
    {
      "time_offset_ms": 1300,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "Thịt tươi! Tới đây cho tao cưa!",
      "emotion": "CRAZED"
    },
    {
      "time_offset_ms": 1500,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -295,
      "is_critical": false
    },
    {
      "time_offset_ms": 1500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[10, 9], [10, 10]],
        "thickness": 0.6,
        "color": "#8B0000",
        "distortion_amplitude": 0.3,
        "animation_speed": 10,
        "style": "rough_arc"
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10.05,
        "y": 9.05,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 5,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 3,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 1500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-295",
        "x": 10,
        "y": 9.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 8.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 1600,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 10,
        "y": 10,
        "emitter_type": "directional",
        "particle_count": 12,
        "lifetime_ms": 400,
        "start_color": "#8B0000",
        "end_color": "#8B0000",
        "start_scale": 0.15,
        "end_scale": 0,
        "speed": 3,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 1600,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 1600,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 10,
        "y": 10,
        "emitter_type": "burst",
        "particle_count": 5,
        "lifetime_ms": 1000,
        "start_color": "#8B0000",
        "end_color": "#8B0000",
        "start_scale": 0.1,
        "end_scale": 0.02,
        "speed": 1.5,
        "spread_angle": 180
      },
      "timeline_sequence": {
        "delay_ms": 1000,
        "stagger_ms": 0,
        "repeat": 2,
        "yoyo": false
      }
    },
    {
      "time_offset_ms": 1800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#DAA520",
        "radius": 0.2,
        "duration_ms": 1000
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10.05,
        "y": 10.05,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 2,
        "duration_ms": 50,
        "ease": "none"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 19,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 2800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_mesh": {
        "path_points": [[10, 10], [10, 8.5]],
        "thickness": 1.5,
        "color": "#708090",
        "distortion_amplitude": 0,
        "animation_speed": 4,
        "style": "smash_down"
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -340,
      "is_critical": false
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[10, 10], [8.5, 7], [11.5, 7]],
        "radius": 0,
        "width": 3,
        "height": 3,
        "fill_color": "#DAA520",
        "fill_alpha": 0.6,
        "line_width": 0,
        "line_color": "#FFFFFF",
        "line_alpha": 0
      },
      "pixi_particles": {
        "x": 10,
        "y": 10,
        "emitter_type": "cone",
        "particle_count": 40,
        "lifetime_ms": 800,
        "start_color": "#FFBF00",
        "end_color": "#654321",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 6,
        "spread_angle": 60
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-340",
        "x": 10,
        "y": 8.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 7.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 2950,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 8,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 2950,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 10,
        "y": 6.5,
        "emitter_type": "burst",
        "particle_count": 3,
        "lifetime_ms": 1500,
        "start_color": "#FFD700",
        "end_color": "#FFD700",
        "start_scale": 0.25,
        "end_scale": 0.25,
        "speed": 1,
        "spread_angle": 360
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10.1,
        "y": 8,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 200,
        "ease": "sine.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 7,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "ATTACK",
      "actor_id": "raider_buzz_01",
      "target_id": "char_jax_01",
      "hp_change": -125,
      "is_critical": false
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[9.5, 9.5], [10.5, 10.5], [10.5, 9.5], [9.5, 10.5]],
        "thickness": 0.2,
        "color": "#C0C0C0",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "cross_slash"
      },
      "pixi_particles": {
        "x": 10,
        "y": 10,
        "emitter_type": "burst",
        "particle_count": 10,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.1,
        "end_scale": 0,
        "speed": 4,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-125",
        "x": 10,
        "y": 9.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 8.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 3100,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 3300,
      "type": "DIALOGUE",
      "actor_id": "raider_viper_02",
      "content": "Khóa mục tiêu. Tạm biệt con gấu ngu ngốc.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 3400,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 10,
        "height": 0.1,
        "fill_color": "#FF0000",
        "fill_alpha": 0.8,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 9.05,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 29,
        "yoyo": true
      },
      "pixi_particles": {
        "x": 15,
        "y": 9,
        "emitter_type": "directional",
        "particle_count": 20,
        "lifetime_ms": 500,
        "start_color": "#FFCCCB",
        "end_color": "#FFCCCB",
        "start_scale": 0.2,
        "end_scale": 0.5,
        "speed": 1,
        "spread_angle": 10
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[12, 13], [9.88, 11.58]],
        "thickness": 0.1,
        "color": "#C0C0C0",
        "distortion_amplitude": 0,
        "animation_speed": 15,
        "style": "straight_line"
      }
    },
    {
      "time_offset_ms": 4150,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -162,
      "is_critical": false
    },
    {
      "time_offset_ms": 4150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 9,
        "y": 11,
        "emitter_type": "burst",
        "particle_count": 8,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#C0C0C0",
        "start_scale": 0.1,
        "end_scale": 0,
        "speed": 3,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 4150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-162",
        "x": 9,
        "y": 10.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 9,
        "y": 9.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#800000",
        "radius": 0,
        "duration_ms": 200
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 9.1,
        "y": 11,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 3,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "SKILL",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -400,
      "is_critical": true
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[15, 9], [5, 11]],
        "thickness": 0.8,
        "color": "#00BFFF",
        "distortion_amplitude": 0.2,
        "animation_speed": 10,
        "style": "lightning_beam"
      },
      "pixi_particles": {
        "x": 15,
        "y": 9,
        "emitter_type": "trail",
        "particle_count": 40,
        "lifetime_ms": 600,
        "start_color": "#808080",
        "end_color": "#A9A9A9",
        "start_scale": 0.4,
        "end_scale": 0.8,
        "speed": 0,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-400 TRUE",
        "x": 10,
        "y": 9.2,
        "color": "#FFD700",
        "font_size": 1.2,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 8.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4950,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 10,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "power2.out"
      },
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 0.6,
        "width": 1.2,
        "height": 0.4,
        "fill_color": "#1A1A1A",
        "fill_alpha": 0.8,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 4950,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    }
  ]
}
{
  "chunk_summary": "Giữa cơn bão cát dày đặc, Buzz lách qua điểm mù và vồ thẳng vào Riko, cắm gọng kìm trói chặt cô ranh mãnh này lại. Ngay lập tức, Krieg điên cuồng lao tới cưa nát lớp phòng thủ của Jax, khiến người cựu binh gục xuống với đầy thương tích. Trong cơn hoảng loạn vì bị áp sát, Riko bắn thẳng mũi tên nổ vào Buzz ngay sát cạnh mình, tạo ra một vụ nổ kinh hoàng thiêu đốt cả hai. Từ xa, Viper tận dụng cơ hội, lạnh lùng ngắm bắn một phát đạn chí mạng găm thẳng vào ngực Jax, dồn anh đến bờ vực cái chết, nhưng gấu già vẫn lỳ lợm vung búa tạ giáng trả thủ lĩnh toán cướp.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": { "hp": 40, "x": 9, "y": 10 },
    "char_riko_02": { "hp": 265, "x": 12, "y": 13 },
    "raider_krieg_boss": { "hp": 1240, "x": 9, "y": 9 },
    "raider_buzz_01": { "hp": 448, "x": 11, "y": 13 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 9 }
  },
  "timeline": [
    {
      "time_offset_ms": 5200,
      "type": "DIALOGUE",
      "actor_id": "raider_buzz_01",
      "content": "Bắt được con nhép này rồi! Khẹc khẹc!",
      "emotion": "MANIC"
    },
    {
      "time_offset_ms": 5200,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 11,
      "target_y": 13
    },
    {
      "time_offset_ms": 5200,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 9,
        "y": 11,
        "scale": 0.7,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.in"
      }
    },
    {
      "time_offset_ms": 5300,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 10,
        "y": 11.5,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 180,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11,
        "y": 13,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 360,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 5700,
      "type": "SKILL",
      "actor_id": "raider_buzz_01",
      "target_id": "char_riko_02",
      "hp_change": -195,
      "is_critical": false
    },
    {
      "time_offset_ms": 5700,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_particles": {
        "x": 12,
        "y": 13,
        "emitter_type": "burst",
        "particle_count": 15,
        "lifetime_ms": 300,
        "start_color": "#808080",
        "end_color": "#A9A9A9",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 3,
        "spread_angle": 360
      },
      "pixi_graphics": {
        "shape_type": "polygon",
        "points": [[11.5, 13], [12.5, 13], [12.8, 13.5], [11.2, 13.5]],
        "radius": 0,
        "width": 1.6,
        "height": 0.5,
        "fill_color": "#2F4F4F",
        "fill_alpha": 1,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 5700,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "color_overlay",
        "intensity": 1,
        "color": "#FF0000",
        "radius": 0,
        "duration_ms": 100
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 12.8,
        "scale": 0.9,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 5700,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": { "layer": "fg" },
      "pixi_mesh": {
        "path_points": [[11.5, 13], [12, 13.5], [12.5, 13]],
        "thickness": 0.15,
        "color": "#8B4513",
        "distortion_amplitude": 0.1,
        "animation_speed": 0,
        "style": "thorn_roots"
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 9,
      "target_y": 9
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 9,
        "y": 9,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 200,
        "ease": "power4.in"
      },
      "pixi_particles": {
        "x": 9,
        "y": 9,
        "emitter_type": "trail",
        "particle_count": 30,
        "lifetime_ms": 300,
        "start_color": "#8B0000",
        "end_color": "#8B0000",
        "start_scale": 0.8,
        "end_scale": 0,
        "speed": 0,
        "spread_angle": 0
      }
    },
    {
      "time_offset_ms": 6250,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 1.5,
        "width": 3,
        "height": 3,
        "fill_color": "#000000",
        "fill_alpha": 0,
        "line_width": 0.3,
        "line_color": "#8B0000",
        "line_alpha": 1
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 9,
        "y": 9,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 1080,
        "duration_ms": 600,
        "ease": "none"
      },
      "pixi_particles": {
        "x": 9,
        "y": 9,
        "emitter_type": "burst",
        "particle_count": 50,
        "lifetime_ms": 500,
        "start_color": "#FFD700",
        "end_color": "#8B0000",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 8,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 6300,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -145,
      "is_critical": false
    },
    {
      "time_offset_ms": 6300,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 6450,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -150,
      "is_critical": false
    },
    {
      "time_offset_ms": 6450,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 6500,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Tránh xa tao ra, đồ điên!",
      "emotion": "PANICKED"
    },
    {
      "time_offset_ms": 6600,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -155,
      "is_critical": false
    },
    {
      "time_offset_ms": 6600,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "x": 9,
        "y": 10,
        "emitter_type": "burst",
        "particle_count": 20,
        "lifetime_ms": 1500,
        "start_color": "#ADD8E6",
        "end_color": "#87CEFA",
        "start_scale": 0.6,
        "end_scale": 0.8,
        "speed": 0.5,
        "spread_angle": 360
      },
      "canvas_layer": { "layer": "bg" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 0.8,
        "width": 1.6,
        "height": 0.5,
        "fill_color": "#E0FFFF",
        "fill_alpha": 0.7,
        "line_width": 0.05,
        "line_color": "#FFFFFF",
        "line_alpha": 1
      }
    },
    {
      "time_offset_ms": 6600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[12, 13], [11, 13]],
        "thickness": 0.2,
        "color": "#FF4500",
        "distortion_amplitude": 0,
        "animation_speed": 10,
        "style": "straight_line"
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "glow",
        "intensity": 3,
        "color": "#FF0000",
        "radius": 0.3,
        "duration_ms": 1000
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11,
        "y": 13,
        "scale": 1.1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "stepped"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 9,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 7500,
      "type": "NARRATIVE",
      "content": "Sự hỗn loạn khiến Jax hở sườn. Viper từ đằng xa đã khóa mục tiêu với tia laser đỏ rực."
    },
    {
      "time_offset_ms": 7500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 9,
        "height": 0.05,
        "fill_color": "#E0115F",
        "fill_alpha": 0.6,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -240,
      "is_critical": false
    },
    {
      "time_offset_ms": 7800,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "char_riko_02",
      "hp_change": -240,
      "is_critical": false
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 2.5,
        "height": 0.5,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 0.5,
        "height": 2.5,
        "fill_color": "#FF4500",
        "fill_alpha": 0.9,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 13,
        "emitter_type": "fountain",
        "particle_count": 35,
        "lifetime_ms": 1200,
        "start_color": "#FF4500",
        "end_color": "#000000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 4,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#800000",
        "radius": 0,
        "duration_ms": 200
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11.1,
        "y": 13,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 3,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "color_overlay",
        "intensity": 1,
        "color": "#FF0000",
        "radius": 0,
        "duration_ms": 100
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 12.8,
        "scale": 0.9,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 11,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 15,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 12,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 15,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 15,
        "y": 9,
        "emitter_type": "burst",
        "particle_count": 1,
        "lifetime_ms": 100,
        "start_color": "#FFFFFF",
        "end_color": "#FFFF00",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 0,
        "spread_angle": 0
      },
      "pixi_mesh": {
        "path_points": [[15, 9], [9, 10]],
        "thickness": 0.1,
        "color": "#FFFFFF",
        "distortion_amplitude": 0,
        "animation_speed": 20,
        "style": "bullet_trail"
      }
    },
    {
      "time_offset_ms": 8550,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -190,
      "is_critical": false
    },
    {
      "time_offset_ms": 8550,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 0.2,
        "width": 0.4,
        "height": 0.4,
        "fill_color": "#FFFFFF",
        "fill_alpha": 1,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 8550,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 150
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 10,
        "scale": 0.8,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power1.inOut"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 8800,
      "type": "DIALOGUE",
      "actor_id": "char_jax_01",
      "content": "Tao... chưa gục đâu!",
      "emotion": "DETERMINED"
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_mesh": {
        "path_points": [[9, 10], [9, 9]],
        "thickness": 0.8,
        "color": "#708090",
        "distortion_amplitude": 0,
        "animation_speed": 1.5,
        "style": "arc_swing"
      }
    },
    {
      "time_offset_ms": 9300,
      "type": "ATTACK",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -220,
      "is_critical": false
    },
    {
      "time_offset_ms": 9300,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_particles": {
        "x": 9,
        "y": 9,
        "emitter_type": "burst",
        "particle_count": 15,
        "lifetime_ms": 500,
        "start_color": "#8B4513",
        "end_color": "#D2B48C",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 2,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 9300,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "color_overlay",
        "intensity": 1,
        "color": "#FF0000",
        "radius": 0,
        "duration_ms": 100
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 9.3,
        "y": 9,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "power2.out"
      },
      "pixi_particles": {
        "x": 9,
        "y": 9,
        "emitter_type": "burst",
        "particle_count": 15,
        "lifetime_ms": 300,
        "start_color": "#8B0000",
        "end_color": "#8B0000",
        "start_scale": 0.3,
        "end_scale": 0,
        "speed": 1,
        "spread_angle": 360
      }
    }
  ]
}
{
  "chunk_summary": "Sự tàn khốc của chiến trường được đẩy lên đỉnh điểm. Dù kiên cường đến đâu, Jax cuối cùng cũng gục ngã trước những nhát cưa máy đẫm máu của Krieg. Riko, hoảng loạn và bị bỏng nặng, cố gắng rút lui về phía thùng phi xăng nhưng không thể thoát khỏi gọng kìm oan nghiệt của Buzz. Dù đã né được phát đạn bắn tỉa của Viper bằng tốc độ phản xạ phi thường, Riko cuối cùng vẫn bị Buzz xé nát, đánh dấu thất bại hoàn toàn của Đội A giữa cơn bão cát khắc nghiệt.",
  "is_game_over": true,
  "winning_team": "B",
  "updated_state": {
    "char_jax_01": { "hp": 0, "x": 9, "y": 10 },
    "char_riko_02": { "hp": 0, "x": 13, "y": 15 },
    "raider_krieg_boss": { "hp": 1240, "x": 11, "y": 13 },
    "raider_buzz_01": { "hp": 268, "x": 12, "y": 14 },
    "raider_viper_02": { "hp": 600, "x": 15, "y": 10 }
  },
  "timeline": [
    {
      "time_offset_ms": 10100,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "Mày đứt hơi rồi, gấu tàn tạ!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 10300,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -290,
      "is_critical": false
    },
    {
      "time_offset_ms": 10300,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_mesh": {
        "path_points": [[9, 9], [9, 10]],
        "thickness": 0.6,
        "color": "#8B0000",
        "distortion_amplitude": 0.3,
        "animation_speed": 10,
        "style": "rough_arc"
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 9.05,
        "y": 9.05,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 5,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 3,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 10300,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-290",
        "x": 9,
        "y": 9.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9,
        "y": 8.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 10400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9,
        "y": 10,
        "emitter_type": "directional",
        "particle_count": 12,
        "lifetime_ms": 400,
        "start_color": "#8B0000",
        "end_color": "#8B0000",
        "start_scale": 0.15,
        "end_scale": 0,
        "speed": 3,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 10600,
      "type": "NARRATIVE",
      "content": "Jax gục ngã hoàn toàn. Bức tường cuối cùng của Đội A đã sụp đổ."
    },
    {
      "time_offset_ms": 10800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 11,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 15,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 10800,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-30",
        "x": 11,
        "y": 12.2,
        "color": "#FFA500",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 11,
        "y": 11.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 10800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 12,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 15,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 2,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 10800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-30",
        "x": 12,
        "y": 12.2,
        "color": "#FFA500",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 11.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 10900,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 11,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 5,
        "lifetime_ms": 1000,
        "start_color": "#2F4F4F",
        "end_color": "#000000",
        "start_scale": 0.2,
        "end_scale": 0.4,
        "speed": 1.5,
        "spread_angle": 30
      }
    },
    {
      "time_offset_ms": 10900,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_particles": {
        "x": 12,
        "y": 13,
        "emitter_type": "cone",
        "particle_count": 5,
        "lifetime_ms": 1000,
        "start_color": "#2F4F4F",
        "end_color": "#000000",
        "start_scale": 0.2,
        "end_scale": 0.4,
        "speed": 1.5,
        "spread_angle": 30
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "actor_id": "raider_buzz_01",
      "target_id": "char_riko_02",
      "hp_change": -142,
      "is_critical": false
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[11.5, 12.5], [12.5, 13.5], [12.5, 12.5], [11.5, 13.5]],
        "thickness": 0.2,
        "color": "#C0C0C0",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "cross_slash"
      },
      "pixi_particles": {
        "x": 12,
        "y": 13,
        "emitter_type": "burst",
        "particle_count": 10,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.1,
        "end_scale": 0,
        "speed": 4,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-142",
        "x": 12,
        "y": 12.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 11.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "color_overlay",
        "intensity": 1,
        "color": "#FF0000",
        "radius": 0,
        "duration_ms": 100
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 12.8,
        "scale": 0.9,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 11300,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Mẹ kiếp, tao không bỏ mạng ở xó này đâu!",
      "emotion": "PANICKED"
    },
    {
      "time_offset_ms": 11500,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 13,
      "target_y": 15
    },
    {
      "time_offset_ms": 11600,
      "type": "MOVE",
      "actor_id": "raider_viper_02",
      "target_x": 15,
      "target_y": 10
    },
    {
      "time_offset_ms": 11800,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 12,
      "target_y": 14
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [],
        "radius": 0,
        "width": 9,
        "height": 0.05,
        "fill_color": "#E0115F",
        "fill_alpha": 0.6,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_riko_02",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "x": 15,
        "y": 10,
        "emitter_type": "burst",
        "particle_count": 1,
        "lifetime_ms": 100,
        "start_color": "#FFFFFF",
        "end_color": "#FFFF00",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 0,
        "spread_angle": 0
      },
      "pixi_mesh": {
        "path_points": [[15, 10], [13, 15]],
        "thickness": 0.1,
        "color": "#FFFFFF",
        "distortion_amplitude": 0,
        "animation_speed": 20,
        "style": "bullet_trail"
      }
    },
    {
      "time_offset_ms": 13050,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [],
        "radius": 0.2,
        "width": 0.4,
        "height": 0.4,
        "fill_color": "#FFFFFF",
        "fill_alpha": 1,
        "line_width": 0,
        "line_color": "#000000",
        "line_alpha": 0
      }
    },
    {
      "time_offset_ms": 13050,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "TRƯỢT",
        "x": 13,
        "y": 14.2,
        "color": "#A9A9A9",
        "font_size": 1.2,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13,
        "y": 13.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 13100,
      "type": "NARRATIVE",
      "content": "Phát đạn tỉa sượt qua tóc Riko. Đôi chân ranh mãnh đã tạm cứu mạng cô."
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -150,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[13, 15], [12, 14]],
        "thickness": 0.1,
        "color": "#C0C0C0",
        "distortion_amplitude": 0,
        "animation_speed": 15,
        "style": "straight_line"
      }
    },
    {
      "time_offset_ms": 13650,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_particles": {
        "x": 12,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 8,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#C0C0C0",
        "start_scale": 0.1,
        "end_scale": 0,
        "speed": 3,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 13650,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-150",
        "x": 12,
        "y": 13.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "normal",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 12,
        "y": 12.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 13650,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "color_overlay",
        "intensity": 0.8,
        "color": "#800000",
        "radius": 0,
        "duration_ms": 200
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 12.1,
        "y": 14,
        "scale": 1,
        "opacity": 1,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": 3,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 11,
      "target_y": 13
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "actor_id": "raider_buzz_01",
      "target_id": "char_riko_02",
      "hp_change": -110,
      "is_critical": false
    },
    {
      "time_offset_ms": 14500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "path_points": [[12.5, 14.5], [13.5, 15.5], [13.5, 14.5], [12.5, 15.5]],
        "thickness": 0.2,
        "color": "#C0C0C0",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "cross_slash"
      },
      "pixi_particles": {
        "x": 13,
        "y": 15,
        "emitter_type": "burst",
        "particle_count": 10,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 0.1,
        "end_scale": 0,
        "speed": 4,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 14500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-110",
        "x": 13,
        "y": 14.2,
        "color": "#FFFFFF",
        "font_size": 1.2,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -1.5,
        "fade_duration_ms": 600
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13,
        "y": 13.5,
        "scale": 1.2,
        "opacity": 0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 14800,
      "type": "NARRATIVE",
      "content": "Gọng kìm của Buzz cắm ngập vào Riko. Trận chiến kết thúc trong máu và cát bụi. Toán cướp đã chiến thắng."
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
