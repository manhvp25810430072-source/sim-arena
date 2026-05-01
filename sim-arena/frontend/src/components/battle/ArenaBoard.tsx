import { useRef, useEffect } from 'react';
import { useMainStore } from '../../store/useMainStore';
import DroppableCell from './DroppableCell';

export default function ArenaBoard() {
  const { mapPreviewUrl, liveLogs, teamA, teamB, uploadedShapes } = useMainStore();
  const logContainerRef = useRef<HTMLDivElement>(null);

  // 1. Lọc chỉ lấy NARRATIVE (Lời dẫn) và DIALOGUE (Hội thoại)
  const displayLogs = liveLogs.filter(log => log.type === 'NARRATIVE' || log.type === 'DIALOGUE');

  // Tự động cuộn xuống đáy mỗi khi có log mới
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [displayLogs]);

  // Hàm hỗ trợ tìm URL Avatar của nhân vật dựa vào ID
  const getAvatarUrl = (charId?: string) => {
    if (!charId) return null;
    const char = [...teamA, ...teamB].find(c => c.id === charId);
    if (!char) return null;
    const shape = uploadedShapes.find(s => s.id === char.shapeId);
    return shape ? shape.previewUrl : null;
  };

  // Tạo mảng 400 ô tọa độ (20x20)
  const gridCells = [];
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < 20; x++) {
      gridCells.push({ x, y });
    }
  }

  return (
    <div className="w-1/2 flex flex-col items-center justify-center p-4 relative bg-gray-950">
      
      {/* 2. Nhúng CSS Animation để chữ xuất hiện mượt mà (Fade In + trượt nhẹ lên) */}
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
        {/* KHUNG HỘI THOẠI MÔ PHỎNG (TOP AREA) */}
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
                
                {/* Lời dẫn truyện: Chữ vàng, in nghiêng, nằm giữa */}
                {log.type === 'NARRATIVE' && (
                  <div className="text-sm text-yellow-300 font-serif italic w-full text-center px-4 shadow-sm">
                    {log.content}
                  </div>
                )}

                {/* Hội thoại: Có Avatar và khung bong bóng bám sát ảnh */}
                {log.type === 'DIALOGUE' && (
                  <div className="flex gap-2 items-start w-full px-2">
                    {avatar ? (
                      <img src={avatar} alt="avatar" className="w-8 h-8 rounded-[2px] border border-gray-500 shrink-0 object-cover shadow" />
                    ) : (
                      <div className="w-8 h-8 rounded-[2px] bg-gray-700 shrink-0 border border-gray-600 flex items-center justify-center text-[10px]">?</div>
                    )}
                    <div className="bg-blue-900/60 px-3 py-1.5 rounded-lg text-sm text-gray-100 shadow-md relative border border-blue-800/50">
                      {/* Mũi tên chỉ vào avatar */}
                      <div className="absolute top-2 -left-1.5 w-3 h-3 bg-blue-900/60 border-l border-b border-blue-800/50 rotate-45"></div>
                      {log.content}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Khung Vuông Giả Lập 20x20 */}
        <div 
          className="w-full aspect-square relative bg-cover bg-center rounded-b-lg overflow-hidden shadow-2xl border border-gray-600"
          style={{ backgroundImage: `url(${mapPreviewUrl})` }}
        >
          {/* Lớp phủ tối */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Lưới tọa độ vô hình */}
          <div 
            className="absolute inset-0"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(20, minmax(0, 1fr))', gridTemplateRows: 'repeat(20, minmax(0, 1fr))' }}
          >
            {gridCells.map(cell => (
              <DroppableCell key={`cell-${cell.x}-${cell.y}`} x={cell.x} y={cell.y} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
