import { useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DroppableCell from './DroppableCell';
import type { Character } from '../../store/useMainStore';

// ---------------------------------------------------------
// COMPONENT CON: Quản lý riêng DOM Ref và Web Animation cho từng nhân vật
// ---------------------------------------------------------
const CharacterNode = ({ char, shape, vfx, simulationSpeed }: { char: Character, shape: any, vfx: any, simulationSpeed: number }) => {
  const charRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Nếu có animation API từ AI (rung, xoay, lướt...)
    if (vfx?.web_animation && charRef.current) {
      const { keyframes, options } = vfx.web_animation;
      try {
        const anim = charRef.current.animate(keyframes, {
          ...options,
          // Tính toán lại tốc độ animation khớp với tua nhanh/chậm
          duration: options.duration ? options.duration / simulationSpeed : 500 / simulationSpeed
        });
        return () => anim.cancel();
      } catch (e) {
        console.error("Animation error:", e);
      }
    }
  }, [vfx, simulationSpeed]);

  const hpPercent = Math.max(0, (char.stats.hp / (char.stats.maxHp || 1)) * 100);
  const leftPercent = `${char.position!.x * 5}%`;
  const topPercent = `${char.position!.y * 5}%`;
  const moveDuration = char.position!.duration || 0;
  
  // LOGIC CÁI CHẾT: Nếu máu <= 0 thì coi như đã tèo
  const isDead = char.stats.hp <= 0;

  return (
    <div
      className="absolute w-[5%] h-[5%] p-[1px] flex flex-col items-center justify-center z-10"
      style={{
        left: leftPercent,
        top: topPercent,
        transition: `all ${moveDuration / simulationSpeed}ms linear`
      }}
    >
      <div 
        ref={charRef}
        className={`w-full h-full relative border-[1.5px] rounded flex flex-col items-center justify-center transition-all bg-gray-900 ${
          char.team === 'A' ? 'border-blue-500 shadow-[0_0_8px_blue]' : 'border-red-500 shadow-[0_0_8px_red]'
        }`}
        style={{
           ...vfx?.css_override, // Style AI sinh ra (như đổi màu, phát sáng)
           
           // Ghi đè trạng thái chết: Xám xịt, mờ đi, và không nhận hiệu ứng phát sáng nữa
           ...(isDead ? { filter: 'grayscale(100%)', opacity: 0.3, transform: 'scale(0.8)', boxShadow: 'none' } : {}),
           transitionDuration: `${300 / simulationSpeed}ms`
        }}
      >
        <img src={shape.previewUrl} alt="unit" className="w-full h-full object-cover rounded-[2px]" />
        
        {/* Thanh Máu: Giấu đi khi nhân vật chết */}
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
// COMPONENT CHÍNH: SA BÀN
// ---------------------------------------------------------
export default function ArenaBoard() {
  const { mapPreviewUrl, liveLogs, teamA, teamB, uploadedShapes, activeVFX, simulationSpeed } = useMainStore();
  const logContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const displayLogs = liveLogs.filter(log => log.type === 'NARRATIVE' || log.type === 'DIALOGUE');

  // Cuộn log tự động
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  // --- ENGINE VẼ CANVAS (XỬ LÝ VFX TOÀN CỤC) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cố định độ phân giải nội bộ của canvas (20 ô x 50px = 1000x1000px)
    canvas.width = 1000;
    canvas.height = 1000;
    const CELL_SIZE = 50;

    // Xóa frame cũ mỗi lần VFX thay đổi
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Duyệt qua tất cả hiệu ứng hiện tại đang có canvas_commands
    Object.values(activeVFX).forEach((vfx: any) => {
      if (vfx && vfx.canvas_commands) {
        vfx.canvas_commands.forEach((cmd: any) => {
          ctx.save();
          
          if (cmd.glow) {
            ctx.shadowBlur = cmd.shadowBlur || 20;
            ctx.shadowColor = cmd.shadowColor || cmd.color;
          }

          ctx.fillStyle = cmd.color || 'white';
          ctx.strokeStyle = cmd.color || 'white';
          ctx.lineWidth = cmd.width || 2;

          switch (cmd.action) {
            case 'FILL_RECT':
              // Vẽ ô màu (dùng cho sương mù, mưa lửa, nháy đỏ màn hình)
              ctx.fillRect(cmd.x * CELL_SIZE, cmd.y * CELL_SIZE, cmd.width * CELL_SIZE, cmd.height * CELL_SIZE);
              break;
              
            case 'DRAW_CIRCLE':
              ctx.beginPath();
              // Vẽ vòng tròn tại tâm ô (cộng 0.5 để ra tâm)
              ctx.arc((cmd.centerX + 0.5) * CELL_SIZE, (cmd.centerY + 0.5) * CELL_SIZE, cmd.radius * CELL_SIZE, 0, Math.PI * 2);
              if (cmd.fill) ctx.fill();
              else ctx.stroke();
              break;
              
            case 'DRAW_LINE':
              ctx.beginPath();
              // Bắn tia laser / chém kiếm từ điểm A tới điểm B
              ctx.moveTo((cmd.startX + 0.5) * CELL_SIZE, (cmd.startY + 0.5) * CELL_SIZE);
              ctx.lineTo((cmd.endX + 0.5) * CELL_SIZE, (cmd.endY + 0.5) * CELL_SIZE);
              ctx.stroke();
              break;
          }
          
          ctx.restore();
        });
      }
    });
  }, [activeVFX]);

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
          
          {/* Lưới tọa độ vô hình (hứng event kéo thả quân) */}
          <div 
            className="absolute inset-0"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
          >
            {gridCells.map(cell => (
              <DroppableCell key={`cell-${cell.x}-${cell.y}`} x={cell.x} y={cell.y} />
            ))}
          </div>

          {/* LỚP PHỦ CANVAS (VẼ HIỆU ỨNG TIA LASER, MÁU ME TOÀN CỤC) */}
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          />

          {/* LỚP PHỦ NHÂN VẬT (CHUYỂN ĐỘNG & RUNG GIẬT) */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {allCharactersOnBoard.map(char => {
              const shape = uploadedShapes.find(s => s.id === char.shapeId);
              const vfx = activeVFX[char.id];
              if (!shape) return null;
              
              return (
                <CharacterNode 
                  key={char.id} 
                  char={char} 
                  shape={shape} 
                  vfx={vfx} 
                  simulationSpeed={simulationSpeed} 
                />
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
