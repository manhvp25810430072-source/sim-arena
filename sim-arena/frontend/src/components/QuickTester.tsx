import { useMainStore } from '../store/useMainStore';

export default function QuickTester() {
  const handleQuickStart = () => {
    // Ép (Inject) toàn bộ dữ liệu thẳng vào Global Store của Zustand
    useMainStore.setState({
      // 1. Giả lập Bản đồ
      mapPreviewUrl: 'https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=500&auto=format&fit=crop',
      
      // 2. Giả lập Hình ảnh Nhân vật (Không cần upload bằng tay nữa)
      // Dùng UI-Avatars API để tạo ảnh chữ A đỏ và J xanh cho nhanh & chuẩn
      uploadedShapes: [
        { id: "shape-ace", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Ace&background=ef4444&color=fff&size=150&bold=true" },
        { id: "shape-jin", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Jin&background=3b82f6&color=fff&size=150&bold=true" }
      ],

      // 3. Giả lập Nhân vật Ace (Đội A) - 200 HP
      teamA: [{
        id: "da1a9ec0-78e9-4910-a31f-09bf84796a48",
        team: 'A',
        name: "Ace (Rager)",
        personality: "Điên cuồng, bạo lực",
        basicAttackDesc: "Đấm",
        skillDesc: "Đập đất tạo vòng lửa",
        stats: { hp: 200, maxHp: 200, agility: 5, damage: 10, range: 1 },
        shapeId: "shape-ace", // Đã gắn ảnh Ace
        position: { x: 5, y: 5 } // Tọa độ bắt đầu
      }],

      // 4. Giả lập Nhân vật Jin (Đội B) - 100 HP
      teamB: [{
        id: "09861c9b-b2c3-4f85-9afe-28520e9497c3",
        team: 'B',
        name: "Jin (Archer)",
        personality: "Lạnh lùng, tính toán",
        basicAttackDesc: "Bắn tên",
        skillDesc: "Tên xuyên thấu",
        stats: { hp: 100, maxHp: 100, agility: 8, damage: 5, range: 8 },
        shapeId: "shape-jin", // Đã gắn ảnh Jin
        position: { x: 15, y: 15 } // Tọa độ bắt đầu
      }],

      // 5. Giả lập Kịch bản 45 giây (Gộp từ 3 file JSON của bạn)
      Master_Timeline: [
        // --- HIỆP 1 (0-15s) ---
        { "time_offset_ms": 200, "type": "NARRATIVE", "content": "The flat expanse offers no cover. A stark contrast in temperament sets the stage as the raging brawler spots the silent archer." },
        { "time_offset_ms": 500, "type": "DIALOGUE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "content": "I'LL TURN YOU TO ASHES! DON'T RUN!", "emotion": "RAGING" },
        { "time_offset_ms": 800, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 8, "target_y": 5 },
        { "time_offset_ms": 1500, "type": "DIALOGUE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "content": "Predictable trajectory. Adjusting for wind and his erratic acceleration.", "emotion": "CALCULATING" },
        { "time_offset_ms": 2000, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 10, "target_y": 8 },
        { "time_offset_ms": 2600, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 10, "startY": 8, "endX": 8, "endY": 5, "color": "rgba(200, 200, 200, 0.8)", "width": 2, "glow": false }, { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 5, "radius": 0.5, "color": "#ffffff", "fill": true } ] },
        { "time_offset_ms": 2700, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 2800, "type": "VFX", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "duration_ms": 200, "css_override": { "filter": "hue-rotate(-20deg) brightness(1.5)" }, "web_animation": { "keyframes": [ { "transform": "translateX(-5px)" }, { "transform": "translateX(5px)" }, { "transform": "translateX(0)" } ], "options": { "duration": 100, "iterations": 2 } } },
        { "time_offset_ms": 4000, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 10, "target_y": 7 },
        { "time_offset_ms": 4800, "type": "NARRATIVE", "content": "Closing into point-blank range, Ace's fists ignite, superheating the air around him before he slams them into the dirt." },
        { "time_offset_ms": 5000, "type": "VFX", "target_id": null, "duration_ms": 1500, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 7, "radius": 5, "color": "rgba(255, 69, 0, 0.6)", "fill": true }, { "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 7, "radius": 5.2, "color": "rgba(255, 140, 0, 0.9)", "fill": false, "lineWidth": 4 } ] },
        { "time_offset_ms": 5100, "type": "SKILL", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -10, "is_critical": false },
        { "time_offset_ms": 5200, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 1000, "css_override": { "filter": "sepia(80%) hue-rotate(-30deg)" }, "web_animation": { "keyframes": [ { "transform": "translateY(0)" }, { "transform": "translateY(-10px)" }, { "transform": "translateY(0)" } ], "options": { "duration": 300, "iterations": 1, "easing": "ease-out" } } },
        { "time_offset_ms": 6500, "type": "DIALOGUE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "content": "Too close. Repositioning to maintain vector advantage.", "emotion": "FOCUSED" },
        { "time_offset_ms": 7000, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 11, "target_y": 12 },
        { "time_offset_ms": 8500, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 11, "startY": 12, "endX": 10, "endY": 7, "color": "rgba(200, 200, 200, 0.8)", "width": 2, "glow": false } ] },
        { "time_offset_ms": 8600, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -4, "is_critical": false },
        { "time_offset_ms": 10000, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 11, "target_y": 11 },
        { "time_offset_ms": 11300, "type": "VFX", "target_id": null, "duration_ms": 400, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 12, "radius": 1, "color": "rgba(255, 50, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 11400, "type": "ATTACK", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 13000, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 10, "target_y": 15 },
        { "time_offset_ms": 14200, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 10, "startY": 15, "endX": 11, "endY": 11, "color": "rgba(200, 200, 200, 0.8)", "width": 2, "glow": false } ] },
        { "time_offset_ms": 14300, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -6, "is_critical": true },
        
        // --- HIỆP 2 (15-30s) ---
        { "time_offset_ms": 15200, "type": "NARRATIVE", "content": "Ace kicks up clouds of dust as he violently charges forward, his eyes locked on the elusive archer." },
        { "time_offset_ms": 15500, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 9, "target_y": 6 },
        { "time_offset_ms": 16800, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 11, "target_y": 11 },
        { "time_offset_ms": 17200, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 11, "startY": 12, "endX": 11, "endY": 11, "color": "rgba(200, 200, 200, 0.9)", "width": 3, "glow": false } ] },
        { "time_offset_ms": 17300, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 17500, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 11, "target_y": 16 },
        { "time_offset_ms": 19000, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 11, "target_y": 15 },
        { "time_offset_ms": 19800, "type": "VFX", "target_id": null, "duration_ms": 400, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 16, "radius": 0.8, "color": "rgba(255, 69, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 20000, "type": "ATTACK", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 20200, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 300, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(-8px)" }, { "transform": "translateX(0)" } ], "options": { "duration": 150, "iterations": 2 } } },
        { "time_offset_ms": 21500, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 14, "target_y": 18 },
        { "time_offset_ms": 23000, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 14, "startY": 18, "endX": 11, "endY": 15, "color": "rgba(220, 220, 220, 0.8)", "width": 2, "glow": false } ] },
        { "time_offset_ms": 23200, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -4, "is_critical": false },
        { "time_offset_ms": 24500, "type": "DIALOGUE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "content": "STOP SQUIRMING AROUND! BURN!", "emotion": "CRAZED" },
        { "time_offset_ms": 25500, "type": "VFX", "target_id": null, "duration_ms": 1200, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 15, "radius": 5, "color": "rgba(255, 69, 0, 0.5)", "fill": true }, { "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 15, "radius": 5, "color": "rgba(255, 0, 0, 0.8)", "fill": false, "lineWidth": 4 } ] },
        { "time_offset_ms": 25700, "type": "SKILL", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -11, "is_critical": true },
        { "time_offset_ms": 25800, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 800, "css_override": { "filter": "sepia(100%) hue-rotate(-40deg) brightness(0.8)" }, "web_animation": { "keyframes": [ { "transform": "scale(1) rotate(0deg)" }, { "transform": "scale(0.9) rotate(-10deg)" }, { "transform": "scale(1) rotate(0deg)" } ], "options": { "duration": 200, "iterations": 3 } } },
        { "time_offset_ms": 27500, "type": "DIALOGUE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "content": "Blast radius exceeded projections. I must utilize the grid boundaries.", "emotion": "COLD" },
        { "time_offset_ms": 28500, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 18, "target_y": 19 },
        { "time_offset_ms": 29800, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 15, "target_y": 18 },

        // --- HIỆP 3 (30-45s) ---
        { "time_offset_ms": 30200, "type": "NARRATIVE", "content": "Backed against the absolute boundary of the grid, Jin has nowhere to run. He draws his bowstring taut as the flaming brawler lunges." },
        { "time_offset_ms": 30500, "type": "VFX", "target_id": null, "duration_ms": 200, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 18, "startY": 19, "endX": 15, "endY": 18, "color": "rgba(200, 200, 200, 0.9)", "width": 3, "glow": true } ] },
        { "time_offset_ms": 30600, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 31200, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 17, "target_y": 19 },
        { "time_offset_ms": 32000, "type": "VFX", "target_id": null, "duration_ms": 300, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 18, "centerY": 19, "radius": 0.8, "color": "rgba(255, 100, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 32100, "type": "ATTACK", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -6, "is_critical": false },
        { "time_offset_ms": 32200, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 400, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(6px) rotate(5deg)" }, { "transform": "translateX(0)" } ], "options": { "duration": 200, "iterations": 2 } } },
        { "time_offset_ms": 33500, "type": "DIALOGUE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "content": "Dead end. His thermal output is rising again. Must break out of the corner.", "emotion": "CALCULATING" },
        { "time_offset_ms": 34000, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 15, "target_y": 15 },
        { "time_offset_ms": 34800, "type": "VFX", "target_id": null, "duration_ms": 200, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 15, "startY": 15, "endX": 17, "endY": 19, "color": "rgba(220, 220, 220, 0.8)", "width": 2, "glow": false } ] },
        { "time_offset_ms": 35000, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -4, "is_critical": false },
        { "time_offset_ms": 35800, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 15, "target_y": 16 },
        { "time_offset_ms": 36500, "type": "DIALOGUE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "content": "YOU CAN'T HIDE FROM THE FLAMES! DIE!", "emotion": "RAGING" },
        { "time_offset_ms": 36800, "type": "NARRATIVE", "content": "Ace's cooldown resets. He channels pure rage into his fists, ignoring the arrows piercing his skin, and obliterates the earth below him." },
        { "time_offset_ms": 37000, "type": "VFX", "target_id": null, "duration_ms": 1500, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 15, "centerY": 16, "radius": 5, "color": "rgba(255, 50, 0, 0.6)", "fill": true }, { "action": "DRAW_CIRCLE", "centerX": 15, "centerY": 16, "radius": 5.5, "color": "rgba(255, 120, 0, 0.8)", "fill": false, "lineWidth": 5 } ] },
        { "time_offset_ms": 37100, "type": "SKILL", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -11, "is_critical": true },
        { "time_offset_ms": 37200, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 1000, "css_override": { "filter": "sepia(100%) saturate(300%) hue-rotate(-30deg)" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(0.8) translateY(-10px)" }, { "transform": "scale(1) translateY(0)" } ], "options": { "duration": 250, "iterations": 2 } } },
        { "time_offset_ms": 39000, "type": "MOVE", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_x": 11, "target_y": 14 },
        { "time_offset_ms": 40000, "type": "VFX", "target_id": null, "duration_ms": 200, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 11, "startY": 14, "endX": 15, "endY": 16, "color": "rgba(200, 200, 200, 0.9)", "width": 2, "glow": false } ] },
        { "time_offset_ms": 40100, "type": "ATTACK", "actor_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "target_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "hp_change": -6, "is_critical": true },
        { "time_offset_ms": 42000, "type": "MOVE", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_x": 12, "target_y": 14 },
        { "time_offset_ms": 42500, "type": "VFX", "target_id": null, "duration_ms": 250, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 11, "centerY": 14, "radius": 0.8, "color": "rgba(255, 80, 0, 0.9)", "fill": true } ] },
        { "time_offset_ms": 42600, "type": "ATTACK", "actor_id": "da1a9ec0-78e9-4910-a31f-09bf84796a48", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "hp_change": -5, "is_critical": false },
        { "time_offset_ms": 42700, "type": "VFX", "target_id": "09861c9b-b2c3-4f85-9afe-28520e9497c3", "duration_ms": 300, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(-5px)" }, { "transform": "translateX(0)" } ], "options": { "duration": 150, "iterations": 2 } } },
        { "time_offset_ms": 44000, "type": "NARRATIVE", "content": "The constant repositioning is draining Jin's stamina. Ace, operating purely on adrenaline and rage, shows no signs of fatigue as he maintains his relentless assault." }
      ],

      // 6. Ép ứng dụng nhảy thẳng tới màn hình giả lập
      appStage: 'PHASE_5_SIMULATING'
    });
  };

  // Nút bấm lơ lửng góc trên bên phải màn hình
  return (
    <button
      onClick={handleQuickStart}
      className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.8)] border-2 border-white animate-pulse"
    >
      🚀 QUICK TEST (45s)
    </button>
  );
}
