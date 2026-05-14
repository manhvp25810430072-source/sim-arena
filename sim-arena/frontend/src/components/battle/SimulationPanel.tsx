import { useState, useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
// 🚀 NÂNG CẤP: Import Động cơ Kỹ xảo
import { executeVFX, clearAllVFX as clearPixiVFX } from '../../utils/vfxEngine';

export default function SimulationPanel() {
  const {
    Master_Timeline,
    liveLogs,
    addLiveLog,
    applyDamageById,
    moveCharacterById,
    setActiveDialogue,
    
    addVFXById,
    removeVFXInstance,
    clearAllVFX,
    
    setAppStage,
    simulationSpeed,       
    setSimulationSpeed     
  } = useMainStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const timeoutRefs = useRef<ReturnType<typeof setTimeout>[]>([]);
  const dialogueClearTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(clearTimeout);
      Object.values(dialogueClearTimers.current).forEach(clearTimeout);
      clearAllVFX(); // Dọn dẹp state trong Store
      clearPixiVFX(); // Dọn dẹp rác Canvas của PixiJS & GSAP
    };
  }, []);

  const startSimulation = () => {
    if (isPlaying || Master_Timeline.length === 0) return;
    
    setIsPlaying(true);
    setIsFinished(false);
    addLiveLog({ type: 'SYSTEM', content: `🎬 Máy quay bắt đầu chạy... (Tốc độ: ${simulationSpeed}x)` });

    let maxTime = 0;

    Master_Timeline.forEach((event) => {
      if (event.time_offset_ms > maxTime) maxTime = event.time_offset_ms;

      const adjustedTimeOffset = event.time_offset_ms / simulationSpeed;

      const timer = setTimeout(() => {
        switch (event.type) {
          case 'NARRATIVE':
            addLiveLog({ type: 'NARRATIVE', content: event.content });
            break;
            
          case 'DIALOGUE':
            addLiveLog({ type: 'DIALOGUE', content: event.content, charId: event.actor_id });
            setActiveDialogue(event.actor_id, { content: event.content, emotion: event.emotion });
            
            if (dialogueClearTimers.current[event.actor_id]) {
              clearTimeout(dialogueClearTimers.current[event.actor_id]);
            }
            
            dialogueClearTimers.current[event.actor_id] = setTimeout(() => {
              setActiveDialogue(event.actor_id, null);
            }, 3000 / simulationSpeed);
            break;
            
          case 'ATTACK':
          case 'SKILL':
            addLiveLog({ type: 'COMBAT', content: `Trừ ${Math.abs(event.hp_change)} HP`, charId: event.actor_id });
            if (event.target_id && event.hp_change) {
              applyDamageById(event.target_id, event.hp_change);
            }
            break;
            
          case 'MOVE':
            const currentState = useMainStore.getState();
            const movingChar = [...currentState.teamA, ...currentState.teamB].find(c => c.id === event.actor_id);
            if (movingChar && movingChar.stats.hp <= 0) break; // BỎ QUA NẾU ĐÃ CHẾT

            addLiveLog({ type: 'MOVE', content: `Di chuyển tới (${event.target_x}, ${event.target_y})`, charId: event.actor_id });
            let duration = 500; 
            const pastEventsForActor = Master_Timeline.filter(
              (e: any) => e.actor_id === event.actor_id && e.time_offset_ms < event.time_offset_ms
            );
            if (pastEventsForActor.length > 0) {
              const lastEvent = pastEventsForActor[pastEventsForActor.length - 1];
              duration = event.time_offset_ms - lastEvent.time_offset_ms;
              duration = Math.max(300, Math.min(duration, 3000));
            }

            // 1. Lấy vị trí hiện tại của nhân vật từ Store (trước khi di chuyển)
            const state = useMainStore.getState();
            const char = [...state.teamA, ...state.teamB].find(c => c.id === event.actor_id);
            const oldX = char?.position?.x ?? event.target_x;
            const oldY = char?.position?.y ?? event.target_y;

            // 2. Ép React cập nhật DOM đến điểm đích NGAY LẬP TỨC để chốt sổ Data
            moveCharacterById(event.actor_id, event.target_x, event.target_y, 0);
            
            // 3. Đợi 1 tick nhỏ xíu để React ghim xong DOM ở vị trí mới, rồi bảo GSAP kéo ngược về oldX, oldY và trượt lên
            const animTimer = setTimeout(() => {
              executeVFX({
                gsap_tween: {
                  target_id: event.actor_id,
                  from_x: oldX,
                  from_y: oldY,
                  x: event.target_x,
                  y: event.target_y,
                  duration_ms: duration,
                  ease: "power1.inOut"
                }
              }, simulationSpeed);
            }, 0);
            timeoutRefs.current.push(animTimer);
            break;
            
          case 'VFX':
            const vfxTarget = event.target_id || 'GLOBAL';
            const duration_vfx = event.duration_ms || 2000;
            
            // 🚀 GỌI ENGINE ĐỘC LẬP ĐỂ VẼ HIỆU ỨNG (PIXIJS + GSAP)
            executeVFX(event, simulationSpeed);
            
            // 🚀 NÂNG CẤP: Vẫn thêm vào Store để React quản lý vòng đời DOM nếu cần
            const instanceId = addVFXById(vfxTarget, event);
            const removeTimer = setTimeout(() => {
              removeVFXInstance(vfxTarget, instanceId);
            }, duration_vfx / simulationSpeed);
            timeoutRefs.current.push(removeTimer);
            break;
        }
      }, adjustedTimeOffset);

      timeoutRefs.current.push(timer);
    });

    const endTimer = setTimeout(() => {
      setIsPlaying(false);
      setIsFinished(true);
      addLiveLog({ type: 'SYSTEM', content: "⏹️ CẮT! Hoàn thành kịch bản." });
    }, (maxTime + 1000) / simulationSpeed); 

    timeoutRefs.current.push(endTimer);
  };

  return (
    <div className="w-1/2 flex flex-col p-6 overflow-y-auto bg-gray-900 border-l border-gray-800 relative z-20">
      <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
        <span>🎥</span> ĐANG TRÊN PHIM TRƯỜNG
      </h2>

      <div className="flex-1 bg-gray-950 border border-gray-700 rounded-lg p-4 mb-6 overflow-y-auto custom-scrollbar flex flex-col gap-2">
        {liveLogs.length === 0 ? (
          <div className="text-gray-500 italic text-center my-auto">
            Bấm "BẮT ĐẦU DIỄN" để xem các nhân vật hoạt động...
          </div>
        ) : (
          liveLogs.map((log) => (
            <div key={log.id} className="text-sm font-mono text-gray-300 border-b border-gray-800/50 pb-1 fade-in">
              {log.content}
            </div>
          ))
        )}
      </div>

      {!isPlaying && !isFinished && (
        <div className="mb-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-300">Tốc độ chạy giả lập:</label>
            <span className="text-green-400 font-bold">{simulationSpeed}x</span>
          </div>
          <input 
            type="range" 
            min="0.1" 
            max="5" 
            step="0.1" 
            value={simulationSpeed} 
            onChange={(e) => setSimulationSpeed(parseFloat(e.target.value))}
            className="w-full accent-green-500 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0.1x</span>
            <span>1x</span>
            <span>5x</span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 mt-auto">
        <button
          onClick={startSimulation}
          disabled={isPlaying || isFinished}
          className={`py-4 font-bold text-xl rounded-lg shadow-lg transition-all ${
            isPlaying ? 'bg-gray-600 text-gray-400 cursor-not-allowed' :
            isFinished ? 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-600' :
            'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)] active:scale-95'
          }`}
        >
          {isPlaying ? '🎬 ĐANG DIỄN...' : isFinished ? '✅ ĐÃ DIỄN XONG' : '▶️ BẮT ĐẦU DIỄN'}
        </button>

        {isFinished && (
          <button
            onClick={() => setAppStage('PHASE_6_EXPORTING')}
            className="py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)] animate-bounce"
          >
            🎞️ XUẤT THÀNH VIDEO
          </button>
        )}
      </div>
    </div>
  );
}