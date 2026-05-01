import { useState } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DraggableCharacter from './DraggableCharacter';

export default function ManagementPanel() {
  // Lấy thêm Master_Timeline từ store để nối dữ liệu
  const { teamA, teamB, mapDescription, setAppStage, setMasterTimeline, Master_Timeline } = useMainStore();
  const [jsonInput, setJsonInput] = useState('');

  const draftTeamA = teamA.filter(c => c.position === null);
  const draftTeamB = teamB.filter(c => c.position === null);

  const isDraftingComplete = teamA.length > 0 && teamB.length > 0 && draftTeamA.length === 0 && draftTeamB.length === 0;

  // 1. Tính toán thời gian (start_ms, end_ms) thông minh dựa trên kịch bản đã lưu
  let currentMaxTimeMs = 0;
  if (Master_Timeline && Master_Timeline.length > 0) {
    currentMaxTimeMs = Math.max(...Master_Timeline.map((t: any) => t.time_offset_ms || 0));
  }
  // Bắt đầu từ mốc thời gian lớn nhất hiện tại (làm tròn lên giây chẵn)
  const nextStartMs = currentMaxTimeMs === 0 ? 0 : Math.ceil(currentMaxTimeMs / 1000) * 1000;
  const nextEndMs = nextStartMs + 5000; // Yêu cầu AI làm 5 giây tiếp theo

  // 2. Hàm Copy Dữ Liệu
  const handleCopyState = () => {
    const currentGridState: any = {};
    
    [...teamA, ...teamB].forEach(char => {
      if (char.position) {
        currentGridState[char.id] = {
          team: char.team,
          name: char.name,
          hp: char.stats.hp,
          x: char.position.x,
          y: char.position.y,
          agility: char.stats.agility,
          damage: char.stats.damage,
          range: char.stats.range,
          personality: char.personality,
          basicAttackDesc: char.basicAttackDesc,
          skillDesc: char.skillDesc
        };
      }
    });

    const payload = {
      map_description: mapDescription || "Sân đấu tiêu chuẩn",
      current_grid_state: currentGridState,
      start_ms: nextStartMs,
      end_ms: nextEndMs
    };

    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    alert(`✅ Đã copy! AI sẽ được yêu cầu viết kịch bản từ giây ${nextStartMs / 1000} đến giây ${nextEndMs / 1000}.`);
  };

  // 3. Hàm NỐI KỊCH BẢN (Gắn JSON mới vào sau JSON cũ)
  const handleAppendJSON = () => {
    if (!jsonInput.trim()) return alert("Vui lòng dán JSON trước khi nối!");
    try {
      const parsed = JSON.parse(jsonInput);
      if (!parsed.timeline || !Array.isArray(parsed.timeline)) {
        alert("JSON không hợp lệ! Thiếu mảng 'timeline'.");
        return;
      }
      
      // Nối mảng: Lấy tất cả dữ liệu cũ + dữ liệu mới
      const updatedTimeline = [...(Master_Timeline || []), ...parsed.timeline];
      setMasterTimeline(updatedTimeline);
      
      setJsonInput(''); // Xóa trắng ô input để dán đoạn tiếp theo
      alert(`✅ Nối thành công! Tổng số hành động hiện tại: ${updatedTimeline.length}.\n\nHãy bấm 'Copy Data' lần nữa để nhờ AI viết đoạn tiếp theo.`);
    } catch (e) {
      alert("Cú pháp JSON bị sai! Vui lòng kiểm tra lại.");
    }
  };

  // 4. Hàm Chạy Giả Lập
  const handleManualRun = () => {
    // Nếu ô nhập còn dữ liệu chưa nối, thì tự động nối luôn rồi chạy
    if (jsonInput.trim() !== '') {
        try {
          const parsed = JSON.parse(jsonInput);
          if (parsed.timeline && Array.isArray(parsed.timeline)) {
            setMasterTimeline([...(Master_Timeline || []), ...parsed.timeline]);
          }
        } catch (e) {
          alert("Cú pháp JSON bị sai! Vui lòng kiểm tra lại.");
          return;
        }
    } else if (!Master_Timeline || Master_Timeline.length === 0) {
        alert("Chưa có kịch bản nào để chạy!");
        return;
    }
    
    setAppStage('PHASE_5_SIMULATING'); 
  };

  if (isDraftingComplete) {
    return (
      <div className="w-1/2 flex flex-col p-6 overflow-y-auto bg-gray-900 justify-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">TẤT CẢ QUÂN CỜ ĐÃ VÀO VỊ TRÍ</h2>
          <p className="text-gray-400">Đội hình đã sẵn sàng, mời đạo diễn lên kịch bản</p>
        </div>

        {/* Nút Gọi AI (Bên trong App) */}
        <button 
          onClick={() => setAppStage('PHASE_4_AI_GENERATING')}
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] mb-8 transition-all"
        >
          🧠 DÙNG ĐẠO DIỄN AI (TRONG APP)
        </button>

        {/* Box Tùy chỉnh JSON (Dùng AI Ngoại Tuyến) */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-xl">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-gray-300">
              Kịch bản (Đã lưu: <span className="text-green-400">{Master_Timeline?.length || 0}</span> hành động)
            </span>
            
            <button 
              onClick={handleCopyState}
              className="text-sm bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded shadow transition-colors flex items-center gap-1 active:scale-95"
            >
              <span>📋</span> 1. Copy Data gửi AI
            </button>
          </div>

          <textarea 
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full h-32 bg-gray-950 text-green-400 font-mono p-3 rounded border border-gray-700 outline-none focus:border-green-500 text-sm mb-4 custom-scrollbar"
            placeholder="2. Dán JSON AI trả về vào đây..."
          />
          
          <div className="flex gap-3">
            <button 
              onClick={handleAppendJSON}
              className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded shadow active:scale-95 transition-all"
            >
              ➕ 3. NỐI VÀO KỊCH BẢN
            </button>
            <button 
              onClick={handleManualRun}
              className="flex-1 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded shadow-[0_0_10px_rgba(234,88,12,0.4)] animate-pulse active:scale-95 transition-all"
            >
              ⚡ 4. CHẠY MÔ PHỎNG NGAY
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/2 flex flex-col p-6 overflow-y-auto bg-gray-900 border-l border-gray-800 custom-scrollbar">
      <h2 className="text-2xl font-bold text-white mb-6">QUẢN LÝ QUÂN LÍNH</h2>
      <p className="text-gray-400 text-sm mb-6">Kéo và thả nhân vật sang sa bàn bên trái để sắp xếp đội hình.</p>
      
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div>
          <h3 className="text-blue-400 font-bold mb-3 border-b border-blue-900/50 pb-2">ĐỘI A ({draftTeamA.length})</h3>
          {draftTeamA.map(char => <DraggableCharacter key={char.id} character={char} />)}
        </div>
        <div>
          <h3 className="text-red-400 font-bold mb-3 border-b border-red-900/50 pb-2">ĐỘI B ({draftTeamB.length})</h3>
          {draftTeamB.map(char => <DraggableCharacter key={char.id} character={char} />)}
        </div>
      </div>
    </div>
  );
}
