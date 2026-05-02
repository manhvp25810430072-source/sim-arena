import { useMainStore } from '../store/useMainStore';

// =========================================================================
// 🎯 KHOANG CHỨA DỮ LIỆU: DÁN Y NGUYÊN FILE GIẢ LẬP.PY CỦA BẠN VÀO ĐÂY
// =========================================================================
// Hãy copy toàn bộ nội dung từ file "giả lập.py" (hơn 2000 dòng)
// và dán đè lên dòng chữ "DÁN VÀO ĐÂY" bên dưới.
// Thuật toán ở dưới sẽ tự động vá lỗi và nối tất cả các chunk lại với nhau!

const RAW_DATA_STRING = `

{
"chunk_summary": "The battle erupts in the toxic rain as Lynx fires a searing plasma shot across the alley, melting into Malok's flesh. Reacting with blinding speed, Zero dashes into melee range, his neon katana slicing into the hulking mass of Brutus. Malok retaliates by warping the concrete, summoning abyssal tentacles that ensnare Zero, followed by a devastating, albeit partially dodged, kinetic slam from Brutus. Zero remains chillingly composed, delivering a high-frequency critical strike in return.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 970, "x": 10, "y": 10 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 735, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 3105, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 100,
"type": "NARRATIVE",
"content": "A blinding flash of pink plasma tears through the toxic downpour."
},
{
"time_offset_ms": 150,
"type": "VFX",
"target_id": null,
"duration_ms": 4850,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 150, 0.1)", "startOpacity": 0, "endOpacity": 0.4 },
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 255, 255, 1)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 300,
"type": "SKILL",
"actor_id": "neon_sniper_lynx",
"target_id": "abyss_summoner_malok",
"hp_change": -215,
"is_critical": false
},
{
"time_offset_ms": 320,
"type": "VFX",
"target_id": "neon_sniper_lynx",
"duration_ms": 800,
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(-18px, -6px) rotate(-12deg) scale(0.9)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.05 },
{ "transform": "translate(-8px, -2px) rotate(-4deg) scale(0.95)", "offset": 0.3 },
{ "transform": "translate(0,0) scale(1)", "easing": "ease-in-out", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 3.5, "centerY": 14.5, "startRadius": 0, "endRadius": 2.5, "color": "rgba(255, 100, 255, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 3.5, "centerY": 14.5, "startRadius": 0.5, "endRadius": 4.0, "color": "rgba(255, 255, 255, 0.8)", "fill": false, "lineWidth": 3, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 350,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 12, "endY": 9, "color": "#FF00FF", "width": 22, "glow": true, "shadowBlur": 60, "shadowColor": "#FF00FF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 12, "endY": 9, "color": "#FFFFFF", "width": 8, "glow": true, "shadowBlur": 25, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 7, "centerY": 11, "startRadius": 1, "endRadius": 3.5, "color": "rgba(255, 0, 255, 1)", "fill": false, "lineWidth": 5, "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 9.5, "startRadius": 0.5, "endRadius": 3.0, "color": "rgba(255, 0, 255, 1)", "fill": false, "lineWidth": 4, "startOpacity": 0.9, "endOpacity": 0 }
]
},
{
"time_offset_ms": 450,
"type": "VFX",
"target_id": "abyss_summoner_malok",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(4) contrast(1.5) sepia(60%) hue-rotate(-40deg) saturate(400%) blur(2px) drop-shadow(0 0 50px #ff0055)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1) skew(0deg)", "offset": 0 },
{ "transform": "translate(20px, -8px) rotate(18deg) scale(0.85) skew(-20deg)", "offset": 0.05 },
{ "transform": "translate(12px, -3px) rotate(8deg) scale(0.92) skew(-8deg)", "offset": 0.2 },
{ "transform": "translate(0,0) scale(1) skew(0deg)", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 0, "endRadius": 4.5, "color": "rgba(255, 50, 0, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12.8, "centerY": 8.2, "startRadius": 0, "endRadius": 2.0, "color": "rgba(100, 0, 20, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11.2, "centerY": 8.5, "startRadius": 0, "endRadius": 1.5, "color": "rgba(80, 0, 10, 1)", "fill": true, "startOpacity": 0.9, "endOpacity": 0 }
]
},
{
"time_offset_ms": 1100,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 10,
"target_y": 10
},
{
"time_offset_ms": 1150,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 10, "endX": 10, "endY": 10, "color": "#00FFFF", "width": 14, "glow": true, "shadowBlur": 40, "shadowColor": "#00FFFF", "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8.2, "startY": 9.8, "endX": 9.8, "endY": 10.2, "color": "#FFFFFF", "width": 4, "glow": true, "shadowBlur": 10, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8, "centerY": 10, "startRadius": 0, "endRadius": 3, "color": "rgba(0, 255, 255, 0.5)", "fill": false, "lineWidth": 6, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 1400,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -185,
"is_critical": false
},
{
"time_offset_ms": 1420,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 700,
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(12px, 8px) rotate(6deg) skew(10deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.1 },
{ "transform": "translate(-4px, -2px) rotate(-2deg)", "offset": 0.4 },
{ "transform": "translate(0,0)", "offset": 1 }
],
"options": { "duration": 700, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 8.5, "endX": 12.5, "endY": 11.5, "color": "#00FFFF", "width": 12, "glow": true, "shadowBlur": 35, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 0, "endRadius": 2.5, "color": "rgba(0, 255, 255, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11.8, "centerY": 10.8, "startRadius": 0, "endRadius": 1.2, "color": "rgba(0, 150, 150, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 2200,
"type": "SKILL",
"actor_id": "abyss_summoner_malok",
"target_id": "cyber_blade_zero",
"hp_change": -150,
"is_critical": false
},
{
"time_offset_ms": 2250,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 1800,
"css_override": {
"filter": "sepia(100%) hue-rotate(280deg) brightness(0.3) contrast(2) blur(1.5px) drop-shadow(0 0 30px #4B0082)",
"transform": "scale(0.95)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0)", "offset": 0 },
{ "transform": "translate(-8px, 6px) rotate(-4deg)", "offset": 0.25 },
{ "transform": "translate(6px, -8px) rotate(5deg)", "offset": 0.5 },
{ "transform": "translate(-5px, -5px) rotate(-2deg)", "offset": 0.75 },
{ "transform": "translate(0,0)", "offset": 1 }
],
"options": { "duration": 150, "iterations": 12 }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 0, "endRadius": 3.5, "color": "rgba(75, 0, 130, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0.2 },
{ "action": "ANIMATE_LINE", "startX": 12, "startY": 9, "endX": 10.5, "endY": 10.5, "color": "#4B0082", "width": 15, "glow": true, "shadowBlur": 25, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 12, "endX": 10, "endY": 10.5, "color": "#800080", "width": 12, "glow": true, "shadowBlur": 20, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 2500,
"type": "DIALOGUE",
"actor_id": "abyss_summoner_malok",
"content": "Melt into the Abyss, fleshling!",
"emotion": "SADISTIC"
},
{
"time_offset_ms": 3200,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -80,
"is_critical": false
},
{
"time_offset_ms": 3250,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 800,
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "offset": 0 },
{ "transform": "scale(1.2) translateY(-20px) rotate(-10deg)", "easing": "ease-in", "offset": 0.4 },
{ "transform": "scale(0.9) translateY(15px) translateX(-15px) rotate(5deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.5 },
{ "transform": "scale(1) translateY(0) translateX(0) rotate(0deg)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
}
},
{
"time_offset_ms": 3300,
"type": "VFX",
"target_id": null,
"duration_ms": 1200,
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 10.5, "centerY": 10.5, "startRadius": 0.5, "endRadius": 7, "color": "rgba(150, 140, 130, 0.7)", "fill": false, "lineWidth": 15, "glow": true, "shadowBlur": 20, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10.5, "startY": 10.5, "endX": 7.5, "endY": 7.5, "color": "#333333", "width": 8, "glow": false, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10.5, "startY": 10.5, "endX": 13.5, "endY": 13.5, "color": "#333333", "width": 10, "glow": false, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10.5, "startY": 10.5, "endX": 6.5, "endY": 12.5, "color": "#333333", "width": 6, "glow": false, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 4100,
"type": "DIALOGUE",
"actor_id": "cyber_blade_zero",
"content": "Too slow.",
"emotion": "COLD"
},
{
"time_offset_ms": 4300,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -210,
"is_critical": true
},
{
"time_offset_ms": 4350,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(5) contrast(3) invert(10%) saturate(500%) drop-shadow(0 0 60px #00FFFF)",
"transform": "perspective(600px) rotateX(15deg)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(-30px, -20px) rotate(-25deg) scale(0.7) skew(30deg)", "offset": 0.02 },
{ "transform": "translate(25px, 15px) rotate(20deg) scale(0.8) skew(-20deg)", "offset": 0.05 },
{ "transform": "translate(-10px, 25px) rotate(-10deg) scale(0.85)", "offset": 0.15 },
{ "transform": "translate(0, 30px) scaleX(1.2) scaleY(0.5)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 11, "endX": 13, "endY": 9, "color": "#00FFFF", "width": 30, "glow": true, "shadowBlur": 100, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 13, "startY": 11, "endX": 9, "endY": 9, "color": "#00FFFF", "width": 30, "glow": true, "shadowBlur": 100, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 0, "endRadius": 5, "color": "rgba(0, 255, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 1, "endRadius": 9, "color": "rgba(0, 255, 255, 1)", "fill": false, "lineWidth": 10, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11.5, "centerY": 10.5, "startRadius": 0, "endRadius": 2.5, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.2, "centerY": 9.1, "startRadius": 0, "endRadius": 1.8, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 4800,
"type": "NARRATIVE",
"content": "The neon rain sizzles against the fresh plasma burns as Abyssal sludge splatters across the grid."
}
]
}
{
"chunk_summary": "Lynx charges her plasma railgun to critical levels, blowing a massive chunk out of Brutus's stitched flesh to cover Zero's advance. Moving with blinding speed, Zero maneuvers around the colossal brute, leaving neon afterimages as he strikes at Malok's chanting form. Brutus violently crushes the space Zero just occupied, the kinetic shockwave barely grazing the highly agile assassin. Retaliating, Malok bleeds black sludge that rapidly transfigures into abyssal tentacles, lashing out and searing into Zero's cybernetic armor.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 815, "x": 11, "y": 9 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 470, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 2820, "x": 11, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 5200,
"type": "NARRATIVE",
"content": "The toxic rain vaporizes instantly as Lynx's Railgun overheats, emitting a deadly, high-pitched whine."
},
{
"time_offset_ms": 5500,
"type": "SKILL",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -285,
"is_critical": true
},
{
"time_offset_ms": 5550,
"type": "VFX",
"target_id": "neon_sniper_lynx",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(2) drop-shadow(0 0 30px #FF00FF)",
"transform-origin": "bottom center"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(-20px, 10px) rotate(-15deg) scale(0.9)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "translate(-5px, 2px) rotate(-3deg) scale(0.98)", "offset": 0.4 },
{ "transform": "translate(0,0) scale(1)", "easing": "ease-in-out", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 0, "endRadius": 4, "color": "rgba(255, 0, 255, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 4, "endRadius": 8, "color": "rgba(255, 255, 255, 0.5)", "fill": false, "lineWidth": 4, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 5560,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 100, 255, 0.3)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 5600,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(4) contrast(3) saturate(500%) sepia(80%) hue-rotate(250deg) drop-shadow(0 0 60px #FF00FF)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1) skew(0deg)", "offset": 0 },
{ "transform": "translate(25px, -15px) rotate(20deg) scale(0.8) skew(-25deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.05 },
{ "transform": "translate(10px, -5px) rotate(10deg) scale(0.9) skew(-10deg)", "offset": 0.2 },
{ "transform": "translate(15px, 0px) rotate(5deg) scale(0.95)", "offset": 0.4 },
{ "transform": "translate(0, 10px) scaleX(1.1) scaleY(0.8)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 11, "endY": 10, "color": "#FF00FF", "width": 40, "glow": true, "shadowBlur": 80, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 11, "endY": 10, "color": "#FFFFFF", "width": 12, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 0, "endRadius": 6, "color": "rgba(255, 0, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 2, "endRadius": 10, "color": "rgba(255, 150, 255, 0.8)", "fill": false, "lineWidth": 8, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11.5, "centerY": 9.5, "startRadius": 0, "endRadius": 3, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 8.5, "startRadius": 0, "endRadius": 1.5, "color": "rgba(100, 0, 0, 1)", "fill": true, "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12.5, "centerY": 10.5, "startRadius": 0, "endRadius": 2.0, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 0.8, "endOpacity": 0 }
]
},
{
"time_offset_ms": 6100,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 11,
"target_y": 9
},
{
"time_offset_ms": 6150,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 600,
"css_override": {
"filter": "brightness(2) blur(3px) drop-shadow(0 0 15px #00FFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scaleX(1) skewX(0deg)", "offset": 0 },
{ "transform": "scaleX(2.5) skewX(-40deg) translateX(10px)", "offset": 0.3 },
{ "transform": "scaleX(1) skewX(0deg) translateX(0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 11, "endY": 9, "color": "#00FFFF", "width": 15, "glow": true, "shadowBlur": 40, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.2, "centerY": 9.8, "startRadius": 1, "endRadius": 3, "color": "rgba(0, 255, 255, 0.5)", "fill": true, "startOpacity": 0.8, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.5, "centerY": 9.5, "startRadius": 1, "endRadius": 3, "color": "rgba(0, 255, 255, 0.4)", "fill": true, "startOpacity": 0.7, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.8, "centerY": 9.2, "startRadius": 1, "endRadius": 3, "color": "rgba(0, 255, 255, 0.3)", "fill": true, "startOpacity": 0.5, "endOpacity": 0 }
]
},
{
"time_offset_ms": 6600,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "abyss_summoner_malok",
"hp_change": -265,
"is_critical": false
},
{
"time_offset_ms": 6650,
"type": "VFX",
"target_id": "abyss_summoner_malok",
"duration_ms": 900,
"css_override": {
"filter": "brightness(1.5) contrast(2) invert(20%) hue-rotate(180deg) blur(1px)",
"transform-origin": "center right"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(0) scale(1)", "offset": 0 },
{ "transform": "translateX(15px) scale(0.85) skewX(25deg) rotate(10deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.1 },
{ "transform": "translateX(5px) scale(0.95) skewX(-10deg) rotate(-5deg)", "offset": 0.3 },
{ "transform": "translateX(0) scale(1) skewX(0deg) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10.5, "startY": 9.5, "endX": 13, "endY": 8, "color": "#00FFFF", "width": 18, "glow": true, "shadowBlur": 50, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 11, "startY": 9, "endX": 12.5, "endY": 8.5, "color": "#FFFFFF", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 0, "endRadius": 4.5, "color": "rgba(0, 255, 255, 0.7)", "fill": false, "lineWidth": 6, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12.2, "centerY": 8.8, "startRadius": 0, "endRadius": 2.5, "color": "rgba(20, 0, 40, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 7100,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -45,
"is_critical": false
},
{
"time_offset_ms": 7140,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 10, "startRadius": 1, "endRadius": 9, "color": "rgba(180, 170, 160, 0.6)", "fill": false, "lineWidth": 25, "glow": true, "shadowBlur": 30, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(50, 40, 30, 0.4)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 7150,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 700,
"css_override": {
"filter": "brightness(1.5) drop-shadow(0 0 10px #00FFFF)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1) skew(0deg)", "offset": 0 },
{ "transform": "translate(-12px, -8px) scale(0.9) skew(15deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.1 },
{ "transform": "translate(8px, 5px) scale(0.95) skew(-5deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(1) skew(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 9, "startRadius": 0, "endRadius": 5, "color": "rgba(0, 255, 255, 0.3)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 7500,
"type": "DIALOGUE",
"actor_id": "abyss_summoner_malok",
"content": "Your steel cannot cut the void!",
"emotion": "SADISTIC"
},
{
"time_offset_ms": 8200,
"type": "SKILL",
"actor_id": "abyss_summoner_malok",
"target_id": "cyber_blade_zero",
"hp_change": -110,
"is_critical": false
},
{
"time_offset_ms": 8250,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 2000,
"css_override": {
"filter": "sepia(100%) hue-rotate(270deg) brightness(0.4) contrast(2.5) saturate(300%) drop-shadow(0 0 40px #2E0854)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) rotate(0deg) scale(1)" },
{ "transform": "translate(-8px, 6px) rotate(-8deg) scale(0.9)" },
{ "transform": "translate(6px, -4px) rotate(6deg) scale(0.95)" },
{ "transform": "translate(-4px, -6px) rotate(-4deg) scale(0.9)" },
{ "transform": "translate(4px, 8px) rotate(4deg) scale(0.95)" },
{ "transform": "translate(0,0) rotate(0deg) scale(1)" }
],
"options": { "duration": 200, "iterations": 10, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 12, "startY": 9, "endX": 11, "endY": 9, "color": "#1A0033", "width": 20, "glow": true, "shadowBlur": 30, "shadowColor": "#4B0082", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 12, "startY": 9, "endX": 10.5, "endY": 8.5, "color": "#4B0082", "width": 12, "glow": true, "shadowBlur": 20, "shadowColor": "#8A2BE2", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 12, "startY": 9, "endX": 11.2, "endY": 9.8, "color": "#8A2BE2", "width": 8, "glow": true, "shadowBlur": 15, "shadowColor": "#9400D3", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 9, "startRadius": 0, "endRadius": 4, "color": "rgba(75, 0, 130, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11, "centerY": 9, "startRadius": 2, "endRadius": 6, "color": "rgba(46, 8, 84, 0.9)", "fill": false, "lineWidth": 6, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 8900,
"type": "DIALOGUE",
"actor_id": "neon_sniper_lynx",
"content": "Target locked. Keep him pinned, Zero.",
"emotion": "CALM"
},
{
"time_offset_ms": 9600,
"type": "NARRATIVE",
"content": "The alley floor fractures, glowing with volatile plasma residue and seeping dark magic."
}
]
}
{
"chunk_summary": "Zero capitalizes on Lynx's covering fire, overclocking his katana to brutally sever Malok's defensive tentacles. In a desperate bid to save its master, Brutus violently slams the ground, the kinetic shockwave knocking Zero backward and bruising his cybernetic ribs. However, the momentary clear line of sight is all Lynx needs. A precise, overcharged plasma shot from across the alley completely vaporizes Malok's upper torso. The dark summoner implodes into a puddle of boiling sludge, leaving the towering flesh golem to roar in enraged, undirected fury.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 565, "x": 10, "y": 9 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 0, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 2820, "x": 10, "y": 10 }
},
"timeline": [
{
"time_offset_ms": 10200,
"type": "NARRATIVE",
"content": "Zero's katana emits a deafening, high-frequency whine as he channels raw neon core energy for a lethal execution."
},
{
"time_offset_ms": 10500,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "abyss_summoner_malok",
"hp_change": -380,
"is_critical": true
},
{
"time_offset_ms": 10540,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 255, 255, 0.4)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 10550,
"type": "VFX",
"target_id": "abyss_summoner_malok",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(4) contrast(200%) saturate(300%) drop-shadow(0 0 50px #00FFFF) hue-rotate(60deg)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1) skew(0deg)", "offset": 0 },
{ "transform": "translate(25px, -10px) rotate(15deg) scale(0.8) skew(35deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "translate(-15px, 5px) rotate(-10deg) scale(0.9) skew(-20deg)", "offset": 0.15 },
{ "transform": "translate(5px, 15px) rotate(5deg) scale(0.95)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(1) skew(0deg)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 13.5, "endY": 7.5, "color": "#00FFFF", "width": 25, "glow": true, "shadowBlur": 60, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 8, "endX": 13.5, "endY": 10.5, "color": "#00FFFF", "width": 25, "glow": true, "shadowBlur": 60, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 11.5, "startY": 9, "endX": 13, "endY": 9, "color": "#FFFFFF", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 0, "endRadius": 5, "color": "rgba(20, 0, 40, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 1, "endRadius": 8, "color": "rgba(139, 0, 0, 0.8)", "fill": false, "lineWidth": 8, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12.5, "centerY": 8.2, "startRadius": 0, "endRadius": 2, "color": "rgba(0, 0, 0, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 11.2, "centerY": 9.8, "startRadius": 0, "endRadius": 1.5, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 10900,
"type": "DIALOGUE",
"actor_id": "abyss_summoner_malok",
"content": "No... the ritual... is incomplete...!",
"emotion": "PANIC"
},
{
"time_offset_ms": 11200,
"type": "SKILL",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -250,
"is_critical": false
},
{
"time_offset_ms": 11240,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(150, 50, 50, 0.2)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 11250,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 1000,
"css_override": {
"filter": "blur(2px) contrast(150%) brightness(1.5) drop-shadow(0 0 20px #FF0000)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1) rotate(0deg)", "offset": 0 },
{ "transform": "translate(-20px, -15px) scale(0.8) rotate(-25deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.1 },
{ "transform": "translate(-10px, -5px) scale(0.9) rotate(-10deg)", "offset": 0.3 },
{ "transform": "translate(0, 0) scale(1) rotate(0deg)", "easing": "ease-in-out", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 1, "endRadius": 12, "color": "rgba(200, 100, 100, 0.8)", "fill": false, "lineWidth": 25, "glow": true, "shadowBlur": 40, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 6, "endY": 6, "color": "#441111", "width": 8, "glow": false, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 14, "endY": 14, "color": "#441111", "width": 10, "glow": false, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 5, "endY": 12, "color": "#441111", "width": 6, "glow": false, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 11500,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 10,
"target_y": 9
},
{
"time_offset_ms": 11550,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 500,
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 8.5, "startY": 7.5, "endX": 10, "endY": 9, "color": "#00FFFF", "width": 8, "glow": true, "shadowBlur": 15, "shadowColor": "#00FFFF", "startOpacity": 0.8, "endOpacity": 0 }
]
},
{
"time_offset_ms": 12200,
"type": "SKILL",
"actor_id": "neon_sniper_lynx",
"target_id": "abyss_summoner_malok",
"hp_change": -90,
"is_critical": true
},
{
"time_offset_ms": 12240,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 255, 255, 1)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 12250,
"type": "VFX",
"target_id": "abyss_summoner_malok",
"duration_ms": 2500,
"css_override": {
"filter": "brightness(10) contrast(5) saturate(0%) invert(100%) blur(8px) drop-shadow(0 0 100px #FFFFFF)",
"mix-blend-mode": "color-dodge",
"opacity": "0"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skewX(0deg) translateY(0)", "opacity": 1, "offset": 0 },
{ "transform": "scale(1.5) skewX(30deg) translateY(-10px)", "opacity": 0.9, "offset": 0.1 },
{ "transform": "scale(0.8) skewX(-20deg) translateY(-30px) rotate(45deg)", "opacity": 0.5, "offset": 0.4 },
{ "transform": "scale(0.1) translateY(50px) rotate(90deg)", "opacity": 0, "offset": 1 }
],
"options": { "duration": 2000, "iterations": 1, "fill": "forwards", "easing": "cubic-bezier(0.5, 0, 1, 1)" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 12, "endY": 9, "color": "#FF00FF", "width": 60, "glow": true, "shadowBlur": 150, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 12, "endY": 9, "color": "#FFFFFF", "width": 20, "glow": true, "shadowBlur": 50, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 1, "endRadius": 15, "color": "rgba(255, 0, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 5, "endRadius": 25, "color": "rgba(255, 100, 255, 0.8)", "fill": false, "lineWidth": 15, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 10, "endRadius": 0, "color": "rgba(0, 0, 0, 1)", "fill": true, "startOpacity": 0, "endOpacity": 1 }
]
},
{
"time_offset_ms": 12800,
"type": "NARRATIVE",
"content": "Malok's corporeal form utterly fails, collapsing into a bubbling pool of corrosive black fluid."
},
{
"time_offset_ms": 12850,
"type": "VFX",
"target_id": null,
"duration_ms": 5000,
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 12, "centerY": 9, "startRadius": 0, "endRadius": 4, "color": "rgba(15, 0, 30, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0.5 },
{ "action": "ANIMATE_CIRCLE", "centerX": 12.5, "centerY": 8.5, "startRadius": 0, "endRadius": 2, "color": "rgba(30, 0, 50, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0.3 }
]
},
{
"time_offset_ms": 13900,
"type": "DIALOGUE",
"actor_id": "flesh_golem_brutus",
"content": "RRRRAAAAGGH!!!",
"emotion": "AGGRESSIVE"
},
{
"time_offset_ms": 14000,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 2000,
"css_override": {
"filter": "drop-shadow(0 0 60px #FF0000) saturate(500%) contrast(200%) brightness(1.5) sepia(50%) hue-rotate(330deg)",
"transform-origin": "bottom center"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skewX(0deg)", "offset": 0 },
{ "transform": "scale(1.3) skewX(-5deg)", "offset": 0.2 },
{ "transform": "scale(1.2) skewX(5deg)", "offset": 0.4 },
{ "transform": "scale(1.35) skewX(-3deg)", "offset": 0.6 },
{ "transform": "scale(1.2) skewX(2deg)", "offset": 0.8 },
{ "transform": "scale(1.1) skewX(0deg)", "offset": 1 }
],
"options": { "duration": 2000, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 2, "endRadius": 15, "color": "rgba(255, 0, 0, 0.4)", "fill": false, "lineWidth": 30, "glow": true, "shadowBlur": 50, "shadowColor": "#FF0000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 4, "endRadius": 20, "color": "rgba(139, 0, 0, 0.3)", "fill": false, "lineWidth": 15, "glow": true, "shadowBlur": 20, "shadowColor": "#FF0000", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 14500,
"type": "MOVE",
"actor_id": "flesh_golem_brutus",
"target_x": 10,
"target_y": 10
},
{
"time_offset_ms": 14550,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 0.5, "endRadius": 6, "color": "rgba(50, 20, 20, 0.6)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 8, "endY": 8, "color": "#000000", "width": 5, "glow": false, "startOpacity": 0.8, "endOpacity": 0 }
]
}
]
}
{
"chunk_summary": "Devoid of its master's control, Brutus goes completely berserk. The towering abomination unleashes a devastating backhand that catches Zero mid-stance, shattering a part of his cybernetic ribs and sending him skidding across the wet pavement. Lynx immediately fires a rapid plasma burst to draw the golem's aggro, searing its stitched flesh. Using the distraction, Zero dashes back to reassess, his neon katana flickering. Brutus lumbers forward relentlessly, but his wild swings become predictable. Zero easily side-steps a crushing blow, countering with a precise, high-frequency upward slash that severs one of the golem's massive tendons.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 275, "x": 8, "y": 8 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 0, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 2470, "x": 9, "y": 9 }
},
"timeline": [
{
"time_offset_ms": 15100,
"type": "NARRATIVE",
"content": "The hulking mass of stitched flesh thrashes wildly, the toxic rain sizzling against its enraged, mutated muscles."
},
{
"time_offset_ms": 15300,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -250,
"is_critical": true
},
{
"time_offset_ms": 15340,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 0, 0.4)", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 2, "endRadius": 15, "color": "rgba(100, 10, 10, 0.6)", "fill": false, "lineWidth": 40, "glow": true, "shadowBlur": 50, "shadowColor": "#FF0000", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 15350,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 1200,
"css_override": {
"filter": "brightness(0.3) contrast(200%) sepia(80%) hue-rotate(-50deg) blur(2px) drop-shadow(0 0 20px #FF0000)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1) rotate(0deg) skew(0deg)", "offset": 0 },
{ "transform": "translate(-30px, -20px) scale(0.8) rotate(-45deg) skew(20deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "translate(-45px, -5px) scale(0.85) rotate(-60deg) skew(10deg)", "offset": 0.15 },
{ "transform": "translate(-50px, 0px) scale(0.9) rotate(-75deg) skew(0deg)", "offset": 0.3 },
{ "transform": "translate(-48px, 2px) scale(0.95) rotate(-70deg)", "easing": "ease-out", "offset": 0.5 },
{ "transform": "translate(0, 0) scale(1) rotate(0deg)", "easing": "ease-in-out", "offset": 1 }
],
"options": { "duration": 1200, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 6, "endY": 8, "color": "#00FFFF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 6.5, "endY": 8.5, "color": "#FFFFFF", "width": 4, "glow": true, "shadowBlur": 10, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 0, "endRadius": 4, "color": "rgba(255, 0, 0, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9.5, "startRadius": 0, "endRadius": 2.5, "color": "rgba(0, 255, 255, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 7, "endY": 9, "color": "#FF0000", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#FF0000", "startOpacity": 0.9, "endOpacity": 0 }
]
},
{
"time_offset_ms": 15700,
"type": "DIALOGUE",
"actor_id": "cyber_blade_zero",
"content": "Tch. My biometrics are failing. Mindless brute.",
"emotion": "COLD"
},
{
"time_offset_ms": 16200,
"type": "ATTACK",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -150,
"is_critical": false
},
{
"time_offset_ms": 16240,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 255, 0.15)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 16250,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 800,
"css_override": {
"filter": "brightness(2.5) contrast(1.8) saturate(300%) sepia(50%) hue-rotate(280deg) drop-shadow(0 0 40px #FF00FF)",
"transform-origin": "center right"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0,0) scale(1)", "offset": 0 },
{ "transform": "translate(15px, -5px) rotate(8deg) scale(0.95)", "offset": 0.05 },
{ "transform": "translate(8px, 3px) rotate(-4deg) scale(0.98)", "offset": 0.15 },
{ "transform": "translate(12px, -2px) rotate(6deg) scale(0.96)", "offset": 0.25 },
{ "transform": "translate(0,0) scale(1)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 10, "endY": 10, "color": "#FF00FF", "width": 18, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.8, "startY": 14.2, "endX": 10.3, "endY": 9.7, "color": "#FF66FF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.2, "startY": 14.8, "endX": 9.7, "endY": 10.3, "color": "#FF00FF", "width": 14, "glow": true, "shadowBlur": 35, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 0, "endRadius": 6, "color": "rgba(255, 0, 255, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 10, "startRadius": 3, "endRadius": 10, "color": "rgba(255, 105, 180, 0.6)", "fill": false, "lineWidth": 8, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.5, "centerY": 9.5, "startRadius": 0, "endRadius": 3, "color": "rgba(50, 0, 50, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 16800,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 8,
"target_y": 8
},
{
"time_offset_ms": 16850,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 600,
"css_override": {
"filter": "brightness(2) blur(4px) drop-shadow(0 0 25px #00FFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scaleX(1) skewX(0deg)", "offset": 0 },
{ "transform": "scaleX(3) skewX(-50deg) translateX(15px)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.2 },
{ "transform": "scaleX(1.5) skewX(-20deg) translateX(5px)", "offset": 0.5 },
{ "transform": "scaleX(1) skewX(0deg) translateX(0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 9, "endX": 8, "endY": 8, "color": "#00FFFF", "width": 20, "glow": true, "shadowBlur": 50, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 9, "endX": 8, "endY": 8, "color": "#FFFFFF", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 8.5, "startRadius": 1, "endRadius": 4, "color": "rgba(0, 255, 255, 0.4)", "fill": true, "startOpacity": 0.8, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.5, "centerY": 8.2, "startRadius": 1, "endRadius": 4, "color": "rgba(0, 255, 255, 0.3)", "fill": true, "startOpacity": 0.6, "endOpacity": 0 }
]
},
{
"time_offset_ms": 17500,
"type": "MOVE",
"actor_id": "flesh_golem_brutus",
"target_x": 9,
"target_y": 9
},
{
"time_offset_ms": 17540,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 1, "endRadius": 12, "color": "rgba(40, 30, 20, 0.6)", "fill": false, "lineWidth": 30, "glow": true, "shadowBlur": 20, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(20, 10, 5, 0.3)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 17550,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 600,
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0)", "offset": 0 },
{ "transform": "scale(1.1) translateY(8px) skewX(5deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.3 },
{ "transform": "scale(1) translateY(0) skewX(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 1, "endRadius": 5, "color": "rgba(80, 50, 40, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 18200,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -40,
"is_critical": false
},
{
"time_offset_ms": 18250,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 700,
"css_override": {
"filter": "brightness(1.5) drop-shadow(0 0 10px #FFFF00)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(0) rotate(0deg)", "offset": 0 },
{ "transform": "translateX(-10px) rotate(-5deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.1 },
{ "transform": "translateX(5px) rotate(2deg)", "offset": 0.3 },
{ "transform": "translateX(0) rotate(0deg)", "offset": 1 }
],
"options": { "duration": 700, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 10, "endX": 6, "endY": 6, "color": "rgba(200, 200, 200, 0.8)", "width": 40, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 0.6, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8.5, "startY": 8.5, "endX": 7.5, "endY": 7.5, "color": "#FFFF00", "width": 6, "glow": true, "shadowBlur": 15, "shadowColor": "#FFFF00", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8, "centerY": 8, "startRadius": 0, "endRadius": 3, "color": "rgba(255, 255, 0, 0.5)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 18800,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -200,
"is_critical": true
},
{
"time_offset_ms": 18840,
"type": "VFX",
"target_id": null,
"duration_ms": 300,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 255, 255, 0.5)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 18850,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(4) contrast(300%) invert(10%) drop-shadow(0 0 60px #00FFFF) hue-rotate(180deg)",
"transform-origin": "bottom left"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skewX(0deg) rotate(0deg) translateY(0)", "offset": 0 },
{ "transform": "scale(0.8) skewX(-30deg) rotate(-20deg) translateY(-25px)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "scale(0.85) skewX(-10deg) rotate(-5deg) translateY(-5px)", "offset": 0.2 },
{ "transform": "scale(1.1) skewX(10deg) rotate(5deg) translateY(10px)", "offset": 0.4 },
{ "transform": "scale(1) skewX(0deg) rotate(0deg) translateY(0)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 7.5, "startY": 9.5, "endX": 10.5, "endY": 6.5, "color": "#00FFFF", "width": 35, "glow": true, "shadowBlur": 80, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 7.5, "startY": 9.5, "endX": 10.5, "endY": 6.5, "color": "#FFFFFF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 8.5, "startRadius": 0, "endRadius": 6, "color": "rgba(0, 255, 255, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 8.5, "startRadius": 4, "endRadius": 15, "color": "rgba(0, 255, 255, 0.5)", "fill": false, "lineWidth": 10, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 8, "startRadius": 0, "endRadius": 4, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 8, "endX": 11, "endY": 6, "color": "#8B0000", "width": 15, "glow": true, "shadowBlur": 20, "shadowColor": "#FF0000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 8, "endX": 12, "endY": 7, "color": "#440000", "width": 10, "glow": true, "shadowBlur": 15, "shadowColor": "#FF0000", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 19600,
"type": "NARRATIVE",
"content": "Zero's neon blade leaves a glowing, humming trail inside the golem's rotting flesh, boiling the abyssal sludge from within."
}
]
}
{
"chunk_summary": "The severed tendon severely limits Brutus's mobility. Capitalizing on the monster's stumble, Lynx overcharges her railgun, blasting a massive crater into its broad back. Enraged, the golem blindly sweeps its massive arm, but Zero easily flanks the lumbering beast, taking only a grazing hit to his shoulder armor. From his new blindspot advantage, Zero initiates an overdrive sequence, driving his high-frequency blade deep into Brutus's spinal column while Lynx provides continuous suppressive fire.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 250, "x": 8, "y": 10 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 0, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 1480, "x": 9, "y": 9 }
},
"timeline": [
{
"time_offset_ms": 20100,
"type": "NARRATIVE",
"content": "The severed tendon buckles under Brutus's immense weight, causing the golem to violently stumble."
},
{
"time_offset_ms": 20400,
"type": "SKILL",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -350,
"is_critical": true
},
{
"time_offset_ms": 20440,
"type": "VFX",
"target_id": null,
"duration_ms": 800,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 255, 0.3)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 20450,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(4) contrast(3) saturate(500%) sepia(50%) hue-rotate(280deg) drop-shadow(0 0 80px #FF00FF)",
"transform-origin": "center center",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) skew(0deg)", "offset": 0 },
{ "transform": "scale(1.2) translate(30px, -15px) rotate(20deg) skew(-25deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(15px, 10px) rotate(10deg) skew(15deg)", "offset": 0.2 },
{ "transform": "scale(1.05) translate(5px, 5px) rotate(5deg)", "offset": 0.4 },
{ "transform": "scale(1) translate(0, 0) skew(0deg)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 9.5, "endY": 9.5, "color": "#FF00FF", "width": 45, "glow": true, "shadowBlur": 100, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 9.5, "endY": 9.5, "color": "#FFFFFF", "width": 15, "glow": true, "shadowBlur": 40, "shadowColor": "#FF00FF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 9.5, "startRadius": 0, "endRadius": 8, "color": "rgba(255, 0, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 9.5, "startRadius": 5, "endRadius": 18, "color": "rgba(255, 100, 255, 0.8)", "fill": false, "lineWidth": 12, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 9, "startRadius": 0, "endRadius": 3.5, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.8, "centerY": 10.2, "startRadius": 0, "endRadius": 2.5, "color": "rgba(80, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 20900,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 8,
"target_y": 10
},
{
"time_offset_ms": 20950,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 600,
"css_override": {
"filter": "brightness(2) blur(3px) drop-shadow(0 0 25px #00FFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scaleX(1) skewX(0deg)", "offset": 0 },
{ "transform": "scaleX(2.5) skewX(-40deg) translateY(15px)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.2 },
{ "transform": "scaleX(1.5) skewX(-15deg) translateY(5px)", "offset": 0.5 },
{ "transform": "scaleX(1) skewX(0deg) translateY(0)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 8, "endX": 8, "endY": 10, "color": "#00FFFF", "width": 15, "glow": true, "shadowBlur": 40, "shadowColor": "#00FFFF", "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8.2, "startY": 8.2, "endX": 8.2, "endY": 9.8, "color": "#FFFFFF", "width": 5, "glow": true, "shadowBlur": 15, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8, "centerY": 9, "startRadius": 0, "endRadius": 4, "color": "rgba(0, 255, 255, 0.4)", "fill": true, "startOpacity": 0.8, "endOpacity": 0 }
]
},
{
"time_offset_ms": 21300,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -25,
"is_critical": false
},
{
"time_offset_ms": 21330,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 500,
"web_animation": {
"keyframes": [
{ "transform": "scale(1) rotate(0deg)" },
{ "transform": "scale(1.1) rotate(-15deg) translateX(-10px)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)" },
{ "transform": "scale(1) rotate(0deg) translateX(0)" }
],
"options": { "duration": 500, "iterations": 1 }
}
},
{
"time_offset_ms": 21350,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 600,
"css_override": {
"filter": "brightness(1.5) drop-shadow(0 0 15px #FFD700)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(0) rotate(0deg) skewX(0deg)", "offset": 0 },
{ "transform": "translateX(-15px) rotate(-12deg) skewX(10deg)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.1 },
{ "transform": "translateX(5px) rotate(5deg)", "offset": 0.4 },
{ "transform": "translateX(0) rotate(0deg) skewX(0deg)", "offset": 1 }
],
"options": { "duration": 600, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 9.5, "endX": 7.5, "endY": 10.5, "color": "rgba(200, 200, 200, 0.5)", "width": 25, "glow": true, "shadowBlur": 10, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 10, "endX": 6.5, "endY": 11.5, "color": "#FFD700", "width": 4, "glow": true, "shadowBlur": 15, "shadowColor": "#FFA500", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 10, "endX": 7, "endY": 9, "color": "#FFFFFF", "width": 3, "glow": true, "shadowBlur": 10, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8, "centerY": 10, "startRadius": 1, "endRadius": 8, "color": "rgba(255, 215, 0, 0.4)", "fill": false, "lineWidth": 8, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 21800,
"type": "DIALOGUE",
"actor_id": "neon_sniper_lynx",
"content": "Core exposed! Shut him down, Zero!",
"emotion": "CALM"
},
{
"time_offset_ms": 22200,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 400,
"css_override": {
"filter": "brightness(3) saturate(300%) drop-shadow(0 0 40px #00FFFF)"
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 8, "centerY": 10, "startRadius": 0, "endRadius": 4, "color": "rgba(0, 255, 255, 0.8)", "fill": true, "startOpacity": 0, "endOpacity": 1 }
]
},
{
"time_offset_ms": 22300,
"type": "SKILL",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -480,
"is_critical": true
},
{
"time_offset_ms": 22340,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 255, 255, 0.5)", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9.5, "startRadius": 2, "endRadius": 20, "color": "rgba(0, 255, 255, 0.6)", "fill": false, "lineWidth": 50, "glow": true, "shadowBlur": 80, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 22350,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 2000,
"css_override": {
"filter": "invert(100%) brightness(3) contrast(400%) hue-rotate(90deg) saturate(500%) drop-shadow(0 0 100px #00FFFF)",
"mix-blend-mode": "difference"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translateY(0) skewX(0) rotate(0deg)", "offset": 0 },
{ "transform": "scale(1.1) translateY(-30px) skewX(25deg) rotate(15deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translateY(15px) skewX(-20deg) rotate(-10deg)", "offset": 0.1 },
{ "transform": "scale(1.05) translateY(-10px) skewX(15deg) rotate(8deg)", "offset": 0.15 },
{ "transform": "scale(0.95) translateY(5px) skewX(-10deg) rotate(-5deg)", "offset": 0.2 },
{ "transform": "scale(1) translateY(0) skewX(0) rotate(0deg)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 2000, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 7, "startY": 11, "endX": 11, "endY": 7, "color": "#00FFFF", "width": 40, "glow": true, "shadowBlur": 100, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 7, "startY": 11, "endX": 11, "endY": 7, "color": "#FFFFFF", "width": 15, "glow": true, "shadowBlur": 50, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 7.5, "endY": 6, "color": "#00FFFF", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 12, "endY": 10.5, "color": "#00FFFF", "width": 10, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 0, "endRadius": 8, "color": "rgba(255, 255, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 8.5, "startRadius": 0, "endRadius": 5, "color": "rgba(0, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 23200,
"type": "DIALOGUE",
"actor_id": "cyber_blade_zero",
"content": "Severing central nervous system.",
"emotion": "COLD"
},
{
"time_offset_ms": 23700,
"type": "ATTACK",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -160,
"is_critical": false
},
{
"time_offset_ms": 23750,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(2) contrast(1.5) drop-shadow(0 0 20px #FF00FF)"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(0) rotate(0)" },
{ "transform": "translateX(12px) rotate(8deg)", "offset": 0.1 },
{ "transform": "translateX(-5px) rotate(-3deg)", "offset": 0.3 },
{ "transform": "translateX(8px) rotate(5deg)", "offset": 0.5 },
{ "transform": "translateX(0) rotate(0)", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 9, "endY": 9, "color": "#FF00FF", "width": 15, "glow": true, "shadowBlur": 30, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.2, "startY": 14.8, "endX": 8.8, "endY": 9.2, "color": "#FF66FF", "width": 10, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 1, "endRadius": 6, "color": "rgba(255, 0, 255, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.8, "centerY": 9.2, "startRadius": 0, "endRadius": 4, "color": "rgba(255, 255, 255, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 24500,
"type": "NARRATIVE",
"content": "A merciless crossfire of hyper-velocity plasma and neon slashes tears through the abomination, painting the neon-lit alley in boiling viscera."
}
]
}
{
"chunk_summary": "In its death throes, Brutus thrashes violently, spewing corrosive black fluid across the alley. The blind, uncoordinated swings barely graze Zero, who seamlessly maneuvers through the chaos. Lynx maintains her relentless assault, driving another searing plasma round into the golem's bulk. Capitalizing on the stagger, Zero dashes to the golem's flank, unleashing a flurry of high-frequency slashes that tear chunks of animated meat from its frame. Realizing the abomination is at its breaking point, Lynx begins charging her railgun to maximum capacity for a lethal headshot.",
"is_game_over": false,
"winning_team": null,
"updated_state": {
"cyber_blade_zero": { "hp": 220, "x": 10, "y": 8 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 0, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 930, "x": 9, "y": 9 }
},
"timeline": [
{
"time_offset_ms": 25200,
"type": "NARRATIVE",
"content": "Brutus's massive body shudders violently, blindly swinging its remaining arms in a desperate, destructive death throe."
},
{
"time_offset_ms": 25250,
"type": "VFX",
"target_id": null,
"duration_ms": 1500,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(20, 30, 10, 0.3)", "startOpacity": 0, "endOpacity": 0.5 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 2, "endRadius": 10, "color": "rgba(30, 40, 10, 0.8)", "fill": false, "lineWidth": 20, "glow": true, "shadowBlur": 15, "shadowColor": "#000000", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 4, "endRadius": 14, "color": "rgba(50, 0, 0, 0.6)", "fill": false, "lineWidth": 10, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 25500,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -30,
"is_critical": false
},
{
"time_offset_ms": 25550,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 800,
"css_override": {
"filter": "brightness(1.5) sepia(60%) hue-rotate(60deg) drop-shadow(0 0 15px #33FF33)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "translateX(0) translateY(0) scale(1) skew(0)", "offset": 0 },
{ "transform": "translateX(15px) translateY(-10px) scale(0.9) skew(-15deg) rotate(10deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.15 },
{ "transform": "translateX(5px) translateY(-2px) scale(0.95) skew(-5deg) rotate(5deg)", "offset": 0.4 },
{ "transform": "translateX(0) translateY(0) scale(1) skew(0)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 11, "endY": 7, "color": "#224411", "width": 25, "glow": false, "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 9.5, "endX": 10.5, "endY": 8.5, "color": "#00FF00", "width": 4, "glow": true, "shadowBlur": 15, "shadowColor": "#33FF33", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10.5, "centerY": 8.5, "startRadius": 0, "endRadius": 3, "color": "rgba(50, 100, 20, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 10, "centerY": 8, "startRadius": 0, "endRadius": 1.5, "color": "rgba(100, 255, 50, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 26200,
"type": "ATTACK",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -250,
"is_critical": false
},
{
"time_offset_ms": 26240,
"type": "VFX",
"target_id": null,
"duration_ms": 400,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 255, 0.2)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 26250,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1000,
"css_override": {
"filter": "brightness(2.5) contrast(1.5) saturate(400%) drop-shadow(0 0 40px #FF00FF)",
"transform-origin": "center right"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0) scale(1)", "offset": 0 },
{ "transform": "translate(18px, -5px) rotate(8deg) scale(0.95)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "translate(-5px, 2px) rotate(-3deg) scale(0.98)", "offset": 0.25 },
{ "transform": "translate(8px, -1px) rotate(4deg)", "offset": 0.4 },
{ "transform": "translate(0, 0) scale(1)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1000, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 9, "endY": 9, "color": "#FF00FF", "width": 20, "glow": true, "shadowBlur": 50, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3.5, "startY": 14.5, "endX": 9, "endY": 9, "color": "#FFFFFF", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#FF00FF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 0, "endRadius": 6, "color": "rgba(255, 0, 255, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 3, "endRadius": 12, "color": "rgba(255, 150, 255, 0.6)", "fill": false, "lineWidth": 8, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.5, "centerY": 9.5, "startRadius": 0, "endRadius": 2.5, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 27000,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 10,
"target_y": 8
},
{
"time_offset_ms": 27050,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 500,
"css_override": {
"filter": "brightness(2) blur(3px) drop-shadow(0 0 20px #00FFFF)",
"mix-blend-mode": "screen"
},
"web_animation": {
"keyframes": [
{ "transform": "scaleX(1) skewX(0deg) translate(0, 0)", "offset": 0 },
{ "transform": "scaleX(3) skewX(-30deg) translate(15px, -15px)", "easing": "cubic-bezier(0, 1, 0, 1)", "offset": 0.2 },
{ "transform": "scaleX(1) skewX(0deg) translate(0, 0)", "offset": 1 }
],
"options": { "duration": 500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 10, "endX": 10, "endY": 8, "color": "#00FFFF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8.2, "startY": 9.8, "endX": 9.8, "endY": 8.2, "color": "#FFFFFF", "width": 4, "glow": true, "shadowBlur": 15, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 1, "endRadius": 4, "color": "rgba(0, 255, 255, 0.4)", "fill": true, "startOpacity": 0.8, "endOpacity": 0 }
]
},
{
"time_offset_ms": 27500,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -300,
"is_critical": true
},
{
"time_offset_ms": 27540,
"type": "VFX",
"target_id": null,
"duration_ms": 500,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 20, 20, 0.7)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 27550,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1500,
"css_override": {
"filter": "brightness(3) contrast(200%) saturate(300%) invert(10%) drop-shadow(0 0 60px #00FFFF)",
"transform-origin": "center center",
"mix-blend-mode": "difference"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skew(0, 0) translate(0, 0)", "offset": 0 },
{ "transform": "scale(0.8) skew(-30deg, 15deg) translate(-20px, 10px) rotate(-15deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "scale(0.9) skew(20deg, -10deg) translate(15px, -5px) rotate(10deg)", "offset": 0.15 },
{ "transform": "scale(1.1) skew(-10deg, 5deg) translate(-10px, 15px) rotate(-5deg)", "offset": 0.3 },
{ "transform": "scale(0.95) skew(5deg, 0) translate(5px, 0) rotate(2deg)", "offset": 0.5 },
{ "transform": "scale(1) skew(0, 0) translate(0, 0)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 1500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 8.5, "endX": 8, "endY": 9.5, "color": "#00FFFF", "width": 25, "glow": true, "shadowBlur": 50, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10.5, "startY": 9, "endX": 8.5, "endY": 8, "color": "#00FFFF", "width": 20, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 10.5, "endX": 8.5, "endY": 7.5, "color": "#FFFFFF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 8, "startY": 8, "endX": 10, "endY": 10, "color": "#00FFFF", "width": 18, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 0, "endRadius": 8, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 4, "endRadius": 15, "color": "rgba(80, 0, 0, 0.8)", "fill": false, "lineWidth": 15, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 8.5, "startRadius": 0, "endRadius": 4, "color": "rgba(20, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.2, "centerY": 9.8, "startRadius": 0, "endRadius": 3, "color": "rgba(139, 0, 0, 1)", "fill": true, "startOpacity": 0.9, "endOpacity": 0 }
]
},
{
"time_offset_ms": 28300,
"type": "DIALOGUE",
"actor_id": "flesh_golem_brutus",
"content": "*Gurgling, wet roaring as structure fails*",
"emotion": "AGONY"
},
{
"time_offset_ms": 28350,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 2000,
"css_override": {
"filter": "brightness(0.6) saturate(150%) sepia(80%) hue-rotate(330deg)"
},
"web_animation": {
"keyframes": [
{ "transform": "scaleY(1) translateY(0) skewX(0deg)" },
{ "transform": "scaleY(0.9) translateY(10px) skewX(5deg)" },
{ "transform": "scaleY(0.95) translateY(5px) skewX(-2deg)" },
{ "transform": "scaleY(0.85) translateY(15px) skewX(8deg)" },
{ "transform": "scaleY(0.8) translateY(20px) skewX(-5deg)" }
],
"options": { "duration": 2000, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 10, "startRadius": 0, "endRadius": 5, "color": "rgba(30, 0, 0, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0.5 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 10.5, "startRadius": 0, "endRadius": 3, "color": "rgba(10, 0, 0, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0.2 }
]
},
{
"time_offset_ms": 29000,
"type": "DIALOGUE",
"actor_id": "neon_sniper_lynx",
"content": "Target is critical. I'm taking the head.",
"emotion": "CALM"
},
{
"time_offset_ms": 29600,
"type": "VFX",
"target_id": "neon_sniper_lynx",
"duration_ms": 2000,
"css_override": {
"filter": "drop-shadow(0 0 60px #FF00FF) brightness(3) contrast(150%) saturate(400%)"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0)" },
{ "transform": "scale(1.02) translate(-2px, 1px)" },
{ "transform": "scale(0.98) translate(2px, -1px)" },
{ "transform": "scale(1.05) translate(-1px, -2px)" },
{ "transform": "scale(0.95) translate(1px, 2px)" }
],
"options": { "duration": 100, "iterations": 20, "direction": "alternate" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 15, "endRadius": 0, "color": "rgba(255, 0, 255, 0.8)", "fill": false, "lineWidth": 10, "startOpacity": 0, "endOpacity": 1 },
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 10, "endRadius": 0, "color": "rgba(255, 100, 255, 0.9)", "fill": false, "lineWidth": 6, "startOpacity": 0, "endOpacity": 1 },
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 20, "endRadius": 0, "color": "rgba(255, 255, 255, 0.5)", "fill": false, "lineWidth": 4, "startOpacity": 0, "endOpacity": 1 },
{ "action": "ANIMATE_CIRCLE", "centerX": 3, "centerY": 15, "startRadius": 0, "endRadius": 6, "color": "rgba(255, 0, 255, 1)", "fill": true, "startOpacity": 0.2, "endOpacity": 1 }
]
},
{
"time_offset_ms": 29800,
"type": "VFX",
"target_id": null,
"duration_ms": 1000,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 255, 0.15)", "startOpacity": 0, "endOpacity": 0.4 }
]
},
{
"time_offset_ms": 29900,
"type": "NARRATIVE",
"content": "The air around Lynx's plasma railgun distorts violently, glowing with unstable, blinding pink energy."
}
]
}
{
"chunk_summary": "The alley is momentarily blinded by a flash of pure neon pink as Lynx fires her overcharged plasma railgun. The shot vaporizes Brutus's upper torso in a deafening explosion. Barely clinging to its foul animation, the headless golem makes one final, pathetic swing that harmlessly sparks against Zero's armor. Stepping smoothly into the opening, Zero delivers a flawless cross-slash, completely dismembering what remains of the beast. The stitched meat crashes to the wet pavement and dissolves into the toxic rain. Team A secures the sector.",
"is_game_over": true,
"winning_team": "A",
"updated_state": {
"cyber_blade_zero": { "hp": 205, "x": 9, "y": 8 },
"neon_sniper_lynx": { "hp": 800, "x": 3, "y": 15 },
"abyss_summoner_malok": { "hp": 0, "x": 12, "y": 9 },
"flesh_golem_brutus": { "hp": 0, "x": 9, "y": 9 }
},
"timeline": [
{
"time_offset_ms": 30200,
"type": "NARRATIVE",
"content": "A blinding beam of hyper-concentrated plasma annihilates the space between Lynx and the colossal golem."
},
{
"time_offset_ms": 30500,
"type": "SKILL",
"actor_id": "neon_sniper_lynx",
"target_id": "flesh_golem_brutus",
"hp_change": -800,
"is_critical": true
},
{
"time_offset_ms": 30540,
"type": "VFX",
"target_id": null,
"duration_ms": 1500,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 150, 255, 0.8)", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 255, 255, 1)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 30550,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 2500,
"css_override": {
"filter": "brightness(10) contrast(5) saturate(500%) sepia(20%) hue-rotate(280deg) drop-shadow(0 0 100px #FF00FF) invert(15%)",
"mix-blend-mode": "hard-light"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) skewX(0deg) translate(0, 0)", "offset": 0 },
{ "transform": "scale(1.5) skewX(-25deg) translate(20px, -20px) rotate(10deg)", "easing": "cubic-bezier(0.1, 1, 0.1, 1)", "offset": 0.05 },
{ "transform": "scale(1.2) skewX(15deg) translate(-10px, 15px) rotate(-5deg)", "offset": 0.15 },
{ "transform": "scale(1.3) skewX(-10deg) translate(10px, -5px) rotate(5deg)", "offset": 0.3 },
{ "transform": "scale(0.8) skewX(0deg) translate(0, 20px) rotate(0deg)", "easing": "ease-out", "offset": 1 }
],
"options": { "duration": 2500, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 3, "startY": 15, "endX": 10, "endY": 8, "color": "#FF00FF", "width": 60, "glow": true, "shadowBlur": 150, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 3, "startY": 15, "endX": 10, "endY": 8, "color": "#FFFFFF", "width": 25, "glow": true, "shadowBlur": 50, "shadowColor": "#FF00FF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 0, "endRadius": 12, "color": "rgba(255, 0, 255, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 5, "endRadius": 25, "color": "rgba(255, 200, 255, 0.9)", "fill": false, "lineWidth": 15, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 10, "endRadius": 40, "color": "rgba(255, 255, 255, 0.5)", "fill": false, "lineWidth": 5, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 12, "endY": 6, "color": "#FF66FF", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 11, "endY": 12, "color": "#FF66FF", "width": 12, "glow": true, "shadowBlur": 20, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 8, "startRadius": 0, "endRadius": 6, "color": "rgba(0, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 31200,
"type": "ATTACK",
"actor_id": "flesh_golem_brutus",
"target_id": "cyber_blade_zero",
"hp_change": -15,
"is_critical": false
},
{
"time_offset_ms": 31250,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 600,
"css_override": {
"filter": "brightness(1.5) drop-shadow(0 0 10px #FFFF00)"
},
"web_animation": {
"keyframes": [
{ "transform": "translate(0, 0)", "offset": 0 },
{ "transform": "translate(-3px, -2px) rotate(-2deg)", "easing": "ease-out", "offset": 0.2 },
{ "transform": "translate(2px, 1px) rotate(1deg)", "offset": 0.5 },
{ "transform": "translate(0, 0)", "offset": 1 }
],
"options": { "duration": 400, "iterations": 1 }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 8.5, "startRadius": 1, "endRadius": 4, "color": "rgba(255, 255, 0, 0.4)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 8.5, "endX": 10.5, "endY": 7.5, "color": "#FFFF00", "width": 3, "glow": true, "shadowBlur": 8, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9.5, "startY": 8.5, "endX": 8.5, "endY": 7.5, "color": "#FFFF00", "width": 2, "glow": true, "shadowBlur": 8, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 31800,
"type": "MOVE",
"actor_id": "cyber_blade_zero",
"target_x": 9,
"target_y": 8
},
{
"time_offset_ms": 31850,
"type": "VFX",
"target_id": "cyber_blade_zero",
"duration_ms": 400,
"css_override": {
"filter": "blur(2px) brightness(2) drop-shadow(0 0 15px #00FFFF)",
"mix-blend-mode": "screen"
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 8, "endX": 9, "endY": 8, "color": "#00FFFF", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "#00FFFF", "startOpacity": 0.9, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 10, "startY": 8, "endX": 9, "endY": 8, "color": "#FFFFFF", "width": 4, "glow": true, "shadowBlur": 10, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 32200,
"type": "DIALOGUE",
"actor_id": "cyber_blade_zero",
"content": "Target neutralized.",
"emotion": "COLD"
},
{
"time_offset_ms": 32450,
"type": "VFX",
"target_id": null,
"duration_ms": 600,
"canvas_commands": [
{ "action": "ANIMATE_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(0, 10, 20, 0.8)", "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 32500,
"type": "ATTACK",
"actor_id": "cyber_blade_zero",
"target_id": "flesh_golem_brutus",
"hp_change": -130,
"is_critical": true
},
{
"time_offset_ms": 32550,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 1800,
"css_override": {
"filter": "grayscale(100%) brightness(0.3) contrast(300%) drop-shadow(0 0 50px #00FFFF)",
"transform-origin": "center center"
},
"web_animation": {
"keyframes": [
{ "transform": "scale(1) translate(0, 0) rotate(0deg) skewX(0deg)", "offset": 0 },
{ "transform": "scale(1.1) translate(15px, -15px) rotate(15deg) skewX(20deg)", "offset": 0.05 },
{ "transform": "scale(0.9) translate(-25px, 20px) rotate(-25deg) skewX(-30deg)", "offset": 0.1 },
{ "transform": "scale(0.5) translate(-40px, 60px) rotate(-60deg) skewX(-40deg)", "easing": "ease-in", "offset": 0.5 },
{ "transform": "scale(0.2) translate(-60px, 80px) rotate(-90deg) skewX(-50deg) opacity(0)", "offset": 1 }
],
"options": { "duration": 1800, "iterations": 1, "fill": "forwards" }
},
"canvas_commands": [
{ "action": "ANIMATE_LINE", "startX": 11, "startY": 7, "endX": 7, "endY": 11, "color": "#00FFFF", "width": 20, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 11, "startY": 7, "endX": 7, "endY": 11, "color": "#FFFFFF", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 7, "startY": 7, "endX": 11, "endY": 11, "color": "#00FFFF", "width": 20, "glow": true, "shadowBlur": 40, "shadowColor": "#FFFFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 7, "startY": 7, "endX": 11, "endY": 11, "color": "#FFFFFF", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "#00FFFF", "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 0, "endRadius": 10, "color": "rgba(20, 0, 0, 1)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 9, "startRadius": 2, "endRadius": 15, "color": "rgba(80, 0, 0, 0.8)", "fill": false, "lineWidth": 15, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 6, "endY": 12, "color": "#8B0000", "width": 12, "glow": false, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_LINE", "startX": 9, "startY": 9, "endX": 12, "endY": 12, "color": "#550000", "width": 16, "glow": false, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 33200,
"type": "NARRATIVE",
"content": "The mangled remains of Brutus hit the pavement with a sickening thud, immediately dissolving into a pool of dark sludge."
},
{
"time_offset_ms": 33800,
"type": "VFX",
"target_id": "flesh_golem_brutus",
"duration_ms": 3000,
"css_override": {
"filter": "blur(5px) sepia(100%) hue-rotate(250deg) brightness(0.2)",
"opacity": "0"
},
"web_animation": {
"keyframes": [
{ "transform": "translateY(0px) scaleY(1) scaleX(1)", "opacity": "1" },
{ "transform": "translateY(30px) scaleY(0.5) scaleX(1.2)", "opacity": "0.6" },
{ "transform": "translateY(50px) scaleY(0.1) scaleX(1.8)", "opacity": "0" }
],
"options": { "duration": 2500, "iterations": 1, "fill": "forwards", "easing": "ease-in" }
},
"canvas_commands": [
{ "action": "ANIMATE_CIRCLE", "centerX": 9, "centerY": 10, "startRadius": 2, "endRadius": 8, "color": "rgba(20, 10, 30, 0.9)", "fill": true, "startOpacity": 1, "endOpacity": 0.2 },
{ "action": "ANIMATE_CIRCLE", "centerX": 9.5, "centerY": 10.5, "startRadius": 0, "endRadius": 5, "color": "rgba(10, 5, 20, 0.8)", "fill": true, "startOpacity": 1, "endOpacity": 0 },
{ "action": "ANIMATE_CIRCLE", "centerX": 8.5, "centerY": 10.2, "startRadius": 0, "endRadius": 4, "color": "rgba(30, 15, 40, 0.7)", "fill": true, "startOpacity": 1, "endOpacity": 0 }
]
},
{
"time_offset_ms": 34500,
"type": "DIALOGUE",
"actor_id": "neon_sniper_lynx",
"content": "Sector clear. Let's move, Zero.",
"emotion": "CALM"
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
      const fixedJsonString = `[${RAW_DATA_STRING.trim().replace(/}\s*{/g, '},{')}]`;
      const parsedChunks = JSON.parse(fixedJsonString);
      
      // Gộp tất cả mảng timeline của các chunk lại thành một Master_Timeline duy nhất
      combinedTimeline = parsedChunks.flatMap((chunk: any) => chunk.timeline);
      console.log("🔥 Đã nối thành công:", combinedTimeline.length, "sự kiện VFX và Hành động!");
    } catch (error) {
      alert("Lỗi parse dữ liệu. Hãy kiểm tra lại xem nội dung copy đã đủ chưa nhé!");
      console.error("Parse Error:", error);
      return;
    }

    // 2. Ép dữ liệu chuẩn xác cho kịch bản "Cyberpunk Neon vs Abyssal Flesh"
    useMainStore.setState({
      // Môi trường Neon Cyberpunk
      mapPreviewUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop', 
      mapDescription: 'Cyberpunk Neon Alley corrupted by Abyssal flesh. Mưa axit, đèn neon nhấp nháy, một khối u thịt khổng lồ mọc giữa đường.',
      
      // Avatar được thiết kế riêng cho 4 nhân vật
      uploadedShapes: [
        { id: "shape-zero", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Zero&background=00FFFF&color=000&size=150&bold=true" },
        { id: "shape-lynx", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Lynx&background=FF00FF&color=fff&size=150&bold=true" },
        { id: "shape-malok", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Malok&background=4B0082&color=fff&size=150&bold=true" },
        { id: "shape-brutus", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Brutus&background=8B0000&color=fff&size=150&bold=true" }
      ],

      // Đội hình A: Cyber-Ninja
      teamA: [
        {
          id: "cyber_blade_zero",
          team: 'A',
          name: "Cyber Blade Zero",
          personality: "Lạnh lùng, tàn nhẫn, di chuyển như tia chớp.",
          basicAttackDesc: "Chém bằng Katana Neon tần số cao",
          skillDesc: "Gia tốc dịch chuyển trảm",
          stats: { hp: 1200, maxHp: 1200, agility: 95, damage: 150, range: 1 },
          shapeId: "shape-zero",
          position: { x: 8, y: 10 }
        },
        {
          id: "neon_sniper_lynx",
          team: 'A',
          name: "Sniper Lynx",
          personality: "Tính toán chuẩn xác, lạnh lùng.",
          basicAttackDesc: "Bắn súng ngắm Plasma",
          skillDesc: "Sạc năng lượng hủy diệt",
          stats: { hp: 800, maxHp: 800, agility: 70, damage: 250, range: 8 },
          shapeId: "shape-lynx",
          position: { x: 3, y: 15 }
        }
      ],

      // Đội hình B: Abyssal Cult
      teamB: [
        {
          id: "abyss_summoner_malok",
          team: 'B',
          name: "Summoner Malok",
          personality: "Tàn bạo, hỗn loạn, niệm chú cấm.",
          basicAttackDesc: "Bắn cầu ma thuật hắc ám",
          skillDesc: "Triệu hồi xúc tu vực thẳm",
          stats: { hp: 950, maxHp: 950, agility: 40, damage: 130, range: 6 },
          shapeId: "shape-malok",
          position: { x: 12, y: 9 }
        },
        {
          id: "flesh_golem_brutus",
          team: 'B',
          name: "Flesh Golem Brutus",
          personality: "Không não, điên cuồng, khối thịt khâu khổng lồ.",
          basicAttackDesc: "Nện tay với lực động năng vỡ đất",
          skillDesc: "Nhảy dậm nát mặt phẳng",
          stats: { hp: 3500, maxHp: 3500, agility: 15, damage: 180, range: 2 },
          shapeId: "shape-brutus",
          position: { x: 11, y: 10 }
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
      className="fixed top-4 right-4 z-50 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)] border-2 border-cyan-400 animate-pulse transition-all"
    >
      🚀 TEST CYBERPUNK vs ABYSS
    </button>
  );
}
