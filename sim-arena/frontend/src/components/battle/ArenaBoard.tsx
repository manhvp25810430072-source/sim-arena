import { useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DroppableCell from './DroppableCell';
import type { Character } from '../../store/useMainStore';

// ---------------------------------------------------------
// COMPONENT CON: NHÂN VẬT TRÊN BÀN CỜ
// ---------------------------------------------------------
const CharacterNode = ({ char, shape, simulationSpeed }: { char: Character, shape: any, simulationSpeed: number }) => {
  const hpPercent = Math.max(0, (char.stats.hp / (char.stats.maxHp || 1)) * 100);
  const leftPercent = `${char.position!.x * 5}%`;
  const topPercent = `${char.position!.y * 5}%`;
  
  const isDead = char.stats.hp <= 0;

  return (
    <div
      id={`char-${char.id}`} // 🚀 QUAN TRỌNG 1: Gắn ID để GSAP tóm được thẻ này và đẩy/kéo/xoay
      className="absolute w-[5%] h-[5%] p-[1px] flex flex-col items-center justify-center z-20"
      style={{
        left: leftPercent,
        top: topPercent
        // 🚀 ĐÃ XÓA CSS TRANSITION: Tước quyền của CSS, giao toàn bộ việc làm mượt cho GSAP
      }}
    >
      <div 
        className={`w-full h-full relative border-[1.5px] rounded flex flex-col items-center justify-center bg-gray-900 ${
          char.team === 'A' ? 'border-blue-500 shadow-[0_0_8px_blue]' : 'border-red-500 shadow-[0_0_8px_red]'
        }`}
        style={{
           ...(isDead ? { filter: 'grayscale(100%)', opacity: 0.3, transform: 'scale(0.8)', boxShadow: 'none' } : {})
        }}
      >
        <img src={shape.previewUrl} alt="unit" className="w-full h-full object-cover rounded-[2px]" />
        
        {!isDead && (
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
};

// ---------------------------------------------------------
// COMPONENT CHÍNH: SA BÀN (SÂN KHẤU)
// ---------------------------------------------------------
export default function ArenaBoard() {
  const { mapPreviewUrl, liveLogs, teamA, teamB, uploadedShapes, simulationSpeed } = useMainStore();
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

  const allCharactersOnBoard = [...teamA, ...teamB].filter(c => c.position !== null);

  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-4 relative bg-gray-950">
      
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
        
        {/* LOG PANEL DIALOGUE */}
        <div 
          ref={logContainerRef}
          className="w-full bg-gray-900/80 border border-gray-700 rounded-t-lg mb-1 p-3 overflow-y-auto custom-scrollbar flex flex-col gap-3 scroll-smooth z-50"
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

        {/* 🚀 QUAN TRỌNG 2: SÂN KHẤU CHÍNH ĐÃ ĐƯỢC CHIA LỚP (LAYERS) */}
        <div 
          id="arena-board" // Gắn ID để làm hiệu ứng Rung Màn Hình (Camera Shake)
          className="w-full aspect-square relative bg-cover bg-center rounded-b-lg overflow-hidden shadow-2xl border border-gray-600"
          style={{ backgroundImage: `url(${mapPreviewUrl})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* LỚP 1 (Dưới cùng - z-0): Vẽ vòng ma thuật, bẫy, vệt máu dưới đất */}
          <canvas id="vfx-bg-layer" className="absolute inset-0 w-full h-full z-0 pointer-events-none" />
          
          {/* LỚP 2 (z-10): Lưới bàn cờ nhận diện kéo thả */}
          <div 
            className="absolute inset-0 z-10"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
          >
            {gridCells.map(cell => (
              <DroppableCell key={`cell-${cell.x}-${cell.y}`} x={cell.x} y={cell.y} />
            ))}
          </div>

          {/* LỚP 3 (z-20): Các nhân vật */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {allCharactersOnBoard.map(char => {
              const shape = uploadedShapes.find(s => s.id === char.shapeId);
              if (!shape) return null;
              return <CharacterNode key={char.id} char={char} shape={shape} simulationSpeed={simulationSpeed} />;
            })}
          </div>

          {/* LỚP 4 (Trên cùng - z-30): Vẽ đạn bay ngang đầu, mưa, tia laser, chớp lóe */}
          <canvas id="vfx-fg-layer" className="absolute inset-0 w-full h-full z-30 pointer-events-none" />

        </div>
      </div>
    </div>
  );
}