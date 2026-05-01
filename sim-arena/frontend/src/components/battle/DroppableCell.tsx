import { useDroppable } from '@dnd-kit/core';
import { useMainStore } from '../../store/useMainStore';

interface Props {
  x: number;
  y: number;
}

export default function DroppableCell({ x, y }: Props) {
  const cellId = `cell-${x}-${y}`;
  const { isOver, setNodeRef } = useDroppable({ id: cellId });

  const { appStage } = useMainStore();

  // Ẩn viền lưới nếu đang ở màn hình giả lập
  const borderClass = appStage === 'PHASE_5_SIMULATING' ? 'border-transparent' : 'border-white/5';

  return (
    <div 
      ref={setNodeRef}
      className={`w-full h-full border ${borderClass} relative transition-colors ${
        isOver ? 'bg-green-500/40' : ''
      }`}
    >
      {/* ĐÃ XÓA PHẦN RENDER NHÂN VẬT Ở ĐÂY.
        Nhân vật giờ sẽ được render ở một "Lớp phủ" (Overlay) bên file ArenaBoard.tsx 
        để có thể lướt đi mượt mà giữa các ô.
      */}
    </div>
  );
}