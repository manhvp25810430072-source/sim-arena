import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN NỘI DUNG FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
const RAW_DATA_STRING = `
{
  "chunk_summary": "Trận chiến bắt đầu dưới bầu trời hố đen tĩnh lặng nhưng đầy áp lực. Rồng tà ác Kaldor mỉa mai những kẻ phàm trần trước khi tung một cú vung vuốt xé rách không gian, chém thẳng vào Atlas khi anh vừa lao lên tuyến đầu. Bất chấp mệnh lệnh giữ khoảng cách, Nova lập tức khai hỏa tia laser phán xét bốc hơi một phần cơ thể của quái vật Void Spawn bên phải, trong khi Atlas nện búa trọng lực nghiền nát con bên trái ngay khi nó vừa há miệng cắn vào giáp anh.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 2110,
      "x": 9,
      "y": 10
    },
    "aero_sniper_nova": {
      "hp": 1100,
      "x": 9,
      "y": 18
    },
    "void_dragon_kaldor": {
      "hp": 8500,
      "x": 9,
      "y": 4
    },
    "void_spawn_left": {
      "hp": 220,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 315,
      "x": 11,
      "y": 9
    }
  },
  "timeline": [
    {
      "time_offset_ms": 0,
      "type": "NARRATIVE",
      "content": "Trọng lực trong khu di tích đảo lộn. Tinh thể quặng nhấp nháy ánh tím, báo hiệu sự thức tỉnh của một thảm họa cổ đại."
    },
    {
      "time_offset_ms": 100,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 5000,
      "css_override": {
        "filter": "contrast(1.1) saturate(0.8) hue-rotate(15deg) brightness(0.85)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(20, 0, 40, 0.4)",
          "startOpacity": 0,
          "endOpacity": 0.6
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 25,
          "endRadius": 0.5,
          "color": "rgba(100, 0, 150, 0.15)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 10,
          "y": 15,
          "speed": 1.2,
          "color": "#800080",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.02,
          "gravity": -0.4,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 550,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 2000,
      "css_override": {
        "filter": "drop-shadow(0 0 25px #4b0082) brightness(1.2) contrast(1.3)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) translateY(0)" },
          { "transform": "scale(1.05) translateY(-5px)" },
          { "transform": "scale(1) translateY(0)" }
        ],
        "options": { "duration": 1000, "iterations": 2, "easing": "ease-in-out" }
      }
    },
    {
      "time_offset_ms": 600,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Côn trùng phàm trần... Lại đến dâng xác cho Hố Đen sao?",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 1000,
      "type": "MOVE",
      "actor_id": "mecha_vanguard_atlas",
      "target_x": 9,
      "target_y": 10
    },
    {
      "time_offset_ms": 1050,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 800,
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(-30px) scale(1.1)", "easing": "cubic-bezier(0.8, 0, 1, 1)" },
          { "transform": "translateY(5px) scale(0.9)", "easing": "ease-out" },
          { "transform": "translateY(0) scale(1)" }
        ],
        "options": { "duration": 400, "iterations": 1 }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 9,
          "endY": 10,
          "color": "rgba(255, 165, 0, 0.8)",
          "width": 6,
          "glow": true,
          "shadowBlur": 15,
          "shadowColor": "orange",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 40,
          "x": 9,
          "y": 10,
          "speed": 3,
          "color": "#cccccc",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 1.5,
          "shape": "circle",
          "glow": false
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 3,
          "color": "rgba(200, 200, 200, 0.5)",
          "fill": false,
          "lineWidth": 3,
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 1300,
      "type": "MOVE",
      "actor_id": "void_spawn_left",
      "target_x": 8,
      "target_y": 9
    },
    {
      "time_offset_ms": 1350,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 600,
      "css_override": {
        "filter": "blur(1px) drop-shadow(0 0 10px #000000)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 6,
          "startY": 6,
          "endX": 8,
          "endY": 9,
          "color": "rgba(0, 0, 0, 0.8)",
          "width": 8,
          "glow": false,
          "startOpacity": 0.8,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 1400,
      "type": "MOVE",
      "actor_id": "void_spawn_right",
      "target_x": 11,
      "target_y": 9
    },
    {
      "time_offset_ms": 1450,
      "type": "VFX",
      "target_id": "void_spawn_right",
      "duration_ms": 600,
      "css_override": {
        "filter": "blur(1px) drop-shadow(0 0 10px #000000)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 13,
          "startY": 6,
          "endX": 11,
          "endY": 9,
          "color": "rgba(0, 0, 0, 0.8)",
          "width": 8,
          "glow": false,
          "startOpacity": 0.8,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 1800,
      "type": "DIALOGUE",
      "actor_id": "mecha_vanguard_atlas",
      "content": "Nova, giữ vị trí! Cứ để gã khổng lồ này cho anh.",
      "emotion": "RESOLUTE"
    },
    {
      "time_offset_ms": 2150,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 500,
      "css_override": {
        "filter": "brightness(2) contrast(1.5) drop-shadow(0 0 40px #ff00ff)",
        "transform": "scale(1.1)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 0,
          "endRadius": 4,
          "color": "rgba(255, 0, 255, 0.5)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "#ff00ff",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 2200,
      "type": "SKILL",
      "actor_id": "void_dragon_kaldor",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -315,
      "is_critical": false
    },
    {
      "time_offset_ms": 2200,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 800,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(20px, 15px) scale(1.02) rotate(1deg)", "easing": "ease-out" },
          { "transform": "translate(-20px, -15px) scale(0.98) rotate(-1deg)" },
          { "transform": "translate(15px, -10px) scale(1.01) rotate(0.5deg)" },
          { "transform": "translate(-10px, 10px) scale(0.99) rotate(-0.5deg)" },
          { "transform": "translate(0, 0) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 400, "iterations": 1, "fill": "forwards" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 8.5,
          "startY": 4.5,
          "endX": 7.5,
          "endY": 11.5,
          "controlX": 6,
          "controlY": 8,
          "color": "#ff00ff",
          "width": 8,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "#8a2be2",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9.5,
          "startY": 4,
          "endX": 9.5,
          "endY": 12,
          "controlX": 11,
          "controlY": 8,
          "color": "#ffffff",
          "width": 14,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "#ff00ff",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 10.5,
          "startY": 4.5,
          "endX": 11.5,
          "endY": 11.5,
          "controlX": 13,
          "controlY": 8,
          "color": "#ff00ff",
          "width": 8,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "#8a2be2",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 7,
          "color": "rgba(255, 0, 255, 0.9)",
          "fill": false,
          "lineWidth": 12,
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 2200,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(2.5) contrast(1.5) sepia(80%) hue-rotate(250deg) saturate(300%) blur(1px) drop-shadow(0 0 20px #ff00ff)",
        "mix-blend-mode": "hard-light"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0,0) scale(1)", "offset": 0 },
          { "transform": "translate(-30px, -5px) rotate(-15deg) skew(-20deg)", "offset": 0.05 },
          { "transform": "translate(20px, 10px) rotate(10deg) skew(15deg)", "offset": 0.15 },
          { "transform": "translate(-10px, -5px) rotate(-5deg)", "offset": 0.3 },
          { "transform": "translate(0, 0) scale(1)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "SPAWN_PARTICLES",
          "count": 50,
          "x": 9,
          "y": 10,
          "speed": 6,
          "color": "#ff00ff",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2.5,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 30,
          "x": 9,
          "y": 10,
          "speed": 4,
          "color": "#ffff00",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.08,
          "gravity": 1.0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 2800,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "Đừng có ra lệnh cho em, đồ sắt gỉ!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 3100,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 400,
      "css_override": {
        "filter": "brightness(2) drop-shadow(0 0 15px #00ffff)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 18,
          "startRadius": 4,
          "endRadius": 0.5,
          "color": "rgba(0, 255, 255, 0.8)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "cyan",
          "startOpacity": 0,
          "endOpacity": 1
        }
      ]
    },
    {
      "time_offset_ms": 3200,
      "type": "ATTACK",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_spawn_right",
      "hp_change": -285,
      "is_critical": true
    },
    {
      "time_offset_ms": 3200,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1200,
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 11,
          "endY": 9,
          "color": "#ffffff",
          "width": 20,
          "glow": true,
          "shadowBlur": 60,
          "shadowColor": "#00ffff",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 11,
          "endY": 9,
          "color": "#e0ffff",
          "width": 6,
          "glow": true,
          "shadowBlur": 25,
          "shadowColor": "#ffffff",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 11,
          "centerY": 9,
          "startRadius": 1,
          "endRadius": 8,
          "color": "rgba(0, 255, 255, 0.7)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 11,
          "centerY": 9,
          "startRadius": 2,
          "endRadius": 12,
          "color": "rgba(0, 255, 255, 1)",
          "fill": false,
          "lineWidth": 5,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 11,
          "y": 9,
          "speed": 7,
          "color": "#00ffff",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.15,
          "gravity": 2.5,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 3200,
      "type": "VFX",
      "target_id": "void_spawn_right",
      "duration_ms": 1500,
      "css_override": {
        "filter": "brightness(4) contrast(2) sepia(100%) hue-rotate(150deg) blur(2px) drop-shadow(0 0 30px #00ffff)",
        "mix-blend-mode": "color-dodge"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) skew(0deg)", "offset": 0 },
          { "transform": "scale(1.6, 0.4) translate(25px, -25px) skew(35deg)", "offset": 0.05 },
          { "transform": "scale(0.8, 1.2) translate(-15px, 15px) skew(-20deg)", "offset": 0.2 },
          { "transform": "scale(1) translate(0, 0) skew(0deg)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "fill": "forwards", "easing": "ease-out" }
      }
    },
    {
      "time_offset_ms": 3700,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 300,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0)" },
          { "transform": "translate(-10px, 10px)" },
          { "transform": "translate(0, 0)" }
        ],
        "options": { "duration": 200, "iterations": 1, "easing": "ease-in" }
      }
    },
    {
      "time_offset_ms": 3800,
      "type": "ATTACK",
      "actor_id": "void_spawn_left",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -75,
      "is_critical": false
    },
    {
      "time_offset_ms": 3800,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 400,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(20px, -20px) scale(1.2)" },
          { "transform": "translate(0, 0) scale(1)" }
        ],
        "options": { "duration": 150, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      }
    },
    {
      "time_offset_ms": 3800,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 500,
      "css_override": {
        "filter": "brightness(1.5)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(5px, -5px) rotate(2deg)" },
          { "transform": "translate(-5px, 5px) rotate(-2deg)" },
          { "transform": "translate(0, 0) rotate(0deg)" }
        ],
        "options": { "duration": 100, "iterations": 3 }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 2,
          "color": "rgba(255, 0, 0, 0.8)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 20,
          "x": 9,
          "y": 10,
          "speed": 3,
          "color": "#ffff00",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 1.5,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 4050,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 300,
      "css_override": {
        "filter": "drop-shadow(0 0 15px #ff4500) brightness(1.3)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1)" },
          { "transform": "translateY(-15px) scale(1.05) rotate(-5deg)" }
        ],
        "options": { "duration": 150, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
      }
    },
    {
      "time_offset_ms": 4200,
      "type": "ATTACK",
      "actor_id": "mecha_vanguard_atlas",
      "target_id": "void_spawn_left",
      "hp_change": -380,
      "is_critical": true
    },
    {
      "time_offset_ms": 4200,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 2000,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 40px) scale(1.05)", "easing": "ease-out" },
          { "transform": "translate(0px, -20px) scale(0.98)" },
          { "transform": "translate(0px, 10px) scale(1.02)" },
          { "transform": "translate(0px, 0px) scale(1)" }
        ],
        "options": { "duration": 600, "iterations": 1 }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 9,
          "startRadius": 15,
          "endRadius": 0.1,
          "color": "rgba(0, 0, 0, 0.9)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 9,
          "startRadius": 0,
          "endRadius": 15,
          "color": "rgba(255, 69, 0, 1)",
          "fill": false,
          "lineWidth": 10,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "#ff4500",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 9,
          "endX": 4,
          "endY": 5,
          "color": "#ff8c00",
          "width": 6,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 9,
          "endX": 12,
          "endY": 5,
          "color": "#ff8c00",
          "width": 6,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 9,
          "endX": 4,
          "endY": 13,
          "color": "#ff8c00",
          "width": 6,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 9,
          "endX": 12,
          "endY": 13,
          "color": "#ff8c00",
          "width": 6,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 120,
          "x": 8,
          "y": 9,
          "speed": 9,
          "color": "#8b0000",
          "size": 7,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.08,
          "gravity": 4,
          "shape": "circle",
          "glow": false
        }
      ]
    },
    {
      "time_offset_ms": 4200,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 2500,
      "css_override": {
        "filter": "brightness(0.3) contrast(2) drop-shadow(0 0 25px #ff0000)",
        "opacity": "0.6"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1, 1) translateY(0)" },
          { "transform": "scale(2.5, 0.05) translateY(50px)" },
          { "transform": "scale(2.2, 0.1) translateY(48px)" }
        ],
        "options": { "duration": 300, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      }
    },
    {
      "time_offset_ms": 4200,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 500,
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(-15px) scale(1.05) rotate(-5deg)" },
          { "transform": "translateY(15px) scale(1) rotate(5deg)" },
          { "transform": "translateY(0) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      }
    }
  ]
}
{
  "chunk_summary": "Trận chiến leo thang đến mức chóng mặt. Nhận thấy sắp bị tiêu diệt, Void Spawn bên trái điên cuồng kích hoạt tự hủy, tạo ra một hố đen thu nhỏ. Kịp thời phản xạ, Atlas bung Khiên Tiên Phong Lục Giác cản lại vụ nổ, bảo vệ tuyến sau. Thừa cơ hội, Nova bay vút lên không trung xả Mưa Đạn Plasma tiêu diệt gọn con Spawn còn lại và rỉa máu Kaldor. Tuy nhiên, rồng tà ác không hề nao núng, nó tung Hơi Thở Phân Rã đập thẳng vào tấm khiên của Atlas, khiến giáp trụ của anh bắt đầu rạn nứt.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 1410,
      "x": 9,
      "y": 10
    },
    "aero_sniper_nova": {
      "hp": 1100,
      "x": 9,
      "y": 18
    },
    "void_dragon_kaldor": {
      "hp": 8100,
      "x": 9,
      "y": 4
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 5100,
      "type": "NARRATIVE",
      "content": "Khối thịt bên trái co giật liên hồi. Cơ thể nó phình to, lõm vào trong và tỏa ra một trọng trường đen kịt đầy tuyệt vọng!"
    },
    {
      "time_offset_ms": 5100,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 500,
      "css_override": {
        "filter": "contrast(1.2) brightness(0.7) sepia(30%) hue-rotate(250deg)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(20, 0, 30, 0.4)",
          "startOpacity": 0,
          "endOpacity": 0.5
        }
      ]
    },
    {
      "time_offset_ms": 5100,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 500,
      "css_override": {
        "filter": "brightness(0.5) contrast(3) drop-shadow(0 0 20px #000000)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) skew(0deg)", "filter": "invert(0%)" },
          { "transform": "scale(1.2) skew(15deg)", "filter": "invert(20%)" },
          { "transform": "scale(0.8) skew(-15deg)", "filter": "invert(50%)" },
          { "transform": "scale(1.3) skew(20deg)", "filter": "invert(80%)" },
          { "transform": "scale(0.5) skew(0deg)", "filter": "invert(100%)" }
        ],
        "options": { "duration": 500, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 9,
          "startRadius": 10,
          "endRadius": 0.5,
          "color": "rgba(75, 0, 130, 0.8)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 60,
          "x": 8,
          "y": 9,
          "speed": -5,
          "color": "#8a2be2",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 5300,
      "type": "SKILL",
      "actor_id": "mecha_vanguard_atlas",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": 0,
      "is_critical": false
    },
    {
      "time_offset_ms": 5300,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 1500,
      "css_override": {
        "filter": "drop-shadow(0 0 30px #ffd700) brightness(1.5)",
        "box-shadow": "0 0 40px 15px rgba(255, 215, 0, 0.6)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1)" },
          { "transform": "translateY(-5px) scale(1.05)" },
          { "transform": "translateY(0) scale(1)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_POLYGON",
          "points": [
            {"startX": 9, "startY": 10, "endX": 9, "endY": 8.2},
            {"startX": 9, "startY": 10, "endX": 10.6, "endY": 9.1},
            {"startX": 9, "startY": 10, "endX": 10.6, "endY": 10.9},
            {"startX": 9, "startY": 10, "endX": 9, "endY": 11.8},
            {"startX": 9, "startY": 10, "endX": 7.4, "endY": 10.9},
            {"startX": 9, "startY": 10, "endX": 7.4, "endY": 9.1}
          ],
          "closePath": true,
          "fill": "rgba(255, 215, 0, 0.25)",
          "stroke": "rgba(255, 215, 0, 1)",
          "lineWidth": 4,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "#ffdf00",
          "startOpacity": 1,
          "endOpacity": 0.8
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 4,
          "color": "rgba(255, 255, 255, 0.8)",
          "fill": false,
          "lineWidth": 8,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 5600,
      "type": "SKILL",
      "actor_id": "void_spawn_left",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -200,
      "is_critical": true
    },
    {
      "time_offset_ms": 5600,
      "type": "SKILL",
      "actor_id": "void_spawn_left",
      "target_id": "void_spawn_left",
      "hp_change": -220,
      "is_critical": false
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "void_spawn_left",
      "duration_ms": 1000,
      "css_override": {
        "opacity": "0"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(0.5) rotate(0deg)", "filter": "brightness(10) contrast(5)" },
          { "transform": "scale(0) rotate(1080deg)", "filter": "brightness(0)" }
        ],
        "options": { "duration": 100, "iterations": 1, "fill": "forwards" }
      }
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1500,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(25px, -15px) rotate(2deg) scale(1.05)", "filter": "invert(10%)" },
          { "transform": "translate(-20px, 15px) rotate(-2deg) scale(0.98)", "filter": "invert(0%)" },
          { "transform": "translate(15px, 10px) rotate(1deg)" },
          { "transform": "translate(-10px, -5px)" },
          { "transform": "translate(0, 0) rotate(0deg) scale(1)" }
        ],
        "options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 9,
          "startRadius": 0.1,
          "endRadius": 12,
          "color": "rgba(0, 0, 0, 0.95)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 9,
          "startRadius": 1,
          "endRadius": 15,
          "color": "rgba(138, 43, 226, 1)",
          "fill": false,
          "lineWidth": 15,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 8,
          "y": 9,
          "speed": 12,
          "color": "#4b0082",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.15,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 5600,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 600,
      "css_override": {
        "filter": "brightness(2) saturate(50%) hue-rotate(300deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(15px) scale(0.95) skewX(-10deg)" },
          { "transform": "translateX(-10px) scale(1.02) skewX(5deg)" },
          { "transform": "translateX(8px) skewX(-5deg)" },
          { "transform": "translateX(-5px)" },
          { "transform": "translateX(0) scale(1) skewX(0deg)" }
        ],
        "options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 9,
          "endX": 9,
          "endY": 10,
          "color": "rgba(255, 255, 255, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "#ff00ff",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 40,
          "x": 9,
          "y": 10,
          "speed": 8,
          "color": "#ffd700",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 6000,
      "type": "DIALOGUE",
      "actor_id": "mecha_vanguard_atlas",
      "content": "Lá chắn trụ vững! Dọn dẹp lũ tép riu đi Nova!",
      "emotion": "RESOLUTE"
    },
    {
      "time_offset_ms": 6500,
      "type": "MOVE",
      "actor_id": "void_spawn_right",
      "target_x": 10,
      "target_y": 14
    },
    {
      "time_offset_ms": 6500,
      "type": "VFX",
      "target_id": "void_spawn_right",
      "duration_ms": 500,
      "css_override": {
        "filter": "blur(2px) drop-shadow(0 0 10px purple)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 11,
          "startY": 9,
          "endX": 10,
          "endY": 14,
          "color": "rgba(75, 0, 130, 0.6)",
          "width": 8,
          "glow": true,
          "shadowBlur": 15,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 6700,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(2) drop-shadow(0 0 25px cyan)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1)" },
          { "transform": "translateY(-20px) scale(1.15)" },
          { "transform": "translateY(-18px) scale(1.1)" }
        ],
        "options": { "duration": 300, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 18,
          "startRadius": 5,
          "endRadius": 0.5,
          "color": "rgba(0, 255, 255, 0.5)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        }
      ]
    },
    {
      "time_offset_ms": 7000,
      "type": "SKILL",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_spawn_right",
      "hp_change": -350,
      "is_critical": true
    },
    {
      "time_offset_ms": 7000,
      "type": "VFX",
      "target_id": "void_spawn_right",
      "duration_ms": 800,
      "css_override": {
        "opacity": "0",
        "filter": "brightness(4) sepia(100%) hue-rotate(180deg) blur(2px)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) translateY(0)" },
          { "transform": "scale(1.8, 0.2) translateY(20px)", "filter": "brightness(10)" },
          { "transform": "scale(0) translateY(40px)", "opacity": "0" }
        ],
        "options": { "duration": 300, "iterations": 1, "fill": "forwards" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 10,
          "endY": 14,
          "color": "#ffffff",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9,
          "startY": 18,
          "endX": 10,
          "endY": 14,
          "controlX": 12,
          "controlY": 16,
          "color": "#00ffff",
          "width": 6,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "blue",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9,
          "startY": 18,
          "endX": 10,
          "endY": 14,
          "controlX": 7,
          "controlY": 16,
          "color": "#00ffff",
          "width": 6,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "blue",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 10,
          "centerY": 14,
          "startRadius": 1,
          "endRadius": 8,
          "color": "rgba(0, 255, 255, 0.8)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 10,
          "y": 14,
          "speed": 8,
          "color": "#00ffff",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 3,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 7150,
      "type": "ATTACK",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_dragon_kaldor",
      "hp_change": -400,
      "is_critical": false
    },
    {
      "time_offset_ms": 7150,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 800,
      "css_override": {
        "filter": "brightness(2) contrast(1.5) hue-rotate(-20deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) skew(0deg)" },
          { "transform": "translateY(-15px) skewX(15deg)" },
          { "transform": "translateY(5px) skewX(-10deg)" },
          { "transform": "translateY(0) skew(0deg)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 9,
          "endY": 4,
          "color": "#ffffff",
          "width": 16,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 18,
          "endX": 9,
          "endY": 4,
          "color": "#e0ffff",
          "width": 6,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 2,
          "endRadius": 10,
          "color": "rgba(0, 255, 255, 0.7)",
          "fill": false,
          "lineWidth": 5,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 100,
          "x": 9,
          "y": 4,
          "speed": 6,
          "color": "#00bfff",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 1.5,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 7500,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 500,
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(-18px) scale(1.1)" },
          { "transform": "translateY(0) scale(1)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-in" }
      }
    },
    {
      "time_offset_ms": 8200,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Chút ánh sáng le lói... Sẽ bị bóng tối nuốt chửng!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 8600,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(1.5) drop-shadow(0 0 30px #4b0082) contrast(1.5)",
        "transform": "scale(1.1)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 15,
          "endRadius": 1,
          "color": "rgba(75, 0, 130, 0.3)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 9,
          "y": 4,
          "speed": -6,
          "color": "#800080",
          "size": 3,
          "sizeDecay": false,
          "decayMin": 0,
          "decayMax": 0,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 9000,
      "type": "SKILL",
      "actor_id": "void_dragon_kaldor",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -500,
      "is_critical": true
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1000,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 30px) rotate(1deg)", "easing": "ease-out" },
          { "transform": "translate(-15px, -20px) rotate(-1deg)" },
          { "transform": "translate(10px, 15px) rotate(0.5deg)" },
          { "transform": "translate(-5px, -10px)" },
          { "transform": "translate(0, 0) rotate(0deg)" }
        ],
        "options": { "duration": 600, "iterations": 1 }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(40, 0, 60, 0.6)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 9000,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 1200,
      "css_override": {
        "filter": "brightness(0.5) sepia(100%) hue-rotate(250deg) saturate(300%) drop-shadow(0 0 20px purple)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1) skewX(0deg)", "offset": 0 },
          { "transform": "translateY(25px) scale(1.1, 0.8) skewX(15deg)", "offset": 0.1 },
          { "transform": "translateY(15px) scale(0.95, 1.05) skewX(-10deg)", "offset": 0.3 },
          { "transform": "translateY(20px) scale(1)", "offset": 0.5 },
          { "transform": "translateY(0) scale(1) skewX(0deg)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4.5,
          "endX": 9,
          "endY": 9.5,
          "color": "rgba(40, 0, 80, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 60,
          "shadowColor": "black",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4.5,
          "endX": 9,
          "endY": 9.5,
          "color": "rgba(138, 43, 226, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4.5,
          "endX": 9,
          "endY": 9.5,
          "color": "rgba(255, 255, 255, 1)",
          "width": 4,
          "glow": true,
          "shadowBlur": 15,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 2,
          "endRadius": 10,
          "color": "rgba(138, 43, 226, 0.8)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 200,
          "x": 9,
          "y": 10,
          "speed": 10,
          "color": "#800080",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.2,
          "gravity": -1,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 10,
          "endX": 6,
          "endY": 7,
          "color": "rgba(255, 215, 0, 1)",
          "width": 4,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "gold",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 10,
          "endX": 12,
          "endY": 8,
          "color": "rgba(255, 215, 0, 1)",
          "width": 4,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "gold",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 10,
          "endX": 8,
          "endY": 13,
          "color": "rgba(255, 215, 0, 1)",
          "width": 4,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "gold",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 9500,
      "type": "NARRATIVE",
      "content": "Bão tia Gamma đen đặc giáng xuống. Lá chắn lục giác của Atlas phát ra những tiếng nứt vỡ kinh hoàng chói tai."
    },
    {
      "time_offset_ms": 9500,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 2000,
      "css_override": {
        "filter": "drop-shadow(0 0 10px #4b0082)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9,
          "startY": 8.5,
          "endX": 8.5,
          "endY": 11,
          "controlX": 8.2,
          "controlY": 9.5,
          "color": "#ffd700",
          "width": 2,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0.2
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9,
          "startY": 8.5,
          "endX": 10,
          "endY": 10.5,
          "controlX": 10.5,
          "controlY": 9,
          "color": "#ffd700",
          "width": 2,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0.2
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 30,
          "x": 9,
          "y": 10,
          "speed": 2,
          "color": "#4b0082",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.05,
          "gravity": -0.5,
          "shape": "circle",
          "glow": false
        }
      ]
    }
  ]
}
{
  "chunk_summary": "Dù giáp trụ nứt vỡ sau đòn tấn công hủy diệt, Atlas không hề lùi bước. Anh lao thẳng qua tàn dư của Hố Đen, tiếp cận Kaldor và vung búa trọng lực giáng một đòn chí mạng khiến con rồng choáng váng. Thấy Atlas chịu sát thương nặng, Nova hoảng hốt dâng cao đội hình, liên tục xả laser yểm trợ. Kaldor, dù bị thương bởi búa trọng lực, vẫn lạnh lùng vung vuốt xé toạc một mảng giáp ngực của Atlas, máu hòa cùng dầu máy rỉ ra không trung.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 1080,
      "x": 9,
      "y": 5
    },
    "aero_sniper_nova": {
      "hp": 1100,
      "x": 8,
      "y": 14
    },
    "void_dragon_kaldor": {
      "hp": 7420,
      "x": 9,
      "y": 4
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 10200,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "Atlas!! Tránh ra khỏi đó ngay!",
      "emotion": "PANIC"
    },
    {
      "time_offset_ms": 10500,
      "type": "MOVE",
      "actor_id": "mecha_vanguard_atlas",
      "target_x": 9,
      "target_y": 5
    },
    {
      "time_offset_ms": 10500,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 400,
      "css_override": {
        "filter": "drop-shadow(0 0 15px #ffa500) brightness(1.5)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 10,
          "endX": 9,
          "endY": 5,
          "color": "rgba(255, 140, 0, 0.6)",
          "width": 10,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "orange",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 10600,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 400,
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) skewX(0) translateY(0)" },
          { "transform": "scale(1.1) skewX(-15deg) translateY(-20px)" },
          { "transform": "scale(1.05) skewX(5deg) translateY(5px)" },
          { "transform": "scale(1) skewX(0) translateY(0)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      }
    },
    {
      "time_offset_ms": 11000,
      "type": "ATTACK",
      "actor_id": "mecha_vanguard_atlas",
      "target_id": "void_dragon_kaldor",
      "hp_change": -430,
      "is_critical": true
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 800,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 0px) scale(1)", "offset": 0 },
          { "transform": "translate(-30px, -20px) scale(1.05) rotate(-2deg)", "offset": 0.05 },
          { "transform": "translate(25px, 20px) scale(0.95) rotate(2deg)", "offset": 0.15 },
          { "transform": "translate(-15px, -10px) scale(1.02) rotate(-1deg)", "offset": 0.3 },
          { "transform": "translate(0px, 0px) scale(1) rotate(0deg)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(255, 255, 255, 0.9)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 11000,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1200,
      "css_override": {
        "filter": "brightness(3) contrast(2) sepia(50%) hue-rotate(20deg) saturate(300%) drop-shadow(0 0 40px #ff4500)",
        "mix-blend-mode": "hard-light"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1) rotate(0deg)", "offset": 0 },
          { "transform": "translateY(-40px) scale(1.2, 0.8) rotate(-15deg)", "offset": 0.05 },
          { "transform": "translateY(15px) scale(0.9, 1.1) rotate(5deg)", "offset": 0.2 },
          { "transform": "translateY(-5px) scale(1.05, 0.95) rotate(-2deg)", "offset": 0.5 },
          { "transform": "translateY(0) scale(1) rotate(0deg)", "offset": 1 }
        ],
        "options": { "duration": 1000, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 11,
          "startY": 8,
          "endX": 8,
          "endY": 3,
          "controlX": 11,
          "controlY": 4,
          "color": "rgba(255, 215, 0, 1)",
          "width": 30,
          "glow": true,
          "shadowBlur": 80,
          "shadowColor": "orange",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 0,
          "endRadius": 7,
          "color": "rgba(255, 69, 0, 0.9)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 3,
          "endRadius": 18,
          "color": "rgba(255, 215, 0, 1)",
          "fill": false,
          "lineWidth": 10,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 120,
          "x": 9,
          "y": 4,
          "speed": 15,
          "color": "#ffd700",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.2,
          "gravity": 4,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4,
          "endX": 3,
          "endY": -2,
          "color": "rgba(255, 255, 255, 1)",
          "width": 6,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4,
          "endX": 15,
          "endY": -2,
          "color": "rgba(255, 255, 255, 1)",
          "width": 6,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 11500,
      "type": "MOVE",
      "actor_id": "aero_sniper_nova",
      "target_x": 8,
      "target_y": 14
    },
    {
      "time_offset_ms": 11500,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 500,
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 18,
          "endX": 8,
          "endY": 14,
          "color": "rgba(0, 255, 255, 0.6)",
          "width": 6,
          "glow": true,
          "shadowBlur": 15,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 11800,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Ngu xuẩn! Lớp vỏ bọc của ngươi đã đến giới hạn.",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 11800,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 800,
      "css_override": {
        "filter": "drop-shadow(0 0 40px #4b0082) brightness(1.2) contrast(1.2)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 4,
          "endRadius": 8,
          "color": "rgba(75, 0, 130, 0.5)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 0.8
        }
      ]
    },
    {
      "time_offset_ms": 12400,
      "type": "ATTACK",
      "actor_id": "void_dragon_kaldor",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -330,
      "is_critical": false
    },
    {
      "time_offset_ms": 12400,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 600,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 0px) rotate(0deg)" },
          { "transform": "translate(20px, -15px) rotate(2deg)" },
          { "transform": "translate(-15px, 20px) rotate(-2deg)" },
          { "transform": "translate(0px, 0px) rotate(0deg)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      }
    },
    {
      "time_offset_ms": 12400,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(0.4) sepia(100%) hue-rotate(280deg) saturate(400%) drop-shadow(0 0 25px #800080)",
        "transform-origin": "center center"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "rotate(0deg) translateX(0) skew(0)", "offset": 0 },
          { "transform": "rotate(-30deg) translateX(-25px) skew(20deg)", "offset": 0.05 },
          { "transform": "rotate(15deg) translateX(15px) skew(-10deg)", "offset": 0.2 },
          { "transform": "rotate(-5deg) translateX(-5px)", "offset": 0.4 },
          { "transform": "rotate(0deg) translateX(0) skew(0)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 12,
          "startY": 2,
          "endX": 6,
          "endY": 8,
          "controlX": 10,
          "controlY": 6,
          "color": "rgba(75, 0, 130, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 11.5,
          "startY": 1,
          "endX": 5.5,
          "endY": 7,
          "controlX": 9.5,
          "controlY": 5,
          "color": "rgba(138, 43, 226, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 12.5,
          "startY": 3,
          "endX": 6.5,
          "endY": 9,
          "controlX": 10.5,
          "controlY": 7,
          "color": "rgba(75, 0, 130, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 70,
          "x": 9,
          "y": 5,
          "speed": 18,
          "color": "#ffffff",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.15,
          "gravity": 3,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 100,
          "x": 9,
          "y": 5,
          "speed": 12,
          "color": "#ffd700",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.08,
          "gravity": 2.5,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 9,
          "y": 5,
          "speed": 10,
          "color": "#2c0000",
          "size": 7,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.03,
          "gravity": 1.5,
          "shape": "circle",
          "glow": false
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 5,
          "startRadius": 0,
          "endRadius": 5,
          "color": "rgba(255, 0, 0, 0.95)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 13100,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 400,
      "css_override": {
        "filter": "brightness(2.5) drop-shadow(0 0 20px cyan)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 14,
          "startRadius": 6,
          "endRadius": 0.5,
          "color": "rgba(0, 255, 255, 0.9)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "cyan",
          "startOpacity": 0,
          "endOpacity": 1
        }
      ]
    },
    {
      "time_offset_ms": 13200,
      "type": "ATTACK",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_dragon_kaldor",
      "hp_change": -250,
      "is_critical": false
    },
    {
      "time_offset_ms": 13200,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 800,
      "css_override": {
        "filter": "brightness(2.5) contrast(1.5) sepia(50%) hue-rotate(150deg) drop-shadow(0 0 20px #00ffff)",
        "mix-blend-mode": "screen"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(0) skew(0)", "offset": 0 },
          { "transform": "translateX(-15px) skew(8deg)", "offset": 0.05 },
          { "transform": "translateX(10px) skew(-8deg)", "offset": 0.15 },
          { "transform": "translateX(-5px) skew(4deg)", "offset": 0.3 },
          { "transform": "translateX(0) skew(0)", "offset": 1 }
        ],
        "options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 14,
          "endX": 9,
          "endY": 4,
          "color": "rgba(255, 255, 255, 1)",
          "width": 20,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 14,
          "endX": 9,
          "endY": 4,
          "color": "rgba(0, 255, 255, 1)",
          "width": 8,
          "glow": true,
          "shadowBlur": 25,
          "shadowColor": "blue",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 2,
          "endRadius": 10,
          "color": "rgba(0, 255, 255, 0.9)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 9,
          "y": 4,
          "speed": 10,
          "color": "#00ffff",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2.5,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 14000,
      "type": "NARRATIVE",
      "content": "Sóng xung kích từ búa trọng lực và sát khí từ vuốt hắc ám va chạm, tạo ra những gợn sóng bóp méo không gian xung quanh hai kẻ khổng lồ."
    },
    {
      "time_offset_ms": 14500,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 2500,
      "css_override": {
        "filter": "contrast(1.3) brightness(0.8) hue-rotate(10deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1)" },
          { "transform": "scale(1.03)" },
          { "transform": "scale(1)" }
        ],
        "options": { "duration": 2500, "iterations": 1, "easing": "ease-in-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4.5,
          "startRadius": 0,
          "endRadius": 30,
          "color": "rgba(100, 100, 255, 0.5)",
          "fill": false,
          "lineWidth": 20,
          "glow": true,
          "shadowBlur": 60,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4.5,
          "startRadius": 0,
          "endRadius": 25,
          "color": "rgba(255, 255, 255, 0.3)",
          "fill": false,
          "lineWidth": 8,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(20, 0, 40, 0.6)",
          "startOpacity": 0,
          "endOpacity": 0.4
        }
      ]
    }
  ]
}
{
  "chunk_summary": "Trận chiến bước vào giai đoạn sinh tử. Kaldor cười nhạo sự yếu ớt của Atlas và vung một cú vuốt chí mạng cắn sâu vào lõi năng lượng của anh. Máu và tia lửa điện phun trào. Trong cơn hoảng loạn tột độ khi thấy người thân duy nhất gục ngã, Nova kích hoạt tối đa công suất phản lực, xả toàn bộ kho đạn Plasma từ trên không trung xuống đầu Kaldor. Atlas, với chút sức tàn, nện thêm một búa để cản bước tiến của con rồng. Nhưng Kaldor chỉ gầm lên thích thú, bắt đầu hội tụ năng lượng Hư Không chuẩn bị thổi bay tất cả.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 630,
      "x": 9,
      "y": 5
    },
    "aero_sniper_nova": {
      "hp": 1100,
      "x": 8,
      "y": 14
    },
    "void_dragon_kaldor": {
      "hp": 6570,
      "x": 9,
      "y": 4
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 15200,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Cơ thể rách nát của ngươi... thật nực cười!",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 15700,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 800,
      "css_override": {
        "filter": "brightness(1.5) contrast(1.5) drop-shadow(0 0 30px #4b0082)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 0,
          "endRadius": 5,
          "color": "rgba(75, 0, 130, 0.4)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 15800,
      "type": "ATTACK",
      "actor_id": "void_dragon_kaldor",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -450,
      "is_critical": true
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1500,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 0px) scale(1)", "filter": "invert(0%)" },
          { "transform": "translate(30px, -20px) scale(1.05) rotate(2deg)", "filter": "invert(10%)" },
          { "transform": "translate(-25px, 15px) scale(0.98) rotate(-1deg)", "filter": "invert(0%)" },
          { "transform": "translate(15px, 10px) rotate(1deg)" },
          { "transform": "translate(-10px, -5px)" },
          { "transform": "translate(0px, 0px) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(255, 0, 0, 0.4)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 15800,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 1800,
      "css_override": {
        "filter": "brightness(0.3) contrast(2.5) sepia(100%) hue-rotate(280deg) saturate(300%) drop-shadow(0 0 30px #8b0000)",
        "transform-origin": "center bottom",
        "mix-blend-mode": "multiply"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) skewX(0deg) rotate(0deg) translateY(0)", "offset": 0 },
          { "transform": "scale(0.8, 1.2) skewX(-25deg) rotate(-15deg) translateY(-10px)", "offset": 0.05 },
          { "transform": "scale(1.1, 0.9) skewX(15deg) rotate(10deg) translateY(15px)", "offset": 0.2 },
          { "transform": "scale(0.95, 1.05) skewX(-5deg) rotate(-5deg) translateY(5px)", "offset": 0.4 },
          { "transform": "scale(1) skewX(0deg) rotate(0deg) translateY(0)", "offset": 1 }
        ],
        "options": { "duration": 1000, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 12,
          "startY": 1,
          "endX": 6,
          "endY": 8,
          "controlX": 10,
          "controlY": 5,
          "color": "rgba(75, 0, 130, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 60,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 11,
          "startY": 2,
          "endX": 7,
          "endY": 7,
          "controlX": 9.5,
          "controlY": 4.5,
          "color": "rgba(138, 43, 226, 1)",
          "width": 15,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 12.5,
          "startY": 3,
          "endX": 6.5,
          "endY": 9,
          "controlX": 10.5,
          "controlY": 6,
          "color": "rgba(0, 0, 0, 1)",
          "width": 10,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "black",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 250,
          "x": 9,
          "y": 5,
          "speed": 20,
          "color": "#ff0000",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.08,
          "gravity": 4,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 9,
          "y": 5,
          "speed": 15,
          "color": "#8b0000",
          "size": 8,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.15,
          "gravity": 3,
          "shape": "circle",
          "glow": false
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 100,
          "x": 9,
          "y": 5,
          "speed": 10,
          "color": "#ffff00",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 5,
          "startRadius": 0,
          "endRadius": 10,
          "color": "rgba(255, 0, 0, 0.9)",
          "fill": true,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 5,
          "startRadius": 2,
          "endRadius": 15,
          "color": "rgba(255, 69, 0, 1)",
          "fill": false,
          "lineWidth": 10,
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 16200,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "Tránh xa anh ấy ra, con thằn lằn gớm ghiếc!!!",
      "emotion": "AGGRESSIVE"
    },
    {
      "time_offset_ms": 16500,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(3) contrast(1.5) drop-shadow(0 0 30px cyan)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1)" },
          { "transform": "translateY(-25px) scale(1.15)" },
          { "transform": "translateY(-20px) scale(1.1)" }
        ],
        "options": { "duration": 400, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 14,
          "startRadius": 8,
          "endRadius": 1,
          "color": "rgba(0, 255, 255, 0.6)",
          "fill": true,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "cyan",
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 50,
          "x": 8,
          "y": 14,
          "speed": 8,
          "color": "#00ffff",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": -2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 16800,
      "type": "SKILL",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_dragon_kaldor",
      "hp_change": -600,
      "is_critical": true
    },
    {
      "time_offset_ms": 16800,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1500,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 0px) scale(1)" },
          { "transform": "translate(-15px, 10px) scale(1.02) rotate(-1deg)" },
          { "transform": "translate(15px, -10px) scale(0.98) rotate(1deg)" },
          { "transform": "translate(-5px, 5px)" },
          { "transform": "translate(0px, 0px) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(0, 255, 255, 0.3)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 16800,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 2000,
      "css_override": {
        "filter": "brightness(4) contrast(2) sepia(100%) hue-rotate(180deg) blur(1px) drop-shadow(0 0 50px cyan)",
        "mix-blend-mode": "color-dodge"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1) skew(0deg)", "offset": 0 },
          { "transform": "translateY(20px) scale(1.1, 0.9) skew(10deg)", "offset": 0.05 },
          { "transform": "translateY(-10px) scale(0.95, 1.05) skew(-5deg)", "offset": 0.2 },
          { "transform": "translateY(5px) scale(1.02, 0.98) skew(2deg)", "offset": 0.4 },
          { "transform": "translateY(0) scale(1) skew(0deg)", "offset": 1 }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 7,
          "startY": 14,
          "endX": 8.5,
          "endY": 4.5,
          "color": "rgba(255, 255, 255, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 80,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 14,
          "endX": 9,
          "endY": 4,
          "color": "rgba(255, 255, 255, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 80,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 14,
          "endX": 9.5,
          "endY": 4.5,
          "color": "rgba(255, 255, 255, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 80,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 7.5,
          "startY": 14,
          "endX": 8.8,
          "endY": 4.2,
          "color": "rgba(0, 255, 255, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "blue",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8.5,
          "startY": 14,
          "endX": 9.2,
          "endY": 4.2,
          "color": "rgba(0, 255, 255, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "blue",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 5,
          "endRadius": 15,
          "color": "rgba(0, 255, 255, 0.9)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 2,
          "endRadius": 25,
          "color": "rgba(0, 255, 255, 1)",
          "fill": false,
          "lineWidth": 15,
          "glow": true,
          "shadowBlur": 60,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 200,
          "x": 9,
          "y": 4,
          "speed": 18,
          "color": "#00ffff",
          "size": 7,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.2,
          "gravity": 3.5,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 17500,
      "type": "ATTACK",
      "actor_id": "mecha_vanguard_atlas",
      "target_id": "void_dragon_kaldor",
      "hp_change": -250,
      "is_critical": false
    },
    {
      "time_offset_ms": 17500,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 600,
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0)" },
          { "transform": "translateY(-15px) scale(1.05) rotate(5deg)" },
          { "transform": "translateY(5px) scale(0.98)" },
          { "transform": "translateY(0)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      }
    },
    {
      "time_offset_ms": 17600,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 800,
      "css_override": {
        "filter": "brightness(1.5) drop-shadow(0 0 20px #ffa500)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(0) rotate(0deg)" },
          { "transform": "translateX(-10px) rotate(-3deg)" },
          { "transform": "translateX(8px) rotate(2deg)" },
          { "transform": "translateX(-5px)" },
          { "transform": "translateX(0) rotate(0deg)" }
        ],
        "options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 5,
          "endX": 9,
          "endY": 4,
          "color": "rgba(255, 165, 0, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "orange",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 0,
          "endRadius": 6,
          "color": "rgba(255, 215, 0, 0.9)",
          "fill": true,
          "glow": true,
          "shadowBlur": 25,
          "shadowColor": "orange",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 60,
          "x": 9,
          "y": 4,
          "speed": 8,
          "color": "#ffd700",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 18500,
      "type": "NARRATIVE",
      "content": "Kaldor rít lên một tràng dài. Bóng tối xung quanh cuộn xoáy dữ dội về phía miệng nó. Một vụ nổ Gamma đang thành hình."
    },
    {
      "time_offset_ms": 18500,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 2000,
      "css_override": {
        "filter": "brightness(0.5) contrast(2) drop-shadow(0 0 50px #4b0082)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) translateY(0)" },
          { "transform": "scale(1.1) translateY(-10px)" },
          { "transform": "scale(1) translateY(0)" }
        ],
        "options": { "duration": 1000, "iterations": 2, "easing": "ease-in-out" }
      }
    },
    {
      "time_offset_ms": 19000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 2500,
      "css_override": {
        "filter": "contrast(1.5) brightness(0.6) hue-rotate(250deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0px, 0px) scale(1)", "filter": "invert(0%)" },
          { "transform": "translate(15px, -15px) scale(1.02) rotate(1deg)", "filter": "invert(10%)" },
          { "transform": "translate(-15px, 15px) scale(0.98) rotate(-1deg)", "filter": "invert(5%)" },
          { "transform": "translate(0px, 0px) scale(1) rotate(0deg)", "filter": "invert(0%)" }
        ],
        "options": { "duration": 800, "iterations": 3, "easing": "ease-in-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(20, 0, 40, 0.7)",
          "startOpacity": 0,
          "endOpacity": 0.8
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 25,
          "endRadius": 0.5,
          "color": "rgba(128, 0, 128, 0.4)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 20,
          "endRadius": 0.1,
          "color": "rgba(75, 0, 130, 0.6)",
          "fill": false,
          "lineWidth": 15,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 9,
          "y": 4,
          "speed": -8,
          "color": "#8a2be2",
          "size": 5,
          "sizeDecay": false,
          "decayMin": 0,
          "decayMax": 0,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 19500,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Chết đi, tàn dư của hy vọng!",
      "emotion": "ARROGANT"
    }
  ]
}
{
  "chunk_summary": "Sự tàn khốc của chiến trường đạt đỉnh điểm. Hơi Thở Phân Rã của Kaldor giải phóng thành một cột năng lượng Gamma khổng lồ, nghiền nát hoàn toàn chút sinh mệnh và lớp giáp cuối cùng của Atlas. Người đội trưởng kiên cường tan rã thành tro bụi kim loại ngay trước mắt Nova. Mất đi chỗ dựa duy nhất, sự lạnh lùng thường ngày của nữ xạ thủ sụp đổ hoàn toàn. Cô gào thét và bắn trả trong sự hoảng loạn tột độ, nhưng những tia laser yếu ớt không thể cản bước Kaldor khi con rồng tà ác nhẩn nha tiến lên để thưởng thức sự tuyệt vọng.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 0,
      "x": 9,
      "y": 5
    },
    "aero_sniper_nova": {
      "hp": 1100,
      "x": 8,
      "y": 14
    },
    "void_dragon_kaldor": {
      "hp": 6420,
      "x": 9,
      "y": 6
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 20100,
      "type": "SKILL",
      "actor_id": "void_dragon_kaldor",
      "target_id": "mecha_vanguard_atlas",
      "hp_change": -650,
      "is_critical": true
    },
    {
      "time_offset_ms": 20100,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 2500,
      "css_override": {
        "filter": "contrast(2) brightness(1.5) hue-rotate(250deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0,0) scale(1)", "filter": "invert(0%)" },
          { "transform": "translate(-30px, 20px) scale(1.05) rotate(-2deg)", "filter": "invert(20%)" },
          { "transform": "translate(25px, -15px) scale(0.98) rotate(2deg)", "filter": "invert(0%)" },
          { "transform": "translate(-15px, 10px) scale(1.02) rotate(-1deg)" },
          { "transform": "translate(10px, -5px) scale(0.99)" },
          { "transform": "translate(0,0) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(255, 255, 255, 0.9)",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(75, 0, 130, 0.5)",
          "startOpacity": 0,
          "endOpacity": 0.8
        }
      ]
    },
    {
      "time_offset_ms": 20100,
      "type": "VFX",
      "target_id": "mecha_vanguard_atlas",
      "duration_ms": 3000,
      "css_override": {
        "opacity": "0",
        "transform-origin": "center",
        "filter": "brightness(5) sepia(100%) hue-rotate(280deg) saturate(300%) drop-shadow(0 0 50px #ff00ff)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1)", "opacity": "1" },
          { "transform": "scale(1.5, 0.8) skewX(20deg) translateY(-5px)", "opacity": "0.9" },
          { "transform": "scale(0.8, 1.2) skewX(-20deg) translateY(10px)", "opacity": "0.7" },
          { "transform": "scale(0.3, 2) skewX(10deg) translateY(-30px)", "opacity": "0.3" },
          { "transform": "scale(0) translateY(-60px)", "opacity": "0" }
        ],
        "options": { "duration": 1500, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.5, 0, 1, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4,
          "endX": 9,
          "endY": 20,
          "color": "rgba(0, 0, 0, 1)",
          "width": 40,
          "glow": true,
          "shadowBlur": 100,
          "shadowColor": "black",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4,
          "endX": 9,
          "endY": 20,
          "color": "rgba(138, 43, 226, 1)",
          "width": 25,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 9,
          "startY": 4,
          "endX": 9,
          "endY": 20,
          "color": "rgba(255, 255, 255, 1)",
          "width": 8,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 5,
          "startRadius": 1,
          "endRadius": 18,
          "color": "rgba(255, 0, 255, 0.9)",
          "fill": false,
          "lineWidth": 15,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 5,
          "startRadius": 5,
          "endRadius": 12,
          "color": "rgba(0, 0, 0, 0.8)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 300,
          "x": 9,
          "y": 5,
          "speed": 25,
          "color": "#ff00ff",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.15,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 200,
          "x": 9,
          "y": 5,
          "speed": 15,
          "color": "#ffffff",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.1,
          "gravity": 2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 20300,
      "type": "DIALOGUE",
      "actor_id": "mecha_vanguard_atlas",
      "content": "Nova... sống sót...",
      "emotion": "RESOLUTE"
    },
    {
      "time_offset_ms": 21000,
      "type": "NARRATIVE",
      "content": "Cơ thể cơ khí của Atlas bốc hơi trong chùm tia Gamma tàn khốc. Không còn mảnh giáp nào nguyên vẹn, chỉ còn lại những đốm sáng lụi tàn trong Hư Không."
    },
    {
      "time_offset_ms": 21000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 4000,
      "canvas_commands": [
        {
          "action": "SPAWN_PARTICLES",
          "count": 50,
          "x": 9,
          "y": 5,
          "speed": 3,
          "color": "#ffd700",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.03,
          "gravity": -1.5,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 9,
          "y": 5,
          "speed": 2,
          "color": "#888888",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.02,
          "gravity": -0.5,
          "shape": "circle",
          "glow": false
        }
      ]
    },
    {
      "time_offset_ms": 21800,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "KHÔNG!!! ATLAS!!!",
      "emotion": "AGONY"
    },
    {
      "time_offset_ms": 22000,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 2500,
      "css_override": {
        "filter": "brightness(1.5) contrast(1.2) drop-shadow(0 0 15px #00ffff)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(0) translateY(0) scale(1)", "filter": "hue-rotate(0deg)" },
          { "transform": "translateX(-5px) translateY(2px) scale(0.95)", "filter": "hue-rotate(20deg)" },
          { "transform": "translateX(5px) translateY(-2px) scale(1.05)", "filter": "hue-rotate(-20deg)" },
          { "transform": "translateX(-3px) translateY(3px) scale(0.98)" },
          { "transform": "translateX(3px) translateY(-3px) scale(1.02)" },
          { "transform": "translateX(0) translateY(0) scale(1)", "filter": "hue-rotate(0deg)" }
        ],
        "options": { "duration": 150, "iterations": 16, "direction": "alternate" }
      },
      "canvas_commands": [
        {
          "action": "SPAWN_PARTICLES",
          "count": 40,
          "x": 8,
          "y": 14,
          "speed": 4,
          "color": "#00ffff",
          "size": 2,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 3,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 22500,
      "type": "ATTACK",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_dragon_kaldor",
      "hp_change": -150,
      "is_critical": false
    },
    {
      "time_offset_ms": 22500,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 600,
      "css_override": {
        "filter": "brightness(1.2)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 8,
          "startY": 14,
          "endX": 9,
          "endY": 4,
          "controlX": 7,
          "controlY": 9,
          "color": "rgba(0, 191, 255, 0.4)",
          "width": 2,
          "glow": true,
          "shadowBlur": 5,
          "shadowColor": "cyan",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 8,
          "startY": 14,
          "endX": 9,
          "endY": 4,
          "controlX": 10,
          "controlY": 9,
          "color": "rgba(0, 191, 255, 0.3)",
          "width": 1,
          "glow": false,
          "startOpacity": 0.8,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 4,
          "startRadius": 0,
          "endRadius": 3,
          "color": "rgba(0, 191, 255, 0.5)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 10,
          "x": 9,
          "y": 4,
          "speed": 3,
          "color": "#00ffff",
          "size": 2,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 1,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 23500,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Nước mắt của kẻ yếu... Món tráng miệng tuyệt hảo.",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 24000,
      "type": "MOVE",
      "actor_id": "void_dragon_kaldor",
      "target_x": 9,
      "target_y": 6
    },
    {
      "time_offset_ms": 24000,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1000,
      "css_override": {
        "filter": "drop-shadow(0 0 30px #000000) brightness(0.8)",
        "transform": "scale(1.1)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0)" },
          { "transform": "translateY(5px)" },
          { "transform": "translateY(0)" }
        ],
        "options": { "duration": 500, "iterations": 2, "easing": "ease-in-out" }
      }
    },
    {
      "time_offset_ms": 24500,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1500,
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 6,
          "startRadius": 0,
          "endRadius": 8,
          "color": "rgba(40, 0, 60, 0.6)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 6,
          "startRadius": 2,
          "endRadius": 10,
          "color": "rgba(75, 0, 130, 0.8)",
          "fill": false,
          "lineWidth": 4,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    }
  ]
}
{
  "chunk_summary": "Mất đi lá chắn thép, Nova hoàn toàn hoảng loạn. Cô lảo đảo lùi lại và xả súng trong tuyệt vọng, nhưng những tia đạn rung rẩy chẳng mảy may làm xước vảy Kaldor. Con rồng tà ác nhẩn nha tiến bước như một bóng ma, vung Vuốt Hư Không xé toạc không gian, chém một nhát chí mạng thẳng vào người Nova và hất văng cô ra xa. Đối diện với khoảng không đen kịt và vết thương chí mạng, nữ xạ thủ kiêu ngạo ngày nào giờ suy sụp hoàn toàn, bật khóc gọi tên người anh đã khuất.",
  "is_game_over": false,
  "winning_team": null,
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 0,
      "x": 9,
      "y": 5
    },
    "aero_sniper_nova": {
      "hp": 650,
      "x": 8,
      "y": 18
    },
    "void_dragon_kaldor": {
      "hp": 6240,
      "x": 8,
      "y": 14
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 25100,
      "type": "MOVE",
      "actor_id": "aero_sniper_nova",
      "target_x": 8,
      "target_y": 16
    },
    {
      "time_offset_ms": 25150,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 1500,
      "css_override": {
        "filter": "grayscale(40%) sepia(20%) brightness(0.8) drop-shadow(0 0 5px red)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(0) translateY(0) rotate(0)" },
          { "transform": "translateX(-4px) translateY(2px) rotate(-3deg)" },
          { "transform": "translateX(3px) translateY(-1px) rotate(2deg)" },
          { "transform": "translateX(-2px) translateY(4px) rotate(-1deg)" },
          { "transform": "translateX(2px) translateY(-2px) rotate(1deg)" }
        ],
        "options": { "duration": 80, "iterations": 18, "direction": "alternate" }
      },
      "canvas_commands": [
        {
          "action": "SPAWN_PARTICLES",
          "count": 30,
          "x": 8,
          "y": 16,
          "speed": 2,
          "color": "#ffaa00",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2.5,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 20,
          "x": 8,
          "y": 16,
          "speed": 1,
          "color": "#888888",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.05,
          "gravity": -1,
          "shape": "circle",
          "glow": false
        }
      ]
    },
    {
      "time_offset_ms": 25800,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Đôi cánh của ngươi đã gãy, chim non. Giờ thì tận hưởng vực thẳm đi.",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 25800,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1000,
      "css_override": {
        "filter": "drop-shadow(0 0 40px #4b0082) brightness(1.2) contrast(1.4)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 6,
          "startRadius": 4,
          "endRadius": 10,
          "color": "rgba(75, 0, 130, 0.5)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 0.7
        }
      ]
    },
    {
      "time_offset_ms": 26200,
      "type": "MOVE",
      "actor_id": "void_dragon_kaldor",
      "target_x": 9,
      "target_y": 10
    },
    {
      "time_offset_ms": 26250,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 600,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0)" },
          { "transform": "translate(5px, 5px)" },
          { "transform": "translate(0, 0)" }
        ],
        "options": { "duration": 300, "iterations": 2, "easing": "ease-in-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 6,
          "color": "rgba(0, 0, 0, 0.6)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 26500,
      "type": "ATTACK",
      "actor_id": "aero_sniper_nova",
      "target_id": "void_dragon_kaldor",
      "hp_change": -180,
      "is_critical": false
    },
    {
      "time_offset_ms": 26500,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 500,
      "web_animation": {
        "keyframes": [
          { "transform": "translateX(-1px)" },
          { "transform": "translateX(1px)" }
        ],
        "options": { "duration": 50, "iterations": 4 }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 16,
          "endX": 9.2,
          "endY": 10.2,
          "color": "rgba(0, 255, 255, 0.3)",
          "width": 2,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "cyan",
          "startOpacity": 0.8,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_LINE",
          "startX": 8.2,
          "startY": 16,
          "endX": 8.8,
          "endY": 10.5,
          "color": "rgba(0, 255, 255, 0.4)",
          "width": 1,
          "glow": true,
          "shadowBlur": 5,
          "shadowColor": "cyan",
          "startOpacity": 0.5,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 9,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 4,
          "color": "rgba(0, 191, 255, 0.2)",
          "fill": true,
          "startOpacity": 0.8,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 15,
          "x": 9,
          "y": 10,
          "speed": 3,
          "color": "#00ffff",
          "size": 2,
          "sizeDecay": true,
          "decayMin": 0.1,
          "decayMax": 0.2,
          "gravity": 1,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 27200,
      "type": "NARRATIVE",
      "content": "Nỗi kinh hoàng tột độ khiến Nova mất đi sự chính xác tuyệt đối. Những tia laser trượt mục tiêu, sượt qua lớp vảy cứng của Kaldor một cách vô hại."
    },
    {
      "time_offset_ms": 27200,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 800,
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(0, 0, 0, 0.4)",
          "startOpacity": 0,
          "endOpacity": 0.8
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 16,
          "startRadius": 20,
          "endRadius": 4,
          "color": "rgba(0, 0, 0, 0.7)",
          "fill": false,
          "lineWidth": 10,
          "startOpacity": 0,
          "endOpacity": 1
        }
      ]
    },
    {
      "time_offset_ms": 28000,
      "type": "ATTACK",
      "actor_id": "void_dragon_kaldor",
      "target_id": "aero_sniper_nova",
      "hp_change": -450,
      "is_critical": true
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1000,
      "css_override": {
        "filter": "contrast(1.5) hue-rotate(300deg)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0) scale(1) rotate(0)" },
          { "transform": "translate(-20px, 20px) scale(1.05) rotate(-3deg)" },
          { "transform": "translate(15px, -15px) scale(0.98) rotate(2deg)" },
          { "transform": "translate(-10px, 10px) rotate(-1deg)" },
          { "transform": "translate(0, 0) scale(1) rotate(0)" }
        ],
        "options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(128, 0, 128, 0.5)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 28000,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 1800,
      "css_override": {
        "filter": "sepia(100%) hue-rotate(280deg) saturate(300%) brightness(0.4) drop-shadow(0 0 30px #ff0000)",
        "transform-origin": "center"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0) rotate(0deg) scale(1)", "offset": 0 },
          { "transform": "translate(-15px, 30px) rotate(45deg) scale(0.8)", "offset": 0.1 },
          { "transform": "translate(-5px, 20px) rotate(35deg) scale(0.85)", "offset": 0.3 },
          { "transform": "translate(-8px, 25px) rotate(40deg) scale(0.8)", "offset": 1 }
        ],
        "options": { "duration": 1500, "iterations": 1, "fill": "forwards", "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 10,
          "startY": 14,
          "endX": 6,
          "endY": 18,
          "controlX": 9,
          "controlY": 17,
          "color": "rgba(75, 0, 130, 1)",
          "width": 18,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 10.5,
          "startY": 13.5,
          "endX": 6.5,
          "endY": 17.5,
          "controlX": 9.5,
          "controlY": 16.5,
          "color": "rgba(138, 43, 226, 1)",
          "width": 12,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 9.5,
          "startY": 14.5,
          "endX": 5.5,
          "endY": 18.5,
          "controlX": 8.5,
          "controlY": 17.5,
          "color": "rgba(40, 0, 80, 1)",
          "width": 15,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "black",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 16,
          "startRadius": 0,
          "endRadius": 8,
          "color": "rgba(255, 0, 0, 0.9)",
          "fill": true,
          "glow": true,
          "shadowBlur": 30,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 120,
          "x": 8,
          "y": 16,
          "speed": 15,
          "color": "#ff0000",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.08,
          "gravity": 4,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 8,
          "y": 16,
          "speed": 10,
          "color": "#00ffff",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": 2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 28800,
      "type": "MOVE",
      "actor_id": "aero_sniper_nova",
      "target_x": 8,
      "target_y": 18
    },
    {
      "time_offset_ms": 28800,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 1000,
      "canvas_commands": [
        {
          "action": "ANIMATE_LINE",
          "startX": 8,
          "startY": 16,
          "endX": 8,
          "endY": 18,
          "color": "rgba(139, 0, 0, 0.8)",
          "width": 6,
          "glow": true,
          "shadowBlur": 10,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 40,
          "x": 8,
          "y": 18,
          "speed": 2,
          "color": "#808080",
          "size": 5,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.05,
          "gravity": -1,
          "shape": "circle",
          "glow": false
        }
      ]
    },
    {
      "time_offset_ms": 29200,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "Atlas... Cứu em... Em sợ lắm...",
      "emotion": "TERRIFIED"
    },
    {
      "time_offset_ms": 29200,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 2000,
      "css_override": {
        "filter": "grayscale(80%) brightness(0.6) blur(1px)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "rotate(40deg) translateY(25px) scale(0.8)", "opacity": "1" },
          { "transform": "rotate(42deg) translateY(26px) scale(0.8)", "opacity": "0.7" },
          { "transform": "rotate(38deg) translateY(24px) scale(0.8)", "opacity": "0.9" }
        ],
        "options": { "duration": 200, "iterations": 10, "direction": "alternate" }
      }
    },
    {
      "time_offset_ms": 29800,
      "type": "MOVE",
      "actor_id": "void_dragon_kaldor",
      "target_x": 8,
      "target_y": 14
    },
    {
      "time_offset_ms": 29800,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1500,
      "css_override": {
        "filter": "drop-shadow(0 0 50px #000000) brightness(0.5) contrast(2)",
        "transform": "scale(1.2)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 14,
          "startRadius": 0,
          "endRadius": 12,
          "color": "rgba(20, 0, 30, 0.9)",
          "fill": true,
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 100,
          "x": 8,
          "y": 14,
          "speed": 4,
          "color": "#4b0082",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.05,
          "decayMax": 0.1,
          "gravity": -0.5,
          "shape": "circle",
          "glow": true
        }
      ]
    }
  ]
}
{
  "chunk_summary": "Trận chiến kết thúc trong sự tàn khốc và tuyệt vọng tuyệt đối. Bị dồn vào mép vực của khu di tích, Nova hoàn toàn sụp đổ, buông thõng vũ khí không còn sức phản kháng. Kaldor lạnh lùng trườn tới, vung nhát chém Hư Không cuối cùng xé nát cơ thể cô. Trong môi trường không trọng lực, sinh mệnh cuối cùng của đội Mecha Knights trôi dạt vào hố đen vô tận, để lại tàn tích chìm trong sự im lặng chết chóc.",
  "is_game_over": true,
  "winning_team": "team_b",
  "updated_state": {
    "mecha_vanguard_atlas": {
      "hp": 0,
      "x": 9,
      "y": 5
    },
    "aero_sniper_nova": {
      "hp": 0,
      "x": 8,
      "y": 19
    },
    "void_dragon_kaldor": {
      "hp": 6240,
      "x": 8,
      "y": 18
    },
    "void_spawn_left": {
      "hp": 0,
      "x": 8,
      "y": 9
    },
    "void_spawn_right": {
      "hp": 0,
      "x": 10,
      "y": 14
    }
  },
  "timeline": [
    {
      "time_offset_ms": 30200,
      "type": "MOVE",
      "actor_id": "aero_sniper_nova",
      "target_x": 8,
      "target_y": 19
    },
    {
      "time_offset_ms": 30300,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 2000,
      "css_override": {
        "filter": "saturate(0.2) brightness(0.6) drop-shadow(0 0 5px rgba(255,255,255,0.2))"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0) rotate(0deg)" },
          { "transform": "translate(-1px, 1px) rotate(-0.5deg)" },
          { "transform": "translate(1px, -1px) rotate(0.5deg)" }
        ],
        "options": { "duration": 120, "iterations": 16, "direction": "alternate", "easing": "linear" }
      },
      "canvas_commands": [
        {
          "action": "SPAWN_PARTICLES",
          "count": 15,
          "x": 8,
          "y": 19,
          "speed": 0.5,
          "color": "#e0ffff",
          "size": 2,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.02,
          "gravity": -0.2,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 31000,
      "type": "NARRATIVE",
      "content": "Bị dồn vào góc chết của bản đồ, cô gái trẻ buông thõng vũ khí. Lực hấp dẫn yếu ớt khiến những giọt nước mắt tuyệt vọng trôi lơ lửng trong không trung."
    },
    {
      "time_offset_ms": 31000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 1500,
      "css_override": {
        "filter": "brightness(0.6) contrast(1.3) hue-rotate(15deg)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(10, 0, 20, 0.5)",
          "startOpacity": 0,
          "endOpacity": 0.8
        }
      ]
    },
    {
      "time_offset_ms": 31200,
      "type": "MOVE",
      "actor_id": "void_dragon_kaldor",
      "target_x": 8,
      "target_y": 18
    },
    {
      "time_offset_ms": 31200,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1300,
      "css_override": {
        "filter": "drop-shadow(0 0 30px #4b0082) brightness(0.8)",
        "transform": "scale(1.15)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(10px) scale(1)", "filter": "brightness(0.5)" },
          { "transform": "translateY(0) scale(1.15)", "filter": "brightness(0.8)" }
        ],
        "options": { "duration": 800, "iterations": 1, "fill": "forwards", "easing": "ease-out" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 18,
          "startRadius": 0,
          "endRadius": 6,
          "color": "rgba(40, 0, 60, 0.8)",
          "fill": true,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "purple",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 31800,
      "type": "DIALOGUE",
      "actor_id": "void_dragon_kaldor",
      "content": "Ngoan ngoãn chìm vào Hư Không đi.",
      "emotion": "ARROGANT"
    },
    {
      "time_offset_ms": 31800,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 700,
      "css_override": {
        "filter": "drop-shadow(0 0 50px #8a2be2) brightness(1.5) contrast(1.5)"
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 18,
          "startRadius": 6,
          "endRadius": 1,
          "color": "rgba(138, 43, 226, 0.5)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 80,
          "x": 8,
          "y": 18,
          "speed": -4,
          "color": "#4b0082",
          "size": 4,
          "sizeDecay": false,
          "decayMin": 0,
          "decayMax": 0,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    },
    {
      "time_offset_ms": 32500,
      "type": "ATTACK",
      "actor_id": "void_dragon_kaldor",
      "target_id": "aero_sniper_nova",
      "hp_change": -850,
      "is_critical": true
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 2000,
      "web_animation": {
        "keyframes": [
          { "transform": "translate(0, 0) scale(1)", "filter": "invert(0%)" },
          { "transform": "translate(-20px, 15px) scale(1.05) rotate(-2deg)", "filter": "invert(100%) hue-rotate(180deg)" },
          { "transform": "translate(15px, -10px) scale(0.98) rotate(2deg)", "filter": "invert(50%)" },
          { "transform": "translate(-10px, 5px) scale(1.01) rotate(-1deg)", "filter": "invert(0%)" },
          { "transform": "translate(0, 0) scale(1) rotate(0deg)" }
        ],
        "options": { "duration": 600, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "rgba(255, 255, 255, 1)",
          "startOpacity": 1,
          "endOpacity": 0
        }
      ]
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "void_dragon_kaldor",
      "duration_ms": 1000,
      "css_override": {
        "filter": "brightness(3) contrast(2)",
        "transform": "scale(1.2)"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "translateY(0) scale(1.2)" },
          { "transform": "translateY(-15px) scale(1.3) rotate(-5deg)" },
          { "transform": "translateY(5px) scale(1.1) rotate(2deg)" },
          { "transform": "translateY(0) scale(1.2)" }
        ],
        "options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
      }
    },
    {
      "time_offset_ms": 32500,
      "type": "VFX",
      "target_id": "aero_sniper_nova",
      "duration_ms": 3500,
      "css_override": {
        "filter": "grayscale(100%) brightness(0.2) blur(1px)",
        "opacity": "0"
      },
      "web_animation": {
        "keyframes": [
          { "transform": "scale(1) rotate(0deg) translate(0, 0)", "opacity": "1" },
          { "transform": "scale(0.8) rotate(45deg) translate(-10px, -20px)", "opacity": "0.8" },
          { "transform": "scale(0.6) rotate(120deg) translate(-20px, -40px)", "opacity": "0.5" },
          { "transform": "scale(0.3) rotate(180deg) translate(-30px, -60px)", "opacity": "0.2" },
          { "transform": "scale(0) rotate(240deg) translate(-40px, -80px)", "opacity": "0" }
        ],
        "options": { "duration": 3500, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_BEZIER",
          "startX": 4,
          "startY": 16,
          "endX": 12,
          "endY": 22,
          "controlX": 8,
          "controlY": 19,
          "color": "rgba(0, 0, 0, 1)",
          "width": 35,
          "glow": true,
          "shadowBlur": 80,
          "shadowColor": "black",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 5,
          "startY": 17,
          "endX": 11,
          "endY": 21,
          "controlX": 8,
          "controlY": 19,
          "color": "rgba(138, 43, 226, 1)",
          "width": 20,
          "glow": true,
          "shadowBlur": 40,
          "shadowColor": "magenta",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_BEZIER",
          "startX": 6,
          "startY": 18,
          "endX": 10,
          "endY": 20,
          "controlX": 8,
          "controlY": 19,
          "color": "rgba(255, 255, 255, 1)",
          "width": 8,
          "glow": true,
          "shadowBlur": 20,
          "shadowColor": "white",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 8,
          "centerY": 19,
          "startRadius": 0,
          "endRadius": 15,
          "color": "rgba(255, 0, 0, 0.8)",
          "fill": true,
          "glow": true,
          "shadowBlur": 50,
          "shadowColor": "red",
          "startOpacity": 1,
          "endOpacity": 0
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 250,
          "x": 8,
          "y": 19,
          "speed": 8,
          "color": "#8b0000",
          "size": 6,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.03,
          "gravity": 0,
          "shape": "circle",
          "glow": false
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 150,
          "x": 8,
          "y": 19,
          "speed": 12,
          "color": "#ff0000",
          "size": 4,
          "sizeDecay": true,
          "decayMin": 0.02,
          "decayMax": 0.05,
          "gravity": -0.1,
          "shape": "circle",
          "glow": true
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 100,
          "x": 8,
          "y": 19,
          "speed": 5,
          "color": "#a9a9a9",
          "size": 3,
          "sizeDecay": true,
          "decayMin": 0.01,
          "decayMax": 0.02,
          "gravity": -0.5,
          "shape": "circle",
          "glow": false
        }
      ]
    },
    {
      "time_offset_ms": 32600,
      "type": "DIALOGUE",
      "actor_id": "aero_sniper_nova",
      "content": "...Atlas...",
      "emotion": "AGONY"
    },
    {
      "time_offset_ms": 33800,
      "type": "NARRATIVE",
      "content": "Lưỡi vuốt tà ác kết liễu sinh mệnh cuối cùng. Cơ thể đẫm máu trôi dạt vào hố đen, mọi thứ chìm vào tĩnh lặng chết chóc."
    },
    {
      "time_offset_ms": 34000,
      "type": "VFX",
      "target_id": null,
      "duration_ms": 5000,
      "css_override": {
        "filter": "grayscale(100%) brightness(0)"
      },
      "web_animation": {
        "keyframes": [
          { "filter": "brightness(1) contrast(1)" },
          { "filter": "brightness(0.5) contrast(1.5)" },
          { "filter": "brightness(0) contrast(2)" }
        ],
        "options": { "duration": 4000, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
      },
      "canvas_commands": [
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 10,
          "centerY": 10,
          "startRadius": 0,
          "endRadius": 30,
          "color": "rgba(0, 0, 0, 1)",
          "fill": true,
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "ANIMATE_CIRCLE",
          "centerX": 10,
          "centerY": 10,
          "startRadius": 5,
          "endRadius": 35,
          "color": "rgba(20, 0, 40, 1)",
          "fill": false,
          "lineWidth": 20,
          "glow": true,
          "shadowBlur": 100,
          "shadowColor": "purple",
          "startOpacity": 0.8,
          "endOpacity": 0
        },
        {
          "action": "ANIMATE_RECT",
          "startX": 0,
          "startY": 0,
          "endX": 20,
          "endY": 20,
          "color": "#000000",
          "startOpacity": 0,
          "endOpacity": 1
        },
        {
          "action": "SPAWN_PARTICLES",
          "count": 200,
          "x": 10,
          "y": 10,
          "speed": -10,
          "color": "#ffffff",
          "size": 2,
          "sizeDecay": false,
          "decayMin": 0,
          "decayMax": 0,
          "gravity": 0,
          "shape": "circle",
          "glow": true
        }
      ]
    }
  ]
}

`;
// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING || RAW_DATA_STRING.trim() === '' || RAW_DATA_STRING.includes('DÁN TOÀN BỘ NỘI DUNG')) {
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

    // 2. Ép dữ liệu chuẩn xác cho kịch bản "Mecha Knights vs Void Dragon"
    useMainStore.setState({
      // Môi trường Sci-Fi Hư không
      mapPreviewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', 
      mapDescription: 'Khu di tích trôi nổi (Floating Ruins): Một đấu trường cổ đại lơ lửng giữa không trung, trọng lực yếu. Tinh thể từ trường màu tím.',
      
      // Avatar được thiết kế riêng cho 5 nhân vật
      uploadedShapes: [
        { id: "shape-atlas", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Atlas&background=B8860B&color=fff&size=150&bold=true" },
        { id: "shape-nova", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Nova&background=00BFFF&color=fff&size=150&bold=true" },
        { id: "shape-dragon", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Kaldor&background=4B0082&color=fff&size=150&bold=true" },
        { id: "shape-spawn", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Spawn&background=800080&color=fff&size=150&bold=true" }
      ],

      // Đội hình A: Mecha Knights
      teamA: [
        {
          id: "mecha_vanguard_atlas",
          team: 'A',
          name: "Mecha Atlas",
          personality: "Trầm ổn, kiên định, luôn lấy thân mình làm lá chắn thép.",
          basicAttackDesc: "Nện Búa Trọng Lực gây rạn nứt mặt đất",
          skillDesc: "Tạo khiên năng lượng lục giác bảo vệ đồng đội",
          stats: { hp: 2500, maxHp: 2500, agility: 30, damage: 220, range: 1 },
          shapeId: "shape-atlas",
          position: { x: 9, y: 14 }
        },
        {
          id: "aero_sniper_nova",
          team: 'A',
          name: "Aero Nova",
          personality: "Bay lượn linh hoạt, ngắm bắn bằng tia laser xanh.",
          basicAttackDesc: "Bắn tỉa Laser Phán Xét",
          skillDesc: "Mưa đạn plasma từ trên không",
          stats: { hp: 1100, maxHp: 1100, agility: 85, damage: 180, range: 8 },
          shapeId: "shape-nova",
          position: { x: 9, y: 18 }
        }
      ],

      // Đội hình B: Void Swarm
      teamB: [
        {
          id: "void_dragon_kaldor",
          team: 'B',
          name: "Void Dragon Kaldor",
          personality: "Kiêu ngạo, tàn bạo, khạc ra lửa bão từ trường tím.",
          basicAttackDesc: "Cắn xé bằng Vuốt Hư Không",
          skillDesc: "Hơi Thở Phân Rã tia Gamma",
          stats: { hp: 8500, maxHp: 8500, agility: 45, damage: 300, range: 5 },
          shapeId: "shape-dragon",
          position: { x: 9, y: 4 }
        },
        {
          id: "void_spawn_left",
          team: 'B',
          name: "Void Spawn L",
          personality: "Khát máu, điên cuồng lao vào đồ sát.",
          basicAttackDesc: "Lao vào cắn xé",
          skillDesc: "Tự nổ tung tạo hố đen nhỏ",
          stats: { hp: 600, maxHp: 600, agility: 75, damage: 80, range: 1 },
          shapeId: "shape-spawn",
          position: { x: 5, y: 6 }
        },
        {
          id: "void_spawn_right",
          team: 'B',
          name: "Void Spawn R",
          personality: "Khát máu, điên cuồng lao vào đồ sát.",
          basicAttackDesc: "Lao vào cắn xé",
          skillDesc: "Tự nổ tung tạo hố đen nhỏ",
          stats: { hp: 600, maxHp: 600, agility: 75, damage: 80, range: 1 },
          shapeId: "shape-spawn",
          position: { x: 13, y: 6 }
        }
      ],

      // Bơm thẳng kịch bản đã nối thành công vào máy chạy
      Master_Timeline: combinedTimeline,

      // Bay thẳng vào màn hình giả lập
      appStage: 'PHASE_5_SIMULATING'
    });
  };

  return (
    <button
      onClick={handleQuickStart}
      className="fixed top-4 right-4 z-50 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.8)] border-2 border-fuchsia-400 animate-pulse transition-all"
    >
      🚀 TEST MECHA VS DRAGON
    </button>
  );
}