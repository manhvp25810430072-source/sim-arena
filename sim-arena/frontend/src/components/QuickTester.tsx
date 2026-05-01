import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
// Bạn chỉ cần copy toàn bộ nội dung file của bạn và dán vào GIỮA 2 dấu ` ` này.
// Đừng lo về việc các block {} bị đứt đoạn, code ở dưới sẽ tự động nối lại!

const RAW_DATA_STRING = `{
"chunk_summary": "The battle ignites as the high-agility Drone X-1 immediately breaks formation, using its thrusters to bypass the frontline and ambush the archer Lyra. Reacting quickly, Lyra fires a shot but is violently slashed. Meanwhile, the towering T-900 revs its chainsaw, marching forward to meet the Guardian Kael in a brutal head-on collision, supported by toxic artillery fire from Zog. The serene forest is instantly corrupted by fire, oil, and poison.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 1247, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 462, "x": 5, "y": 8 },
"char-mage-a3": { "hp": 800, "x": 7, "y": 11 },
"char-boss-b1": { "hp": 2105, "x": 12, "y": 10 },
"char-assassin-b2": { "hp": 395, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 750, "x": 16, "y": 13 }
},
"timeline": [
{
"time_offset_ms": 100,
"type": "NARRATIVE",
"content": "The toxic mist churns violently as the machines invade the sacred grove."
},
{
"time_offset_ms": 150,
"type": "VFX",
"target_id": null,
"duration_ms": 4800,
"css_override": {
"filter": "sepia(40%) hue-rotate(80deg) saturate(180%) brightness(0.85) contrast(1.2)",
"mix-blend-mode": "multiply"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(10, 45, 15, 0.4)" },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 10, "radius": 15, "color": "rgba(34, 197, 94, 0.15)", "fill": true, "glow": true, "shadowBlur": 150, "shadowColor": "#22c55e" }
]
},
{
"time_offset_ms": 500,
"type": "SKILL",
"actor_id": "char-assassin-b2",
"target_id": "char-assassin-b2",
"hp_change": 0,
"is_critical": false
},
{
"time_offset_ms": 520,
"type": "VFX",
"target_id": "char-assassin-b2",
"duration_ms": 300,
"css_override": {
"filter": "brightness(3) drop-shadow(0 0 20px cyan)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)", "offset": 0 },
{ "transform": "scale(1.1) translateY(-3px)", "offset": 0.5 },
{ "transform": "scale(1)", "offset": 1 }
],
"options": { "duration": 300, "iterations": 1, "easing": "ease-in-out" }
}
},
{
"time_offset_ms": 550,
"type": "MOVE",
"actor_id": "char-assassin-b2",
"target_x": 6,
"target_y": 8
},
{
"time_offset_ms": 600,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 15, "startY": 7, "endX": 6, "endY": 8, "color": "#00ffff", "width": 6, "glow": true, "shadowBlur": 25, "shadowColor": "cyan" },
{ "action": "DRAW_LINE", "startX": 15.2, "startY": 7.2, "endX": 6.2, "endY": 8.2, "color": "#ffffff", "width": 2 },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 3, "color": "rgba(0, 255, 255, 0.3)", "fill": false, "lineWidth": 3, "glow": true, "shadowBlur": 10, "shadowColor": "white" }
],
"web_animation": {
"keyframes": [
{ "transform": "scale(1.03)" },
{ "transform": "scale(1)" }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 1200,
"type": "DIALOGUE",
"actor_id": "char-archer-a2",
"content": "Flank detected! I've got it!",
"emotion": "ALERT"
},
{
"time_offset_ms": 1500,
"type": "ATTACK",
"actor_id": "char-archer-a2",
"target_id": "char-assassin-b2",
"hp_change": -105,
"is_critical": false
},
{
"time_offset_ms": 1520,
"type": "VFX",
"target_id": null,
"duration_ms": 200,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 5, "startY": 8, "endX": 6, "endY": 8, "color": "#ffffff", "width": 2, "glow": true, "shadowBlur": 10, "shadowColor": "#ffff00" }
]
},
{
"time_offset_ms": 1550,
"type": "VFX",
"target_id": "char-assassin-b2",
"duration_ms": 500,
"css_override": {
"filter": "brightness(2.5) contrast(1.5) drop-shadow(0 0 20px white)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(15px, -5px) rotate(15deg) skewX(-15deg)", "offset": 0.1 },
{ "transform": "translate(-5px, 5px) rotate(-5deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(0.95)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 5.8, "centerY": 8.2, "radius": 0.4, "color": "#ffaa00", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "orange" },
{ "action": "DRAW_CIRCLE", "centerX": 6.2, "centerY": 7.8, "radius": 0.2, "color": "#ffffff", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 8.5, "radius": 0.25, "color": "#ff5500", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 2.5, "color": "rgba(255, 255, 255, 0.4)", "fill": false, "lineWidth": 2 }
]
},
{
"time_offset_ms": 1800,
"type": "MOVE",
"actor_id": "char-tank-a1",
"target_x": 11,
"target_y": 10
},
{
"time_offset_ms": 2000,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 12,
"target_y": 10
},
{
"time_offset_ms": 2050,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translateY(3px)" },
{ "transform": "translateY(-3px)" },
{ "transform": "translateY(0)" }
],
"options": { "duration": 150, "iterations": 2 }
}
},
{
"time_offset_ms": 2200,
"type": "DIALOGUE",
"actor_id": "char-boss-b1",
"content": "EXTERMINATE. ORGANIC. OBSTACLES.",
"emotion": "COLD"
},
{
"time_offset_ms": 2500,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -145,
"is_critical": true
},
{
"time_offset_ms": 2520,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 300,
"css_override": {
"filter": "brightness(2) contrast(1.5) drop-shadow(0 0 15px red)"
}
},
{
"time_offset_ms": 2550,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 900,
"css_override": {
"filter": "brightness(2.5) contrast(2.2) sepia(60%) hue-rotate(-20deg) saturate(350%) drop-shadow(0 0 30px #ff0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(-35px, 15px) rotate(-30deg) skewX(25deg) scale(0.75)", "offset": 0.05 },
{ "transform": "translate(25px, -10px) rotate(15deg) skewX(-15deg) scale(0.85)", "offset": 0.15 },
{ "transform": "translate(-15px, 5px) rotate(-5deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(0.95)", "offset": 1 }
],
"options": { "duration": 900, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 11, "endY": 10, "color": "#ffffff", "width": 14, "glow": true, "shadowBlur": 40, "shadowColor": "#ff0000" },
{ "action": "DRAW_CIRCLE", "centerX": 11.2, "centerY": 10.2, "radius": 1.8, "color": "rgba(255, 30, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.3, "centerY": 9.4, "radius": 0.8, "color": "rgba(255, 120, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.8, "centerY": 11.1, "radius": 0.6, "color": "rgba(255, 200, 0, 1)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 10, "radius": 6.5, "color": "rgba(255, 0, 0, 0.25)", "fill": false, "lineWidth": 5, "glow": true, "shadowBlur": 25, "shadowColor": "orange" }
]
},
{
"time_offset_ms": 2555,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "translate(15px, 15px) rotate(2deg)", "offset": 0 },
{ "transform": "translate(-12px, -12px) rotate(-2deg)", "offset": 0.2 },
{ "transform": "translate(8px, -8px) rotate(1deg)", "offset": 0.4 },
{ "transform": "translate(-5px, 5px)", "offset": 0.6 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 3000,
"type": "ATTACK",
"actor_id": "char-assassin-b2",
"target_id": "char-archer-a2",
"hp_change": -138,
"is_critical": true
},
{
"time_offset_ms": 3050,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 700,
"css_override": {
"filter": "brightness(0.3) contrast(2.5) saturate(300%) drop-shadow(0 0 15px #8b0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(-20px, 25px) rotate(-25deg) skewX(20deg)", "offset": 0.08 },
{ "transform": "translate(10px, 5px) rotate(10deg)", "offset": 0.25 },
{ "transform": "translate(0, 15px) scale(0.85)", "offset": 1 }
],
"options": { "duration": 700, "iterations": 1, "easing": "cubic-bezier(0.1, 0.9, 0.2, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 8, "endX": 4.2, "endY": 8.8, "color": "#ffffff", "width": 8, "glow": true, "shadowBlur": 30, "shadowColor": "#ff00ff" },
{ "action": "DRAW_LINE", "startX": 5.8, "startY": 7.5, "endX": 4.5, "endY": 8.2, "color": "#ff00ff", "width": 4 },
{ "action": "DRAW_CIRCLE", "centerX": 4.8, "centerY": 8.2, "radius": 1.5, "color": "rgba(139, 0, 0, 0.95)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 3.8, "centerY": 8.8, "radius": 0.8, "color": "rgba(200, 0, 0, 0.85)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.2, "centerY": 7.3, "radius": 0.5, "color": "rgba(255, 0, 0, 0.75)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 8, "radius": 5, "color": "rgba(255, 0, 255, 0.2)", "fill": false, "lineWidth": 3, "glow": true, "shadowBlur": 15, "shadowColor": "magenta" }
]
},
{
"time_offset_ms": 3500,
"type": "MOVE",
"actor_id": "char-mage-a3",
"target_x": 7,
"target_y": 11
},
{
"time_offset_ms": 4000,
"type": "ATTACK",
"actor_id": "char-tank-a1",
"target_id": "char-boss-b1",
"hp_change": -95,
"is_critical": false
},
{
"time_offset_ms": 4050,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 600,
"css_override": {
"filter": "brightness(1.8) drop-shadow(0 0 25px #22c55e)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(12px, -3px) skewX(-8deg)", "offset": 0.1 },
{ "transform": "translate(-6px, 2px) rotate(3deg)", "offset": 0.3 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11.8, "centerY": 10, "radius": 3, "color": "rgba(34, 197, 94, 0.7)", "fill": true, "glow": true, "shadowBlur": 35, "shadowColor": "lime" },
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 12, "endY": 10, "color": "#4ade80", "width": 10, "glow": true, "shadowBlur": 20, "shadowColor": "#22c55e" },
{ "action": "DRAW_CIRCLE", "centerX": 12.2, "centerY": 9.5, "radius": 0.4, "color": "#ffffff", "fill": true }
]
},
{
"time_offset_ms": 4300,
"type": "SKILL",
"actor_id": "char-artillery-b3",
"target_id": "char-tank-a1",
"hp_change": -108,
"is_critical": false
},
{
"time_offset_ms": 4310,
"type": "VFX",
"target_id": null,
"duration_ms": 350,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 16, "startY": 13, "endX": 13.5, "endY": 11.5, "color": "#adff2f", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#7fff00" }
]
},
{
"time_offset_ms": 4350,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(2) contrast(1.6) hue-rotate(60deg) saturate(400%) drop-shadow(0 0 40px #32cd32)",
"opacity": "0.85",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)", "offset": 0 },
{ "transform": "scale(1.15) skewY(15deg)", "offset": 0.08 },
{ "transform": "scale(0.85) skewY(-8deg) translateY(8px)", "offset": 0.25 },
{ "transform": "scale(0.95) translateY(12px)", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "easing": "ease-out", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 4.5, "color": "rgba(50, 205, 50, 0.85)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#adff2f" },
{ "action": "DRAW_CIRCLE", "centerX": 10.3, "centerY": 10.6, "radius": 1.5, "color": "rgba(173, 255, 47, 0.95)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.9, "centerY": 9.1, "radius": 1.1, "color": "rgba(127, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.8, "centerY": 9.2, "radius": 0.8, "color": "rgba(0, 255, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 7.5, "color": "rgba(50, 205, 50, 0.25)", "fill": false, "lineWidth": 5, "glow": true, "shadowBlur": 20, "shadowColor": "lime" }
]
},
{
"time_offset_ms": 4800,
"type": "NARRATIVE",
"content": "Wood splinters and metal sparks fly as the frontline becomes a chaotic grinder of nature versus machine."
},
{
"time_offset_ms": 4850,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 9, "color": "rgba(0, 0, 0, 0.5)", "fill": true, "glow": true, "shadowBlur": 80, "shadowColor": "black" },
{ "action": "DRAW_CIRCLE", "centerX": 11.2, "centerY": 10.5, "radius": 0.25, "color": "#ffaa00", "fill": true, "glow": true, "shadowBlur": 10, "shadowColor": "orange" },
{ "action": "DRAW_CIRCLE", "centerX": 10.8, "centerY": 9.6, "radius": 0.15, "color": "#ffdd00", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 8.5, "radius": 0.2, "color": "#ff0000", "fill": true }
]
}
]
}

{
"chunk_summary": "Elder Thalas unleashes a wave of life energy to save Lyra just as X-1 presses its relentless assault. Reinvigorated, Lyra showers the drone with toxic arrows. On the frontline, T-900 engulfs Guardian Kael in a torrent of mechanized fire, but Kael endures the agonizing flames, violently crushing the machine's legs with summoned deep roots. Zog repositions closer to bombard the nature backline.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 1067, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 487, "x": 5, "y": 8 },
"char-mage-a3": { "hp": 705, "x": 7, "y": 11 },
"char-boss-b1": { "hp": 1995, "x": 12, "y": 10 },
"char-assassin-b2": { "hp": 280, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 750, "x": 13, "y": 11 }
},
"timeline": [
{
"time_offset_ms": 5200,
"type": "DIALOGUE",
"actor_id": "char-mage-a3",
"content": "The forest embraces you, little one! Endure!",
"emotion": "RESOLUTE"
},
{
"time_offset_ms": 5500,
"type": "SKILL",
"actor_id": "char-mage-a3",
"target_id": "char-archer-a2",
"hp_change": 150,
"is_critical": false
},
{
"time_offset_ms": 5510,
"type": "VFX",
"target_id": null,
"duration_ms": 1500,
"css_override": {
"filter": "hue-rotate(40deg) saturate(150%) brightness(1.1)",
"mix-blend-mode": "screen"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 255, 127, 0.05)" },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 11, "radius": 15, "color": "rgba(0, 250, 154, 0.1)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "#00FF7F" }
]
},
{
"time_offset_ms": 5550,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 2500,
"css_override": {
"filter": "drop-shadow(0 0 30px #00FF7F) brightness(1.5) contrast(1.2) saturate(200%)",
"box-shadow": "inset 0 0 25px #00FA9A"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "offset": 0 },
{ "transform": "scale(1.15) translateY(-8px) rotate(2deg)", "offset": 0.2 },
{ "transform": "scale(1.05) translateY(-3px) rotate(-1deg)", "offset": 0.5 },
{ "transform": "scale(1.1) translateY(-6px) rotate(1deg)", "offset": 0.8 },
{ "transform": "scale(1) translateY(0)", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "easing": "cubic-bezier(0.25, 0.8, 0.25, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 7, "startY": 11, "endX": 5, "endY": 8, "color": "rgba(0, 255, 127, 0.8)", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#00FF7F" },
{ "action": "DRAW_LINE", "startX": 7.2, "startY": 10.8, "endX": 5.2, "endY": 7.8, "color": "rgba(255, 255, 255, 0.6)", "width": 3, "glow": true, "shadowBlur": 10, "shadowColor": "#FFFFFF" },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 8, "radius": 2.5, "color": "rgba(0, 250, 154, 0.5)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "#00FF7F" },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 8, "radius": 3.5, "color": "rgba(0, 255, 127, 0.3)", "fill": false, "lineWidth": 2 },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7.5, "radius": 0.2, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.8, "centerY": 8.5, "radius": 0.3, "color": "#CCFFCC", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.2, "centerY": 8.8, "radius": 0.25, "color": "#99FF99", "fill": true }
]
},
{
"time_offset_ms": 6000,
"type": "SKILL",
"actor_id": "char-archer-a2",
"target_id": "char-assassin-b2",
"hp_change": -115,
"is_critical": true
},
{
"time_offset_ms": 6010,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 5, "startY": 8, "endX": 6, "endY": 8, "color": "#9400D3", "width": 12, "glow": true, "shadowBlur": 40, "shadowColor": "#8A2BE2" },
{ "action": "DRAW_LINE", "startX": 5.2, "startY": 8.1, "endX": 5.8, "endY": 8.1, "color": "#00FF00", "width": 4, "glow": true, "shadowBlur": 20, "shadowColor": "#ADFF2F" }
]
},
{
"time_offset_ms": 6030,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translate(-10px, 5px) rotate(-2deg)", "offset": 0 },
{ "transform": "translate(8px, -6px) rotate(1deg)", "offset": 0.3 },
{ "transform": "translate(-4px, 3px) rotate(0deg)", "offset": 0.6 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 6050,
"type": "VFX",
"target_id": "char-assassin-b2",
"duration_ms": 2000,
"css_override": {
"filter": "brightness(2) contrast(1.8) sepia(100%) hue-rotate(220deg) saturate(350%) drop-shadow(0 0 25px #8A2BE2)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.8) translate(25px, -10px) rotate(25deg) skewX(-20deg)", "offset": 0.05 },
{ "transform": "scale(0.85) translate(-15px, 15px) rotate(-15deg) skewY(15deg)", "offset": 0.15 },
{ "transform": "scale(0.9) translate(5px, -5px) rotate(5deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 1800, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 2.5, "color": "rgba(138, 43, 226, 0.8)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#8A2BE2" },
{ "action": "DRAW_CIRCLE", "centerX": 6.2, "centerY": 7.8, "radius": 1.2, "color": "rgba(0, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 8.5, "radius": 0.5, "color": "rgba(148, 0, 211, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 8.8, "radius": 0.8, "color": "rgba(50, 205, 50, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 6, "color": "rgba(138, 43, 226, 0.2)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 6800,
"type": "ATTACK",
"actor_id": "char-assassin-b2",
"target_id": "char-archer-a2",
"hp_change": -125,
"is_critical": false
},
{
"time_offset_ms": 6820,
"type": "VFX",
"target_id": null,
"duration_ms": 250,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 8, "endX": 4.5, "endY": 8.5, "color": "#FFFFFF", "width": 5, "glow": true, "shadowBlur": 15, "shadowColor": "#00FFFF" },
{ "action": "DRAW_LINE", "startX": 6.2, "startY": 7.8, "endX": 4.8, "endY": 7.5, "color": "#AAAAAA", "width": 2 }
]
},
{
"time_offset_ms": 6850,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 800,
"css_override": {
"filter": "brightness(0.6) contrast(1.5) drop-shadow(0 0 10px #FF0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0)", "offset": 0 },
{ "transform": "translate(-15px, 8px) rotate(-12deg) skewX(10deg)", "offset": 0.1 },
{ "transform": "translate(5px, -3px) rotate(5deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 4.8, "centerY": 8.2, "radius": 1, "color": "rgba(200, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.3, "centerY": 8.6, "radius": 0.4, "color": "rgba(255, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7.7, "radius": 0.3, "color": "rgba(150, 0, 0, 0.7)", "fill": true }
]
},
{
"time_offset_ms": 7200,
"type": "SKILL",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -180,
"is_critical": true
},
{
"time_offset_ms": 7210,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"css_override": {
"filter": "sepia(80%) hue-rotate(-20deg) brightness(1.3) contrast(1.4)",
"mix-blend-mode": "multiply"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(15px, 15px) scale(1.02)", "offset": 0 },
{ "transform": "translate(-12px, -10px) scale(1.01)", "offset": 0.2 },
{ "transform": "translate(8px, -8px) scale(1.02)", "offset": 0.4 },
{ "transform": "translate(-5px, 5px) scale(1.01)", "offset": 0.6 },
{ "transform": "translate(0, 0) scale(1)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.15)" }
]
},
{
"time_offset_ms": 7230,
"type": "VFX",
"target_id": null,
"duration_ms": 2000,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 11, "endY": 10, "color": "rgba(255, 100, 0, 0.9)", "width": 30, "glow": true, "shadowBlur": 50, "shadowColor": "#FF4500" },
{ "action": "DRAW_LINE", "startX": 12, "startY": 9.8, "endX": 11, "endY": 9.2, "color": "rgba(255, 200, 0, 0.8)", "width": 15 },
{ "action": "DRAW_LINE", "startX": 12, "startY": 10.2, "endX": 11, "endY": 10.8, "color": "rgba(255, 50, 0, 0.8)", "width": 15 }
]
},
{
"time_offset_ms": 7250,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 3000,
"css_override": {
"filter": "brightness(3) contrast(2.5) sepia(100%) hue-rotate(-30deg) saturate(400%) drop-shadow(0 0 60px #FF3300)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0,0)", "offset": 0 },
{ "transform": "scale(0.8) translate(-25px, 5px) skewX(30deg) rotate(-15deg)", "offset": 0.05 },
{ "transform": "scale(0.85) translate(15px, -5px) skewX(-20deg) rotate(10deg)", "offset": 0.15 },
{ "transform": "scale(0.9) translate(-10px, 0) skewX(10deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(0, 0) skewX(0deg)", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 3.5, "color": "rgba(255, 140, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#FF4500" },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 9.5, "radius": 2, "color": "rgba(255, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.2, "centerY": 10.8, "radius": 1.5, "color": "rgba(255, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.2, "centerY": 10.2, "radius": 1, "color": "rgba(50, 50, 50, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 9.2, "radius": 0.8, "color": "rgba(0, 0, 0, 0.7)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 8, "color": "rgba(255, 69, 0, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 7800,
"type": "SKILL",
"actor_id": "char-tank-a1",
"target_id": "char-boss-b1",
"hp_change": -110,
"is_critical": false
},
{
"time_offset_ms": 7810,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "translateY(20px)", "offset": 0 },
{ "transform": "translateY(-15px)", "offset": 0.2 },
{ "transform": "translateY(10px)", "offset": 0.4 },
{ "transform": "translateY(-5px)", "offset": 0.6 },
{ "transform": "translateY(0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "cubic-bezier(0.36, 0, 0.66, -0.56)" }
}
},
{
"time_offset_ms": 7850,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 3000,
"css_override": {
"filter": "brightness(0.7) contrast(1.5) sepia(60%)",
"border-bottom": "15px solid #5C4033"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scaleY(1)", "offset": 0 },
{ "transform": "translateY(25px) scaleY(0.7) skewX(15deg)", "offset": 0.1 },
{ "transform": "translateY(20px) scaleY(0.75) skewX(-5deg)", "offset": 0.3 },
{ "transform": "translateY(25px) scaleY(0.7)", "offset": 1 }
],
"options": { "duration": 3000, "iterations": 1, "fill": "forwards", "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 12, "endY": 10, "color": "#3E2723", "width": 18, "glow": false },
{ "action": "DRAW_LINE", "startX": 11.2, "startY": 11, "endX": 12.2, "endY": 10.2, "color": "#4E342E", "width": 12 },
{ "action": "DRAW_LINE", "startX": 10.8, "startY": 9, "endX": 11.8, "endY": 9.8, "color": "#5D4037", "width": 14 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 4, "color": "rgba(92, 64, 51, 0.7)", "fill": false, "lineWidth": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 3, "color": "rgba(46, 139, 87, 0.5)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "green" },
{ "action": "DRAW_CIRCLE", "centerX": 12.5, "centerY": 10.5, "radius": 0.4, "color": "#BDBDBD", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 10.8, "radius": 0.3, "color": "#8C8C8C", "fill": true }
]
},
{
"time_offset_ms": 8200,
"type": "MOVE",
"actor_id": "char-artillery-b3",
"target_x": 13,
"target_y": 11
},
{
"time_offset_ms": 8250,
"type": "VFX",
"target_id": "char-artillery-b3",
"duration_ms": 1000,
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 13, "centerY": 11, "radius": 1.5, "color": "rgba(169, 169, 169, 0.5)", "fill": true }
]
},
{
"time_offset_ms": 8800,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-mage-a3",
"hp_change": -95,
"is_critical": false
},
{
"time_offset_ms": 8820,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 13, "startY": 11, "endX": 7, "endY": 11, "color": "#FF8C00", "width": 6, "glow": true, "shadowBlur": 15, "shadowColor": "orange" },
{ "action": "DRAW_CIRCLE", "centerX": 13, "centerY": 11, "radius": 1.5, "color": "rgba(255, 69, 0, 0.8)", "fill": true }
]
},
{
"time_offset_ms": 8850,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(1.5) contrast(1.2) drop-shadow(0 0 20px #696969)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) translate(-10px, 0) rotate(-5deg)", "offset": 0.1 },
{ "transform": "scale(0.95) translate(8px, 0) rotate(5deg)", "offset": 0.3 },
{ "transform": "scale(1) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 11, "radius": 2.5, "color": "rgba(105, 105, 105, 0.9)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "grey" },
{ "action": "DRAW_CIRCLE", "centerX": 7.2, "centerY": 10.8, "radius": 1.2, "color": "rgba(255, 140, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 11.5, "radius": 0.8, "color": "rgba(255, 69, 0, 0.7)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7.5, "centerY": 11.2, "radius": 0.5, "color": "rgba(0, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 10.5, "radius": 0.4, "color": "rgba(0, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_LINE", "startX": 7, "startY": 11, "endX": 5.5, "endY": 12.5, "color": "#A9A9A9", "width": 3 },
{ "action": "DRAW_LINE", "startX": 7, "startY": 11, "endX": 8.5, "endY": 9.5, "color": "#A9A9A9", "width": 3 }
]
},
{
"time_offset_ms": 8855,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translate(8px, 5px)", "offset": 0 },
{ "transform": "translate(-6px, -4px)", "offset": 0.3 },
{ "transform": "translate(3px, 2px)", "offset": 0.6 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 9500,
"type": "NARRATIVE",
"content": "Flames singe the ancient roots as nature violently resists the steel machine's brutal advance."
}
]
}
{
"chunk_summary": "The battlefield descends into pure chaos. Zog launches a Phosphorus shell that engulfs Guardian Kael in a nightmarish inferno of toxic flames. Despite melting away, Kael stubbornly hammers back at the towering T-900. In the backline, the desperate assassin X-1 deeply cuts Lyra, but she retaliates with a point-blank arrow. Elder Thalas steps up, blasting a surge of green magic that utterly short-circuits and destroys X-1. The mechanical flank is crushed, but Kael's life force is dwindling rapidly under heavy fire.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 777, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 347, "x": 5, "y": 8 },
"char-mage-a3": { "hp": 705, "x": 6, "y": 10 },
"char-boss-b1": { "hp": 1900, "x": 12, "y": 10 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 750, "x": 13, "y": 11 }
},
"timeline": [
{
"time_offset_ms": 10100,
"type": "NARRATIVE",
"content": "Phosphorus rain drops from the sky, engulfing the Guardian in a horrifying mix of toxic gas and searing flames."
},
{
"time_offset_ms": 10150,
"type": "VFX",
"target_id": null,
"duration_ms": 4000,
"css_override": {
"filter": "sepia(60%) hue-rotate(40deg) saturate(200%) brightness(0.8)",
"mix-blend-mode": "multiply"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(173, 255, 47, 0.1)" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 8, "color": "rgba(200, 255, 0, 0.15)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "#adff2f" }
]
},
{
"time_offset_ms": 10300,
"type": "SKILL",
"actor_id": "char-artillery-b3",
"target_id": "char-tank-a1",
"hp_change": -150,
"is_critical": true
},
{
"time_offset_ms": 10310,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"web_animation": {
"keyframes": [
{ "transform": "translate(20px, -15px) scale(1.05) rotate(3deg)", "offset": 0 },
{ "transform": "translate(-15px, 20px) scale(1) rotate(-2deg)", "offset": 0.2 },
{ "transform": "translate(10px, -10px) scale(1.02) rotate(1deg)", "offset": 0.4 },
{ "transform": "translate(0, 0) scale(1) rotate(0)", "offset": 1 }
],
"options": { "duration": 300, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 255, 255, 0.3)" }
]
},
{
"time_offset_ms": 10320,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 4000,
"css_override": {
"filter": "brightness(2.5) contrast(1.8) sepia(100%) hue-rotate(60deg) saturate(500%) drop-shadow(0 0 40px #adff2f)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0,0) skew(0deg)", "offset": 0 },
{ "transform": "scale(0.8) translate(-25px, 30px) skewX(25deg) rotate(-15deg)", "offset": 0.05 },
{ "transform": "scale(0.85) translate(15px, -15px) skewX(-15deg) rotate(10deg)", "offset": 0.15 },
{ "transform": "scale(0.9) translate(-5px, 10px) skewX(5deg) rotate(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(0, 5px) skew(0deg) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 13, "startY": 11, "endX": 11, "endY": 10, "color": "#ffffff", "width": 18, "glow": true, "shadowBlur": 50, "shadowColor": "#adff2f" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 4, "color": "rgba(173, 255, 47, 0.8)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "#7fff00" },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 10.5, "radius": 2, "color": "rgba(255, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.8, "centerY": 9.2, "radius": 1.5, "color": "rgba(200, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.8, "centerY": 8.5, "radius": 1, "color": "rgba(50, 205, 50, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 8, "color": "rgba(173, 255, 47, 0.2)", "fill": false, "lineWidth": 8 }
]
},
{
"time_offset_ms": 10800,
"type": "ATTACK",
"actor_id": "char-tank-a1",
"target_id": "char-boss-b1",
"hp_change": -95,
"is_critical": false
},
{
"time_offset_ms": 10820,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 800,
"css_override": {
"filter": "brightness(1.5) sepia(50%) hue-rotate(-20deg) drop-shadow(0 0 20px #8B4513)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0)", "offset": 0 },
{ "transform": "translate(15px, -5px) rotate(8deg)", "offset": 0.1 },
{ "transform": "translate(-8px, 5px) rotate(-4deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 12, "endY": 10, "color": "#8B4513", "width": 16, "glow": true, "shadowBlur": 20, "shadowColor": "#D2691E" },
{ "action": "DRAW_LINE", "startX": 11.5, "startY": 10.5, "endX": 12.2, "endY": 9.8, "color": "#A0522D", "width": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 1.5, "color": "rgba(139, 69, 19, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 12.5, "centerY": 10.2, "radius": 0.5, "color": "rgba(210, 105, 30, 0.9)", "fill": true }
]
},
{
"time_offset_ms": 11100,
"type": "ATTACK",
"actor_id": "char-assassin-b2",
"target_id": "char-archer-a2",
"hp_change": -140,
"is_critical": false
},
{
"time_offset_ms": 11120,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 900,
"css_override": {
"filter": "brightness(0.3) contrast(2.5) saturate(400%) drop-shadow(0 0 25px #ff0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(-25px, 15px) rotate(-20deg) skewX(15deg)", "offset": 0.08 },
{ "transform": "translate(15px, -5px) rotate(10deg)", "offset": 0.25 },
{ "transform": "translate(0, 5px) scale(0.9)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "cubic-bezier(0.1, 0.9, 0.2, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 8, "endX": 4.5, "endY": 8.5, "color": "#00ffff", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#00ffff" },
{ "action": "DRAW_LINE", "startX": 6.2, "startY": 7.8, "endX": 4.2, "endY": 8.2, "color": "#ffffff", "width": 3 },
{ "action": "DRAW_CIRCLE", "centerX": 4.8, "centerY": 8.2, "radius": 2, "color": "rgba(200, 0, 0, 0.95)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4, "centerY": 8.8, "radius": 1, "color": "rgba(255, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7.5, "radius": 0.6, "color": "rgba(150, 0, 0, 0.9)", "fill": true }
]
},
{
"time_offset_ms": 11500,
"type": "DIALOGUE",
"actor_id": "char-archer-a2",
"content": "Agh! Get away from me, tin can!",
"emotion": "AGGRESSIVE"
},
{
"time_offset_ms": 11780,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 400,
"css_override": {
"filter": "brightness(2) drop-shadow(0 0 30px #00ff00)"
}
},
{
"time_offset_ms": 11800,
"type": "ATTACK",
"actor_id": "char-archer-a2",
"target_id": "char-assassin-b2",
"hp_change": -180,
"is_critical": true
},
{
"time_offset_ms": 11820,
"type": "VFX",
"target_id": null,
"duration_ms": 250,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 5, "startY": 8, "endX": 6, "endY": 8, "color": "#ffffff", "width": 12, "glow": true, "shadowBlur": 40, "shadowColor": "#00ff00" }
]
},
{
"time_offset_ms": 11830,
"type": "VFX",
"target_id": "char-assassin-b2",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(3) contrast(2) saturate(300%) drop-shadow(0 0 50px #00ff00)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0,0)", "offset": 0 },
{ "transform": "scale(1.2) translate(30px, -15px) rotate(35deg) skewX(-20deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(-10px, 10px) rotate(-15deg)", "offset": 0.2 },
{ "transform": "scale(0.85) translate(5px, 0) rotate(5deg)", "offset": 0.4 },
{ "transform": "scale(0.9) translate(0,0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 3, "color": "rgba(0, 255, 0, 0.9)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#adff2f" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 7.5, "radius": 1.5, "color": "#ffffff", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 8.2, "radius": 0.8, "color": "rgba(173, 255, 47, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 8.5, "radius": 0.5, "color": "#ffffff", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 7, "color": "rgba(0, 255, 0, 0.3)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 12100,
"type": "MOVE",
"actor_id": "char-mage-a3",
"target_x": 6,
"target_y": 10
},
{
"time_offset_ms": 12550,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 500,
"css_override": {
"filter": "brightness(2.5) drop-shadow(0 0 40px #00ff7f)"
}
},
{
"time_offset_ms": 12600,
"type": "ATTACK",
"actor_id": "char-mage-a3",
"target_id": "char-assassin-b2",
"hp_change": -100,
"is_critical": false
},
{
"time_offset_ms": 12610,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"css_override": {
"filter": "hue-rotate(90deg) saturate(300%) brightness(1.2)"
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 10, "endX": 6, "endY": 8, "color": "#ffffff", "width": 25, "glow": true, "shadowBlur": 80, "shadowColor": "#00fa9a" },
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 250, 154, 0.2)" }
]
},
{
"time_offset_ms": 12650,
"type": "VFX",
"target_id": "char-assassin-b2",
"duration_ms": 3000,
"css_override": {
"transform-origin": "bottom center",
"mix-blend-mode": "luminosity"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)", "filter": "brightness(4) drop-shadow(0 0 50px #00ff7f)", "offset": 0 },
{ "transform": "scale(1.2) skewX(40deg) translate(-15px, 10px)", "filter": "brightness(5) hue-rotate(180deg) drop-shadow(0 0 80px white)", "offset": 0.1 },
{ "transform": "scale(0.8) skewX(-50deg) translate(20px, -5px)", "filter": "brightness(0.3) grayscale(100%)", "offset": 0.25 },
{ "transform": "scale(0.6) scaleY(0.4) translate(0, 25px)", "filter": "brightness(0.1) grayscale(100%) blur(2px)", "offset": 0.5 },
{ "transform": "scale(0.4) scaleY(0.1) translate(0, 40px)", "filter": "brightness(0) grayscale(100%) blur(4px) opacity(0)", "offset": 1 }
],
"options": { "duration": 2800, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.55, 0.085, 0.68, 0.53)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 4, "color": "rgba(0, 250, 154, 0.8)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "#00ff7f" },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 8.5, "radius": 1, "color": "#000000", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 7.5, "radius": 1.2, "color": "#333333", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 8, "radius": 8, "color": "rgba(0, 255, 127, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 13000,
"type": "DIALOGUE",
"actor_id": "char-assassin-b2",
"content": "SYSTEM... CRITICAL... SHUTDOWN...",
"emotion": "COLD"
},
{
"time_offset_ms": 13600,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -140,
"is_critical": false
},
{
"time_offset_ms": 13620,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(1.5) contrast(2) sepia(40%) drop-shadow(0 0 20px #ff4500)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(-20px, 10px) rotate(-15deg) skewX(10deg)", "offset": 0.1 },
{ "transform": "translate(10px, -5px) rotate(5deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 11, "endY": 10, "color": "#ffffff", "width": 14, "glow": true, "shadowBlur": 25, "shadowColor": "#ff4500" },
{ "action": "DRAW_CIRCLE", "centerX": 11.2, "centerY": 10, "radius": 2, "color": "rgba(255, 69, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.8, "centerY": 10.5, "radius": 0.8, "color": "rgba(255, 215, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 9.5, "radius": 0.5, "color": "#ffffff", "fill": true }
]
},
{
"time_offset_ms": 13625,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"web_animation": {
"keyframes": [
{ "transform": "translate(12px, 12px)", "offset": 0 },
{ "transform": "translate(-8px, -8px)", "offset": 0.2 },
{ "transform": "translate(5px, 5px)", "offset": 0.4 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 14200,
"type": "DIALOGUE",
"actor_id": "char-tank-a1",
"content": "The roots hold strong! I will not fall!",
"emotion": "RESOLUTE"
},
{
"time_offset_ms": 14800,
"type": "NARRATIVE",
"content": "With the mechanical assassin dismantled, the natural backline breathes, but the Vanguard Guardian is crumbling under the machine's brute force."
}
]
}
{
"chunk_summary": "The frontline turns into a blazing furnace as T-900 activates its Flamethrower, bathing Kael in liquid fire. Though charred and on the verge of collapse, Kael slams his hammer into the earth, summoning massive deep roots to crush and lock the machine in place. With X-1 dealt with, Lyra and Thalas rush forward, unleashing a barrage of toxic arrows and concentrated magic into the rooted T-900, stripping away its thick armor.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 322, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 347, "x": 8, "y": 8 },
"char-mage-a3": { "hp": 705, "x": 9, "y": 11 },
"char-boss-b1": { "hp": 1485, "x": 12, "y": 10 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 750, "x": 13, "y": 11 }
},
"timeline": [
{
"time_offset_ms": 15050,
"type": "NARRATIVE",
"content": "The frontline turns into a blazing furnace as T-900 revs its engines for a catastrophic overload."
},
{
"time_offset_ms": 15060,
"type": "VFX",
"target_id": null,
"duration_ms": 1500,
"web_animation": {
"keyframes": [
{ "transform": "translate(2px, 2px)" },
{ "transform": "translate(-2px, -2px)" },
{ "transform": "translate(0, 0)" }
],
"options": { "duration": 50, "iterations": 30 }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.05)" }
]
},
{
"time_offset_ms": 15200,
"type": "SKILL",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -210,
"is_critical": true
},
{
"time_offset_ms": 15210,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"css_override": {
"filter": "sepia(100%) hue-rotate(-10deg) saturate(300%) brightness(1.2)",
"mix-blend-mode": "overlay"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 140, 0, 0.2)" }
]
},
{
"time_offset_ms": 15250,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 3000,
"css_override": {
"filter": "brightness(2.5) contrast(2) sepia(100%) hue-rotate(-20deg) saturate(500%) drop-shadow(0 0 40px #FF3300)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 0 },
{ "transform": "scale(0.85) translate(-15px, 10px) skewX(-20deg) rotate(-5deg)", "offset": 0.1 },
{ "transform": "scale(0.9) translate(15px, -10px) skewX(20deg) rotate(5deg)", "offset": 0.2 },
{ "transform": "scale(0.85) translate(-10px, 8px) skewX(-10deg) rotate(-3deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(5px, -5px) skewX(10deg) rotate(2deg)", "offset": 0.5 },
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 3000, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10.5, "endY": 9.5, "color": "rgba(255, 255, 255, 0.9)", "width": 12, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF" },
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10, "endY": 9, "color": "rgba(255, 69, 0, 0.9)", "width": 45, "glow": true, "shadowBlur": 60, "shadowColor": "#FF0000" },
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10, "endY": 11, "color": "rgba(255, 140, 0, 0.9)", "width": 40, "glow": true, "shadowBlur": 50, "shadowColor": "#FF8C00" },
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 11.5, "endY": 12, "color": "rgba(255, 215, 0, 0.8)", "width": 30, "glow": true, "shadowBlur": 40, "shadowColor": "#FFA500" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 4, "color": "rgba(255, 50, 0, 0.85)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#FF4500" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 7, "color": "rgba(255, 140, 0, 0.3)", "fill": false, "lineWidth": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 10.2, "centerY": 9.2, "radius": 1.5, "color": "rgba(255, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.8, "centerY": 10.8, "radius": 2, "color": "rgba(255, 100, 0, 0.8)", "fill": true }
]
},
{
"time_offset_ms": 15800,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-tank-a1",
"hp_change": -110,
"is_critical": false
},
{
"time_offset_ms": 15820,
"type": "VFX",
"target_id": null,
"duration_ms": 200,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 13, "startY": 11, "endX": 11.5, "endY": 10.5, "color": "#FFD700", "width": 8, "glow": true, "shadowBlur": 15, "shadowColor": "#FFA500" }
]
},
{
"time_offset_ms": 15850,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(1.5) contrast(1.5) drop-shadow(0 0 20px #808080)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) translate(-10px, 10px) rotate(-8deg)", "offset": 0.1 },
{ "transform": "scale(0.95) translate(5px, -5px) rotate(4deg)", "offset": 0.3 },
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 2.5, "color": "rgba(105, 105, 105, 0.9)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "#A9A9A9" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 4, "color": "rgba(255, 140, 0, 0.6)", "fill": false, "lineWidth": 4, "glow": true, "shadowBlur": 10, "shadowColor": "#FF4500" },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 10.5, "radius": 0.8, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 9.5, "radius": 0.5, "color": "#FFD700", "fill": true }
]
},
{
"time_offset_ms": 16200,
"type": "SKILL",
"actor_id": "char-tank-a1",
"target_id": "char-boss-b1",
"hp_change": -150,
"is_critical": false
},
{
"time_offset_ms": 16210,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "translateY(25px) scale(1.02)", "offset": 0 },
{ "transform": "translateY(-15px) scale(1.01)", "offset": 0.2 },
{ "transform": "translateY(10px) scale(1.02)", "offset": 0.4 },
{ "transform": "translateY(-5px) scale(1.01)", "offset": 0.6 },
{ "transform": "translateY(0) scale(1)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "cubic-bezier(0.36, 0, 0.66, -0.56)" }
}
},
{
"time_offset_ms": 16250,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 5000,
"css_override": {
"filter": "sepia(60%) hue-rotate(50deg) brightness(0.8) contrast(1.5)",
"transform-origin": "bottom center"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scaleY(1)", "offset": 0 },
{ "transform": "translateY(15px) scaleY(0.9) skewX(10deg)", "offset": 0.1 },
{ "transform": "translateY(30px) scaleY(0.8) skewX(-5deg)", "offset": 0.2 },
{ "transform": "translateY(25px) scaleY(0.85)", "offset": 0.3 },
{ "transform": "translateY(30px) scaleY(0.8)", "offset": 1 }
],
"options": { "duration": 4000, "iterations": 1, "fill": "forwards", "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 10.5, "startY": 11.5, "endX": 12, "endY": 10, "color": "#2E8B57", "width": 25, "glow": true, "shadowBlur": 20, "shadowColor": "#006400" },
{ "action": "DRAW_LINE", "startX": 13.5, "startY": 8.5, "endX": 12, "endY": 10, "color": "#3E2723", "width": 22 },
{ "action": "DRAW_LINE", "startX": 11, "startY": 8.5, "endX": 12, "endY": 10, "color": "#4E342E", "width": 18 },
{ "action": "DRAW_LINE", "startX": 13, "startY": 11.5, "endX": 12, "endY": 10, "color": "#556B2F", "width": 20 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 4.5, "color": "rgba(62, 39, 35, 0.8)", "fill": false, "lineWidth": 12 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 3.5, "color": "rgba(46, 139, 87, 0.9)", "fill": false, "lineWidth": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 6, "color": "rgba(139, 69, 19, 0.3)", "fill": false, "lineWidth": 5 }
]
},
{
"time_offset_ms": 16400,
"type": "DIALOGUE",
"actor_id": "char-tank-a1",
"content": "You shall not pass, abomination!",
"emotion": "AGONY"
},
{
"time_offset_ms": 16800,
"type": "MOVE",
"actor_id": "char-archer-a2",
"target_x": 8,
"target_y": 8
},
{
"time_offset_ms": 17200,
"type": "SKILL",
"actor_id": "char-archer-a2",
"target_id": "char-boss-b1",
"hp_change": -180,
"is_critical": true
},
{
"time_offset_ms": 17210,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 8, "startY": 8, "endX": 12, "endY": 10, "color": "#00FF7F", "width": 14, "glow": true, "shadowBlur": 40, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 8, "startY": 7.5, "endX": 12, "endY": 9.5, "color": "#32CD32", "width": 8 },
{ "action": "DRAW_LINE", "startX": 8, "startY": 8.5, "endX": 12, "endY": 10.5, "color": "#ADFF2F", "width": 8 },
{ "action": "DRAW_LINE", "startX": 8, "startY": 7, "endX": 12, "endY": 9, "color": "#00FF00", "width": 5 },
{ "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 12, "endY": 11, "color": "#7FFF00", "width": 5 }
]
},
{
"time_offset_ms": 17250,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 2000,
"css_override": {
"filter": "brightness(2) contrast(1.8) sepia(100%) hue-rotate(90deg) saturate(400%) drop-shadow(0 0 35px #00FF00)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(1.1) translate(-15px, 5px) skewX(15deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(10px, -5px) skewX(-10deg)", "offset": 0.15 },
{ "transform": "scale(1.05) translate(-5px, 8px)", "offset": 0.25 },
{ "transform": "scale(0.95) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 3.5, "color": "rgba(0, 255, 0, 0.9)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#00FF00" },
{ "action": "DRAW_CIRCLE", "centerX": 12.5, "centerY": 9.5, "radius": 1.5, "color": "rgba(173, 255, 47, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 10.5, "radius": 1.2, "color": "rgba(50, 205, 50, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 12.2, "centerY": 10.8, "radius": 0.8, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.8, "centerY": 9.2, "radius": 1, "color": "rgba(0, 250, 154, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 8, "color": "rgba(0, 255, 0, 0.25)", "fill": false, "lineWidth": 6, "glow": true, "shadowBlur": 20, "shadowColor": "lime" }
]
},
{
"time_offset_ms": 17800,
"type": "MOVE",
"actor_id": "char-mage-a3",
"target_x": 9,
"target_y": 11
},
{
"time_offset_ms": 18200,
"type": "ATTACK",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -85,
"is_critical": false
},
{
"time_offset_ms": 18220,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 9, "startY": 11, "endX": 12, "endY": 10, "color": "#E0FFFF", "width": 10, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF" },
{ "action": "DRAW_LINE", "startX": 9, "startY": 11, "endX": 12, "endY": 10, "color": "#00CED1", "width": 4 }
]
},
{
"time_offset_ms": 18250,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(2) contrast(1.5) drop-shadow(0 0 25px #00FFFF)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) translate(-5px, 0) rotate(-3deg)", "offset": 0.1 },
{ "transform": "scale(0.95) translate(5px, 0) rotate(3deg)", "offset": 0.3 },
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 2.5, "color": "rgba(0, 206, 209, 0.9)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "cyan" },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 4, "color": "rgba(0, 255, 255, 0.5)", "fill": false, "lineWidth": 4 },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 10.5, "radius": 0.6, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 12.5, "centerY": 9.5, "radius": 0.4, "color": "#FFFFFF", "fill": true }
]
},
{
"time_offset_ms": 18800,
"type": "DIALOGUE",
"actor_id": "char-boss-b1",
"content": "MOBILITY COMPROMISED. REROUTING POWER TO OFFENSE.",
"emotion": "COLD"
},
{
"time_offset_ms": 19200,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -135,
"is_critical": false
},
{
"time_offset_ms": 19220,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"web_animation": {
"keyframes": [
{ "transform": "translate(-10px, -5px)", "offset": 0 },
{ "transform": "translate(8px, 4px)", "offset": 0.2 },
{ "transform": "translate(-4px, -2px)", "offset": 0.4 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 300, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 19250,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 900,
"css_override": {
"filter": "brightness(0.5) contrast(2) saturate(250%) drop-shadow(0 0 15px #FF0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(-15px, 8px) rotate(-20deg) skewX(15deg)", "offset": 0.1 },
{ "transform": "translate(10px, -5px) rotate(10deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 11, "endY": 10, "color": "#E0E0E0", "width": 18, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF" },
{ "action": "DRAW_LINE", "startX": 12, "startY": 9.8, "endX": 11, "endY": 10.2, "color": "#808080", "width": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 2, "color": "rgba(255, 50, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 9.5, "radius": 0.8, "color": "rgba(255, 140, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.2, "centerY": 10.6, "radius": 0.5, "color": "#FFFF00", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 5, "color": "rgba(255, 0, 0, 0.3)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 19800,
"type": "NARRATIVE",
"content": "Kael is on his last breath, his wooden armor charred black, but the mechanical terror is finally buckling under the focused barrage."
}
]
}
{
"chunk_summary": "The unrelenting mechanical assault finally overwhelms the Guardian. Zog's toxic bomb shatters Kael's remaining defenses before T-900's chainsaw brutally executes him, tearing through his wooden armor. Enraged by the fall of their protector, Lyra unleashes a devastating Rain of Poison Arrows over the mechanical forces. Crushing the remnants of Kael's roots beneath its treads, T-900 slowly marches toward the surviving nature defenders, dripping with sap and oil.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 0, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 347, "x": 8, "y": 8 },
"char-mage-a3": { "hp": 705, "x": 9, "y": 11 },
"char-boss-b1": { "hp": 1220, "x": 10, "y": 9 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 585, "x": 13, "y": 11 }
},
"timeline": [
{
"time_offset_ms": 20100,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-tank-a1",
"hp_change": -105,
"is_critical": false
},
{
"time_offset_ms": 20120,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 13, "startY": 11, "endX": 11.5, "endY": 10.5, "color": "rgba(173, 255, 47, 0.9)", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#adff2f" },
{ "action": "DRAW_CIRCLE", "centerX": 12.2, "centerY": 10.8, "radius": 0.5, "color": "rgba(255, 255, 255, 0.8)", "fill": true }
]
},
{
"time_offset_ms": 20150,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(1.5) contrast(1.8) sepia(100%) hue-rotate(60deg) saturate(400%) drop-shadow(0 0 30px #adff2f)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skewX(0deg) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) skewX(15deg) translate(-10px, 5px)", "offset": 0.1 },
{ "transform": "scale(0.95) skewX(-10deg) translate(8px, -3px)", "offset": 0.3 },
{ "transform": "scale(1) skewX(0deg) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 3.5, "color": "rgba(173, 255, 47, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#7fff00" },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 9.5, "radius": 1.2, "color": "rgba(255, 255, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.2, "centerY": 10.5, "radius": 0.8, "color": "rgba(50, 205, 50, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 6, "color": "rgba(173, 255, 47, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 20580,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translate(4px, -4px) rotate(1deg)" },
{ "transform": "translate(-4px, 4px) rotate(-1deg)" }
],
"options": { "duration": 50, "iterations": 8 }
}
},
{
"time_offset_ms": 20600,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-tank-a1",
"hp_change": -217,
"is_critical": true
},
{
"time_offset_ms": 20610,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"css_override": {
"filter": "saturate(300%) contrast(200%) brightness(1.5) hue-rotate(-20deg)",
"mix-blend-mode": "color-burn"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(139, 0, 0, 0.3)" }
]
},
{
"time_offset_ms": 20650,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 3000,
"css_override": {
"filter": "brightness(0.3) contrast(250%) sepia(80%) hue-rotate(-50deg) saturate(400%) drop-shadow(0 0 40px #8b0000)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) rotate(0deg) translate(0, 0)", "offset": 0 },
{ "transform": "scale(1.1) rotate(-15deg) translate(-20px, -10px) skew(20deg)", "offset": 0.05 },
{ "transform": "scale(0.9) rotate(25deg) translate(15px, 15px) skew(-15deg)", "offset": 0.15 },
{ "transform": "scale(0.85) rotate(40deg) translate(25px, 25px) skew(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.8) rotate(45deg) translate(30px, 30px)", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10, "endY": 10.5, "color": "#ffffff", "width": 25, "glow": true, "shadowBlur": 50, "shadowColor": "#ff0000" },
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 9, "endY": 11.5, "color": "rgba(255, 0, 0, 0.9)", "width": 15 },
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 10.5, "endY": 8.5, "color": "rgba(139, 0, 0, 0.9)", "width": 12 },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 10.2, "radius": 4, "color": "rgba(139, 0, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#8b0000" },
{ "action": "DRAW_CIRCLE", "centerX": 9.5, "centerY": 11, "radius": 1.5, "color": "rgba(200, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.2, "centerY": 8.8, "radius": 1.2, "color": "rgba(150, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 9, "color": "rgba(255, 0, 0, 0.2)", "fill": false, "lineWidth": 8, "glow": true, "shadowBlur": 20, "shadowColor": "red" }
]
},
{
"time_offset_ms": 20655,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"web_animation": {
"keyframes": [
{ "transform": "translate(-15px, 20px) rotate(-3deg)", "offset": 0 },
{ "transform": "translate(12px, -15px) rotate(2deg)", "offset": 0.15 },
{ "transform": "translate(-10px, 10px) rotate(-1deg)", "offset": 0.3 },
{ "transform": "translate(5px, -5px) rotate(1deg)", "offset": 0.5 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 21000,
"type": "DIALOGUE",
"actor_id": "char-tank-a1",
"content": "The forest... will endure...",
"emotion": "AGONY"
},
{
"time_offset_ms": 21300,
"type": "VFX",
"target_id": "char-tank-a1",
"duration_ms": 5000,
"css_override": {
"filter": "grayscale(100%) brightness(0.1) contrast(300%) blur(2px)",
"transform-origin": "bottom center"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(0.8) rotate(45deg) translate(30px, 30px)", "opacity": "1", "offset": 0 },
{ "transform": "scale(0.8) scaleY(0.5) rotate(45deg) translate(30px, 40px)", "opacity": "0.5", "filter": "blur(4px)", "offset": 0.4 },
{ "transform": "scale(0.9) scaleY(0.1) rotate(50deg) translate(30px, 60px)", "opacity": "0", "filter": "blur(8px)", "offset": 1 }
],
"options": { "duration": 3000, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.55, 0.085, 0.68, 0.53)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10.5, "radius": 4.5, "color": "rgba(20, 10, 5, 0.9)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "#000000" },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 11, "radius": 2, "color": "rgba(60, 20, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 11.8, "centerY": 10.2, "radius": 1.5, "color": "rgba(30, 15, 0, 0.9)", "fill": true }
]
},
{
"time_offset_ms": 21800,
"type": "DIALOGUE",
"actor_id": "char-archer-a2",
"content": "KAEL!! You soulless rust-buckets will pay!",
"emotion": "AGGRESSIVE"
},
{
"time_offset_ms": 21850,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(2) contrast(1.5) saturate(300%) drop-shadow(0 0 30px #00FF7F)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)" },
{ "transform": "scale(1.1) translateY(-5px)" },
{ "transform": "scale(1)" }
],
"options": { "duration": 500, "iterations": 2, "easing": "ease-in-out" }
}
},
{
"time_offset_ms": 22200,
"type": "SKILL",
"actor_id": "char-archer-a2",
"target_id": "char-boss-b1",
"hp_change": -180,
"is_critical": true
},
{
"time_offset_ms": 22250,
"type": "SKILL",
"actor_id": "char-archer-a2",
"target_id": "char-artillery-b3",
"hp_change": -165,
"is_critical": false
},
{
"time_offset_ms": 22280,
"type": "VFX",
"target_id": null,
"duration_ms": 2500,
"css_override": {
"filter": "sepia(40%) hue-rotate(90deg) brightness(0.6) contrast(1.5)",
"mix-blend-mode": "multiply"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 50, 20, 0.4)" }
]
},
{
"time_offset_ms": 22300,
"type": "VFX",
"target_id": null,
"duration_ms": 2000,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 10, "startY": -2, "endX": 12, "endY": 10, "color": "#00FF7F", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 14, "startY": -1, "endX": 13, "endY": 11, "color": "#00FF7F", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 8, "startY": -5, "endX": 11, "endY": 9, "color": "#32CD32", "width": 5 },
{ "action": "DRAW_LINE", "startX": 12, "startY": -3, "endX": 14, "endY": 12, "color": "#32CD32", "width": 4 },
{ "action": "DRAW_LINE", "startX": 16, "startY": 0, "endX": 12.5, "endY": 10.5, "color": "#00FF00", "width": 7 },
{ "action": "DRAW_LINE", "startX": 11, "startY": -4, "endX": 13.5, "endY": 10.5, "color": "#7FFF00", "width": 6 },
{ "action": "DRAW_CIRCLE", "centerX": 12.2, "centerY": 10.2, "radius": 3.5, "color": "rgba(0, 255, 127, 0.7)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#00FF7F" },
{ "action": "DRAW_CIRCLE", "centerX": 13, "centerY": 11, "radius": 2.5, "color": "rgba(0, 250, 154, 0.6)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "#00FA9A" },
{ "action": "DRAW_CIRCLE", "centerX": 11.5, "centerY": 9.5, "radius": 1.5, "color": "#ffffff", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 13.2, "centerY": 11.2, "radius": 1, "color": "#ffffff", "fill": true }
],
"web_animation": {
"keyframes": [
{ "transform": "translateY(15px)", "offset": 0 },
{ "transform": "translateY(-10px)", "offset": 0.2 },
{ "transform": "translateY(5px)", "offset": 0.4 },
{ "transform": "translateY(0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 22400,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 2500,
"css_override": {
"filter": "brightness(1.5) sepia(100%) hue-rotate(70deg) saturate(300%) drop-shadow(0 0 25px #00FF00)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(-8px) scale(0.98)" },
{ "transform": "translateX(8px) scale(1.02)" }
],
"options": { "duration": 80, "iterations": 25, "direction": "alternate" }
}
},
{
"time_offset_ms": 22420,
"type": "VFX",
"target_id": "char-artillery-b3",
"duration_ms": 2000,
"css_override": {
"filter": "brightness(1.2) sepia(80%) hue-rotate(80deg) saturate(250%) drop-shadow(0 0 20px #32CD32)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0)" },
{ "transform": "translateY(10px) skewX(5deg)" },
{ "transform": "translateY(0)" }
],
"options": { "duration": 150, "iterations": 10 }
}
},
{
"time_offset_ms": 23200,
"type": "ATTACK",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -85,
"is_critical": false
},
{
"time_offset_ms": 23220,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 9, "startY": 11, "endX": 12, "endY": 10, "color": "#ffffff", "width": 12, "glow": true, "shadowBlur": 35, "shadowColor": "#00FFFF" },
{ "action": "DRAW_LINE", "startX": 9.2, "startY": 10.8, "endX": 11.8, "endY": 9.8, "color": "#00BFFF", "width": 6 }
]
},
{
"time_offset_ms": 23250,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(2) drop-shadow(0 0 20px cyan)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scale(1)", "offset": 0 },
{ "transform": "translateY(-10px) scale(1.05) rotate(5deg)", "offset": 0.1 },
{ "transform": "translateY(5px) scale(0.98) rotate(-2deg)", "offset": 0.3 },
{ "transform": "translateY(0) scale(1) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 2.5, "color": "rgba(0, 255, 255, 0.8)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "cyan" },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 5, "color": "rgba(0, 191, 255, 0.3)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 23800,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 10,
"target_y": 9
},
{
"time_offset_ms": 23820,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10.5, "endY": 11.5, "color": "#3E2723", "width": 6, "glow": false },
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 13, "endY": 8.5, "color": "#4E342E", "width": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 3, "color": "rgba(139, 69, 19, 0.6)", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "brown" }
],
"web_animation": {
"keyframes": [
{ "transform": "translate(10px, 8px)" },
{ "transform": "translate(-8px, -6px)" },
{ "transform": "translate(5px, 4px)" },
{ "transform": "translate(0, 0)" }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 23850,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1500,
"css_override": {
"border-bottom": "none",
"filter": "brightness(0.9) drop-shadow(0 20px 10px rgba(0,0,0,0.8))"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "offset": 0 },
{ "transform": "scale(1.15) translateY(-25px) rotate(-8deg)", "offset": 0.4 },
{ "transform": "scale(0.95) translateY(10px) rotate(2deg)", "offset": 0.8 },
{ "transform": "scale(1) translateY(0)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "easing": "cubic-bezier(0.25, 1, 0.5, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 12, "startY": 10, "endX": 10, "endY": 9, "color": "rgba(30, 30, 30, 0.8)", "width": 20, "glow": true, "shadowBlur": 10, "shadowColor": "black" },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 2.5, "color": "rgba(0, 0, 0, 0.7)", "fill": true }
]
},
{
"time_offset_ms": 24500,
"type": "NARRATIVE",
"content": "The Guardian has fallen. Crushing the scorched roots, T-900 lumbers forward, its gears grinding as it sets its sights on the remaining defenders."
},
{
"time_offset_ms": 24800,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"css_override": {
"filter": "brightness(0.5) contrast(1.5) saturate(1.2)",
"transition": "filter 2s ease-in-out"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(20, 20, 20, 0.6)" },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 15, "color": "rgba(0, 0, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 150, "shadowColor": "black" }
]
}
]
}
{
"chunk_summary": "With Kael dead, the defense line is broken. T-900 relentlessly pursues Lyra, crushing everything in its path. Lyra attempts to kite, falling back while firing desperately, but the mechanical behemoth closes the distance, its chainsaw biting into her flesh. Meanwhile, Zog bombards Elder Thalas with toxic smoke, forcing the mage to retreat and separating the remaining defenders.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 0, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 202, "x": 6, "y": 6 },
"char-mage-a3": { "hp": 610, "x": 7, "y": 10 },
"char-boss-b1": { "hp": 1015, "x": 7, "y": 6 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 585, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 25100,
"type": "NARRATIVE",
"content": "The line is broken! T-900's gears shriek as it ignores its damaged chassis and locks its targeting sensors onto Lyra."
},
{
"time_offset_ms": 25150,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"css_override": {
"filter": "sepia(50%) hue-rotate(-20deg) saturate(200%) brightness(0.8)",
"mix-blend-mode": "multiply"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)" },
{ "transform": "scale(1.02) translate(3px, -2px)" },
{ "transform": "scale(1)" }
],
"options": { "duration": 200, "iterations": 5 }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(139, 0, 0, 0.1)" },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 20, "color": "rgba(255, 0, 0, 0.05)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "red" }
]
},
{
"time_offset_ms": 25200,
"type": "MOVE",
"actor_id": "char-archer-a2",
"target_x": 6,
"target_y": 6
},
{
"time_offset_ms": 25600,
"type": "ATTACK",
"actor_id": "char-archer-a2",
"target_id": "char-boss-b1",
"hp_change": -115,
"is_critical": false
},
{
"time_offset_ms": 25620,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 6, "endX": 10, "endY": 9, "color": "#00FF7F", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 6.5, "startY": 6.5, "endX": 9.5, "endY": 8.5, "color": "#FFFFFF", "width": 3 }
]
},
{
"time_offset_ms": 25650,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 800,
"css_override": {
"filter": "brightness(1.8) contrast(1.5) sepia(100%) hue-rotate(90deg) saturate(300%) drop-shadow(0 0 20px #32CD32)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1)", "offset": 0 },
{ "transform": "translate(8px, 5px) scale(0.98) skewX(-5deg)", "offset": 0.1 },
{ "transform": "translate(-5px, -3px) scale(1.02) rotate(2deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(1) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 3, "color": "rgba(50, 205, 50, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#00FF00" },
{ "action": "DRAW_CIRCLE", "centerX": 9.5, "centerY": 8.5, "radius": 1, "color": "#ADFF2F", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10.5, "centerY": 9.8, "radius": 0.8, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 6, "color": "rgba(0, 255, 0, 0.3)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 26000,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 8,
"target_y": 7
},
{
"time_offset_ms": 26050,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"web_animation": {
"keyframes": [
{ "transform": "translate(6px, 8px) rotate(1deg)", "offset": 0 },
{ "transform": "translate(-6px, -5px) rotate(-1deg)", "offset": 0.2 },
{ "transform": "translate(4px, 4px)", "offset": 0.4 },
{ "transform": "translate(-2px, -2px)", "offset": 0.6 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 26100,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 10, "startY": 9, "endX": 8, "endY": 7, "color": "rgba(30, 30, 30, 0.8)", "width": 16, "glow": true, "shadowBlur": 10, "shadowColor": "#000000" },
{ "action": "DRAW_LINE", "startX": 10.2, "startY": 8.8, "endX": 8.2, "endY": 6.8, "color": "rgba(10, 10, 10, 0.9)", "width": 8 },
{ "action": "DRAW_CIRCLE", "centerX": 9, "centerY": 8, "radius": 2.5, "color": "rgba(80, 80, 80, 0.4)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "black" }
]
},
{
"time_offset_ms": 26500,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-mage-a3",
"hp_change": -95,
"is_critical": false
},
{
"time_offset_ms": 26520,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 13, "startY": 11, "endX": 9, "endY": 11, "color": "#708090", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#2F4F4F" },
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 11, "radius": 1, "color": "#A9A9A9", "fill": true }
]
},
{
"time_offset_ms": 26550,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 2000,
"css_override": {
"filter": "grayscale(80%) sepia(50%) hue-rotate(60deg) contrast(1.5) blur(2px) drop-shadow(0 0 25px #2F4F4F)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.85) translate(-10px, 5px) skewX(10deg)", "offset": 0.1 },
{ "transform": "scale(0.9) translate(8px, -5px) rotate(5deg)", "offset": 0.3 },
{ "transform": "scale(1.05) translate(-3px, 8px)", "offset": 0.6 },
{ "transform": "scale(1) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 9, "centerY": 11, "radius": 4.5, "color": "rgba(47, 79, 79, 0.8)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#2F4F4F" },
{ "action": "DRAW_CIRCLE", "centerX": 8.5, "centerY": 11.5, "radius": 2, "color": "rgba(105, 105, 105, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 9.5, "centerY": 10.5, "radius": 1.5, "color": "rgba(169, 169, 169, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 9, "centerY": 11, "radius": 7, "color": "rgba(47, 79, 79, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 27000,
"type": "ATTACK",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -90,
"is_critical": false
},
{
"time_offset_ms": 27020,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 9, "startY": 11, "endX": 8, "endY": 7, "color": "#00FFFF", "width": 10, "glow": true, "shadowBlur": 30, "shadowColor": "#00BFFF" },
{ "action": "DRAW_LINE", "startX": 9, "startY": 11, "endX": 8, "endY": 7, "color": "#FFFFFF", "width": 4 }
]
},
{
"time_offset_ms": 27050,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(2) contrast(1.5) drop-shadow(0 0 25px #00BFFF)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scale(1)", "offset": 0 },
{ "transform": "translateY(-12px) scale(1.02) rotate(4deg)", "offset": 0.1 },
{ "transform": "translateY(8px) scale(0.98) rotate(-2deg)", "offset": 0.3 },
{ "transform": "translateY(0) scale(1) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 7, "radius": 3.5, "color": "rgba(0, 191, 255, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#00BFFF" },
{ "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 7, "radius": 5, "color": "rgba(135, 206, 235, 0.4)", "fill": false, "lineWidth": 5 },
{ "action": "DRAW_CIRCLE", "centerX": 7.5, "centerY": 6.5, "radius": 0.8, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 8.5, "centerY": 7.5, "radius": 0.5, "color": "#E0FFFF", "fill": true }
]
},
{
"time_offset_ms": 27150,
"type": "DIALOGUE",
"actor_id": "char-boss-b1",
"content": "ORGANIC FLESH. PREPARE FOR EXCAVATION.",
"emotion": "COLD"
},
{
"time_offset_ms": 27160,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 800,
"css_override": {
"filter": "brightness(1.5) drop-shadow(0 0 30px #FF0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)" },
{ "transform": "scale(1.05)" },
{ "transform": "scale(1)" }
],
"options": { "duration": 400, "iterations": 2 }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 7, "radius": 0.5, "color": "#FF0000", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "red" }
]
},
{
"time_offset_ms": 27500,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 7,
"target_y": 6
},
{
"time_offset_ms": 27520,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "translate(15px, 15px) rotate(2deg)", "offset": 0 },
{ "transform": "translate(-10px, -10px) rotate(-1deg)", "offset": 0.2 },
{ "transform": "translate(8px, 8px)", "offset": 0.4 },
{ "transform": "translate(-4px, -4px)", "offset": 0.6 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 6, "radius": 5, "color": "rgba(0, 0, 0, 0.4)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "black" }
]
},
{
"time_offset_ms": 28000,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-archer-a2",
"hp_change": -145,
"is_critical": false
},
{
"time_offset_ms": 28020,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 0, 0.2)" },
{ "action": "DRAW_LINE", "startX": 7, "startY": 6, "endX": 6, "endY": 6, "color": "#FFFFFF", "width": 16, "glow": true, "shadowBlur": 40, "shadowColor": "#FF0000" }
]
},
{
"time_offset_ms": 28050,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(0.3) contrast(250%) saturate(400%) drop-shadow(0 0 35px #8B0000)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 0 },
{ "transform": "scale(0.8) translate(-30px, 15px) skewX(-25deg) rotate(-20deg)", "offset": 0.05 },
{ "transform": "scale(0.85) translate(20px, -10px) skewX(15deg) rotate(15deg)", "offset": 0.15 },
{ "transform": "scale(0.9) translate(-10px, 5px) skewX(-5deg) rotate(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 4.5, "color": "rgba(139, 0, 0, 0.95)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#FF0000" },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 6.5, "radius": 2, "color": "rgba(255, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 5.2, "radius": 1.5, "color": "rgba(200, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7, "radius": 1, "color": "rgba(150, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.8, "centerY": 5.5, "radius": 0.8, "color": "rgba(255, 50, 50, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 8, "color": "rgba(255, 0, 0, 0.2)", "fill": false, "lineWidth": 5, "glow": true, "shadowBlur": 20, "shadowColor": "darkred" }
]
},
{
"time_offset_ms": 28200,
"type": "DIALOGUE",
"actor_id": "char-archer-a2",
"content": "Aaaah! It's too fast!",
"emotion": "TERRIFIED"
},
{
"time_offset_ms": 28700,
"type": "MOVE",
"actor_id": "char-mage-a3",
"target_x": 7,
"target_y": 10
},
{
"time_offset_ms": 29000,
"type": "MOVE",
"actor_id": "char-artillery-b3",
"target_x": 11,
"target_y": 10
},
{
"time_offset_ms": 29050,
"type": "VFX",
"target_id": "char-artillery-b3",
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "translateY(-8px) scaleY(1.05)" },
{ "transform": "translateY(0) scaleY(0.95)" },
{ "transform": "translateY(0) scaleY(1)" }
],
"options": { "duration": 300, "iterations": 2 }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 10, "radius": 2.5, "color": "rgba(0, 0, 0, 0.5)", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "black" }
]
},
{
"time_offset_ms": 29500,
"type": "NARRATIVE",
"content": "Separated and bleeding, the spirits of the forest are trapped in a deadly corner."
},
{
"time_offset_ms": 29550,
"type": "VFX",
"target_id": null,
"duration_ms": 4000,
"css_override": {
"filter": "brightness(0.6) contrast(1.2) grayscale(40%)",
"transition": "filter 2s ease-in"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(10, 0, 0, 0.4)" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 15, "color": "rgba(0, 0, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "black" }
]
}
]
}
{
"chunk_summary": "In a tragic twist of fate, Elder Thalas channels a surge of healing magic to save Lyra just as T-900 revs its chainsaw for the execution. The healing light embraces her, but it's immediately torn apart as the mechanical behemoth delivers a brutal, fatal strike, cutting the elven archer down. Horrified by the loss of his kin, Thalas unleashes a desperate magical blast at the machine while enduring a toxic bombardment from Zog. Only the Elder remains standing against the mechanical tide.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 0, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 0, "x": 6, "y": 6 },
"char-mage-a3": { "hp": 505, "x": 7, "y": 10 },
"char-boss-b1": { "hp": 825, "x": 7, "y": 6 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 585, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 30100,
"type": "NARRATIVE",
"content": "The chainsaw roars to a deafening pitch as T-900 prepares the final execution stroke."
},
{
"time_offset_ms": 30150,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"css_override": {
"filter": "contrast(1.2) brightness(0.9)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(2px, 2px)" },
{ "transform": "translate(-2px, -2px)" },
{ "transform": "translate(3px, -1px)" },
{ "transform": "translate(-1px, 3px)" },
{ "transform": "translate(0, 0)" }
],
"options": { "duration": 80, "iterations": 12 }
}
},
{
"time_offset_ms": 30300,
"type": "ATTACK",
"actor_id": "char-archer-a2",
"target_id": "char-boss-b1",
"hp_change": -110,
"is_critical": false
},
{
"time_offset_ms": 30320,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 6, "endX": 7, "endY": 6, "color": "#ffffff", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#00FF7F" },
{ "action": "DRAW_LINE", "startX": 6.2, "startY": 5.8, "endX": 6.8, "endY": 5.8, "color": "#00FA9A", "width": 2 }
]
},
{
"time_offset_ms": 30350,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 600,
"css_override": {
"filter": "drop-shadow(0 0 15px #00FF7F) brightness(1.2)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scale(1)", "offset": 0 },
{ "transform": "translateY(-6px) rotate(4deg) scale(0.98)", "offset": 0.2 },
{ "transform": "translateY(4px) rotate(-2deg) scale(1.02)", "offset": 0.5 },
{ "transform": "translateY(0) scale(1)", "offset": 1 }
],
"options": { "duration": 300, "iterations": 2, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 6, "radius": 2, "color": "rgba(0, 255, 127, 0.7)", "fill": true, "glow": true, "shadowBlur": 25, "shadowColor": "lightgreen" },
{ "action": "DRAW_CIRCLE", "centerX": 7.5, "centerY": 5.5, "radius": 0.5, "color": "#ffffff", "fill": true }
]
},
{
"time_offset_ms": 30800,
"type": "SKILL",
"actor_id": "char-mage-a3",
"target_id": "char-archer-a2",
"hp_change": 150,
"is_critical": false
},
{
"time_offset_ms": 30810,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 7, "startY": 10, "endX": 6, "endY": 6, "color": "#ffffff", "width": 12, "glow": true, "shadowBlur": 40, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 7.2, "startY": 9.8, "endX": 6.2, "endY": 5.8, "color": "#3CB371", "width": 4 }
]
},
{
"time_offset_ms": 30850,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(2) contrast(1.5) saturate(300%) drop-shadow(0 0 50px #00FA9A)",
"box-shadow": "inset 0 0 30px #3CB371",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "filter": "hue-rotate(0deg)", "offset": 0 },
{ "transform": "scale(1.2) translateY(-10px)", "filter": "hue-rotate(20deg)", "offset": 0.5 },
{ "transform": "scale(1.1) translateY(-5px)", "filter": "hue-rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "easing": "cubic-bezier(0.25, 0.8, 0.25, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 4.5, "color": "rgba(0, 250, 154, 0.8)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "#00FF7F" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 8, "color": "rgba(60, 179, 113, 0.3)", "fill": false, "lineWidth": 4 },
{ "action": "DRAW_CIRCLE", "centerX": 5.2, "centerY": 6.8, "radius": 0.5, "color": "#ffffff", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 5.2, "radius": 0.8, "color": "#CCFFCC", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 5.5, "radius": 0.3, "color": "#99FF99", "fill": true }
]
},
{
"time_offset_ms": 31200,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-archer-a2",
"hp_change": -352,
"is_critical": true
},
{
"time_offset_ms": 31210,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"css_override": {
"filter": "saturate(400%) contrast(250%) brightness(1.5) hue-rotate(-30deg)",
"mix-blend-mode": "color-burn"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(-20px, 15px) rotate(-5deg)", "offset": 0 },
{ "transform": "translate(15px, -10px) rotate(4deg)", "offset": 0.1 },
{ "transform": "translate(-10px, 10px) rotate(-3deg)", "offset": 0.2 },
{ "transform": "translate(8px, -5px) rotate(2deg)", "offset": 0.4 },
{ "transform": "translate(-4px, 4px) rotate(-1deg)", "offset": 0.6 },
{ "transform": "translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 0, 0.4)" }
]
},
{
"time_offset_ms": 31250,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 3000,
"css_override": {
"filter": "brightness(0.3) contrast(300%) sepia(100%) hue-rotate(-50deg) saturate(500%) drop-shadow(0 0 50px #8B0000)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0,0) skewX(0deg)", "offset": 0 },
{ "transform": "scale(1.1) translate(-25px, 15px) skewX(-30deg) rotate(-15deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(20px, -10px) skewX(25deg) rotate(10deg)", "offset": 0.1 },
{ "transform": "scale(1.05) translate(-15px, 10px) skewX(-15deg) rotate(-5deg)", "offset": 0.15 },
{ "transform": "scale(0.8) translate(10px, -5px) skewX(10deg) rotate(5deg)", "offset": 0.2 },
{ "transform": "scale(0.7) translate(-30px, 40px) skewX(45deg) rotate(-45deg)", "offset": 0.6 },
{ "transform": "scale(0.5) translate(-40px, 50px) skewX(50deg) rotate(-60deg)", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 7, "startY": 6, "endX": 4, "endY": 8, "color": "#ffffff", "width": 30, "glow": true, "shadowBlur": 60, "shadowColor": "#FF0000" },
{ "action": "DRAW_LINE", "startX": 7, "startY": 5.8, "endX": 4.5, "endY": 8.5, "color": "rgba(255, 0, 0, 0.9)", "width": 18 },
{ "action": "DRAW_LINE", "startX": 6.5, "startY": 6.5, "endX": 5, "endY": 7.5, "color": "rgba(139, 0, 0, 0.9)", "width": 12 },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 6, "radius": 5, "color": "rgba(139, 0, 0, 0.95)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "darkred" },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 7, "radius": 2.5, "color": "rgba(200, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7.5, "radius": 1.2, "color": "rgba(255, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 5.5, "radius": 1.5, "color": "rgba(150, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 4, "centerY": 8.5, "radius": 0.8, "color": "rgba(100, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 6.5, "radius": 12, "color": "rgba(255, 0, 0, 0.25)", "fill": false, "lineWidth": 8, "glow": true, "shadowBlur": 30, "shadowColor": "red" }
]
},
{
"time_offset_ms": 31500,
"type": "DIALOGUE",
"actor_id": "char-archer-a2",
"content": "The forest... weeps...",
"emotion": "AGONY"
},
{
"time_offset_ms": 32000,
"type": "VFX",
"target_id": "char-archer-a2",
"duration_ms": 4000,
"css_override": {
"filter": "grayscale(100%) brightness(0.1) blur(4px)",
"transform-origin": "center center",
"opacity": "0"
},
"web_animation": {
"keyframes": [
{ "opacity": "1", "transform": "scale(0.5) translate(-40px, 50px) rotate(-60deg)", "filter": "grayscale(50%) blur(0px)" },
{ "opacity": "0.5", "transform": "scale(0.3) translate(-60px, 80px) rotate(-90deg)", "filter": "grayscale(100%) blur(3px)" },
{ "opacity": "0", "transform": "scale(0.1) translate(-80px, 120px) rotate(-120deg)", "filter": "grayscale(100%) blur(8px)" }
],
"options": { "duration": 3000, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.25, 0.1, 0.25, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 7, "radius": 5, "color": "rgba(20, 0, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "black" },
{ "action": "DRAW_CIRCLE", "centerX": 4.5, "centerY": 7.5, "radius": 2, "color": "rgba(10, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 6.5, "radius": 1.5, "color": "rgba(30, 0, 0, 0.8)", "fill": true }
]
},
{
"time_offset_ms": 32500,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-mage-a3",
"hp_change": -105,
"is_critical": false
},
{
"time_offset_ms": 32520,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 7, "endY": 10, "color": "#BDB76B", "width": 10, "glow": true, "shadowBlur": 25, "shadowColor": "#808000" },
{ "action": "DRAW_LINE", "startX": 11, "startY": 9.8, "endX": 7.5, "endY": 9.8, "color": "#FFFFFF", "width": 3 }
]
},
{
"time_offset_ms": 32550,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 2000,
"css_override": {
"filter": "sepia(80%) hue-rotate(50deg) brightness(0.6) contrast(1.5) drop-shadow(0 0 30px #556B2F)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) translate(-15px, 0) skewX(15deg) rotate(-8deg)", "offset": 0.08 },
{ "transform": "scale(0.95) translate(8px, 0) skewX(-8deg) rotate(4deg)", "offset": 0.25 },
{ "transform": "scale(1) translate(0, 0) skewX(0deg) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 4, "color": "rgba(85, 107, 47, 0.85)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#808000" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 9.5, "radius": 2, "color": "rgba(107, 142, 35, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7.8, "centerY": 10.5, "radius": 1.5, "color": "rgba(128, 128, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.2, "centerY": 10.8, "radius": 1, "color": "rgba(47, 79, 79, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 8, "color": "rgba(85, 107, 47, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 33000,
"type": "DIALOGUE",
"actor_id": "char-mage-a3",
"content": "Lyra!! No! You abominations will face the wrath of the World Tree!",
"emotion": "AGGRESSIVE"
},
{
"time_offset_ms": 33050,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(2.5) contrast(1.2) drop-shadow(0 0 40px #00FFFF)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)" },
{ "transform": "scale(1.1) translateY(-5px)" },
{ "transform": "scale(1.15) translateY(-8px)" },
{ "transform": "scale(1.1) translateY(-5px)" }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
}
},
{
"time_offset_ms": 33500,
"type": "ATTACK",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -80,
"is_critical": false
},
{
"time_offset_ms": 33520,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 7, "startY": 10, "endX": 7, "endY": 6, "color": "#ffffff", "width": 25, "glow": true, "shadowBlur": 80, "shadowColor": "#00BFFF" },
{ "action": "DRAW_LINE", "startX": 6.8, "startY": 10, "endX": 6.8, "endY": 6, "color": "#00FFFF", "width": 10 },
{ "action": "DRAW_LINE", "startX": 7.2, "startY": 10, "endX": 7.2, "endY": 6, "color": "#00FFFF", "width": 10 }
]
},
{
"time_offset_ms": 33550,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(2) contrast(1.8) drop-shadow(0 0 40px #00BFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scale(1)", "offset": 0 },
{ "transform": "translateY(-15px) scale(1.05) skewX(10deg)", "offset": 0.05 },
{ "transform": "translateY(5px) scale(0.95) skewX(-10deg)", "offset": 0.15 },
{ "transform": "translateY(-8px) scale(1.02)", "offset": 0.3 },
{ "transform": "translateY(0) scale(1)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 6, "radius": 4, "color": "rgba(0, 191, 255, 0.9)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "cyan" },
{ "action": "DRAW_CIRCLE", "centerX": 7.5, "centerY": 5.5, "radius": 1.5, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 6.5, "radius": 1.2, "color": "rgba(0, 255, 255, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 6, "radius": 10, "color": "rgba(0, 191, 255, 0.3)", "fill": false, "lineWidth": 8, "glow": true, "shadowBlur": 30, "shadowColor": "blue" }
]
},
{
"time_offset_ms": 34500,
"type": "NARRATIVE",
"content": "Only the Elder Mage remains, standing alone amidst the torn bodies of his kin and the encroaching toxic smoke."
},
{
"time_offset_ms": 34550,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"css_override": {
"filter": "brightness(0.5) contrast(1.3) sepia(30%) hue-rotate(180deg)",
"transition": "filter 3s ease-in-out"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 10, 20, 0.5)" },
{ "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 10, "radius": 15, "color": "rgba(0, 0, 0, 0.6)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "black" },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 3, "color": "rgba(0, 255, 255, 0.15)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "cyan" }
]
}
]
}
{
"chunk_summary": "T-900, dripping with the sap and blood of its previous victims, relentlessly marches toward Elder Thalas. Zog continues his bombardment from afar, slowly chipping away at the Elder's fading magical barrier. Desperate to create space, Thalas retreats deeper into the poisoned woods, firing back bursts of nature magic that dent the machine's armored chassis. However, T-900 closes the distance and heavily lacerates Thalas, leaving the last defender on the brink of death but stubbornly channeling a final, massive spell.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"char-tank-a1": { "hp": 0, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 0, "x": 6, "y": 6 },
"char-mage-a3": { "hp": 280, "x": 6, "y": 11 },
"char-boss-b1": { "hp": 705, "x": 6, "y": 9 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 585, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 35100,
"type": "NARRATIVE",
"content": "The grinding gears of T-900 shatter the forest's silence as its optical sensors lock onto the final organic lifeform."
},
{
"time_offset_ms": 35150,
"type": "VFX",
"target_id": null,
"duration_ms": 2000,
"css_override": {
"filter": "contrast(1.3) brightness(0.85) sepia(40%) hue-rotate(-10deg)",
"mix-blend-mode": "multiply"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(2px, 0)", "offset": 0 },
{ "transform": "translate(-2px, 0)", "offset": 0.5 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 150, "iterations": 13, "easing": "linear" }
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(20, 10, 10, 0.2)" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 15, "color": "rgba(255, 0, 0, 0.05)", "fill": true, "glow": true, "shadowBlur": 100, "shadowColor": "darkred" }
]
},
{
"time_offset_ms": 35500,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 7,
"target_y": 8
},
{
"time_offset_ms": 35550,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1500,
"css_override": {
"filter": "drop-shadow(0 15px 20px rgba(0,0,0,0.9)) sepia(30%) contrast(1.2)",
"transform-origin": "bottom center"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0) scaleY(1)", "offset": 0 },
{ "transform": "translateY(-15px) scaleY(1.05) rotate(-3deg)", "offset": 0.3 },
{ "transform": "translateY(5px) scaleY(0.95) rotate(1deg)", "offset": 0.7 },
{ "transform": "translateY(0) scaleY(1) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "easing": "cubic-bezier(0.25, 1, 0.5, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 8, "radius": 2.5, "color": "rgba(20, 20, 20, 0.8)", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "black" },
{ "action": "DRAW_LINE", "startX": 7, "startY": 6, "endX": 7, "endY": 8, "color": "rgba(10, 10, 10, 0.8)", "width": 18 },
{ "action": "DRAW_CIRCLE", "centerX": 7.2, "centerY": 7.5, "radius": 0.8, "color": "rgba(139, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 6.5, "radius": 0.6, "color": "rgba(85, 107, 47, 0.7)", "fill": true }
]
},
{
"time_offset_ms": 35580,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translateY(8px)" },
{ "transform": "translateY(-6px)" },
{ "transform": "translateY(4px)" },
{ "transform": "translateY(0)" }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 36000,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-mage-a3",
"hp_change": -95,
"is_critical": false
},
{
"time_offset_ms": 36020,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 7, "endY": 10, "color": "#ADFF2F", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#7FFF00" },
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 7, "endY": 10, "color": "#FFFFFF", "width": 4 }
]
},
{
"time_offset_ms": 36050,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(1.5) contrast(1.5) sepia(80%) hue-rotate(50deg) saturate(300%) drop-shadow(0 0 25px #556B2F)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.85) translate(-15px, 8px) skewX(15deg)", "offset": 0.08 },
{ "transform": "scale(0.95) translate(10px, -5px) skewX(-10deg)", "offset": 0.25 },
{ "transform": "scale(1) translate(0, 0) skewX(0deg)", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 4, "color": "rgba(107, 142, 35, 0.8)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "#556B2F" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 10.5, "radius": 1.5, "color": "rgba(173, 255, 47, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7.8, "centerY": 9.5, "radius": 1, "color": "rgba(255, 255, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 7, "color": "rgba(85, 107, 47, 0.3)", "fill": false, "lineWidth": 6 },
{ "action": "DRAW_LINE", "startX": 7, "startY": 10, "endX": 5, "endY": 12, "color": "#FFFFFF", "width": 2 },
{ "action": "DRAW_LINE", "startX": 7, "startY": 10, "endX": 8, "endY": 12, "color": "#FFFFFF", "width": 2 }
]
},
{
"time_offset_ms": 36500,
"type": "DIALOGUE",
"actor_id": "char-artillery-b3",
"content": "Just die already, old man! The future is chrome!",
"emotion": "MOCKING"
},
{
"time_offset_ms": 37000,
"type": "MOVE",
"actor_id": "char-mage-a3",
"target_x": 6,
"target_y": 11
},
{
"time_offset_ms": 37020,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 7, "startY": 10, "endX": 6, "endY": 11, "color": "rgba(0, 255, 127, 0.4)", "width": 10, "glow": true, "shadowBlur": 15, "shadowColor": "lightgreen" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 10.5, "radius": 1.5, "color": "rgba(139, 0, 0, 0.6)", "fill": true }
]
},
{
"time_offset_ms": 37500,
"type": "SKILL",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -120,
"is_critical": false
},
{
"time_offset_ms": 37520,
"type": "VFX",
"target_id": null,
"duration_ms": 250,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 11, "endX": 7, "endY": 8, "color": "#00FFFF", "width": 14, "glow": true, "shadowBlur": 40, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 6, "startY": 11, "endX": 7, "endY": 8, "color": "#FFFFFF", "width": 5 }
]
},
{
"time_offset_ms": 37550,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(2.5) contrast(1.5) hue-rotate(90deg) saturate(200%) drop-shadow(0 0 35px #00FFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.9) translate(-10px, -5px) rotate(-8deg)", "offset": 0.1 },
{ "transform": "scale(1.05) translate(8px, 5px) rotate(5deg)", "offset": 0.3 },
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 8, "radius": 3.5, "color": "rgba(0, 255, 255, 0.9)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "cyan" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 8.5, "radius": 1.5, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7.5, "centerY": 7.5, "radius": 1, "color": "rgba(0, 250, 154, 0.9)", "fill": true },
{ "action": "DRAW_LINE", "startX": 7, "startY": 8, "endX": 8, "endY": 9, "color": "#FFFFFF", "width": 3 },
{ "action": "DRAW_LINE", "startX": 7, "startY": 8, "endX": 6, "endY": 7, "color": "#FFFFFF", "width": 3 },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 8, "radius": 6, "color": "rgba(0, 255, 255, 0.3)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 38200,
"type": "MOVE",
"actor_id": "char-boss-b1",
"target_x": 6,
"target_y": 9
},
{
"time_offset_ms": 38220,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 600,
"css_override": {
"filter": "brightness(2) drop-shadow(0 0 20px #FF0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1)" },
{ "transform": "scale(1.1) skewX(10deg) translateX(-5px)" },
{ "transform": "scale(1)" }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-in-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 1, "color": "#FF0000", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "red" }
]
},
{
"time_offset_ms": 38800,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-mage-a3",
"hp_change": -130,
"is_critical": false
},
{
"time_offset_ms": 38810,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"web_animation": {
"keyframes": [
{ "transform": "translate(-15px, -15px) rotate(-5deg)", "offset": 0 },
{ "transform": "translate(12px, 12px) rotate(4deg)", "offset": 0.2 },
{ "transform": "translate(-8px, -8px) rotate(-2deg)", "offset": 0.4 },
{ "transform": "translate(5px, 5px)", "offset": 0.6 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 6, "endY": 11, "color": "#FFFFFF", "width": 25, "glow": true, "shadowBlur": 50, "shadowColor": "#FF0000" }
]
},
{
"time_offset_ms": 38850,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 2500,
"css_override": {
"filter": "brightness(0.4) contrast(250%) sepia(80%) hue-rotate(-30deg) saturate(400%) drop-shadow(0 0 50px #8B0000)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "offset": 0 },
{ "transform": "scale(0.8) translate(-30px, 25px) skewX(-30deg) rotate(-20deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(15px, -10px) skewX(20deg) rotate(10deg)", "offset": 0.15 },
{ "transform": "scale(0.85) translate(-10px, 5px) skewX(-10deg) rotate(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.95) translate(0, 0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 6, "endY": 11, "color": "#8B0000", "width": 30, "glow": true, "shadowBlur": 60, "shadowColor": "#FF0000" },
{ "action": "DRAW_LINE", "startX": 6, "startY": 10, "endX": 4, "endY": 12, "color": "rgba(255, 0, 0, 0.9)", "width": 15 },
{ "action": "DRAW_LINE", "startX": 6, "startY": 10.5, "endX": 8, "endY": 12, "color": "rgba(200, 0, 0, 0.8)", "width": 12 },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 4.5, "color": "rgba(139, 0, 0, 0.95)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "darkred" },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 11.5, "radius": 2, "color": "rgba(255, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 10.2, "radius": 1.5, "color": "rgba(150, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 8, "color": "rgba(255, 0, 0, 0.25)", "fill": false, "lineWidth": 6, "glow": true, "shadowBlur": 25, "shadowColor": "red" },
{ "action": "DRAW_LINE", "startX": 5, "startY": 10, "endX": 7, "endY": 12, "color": "#FFFFFF", "width": 2 }
]
},
{
"time_offset_ms": 39300,
"type": "DIALOGUE",
"actor_id": "char-mage-a3",
"content": "The roots go deeper than your steel can reach...",
"emotion": "RESOLUTE"
},
{
"time_offset_ms": 39800,
"type": "NARRATIVE",
"content": "Bleeding and exhausted, Thalas grips his staff, intensely channeling his remaining life force. A terrifying green aura begins to envelop him."
},
{
"time_offset_ms": 39850,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"css_override": {
"filter": "contrast(1.5) brightness(0.7) saturate(200%) hue-rotate(20deg)",
"transition": "filter 4s cubic-bezier(0.4, 0, 0.2, 1)"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 20, 10, 0.6)" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 18, "color": "rgba(0, 255, 127, 0.15)", "fill": true, "glow": true, "shadowBlur": 150, "shadowColor": "#00FF7F" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 8, "color": "rgba(0, 250, 154, 0.3)", "fill": true, "glow": true, "shadowBlur": 80, "shadowColor": "#00FA9A" }
]
},
{
"time_offset_ms": 39860,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 5000,
"css_override": {
"filter": "brightness(3) contrast(2) drop-shadow(0 0 60px #00FF7F) saturate(300%)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "filter": "hue-rotate(0deg)" },
{ "transform": "scale(1.1) translateY(-8px)", "filter": "hue-rotate(45deg)" },
{ "transform": "scale(1.05) translateY(-3px)", "filter": "hue-rotate(15deg)" },
{ "transform": "scale(1.2) translateY(-12px)", "filter": "hue-rotate(60deg)" }
],
"options": { "duration": 4000, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 5, "color": "rgba(0, 255, 127, 0.9)", "fill": true, "glow": true, "shadowBlur": 80, "shadowColor": "#00FF7F" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 3, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_LINE", "startX": 6, "startY": 11, "endX": 6, "endY": 0, "color": "rgba(0, 250, 154, 0.8)", "width": 15, "glow": true, "shadowBlur": 50, "shadowColor": "#00FF7F" }
]
}
]
}
{
"chunk_summary": "Elder Thalas channels his remaining life essence into one final, cataclysmic burst of nature magic, heavily crippling the T-900. However, the resilient machine withstands the blast and ruthlessly delivers a brutal execution strike. As the Elder falls, the last bastion of the Poison Spore Forest is wiped out. The mechanical forces stand victorious over the smoldering, ruined grove.",
"is_game_over": true,
"winning_team": "B",
"updated_state": {
"char-tank-a1": { "hp": 0, "x": 11, "y": 10 },
"char-archer-a2": { "hp": 0, "x": 6, "y": 6 },
"char-mage-a3": { "hp": 0, "x": 6, "y": 11 },
"char-boss-b1": { "hp": 205, "x": 6, "y": 9 },
"char-assassin-b2": { "hp": 0, "x": 6, "y": 8 },
"char-artillery-b3": { "hp": 585, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 40200,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-mage-a3",
"hp_change": -140,
"is_critical": false
},
{
"time_offset_ms": 40220,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 6, "endY": 11, "color": "#A9A9A9", "width": 18, "glow": true, "shadowBlur": 20, "shadowColor": "white" },
{ "action": "DRAW_LINE", "startX": 6, "startY": 9.5, "endX": 6, "endY": 10.5, "color": "#FFFFFF", "width": 8 }
]
},
{
"time_offset_ms": 40250,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(0.3) contrast(200%) sepia(100%) hue-rotate(-40deg) saturate(300%) drop-shadow(0 0 30px #8B0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1)", "offset": 0 },
{ "transform": "translate(-15px, 10px) rotate(-15deg) skewX(-15deg)", "offset": 0.08 },
{ "transform": "translate(10px, -5px) rotate(10deg) skewX(10deg)", "offset": 0.25 },
{ "transform": "translate(-5px, 8px) rotate(-5deg)", "offset": 0.4 },
{ "transform": "translate(0, 0) scale(0.95)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 6, "endY": 11.5, "color": "#8B0000", "width": 25, "glow": true, "shadowBlur": 40, "shadowColor": "red" },
{ "action": "DRAW_LINE", "startX": 5.5, "startY": 10, "endX": 6.5, "endY": 11, "color": "rgba(255, 0, 0, 0.8)", "width": 12 },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 3.5, "color": "rgba(139, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 11.5, "radius": 1.5, "color": "rgba(255, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 6, "color": "rgba(255, 0, 0, 0.2)", "fill": false, "lineWidth": 4 }
]
},
{
"time_offset_ms": 40700,
"type": "ATTACK",
"actor_id": "char-artillery-b3",
"target_id": "char-mage-a3",
"hp_change": -105,
"is_critical": true
},
{
"time_offset_ms": 40720,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 6, "endY": 11, "color": "#ADFF2F", "width": 14, "glow": true, "shadowBlur": 35, "shadowColor": "#7FFF00" },
{ "action": "DRAW_LINE", "startX": 11, "startY": 10, "endX": 6, "endY": 11, "color": "#FFFFFF", "width": 5 }
]
},
{
"time_offset_ms": 40750,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(0.6) contrast(1.5) sepia(100%) hue-rotate(50deg) saturate(300%) drop-shadow(0 0 30px #556B2F)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.85) translate(-10px, 15px) skewX(20deg)", "offset": 0.1 },
{ "transform": "scale(0.9) translate(15px, -5px) skewX(-10deg)", "offset": 0.25 },
{ "transform": "scale(0.95) translate(-5px, 8px)", "offset": 0.4 },
{ "transform": "scale(0.9) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "easing": "ease-out" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 4, "color": "rgba(107, 142, 35, 0.9)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "#556B2F" },
{ "action": "DRAW_CIRCLE", "centerX": 5.5, "centerY": 11.5, "radius": 2, "color": "rgba(173, 255, 47, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6.8, "centerY": 10.5, "radius": 1.5, "color": "rgba(255, 255, 0, 0.7)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 8, "color": "rgba(85, 107, 47, 0.3)", "fill": false, "lineWidth": 6 }
]
},
{
"time_offset_ms": 41100,
"type": "DIALOGUE",
"actor_id": "char-mage-a3",
"content": "Return... to the soil...",
"emotion": "RESOLUTE"
},
{
"time_offset_ms": 41500,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"css_override": {
"filter": "saturate(200%) brightness(1.2)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(4px, 4px) scale(1.02)" },
{ "transform": "translate(-4px, -4px) scale(1)" },
{ "transform": "translate(-4px, 4px) scale(1.01)" },
{ "transform": "translate(4px, -4px) scale(1)" }
],
"options": { "duration": 100, "iterations": 10 }
}
},
{
"time_offset_ms": 41600,
"type": "SKILL",
"actor_id": "char-mage-a3",
"target_id": "char-boss-b1",
"hp_change": -500,
"is_critical": true
},
{
"time_offset_ms": 41610,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"css_override": {
"filter": "invert(1) hue-rotate(180deg) brightness(2)"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 255, 127, 0.5)" }
]
},
{
"time_offset_ms": 41650,
"type": "VFX",
"target_id": "char-boss-b1",
"duration_ms": 4000,
"css_override": {
"filter": "brightness(2.5) contrast(2) sepia(100%) hue-rotate(80deg) saturate(500%) drop-shadow(0 0 60px #00FF7F)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)", "offset": 0 },
{ "transform": "scale(1.2) translate(-25px, -15px) rotate(-15deg) skewX(20deg)", "offset": 0.05 },
{ "transform": "scale(0.8) translate(20px, 15px) rotate(10deg) skewX(-20deg)", "offset": 0.15 },
{ "transform": "scale(1.1) translate(-10px, -5px) rotate(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.9) translate(5px, 5px)", "offset": 0.5 },
{ "transform": "scale(1) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 3000, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 7, "color": "rgba(0, 255, 127, 0.9)", "fill": true, "glow": true, "shadowBlur": 80, "shadowColor": "#00FA9A" },
{ "action": "DRAW_LINE", "startX": 6, "startY": 11, "endX": 6, "endY": 9, "color": "#FFFFFF", "width": 50, "glow": true, "shadowBlur": 60, "shadowColor": "#00FF00" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 4, "color": "rgba(173, 255, 47, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 15, "color": "rgba(0, 255, 0, 0.4)", "fill": false, "lineWidth": 10, "glow": true, "shadowBlur": 40, "shadowColor": "lime" },
{ "action": "DRAW_CIRCLE", "centerX": 5, "centerY": 8, "radius": 1.5, "color": "#FFFFFF", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 10, "radius": 1.5, "color": "#FFFFFF", "fill": true }
]
},
{
"time_offset_ms": 42700,
"type": "ATTACK",
"actor_id": "char-boss-b1",
"target_id": "char-mage-a3",
"hp_change": -35,
"is_critical": false
},
{
"time_offset_ms": 42720,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"web_animation": {
"keyframes": [
{ "transform": "translateY(15px) rotate(3deg)", "offset": 0 },
{ "transform": "translateY(-10px) rotate(-2deg)", "offset": 0.3 },
{ "transform": "translateY(5px) rotate(1deg)", "offset": 0.6 },
{ "transform": "translateY(0) rotate(0)", "offset": 1 }
],
"options": { "duration": 400, "iterations": 1, "easing": "ease-out" }
}
},
{
"time_offset_ms": 42750,
"type": "VFX",
"target_id": "char-mage-a3",
"duration_ms": 4000,
"css_override": {
"filter": "brightness(0.2) contrast(300%) sepia(100%) hue-rotate(-50deg) saturate(500%) drop-shadow(0 0 50px #8B0000)",
"transform-origin": "center center",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) rotate(0deg)", "filter": "brightness(2) contrast(300%) sepia(100%) hue-rotate(-50deg) saturate(500%)", "offset": 0 },
{ "transform": "scale(1.1) translate(-20px, 20px) skewX(-20deg) rotate(-15deg)", "offset": 0.05 },
{ "transform": "scale(0.8) translate(15px, 30px) skewX(10deg) rotate(30deg)", "offset": 0.15 },
{ "transform": "scale(0.6) translate(-10px, 45px) rotate(60deg)", "offset": 0.3 },
{ "transform": "scale(0.3) translate(0, 60px) rotate(90deg)", "filter": "grayscale(100%) brightness(0.1)", "offset": 0.6 },
{ "transform": "scale(0.1) translate(0, 80px) rotate(110deg)", "filter": "grayscale(100%) brightness(0) blur(4px)", "offset": 1 }
],
"options": { "duration": 3500, "iterations": 1, "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "fill": "forwards" }
},
"canvas_commands": [
{ "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 6, "endY": 11, "color": "#ffffff", "width": 35, "glow": true, "shadowBlur": 80, "shadowColor": "#FF0000" },
{ "action": "DRAW_LINE", "startX": 5.5, "startY": 9.5, "endX": 6.5, "endY": 11.5, "color": "rgba(255, 0, 0, 0.9)", "width": 20 },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 5.5, "color": "rgba(139, 0, 0, 0.95)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "darkred" },
{ "action": "DRAW_CIRCLE", "centerX": 6.5, "centerY": 11.5, "radius": 2.5, "color": "rgba(255, 0, 0, 0.9)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 5.2, "centerY": 10.8, "radius": 1.8, "color": "rgba(200, 0, 0, 0.8)", "fill": true },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 11, "radius": 12, "color": "rgba(255, 0, 0, 0.3)", "fill": false, "lineWidth": 8, "glow": true, "shadowBlur": 40, "shadowColor": "red" }
]
},
{
"time_offset_ms": 43500,
"type": "NARRATIVE",
"content": "The Elder falls. The Poison Spore Forest is reduced to ash and twisted metal. The machines have won."
},
{
"time_offset_ms": 44200,
"type": "DIALOGUE",
"actor_id": "char-boss-b1",
"content": "ALL ORGANIC THREATS ELIMINATED. COMMENCING HARVEST.",
"emotion": "COLD"
},
{
"time_offset_ms": 44800,
"type": "VFX",
"target_id": null,
"duration_ms": 8000,
"css_override": {
"filter": "grayscale(80%) sepia(40%) hue-rotate(-20deg) brightness(0.3) contrast(1.5)",
"transition": "filter 4s ease-in-out"
},
"canvas_commands": [
{ "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(10, 5, 5, 0.8)" },
{ "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 20, "color": "rgba(0, 0, 0, 0.9)", "fill": true, "glow": true, "shadowBlur": 150, "shadowColor": "black" },
{ "action": "DRAW_CIRCLE", "centerX": 6.2, "centerY": 8.8, "radius": 0.4, "color": "#FF0000", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "red" },
{ "action": "DRAW_CIRCLE", "centerX": 5.8, "centerY": 8.8, "radius": 0.4, "color": "#FF0000", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "red" }
]
}
]
}


`;

// =========================================================================

export default function QuickTester() {
  const handleQuickStart = () => {
    if (!RAW_DATA_STRING.trim()) {
      alert("Đồng nghiệp ơi! Paste dữ liệu vào biến RAW_DATA_STRING đi kìa!");
      return;
    }

    // 1. Thuật toán tự động sửa lỗi JSON đứt đoạn và nối tất cả timeline lại
    let combinedTimeline = [];
    try {
      // Sửa lỗi các ngoặc nhọn dính liền nhau } { thành }, { và bọc trong mảng []
      const fixedJsonString = `[${RAW_DATA_STRING.trim().replace(/}\s*{/g, '},{')}]`;
      const parsedChunks = JSON.parse(fixedJsonString);
      
      // Gộp tất cả mảng timeline của các chunk lại thành một Master_Timeline duy nhất
      combinedTimeline = parsedChunks.flatMap((chunk: any) => chunk.timeline);
      console.log("Đã nối thành công:", combinedTimeline.length, "sự kiện!");
    } catch (error) {
      alert("Lỗi parse dữ liệu. Hãy chắc chắn bạn copy ĐÚNG và ĐỦ nội dung file!");
      console.error(error);
      return;
    }

    // 2. Ép dữ liệu chuẩn xác cho kịch bản "Poison Spore Forest"
    useMainStore.setState({
      // Môi trường
      mapPreviewUrl: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop', // Rừng rậm tối tăm
      mapDescription: 'Poison Spore Forest: Rừng bào tử độc, nơi phe Thiên Nhiên đụng độ Cỗ Máy Hủy Diệt.',
      
      // Avatar được thiết kế riêng cho 6 nhân vật trong kịch bản
      uploadedShapes: [
        { id: "shape-tank", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Kael&background=22c55e&color=fff&size=150&bold=true" },
        { id: "shape-archer", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Lyra&background=10b981&color=fff&size=150&bold=true" },
        { id: "shape-mage", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Thalas&background=059669&color=fff&size=150&bold=true" },
        { id: "shape-boss", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=T-900&background=ef4444&color=fff&size=150&bold=true" },
        { id: "shape-assassin", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=X-1&background=8b5cf6&color=fff&size=150&bold=true" },
        { id: "shape-artillery", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Zog&background=f59e0b&color=fff&size=150&bold=true" }
      ],

      // Đội hình A: Thiên nhiên
      teamA: [
        {
          id: "char-tank-a1",
          team: 'A',
          name: "Guardian Kael",
          personality: "Bảo hộ vững chắc",
          basicAttackDesc: "Vung búa rễ cây",
          skillDesc: "Khóa chặt bằng rễ sâu",
          stats: { hp: 1247, maxHp: 1500, agility: 20, damage: 95, range: 1 },
          shapeId: "shape-tank",
          position: { x: 10, y: 11 } // Xuất phát trước khi lướt tới 11,10
        },
        {
          id: "char-archer-a2",
          team: 'A',
          name: "Archer Lyra",
          personality: "Nhanh nhẹn, sắc bén",
          basicAttackDesc: "Bắn tên độc",
          skillDesc: "Mưa tên bào tử",
          stats: { hp: 462, maxHp: 600, agility: 60, damage: 120, range: 6 },
          shapeId: "shape-archer",
          position: { x: 5, y: 8 }
        },
        {
          id: "char-mage-a3",
          team: 'A',
          name: "Elder Thalas",
          personality: "Thông thái, ma lực vô song",
          basicAttackDesc: "Tia sét năng lượng xanh",
          skillDesc: "Hào quang sinh mệnh",
          stats: { hp: 800, maxHp: 800, agility: 30, damage: 150, range: 5 },
          shapeId: "shape-mage",
          position: { x: 7, y: 11 }
        }
      ],

      // Đội hình B: Cỗ Máy
      teamB: [
        {
          id: "char-boss-b1",
          team: 'B',
          name: "T-900 (Boss)",
          personality: "Tàn nhẫn, hủy diệt",
          basicAttackDesc: "Cưa máy rực lửa",
          skillDesc: "Phun lửa thiêu rụi",
          stats: { hp: 2105, maxHp: 2500, agility: 15, damage: 210, range: 2 },
          shapeId: "shape-boss",
          position: { x: 12, y: 12 } // Lát nữa sẽ di chuyển lên 12,10
        },
        {
          id: "char-assassin-b2",
          team: 'B',
          name: "Drone X-1",
          personality: "Vô hình, chết chóc",
          basicAttackDesc: "Lưỡi dao laser",
          skillDesc: "Gia tốc dịch chuyển",
          stats: { hp: 395, maxHp: 500, agility: 80, damage: 140, range: 1 },
          shapeId: "shape-assassin",
          position: { x: 15, y: 7 } // Vị trí chớp bóng trước khi áp sát Lyra
        },
        {
          id: "char-artillery-b3",
          team: 'B',
          name: "Zog (Pháo binh)",
          personality: "Tàn phá từ xa",
          basicAttackDesc: "Đạn Phốt-pho",
          skillDesc: "Mưa bom độc",
          stats: { hp: 750, maxHp: 800, agility: 25, damage: 105, range: 8 },
          shapeId: "shape-artillery",
          position: { x: 16, y: 13 }
        }
      ],

      // Bơm thẳng kịch bản đã xử lý vào máy chạy
      Master_Timeline: combinedTimeline,

      // Bay thẳng vào màn hình giả lập
      appStage: 'PHASE_5_SIMULATING'
    });
  };

  return (
    <button
      onClick={handleQuickStart}
      className="fixed top-4 right-4 z-50 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)] border-2 border-white animate-pulse"
    >
      🌿 TEST NATURE vs MACHINE BATTLE
    </button>
  );
}
