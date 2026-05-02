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
    if (vfx?.web_animation && charRef.current) {
      const { keyframes, options } = vfx.web_animation;
      try {
        const anim = charRef.current.animate(keyframes, {
          ...options,
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
           ...vfx?.css_override,
           ...(isDead ? { filter: 'grayscale(100%)', opacity: 0.3, transform: 'scale(0.8)', boxShadow: 'none' } : {}),
           transitionDuration: `${300 / simulationSpeed}ms`
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
// COMPONENT CHÍNH: SA BÀN
// ---------------------------------------------------------
export default function ArenaBoard() {
  const { mapPreviewUrl, liveLogs, teamA, teamB, uploadedShapes, activeVFX, simulationSpeed } = useMainStore();
  const logContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);

  // Dùng WeakMap lưu thời điểm bắt đầu của TỪNG LỆNH CANVAS để phục vụ requestAnimationFrame (Tuyệt đối không bị ghi đè)
  const commandStartTimes = useRef(new WeakMap<object, number>());

  const displayLogs = liveLogs.filter(log => log.type === 'NARRATIVE' || log.type === 'DIALOGUE');
  const globalVFX = activeVFX['GLOBAL'];

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  useEffect(() => {
    if (globalVFX?.web_animation && boardRef.current) {
      const { keyframes, options } = globalVFX.web_animation;
      try {
        const anim = boardRef.current.animate(keyframes, {
          ...options,
          duration: options.duration ? options.duration / simulationSpeed : 500 / simulationSpeed
        });
        return () => anim.cancel();
      } catch (e) {
        console.error("Global animation error:", e);
      }
    }
  }, [globalVFX, simulationSpeed]);

  // --- 🚀 ENGINE VẼ CANVAS SIÊU CẤP (NỘI SUY THEO THỜI GIAN THỰC) 🚀 ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1000;
    canvas.height = 1000;
    const CELL_SIZE = 50;

    let animationFrameId: number;

    const render = (time: number) => {
      // Xóa toàn bộ canvas để vẽ lại frame mới
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      Object.values(activeVFX).forEach((vfx: any) => {
        if (!vfx || !vfx.canvas_commands) return;

        const duration = (vfx.duration_ms || 2000) / simulationSpeed;

        vfx.canvas_commands.forEach((cmd: any) => {
          // Khởi tạo mốc thời gian bắt đầu cho lệnh nếu nó mới xuất hiện
          if (!commandStartTimes.current.has(cmd)) {
            commandStartTimes.current.set(cmd, time);
          }
          const startTime = commandStartTimes.current.get(cmd)!;
          const elapsed = time - startTime;
          
          // Giới hạn tiến trình (progress) chạy từ 0 -> 1 (0% đến 100%)
          const progress = Math.min(elapsed / duration, 1);

          // Hàm toán học cốt lõi: Nội suy tuyến tính (Linear Interpolation)
          const lerp = (start: number, end: number, t: number) => {
            if (start === undefined) return end || 0;
            if (end === undefined) return start;
            return start + (end - start) * t;
          };

          ctx.save();
          
          if (cmd.glow) {
            ctx.shadowBlur = cmd.shadowBlur || 20;
            ctx.shadowColor = cmd.shadowColor || cmd.color;
          }

          ctx.fillStyle = cmd.color || 'white';
          ctx.strokeStyle = cmd.color || 'white';
          ctx.lineWidth = cmd.width || 2;

          // Nội suy Opacity (Độ rõ nét giảm hoặc tăng dần)
          const startOp = cmd.startOpacity !== undefined ? cmd.startOpacity : 1;
          const endOp = cmd.endOpacity !== undefined ? cmd.endOpacity : 1;
          ctx.globalAlpha = Math.max(0, lerp(startOp, endOp, progress));

          // PHÂN LOẠI & VẼ FRAME HIỆN TẠI
          switch (cmd.action) {
            case 'ANIMATE_CIRCLE':
            case 'DRAW_CIRCLE': {
              const cx = cmd.centerX !== undefined ? cmd.centerX : cmd.x;
              const cy = cmd.centerY !== undefined ? cmd.centerY : cmd.y;
              // Nếu là ANIMATE thì nội suy bán kính, nếu DRAW tĩnh thì lấy radius cứng
              const r = cmd.action === 'ANIMATE_CIRCLE' 
                        ? lerp(cmd.startRadius, cmd.endRadius, progress) 
                        : cmd.radius;
              
              if (r > 0) {
                ctx.beginPath();
                ctx.arc((cx + 0.5) * CELL_SIZE, (cy + 0.5) * CELL_SIZE, r * CELL_SIZE, 0, Math.PI * 2);
                if (cmd.fill) ctx.fill();
                else ctx.stroke();
              }
              break;
            }
              
            case 'ANIMATE_LINE':
            case 'DRAW_LINE': {
              ctx.beginPath();
              // Điểm Bắt đầu
              ctx.moveTo((cmd.startX + 0.5) * CELL_SIZE, (cmd.startY + 0.5) * CELL_SIZE);
              
              // Điểm Kết thúc lao dần từ tọa độ Start đến tọa độ End
              const currentEndX = cmd.action === 'ANIMATE_LINE' ? lerp(cmd.startX, cmd.endX, progress) : cmd.endX;
              const currentEndY = cmd.action === 'ANIMATE_LINE' ? lerp(cmd.startY, cmd.endY, progress) : cmd.endY;
              
              ctx.lineTo((currentEndX + 0.5) * CELL_SIZE, (currentEndY + 0.5) * CELL_SIZE);
              ctx.stroke();
              break;
            }

            case 'ANIMATE_RECT':
            case 'FILL_RECT': {
              ctx.fillRect(cmd.x * CELL_SIZE, cmd.y * CELL_SIZE, cmd.width * CELL_SIZE, cmd.height * CELL_SIZE);
              break;
            }
          }
          
          ctx.restore();
        });
      });

      // Lặp lại frame tiếp theo (Vòng lặp vĩnh cửu của Game Engine)
      animationFrameId = requestAnimationFrame(render);
    };

    // Kích hoạt vòng lặp
    animationFrameId = requestAnimationFrame(render);

    // Dọn dẹp nếu component unmount hoặc re-render
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeVFX, simulationSpeed]);

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

        <div 
          ref={boardRef}
          className="w-full aspect-square relative bg-cover bg-center rounded-b-lg overflow-hidden shadow-2xl border border-gray-600 transition-all"
          style={{ 
            backgroundImage: `url(${mapPreviewUrl})`,
            ...globalVFX?.css_override 
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div 
            className="absolute inset-0"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
          >
            {gridCells.map(cell => (
              <DroppableCell key={`cell-${cell.x}-${cell.y}`} x={cell.x} y={cell.y} />
            ))}
          </div>

          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full pointer-events-none z-40"
          />

          <div className="absolute inset-0 pointer-events-none z-50">
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
