import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG CÁC CHUNK JSON CỦA BẠN VÀO ĐÂY
// (Hãy copy toàn bộ các object JSON từ kết quả AI và dán vào giữa cặp dấu backtick)
// =========================================================================
const RAW_DATA_STRING = `

{
  "chunk_summary": "Khởi đầu trận chiến tại Lò Luyện Ngục, hơi nóng bốc lên ngùn ngụt. Karn Đao Phủ điên cuồng lao về phía Braum, tung lưỡi hái xích kéo giật Thiết Tường về phía mình, làm nứt vỡ lớp giáp của hắn. Từ phía sau, Lyra lạnh lùng nã đạn plasma vào Karn để yểm trợ. Cùng lúc đó, Nyx lợi dụng bóng tối lướt đi với tốc độ kinh hồn, áp sát và chém một nhát chí mạng vào Lyra. Bức xạ nhiệt của sàn đấu bắt đầu thiêu đốt tất cả.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 307, "x": 7, "y": 17 },
    "char_A2": { "hp": 665, "x": 8, "y": 14 },
    "char_B1": { "hp": 385, "x": 6, "y": 17 },
    "char_B2": { "hp": 622, "x": 8, "y": 13 }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": { "layer": "bg" },
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "forge_embers",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 5000,
        "particle_lifetime_ms": 3000,
        "spawn_width": 20.0,
        "spawn_height": 20.0,
        "start_color": "#FF4500",
        "end_color": "#FF0000",
        "start_scale": 0.15,
        "end_scale": 0.0,
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "speed": 0.8,
        "gravity_y": -1.5,
        "wind_x": 0.5
      }
    },
    {
      "time_offset_ms": 500,
      "type": "NARRATIVE",
      "content": "Sức nóng của Lò Luyện Ngục bắt đầu bóp nghẹt không gian..."
    },
    {
      "time_offset_ms": 1000,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 8,
      "target_y": 13
    },
    {
      "time_offset_ms": 1200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 6,
      "target_y": 17
    },
    {
      "time_offset_ms": 2000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "GRAAAAH! Lại đây thằng người sắt!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 2100,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -70,
      "is_critical": false
    },
    {
      "time_offset_ms": 2100,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_mesh": {
        "vfx_id": "karn_chain",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#696969",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": -3.0,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 2400,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 14
    },
    {
      "time_offset_ms": 2450,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "karn_drag_dust",
        "emitter_type": "continuous",
        "emit_rate": 30,
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 1.0,
        "start_color": "#8B4513",
        "end_color": "#D2B48C",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 1.0,
        "gravity_y": -1.0
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_break_shards",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.0,
        "spawn_height": 1.0,
        "start_color": "#C0C0C0",
        "end_color": "#FFFFFF",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 3.0,
        "gravity_y": 5.0,
        "spread_angle": 360
      },
      "gsap_tween": {
        "color_tint": "#C0C0C0",
        "tint_alpha": 0.5,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 3
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-70",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 2550,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_impact_shards",
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 500,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.0,
        "speed": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 3000,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 7,
      "target_y": 17
    },
    {
      "time_offset_ms": 3500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B2",
      "hp_change": -43,
      "is_critical": false
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_beam",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#00FFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_core",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.15,
        "color": "#FFFFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 20,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 3600,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "vfx_id": "lyra_beam_shatter",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "offset_x": -2.0,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.5,
        "gravity_y": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 3600,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-43",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 4550,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 4600,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-58",
        "font_family": "Arial",
        "color": "#FF0000",
        "font_size": 0.7,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "NARRATIVE",
      "content": "Sàn nung chảy bòn rút sinh lực của mọi kẻ đứng trên đó."
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 4900,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    }
  ]
}
{
  "chunk_summary": "Lyra phản đạn cực gắt bằng Bão Đạn, đẩy lùi Nyx và giữ khoảng cách an toàn. Cùng lúc, Braum giáng đòn Rung Chấn Dung Nham hất tung Karn để bảo vệ chủ nhân. Tuy nhiên, mặt sàn Lò Luyện Ngục bắt đầu phát huy tác dụng tàn phá: giáp của Braum và Karn nóng chảy vì đứng yên quá lâu. Nyx thoắt ẩn thoắt hiện, xuyên qua Lyra với Ảo Ảnh Sát Tự, để lại những vết chém rỉ máu. Trận chiến ngày càng đẫm máu trong cái nóng nghẹt thở.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 232, "x": 7, "y": 18 },
    "char_A2": { "hp": 593, "x": 8, "y": 14 },
    "char_B1": { "hp": 320, "x": 8, "y": 19 },
    "char_B2": { "hp": 529, "x": 8, "y": 13 }
  },
  "timeline": [
    {
      "time_offset_ms": 5200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Tránh xa ta ra, thứ đột biến gớm ghiếc!",
      "emotion": "DISGUST"
    },
    {
      "time_offset_ms": 5200,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 5200,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 7,
      "target_y": 18
    },
    {
      "time_offset_ms": 5200,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 5200,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "lyra_dash_smoke",
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 500,
        "start_color": "#888888",
        "end_color": "#444444",
        "start_scale": 0.5,
        "end_scale": 1.0,
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "speed": 0.5
      }
    },
    {
      "time_offset_ms": 5400,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_1",
        "path_points": [[-3, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 5400,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "lyra_spiral_smoke",
        "emitter_type": "continuous",
        "emit_rate": 30,
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 300,
        "spawn_width": 3.0,
        "offset_x": -1.5,
        "start_color": "#FF4500",
        "end_color": "#808080",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.0,
        "rotation_speed_variance": 360
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_2",
        "path_points": [[-3, 0.2], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "NARRATIVE",
      "content": "Lớp giáp kim loại bắt đầu chảy rữa vì sức nóng tích tụ từ mặt sàn!"
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#FF8C00",
        "tint_alpha": 0.6,
        "duration_ms": 300,
        "ease": "power1.inOut"
      }
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_drip",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 1900,
        "particle_lifetime_ms": 600,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.2,
        "end_scale": 0.1,
        "speed": 0.5,
        "gravity_y": 4.0
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "color_tint": "#FF8C00",
        "tint_alpha": 0.6,
        "duration_ms": 300,
        "ease": "power1.inOut"
      }
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_drip",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 1900,
        "particle_lifetime_ms": 600,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.2,
        "end_scale": 0.1,
        "speed": 0.5,
        "gravity_y": 4.0
      }
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_3",
        "path_points": [[-3, -0.2], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 5650,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 1.0,
        "duration_ms": 300,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 5650,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 6,
      "target_y": 16
    },
    {
      "time_offset_ms": 5650,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "lyra_target_sparks",
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "start_color": "#FF5500",
        "end_color": "#FFCC00",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 4.0,
        "friction": 0.9,
        "spread_angle": 120,
        "emit_angle": 180
      }
    },
    {
      "time_offset_ms": 5650,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.5,
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "nyx_dmg_text",
        "content": "-65",
        "font_family": "Arial",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -45,
      "is_critical": false
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "y": -0.5,
        "duration_ms": 200,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": { "layer": "bg" },
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "vfx_id": "magma_shockwave",
        "shape_type": "circle",
        "radius": 2.0,
        "fill_color": "#FF4500",
        "fill_alpha": 0.6,
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_filters": {
        "target_vfx_id": "magma_shockwave",
        "filter_type": "shockwave",
        "amplitude": 1.2,
        "wavelength": 0.8,
        "thickness": 0.4,
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 6450,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 6500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "magma_spikes",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 800,
        "spawn_radius": 2.0,
        "start_color": "#FF3300",
        "end_color": "#330000",
        "start_scale": 0.6,
        "end_scale": 0.2,
        "speed": 3.0,
        "gravity_y": 8.0,
        "emit_angle": -90,
        "spread_angle": 60
      }
    },
    {
      "time_offset_ms": 6650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": 0.0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 6650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-45",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "ease": "sine.inOut",
        "repeat": 9,
        "yoyo": true
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "stun_stars",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 400,
        "spawn_radius": 0.6,
        "offset_y": -1.2,
        "start_color": "#FFFF00",
        "end_color": "#FFA500",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.0,
        "tangential_acceleration": 6.0
      }
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "slow_mud",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.2,
        "offset_y": 0.5,
        "start_color": "#8B0000",
        "end_color": "#3E0000",
        "start_scale": 0.5,
        "end_scale": 0.8,
        "speed": 0.1
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "magma_landing_dust",
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 400,
        "spawn_width": 1.5,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#330000",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 2.0,
        "gravity_y": -1.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 7500,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Ngươi không thoát khỏi bóng tối đâu...",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 7500,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -75,
      "is_critical": false
    },
    {
      "time_offset_ms": 7500,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 8,
      "target_y": 19
    },
    {
      "time_offset_ms": 7500,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 2.0,
        "x": 4.0,
        "duration_ms": 300,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 7650,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_graphics": {
        "vfx_id": "nyx_shadow_clone",
        "shape_type": "rect",
        "width": 1.0,
        "height": 2.0,
        "fill_color": "#000000",
        "fill_alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 0
      }
    },
    {
      "time_offset_ms": 7650,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_filters": {
        "target_vfx_id": "nyx_shadow_clone",
        "filter_type": "glitch",
        "slices": 10,
        "duration_ms": 850
      }
    },
    {
      "time_offset_ms": 8000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "NGHIỀN NÁT NGƯƠI!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 8000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -72,
      "is_critical": false
    },
    {
      "time_offset_ms": 8000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_graphics": {
        "vfx_id": "karn_axe_swipe",
        "shape_type": "circle",
        "radius": 2.0,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "is_pie_slice": true,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 8100,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_axe_sparks",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 500,
        "spawn_radius": 1.0,
        "start_color": "#FF4500",
        "end_color": "#800000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 3.0,
        "friction": 0.9,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 8100,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-72",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 8150,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "nyx_purple_mist",
        "emitter_type": "burst",
        "burst_count": 50,
        "particle_lifetime_ms": 800,
        "spawn_radius": 1.5,
        "start_color": "#4B0082",
        "end_color": "#000000",
        "start_scale": 0.8,
        "end_scale": 1.5,
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "speed": 1.0,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "nyx_dark_needles",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 300,
        "shape_type": "line",
        "path_points": [[0, 0], [0, -0.5]],
        "start_color": "#8A2BE2",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 6.0,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-75",
        "font_family": "Arial",
        "color": "#FF0000",
        "font_size": 0.7,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 8550,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "bleed_drops",
        "emitter_type": "continuous",
        "emit_rate": 10,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.5,
        "start_color": "#8B0000",
        "end_color": "#A52A2A",
        "start_scale": 0.2,
        "end_scale": 0.3,
        "speed": 1.5,
        "gravity_y": 4.0
      }
    },
    {
      "time_offset_ms": 8550,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "blind_mist",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 800,
        "spawn_width": 1.0,
        "spawn_height": 0.5,
        "offset_y": -0.5,
        "start_color": "#800080",
        "end_color": "#4B0082",
        "start_scale": 0.6,
        "end_scale": 0.8,
        "start_alpha": 0.7,
        "end_alpha": 0.0,
        "speed": 0.2,
        "wind_x": 0.2
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 9650,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 9650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-48",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    }
  ]
}
{
  "chunk_summary": "Nhiệt độ cực độ của Lò Luyện Ngục bắt đầu bòn rút sinh mệnh của cả hai phe. Giáp của Braum bị nung chảy do đứng yên quá lâu, khiến hắn nhận lượng sát thương khổng lồ từ đòn rìu của Karn. Lyra và Nyx liên tục luân chuyển vị trí để tránh sức nóng rát gót, đồng thời liên tục tung ra các đòn tấn công chí mạng vào nhau trong làn khói mờ mịt.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 164, "x": 6, "y": 16 },
    "char_A2": { "hp": 504, "x": 8, "y": 14 },
    "char_B1": { "hp": 258, "x": 7, "y": 17 },
    "char_B2": { "hp": 472, "x": 8, "y": 13 }
  },
  "timeline": [
    {
      "time_offset_ms": 10100,
      "type": "NARRATIVE",
      "content": "Sức nóng của Lò Luyện Ngục đạt ngưỡng cực đoan, thiêu đốt sinh mệnh của tất cả!"
    },
    {
      "time_offset_ms": 10200,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#FF8C00",
        "tint_alpha": 0.6,
        "duration_ms": 300,
        "ease": "power1.inOut"
      }
    },
    {
      "time_offset_ms": 10300,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_drip",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 1900,
        "particle_lifetime_ms": 600,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.2,
        "end_scale": 0.1,
        "speed": 0.5,
        "gravity_y": 4.0
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 10500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 10500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 10500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 6,
      "target_y": 16
    },
    {
      "time_offset_ms": 11500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 11500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 11500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 11500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -47,
      "is_critical": false
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_beam",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#00FFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_core",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.15,
        "color": "#FFFFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 20,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 11900,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "vfx_id": "lyra_beam_shatter",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "offset_x": -2.0,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.5,
        "gravity_y": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 11900,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.5,
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "nyx_dmg_text",
        "content": "-47",
        "font_family": "Arial",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "VỠ VỤN ĐI KẺ CẢN ĐƯỜNG!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 12000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -74,
      "is_critical": false
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_graphics": {
        "vfx_id": "karn_axe_swipe",
        "shape_type": "circle",
        "radius": 2.0,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "is_pie_slice": true,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 12100,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_axe_sparks",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 500,
        "spawn_radius": 1.0,
        "start_color": "#FF4500",
        "end_color": "#800000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 3.0,
        "friction": 0.9,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 12100,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-74",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 12150,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 12500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 13000,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 17
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 13600,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Chết tiệt, cái nền rác rưởi này đang nướng chín chúng ta!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 13800,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -53,
      "is_critical": false
    },
    {
      "time_offset_ms": 13800,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 13850,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 13900,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-53",
        "font_family": "Arial",
        "color": "#FF0000",
        "font_size": 0.7,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 14500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 14800,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -42,
      "is_critical": false
    },
    {
      "time_offset_ms": 14800,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 14950,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 14950,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-42",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    }
  ]
}
{
  "chunk_summary": "Sức ép của Lò Luyện Ngục được đẩy lên đến đỉnh điểm, liên tục thiêu đốt sinh lực của cả bốn chiến binh. Lyra mở màn bằng Bão Đạn gắt gao đẩy lùi Nyx, nhưng bóng ma sát thủ lập tức đáp trả bằng Ảo Ảnh Sát Tự, đâm xuyên và làm mù mắt cô. Ở mặt trận tuyến trên, Karn điên cuồng vung xích kéo giật Braum lại gần, bẻ nát lớp giáp của hắn. Braum kiên cố đáp trả bằng một cú dậm Rung Chấn Dung Nham, hất văng gã đồ tể khát máu lên không trung.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 89, "x": 6, "y": 15 },
    "char_A2": { "hp": 424, "x": 8, "y": 12 },
    "char_B1": { "hp": 163, "x": 6, "y": 14 },
    "char_B2": { "hp": 412, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 15200,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Tránh xa ta ra, cặn bã!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 15200,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 6,
      "target_y": 15
    },
    {
      "time_offset_ms": 15200,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "x": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 15200,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "lyra_dash_smoke",
        "emitter_type": "burst",
        "burst_count": 15,
        "particle_lifetime_ms": 500,
        "start_color": "#888888",
        "end_color": "#444444",
        "start_scale": 0.5,
        "end_scale": 1.0,
        "start_alpha": 0.6,
        "end_alpha": 0.0,
        "speed": 0.5
      }
    },
    {
      "time_offset_ms": 15400,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_1",
        "path_points": [[-3, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 15400,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "lyra_spiral_smoke",
        "emitter_type": "continuous",
        "emit_rate": 30,
        "emit_duration_ms": 200,
        "particle_lifetime_ms": 300,
        "spawn_width": 3.0,
        "offset_x": -1.5,
        "start_color": "#FF4500",
        "end_color": "#808080",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.0,
        "rotation_speed_variance": 360
      }
    },
    {
      "time_offset_ms": 15500,
      "type": "NARRATIVE",
      "content": "Nhiệt độ thảm khốc của Lò Luyện Ngục làm bốc hơi mọi lượng oxy..."
    },
    {
      "time_offset_ms": 15500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 15500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 15500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 15500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 15500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_2",
        "path_points": [[-3, 0.2], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_bullet_3",
        "path_points": [[-3, -0.2], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.5,
        "color": "#FF2200",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 15650,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 18
    },
    {
      "time_offset_ms": 15650,
      "type": "SKILL",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -80,
      "is_critical": false
    },
    {
      "time_offset_ms": 15650,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "x": 1.0,
        "duration_ms": 300,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 15650,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "lyra_target_sparks",
        "emitter_type": "burst",
        "burst_count": 40,
        "particle_lifetime_ms": 600,
        "start_color": "#FF5500",
        "end_color": "#FFCC00",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 4.0,
        "friction": 0.9,
        "spread_angle": 120,
        "emit_angle": 180
      }
    },
    {
      "time_offset_ms": 15650,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.5,
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "nyx_dmg_text",
        "content": "-80",
        "font_family": "Arial",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 6,
      "target_y": 14
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "scale_x": 2.0,
        "x": 4.0,
        "duration_ms": 300,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_graphics": {
        "vfx_id": "nyx_shadow_clone",
        "shape_type": "rect",
        "width": 1.0,
        "height": 2.0,
        "fill_color": "#000000",
        "fill_alpha": 0.8,
        "fade_in_ms": 50,
        "lifetime_ms": 800,
        "fade_out_ms": 0
      }
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_A1",
      "pixi_filters": {
        "target_vfx_id": "nyx_shadow_clone",
        "filter_type": "glitch",
        "slices": 10,
        "duration_ms": 850
      }
    },
    {
      "time_offset_ms": 16500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 16500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 16500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 16500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 16800,
      "type": "MOVE",
      "actor_id": "char_B2",
      "target_x": 8,
      "target_y": 11
    },
    {
      "time_offset_ms": 17000,
      "type": "SKILL",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -60,
      "is_critical": false
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "nyx_purple_mist",
        "emitter_type": "burst",
        "burst_count": 50,
        "particle_lifetime_ms": 800,
        "spawn_radius": 1.5,
        "start_color": "#4B0082",
        "end_color": "#000000",
        "start_scale": 0.8,
        "end_scale": 1.5,
        "start_alpha": 0.8,
        "end_alpha": 0.0,
        "speed": 1.0,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "nyx_dark_needles",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 300,
        "shape_type": "line",
        "path_points": [[0, 0], [0, -0.5]],
        "start_color": "#8A2BE2",
        "end_color": "#000000",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 6.0,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-60",
        "font_family": "Arial",
        "color": "#FF0000",
        "font_size": 0.7,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "blind_mist",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 800,
        "spawn_width": 1.0,
        "spawn_height": 0.5,
        "offset_y": -0.5,
        "start_color": "#800080",
        "end_color": "#4B0082",
        "start_scale": 0.6,
        "end_scale": 0.8,
        "start_alpha": 0.7,
        "end_alpha": 0.0,
        "speed": 0.2,
        "wind_x": 0.2
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "bleed_drops",
        "emitter_type": "continuous",
        "emit_rate": 10,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.5,
        "start_color": "#8B0000",
        "end_color": "#A52A2A",
        "start_scale": 0.2,
        "end_scale": 0.3,
        "speed": 1.5,
        "gravity_y": 4.0
      }
    },
    {
      "time_offset_ms": 17100,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "KHÔNG THỂ CHẠY!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 17100,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_mesh": {
        "vfx_id": "karn_chain",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#696969",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 17400,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": -3.0,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 17400,
      "type": "MOVE",
      "actor_id": "char_A2",
      "target_x": 8,
      "target_y": 12
    },
    {
      "time_offset_ms": 17450,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "karn_drag_dust",
        "emitter_type": "continuous",
        "emit_rate": 30,
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 1.0,
        "start_color": "#8B4513",
        "end_color": "#D2B48C",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 1.0,
        "gravity_y": -1.0
      }
    },
    {
      "time_offset_ms": 17500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 17500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 17500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 17500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 17600,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_impact_shards",
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 500,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.0,
        "speed": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_break_shards",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.0,
        "spawn_height": 1.0,
        "start_color": "#C0C0C0",
        "end_color": "#FFFFFF",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 3.0,
        "gravity_y": 5.0,
        "spread_angle": 360
      },
      "gsap_tween": {
        "color_tint": "#C0C0C0",
        "tint_alpha": 0.5,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 3
      }
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-65",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 17650,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "MỤC TIÊU NGUY HIỂM. TRIỆT TIÊU.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 18000,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "y": -0.5,
        "duration_ms": 200,
        "ease": "power2.out",
        "yoyo": true,
        "repeat": 1
      }
    },
    {
      "time_offset_ms": 18400,
      "type": "VFX",
      "target_id": "char_A2",
      "canvas_layer": { "layer": "bg" },
      "blend_mode": { "mode": "ADD" },
      "pixi_graphics": {
        "vfx_id": "magma_shockwave",
        "shape_type": "circle",
        "radius": 2.0,
        "fill_color": "#FF4500",
        "fill_alpha": 0.6,
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 18400,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_filters": {
        "target_vfx_id": "magma_shockwave",
        "filter_type": "shockwave",
        "amplitude": 1.2,
        "wavelength": 0.8,
        "thickness": 0.4,
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 18450,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": -1.0,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 18500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 18500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 18500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 18500,
      "type": "SKILL",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -45,
      "is_critical": false
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "magma_spikes",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 800,
        "spawn_radius": 2.0,
        "start_color": "#FF3300",
        "end_color": "#330000",
        "start_scale": 0.6,
        "end_scale": 0.2,
        "speed": 3.0,
        "gravity_y": 8.0,
        "emit_angle": -90,
        "spread_angle": 60
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-45",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "ease": "sine.inOut",
        "repeat": 9,
        "yoyo": true
      },
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "stun_stars",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 400,
        "spawn_radius": 0.6,
        "offset_y": -1.2,
        "start_color": "#FFFF00",
        "end_color": "#FFA500",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 2.0,
        "tangential_acceleration": 6.0
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "slow_mud",
        "emitter_type": "continuous",
        "emit_rate": 15,
        "emit_duration_ms": 1000,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.2,
        "offset_y": 0.5,
        "start_color": "#8B0000",
        "end_color": "#3E0000",
        "start_scale": 0.5,
        "end_scale": 0.8,
        "speed": 0.1
      }
    },
    {
      "time_offset_ms": 18650,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "y": 0.0,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 18800,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "magma_landing_dust",
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 400,
        "spawn_width": 1.5,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#330000",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 2.0,
        "gravity_y": -1.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 19500,
      "type": "NARRATIVE",
      "content": "Sàn đấu tiếp tục biến thành bể magma lỏng, không chừa một ai..."
    },
    {
      "time_offset_ms": 19500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 19500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 19500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 19500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    }
  ]
}
{
  "chunk_summary": "Sức nóng của Lò Luyện Ngục tiếp tục ăn mòn sinh lực của cả hai phe. Lyra rơi vào tình trạng nguy kịch, cố gắng lùi lại để tránh lưỡi dao tử thần của Nyx nhưng vẫn bị chém trúng. Ở tuyến trên, Karn điên cuồng vung rìu xé toạc giáp của Braum, buộc cỗ máy phòng ngự này phải giáng khiên đáp trả. Bất chấp thương tích rỉ máu, Lyra vẫn lạnh lùng nã một phát đạn plasma thẳng vào cái bóng của Nyx.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 28, "x": 3, "y": 17 },
    "char_A2": { "hp": 357, "x": 8, "y": 12 },
    "char_B1": { "hp": 106, "x": 5, "y": 16 },
    "char_B2": { "hp": 365, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 20000,
      "type": "NARRATIVE",
      "content": "Không khí cô đặc lại vì nhiệt độ cực hạn. Lò Luyện Ngục đang nuốt chửng tất cả!"
    },
    {
      "time_offset_ms": 20500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 20500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 20500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 20500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 20500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 20500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 20500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 20500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 4,
      "target_y": 16
    },
    {
      "time_offset_ms": 21200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 5,
      "target_y": 16
    },
    {
      "time_offset_ms": 21400,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Sự im lặng của cái chết đang gọi tên ngươi.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 21500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -52,
      "is_critical": false
    },
    {
      "time_offset_ms": 21500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 21550,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 21600,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-52",
        "font_family": "Arial",
        "color": "#FF0000",
        "font_size": 0.7,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 21900,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "RÁCH NÁT RA ĐI, CỖ MÁY VÔ DỤNG!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 22000,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -58,
      "is_critical": false
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_graphics": {
        "vfx_id": "karn_axe_swipe",
        "shape_type": "circle",
        "radius": 2.0,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "is_pie_slice": true,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 22100,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_axe_sparks",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 500,
        "spawn_radius": 1.0,
        "start_color": "#FF4500",
        "end_color": "#800000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 3.0,
        "friction": 0.9,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 22100,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-58",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 22150,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 22900,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "MỨC NĂNG LƯỢNG NGUY KỊCH. ƯU TIÊN BẢO VỆ CHỦ NHÂN.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 23000,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -38,
      "is_critical": false
    },
    {
      "time_offset_ms": 23000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 23150,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 23150,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-38",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 23500,
      "type": "MOVE",
      "actor_id": "char_A1",
      "target_x": 3,
      "target_y": 17
    },
    {
      "time_offset_ms": 23700,
      "type": "DIALOGUE",
      "actor_id": "char_A1",
      "content": "Nhận đạn đi, thứ phế thải!",
      "emotion": "ANGRY"
    },
    {
      "time_offset_ms": 23800,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_B1",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 23800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_beam",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.4,
        "color": "#00FFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 23800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "lyra_plasma_core",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.15,
        "color": "#FFFFFF",
        "alpha": 1.0,
        "style": "energy_beam",
        "fade_in_ms": 20,
        "lifetime_ms": 100,
        "fade_out_ms": 50
      }
    },
    {
      "time_offset_ms": 23900,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "SCREEN" },
      "pixi_particles": {
        "vfx_id": "lyra_beam_shatter",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 400,
        "spawn_width": 4.0,
        "spawn_height": 0.2,
        "offset_x": -2.0,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.05,
        "speed": 1.5,
        "gravity_y": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 23900,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.5,
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "nyx_dmg_text",
        "content": "-48",
        "font_family": "Arial",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 24500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 24500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 24500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    }
  ]
}
{
  "chunk_summary": "Nyx Bóng Đêm tàn nhẫn lướt tới và kết liễu Lyra bằng một nhát chém chí mạng, vĩnh viễn dập tắt tia lửa của cô kỹ sư. Mất đi mục tiêu bảo vệ tối thượng, hệ thống logic của Braum ghi nhận lỗi nghiêm trọng và lập tức chuyển sang chế độ tử chiến. Mặc kệ lớp giáp rỉ sét đang tan chảy dưới cái nóng kinh hoàng, Thiết Tường điên cuồng vung khiên ăn thua đủ với Karn và Nyx. Trận đấu giờ đây chỉ còn là một cuộc tàn sát đẫm máu trên biển lửa.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_A1": { "hp": 0, "x": 3, "y": 17 },
    "char_A2": { "hp": 205, "x": 8, "y": 12 },
    "char_B1": { "hp": 91, "x": 7, "y": 13 },
    "char_B2": { "hp": 302, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 25200,
      "type": "NARRATIVE",
      "content": "Lyra lảo đảo vì mất máu. Cỗ máy chém của quái vật không hề nương tay!"
    },
    {
      "time_offset_ms": 25500,
      "type": "ATTACK",
      "actor_id": "char_A1",
      "target_id": "char_A1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 25500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 25500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 25500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Trò chơi kết thúc rồi, kỹ sư nhỏ bé.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 26000,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 4,
      "target_y": 17
    },
    {
      "time_offset_ms": 26000,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -48,
      "is_critical": false
    },
    {
      "time_offset_ms": 26000,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 26150,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 26150,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-48",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 26200,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A1",
      "hp_change": -25,
      "is_critical": true
    },
    {
      "time_offset_ms": 26200,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 26250,
      "type": "VFX",
      "target_id": "char_A1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 26200,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "scale_x": 0.8,
        "scale_y": 0.8,
        "color_tint": "#FF0000",
        "tint_alpha": 0.8,
        "duration_ms": 150,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "lyra_dmg_text",
        "content": "-25 FATAL",
        "font_family": "Arial",
        "color": "#FF00FF",
        "font_size": 0.8,
        "font_weight": "bold",
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 26200,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -72,
      "is_critical": false
    },
    {
      "time_offset_ms": 26200,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_graphics": {
        "vfx_id": "karn_axe_swipe",
        "shape_type": "circle",
        "radius": 2.0,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "is_pie_slice": true,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 26300,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_axe_sparks",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 500,
        "spawn_radius": 1.0,
        "start_color": "#FF4500",
        "end_color": "#800000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 3.0,
        "friction": 0.9,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 26300,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-72",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 26350,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "VFX",
      "target_id": "char_A1",
      "gsap_tween": {
        "opacity": 0.0,
        "duration_ms": 1000,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 26500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 26500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 26500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 26500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 27000,
      "type": "DIALOGUE",
      "actor_id": "char_A2",
      "content": "MẤT TÍN HIỆU CHỦ NHÂN. CHUYỂN SANG CHẾ ĐỘ TỬ CHIẾN.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 27200,
      "type": "MOVE",
      "actor_id": "char_B1",
      "target_x": 7,
      "target_y": 13
    },
    {
      "time_offset_ms": 27500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 27500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 27500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 27500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 27500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 27500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 28500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 28500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 29000,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -65,
      "is_critical": false
    },
    {
      "time_offset_ms": 29000,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 29050,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 29100,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-65",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 29150,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 29500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 29500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 29500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 29500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 29500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 29500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    }
  ]
}
{
  "chunk_summary": "Với sự sụp đổ của Lyra, Braum kích hoạt giao thức tử chiến cuối cùng. Dù lớp giáp đang tan chảy thành magma dưới cái nóng tột độ của Lò Luyện Ngục, Thiết Tường vẫn điên cuồng vung khiên chống trả. Karn và Nyx liên tục dội những đòn chí mạng, xé toạc từng mảnh kim loại của Braum. Cuối cùng, một nhát chém xuyên thấu của Nyx đã dứt điểm cỗ máy khổng lồ. Kỷ Nguyên Công Nghệ chính thức bị nghiền nát.",
  "is_game_over": true,
  "winning_team": "team_B",
  "updated_state": {
    "char_A1": { "hp": 0, "x": 3, "y": 17 },
    "char_A2": { "hp": 0, "x": 8, "y": 12 },
    "char_B1": { "hp": 32, "x": 7, "y": 13 },
    "char_B2": { "hp": 247, "x": 8, "y": 11 }
  },
  "timeline": [
    {
      "time_offset_ms": 30000,
      "type": "NARRATIVE",
      "content": "Giao thức bảo vệ thất bại! Braum tiến vào trạng thái tử chiến cuối cùng."
    },
    {
      "time_offset_ms": 30100,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -60,
      "is_critical": false
    },
    {
      "time_offset_ms": 30100,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_graphics": {
        "vfx_id": "karn_axe_swipe",
        "shape_type": "circle",
        "radius": 2.0,
        "start_angle_deg": -45,
        "end_angle_deg": 45,
        "is_pie_slice": true,
        "fill_color": "#8B0000",
        "fill_alpha": 0.7,
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 200
      }
    },
    {
      "time_offset_ms": 30200,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_axe_sparks",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 500,
        "spawn_radius": 1.0,
        "start_color": "#FF4500",
        "end_color": "#800000",
        "start_scale": 0.3,
        "end_scale": 0.05,
        "speed": 3.0,
        "friction": 0.9,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 30200,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-60",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 30250,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 30500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 30500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 30500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 30500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 30800,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B1",
      "hp_change": -44,
      "is_critical": false
    },
    {
      "time_offset_ms": 30800,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 30950,
      "type": "VFX",
      "target_id": "char_B1",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 30950,
      "type": "VFX",
      "target_id": "char_B1",
      "gsap_tween": {
        "opacity": 0.5,
        "local_shake_x": 0.05,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "nyx_dmg_text",
        "content": "-44",
        "font_family": "Arial",
        "color": "#FFFFFF",
        "font_size": 0.6,
        "float_distance_y": -1.5,
        "float_duration_ms": 400,
        "fade_in_ms": 50,
        "lifetime_ms": 300,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 31500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 31500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 31500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 31500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 31500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 31800,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -55,
      "is_critical": false
    },
    {
      "time_offset_ms": 31800,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 31850,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 31900,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-55",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 31950,
      "type": "VFX",
      "target_id": "char_A2",
      "pixi_particles": {
        "vfx_id": "braum_armor_chips",
        "emitter_type": "burst",
        "burst_count": 10,
        "particle_lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 0.15,
        "end_scale": 0.05,
        "speed": 2.0,
        "gravity_y": 5.0
      }
    },
    {
      "time_offset_ms": 32500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 32500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 32500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 33000,
      "type": "DIALOGUE",
      "actor_id": "char_B2",
      "content": "CHẾT ĐI, TÊN KHỔNG LỒ NGU NGỐC!",
      "emotion": "RAGE"
    },
    {
      "time_offset_ms": 33500,
      "type": "SKILL",
      "actor_id": "char_B2",
      "target_id": "char_A2",
      "hp_change": -70,
      "is_critical": false
    },
    {
      "time_offset_ms": 33000,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_mesh": {
        "vfx_id": "karn_chain",
        "path_points": [[-4, 0], [0, 0]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#696969",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 400,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 33300,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "x": -3.0,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 33350,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "NORMAL" },
      "pixi_particles": {
        "vfx_id": "karn_drag_dust",
        "emitter_type": "continuous",
        "emit_rate": 30,
        "emit_duration_ms": 150,
        "particle_lifetime_ms": 400,
        "spawn_width": 1.0,
        "start_color": "#8B4513",
        "end_color": "#D2B48C",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 1.0,
        "gravity_y": -1.0
      }
    },
    {
      "time_offset_ms": 33500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "karn_impact_shards",
        "emitter_type": "burst",
        "burst_count": 20,
        "particle_lifetime_ms": 500,
        "start_color": "#00FFFF",
        "end_color": "#FFFFFF",
        "start_scale": 0.2,
        "end_scale": 0.0,
        "speed": 4.0,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 33500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "armor_break_shards",
        "emitter_type": "burst",
        "burst_count": 25,
        "particle_lifetime_ms": 600,
        "spawn_width": 1.0,
        "spawn_height": 1.0,
        "start_color": "#C0C0C0",
        "end_color": "#FFFFFF",
        "start_scale": 0.3,
        "end_scale": 0.1,
        "speed": 3.0,
        "gravity_y": 5.0,
        "spread_angle": 360
      },
      "gsap_tween": {
        "color_tint": "#C0C0C0",
        "tint_alpha": 0.5,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 3
      }
    },
    {
      "time_offset_ms": 33500,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "color_tint": "#808080",
        "tint_alpha": 0.8,
        "duration_ms": 100,
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "braum_dmg_text",
        "content": "-70",
        "font_family": "Arial",
        "color": "#A9A9A9",
        "font_size": 0.9,
        "font_weight": "900",
        "float_distance_y": 1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 250,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 33600,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 33600,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 33600,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 33600,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 33600,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 33600,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 33800,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_B2",
      "hp_change": -40,
      "is_critical": false
    },
    {
      "time_offset_ms": 33800,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "braum_shield_arc",
        "path_points": [[-0.5, -1.0], [0, 0], [-0.5, 1.0]],
        "is_closed_path": false,
        "thickness": 0.8,
        "cap_style": "square",
        "color": "#C0C0C0",
        "alpha": 0.8,
        "style": "dash_trail",
        "fade_in_ms": 100,
        "lifetime_ms": 300,
        "fade_out_ms": 400
      }
    },
    {
      "time_offset_ms": 33950,
      "type": "VFX",
      "target_id": "char_B2",
      "pixi_filters": {
        "target_vfx_id": "braum_shield_arc",
        "filter_type": "blur",
        "blur": 2.0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 33950,
      "type": "VFX",
      "target_id": "char_B2",
      "gsap_tween": {
        "scale_x": 1.1,
        "scale_y": 1.1,
        "local_shake_x": 0.08,
        "color_tint": "#8B0000",
        "tint_alpha": 0.7,
        "duration_ms": 150,
        "ease": "rough.ease"
      },
      "pixi_text": {
        "vfx_id": "karn_dmg_text",
        "content": "-40",
        "font_family": "Impact",
        "color": "#FF0000",
        "font_size": 0.7,
        "float_distance_y": -1.0,
        "float_duration_ms": 300,
        "fade_in_ms": 0,
        "lifetime_ms": 200,
        "fade_out_ms": 100
      }
    },
    {
      "time_offset_ms": 34500,
      "type": "ATTACK",
      "actor_id": "char_A2",
      "target_id": "char_A2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 34500,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_B1",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 34500,
      "type": "ATTACK",
      "actor_id": "char_B2",
      "target_id": "char_B2",
      "hp_change": -3,
      "is_critical": false
    },
    {
      "time_offset_ms": 34500,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 34500,
      "type": "VFX",
      "target_id": "char_B1",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 34500,
      "type": "VFX",
      "target_id": "char_B2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "burn_flames",
        "emitter_type": "continuous",
        "emit_rate": 20,
        "emit_duration_ms": 800,
        "particle_lifetime_ms": 500,
        "spawn_width": 0.8,
        "offset_y": 0.5,
        "start_color": "#FF4500",
        "end_color": "#FFA500",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 1.5,
        "gravity_y": -3.0
      }
    },
    {
      "time_offset_ms": 34800,
      "type": "DIALOGUE",
      "actor_id": "char_B1",
      "content": "Yên nghỉ đi.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 34800,
      "type": "ATTACK",
      "actor_id": "char_B1",
      "target_id": "char_A2",
      "hp_change": -5,
      "is_critical": true
    },
    {
      "time_offset_ms": 34800,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "MULTIPLY" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash",
        "path_points": [[-1, -1], [0.5, 0], [-1, 1]],
        "is_closed_path": false,
        "thickness": 0.6,
        "color": "#000000",
        "alpha": 0.9,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 200,
        "fade_out_ms": 300
      }
    },
    {
      "time_offset_ms": 34850,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_mesh": {
        "vfx_id": "nyx_void_slash_edge",
        "path_points": [[-1.1, -1], [0.6, 0], [-1.1, 1]],
        "is_closed_path": false,
        "thickness": 0.2,
        "color": "#8A2BE2",
        "alpha": 1.0,
        "style": "dash_trail",
        "fade_in_ms": 50,
        "lifetime_ms": 150,
        "fade_out_ms": 250
      }
    },
    {
      "time_offset_ms": 34800,
      "type": "VFX",
      "target_id": "char_A2",
      "gsap_tween": {
        "scale_x": 1.2,
        "scale_y": 0.6,
        "x": 0.2,
        "duration_ms": 150,
        "ease": "bounce.out",
        "yoyo": true,
        "repeat": 1
      },
      "pixi_text": {
        "vfx_id": "crit_text",
        "content": "-5 FATAL",
        "font_family": "Arial",
        "color": "#FF8C00",
        "font_size": 0.8,
        "font_weight": "bold",
        "stroke_color": "#000000",
        "stroke_thickness": 0.1,
        "float_distance_y": -1.5,
        "float_duration_ms": 600,
        "fade_in_ms": 50,
        "lifetime_ms": 400,
        "fade_out_ms": 150
      }
    },
    {
      "time_offset_ms": 34850,
      "type": "VFX",
      "target_id": "char_A2",
      "blend_mode": { "mode": "ADD" },
      "pixi_particles": {
        "vfx_id": "crit_sparks",
        "emitter_type": "burst",
        "burst_count": 30,
        "particle_lifetime_ms": 400,
        "spawn_radius": 0.2,
        "start_color": "#FF8C00",
        "end_color": "#FFFF00",
        "start_scale": 0.4,
        "end_scale": 0.1,
        "speed": 6.0,
        "friction": 0.85,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 35000,
      "type": "NARRATIVE",
      "content": "Braum gục ngã! Kỷ Nguyên Công Nghệ đã hoàn toàn bị thiêu rụi tại Lò Luyện Ngục!"
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