import { useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DroppableCell from './DroppableCell';
import type { Character } from '../../store/useMainStore';

// ---------------------------------------------------------
// COMPONENT CON: Quản lý riêng DOM Ref và Web Animation
// ---------------------------------------------------------
const CharacterNode = ({ char, shape, vfxList, simulationSpeed }: { char: Character, shape: any, vfxList: any[], simulationSpeed: number }) => {
  const charRef = useRef<HTMLDivElement>(null);

  // 🚀 NÂNG CẤP: Chạy song song nhiều Web Animation trên cùng 1 nhân vật
  useEffect(() => {
    if (!charRef.current || !vfxList || vfxList.length === 0) return;
    
    const animations: Animation[] = [];
    
    vfxList.forEach(vfx => {
      if (vfx.web_animation) {
        const { keyframes, options } = vfx.web_animation;
        try {
          const anim = charRef.current!.animate(keyframes, {
            ...options,
            duration: options.duration ? options.duration / simulationSpeed : 500 / simulationSpeed
          });
          animations.push(anim);
        } catch (e) {
          console.error("Animation error:", e);
        }
      }
    });

    return () => animations.forEach(anim => anim.cancel());
  }, [vfxList, simulationSpeed]);

  const hpPercent = Math.max(0, (char.stats.hp / (char.stats.maxHp || 1)) * 100);
  const leftPercent = `${char.position!.x * 5}%`;
  const topPercent = `${char.position!.y * 5}%`;
  const moveDuration = char.position!.duration || 0;
  
  const isDead = char.stats.hp <= 0;

  // 🚀 NÂNG CẤP: Gộp tất cả các CSS Override của các VFX đang Active lại với nhau
  const mergedCssOverride = vfxList?.reduce((acc, vfx) => ({ ...acc, ...(vfx.css_override || {}) }), {}) || {};

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
           ...mergedCssOverride, // Áp dụng CSS đã gộp
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

  const commandStartTimes = useRef(new WeakMap<object, number>());
  const commandSpawned = useRef(new WeakSet<object>());
  const particlesRef = useRef<any[]>([]);

  const displayLogs = liveLogs.filter(log => log.type === 'NARRATIVE' || log.type === 'DIALOGUE');
  const globalVFXList = activeVFX['GLOBAL'] || [];
  const mergedGlobalCss = globalVFXList.reduce((acc, vfx) => ({ ...acc, ...(vfx.css_override || {}) }), {});

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  useEffect(() => {
    if (!boardRef.current || globalVFXList.length === 0) return;
    const animations: Animation[] = [];
    globalVFXList.forEach(vfx => {
      if (vfx.web_animation) {
        const { keyframes, options } = vfx.web_animation;
        try {
          const anim = boardRef.current!.animate(keyframes, {
            ...options,
            duration: options.duration ? options.duration / simulationSpeed : 500 / simulationSpeed
          });
          animations.push(anim);
        } catch (e) {
          console.error("Global animation error:", e);
        }
      }
    });
    return () => animations.forEach(a => a.cancel());
  }, [globalVFXList, simulationSpeed]);

  // --- 🚀 ENGINE VẼ CANVAS 3.0 (HỖ TRỢ LERP, BEZIER, BLEND MODE, PARTICLES NÂNG CAO, POLYGON, ROTATION) 🚀 ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1000;
    canvas.height = 1000;
    const CELL_SIZE = 50;

    let animationFrameId: number;

    const Easing = {
      linear: (t: number) => t,
      easeIn: (t: number) => t * t,
      easeOut: (t: number) => t * (2 - t),
      easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    };

    const getEasingFunction = (easingName?: string) => {
      if (!easingName) return Easing.easeOut; 
      if (easingName.includes('ease-in-out')) return Easing.easeInOut;
      if (easingName.includes('ease-in')) return Easing.easeIn;
      if (easingName.includes('linear')) return Easing.linear;
      return Easing.easeOut;
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. RENDER HỆ THỐNG HẠT (PARTICLES) Ở DƯỚI CÙNG
      ctx.globalCompositeOperation = 'lighter'; 
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        
        // Cập nhật Vận tốc xoáy (Lỗ đen / Lốc xoáy)
        if (p.angularVelocity) {
          const cos = Math.cos(p.angularVelocity * simulationSpeed);
          const sin = Math.sin(p.angularVelocity * simulationSpeed);
          const nx = p.vx * cos - p.vy * sin;
          const ny = p.vx * sin + p.vy * cos;
          p.vx = nx;
          p.vy = ny;
        }

        p.x += p.vx * simulationSpeed;
        p.y += p.vy * simulationSpeed;
        p.vy += p.gravity * simulationSpeed; 
        p.life -= p.decay * simulationSpeed;
        p.size = Math.max(0, p.size - (p.sizeDecay || 0) * simulationSpeed);
        
        if (p.life <= 0 || p.size <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }
        
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        if (p.glow) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
        }
        
        ctx.translate(p.x, p.y);
        ctx.beginPath();
        if (p.shape === 'rect') {
          ctx.rect(-p.size/2, -p.size/2, p.size, p.size);
        } else if (p.shape === 'line') {
          ctx.moveTo(0, 0);
          ctx.lineTo(-p.vx * 2, -p.vy * 2); // Vẽ đuôi vệt sao chổi
          ctx.lineWidth = p.size;
          ctx.strokeStyle = p.color;
          ctx.stroke();
        } else {
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        }
        if (p.shape !== 'line') ctx.fill();
        ctx.restore();
      }

      // 2. RENDER CÁC LỆNH VFX CHÍNH (CANVAS COMMANDS)
      // Gom tất cả các lệnh canvas của mọi nhân vật đang có hiệu ứng
      const allVfxInstances = Object.values(activeVFX).flat();

      allVfxInstances.forEach((vfx: any) => {
        if (!vfx || !vfx.canvas_commands) return;

        const duration = (vfx.duration_ms || 2000) / simulationSpeed;

        vfx.canvas_commands.forEach((cmd: any) => {
          if (!commandStartTimes.current.has(cmd)) {
            commandStartTimes.current.set(cmd, time);
          }
          const startTime = commandStartTimes.current.get(cmd)!;
          const elapsed = time - startTime;
          
          const rawProgress = Math.min(elapsed / duration, 1);
          const easeFn = getEasingFunction(cmd.easing || vfx.easing);
          const progress = easeFn(rawProgress);

          const lerp = (start: number, end: number, t: number) => {
            if (start === undefined) return end || 0;
            if (end === undefined) return start;
            return start + (end - start) * t;
          };

          // LỆNH SPAWN HẠT -> XỬ LÝ RIÊNG & KHÔNG VẼ
          if (cmd.action === 'SPAWN_PARTICLES') {
            if (!commandSpawned.current.has(cmd)) {
              commandSpawned.current.add(cmd);
              const count = cmd.count || 50;
              const originX = (cmd.x !== undefined ? cmd.x + 0.5 : 10) * CELL_SIZE;
              const originY = (cmd.y !== undefined ? cmd.y + 0.5 : 10) * CELL_SIZE;
              
              for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * (cmd.speed || 5);
                particlesRef.current.push({
                  x: originX,
                  y: originY,
                  vx: Math.cos(angle) * speed,
                  vy: Math.sin(angle) * speed,
                  life: 1.0,
                  decay: Math.random() * (cmd.decayMax || 0.03) + (cmd.decayMin || 0.01),
                  color: cmd.color || 'red',
                  size: Math.random() * (cmd.size || 3) + 1,
                  sizeDecay: cmd.sizeDecay || 0, 
                  gravity: cmd.gravity || 0,
                  angularVelocity: cmd.angularVelocity || 0,
                  shape: cmd.shape || 'circle',
                  glow: cmd.glow
                });
              }
            }
            return; 
          }

          ctx.save();
          
          ctx.globalCompositeOperation = cmd.blendMode || 'source-over';

          if (cmd.glow) {
            ctx.shadowBlur = cmd.shadowBlur || 20;
            ctx.shadowColor = cmd.shadowColor || cmd.color;
          }

          // Xử lý Gradient hoặc Solid Color
          if (cmd.gradient) {
            let grad;
            if (cmd.gradient.type === 'linear') {
              grad = ctx.createLinearGradient(
                (cmd.gradient.x0 || 0) * CELL_SIZE, (cmd.gradient.y0 || 0) * CELL_SIZE,
                (cmd.gradient.x1 || 1) * CELL_SIZE, (cmd.gradient.y1 || 1) * CELL_SIZE
              );
            } else if (cmd.gradient.type === 'radial') {
              grad = ctx.createRadialGradient(
                (cmd.gradient.x0 || 0) * CELL_SIZE, (cmd.gradient.y0 || 0) * CELL_SIZE, (cmd.gradient.r0 || 0) * CELL_SIZE,
                (cmd.gradient.x1 || 0) * CELL_SIZE, (cmd.gradient.y1 || 0) * CELL_SIZE, (cmd.gradient.r1 || 1) * CELL_SIZE
              );
            }
            if (grad && cmd.gradient.stops) {
              cmd.gradient.stops.forEach((stop: any) => grad.addColorStop(stop.offset, stop.color));
            }
            ctx.fillStyle = grad || cmd.color || 'white';
            ctx.strokeStyle = grad || cmd.color || 'white';
          } else {
            ctx.fillStyle = cmd.color || 'white';
            ctx.strokeStyle = cmd.color || 'white';
          }
          
          const currentLineWidth = cmd.startWidth !== undefined ? lerp(cmd.startWidth, cmd.endWidth || cmd.width, progress) : (cmd.width || 2);
          ctx.lineWidth = currentLineWidth;
          ctx.lineCap = cmd.lineCap || 'round';
          ctx.lineJoin = cmd.lineJoin || 'round';

          const startOp = cmd.startOpacity !== undefined ? cmd.startOpacity : 1;
          const endOp = cmd.endOpacity !== undefined ? cmd.endOpacity : 1;
          ctx.globalAlpha = Math.max(0, lerp(startOp, endOp, progress));

          // Hỗ trợ Xoay vật thể (Rotation)
          if (cmd.rotation !== undefined || cmd.startAngle !== undefined) {
             const cx = (cmd.centerX !== undefined ? cmd.centerX : (cmd.x || 0)) + 0.5;
             const cy = (cmd.centerY !== undefined ? cmd.centerY : (cmd.y || 0)) + 0.5;
             const angle = cmd.rotation !== undefined ? cmd.rotation : lerp(cmd.startAngle || 0, cmd.endAngle || 0, progress);
             
             ctx.translate(cx * CELL_SIZE, cy * CELL_SIZE);
             ctx.rotate(angle * Math.PI / 180); 
             ctx.translate(-cx * CELL_SIZE, -cy * CELL_SIZE);
          }

          switch (cmd.action) {
            case 'ANIMATE_CIRCLE':
            case 'DRAW_CIRCLE': {
              const cx = cmd.centerX !== undefined ? cmd.centerX : cmd.x;
              const cy = cmd.centerY !== undefined ? cmd.centerY : cmd.y;
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
              ctx.moveTo((cmd.startX + 0.5) * CELL_SIZE, (cmd.startY + 0.5) * CELL_SIZE);
              
              const currentEndX = cmd.action === 'ANIMATE_LINE' ? lerp(cmd.startX, cmd.endX, progress) : cmd.endX;
              const currentEndY = cmd.action === 'ANIMATE_LINE' ? lerp(cmd.startY, cmd.endY, progress) : cmd.endY;
              
              ctx.lineTo((currentEndX + 0.5) * CELL_SIZE, (currentEndY + 0.5) * CELL_SIZE);
              ctx.stroke();
              break;
            }

            case 'ANIMATE_BEZIER':
            case 'DRAW_BEZIER': {
              ctx.beginPath();
              ctx.moveTo((cmd.startX + 0.5) * CELL_SIZE, (cmd.startY + 0.5) * CELL_SIZE);
              
              const currentEndX = cmd.action === 'ANIMATE_BEZIER' ? lerp(cmd.startX, cmd.endX, progress) : cmd.endX;
              const currentEndY = cmd.action === 'ANIMATE_BEZIER' ? lerp(cmd.startY, cmd.endY, progress) : cmd.endY;
              
              const ctrlX = cmd.controlX !== undefined ? cmd.controlX : (cmd.startX + cmd.endX) / 2;
              const ctrlY = cmd.controlY !== undefined ? cmd.controlY : (cmd.startY + cmd.endY) / 2 - 2;

              ctx.quadraticCurveTo(
                (ctrlX + 0.5) * CELL_SIZE, 
                (ctrlY + 0.5) * CELL_SIZE, 
                (currentEndX + 0.5) * CELL_SIZE, 
                (currentEndY + 0.5) * CELL_SIZE
              );
              ctx.stroke();
              break;
            }

            case 'ANIMATE_RECT':
            case 'FILL_RECT': {
              const currentX = cmd.startX !== undefined ? lerp(cmd.startX, cmd.endX || cmd.x, progress) : cmd.x;
              const currentY = cmd.startY !== undefined ? lerp(cmd.startY, cmd.endY || cmd.y, progress) : cmd.y;
              const currentW = cmd.startWidth !== undefined ? lerp(cmd.startWidth, cmd.endWidth || cmd.width, progress) : cmd.width;
              const currentH = cmd.startHeight !== undefined ? lerp(cmd.startHeight, cmd.endHeight || cmd.height, progress) : cmd.height;
              
              if (cmd.fill !== false) {
                ctx.fillRect(currentX * CELL_SIZE, currentY * CELL_SIZE, currentW * CELL_SIZE, currentH * CELL_SIZE);
              } else {
                ctx.strokeRect(currentX * CELL_SIZE, currentY * CELL_SIZE, currentW * CELL_SIZE, currentH * CELL_SIZE);
              }
              break;
            }
            
            // 🚀 NÂNG CẤP: Cho phép vẽ Đa Giác (Ngôi sao, mảng vỡ, tia chớp zic-zắc)
            case 'ANIMATE_POLYGON':
            case 'DRAW_POLYGON': {
              if (cmd.points && cmd.points.length > 0) {
                ctx.beginPath();
                cmd.points.forEach((pt: any, index: number) => {
                  const px = cmd.action === 'ANIMATE_POLYGON' ? lerp(pt.startX, pt.endX, progress) : pt.x;
                  const py = cmd.action === 'ANIMATE_POLYGON' ? lerp(pt.startY, pt.endY, progress) : pt.y;
                  
                  if (index === 0) ctx.moveTo((px + 0.5) * CELL_SIZE, (py + 0.5) * CELL_SIZE);
                  else ctx.lineTo((px + 0.5) * CELL_SIZE, (py + 0.5) * CELL_SIZE);
                });
                if (cmd.closePath !== false) ctx.closePath();
                if (cmd.fill) ctx.fill();
                else ctx.stroke();
              }
              break;
            }
          }
          
          ctx.restore();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeVFX, simulationSpeed]);
  // --------------------------------------------------------------------------

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
            ...mergedGlobalCss 
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
              // Lấy mảng VFX, nếu chưa có thì truyền mảng rỗng
              const vfxList = activeVFX[char.id] || [];
              if (!shape) return null;
              
              return (
                <CharacterNode 
                  key={char.id} 
                  char={char} 
                  shape={shape} 
                  vfxList={vfxList} 
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