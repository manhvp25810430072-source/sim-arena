import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
const RAW_DATA_STRING = `
{
  "chunk_summary": "The battle erupts instantly in the choking sandstorm. Buzz and Krieg charge aggressively at Jax, who anchors himself to protect the rear. Buzz draws first blood, while Krieg revs his rusty chainsaw, carving into Jax's armor. From a distance, Viper lands a precise sniper shot on Jax, bringing him under immense pressure. Riko attempts to cover from afar with a crossbow bolt to Buzz. Bleeding heavily, Jax raises his massive sledgehammer and shatters the earth, knocking Buzz back and crushing Krieg's advance.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": {
      "hp": 860,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 700,
      "x": 12,
      "y": 16
    },
    "raider_krieg_boss": {
      "hp": 1560,
      "x": 10,
      "y": 13
    },
    "raider_buzz_01": {
      "hp": 460,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 100,
      "type": "NARRATIVE",
      "content": "A howling sandstorm rips through the abandoned gas station. The scent of rusted iron and leaked oil fills the air."
    },
    {
      "time_offset_ms": 150,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "SCREEN"
      },
      "pixi_particles": {
        "x": 0,
        "y": 10,
        "emitter_type": "stream",
        "particle_count": 800,
        "lifetime_ms": 8000,
        "start_color": "#D2B48C",
        "end_color": "#A0522D",
        "start_scale": 0.5,
        "end_scale": 4.0,
        "speed": 40,
        "spread_angle": 15
      }
    },
    {
      "time_offset_ms": 150,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 20,
        "y": 15,
        "emitter_type": "stream",
        "particle_count": 400,
        "lifetime_ms": 6000,
        "start_color": "#CD853F",
        "end_color": "#8B4513",
        "start_scale": 1.0,
        "end_scale": 3.0,
        "speed": -35,
        "spread_angle": 10
      }
    },
    {
      "time_offset_ms": 400,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8.5,
        "y": 12.5,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": -10,
        "duration_ms": 100,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 500,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 9,
      "target_y": 13
    },
    {
      "time_offset_ms": 500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 8,
        "y": 12,
        "emitter_type": "burst",
        "particle_count": 40,
        "lifetime_ms": 400,
        "start_color": "#A9A9A9",
        "end_color": "#696969",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 10,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 550,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 9,
        "y": 13,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 600,
        "ease": "back.out"
      }
    },
    {
      "time_offset_ms": 750,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 12,
        "scale": 1.2,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 50,
        "ease": "power4.in"
      }
    },
    {
      "time_offset_ms": 800,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 10,
      "target_y": 13
    },
    {
      "time_offset_ms": 800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 12,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 600,
        "start_color": "#5C4033",
        "end_color": "#27150B",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 15,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 13,
        "scale": 1.05,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 800,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 1100,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 14,
        "y": 9,
        "scale": 0.9,
        "opacity": 0.5,
        "rotation_deg": 20,
        "duration_ms": 100,
        "ease": "linear"
      }
    },
    {
      "time_offset_ms": 1200,
      "type": "MOVE",
      "actor_id": "raider_viper_02",
      "target_x": 15,
      "target_y": 8
    },
    {
      "time_offset_ms": 1200,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [
            14,
            9
          ],
          [
            15,
            8
          ]
        ],
        "thickness": 3,
        "color": "#00FF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 1250,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 8,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 400,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 1800,
      "type": "DIALOGUE",
      "actor_id": "raider_buzz_01",
      "content": "Flesh! Sweet, tearing flesh!!",
      "emotion": "MANIACAL"
    },
    {
      "time_offset_ms": 2350,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8.5,
        "y": 12.5,
        "scale": 1.2,
        "opacity": 1.0,
        "rotation_deg": -30,
        "duration_ms": 150,
        "ease": "power1.in"
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "ATTACK",
      "actor_id": "raider_buzz_01",
      "target_id": "char_jax_01",
      "hp_change": -135,
      "is_critical": false
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [
            8.5,
            12.5
          ],
          [
            10.5,
            14.5
          ]
        ],
        "thickness": 6,
        "color": "#FF0000",
        "distortion_amplitude": 5,
        "animation_speed": 3,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 9.8,
        "y": 13.8,
        "emitter_type": "burst",
        "particle_count": 120,
        "lifetime_ms": 700,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 25,
        "spread_angle": 135
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-135 LACERATED",
        "x": 10.5,
        "y": 13.5,
        "color": "#FF0000",
        "font_size": 28,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1200
      }
    },
    {
      "time_offset_ms": 2500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10.3,
        "y": 14.3,
        "scale": 0.95,
        "opacity": 1.0,
        "rotation_deg": -10,
        "duration_ms": 100,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 2550,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 9,
        "y": 13,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 2600,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 12,
      "target_y": 16
    },
    {
      "time_offset_ms": 2600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 16,
        "scale": 0.9,
        "opacity": 1.0,
        "rotation_deg": 360,
        "duration_ms": 400,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 2800,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Shit! They're swarming! Hold the line, big guy!",
      "emotion": "PANIC"
    },
    {
      "time_offset_ms": 2850,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 12,
        "y": 16,
        "emitter_type": "pulse",
        "particle_count": 50,
        "lifetime_ms": 200,
        "start_color": "#FFFFFF",
        "end_color": "#FFFF00",
        "start_scale": 0.5,
        "end_scale": 2.0,
        "speed": 5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 2880,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [
            12,
            16
          ],
          [
            9,
            13
          ]
        ],
        "thickness": 4,
        "color": "#00FFFF",
        "distortion_amplitude": 1,
        "animation_speed": 10,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -160,
      "is_critical": false
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 9,
        "y": 13,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 500,
        "start_color": "#8B0000",
        "end_color": "#000000",
        "start_scale": 1.2,
        "end_scale": 0.1,
        "speed": 15,
        "spread_angle": 315
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-160 PIERCED",
        "x": 8.5,
        "y": 12.5,
        "color": "#00FFFF",
        "font_size": 24,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 2900,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8.7,
        "y": 12.7,
        "scale": 0.9,
        "opacity": 1.0,
        "rotation_deg": -25,
        "duration_ms": 100,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 3400,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 10.2,
        "y": 13.2,
        "emitter_type": "fountain",
        "particle_count": 100,
        "lifetime_ms": 500,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 0.5,
        "end_scale": 0.1,
        "speed": 12,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 3450,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 13,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": -15,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 10,
        "repeat": 4,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -295,
      "is_critical": true
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_mesh": {
        "path_points": [
          [
            10.2,
            13.2
          ],
          [
            9.8,
            13.8
          ],
          [
            10.3,
            14.2
          ],
          [
            9.7,
            14.5
          ]
        ],
        "thickness": 8,
        "color": "#FFA500",
        "distortion_amplitude": 10,
        "animation_speed": 8,
        "style": "lightning_arc"
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 300,
        "lifetime_ms": 1200,
        "start_color": "#FF0000",
        "end_color": "#8B0000",
        "start_scale": 2.5,
        "end_scale": 0.5,
        "speed": 35,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "SCREEN"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "stream",
        "particle_count": 150,
        "lifetime_ms": 600,
        "start_color": "#FFFF00",
        "end_color": "#FF4500",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 20,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-295 CRITICAL GORE",
        "x": 10.5,
        "y": 13.5,
        "color": "#FF4500",
        "font_size": 36,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -5,
        "fade_duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.8,
        "y": 14.5,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": -20,
        "duration_ms": 40,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 40,
        "repeat": 6,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 3500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 3.0,
        "color": "#FF0000",
        "radius": 15,
        "duration_ms": 600
      }
    },
    {
      "time_offset_ms": 3800,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "SCREAM FOR ME! HAHAHA!",
      "emotion": "PSYCHOTIC"
    },
    {
      "time_offset_ms": 3900,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [
          [
            15,
            8
          ],
          [
            10.2,
            13.8
          ]
        ],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 2,
        "line_color": "#FF0000",
        "line_alpha": 0.8
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 8,
        "scale": 1.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "linear"
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -210,
      "is_critical": false
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [
            15,
            8
          ],
          [
            9.8,
            14.2
          ]
        ],
        "thickness": 8,
        "color": "#FFFF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 9.5,
        "y": 14.5,
        "emitter_type": "burst",
        "particle_count": 150,
        "lifetime_ms": 600,
        "start_color": "#8B0000",
        "end_color": "#000000",
        "start_scale": 2.0,
        "end_scale": 0.2,
        "speed": 40,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-210 HEADSHOT",
        "x": 9.5,
        "y": 14.8,
        "color": "#FFD700",
        "font_size": 30,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 1200
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.5,
        "y": 14.5,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 80,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 4000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15.2,
        "y": 7.8,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 4200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 13.8,
        "scale": 1.3,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 250,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4450,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 14.2,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "power4.in"
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -240,
      "is_critical": false
    },
    {
      "time_offset_ms": 4500,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_buzz_01",
      "hp_change": -230,
      "is_critical": false
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "shockwave",
        "intensity": 10.0,
        "color": "#8B4513",
        "radius": 60,
        "duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [
            10,
            14
          ]
        ],
        "radius": 5,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 8,
        "line_color": "#FF8C00",
        "line_alpha": 0.9
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 14,
        "scale": 3.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 400,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 500,
        "lifetime_ms": 1500,
        "start_color": "#A0522D",
        "end_color": "#2F4F4F",
        "start_scale": 3.0,
        "end_scale": 0.5,
        "speed": 50,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 200,
        "lifetime_ms": 800,
        "start_color": "#FFA500",
        "end_color": "#000000",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 60,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 12,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": -35,
        "duration_ms": 400,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 7.5,
        "y": 11.5,
        "scale": 0.7,
        "opacity": 1.0,
        "rotation_deg": -45,
        "duration_ms": 400,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "blur",
        "intensity": 5.0,
        "color": "#000000",
        "radius": 10,
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 4500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "blur",
        "intensity": 5.0,
        "color": "#000000",
        "radius": 10,
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 4510,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-230 CRUSHED",
        "x": 8,
        "y": 12,
        "color": "#FF0000",
        "font_size": 26,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 4510,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-240 CRUSHED",
        "x": 10,
        "y": 12,
        "color": "#FF0000",
        "font_size": 26,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 4600,
      "type": "MOVE",
      "actor_id": "raider_buzz_01",
      "target_x": 8,
      "target_y": 12
    },
    {
      "time_offset_ms": 4600,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8,
        "y": 12,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": -30,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    }
  ]
}
{
  "chunk_summary": "Riko tận dụng mùi dầu máy nồng nặc, bắn một Mũi Tên Nổ găm thẳng vào Buzz, châm ngòi cho một vụ nổ thùng xăng kinh hoàng thiêu rụi hoàn toàn Buzz và nhấn chìm Krieg trong biển lửa. Tuy nhiên, gã thủ lĩnh điên loạn không màng đến ngọn lửa đang thiêu đốt mình, hắn kích hoạt 'Vũ Điệu Đồ Tể', điên cuồng dùng cưa máy xé toạc lớp giáp của Jax. Giữa lúc hỗn loạn, Viper lạnh lùng khai hỏa một viên đạn xuyên giáp từ xa, đâm xuyên qua Riko khiến cô trọng thương và phải lùi lại. Jax, dù toàn thân đẫm máu, vẫn kiên cường vung búa tạ phản công.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": {
      "hp": 480,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 380,
      "x": 12,
      "y": 17
    },
    "raider_krieg_boss": {
      "hp": 950,
      "x": 10,
      "y": 13
    },
    "raider_buzz_01": {
      "hp": 0,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 5100,
      "type": "NARRATIVE",
      "content": "Mùi dầu máy nồng nặc rỉ ra từ vũng lầy dưới chân bọn cướp. Riko nhếch mép, giương nỏ lên cao."
    },
    {
      "time_offset_ms": 5150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 8,
        "y": 12.5,
        "emitter_type": "stream",
        "particle_count": 100,
        "lifetime_ms": 2000,
        "start_color": "#1A1A1A",
        "end_color": "#000000",
        "start_scale": 1.5,
        "end_scale": 3.0,
        "speed": 2,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 5150,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 2.0,
        "color": "#FF4500",
        "radius": 10,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -40,
      "is_critical": false
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12.2,
        "y": 17.2,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 10,
        "duration_ms": 100,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [12, 16],
          [8, 12]
        ],
        "thickness": 4,
        "color": "#FF4500",
        "distortion_amplitude": 2,
        "animation_speed": 10,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 8,
        "y": 12,
        "emitter_type": "burst",
        "particle_count": 60,
        "lifetime_ms": 400,
        "start_color": "#FFD700",
        "end_color": "#FF0000",
        "start_scale": 1.2,
        "end_scale": 0.2,
        "speed": 15,
        "spread_angle": 135
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "-40 LODGED",
        "x": 8,
        "y": 11.5,
        "color": "#FFFFFF",
        "font_size": 24,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 5500,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 7.8,
        "y": 11.8,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 5550,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [8, 12]
        ],
        "radius": 1.5,
        "width": 0,
        "height": 0,
        "fill_color": "#FF0000",
        "fill_alpha": 0.6,
        "line_width": 2,
        "line_color": "#FFA500",
        "line_alpha": 1.0
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8,
        "y": 12,
        "scale": 1.05,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "linear"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 50,
        "repeat": 15,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 5550,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "glow",
        "intensity": 3.0,
        "color": "#FF0000",
        "radius": 8,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 5800,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "THỊT BĂM! TA CẦN THỊT BĂM TƯƠI SỐNG!",
      "emotion": "PSYCHOTIC"
    },
    {
      "time_offset_ms": 5850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 13,
        "emitter_type": "stream",
        "particle_count": 80,
        "lifetime_ms": 600,
        "start_color": "#A9A9A9",
        "end_color": "#000000",
        "start_scale": 1.0,
        "end_scale": 4.0,
        "speed": 10,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -110,
      "is_critical": false
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [10, 13],
          [9.5, 13.8],
          [10.2, 14.5]
        ],
        "thickness": 6,
        "color": "#FFA500",
        "distortion_amplitude": 5,
        "animation_speed": 4,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 10,
        "y": 13.5,
        "emitter_type": "burst",
        "particle_count": 100,
        "lifetime_ms": 500,
        "start_color": "#FFFF00",
        "end_color": "#8B0000",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 20,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-110 SHREDDED",
        "x": 10.5,
        "y": 13.5,
        "color": "#FF0000",
        "font_size": 26,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -2,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 6000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10.2,
        "y": 14.2,
        "scale": 0.95,
        "opacity": 1.0,
        "rotation_deg": 8,
        "duration_ms": 80,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -120,
      "is_critical": false
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [10.2, 13.2],
          [9.8, 14.2]
        ],
        "thickness": 8,
        "color": "#FF4500",
        "distortion_amplitude": 8,
        "animation_speed": 6,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_particles": {
        "x": 9.8,
        "y": 14,
        "emitter_type": "stream",
        "particle_count": 120,
        "lifetime_ms": 600,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 25,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-120",
        "x": 9.5,
        "y": 14,
        "color": "#FF0000",
        "font_size": 28,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 6400,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.6,
        "y": 14.4,
        "scale": 0.9,
        "opacity": 1.0,
        "rotation_deg": -10,
        "duration_ms": 100,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -150,
      "is_critical": true
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [10, 12.5],
          [10, 14.5]
        ],
        "thickness": 12,
        "color": "#FFFFFF",
        "distortion_amplitude": 15,
        "animation_speed": 10,
        "style": "lightning_arc"
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-150 RUPTURE",
        "x": 10.5,
        "y": 13,
        "color": "#FF4500",
        "font_size": 36,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -5,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 300,
        "lifetime_ms": 1000,
        "start_color": "#FF0000",
        "end_color": "#000000",
        "start_scale": 2.5,
        "end_scale": 0.1,
        "speed": 35,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 15,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 150,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 6800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glitch",
        "intensity": 5.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 400
      }
    },
    {
      "time_offset_ms": 6900,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Nướng chín chúng đi, cưng!",
      "emotion": "EXCITED"
    },
    {
      "time_offset_ms": 7100,
      "type": "NARRATIVE",
      "content": "Khối thuốc nổ trên mũi tên phát hỏa! Lửa táp vào vũng dầu máy tạo ra một vụ nổ kinh hoàng bủa vây toán cướp!"
    },
    {
      "time_offset_ms": 7150,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_buzz_01",
      "hp_change": -420,
      "is_critical": true
    },
    {
      "time_offset_ms": 7150,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -400,
      "is_critical": true
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [8, 12]
        ],
        "radius": 1,
        "width": 0,
        "height": 0,
        "fill_color": "#FFFFFF",
        "fill_alpha": 1.0,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 8,
        "y": 12,
        "scale": 15.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 8,
        "y": 12,
        "emitter_type": "burst",
        "particle_count": 800,
        "lifetime_ms": 1800,
        "start_color": "#FFFFFF",
        "end_color": "#FF4500",
        "start_scale": 5.0,
        "end_scale": 0.1,
        "speed": 60,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_particles": {
        "x": 8,
        "y": 12,
        "emitter_type": "burst",
        "particle_count": 400,
        "lifetime_ms": 2500,
        "start_color": "#4A4A4A",
        "end_color": "#000000",
        "start_scale": 4.0,
        "end_scale": 2.0,
        "speed": 35,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_filters": {
        "target_id": "raider_buzz_01",
        "filter_type": "shockwave",
        "intensity": 15.0,
        "color": "#FFA500",
        "radius": 80,
        "duration_ms": 1200
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "pixi_text": {
        "content": "INCINERATED -420",
        "x": 8,
        "y": 11,
        "color": "#FF0000",
        "font_size": 45,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -8,
        "fade_duration_ms": 2500
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_buzz_01",
      "gsap_tween": {
        "target_id": "raider_buzz_01",
        "x": 5,
        "y": 9,
        "scale": 0.1,
        "opacity": 0.0,
        "rotation_deg": 360,
        "duration_ms": 1000,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-400 HELLFIRE",
        "x": 10.5,
        "y": 12,
        "color": "#FF4500",
        "font_size": 38,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -5,
        "fade_duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 11,
        "y": 13.5,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 300,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 7200,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 11,
        "y": 13.5,
        "emitter_type": "stream",
        "particle_count": 200,
        "lifetime_ms": 800,
        "start_color": "#FF4500",
        "end_color": "#1A1A1A",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 15,
        "spread_angle": 90
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 100,
        "repeat": 8,
        "yoyo": false
      }
    },
    {
      "time_offset_ms": 7200,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 4.0,
        "color": "#FF4500",
        "radius": 15,
        "duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 7800,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [
          [14.5, 8.5],
          [12, 17]
        ],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 2,
        "line_color": "#FF0000",
        "line_alpha": 0.8
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 8,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 600,
        "ease": "linear"
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "SKILL",
      "actor_id": "raider_viper_02",
      "target_id": "char_riko_02",
      "hp_change": -320,
      "is_critical": true
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [14.5, 8.5],
          [12, 17]
        ],
        "thickness": 10,
        "color": "#FFFF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 12,
        "y": 17,
        "emitter_type": "burst",
        "particle_count": 250,
        "lifetime_ms": 700,
        "start_color": "#FF0000",
        "end_color": "#4A0000",
        "start_scale": 2.0,
        "end_scale": 0.2,
        "speed": 40,
        "spread_angle": 135
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-320 PIERCED",
        "x": 12.5,
        "y": 16.5,
        "color": "#FFD700",
        "font_size": 34,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 11.5,
        "y": 17.8,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": 35,
        "duration_ms": 150,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "blur",
        "intensity": 8.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 8500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15.5,
        "y": 7.5,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -10,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 8800,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 12,
      "target_y": 17
    },
    {
      "time_offset_ms": 8800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 12,
        "y": 17,
        "scale": 0.9,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 400,
        "ease": "power3.inOut"
      }
    },
    {
      "time_offset_ms": 9000,
      "type": "DIALOGUE",
      "actor_id": "char_jax_01",
      "content": "Riko! Trốn đi! Tên nhãi kia để ta!",
      "emotion": "PROTECTIVE"
    },
    {
      "time_offset_ms": 9050,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 2.5,
        "color": "#FF8C00",
        "radius": 15,
        "duration_ms": 1000
      },
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 15,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 400,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "ATTACK",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -210,
      "is_critical": false
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_mesh": {
        "path_points": [
          [10, 15],
          [11, 13.5]
        ],
        "thickness": 12,
        "color": "#8B4513",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 11,
        "y": 13.5,
        "emitter_type": "burst",
        "particle_count": 150,
        "lifetime_ms": 800,
        "start_color": "#D2B48C",
        "end_color": "#696969",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 25,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-210 SMASHED",
        "x": 11.5,
        "y": 13,
        "color": "#FFFFFF",
        "font_size": 30,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 1200
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 11.5,
        "y": 12.5,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 250,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10.5,
        "y": 14.5,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 150,
        "ease": "power2.in"
      }
    }
  ]
}
{
  "chunk_summary": "Riko bị thương nặng buộc phải lùi sâu vào các dãy phế liệu để ẩn nấp. Cùng lúc đó, Krieg như một con thú điên, gầm rú lao tới cưa nát lớp giáp của Jax, khiến máu tuôn xối xả. Bằng chút sức lực tàn dư, Jax nghiến răng vung búa tạ đập tan mặt đất, hất văng Krieg ra một nhịp. Nhưng từ xa, Viper không bỏ lỡ cơ hội, gã lính bắn tỉa lạnh lùng bóp cò. Một viên đạn găm thẳng vào ngực Jax. Người cựu binh khuỵu một gối xuống cát bụi, thoi thóp với chút sinh mệnh mỏng manh cuối cùng nhưng vẫn dùng búa chống đỡ thân mình, kiên quyết không gục ngã.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": {
      "hp": 15,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 380,
      "x": 13,
      "y": 19
    },
    "raider_krieg_boss": {
      "hp": 705,
      "x": 10,
      "y": 13
    },
    "raider_buzz_01": {
      "hp": 0,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 10200,
      "type": "NARRATIVE",
      "content": "Máu tuôn ướt đẫm vai Riko. Cô cắn chặt môi, lảo đảo lùi sâu vào đống phế liệu tối tăm."
    },
    {
      "time_offset_ms": 10200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_particles": {
        "x": 12,
        "y": 17,
        "emitter_type": "stream",
        "particle_count": 80,
        "lifetime_ms": 1500,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.5,
        "end_scale": 0.5,
        "speed": 5,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 10500,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 13,
      "target_y": 19
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13,
        "y": 19,
        "scale": 0.9,
        "opacity": 0.6,
        "rotation_deg": 15,
        "duration_ms": 600,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 10550,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [
          [12, 17],
          [12.5, 18],
          [13, 19]
        ],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 4,
        "line_color": "#8B0000",
        "line_alpha": 0.5
      }
    },
    {
      "time_offset_ms": 10800,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "CHẾT ĐI THẰNG GIÀ! THỊT MÀY DAI QUÁ!",
      "emotion": "PSYCHOTIC"
    },
    {
      "time_offset_ms": 10850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 10,
        "y": 13,
        "emitter_type": "fountain",
        "particle_count": 150,
        "lifetime_ms": 400,
        "start_color": "#FFA500",
        "end_color": "#FF0000",
        "start_scale": 1.2,
        "end_scale": 0.1,
        "speed": 20,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 10850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10.2,
        "y": 13.2,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 50,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 50,
        "repeat": 6,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 11200,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -275,
      "is_critical": false
    },
    {
      "time_offset_ms": 11200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [10, 13],
          [9.5, 13.8],
          [10.5, 14.2],
          [9.8, 14.5]
        ],
        "thickness": 12,
        "color": "#FF4500",
        "distortion_amplitude": 10,
        "animation_speed": 8,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 11200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 400,
        "lifetime_ms": 1000,
        "start_color": "#FF0000",
        "end_color": "#4A0000",
        "start_scale": 2.5,
        "end_scale": 0.2,
        "speed": 35,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 11200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-275 MANGLED",
        "x": 10.5,
        "y": 13.5,
        "color": "#FF0000",
        "font_size": 36,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 11200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.8,
        "y": 14.3,
        "scale": 0.9,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 80,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 40,
        "repeat": 8,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 11250,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "stream",
        "particle_count": 200,
        "lifetime_ms": 1200,
        "start_color": "#8B0000",
        "end_color": "#000000",
        "start_scale": 3.0,
        "end_scale": 1.0,
        "speed": 15,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 11300,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glitch",
        "intensity": 4.0,
        "color": "#FF0000",
        "radius": 0,
        "duration_ms": 400
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 5.0,
        "color": "#FFD700",
        "radius": 20,
        "duration_ms": 400
      }
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 13.8,
        "scale": 1.2,
        "opacity": 1.0,
        "rotation_deg": -10,
        "duration_ms": 200,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "SKILL",
      "actor_id": "char_jax_01",
      "target_id": "raider_krieg_boss",
      "hp_change": -245,
      "is_critical": false
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "shockwave",
        "intensity": 15.0,
        "color": "#8B4513",
        "radius": 80,
        "duration_ms": 800
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [10, 13.5]
        ],
        "radius": 4,
        "width": 0,
        "height": 0,
        "fill_color": "#D2B48C",
        "fill_alpha": 0.4,
        "line_width": 6,
        "line_color": "#FFA500",
        "line_alpha": 0.9
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 13.5,
        "scale": 4.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 500,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 13.5,
        "emitter_type": "burst",
        "particle_count": 350,
        "lifetime_ms": 1200,
        "start_color": "#CD853F",
        "end_color": "#2F4F4F",
        "start_scale": 3.0,
        "end_scale": 0.5,
        "speed": 40,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-245 EARTHSHATTER",
        "x": 10.5,
        "y": 12.5,
        "color": "#FFD700",
        "font_size": 32,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 12,
        "scale": 0.85,
        "opacity": 1.0,
        "rotation_deg": -25,
        "duration_ms": 400,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 12000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 14,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 5,
        "duration_ms": 200,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 12800,
      "type": "DIALOGUE",
      "actor_id": "raider_viper_02",
      "content": "Kết thúc.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 13000,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [
          [15, 8],
          [10, 14]
        ],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 2,
        "line_color": "#FF0000",
        "line_alpha": 1.0
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 8,
        "scale": 1.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 500,
        "ease": "linear"
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_jax_01",
      "hp_change": -190,
      "is_critical": false
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [15, 8],
          [10, 14]
        ],
        "thickness": 8,
        "color": "#FFFF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "SCREEN"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 300,
        "start_color": "#FFFFFF",
        "end_color": "#FFD700",
        "start_scale": 2.0,
        "end_scale": 0.1,
        "speed": 15,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "stream",
        "particle_count": 300,
        "lifetime_ms": 800,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 3.0,
        "end_scale": 0.5,
        "speed": -45,
        "spread_angle": 30
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "-190 PUNCTURED",
        "x": 9,
        "y": 14.5,
        "color": "#FF0000",
        "font_size": 34,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.2,
        "y": 14.8,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": -35,
        "duration_ms": 150,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 13500,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "blur",
        "intensity": 6.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 300
      }
    },
    {
      "time_offset_ms": 14000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 9.8,
        "y": 14.5,
        "scale": 0.85,
        "opacity": 0.9,
        "rotation_deg": 15,
        "duration_ms": 600,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 14200,
      "type": "NARRATIVE",
      "content": "Jax khuỵu một gối xuống cát. Anh cắm chặt chiếc búa xuống đất làm điểm tựa, cố giữ lấy sinh mệnh mỏng manh."
    },
    {
      "time_offset_ms": 14200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glow",
        "intensity": 4.0,
        "color": "#8B0000",
        "radius": 15,
        "duration_ms": 1500
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": -1,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 14200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14.5,
        "emitter_type": "stream",
        "particle_count": 50,
        "lifetime_ms": 2000,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.0,
        "end_scale": 0.2,
        "speed": 2,
        "spread_angle": 180
      }
    }
  ]
}
{
  "chunk_summary": "Krieg điên cuồng vung cưa máy gầm rú để tung đòn kết liễu. Từ trong góc khuất, Riko tuyệt vọng bắn một mũi tên hòng cản bước gã đồ tể, nhưng vết thương không đủ để ngăn cản cơn khát máu. Cưa máy của Krieg xé toạc sinh mệnh mỏng manh của Jax, kết liễu người cựu binh già một cách tàn bạo. Tiếng hét đau đớn của Riko vừa vang lên thì lập tức bị cắt ngang bởi một phát đạn lạnh lùng từ Viper xuyên qua lớp phế liệu, găm vào vai cô. Riko giờ đây hoàn toàn đơn độc và bị dồn vào chân tường.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": {
      "hp": 0,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 260,
      "x": 14,
      "y": 19
    },
    "raider_krieg_boss": {
      "hp": 600,
      "x": 10,
      "y": 13
    },
    "raider_buzz_01": {
      "hp": 0,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 15100,
      "type": "NARRATIVE",
      "content": "Tiếng cưa máy của Krieg rít lên chói tai giữa bão cát, lưỡi cưa đẫm máu chỉ thẳng vào đầu Jax đang quỳ."
    },
    {
      "time_offset_ms": 15100,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 5.0,
        "color": "#FF0000",
        "radius": 15,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 15150,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 13,
        "emitter_type": "stream",
        "particle_count": 200,
        "lifetime_ms": 1000,
        "start_color": "#FFA500",
        "end_color": "#000000",
        "start_scale": 1.5,
        "end_scale": 4.0,
        "speed": 10,
        "spread_angle": 90
      }
    },
    {
      "time_offset_ms": 15200,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "sepia",
        "intensity": 3.0,
        "color": "#4A0000",
        "radius": 0,
        "duration_ms": 1500
      }
    },
    {
      "time_offset_ms": 15300,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "VĨNH BIỆT LÃO GIÀ! HÃY TRỞ THÀNH BÃ THỊT ĐI!",
      "emotion": "MANIACAL"
    },
    {
      "time_offset_ms": 15600,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -105,
      "is_critical": false
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [13, 19],
          [10, 13]
        ],
        "thickness": 6,
        "color": "#A9A9A9",
        "distortion_amplitude": 2,
        "animation_speed": 10,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 13,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 500,
        "start_color": "#FF0000",
        "end_color": "#8B0000",
        "start_scale": 1.2,
        "end_scale": 0.2,
        "speed": 15,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-105 IMPALED",
        "x": 10.5,
        "y": 12.5,
        "color": "#FFFFFF",
        "font_size": 28,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -3,
        "fade_duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 15600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10.1,
        "y": 12.9,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 100,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 15650,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 10,
        "y": 13,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": 10,
        "duration_ms": 150,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_jax_01",
      "hp_change": -280,
      "is_critical": true
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_mesh": {
        "path_points": [
          [10, 12],
          [9, 13],
          [11, 14],
          [10, 14.5]
        ],
        "thickness": 20,
        "color": "#000000",
        "distortion_amplitude": 15,
        "animation_speed": 6.0,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_filters": {
        "target_id": "GLOBAL",
        "filter_type": "shockwave",
        "intensity": 20.0,
        "color": "#FF0000",
        "radius": 100,
        "duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 800,
        "lifetime_ms": 2500,
        "start_color": "#FF0000",
        "end_color": "#000000",
        "start_scale": 4.0,
        "end_scale": 0.5,
        "speed": 40,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 400,
        "lifetime_ms": 1500,
        "start_color": "#FFFF00",
        "end_color": "#8B0000",
        "start_scale": 2.0,
        "end_scale": 0.1,
        "speed": 50,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_text": {
        "content": "FATALITY -280",
        "x": 10,
        "y": 13,
        "color": "#8B0000",
        "font_size": 50,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -6,
        "fade_duration_ms": 3000
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "gsap_tween": {
        "target_id": "char_jax_01",
        "x": 10,
        "y": 15.5,
        "scale": 0.5,
        "opacity": 0.0,
        "rotation_deg": 180,
        "duration_ms": 1200,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 16000,
      "type": "VFX",
      "target_id": "char_jax_01",
      "pixi_filters": {
        "target_id": "char_jax_01",
        "filter_type": "glitch",
        "intensity": 10.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 16100,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "JAX!!! KHÔNG!!!",
      "emotion": "DESPAIR"
    },
    {
      "time_offset_ms": 16150,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 5.0,
        "color": "#FFFFFF",
        "radius": 10,
        "duration_ms": 600
      }
    },
    {
      "time_offset_ms": 16300,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [10, 15.5]
        ],
        "radius": 3,
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
        "x": 10,
        "y": 15.5,
        "scale": 4.0,
        "opacity": 0.5,
        "rotation_deg": 90,
        "duration_ms": 3000,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 17000,
      "type": "NARRATIVE",
      "content": "Thân hình đồ sộ của Jax gục hẳn xuống vũng máu. Bức tường thành cuối cùng đã vỡ vụn."
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "line",
        "points": [
          [15, 8],
          [13, 19]
        ],
        "radius": 0,
        "width": 0,
        "height": 0,
        "fill_color": "",
        "fill_alpha": 0,
        "line_width": 2,
        "line_color": "#FF0000",
        "line_alpha": 1.0
      },
      "gsap_tween": {
        "target_id": "raider_viper_02",
        "x": 15,
        "y": 8,
        "scale": 1.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 200,
        "ease": "linear"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_riko_02",
      "hp_change": -120,
      "is_critical": false
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [15, 8],
          [13, 19]
        ],
        "thickness": 6,
        "color": "#FFFF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 13,
        "y": 19,
        "emitter_type": "burst",
        "particle_count": 120,
        "lifetime_ms": 800,
        "start_color": "#FF0000",
        "end_color": "#8B0000",
        "start_scale": 1.5,
        "end_scale": 0.2,
        "speed": 25,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-120 SNIPED",
        "x": 13.5,
        "y": 18,
        "color": "#FFD700",
        "font_size": 30,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -4,
        "fade_duration_ms": 1200
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13.8,
        "y": 19.8,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 150,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 17800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "blur",
        "intensity": 6.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 500
      }
    },
    {
      "time_offset_ms": 18000,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Agh... Khốn kiếp...",
      "emotion": "PAIN"
    },
    {
      "time_offset_ms": 18100,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_particles": {
        "x": 13.5,
        "y": 19.5,
        "emitter_type": "stream",
        "particle_count": 50,
        "lifetime_ms": 1500,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 5,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 18500,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 14,
      "target_y": 19
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 14,
        "y": 19,
        "scale": 0.7,
        "opacity": 0.6,
        "rotation_deg": 10,
        "duration_ms": 600,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 19500,
      "type": "NARRATIVE",
      "content": "Chỉ còn lại Riko đơn độc. Tiếng cưa máy của Krieg lại bắt đầu rít lên, hướng ánh mắt điên dại về phía cô."
    },
    {
      "time_offset_ms": 19600,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 8.0,
        "color": "#FF0000",
        "radius": 20,
        "duration_ms": 2000
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 0,
        "repeat": -1,
        "yoyo": true
      }
    }
  ]
}
{
  "chunk_summary": "Krieg giẫm lên xác Jax, điên cuồng lao về phía Riko. Riko cố gắng bắn trả bằng nỏ nhưng mũi tên chỉ làm xước da gã đồ tể khát máu. Cùng lúc đó, Viper bắn thêm một phát đạn sượt qua tay Riko, làm cô mất thăng bằng. Lợi dụng khoảnh khắc đó, Krieg áp sát và bổ lưỡi cưa máy xuống. Riko dùng chút phản xạ cuối cùng để né tránh đòn chí mạng, nhưng lưỡi cưa vẫn xé rách sườn cô. Riko bị hất văng xuống cát, chỉ còn đúng một hơi tàn mỏng manh trước gã ác thú.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "char_jax_01": {
      "hp": 0,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 10,
      "x": 15,
      "y": 19
    },
    "raider_krieg_boss": {
      "hp": 480,
      "x": 14,
      "y": 19
    },
    "raider_buzz_01": {
      "hp": 0,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 20100,
      "type": "NARRATIVE",
      "content": "Krieg giẫm thô bạo lên xác Jax, ánh mắt điên dại ghim chặt vào vị trí ẩn nấp của Riko. Tiếng cưa máy gầm rú đinh tai nhức óc."
    },
    {
      "time_offset_ms": 20100,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 6.0,
        "color": "#8B0000",
        "radius": 15,
        "duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 20150,
      "type": "VFX",
      "target_id": "char_jax_01",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 10,
        "y": 14,
        "emitter_type": "burst",
        "particle_count": 50,
        "lifetime_ms": 600,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 8,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 20300,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 13,
      "target_y": 18
    },
    {
      "time_offset_ms": 20300,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 11.5,
        "y": 15.5,
        "emitter_type": "stream",
        "particle_count": 100,
        "lifetime_ms": 700,
        "start_color": "#A0522D",
        "end_color": "#000000",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 12,
        "spread_angle": 45
      }
    },
    {
      "time_offset_ms": 20300,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13,
        "y": 18,
        "scale": 1.15,
        "opacity": 1.0,
        "rotation_deg": 15,
        "duration_ms": 400,
        "ease": "power2.in"
      }
    },
    {
      "time_offset_ms": 20600,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "MÙI CON GÁI... THƠM QUÁ! HAHAHA!",
      "emotion": "PSYCHOTIC"
    },
    {
      "time_offset_ms": 20650,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13,
        "y": 18,
        "scale": 1.05,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 100,
        "ease": "rough"
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 40,
        "repeat": 10,
        "yoyo": true
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "ATTACK",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -120,
      "is_critical": false
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [13, 19],
          [13, 18]
        ],
        "thickness": 3,
        "color": "#FFFFFF",
        "distortion_amplitude": 1,
        "animation_speed": 10,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 13,
        "y": 18.2,
        "emitter_type": "burst",
        "particle_count": 80,
        "lifetime_ms": 400,
        "start_color": "#FFA500",
        "end_color": "#FF4500",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 18,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "-120 GLANCED",
        "x": 13.5,
        "y": 17.5,
        "color": "#D3D3D3",
        "font_size": 26,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -2,
        "fade_duration_ms": 800
      }
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 12.9,
        "y": 17.9,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": -5,
        "duration_ms": 80,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 21080,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13,
        "y": 18,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": 10,
        "duration_ms": 200,
        "ease": "power1.in"
      }
    },
    {
      "time_offset_ms": 21600,
      "type": "ATTACK",
      "actor_id": "raider_viper_02",
      "target_id": "char_riko_02",
      "hp_change": -50,
      "is_critical": false
    },
    {
      "time_offset_ms": 21600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [15, 8],
          [13, 19]
        ],
        "thickness": 2,
        "color": "#FFFF00",
        "distortion_amplitude": 0,
        "animation_speed": 0,
        "style": "dash_trail"
      }
    },
    {
      "time_offset_ms": 21600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_particles": {
        "x": 13,
        "y": 19,
        "emitter_type": "burst",
        "particle_count": 40,
        "lifetime_ms": 600,
        "start_color": "#FF0000",
        "end_color": "#8B0000",
        "start_scale": 1.2,
        "end_scale": 0.2,
        "speed": 10,
        "spread_angle": 135
      }
    },
    {
      "time_offset_ms": 21600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-50 GRAZE",
        "x": 13.5,
        "y": 18.5,
        "color": "#FFA500",
        "font_size": 24,
        "font_weight": "bold",
        "drop_shadow": true,
        "float_distance_y": -2,
        "fade_duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 21600,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 13.5,
        "y": 19.2,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 150,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "MOVE",
      "actor_id": "char_riko_02",
      "target_x": 15,
      "target_y": 19
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 15,
        "y": 19,
        "scale": 0.9,
        "opacity": 0.8,
        "rotation_deg": 5,
        "duration_ms": 800,
        "ease": "power1.inOut"
      }
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 14,
        "y": 19,
        "emitter_type": "stream",
        "particle_count": 50,
        "lifetime_ms": 1500,
        "start_color": "#8B0000",
        "end_color": "#4A0000",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 0,
        "spread_angle": 0
      }
    },
    {
      "time_offset_ms": 22200,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Tránh xa bà ra thằng bệnh hoạn!!!",
      "emotion": "TERRIFIED"
    },
    {
      "time_offset_ms": 22500,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 14,
      "target_y": 19
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 14,
        "y": 19,
        "scale": 1.2,
        "opacity": 1.0,
        "rotation_deg": -15,
        "duration_ms": 300,
        "ease": "power4.in"
      }
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_particles": {
        "x": 14,
        "y": 19,
        "emitter_type": "stream",
        "particle_count": 120,
        "lifetime_ms": 600,
        "start_color": "#FFA500",
        "end_color": "#FF0000",
        "start_scale": 1.0,
        "end_scale": 0.1,
        "speed": 20,
        "spread_angle": 180
      }
    },
    {
      "time_offset_ms": 23100,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13.8,
        "y": 18.5,
        "scale": 1.3,
        "opacity": 1.0,
        "rotation_deg": -30,
        "duration_ms": 100,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "ATTACK",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_riko_02",
      "hp_change": -200,
      "is_critical": false
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_mesh": {
        "path_points": [
          [13, 17],
          [14.5, 18.5],
          [16, 20]
        ],
        "thickness": 18,
        "color": "#8B0000",
        "distortion_amplitude": 12,
        "animation_speed": 5.0,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_mesh": {
        "path_points": [
          [13, 17],
          [14.5, 18.5],
          [16, 20]
        ],
        "thickness": 6,
        "color": "#FF4500",
        "distortion_amplitude": 4,
        "animation_speed": 10.0,
        "style": "lightning_arc"
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 15,
        "y": 19,
        "emitter_type": "burst",
        "particle_count": 400,
        "lifetime_ms": 1200,
        "start_color": "#FF0000",
        "end_color": "#4A0000",
        "start_scale": 3.0,
        "end_scale": 0.2,
        "speed": 35,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "-200 MUTILATED",
        "x": 15,
        "y": 18,
        "color": "#FF0000",
        "font_size": 42,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -5,
        "fade_duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 16,
        "y": 20,
        "scale": 0.7,
        "opacity": 0.8,
        "rotation_deg": 65,
        "duration_ms": 500,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 14.5,
        "y": 19.5,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": 25,
        "duration_ms": 200,
        "ease": "power4.out"
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glitch",
        "intensity": 6.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 600
      }
    },
    {
      "time_offset_ms": 23200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "shockwave",
        "intensity": 8.0,
        "color": "#FF0000",
        "radius": 40,
        "duration_ms": 800
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "NARRATIVE",
      "content": "Lưỡi cưa sượt qua sườn, hất văng Riko ngã nhào xuống cát. Máu tuôn xối xả, cô chỉ còn lại một hơi thở thoi thóp."
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [16, 20]
        ],
        "radius": 2.5,
        "width": 0,
        "height": 0,
        "fill_color": "#8B0000",
        "fill_alpha": 0.8,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 16,
        "y": 20,
        "scale": 0.7,
        "opacity": 0.5,
        "rotation_deg": 65,
        "duration_ms": 3000,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "sepia",
        "intensity": 3.0,
        "color": "#8B0000",
        "radius": 0,
        "duration_ms": 3000
      }
    },
    {
      "time_offset_ms": 24800,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "ĐỂ TA NGHE TIẾNG MÀY KHÓC NÀO!",
      "emotion": "MANIACAL"
    },
    {
      "time_offset_ms": 24850,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 14.8,
        "y": 19.8,
        "scale": 1.2,
        "opacity": 1.0,
        "rotation_deg": 5,
        "duration_ms": 800,
        "ease": "power1.inOut"
      }
    }
  ]
}
{
  "chunk_summary": "Biết mình không thể sống sót với 10 HP ít ỏi, Riko từ bỏ việc chạy trốn. Với tính cách ranh mãnh và liều lĩnh, cô nhếch mép nhổ bọt máu, đâm thẳng một mũi tên nổ thủ công vào ngực Krieg ở cự ly gần. Vụ nổ hất tung cả hai, đốt cháy bộ giáp của gã thủ lĩnh cướp. Thế nhưng, sự đau đớn chỉ làm Krieg thêm điên loạn. Gã gầm rú bươm bước từ trong ngọn lửa, vung cưa máy bổ thẳng xuống, nghiền nát lồng ngực Riko một cách tàn bạo. Riko gục chết tại chỗ. Toàn bộ phe Vanguard (Team A) đã bị tiêu diệt. Viper lạnh lùng xác nhận nhiệm vụ hoàn tất từ xa. Trận chiến kết thúc.",
  "is_game_over": true,
  "winning_team": "B",
  "updated_state": {
    "char_jax_01": {
      "hp": 0,
      "x": 10,
      "y": 14
    },
    "char_riko_02": {
      "hp": 0,
      "x": 15,
      "y": 19
    },
    "raider_krieg_boss": {
      "hp": 280,
      "x": 14,
      "y": 19
    },
    "raider_buzz_01": {
      "hp": 0,
      "x": 8,
      "y": 12
    },
    "raider_viper_02": {
      "hp": 600,
      "x": 15,
      "y": 8
    }
  },
  "timeline": [
    {
      "time_offset_ms": 25200,
      "type": "NARRATIVE",
      "content": "Bị dồn vào đường cùng và cơ thể tơi tả, Riko ngừng lùi lại. Cô cười gằn, rút từ thắt lưng ra một mũi tên nổ chưa kích hoạt."
    },
    {
      "time_offset_ms": 25200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glow",
        "intensity": 2.0,
        "color": "#FF4500",
        "radius": 10,
        "duration_ms": 600
      }
    },
    {
      "time_offset_ms": 25200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 15,
        "y": 19,
        "scale": 1.1,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 300,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 25500,
      "type": "DIALOGUE",
      "actor_id": "char_riko_02",
      "content": "Xuống địa ngục chung với bà đi, súc sinh!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 25550,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 15,
        "y": 19,
        "emitter_type": "pulse",
        "particle_count": 50,
        "lifetime_ms": 250,
        "start_color": "#FFFF00",
        "end_color": "#FF0000",
        "start_scale": 0.5,
        "end_scale": 1.5,
        "speed": 10,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 25750,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [15, 19]
        ],
        "radius": 1,
        "width": 0,
        "height": 0,
        "fill_color": "#FFFFFF",
        "fill_alpha": 1.0,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 15,
        "y": 19,
        "scale": 0.5,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 50,
        "ease": "power4.in"
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "SKILL",
      "actor_id": "char_riko_02",
      "target_id": "raider_krieg_boss",
      "hp_change": -200,
      "is_critical": true
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [14.5, 19]
        ],
        "radius": 3,
        "width": 0,
        "height": 0,
        "fill_color": "#FFFFFF",
        "fill_alpha": 1.0,
        "line_width": 5,
        "line_color": "#FFA500",
        "line_alpha": 0.8
      },
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 14.5,
        "y": 19,
        "scale": 15.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 400,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 14.5,
        "y": 19,
        "emitter_type": "burst",
        "particle_count": 800,
        "lifetime_ms": 1500,
        "start_color": "#FFFF00",
        "end_color": "#8B0000",
        "start_scale": 4.0,
        "end_scale": 0.1,
        "speed": 60,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_particles": {
        "x": 14.5,
        "y": 19,
        "emitter_type": "burst",
        "particle_count": 300,
        "lifetime_ms": 2500,
        "start_color": "#4A4A4A",
        "end_color": "#000000",
        "start_scale": 3.0,
        "end_scale": 1.5,
        "speed": 30,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "shockwave",
        "intensity": 12.0,
        "color": "#FFA500",
        "radius": 80,
        "duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_text": {
        "content": "KAMIKAZE -200",
        "x": 14,
        "y": 18,
        "color": "#FF4500",
        "font_size": 42,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -6,
        "fade_duration_ms": 2000
      }
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13,
        "y": 18,
        "scale": 0.8,
        "opacity": 1.0,
        "rotation_deg": -25,
        "duration_ms": 350,
        "ease": "bounce.out"
      }
    },
    {
      "time_offset_ms": 25850,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 16,
        "y": 20,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 35,
        "duration_ms": 300,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 25900,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 13,
        "y": 18,
        "emitter_type": "stream",
        "particle_count": 150,
        "lifetime_ms": 800,
        "start_color": "#FF4500",
        "end_color": "#1A1A1A",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 10,
        "spread_angle": 90
      },
      "timeline_sequence": {
        "delay_ms": 0,
        "stagger_ms": 100,
        "repeat": 10,
        "yoyo": false
      }
    },
    {
      "time_offset_ms": 26400,
      "type": "DIALOGUE",
      "actor_id": "raider_krieg_boss",
      "content": "AHAHAHA! NÓNG QUÁ! ĐÃ QUÁ!!!",
      "emotion": "PSYCHOTIC"
    },
    {
      "time_offset_ms": 26450,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "pixi_filters": {
        "target_id": "raider_krieg_boss",
        "filter_type": "glow",
        "intensity": 6.0,
        "color": "#FF0000",
        "radius": 15,
        "duration_ms": 1000
      }
    },
    {
      "time_offset_ms": 26450,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 13.5,
        "y": 18.5,
        "scale": 1.3,
        "opacity": 1.0,
        "rotation_deg": 5,
        "duration_ms": 350,
        "ease": "rough"
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "SKILL",
      "actor_id": "raider_krieg_boss",
      "target_id": "char_riko_02",
      "hp_change": -150,
      "is_critical": true
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_mesh": {
        "path_points": [
          [13.5, 18.5],
          [15, 19.5],
          [16, 20.5]
        ],
        "thickness": 25,
        "color": "#000000",
        "distortion_amplitude": 18,
        "animation_speed": 6.0,
        "style": "whip_curve"
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "bg"
      },
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "shockwave",
        "intensity": 8.0,
        "color": "#8B0000",
        "radius": 60,
        "duration_ms": 800
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_particles": {
        "x": 15,
        "y": 19.5,
        "emitter_type": "burst",
        "particle_count": 500,
        "lifetime_ms": 2500,
        "start_color": "#8B0000",
        "end_color": "#2A0000",
        "start_scale": 3.0,
        "end_scale": 0.2,
        "speed": 40,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_text": {
        "content": "OBLITERATED -150",
        "x": 15,
        "y": 18.5,
        "color": "#8B0000",
        "font_size": 48,
        "font_weight": "900",
        "drop_shadow": true,
        "float_distance_y": -8,
        "fade_duration_ms": 3000
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 16.5,
        "y": 20.5,
        "scale": 0.6,
        "opacity": 1.0,
        "rotation_deg": 180,
        "duration_ms": 400,
        "ease": "power3.out"
      }
    },
    {
      "time_offset_ms": 26800,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "glitch",
        "intensity": 10.0,
        "color": "#FFFFFF",
        "radius": 0,
        "duration_ms": 800
      }
    },
    {
      "time_offset_ms": 26820,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 15.5,
        "y": 20,
        "emitter_type": "fountain",
        "particle_count": 200,
        "lifetime_ms": 1500,
        "start_color": "#FF0000",
        "end_color": "#4A0000",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 25,
        "spread_angle": 120
      }
    },
    {
      "time_offset_ms": 26860,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 16,
        "y": 20.2,
        "emitter_type": "burst",
        "particle_count": 150,
        "lifetime_ms": 1200,
        "start_color": "#8B0000",
        "end_color": "#1A0000",
        "start_scale": 2.0,
        "end_scale": 0.5,
        "speed": 15,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 26900,
      "type": "VFX",
      "target_id": "char_riko_02",
      "pixi_filters": {
        "target_id": "char_riko_02",
        "filter_type": "sepia",
        "intensity": 5.0,
        "color": "#4A0000",
        "radius": 0,
        "duration_ms": 4000
      }
    },
    {
      "time_offset_ms": 27200,
      "type": "NARRATIVE",
      "content": "Lưỡi cưa rỉ sét cưa đứt lồng ngực Riko. Cô giật nảy người lên một nhịp rồi bất động vĩnh viễn trên vũng máu đen ngòm."
    },
    {
      "time_offset_ms": 27200,
      "type": "VFX",
      "target_id": "char_riko_02",
      "canvas_layer": {
        "layer": "bg"
      },
      "blend_mode": {
        "mode": "MULTIPLY"
      },
      "pixi_graphics": {
        "shape_type": "circle",
        "points": [
          [16.5, 20.5]
        ],
        "radius": 4,
        "width": 0,
        "height": 0,
        "fill_color": "#4A0000",
        "fill_alpha": 0.9,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "char_riko_02",
        "x": 16.5,
        "y": 20.5,
        "scale": 0.8,
        "opacity": 0.3,
        "rotation_deg": 180,
        "duration_ms": 3000,
        "ease": "power2.out"
      }
    },
    {
      "time_offset_ms": 28000,
      "type": "MOVE",
      "actor_id": "raider_krieg_boss",
      "target_x": 14,
      "target_y": 19
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "gsap_tween": {
        "target_id": "raider_krieg_boss",
        "x": 14,
        "y": 19,
        "scale": 1.0,
        "opacity": 1.0,
        "rotation_deg": 0,
        "duration_ms": 500,
        "ease": "power2.inOut"
      }
    },
    {
      "time_offset_ms": 28500,
      "type": "DIALOGUE",
      "actor_id": "raider_viper_02",
      "content": "Mục tiêu đã bị dọn sạch. Nhặt xác bọn chúng đi.",
      "emotion": "COLD"
    },
    {
      "time_offset_ms": 28500,
      "type": "VFX",
      "target_id": "raider_viper_02",
      "blend_mode": {
        "mode": "ADD"
      },
      "pixi_particles": {
        "x": 15,
        "y": 8,
        "emitter_type": "burst",
        "particle_count": 10,
        "lifetime_ms": 500,
        "start_color": "#FFFFFF",
        "end_color": "#00FFFF",
        "start_scale": 1.5,
        "end_scale": 0.1,
        "speed": 5,
        "spread_angle": 360
      }
    },
    {
      "time_offset_ms": 29000,
      "type": "NARRATIVE",
      "content": "Tiếng cưa máy tắt dần. Chỉ còn lại tiếng gió bão cát rít gào lạnh lẽo qua trạm xăng nhuốm máu."
    },
    {
      "time_offset_ms": 29000,
      "type": "VFX",
      "target_id": "raider_krieg_boss",
      "canvas_layer": {
        "layer": "fg"
      },
      "pixi_particles": {
        "x": 20,
        "y": 10,
        "emitter_type": "stream",
        "particle_count": 600,
        "lifetime_ms": 5000,
        "start_color": "#D2B48C",
        "end_color": "#8B4513",
        "start_scale": 0.5,
        "end_scale": 3.0,
        "speed": -40,
        "spread_angle": 10
      }
    },
    {
      "time_offset_ms": 29200,
      "type": "VFX",
      "target_id": "GLOBAL",
      "canvas_layer": {
        "layer": "fg"
      },
      "blend_mode": {
        "mode": "NORMAL"
      },
      "pixi_graphics": {
        "shape_type": "rect",
        "points": [
          [0, 0],
          [20, 0],
          [20, 20],
          [0, 20]
        ],
        "radius": 0,
        "width": 20,
        "height": 20,
        "fill_color": "#000000",
        "fill_alpha": 1.0,
        "line_width": 0,
        "line_color": "",
        "line_alpha": 0
      },
      "gsap_tween": {
        "target_id": "GLOBAL",
        "x": 0,
        "y": 0,
        "scale": 1.0,
        "opacity": 0.0,
        "rotation_deg": 0,
        "duration_ms": 3000,
        "ease": "power2.in"
      }
    }
  ]
}



`;
// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING || RAW_DATA_STRING.trim() === '' || RAW_DATA_STRING.includes('DÁN NỘI DUNG')) {
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

    // 2. Ép dữ liệu chuẩn xác cho kịch bản "Sa mạc hậu tận thế"
    useMainStore.setState({
      // Môi trường Sa mạc bão cát
      mapPreviewUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1000&auto=format&fit=crop', 
      mapDescription: 'Trạm Xăng Bỏ Hoang Trên Sa Mạc Chết: Bão cát mù mịt, xác xe rỉ sét và dầu loang nguy hiểm.',
      
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
          personality: "Trầm lỳ, kiên nhẫn. Một cựu binh sẵn sàng lấy thân mình làm lá chắn.",
          basicAttackDesc: "Nện búa tạ",
          skillDesc: "Cú Nện Phá Đất",
          stats: { hp: 1500, maxHp: 1500, agility: 30, damage: 220, range: 1 },
          shapeId: "shape-jax",
          position: { x: 10, y: 14 }
        },
        {
          id: "char_riko_02",
          team: 'A',
          name: "Riko 'Cáo Cát'",
          personality: "Nhanh nhẹn, ranh mãnh. Luôn tìm góc khuất để bắn lén.",
          basicAttackDesc: "Bắn nỏ tự chế",
          skillDesc: "Mũi Tên Nổ",
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
          personality: "Tâm thần, tàn bạo. Thích nghe tiếng la hét của nạn nhân.",
          basicAttackDesc: "Cưa máy rỉ sét",
          skillDesc: "Vũ Điệu Đồ Tể",
          stats: { hp: 1800, maxHp: 1800, agility: 50, damage: 280, range: 1 },
          shapeId: "shape-krieg",
          position: { x: 10, y: 5 }
        },
        {
          id: "raider_buzz_01",
          team: 'B',
          name: "Buzz",
          personality: "Kẻ nghiện chất kích thích, cực kỳ kích động.",
          basicAttackDesc: "Vuốt sắt",
          skillDesc: "Cú Vồ Khát Máu",
          stats: { hp: 850, maxHp: 850, agility: 80, damage: 130, range: 1 },
          shapeId: "shape-buzz",
          position: { x: 8, y: 7 }
        },
        {
          id: "raider_viper_02",
          team: 'B',
          name: "Viper",
          personality: "Kẻ bắn tỉa máu lạnh. Tàn nhẫn và tính toán.",
          basicAttackDesc: "Bắn tỉa súng trường",
          skillDesc: "Phát Đạn Xuyên Giáp",
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
      🚀 TEST BẢN ĐỒ SA MẠC
    </button>
  );
}