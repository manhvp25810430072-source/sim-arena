import { useMainStore } from '../store/useMainStore';

export default function QuickTester() {
  const handleQuickStart = () => {
    // Ép (Inject) toàn bộ dữ liệu thẳng vào Global Store của Zustand
    useMainStore.setState({
      // 1. Giả lập Bản đồ Núi lửa
      mapPreviewUrl: 'https://images.unsplash.com/photo-1524333892444-2103734a10c2?q=80&w=1000&auto=format&fit=crop',
      mapDescription: 'Đảo Núi Lửa Sụp Đổ: Sức nóng thiêu đốt toàn map. Các ô chứa dung nham rực cháy.',
      
      // 2. Giả lập Hình ảnh Khối nhân vật
      uploadedShapes: [
        { id: "shape-marcus", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Marcus&background=facc15&color=000&size=150&bold=true" },
        { id: "shape-elara", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Elara&background=60a5fa&color=fff&size=150&bold=true" },
        { id: "shape-malakor", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Malakor&background=b91c1c&color=fff&size=150&bold=true" },
        { id: "shape-nyx", file: null as any, previewUrl: "https://ui-avatars.com/api/?name=Nyx&background=4b5563&color=fff&size=150&bold=true" }
      ],

      // 3. Đội hình Phe A
      teamA: [
        {
          id: "char-hero-001",
          team: 'A',
          name: "Thánh Hiệp Sĩ Marcus",
          personality: "Chính trực, bảo vệ đồng đội",
          basicAttackDesc: "Chém kiếm thánh",
          skillDesc: "Hào Quang Hộ Mệnh",
          stats: { hp: 1200, maxHp: 1200, agility: 20, damage: 85, range: 1 },
          shapeId: "shape-marcus",
          position: { x: 1, y: 11 } // Vị trí khớp với đầu kịch bản
        },
        {
          id: "char-mage-002",
          team: 'A',
          name: "Pháp Sư Elara",
          personality: "Lạnh lùng, thực dụng",
          basicAttackDesc: "Tia chớp ma thuật",
          skillDesc: "Bão Tuyết Vĩnh Cửu",
          stats: { hp: 650, maxHp: 650, agility: 35, damage: 120, range: 5 },
          shapeId: "shape-elara",
          position: { x: 2, y: 8 }
        }
      ],

      // 4. Đội hình Phe B
      teamB: [
        {
          id: "char-boss-003",
          team: 'B',
          name: "Chúa Tể Malakor",
          personality: "Tàn bạo, kiêu ngạo",
          basicAttackDesc: "Quật xích lửa",
          skillDesc: "Tiếng Gầm Địa Ngục",
          stats: { hp: 2500, maxHp: 2500, agility: 15, damage: 150, range: 2 },
          shapeId: "shape-malakor",
          position: { x: 12, y: 10 }
        },
        {
          id: "char-assassin-004",
          team: 'B',
          name: "Sát Thủ Nyx",
          personality: "Im lặng, tàn nhẫn",
          basicAttackDesc: "Đâm lén",
          skillDesc: "Bước Nhảy Hư Không",
          stats: { hp: 700, maxHp: 700, agility: 60, damage: 110, range: 1 },
          shapeId: "shape-nyx",
          position: { x: 18, y: 12 } // Nyx xuất phát xa rồi dịch chuyển tới đâm lén
        }
      ],

      // 5. Kịch bản mô phỏng 50 GIÂY (Toàn bộ 10 phân đoạn đã nối liền mạch)
      Master_Timeline: [
        // --- CHUNK 1 (0-5s) ---
        { "time_offset_ms": 0, "type": "NARRATIVE", "content": "Không khí rung lên bần bật vì nhiệt độ. Trận chiến sinh tử bắt đầu!" },
        { "time_offset_ms": 10, "type": "VFX", "target_id": null, "duration_ms": 4990, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.05)" }, { "action": "FILL_RECT", "x": 8, "y": 0, "width": 5, "height": 20, "color": "rgba(255, 30, 0, 0.2)" } ] },
        { "time_offset_ms": 100, "type": "SKILL", "actor_id": "char-assassin-004", "target_id": "char-mage-002", "hp_change": 0, "is_critical": false },
        { "time_offset_ms": 120, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 500, "css_override": { "filter": "brightness(0) invert(1) blur(4px)", "opacity": "0" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 18, "centerY": 12, "radius": 1, "color": "rgba(138, 43, 226, 0.8)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "#8A2BE2" } ] },
        { "time_offset_ms": 400, "type": "MOVE", "actor_id": "char-assassin-004", "target_x": 0, "target_y": 10 },
        { "time_offset_ms": 600, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 400, "css_override": { "opacity": "1", "filter": "drop-shadow(0 0 10px purple)" }, "web_animation": { "keyframes": [ { "transform": "scale(0.1) translateY(-20px)" }, { "transform": "scale(1) translateY(0)" } ], "options": { "duration": 300, "iterations": 1, "easing": "ease-out" } } },
        { "time_offset_ms": 900, "type": "ATTACK", "actor_id": "char-assassin-004", "target_id": "char-mage-002", "hp_change": -110, "is_critical": true },
        { "time_offset_ms": 950, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 800, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(5px) rotate(5deg)" }, { "transform": "translateX(-5px) rotate(-5deg)" }, { "transform": "translateX(0)" } ], "options": { "duration": 150, "iterations": 3 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 0, "startY": 10, "endX": 1, "endY": 10, "color": "#800080", "width": 8, "glow": true, "shadowBlur": 15, "shadowColor": "purple" } ] },
        { "time_offset_ms": 1100, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Kẻ hèn nhát! Đừng hòng đụng vào cô ấy!", "emotion": "ANGRY" },
        { "time_offset_ms": 1300, "type": "MOVE", "actor_id": "char-hero-001", "target_x": 1, "target_y": 11 },
        { "time_offset_ms": 1800, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-assassin-004", "hp_change": -85, "is_critical": false },
        { "time_offset_ms": 1850, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 600, "css_override": { "filter": "sepia(100%) hue-rotate(-50deg) brightness(1.5)" }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 1, "startY": 11, "endX": 0, "endY": 10, "color": "#FFD700", "width": 10, "glow": true, "shadowBlur": 20, "shadowColor": "white" } ] },
        { "time_offset_ms": 2200, "type": "DIALOGUE", "actor_id": "char-mage-002", "content": "Bớt lo chuyện bao đồng đi hiệp sĩ. Mục tiêu là tên chúa tể.", "emotion": "COLD" },
        { "time_offset_ms": 2400, "type": "MOVE", "actor_id": "char-mage-002", "target_x": 2, "target_y": 8 },
        { "time_offset_ms": 3000, "type": "ATTACK", "actor_id": "char-mage-002", "target_id": "char-boss-003", "hp_change": -120, "is_critical": false },
        { "time_offset_ms": 3050, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1000, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(0.95) brightness(1.5)" }, { "transform": "scale(1)" } ], "options": { "duration": 200, "iterations": 2 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 2, "startY": 8, "endX": 17, "endY": 10, "color": "#00FFFF", "width": 6, "glow": true, "shadowBlur": 15, "shadowColor": "blue" } ] },
        { "time_offset_ms": 3500, "type": "MOVE", "actor_id": "char-boss-003", "target_x": 12, "target_y": 10 },
        { "time_offset_ms": 4000, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1000, "css_override": { "filter": "drop-shadow(0 -10px 15px red) brightness(0.8)" }, "web_animation": { "keyframes": [ { "transform": "translateY(0)" }, { "transform": "translateY(5px)" } ], "options": { "duration": 500, "iterations": 2, "direction": "alternate" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 1.5, "color": "rgba(255, 69, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 30, "shadowColor": "red" } ] },
        { "time_offset_ms": 4200, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "Sức nóng này... thật dễ chịu! Các ngươi sẽ sớm thành tro bụi thôi!", "emotion": "ARROGANT" },
        { "time_offset_ms": 4500, "type": "NARRATIVE", "content": "Sức nóng của mặt đất và dung nham bắt đầu thiêu đốt da thịt của tất cả những ai có mặt." },
        { "time_offset_ms": 4600, "type": "VFX", "target_id": null, "duration_ms": 400, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 0, 0, 0.1)" } ] },

        // --- CHUNK 2 (5-10s) ---
        { "time_offset_ms": 5050, "type": "NARRATIVE", "content": "Sức nóng của Đảo Núi Lửa bắt đầu bòn rút sinh lực của mọi sinh vật. Dung nham bám lấy chân Malakor bốc mùi khét lẹt." },
        { "time_offset_ms": 5100, "type": "VFX", "target_id": null, "duration_ms": 4800, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.08)" } ] },
        { "time_offset_ms": 5300, "type": "MOVE", "actor_id": "char-assassin-004", "target_x": 2, "target_y": 9 },
        { "time_offset_ms": 5500, "type": "SKILL", "actor_id": "char-hero-001", "target_id": "char-mage-002", "hp_change": 0, "is_critical": false },
        { "time_offset_ms": 5550, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 3000, "css_override": { "box-shadow": "0 0 25px 10px rgba(255, 215, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.8)", "border-radius": "50%" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(1.05)" } ], "options": { "duration": 500, "iterations": 6, "direction": "alternate" } } },
        { "time_offset_ms": 5800, "type": "ATTACK", "actor_id": "char-assassin-004", "target_id": "char-mage-002", "hp_change": -60, "is_critical": false },
        { "time_offset_ms": 5850, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 500, "web_animation": { "keyframes": [ { "transform": "translateX(-5px) scale(1.1)" }, { "transform": "translateX(10px) scale(1)" }, { "transform": "translateX(0) scale(1)" } ], "options": { "duration": 200, "iterations": 1 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 2, "startY": 9, "endX": 2, "endY": 8, "color": "#4B0082", "width": 6, "glow": true, "shadowBlur": 10, "shadowColor": "purple" }, { "action": "DRAW_CIRCLE", "centerX": 2, "centerY": 8, "radius": 0.8, "color": "rgba(255, 215, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 6200, "type": "DIALOGUE", "actor_id": "char-mage-002", "content": "Kẻ ngáng đường rác rưởi!", "emotion": "ANNOYED" },
        { "time_offset_ms": 6500, "type": "MOVE", "actor_id": "char-mage-002", "target_x": 7, "target_y": 9 },
        { "time_offset_ms": 7200, "type": "SKILL", "actor_id": "char-mage-002", "target_id": "char-boss-003", "hp_change": -150, "is_critical": true },
        { "time_offset_ms": 7250, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 2000, "css_override": { "filter": "hue-rotate(180deg) brightness(1.5) drop-shadow(0 0 20px cyan)" }, "web_animation": { "keyframes": [ { "transform": "translateY(-2px) translateX(-2px)" }, { "transform": "translateY(2px) translateX(2px)" } ], "options": { "duration": 50, "iterations": 40, "direction": "alternate" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 12, "centerY": 10, "radius": 2, "color": "rgba(0, 255, 255, 0.4)", "fill": true, "glow": true, "shadowBlur": 40, "shadowColor": "white" }, { "action": "FILL_RECT", "x": 10.5, "y": 8.5, "width": 3, "height": 3, "color": "rgba(255, 255, 255, 0.3)" } ] },
        { "time_offset_ms": 7800, "type": "MOVE", "actor_id": "char-boss-003", "target_x": 10, "target_y": 9 },
        { "time_offset_ms": 8200, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1500, "css_override": { "filter": "brightness(0.5) sepia(100%) hue-rotate(-50deg) contrast(200%)" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(1.2)" } ], "options": { "duration": 1500, "iterations": 1, "fill": "forwards" } } },
        { "time_offset_ms": 8500, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "GRAAAAAHHH!! TRO BỤI VỀ VỚI TRO BỤI!", "emotion": "FURIOUS" },
        { "time_offset_ms": 8800, "type": "SKILL", "actor_id": "char-boss-003", "target_id": "char-mage-002", "hp_change": -50, "is_critical": false },
        { "time_offset_ms": 8850, "type": "VFX", "target_id": null, "duration_ms": 800, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 10, "centerY": 9, "radius": 4, "color": "rgba(255, 0, 0, 0.2)", "fill": true, "lineWidth": 10, "glow": true, "shadowBlur": 50, "shadowColor": "red" } ] },
        { "time_offset_ms": 8900, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 600, "web_animation": { "keyframes": [ { "transform": "translateX(0) scale(1)" }, { "transform": "translateX(-15px) scale(0.9) rotate(-10deg)" }, { "transform": "translateX(-15px) scale(0.9) rotate(-10deg)" } ], "options": { "duration": 600, "iterations": 1, "fill": "forwards", "easing": "ease-out" } } },
        { "time_offset_ms": 9500, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 400, "css_override": { "filter": "drop-shadow(0 0 10px orange)" }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 10, "startY": 10, "endX": 10, "endY": 8, "color": "#FF4500", "width": 15, "glow": true, "shadowBlur": 20, "shadowColor": "yellow" } ] },

        // --- CHUNK 3 (10-15s) ---
        { "time_offset_ms": 10050, "type": "NARRATIVE", "content": "Malakor rống lên, hơi nóng từ cơ thể hắn làm biến dạng không gian xung quanh." },
        { "time_offset_ms": 10100, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 4900, "css_override": { "filter": "drop-shadow(0 0 25px #FF4500) brightness(1.5)" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(1.08)" } ], "options": { "duration": 150, "iterations": 32, "direction": "alternate" } } },
        { "time_offset_ms": 10500, "type": "MOVE", "actor_id": "char-boss-003", "target_x": 8, "target_y": 9 },
        { "time_offset_ms": 11200, "type": "MOVE", "actor_id": "char-assassin-004", "target_x": 6, "target_y": 9 },
        { "time_offset_ms": 11400, "type": "MOVE", "actor_id": "char-hero-001", "target_x": 6, "target_y": 10 },
        { "time_offset_ms": 11800, "type": "DIALOGUE", "actor_id": "char-assassin-004", "content": "Chết đi, kẻ phiền phức!", "emotion": "COLD" },
        { "time_offset_ms": 12000, "type": "ATTACK", "actor_id": "char-assassin-004", "target_id": "char-mage-002", "hp_change": -115, "is_critical": true },
        { "time_offset_ms": 12050, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 500, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 7, "endY": 9, "color": "purple", "width": 8, "glow": true, "shadowBlur": 20, "shadowColor": "black" } ] },
        { "time_offset_ms": 12300, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-assassin-004", "hp_change": -85, "is_critical": false },
        { "time_offset_ms": 12350, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 400, "css_override": { "filter": "sepia(50%) brightness(1.2)" }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 6, "startY": 10, "endX": 6, "endY": 9, "color": "gold", "width": 10, "glow": true } ] },
        { "time_offset_ms": 13000, "type": "SKILL", "actor_id": "char-mage-002", "target_id": "char-boss-003", "hp_change": -120, "is_critical": false },
        { "time_offset_ms": 13010, "type": "SKILL", "actor_id": "char-mage-002", "target_id": "char-assassin-004", "hp_change": -120, "is_critical": false },
        { "time_offset_ms": 13100, "type": "VFX", "target_id": null, "duration_ms": 1500, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 4, "color": "rgba(173, 216, 230, 0.4)", "fill": true, "glow": true, "shadowBlur": 50, "shadowColor": "white" } ], "web_animation": { "keyframes": [ { "opacity": 0, "transform": "scale(0)" }, { "opacity": 1, "transform": "scale(2)" } ], "options": { "duration": 500, "easing": "ease-out" } } },
        { "time_offset_ms": 13800, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "Lũ kiến cỏ dám dùng cái lạnh hèn nhát này sao?!", "emotion": "FURIOUS" },
        { "time_offset_ms": 14500, "type": "NARRATIVE", "content": "Sương mù trắng xóa từ băng và hơi nước bốc lên, che khuất tầm nhìn của tất cả." },
        { "time_offset_ms": 14600, "type": "VFX", "target_id": null, "duration_ms": 400, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 255, 255, 0.4)" } ] },

        // --- CHUNK 4 (15-20s) ---
        { "time_offset_ms": 15050, "type": "NARRATIVE", "content": "Sương mù tan biến, để lộ Malakor đang đứng giữa dòng dung nham rực cháy như một vị thần chết." },
        { "time_offset_ms": 15100, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1000, "css_override": { "filter": "contrast(150%) brightness(1.2)" }, "web_animation": { "keyframes": [ { "transform": "scale(1) rotate(0deg)" }, { "transform": "scale(1.2) rotate(2deg)" }, { "transform": "scale(1) rotate(-2deg)" } ], "options": { "duration": 100, "iterations": 10 } } },
        { "time_offset_ms": 15500, "type": "SKILL", "actor_id": "char-boss-003", "target_id": "char-mage-002", "hp_change": -85, "is_critical": false },
        { "time_offset_ms": 15510, "type": "SKILL", "actor_id": "char-boss-003", "target_id": "char-assassin-004", "hp_change": -70, "is_critical": false },
        { "time_offset_ms": 15600, "type": "VFX", "target_id": null, "duration_ms": 800, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 9, "centerY": 9, "radius": 5, "color": "rgba(255, 0, 0, 0.3)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "darkred" }, { "action": "DRAW_LINE", "startX": 9, "startY": 9, "endX": 7, "endY": 9, "color": "red", "width": 15, "glow": true }, { "action": "DRAW_LINE", "startX": 9, "startY": 9, "endX": 6, "endY": 9, "color": "red", "width": 15, "glow": true } ] },
        { "time_offset_ms": 16000, "type": "DIALOGUE", "actor_id": "char-mage-002", "content": "Cơ thể... không thể cử động...", "emotion": "PANIC" },
        { "time_offset_ms": 16500, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 2000, "css_override": { "filter": "grayscale(100%)", "opacity": "0.8" }, "web_animation": { "keyframes": [ { "transform": "translate(1px, 1px)" }, { "transform": "translate(-1px, -1px)" } ], "options": { "duration": 50, "iterations": 40 } } },
        { "time_offset_ms": 17000, "type": "MOVE", "actor_id": "char-boss-003", "target_x": 9, "target_y": 9 },
        { "time_offset_ms": 17500, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -130, "is_critical": true },
        { "time_offset_ms": 17550, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 600, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 9, "startY": 9, "endX": 7, "endY": 9, "color": "#FF8C00", "width": 12, "glow": true, "shadowBlur": 25, "shadowColor": "orange" } ], "web_animation": { "keyframes": [ { "transform": "scale(1.1) rotate(5deg)" }, { "transform": "scale(1)" } ], "options": { "duration": 300 } } },
        { "time_offset_ms": 18000, "type": "MOVE", "actor_id": "char-hero-001", "target_x": 7, "target_y": 9 },
        { "time_offset_ms": 18200, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Lùi lại, Elara! Chừng nào tôi còn đứng vững, hắn không thể chạm vào cô!", "emotion": "DETERMINED" },
        { "time_offset_ms": 18500, "type": "SKILL", "actor_id": "char-hero-001", "target_id": "char-hero-001", "hp_change": 0, "is_critical": false },
        { "time_offset_ms": 18550, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1450, "css_override": { "filter": "drop-shadow(0 0 30px gold) brightness(1.2)" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 2, "color": "rgba(255, 215, 0, 0.5)", "fill": false, "lineWidth": 5, "glow": true } ] },
        { "time_offset_ms": 19500, "type": "NARRATIVE", "content": "Marcus quỳ sụp xuống vì sức nặng của đòn đánh, nhưng thanh kiếm thánh vẫn cắm chặt vào mặt đất, không chịu lùi bước." },
        { "time_offset_ms": 19900, "type": "VFX", "target_id": null, "duration_ms": 100, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(139, 0, 0, 0.2)" } ] },

        // --- CHUNK 5 (20-25s) ---
        { "time_offset_ms": 20050, "type": "NARRATIVE", "content": "Khói bụi và nhiệt độ tàn nhẫn nuốt chửng không khí. Giữa sự hỗn loạn, Nyx chớp lấy cơ hội ngàn vàng." },
        { "time_offset_ms": 20100, "type": "VFX", "target_id": null, "duration_ms": 4900, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.05)" }, { "action": "FILL_RECT", "x": 8, "y": 0, "width": 5, "height": 20, "color": "rgba(255, 0, 0, 0.15)" } ] },
        { "time_offset_ms": 20200, "type": "DIALOGUE", "actor_id": "char-assassin-004", "content": "Giờ thì ngủ đi, nữ pháp sư.", "emotion": "COLD" },
        { "time_offset_ms": 20400, "type": "ATTACK", "actor_id": "char-assassin-004", "target_id": "char-mage-002", "hp_change": -110, "is_critical": true },
        { "time_offset_ms": 20450, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 1000, "css_override": { "filter": "sepia(100%) hue-rotate(90deg) brightness(0.5)" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 1.5, "color": "rgba(0, 255, 0, 0.6)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "green" }, { "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 7, "endY": 9, "color": "#32CD32", "width": 5 } ] },
        { "time_offset_ms": 20600, "type": "DIALOGUE", "actor_id": "char-mage-002", "content": "Chết tiệt... tính toán sai... lầm...", "emotion": "AGONY" },
        { "time_offset_ms": 20800, "type": "VFX", "target_id": "char-mage-002", "duration_ms": 2000, "css_override": { "filter": "grayscale(100%) blur(4px)", "opacity": "0" }, "web_animation": { "keyframes": [ { "transform": "translateY(0) scale(1)", "opacity": 1 }, { "transform": "translateY(-10px) scale(0.5)", "opacity": 0 } ], "options": { "duration": 2000, "fill": "forwards" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 2, "color": "rgba(138, 43, 226, 0.3)", "fill": true } ] },
        { "time_offset_ms": 21200, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "ELARA!!! Kẻ hèn hạ, ngươi sẽ phải trả giá đắt!", "emotion": "ANGRY" },
        { "time_offset_ms": 21500, "type": "MOVE", "actor_id": "char-hero-001", "target_x": 6, "target_y": 9 },
        { "time_offset_ms": 21800, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-assassin-004", "hp_change": -85, "is_critical": false },
        { "time_offset_ms": 21850, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 600, "web_animation": { "keyframes": [ { "transform": "translateX(0) rotate(0)" }, { "transform": "translateX(-15px) rotate(-15deg)" }, { "transform": "translateX(-15px) rotate(-15deg)" } ], "options": { "duration": 600, "fill": "forwards", "easing": "ease-out" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 5, "endY": 9, "color": "#FFD700", "width": 15, "glow": true, "shadowBlur": 25, "shadowColor": "gold" } ] },
        { "time_offset_ms": 22200, "type": "DIALOGUE", "actor_id": "char-assassin-004", "content": "Chậc... con nhím gai góc này...", "emotion": "ANNOYED" },
        { "time_offset_ms": 22500, "type": "MOVE", "actor_id": "char-assassin-004", "target_x": 4, "target_y": 8 },
        { "time_offset_ms": 23000, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "HAHAHA! TUYỆT VỜI! Hãy cho ta thấy nhiều máu hơn nữa!", "emotion": "ARROGANT" },
        { "time_offset_ms": 23500, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -150, "is_critical": true },
        { "time_offset_ms": 23600, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 800, "css_override": { "filter": "drop-shadow(0 0 10px red)" }, "web_animation": { "keyframes": [ { "transform": "translateY(0)" }, { "transform": "translateY(5px) scale(0.95)" }, { "transform": "translateY(0)" } ], "options": { "duration": 150, "iterations": 3 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 9, "startY": 9, "endX": 6, "endY": 9, "color": "#FF4500", "width": 8, "glow": true, "shadowBlur": 30, "shadowColor": "red" }, { "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 1.2, "color": "rgba(255, 0, 0, 0.7)", "fill": true } ] },
        { "time_offset_ms": 24500, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 500, "css_override": { "filter": "saturate(200%)" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 9, "centerY": 9, "radius": 0.8, "color": "rgba(255, 255, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "orange" }, { "action": "DRAW_CIRCLE", "centerX": 9.5, "centerY": 8.5, "radius": 0.5, "color": "rgba(255, 69, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 24800, "type": "NARRATIVE", "content": "Dung nham quấn lấy mắt cá chân Malakor, phát ra những tiếng xèo xèo ghê rợn, nhưng hắn không hề bận tâm." },

        // --- CHUNK 6 (25-30s) ---
        { "time_offset_ms": 25050, "type": "NARRATIVE", "content": "Sức nóng của hòn đảo không chừa một ai. Dung nham bắt đầu ăn mòn da thịt của Malakor, trong khi Marcus và Nyx cũng đang từ từ bị nướng chín." },
        { "time_offset_ms": 25100, "type": "VFX", "target_id": null, "duration_ms": 4900, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.08)" }, { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 1, "color": "rgba(255, 30, 0, 0.4)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "red" } ] },
        { "time_offset_ms": 25400, "type": "MOVE", "actor_id": "char-boss-003", "target_x": 8, "target_y": 9 },
        { "time_offset_ms": 25800, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -140, "is_critical": false },
        { "time_offset_ms": 25850, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 700, "css_override": { "filter": "drop-shadow(0 0 15px red) brightness(0.8) sepia(50%)" }, "web_animation": { "keyframes": [ { "transform": "translate(2px, 2px) rotate(3deg)" }, { "transform": "translate(-2px, -2px) rotate(-3deg)" } ], "options": { "duration": 50, "iterations": 14 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 6, "endY": 9, "color": "#FF4500", "width": 10, "glow": true, "shadowBlur": 25, "shadowColor": "yellow" } ] },
        { "time_offset_ms": 26200, "type": "MOVE", "actor_id": "char-hero-001", "target_x": 7, "target_y": 9 },
        { "time_offset_ms": 26600, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-boss-003", "hp_change": -92, "is_critical": false },
        { "time_offset_ms": 26650, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 600, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(0.95) skew(5deg)" }, { "transform": "scale(1) skew(0)" } ], "options": { "duration": 200, "iterations": 3 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 7, "startY": 9, "endX": 8, "endY": 9, "color": "#FFF8DC", "width": 12, "glow": true, "shadowBlur": 30, "shadowColor": "white" } ] },
        { "time_offset_ms": 27200, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "Chỉ như gãi ngứa! Ngươi cũng sắp thành than củi rồi, Hiệp Sĩ!", "emotion": "ARROGANT" },
        { "time_offset_ms": 27800, "type": "SKILL", "actor_id": "char-assassin-004", "target_id": "char-hero-001", "hp_change": 0, "is_critical": false },
        { "time_offset_ms": 27850, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 500, "css_override": { "opacity": "0" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 4, "centerY": 8, "radius": 1.5, "color": "rgba(75, 0, 130, 0.8)", "fill": true, "glow": true, "shadowBlur": 15, "shadowColor": "purple" } ] },
        { "time_offset_ms": 28100, "type": "MOVE", "actor_id": "char-assassin-004", "target_x": 6, "target_y": 9 },
        { "time_offset_ms": 28200, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 300, "css_override": { "opacity": "1", "filter": "drop-shadow(0 0 10px purple)" }, "web_animation": { "keyframes": [ { "transform": "scale(0.5) translateY(-10px)" }, { "transform": "scale(1) translateY(0)" } ], "options": { "duration": 300, "easing": "ease-out" } } },
        { "time_offset_ms": 28600, "type": "ATTACK", "actor_id": "char-assassin-004", "target_id": "char-hero-001", "hp_change": -115, "is_critical": true },
        { "time_offset_ms": 28650, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 800, "css_override": { "filter": "hue-rotate(90deg) brightness(0.6) sepia(80%)" }, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(5px) rotate(3deg)" }, { "transform": "translateX(-5px) rotate(-3deg)" } ], "options": { "duration": 100, "iterations": 8 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 6, "startY": 9, "endX": 7, "endY": 9, "color": "#00FF00", "width": 6, "glow": true, "shadowBlur": 20, "shadowColor": "green" }, { "action": "FILL_RECT", "x": 6.8, "y": 8.8, "width": 0.4, "height": 0.4, "color": "rgba(0, 100, 0, 0.8)" } ] },
        { "time_offset_ms": 29200, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Khụ... Hèn mạt... Ta tuyệt đối sẽ không ngã gục!", "emotion": "DETERMINED" },
        { "time_offset_ms": 29800, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 200, "css_override": { "filter": "brightness(0.7) sepia(100%)" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 1.2, "color": "rgba(255, 69, 0, 0.6)", "fill": true } ] },

        // --- CHUNK 7 (30-35s) ---
        { "time_offset_ms": 30050, "type": "NARRATIVE", "content": "Bị dồn vào đường cùng, thánh quang trên người Marcus bùng lên chói lòa lần cuối, đối nghịch hoàn toàn với ngọn lửa địa ngục." },
        { "time_offset_ms": 30100, "type": "VFX", "target_id": null, "duration_ms": 4800, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 50, 0, 0.05)" } ] },
        { "time_offset_ms": 30200, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "ÁC QUỶ... CÚT VỀ BÓNG TỐI ĐI!!!", "emotion": "FURIOUS" },
        { "time_offset_ms": 30500, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1000, "css_override": { "filter": "drop-shadow(0 0 40px #FFD700) brightness(2)" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(1.1) rotate(-10deg)" } ], "options": { "duration": 300, "iterations": 1, "fill": "forwards" } } },
        { "time_offset_ms": 30800, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-assassin-004", "hp_change": -110, "is_critical": true },
        { "time_offset_ms": 30850, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 1500, "css_override": { "filter": "brightness(3) sepia(100%) hue-rotate(0deg)", "opacity": "0.8" }, "web_animation": { "keyframes": [ { "transform": "translateX(0) skew(0deg)" }, { "transform": "translateX(-20px) skew(20deg) scale(0.8)" } ], "options": { "duration": 400, "iterations": 1, "fill": "forwards", "easing": "ease-out" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 7, "startY": 9, "endX": 5, "endY": 9, "color": "#FFFFFF", "width": 20, "glow": true, "shadowBlur": 40, "shadowColor": "gold" } ] },
        { "time_offset_ms": 31200, "type": "DIALOGUE", "actor_id": "char-assassin-004", "content": "Khục... Bóng tối... đón gọi...", "emotion": "AGONY" },
        { "time_offset_ms": 31500, "type": "VFX", "target_id": "char-assassin-004", "duration_ms": 3000, "css_override": { "filter": "grayscale(100%) blur(5px)", "opacity": "0" }, "web_animation": { "keyframes": [ { "transform": "scale(0.8) translateY(0)", "opacity": 1 }, { "transform": "scale(0) translateY(20px)", "opacity": 0 } ], "options": { "duration": 2000, "iterations": 1, "fill": "forwards" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 6, "centerY": 9, "radius": 1.5, "color": "rgba(0, 0, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "black" } ] },
        { "time_offset_ms": 32000, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "HAHAHA! Kẻ yếu đuối đã bị thanh trừng! Giờ đến lượt ngươi, Hiệp Sĩ rác rưởi!", "emotion": "ARROGANT" },
        { "time_offset_ms": 32500, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -145, "is_critical": false },
        { "time_offset_ms": 32550, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1000, "css_override": { "filter": "drop-shadow(0 0 20px #8B0000) sepia(80%) hue-rotate(-20deg)" }, "web_animation": { "keyframes": [ { "transform": "translate(0, 0) scale(1)" }, { "transform": "translate(-8px, 5px) scale(0.9) rotate(-10deg)" }, { "transform": "translate(0, 0) scale(1)" } ], "options": { "duration": 200, "iterations": 2, "easing": "ease-in-out" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 7, "endY": 9, "color": "#FF4500", "width": 15, "glow": true, "shadowBlur": 35, "shadowColor": "red" }, { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 1.8, "color": "rgba(255, 0, 0, 0.5)", "fill": true } ] },
        { "time_offset_ms": 33200, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Ta... vẫn chưa... ngã...", "emotion": "DETERMINED" },
        { "time_offset_ms": 33800, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1200, "web_animation": { "keyframes": [ { "transform": "rotate(-5deg)" }, { "transform": "rotate(5deg)" } ], "options": { "duration": 400, "iterations": 3, "direction": "alternate" } } },
        { "time_offset_ms": 34500, "type": "NARRATIVE", "content": "Marcus quỳ một chân trên mặt đất nứt nẻ, giáp trụ vỡ vụn, máu hòa cùng tro bụi, nhưng anh quyết không lùi bước trước quỷ dữ." },
        { "time_offset_ms": 34800, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 200, "css_override": { "filter": "brightness(1.5)" }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 1.2, "color": "rgba(255, 69, 0, 0.4)", "fill": true, "glow": true, "shadowBlur": 10, "shadowColor": "orange" } ] },

        // --- CHUNK 8 (35-40s) ---
        { "time_offset_ms": 35050, "type": "NARRATIVE", "content": "Dòng dung nham tại tọa độ của Malakor sôi sục dữ dội, liên tục bòn rút sinh mạng của hắn, nhưng sự điên cuồng đã làm mờ đi cảm giác đau đớn." },
        { "time_offset_ms": 35100, "type": "VFX", "target_id": null, "duration_ms": 4800, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.05)" }, { "action": "FILL_RECT", "x": 8, "y": 0, "width": 5, "height": 20, "color": "rgba(255, 0, 0, 0.2)" } ] },
        { "time_offset_ms": 35300, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Ánh sáng... sẽ không bao giờ tắt!", "emotion": "DETERMINED" },
        { "time_offset_ms": 35500, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 800, "css_override": { "filter": "drop-shadow(0 0 15px gold) brightness(1.5)" }, "web_animation": { "keyframes": [ { "transform": "translateY(5px) scale(0.9)" }, { "transform": "translateY(0) scale(1)" } ], "options": { "duration": 500, "easing": "ease-out" } } },
        { "time_offset_ms": 36000, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-boss-003", "hp_change": -90, "is_critical": false },
        { "time_offset_ms": 36050, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 600, "css_override": { "filter": "brightness(2) sepia(50%)" }, "web_animation": { "keyframes": [ { "transform": "translateX(0)" }, { "transform": "translateX(5px) rotate(2deg)" }, { "transform": "translateX(0)" } ], "options": { "duration": 150, "iterations": 2 } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 7, "startY": 9, "endX": 8, "endY": 9, "color": "#FFFACD", "width": 10, "glow": true, "shadowBlur": 25, "shadowColor": "gold" }, { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 1, "color": "rgba(255, 255, 255, 0.6)", "fill": true } ] },
        { "time_offset_ms": 36500, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "Một nhát chém thảm hại! Sự ngoan cố của ngươi chỉ làm ta thêm hưng phấn!", "emotion": "SADISTIC" },
        { "time_offset_ms": 37200, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -160, "is_critical": true },
        { "time_offset_ms": 37250, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1500, "css_override": { "filter": "hue-rotate(-30deg) brightness(0.6) drop-shadow(0 0 20px darkred)" }, "web_animation": { "keyframes": [ { "transform": "scale(1) rotate(0deg)" }, { "transform": "scale(0.8) rotate(-15deg) translateY(10px)" }, { "transform": "scale(0.8) rotate(-15deg) translateY(10px)" } ], "options": { "duration": 500, "fill": "forwards", "easing": "ease-out" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 7, "endY": 9, "color": "#FF0000", "width": 18, "glow": true, "shadowBlur": 40, "shadowColor": "orange" }, { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 1.5, "color": "rgba(139, 0, 0, 0.7)", "fill": true } ] },
        { "time_offset_ms": 37800, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "AARRGGHHH!!!", "emotion": "AGONY" },
        { "time_offset_ms": 38200, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1700, "web_animation": { "keyframes": [ { "transform": "scale(0.8) rotate(-15deg) translateY(10px)" }, { "transform": "scale(0.85) rotate(-5deg) translateY(5px)" } ], "options": { "duration": 1500, "fill": "forwards" } } },
        { "time_offset_ms": 38800, "type": "NARRATIVE", "content": "Xích lửa quấn chặt lấy cánh tay phải của Marcus, mùi thịt cháy khét lẹt bốc lên. Anh bị kéo gục xuống đất, máu nhuộm đỏ cả một vùng." },
        { "time_offset_ms": 39500, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 400, "css_override": { "filter": "saturate(250%) brightness(1.1)" }, "web_animation": { "keyframes": [ { "transform": "scale(1)" }, { "transform": "scale(1.05)" }, { "transform": "scale(1)" } ], "options": { "duration": 400 } } },

        // --- CHUNK 9 (40-45s) ---
        { "time_offset_ms": 40050, "type": "NARRATIVE", "content": "Malakor nhấc bổng sợi xích rực lửa, cái bóng khổng lồ của hắn in hằn lên thân thể tơi tả của Marcus dưới ánh sáng đỏ quạch." },
        { "time_offset_ms": 40100, "type": "VFX", "target_id": null, "duration_ms": 4800, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.1)" }, { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 1.2, "color": "rgba(255, 0, 0, 0.3)", "fill": true, "glow": true, "shadowBlur": 25, "shadowColor": "red" } ] },
        { "time_offset_ms": 40300, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "Giờ thì tan xác đi, đồ rác rưởi của Ánh Sáng!", "emotion": "SADISTIC" },
        { "time_offset_ms": 40600, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 600, "css_override": { "filter": "brightness(1.8) drop-shadow(0 -10px 20px red)" }, "web_animation": { "keyframes": [ { "transform": "translateY(0) scale(1)" }, { "transform": "translateY(-10px) scale(1.1)" } ], "options": { "duration": 500, "fill": "forwards", "easing": "ease-in" } } },
        { "time_offset_ms": 41200, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -155, "is_critical": true },
        { "time_offset_ms": 41250, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1500, "css_override": { "filter": "grayscale(50%) brightness(0.5) sepia(100%) hue-rotate(-20deg)" }, "web_animation": { "keyframes": [ { "transform": "scale(0.85) translateY(5px) rotate(-5deg)" }, { "transform": "scale(0.7) translateY(15px) rotate(-15deg)" } ], "options": { "duration": 300, "fill": "forwards" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 7, "endY": 9, "color": "#FF0000", "width": 25, "glow": true, "shadowBlur": 50, "shadowColor": "orange" }, { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 2, "color": "rgba(255, 0, 0, 0.8)", "fill": true } ] },
        { "time_offset_ms": 41500, "type": "VFX", "target_id": null, "duration_ms": 500, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(139, 0, 0, 0.4)" } ] },
        { "time_offset_ms": 42000, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Cái chết... trong chiến đấu... là vinh quang... tối thượng...", "emotion": "DETERMINED" },
        { "time_offset_ms": 42500, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 1500, "css_override": { "filter": "drop-shadow(0 0 50px gold) brightness(2.5)" }, "web_animation": { "keyframes": [ { "transform": "scale(0.7) translateY(15px) rotate(-15deg)" }, { "transform": "scale(1.1) translateY(0) rotate(5deg)" } ], "options": { "duration": 800, "fill": "forwards", "easing": "ease-out" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 3, "color": "rgba(255, 215, 0, 0.5)", "fill": true, "glow": true, "shadowBlur": 60, "shadowColor": "white" } ] },
        { "time_offset_ms": 43400, "type": "ATTACK", "actor_id": "char-hero-001", "target_id": "char-boss-003", "hp_change": -120, "is_critical": true },
        { "time_offset_ms": 43450, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 800, "css_override": { "filter": "brightness(0.5) contrast(200%)" }, "web_animation": { "keyframes": [ { "transform": "translateX(0) scale(1)" }, { "transform": "translateX(10px) scale(0.95) rotate(5deg)" }, { "transform": "translateX(5px) scale(0.98) rotate(2deg)" } ], "options": { "duration": 300, "fill": "forwards", "easing": "ease-out" } }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 7, "startY": 9, "endX": 8, "endY": 9, "color": "#FFFFFF", "width": 15, "glow": true, "shadowBlur": 40, "shadowColor": "gold" }, { "action": "DRAW_LINE", "startX": 7.5, "startY": 8.5, "endX": 8.5, "endY": 9.5, "color": "gold", "width": 8 } ] },
        { "time_offset_ms": 43900, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "AARRGGHH! Con giun đất này... Ngươi dám làm xước vỏ bọc của ta?!", "emotion": "FURIOUS" },
        { "time_offset_ms": 44400, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 500, "web_animation": { "keyframes": [ { "transform": "scale(1.1) translateY(0) rotate(5deg)" }, { "transform": "scale(1) translateY(5px) rotate(0deg)" } ], "options": { "duration": 500, "fill": "forwards" } } },
        { "time_offset_ms": 44800, "type": "NARRATIVE", "content": "Cú chém rút cạn chút sức lực cuối cùng của Marcus. Anh đứng lảo đảo, thở dốc, phó mặc cơ thể cho sức nóng đang đốt cháy từng tế bào." },

        // --- CHUNK 10 (45-50s) ---
        { "time_offset_ms": 45050, "type": "NARRATIVE", "content": "Sức nóng đạt đến đỉnh điểm. Dung nham bám lấy đôi chân của Malakor, phát ra những tiếng nổ lép bép kinh hoàng khi thiêu rụi da thịt hắn." },
        { "time_offset_ms": 45100, "type": "VFX", "target_id": null, "duration_ms": 4800, "canvas_commands": [ { "action": "FILL_RECT", "x": 0, "y": 0, "width": 20, "height": 20, "color": "rgba(255, 69, 0, 0.1)" }, { "action": "FILL_RECT", "x": 8, "y": 0, "width": 5, "height": 20, "color": "rgba(255, 30, 0, 0.3)" } ] },
        { "time_offset_ms": 45500, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1000, "css_override": { "filter": "brightness(2) contrast(150%) sepia(80%) hue-rotate(-10deg)" }, "web_animation": { "keyframes": [ { "transform": "scale(1) translateY(0)" }, { "transform": "scale(1.15) translateY(-5px)" } ], "options": { "duration": 800, "fill": "forwards", "easing": "ease-in" } } },
        { "time_offset_ms": 46000, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "CHẾT ĐI, TÊN KHỐN!!!", "emotion": "FURIOUS" },
        { "time_offset_ms": 46200, "type": "ATTACK", "actor_id": "char-boss-003", "target_id": "char-hero-001", "hp_change": -130, "is_critical": true },
        { "time_offset_ms": 46250, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 800, "css_override": { "filter": "brightness(0.3) sepia(100%) hue-rotate(-50deg)" }, "canvas_commands": [ { "action": "DRAW_LINE", "startX": 8, "startY": 9, "endX": 7, "endY": 9, "color": "#FF0000", "width": 30, "glow": true, "shadowBlur": 50, "shadowColor": "darkred" }, { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 2.5, "color": "rgba(255, 0, 0, 0.9)", "fill": true } ], "web_animation": { "keyframes": [ { "transform": "translate(0, 0) scale(1) rotate(5deg)" }, { "transform": "translate(-15px, 15px) scale(0.5) rotate(-30deg)" } ], "options": { "duration": 500, "fill": "forwards", "easing": "ease-out" } } },
        { "time_offset_ms": 46800, "type": "DIALOGUE", "actor_id": "char-hero-001", "content": "Thần... Ánh Sáng... dẫn lối...", "emotion": "PEACEFUL" },
        { "time_offset_ms": 47200, "type": "VFX", "target_id": "char-hero-001", "duration_ms": 2800, "css_override": { "filter": "grayscale(100%) blur(10px)", "opacity": "0" }, "web_animation": { "keyframes": [ { "transform": "translate(-15px, 15px) scale(0.5) rotate(-30deg)", "opacity": 1 }, { "transform": "translate(-15px, 30px) scale(0) rotate(-60deg)", "opacity": 0 } ], "options": { "duration": 2000, "fill": "forwards", "easing": "ease-in" } }, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 9, "radius": 1, "color": "rgba(255, 215, 0, 0.8)", "fill": true, "glow": true, "shadowBlur": 20, "shadowColor": "gold" }, { "action": "DRAW_CIRCLE", "centerX": 7, "centerY": 8.5, "radius": 0.5, "color": "rgba(255, 255, 255, 0.8)", "fill": true } ] },
        { "time_offset_ms": 48000, "type": "VFX", "target_id": "char-boss-003", "duration_ms": 1500, "css_override": { "filter": "saturate(300%) drop-shadow(0 0 15px red)" }, "web_animation": { "keyframes": [ { "transform": "scale(1.15) translateY(-5px) rotate(-5deg)" }, { "transform": "scale(1.15) translateY(-5px) rotate(5deg)" } ], "options": { "duration": 200, "iterations": 7, "direction": "alternate" } } },
        { "time_offset_ms": 48500, "type": "DIALOGUE", "actor_id": "char-boss-003", "content": "HAHAHAHA! CHỈ CÒN LẠI TRO BỤI! TẤT CẢ ĐỀU PHẢI PHỤC TÙNG NGỌN LỬA!", "emotion": "MANIACAL" },
        { "time_offset_ms": 49000, "type": "VFX", "target_id": null, "duration_ms": 800, "canvas_commands": [ { "action": "DRAW_CIRCLE", "centerX": 8, "centerY": 9, "radius": 6, "color": "rgba(255, 69, 0, 0.2)", "fill": true, "glow": true, "shadowBlur": 80, "shadowColor": "darkred" } ] },
        { "time_offset_ms": 49500, "type": "NARRATIVE", "content": "Bóng dáng vị Thánh Hiệp Sĩ tan biến hoàn toàn. Malakor đứng đơn độc giữa chiến trường tĩnh lặng, nơi chỉ còn lại âm thanh gầm gừ của núi lửa đun sôi máu và tro cốt." }
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
      🌋 TEST EPIC BATTLE (50s)
    </button>
  );
}