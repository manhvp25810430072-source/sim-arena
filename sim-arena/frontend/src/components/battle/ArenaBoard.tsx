import { useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DroppableCell from './DroppableCell';

export default function ArenaBoard() {
  // LẤY THÊM simulationSpeed TỪ STORE
  const { mapPreviewUrl, liveLogs, teamA, teamB, uploadedShapes, activeVFX, simulationSpeed } = useMainStore();
  const logContainerRef = useRef<HTMLDivElement>(null);

  const displayLogs = liveLogs.filter(log => log.type === 'NARRATIVE' || log.type === 'DIALOGUE');

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  const getAvatarUrl = (charId?: string) => {
    if (!charId) return null;
    const char = [...teamA, ...teamB].find(c => c.id === charId);
    if (!char) return null;
    const shape = uploadedShapes.find(s => s.id === char.shapeId);
    return shape ? shape.previewUrl : null;
  };

  const gridCells = [];
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
      gridCells.push({ x, y });
    }
  }

  // Gom tất cả nhân vật có tọa độ để vẽ lên Lớp Phủ (Overlay)
  const allCharactersOnBoard = [...teamA, ...teamB].filter(c => c.position !== null);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-4 relative bg-gray-950">
      
      {/* CẬP NHẬT: Tốc độ hiệu ứng xuất hiện log cũng có thể điều chỉnh nhanh hơn nếu muốn, 
          nhưng tạm thời giữ nguyên để chữ không bị giật */}
      <style>{`
        @keyframes slideFadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .log-appear {
          animation: slideFadeIn 0.4s ease-out forwards;
        }
      `}</style>

      <div className="w-full max-w-[500px] flex flex-col relative">
        {/* KHUNG HỘI THOẠI MÔ PHỎNG */}
        <div 
          ref={logContainerRef}
          className="w-full bg-gray-900/80 border border-gray-700 rounded-t-lg mb-1 p-3 overflow-y-auto custom-scrollbar flex flex-col gap-3 scroll-smooth"
          style={{ 
            height: '150px', 
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
          }} 
        >
          {displayLogs.length === 0 && (
            <div className="text-xs text-gray-500 italic text-center mt-auto">
              --- Chờ diễn biến trận chiến ---
            </div>
          )}

          {displayLogs.map((log) => {
            const avatar = getAvatarUrl(log.charId);
            return (
              <div key={log.id} className="w-full flex shrink-0 log-appear">
                {log.type === 'NARRATIVE' && (
                  <div className="text-sm text-yellow-300 font-serif italic w-full text-center px-4 shadow-sm">
                    {log.content}
                  </div>
                )}
                {log.type === 'DIALOGUE' && (
                  <div className="flex gap-2 items-start w-full px-2">
                    {avatar ? (
                      <img src={avatar} alt="avatar" className="w-8 h-8 rounded-[2px] border border-gray-500 shrink-0 object-cover shadow" />
                    ) : (
                      <div className="w-8 h-8 rounded-[2px] bg-gray-700 shrink-0 border border-gray-600 flex items-center justify-center text-[10px]">?</div>
                    )}
                    <div className="bg-blue-900/60 px-3 py-1.5 rounded-lg text-sm text-gray-100 shadow-md relative border border-blue-800/50">
                      <div className="absolute top-2 -left-1.5 w-3 h-3 bg-blue-900/60 border-l border-b border-blue-800/50 rotate-45"></div>
                      {log.content}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* KHUNG BÀN CỜ GIẢ LẬP */}
        <div 
          className="w-full aspect-square relative bg-cover bg-center rounded-b-lg overflow-hidden shadow-2xl border border-gray-600"
          style={{ backgroundImage: `url(${mapPreviewUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* 1. Lưới tọa độ vô hình (chỉ để hứng event kéo thả quân) */}
          <div 
            className="absolute inset-0"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
          >
            {gridCells.map(cell => (
              <DroppableCell key={`cell-${cell.x}-${cell.y}`} x={cell.x} y={cell.y} />
            ))}
          </div>

          {/* 2. LỚP PHỦ NHÂN VẬT (MỚI) - Giúp nhân vật bay lượn tự do */}
          <div className="absolute inset-0 pointer-events-none">
            {allCharactersOnBoard.map(char => {
              const shape = uploadedShapes.find(s => s.id === char.shapeId);
              const vfx = activeVFX[char.id];
              const hpPercent = Math.max(0, (char.stats.hp / (char.stats.maxHp || 1)) * 100);
              
              const leftPercent = `${char.position!.x * 5}%`;
              const topPercent = `${char.position!.y * 5}%`;
              const moveDuration = char.position!.duration || 0;

              if (!shape) return null;

              return (
                <div
                  key={char.id}
                  className="absolute w-[5%] h-[5%] p-[1px] flex flex-col items-center justify-center z-10"
                  style={{
                    left: leftPercent,
                    top: topPercent,
                    // CHIA THỜI GIAN LƯỚT CSS CHO TỐC ĐỘ (simulationSpeed) ĐỂ HOẠT ẢNH MƯỢT MÀ
                    transition: `all ${moveDuration / simulationSpeed}ms linear`
                  }}
                >
                  <div 
                    className={`w-full h-full relative border-[1.5px] rounded flex flex-col items-center justify-center transition-all bg-gray-900 ${
                      char.team === 'A' ? 'border-blue-500 shadow-[0_0_8px_blue]' : 'border-red-500 shadow-[0_0_8px_red]'
                    } ${char.stats.hp <= 0 ? 'grayscale opacity-30 scale-90' : ''}`}
                    // CẬP NHẬT: Chia tốc độ hiệu ứng nhấp nháy/vfx đi kèm
                    style={{
                       ...vfx?.css_override,
                       transitionDuration: `${300 / simulationSpeed}ms`
                    }}
                  >
                    <img src={shape.previewUrl} alt="unit" className="w-full h-full object-cover rounded-[2px]" />
                    
                    {char.stats.hp > 0 && (
                      <div className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gray-900 border border-gray-700 rounded-full overflow-hidden z-10">
                        <div 
                          className={`h-full transition-all ${hpPercent > 50 ? 'bg-green-500' : hpPercent > 20 ? 'bg-yellow-500' : 'bg-red-500'}`}
                          style={{ width: `${hpPercent}%`, transitionDuration: `${300 / simulationSpeed}ms` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
