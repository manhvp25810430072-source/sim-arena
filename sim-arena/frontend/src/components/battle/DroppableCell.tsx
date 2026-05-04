import { useDroppable } from '@dnd-kit/core';

export default function DroppableCell({ x, y }: { x: number, y: number }) {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${x}-${y}`,
    data: { x, y }
  });

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-full border-[0.5px] border-gray-800/30 transition-colors ${
        isOver ? 'bg-green-500/20 border-green-500/50' : ''
      }`}
    />
  );
}