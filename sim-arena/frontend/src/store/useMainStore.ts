import { create } from 'zustand'

export interface Character {
  id: string; 
  team: 'A' | 'B';
  name: string;
  personality: string;      
  basicAttackDesc: string;  
  skillDesc: string;        
  stats: {
    hp: number;             
    maxHp?: number; 
    agility: number;        
    damage: number;         
    range: number;          
  };
  shapeId: string | null;  
  position: { x: number, y: number, duration?: number } | null;
}

export interface LogEvent {
  id: string;
  type: 'SYSTEM' | 'NARRATIVE' | 'DIALOGUE' | 'COMBAT' | 'MOVE';
  content: string;
  charId?: string; 
}

interface MainState {
  mapImage: File | null;
  mapPreviewUrl: string | null;
  mapDescription: string;
  uploadedShapes: Array<{ id: string, file: File, previewUrl: string }>;
  
  teamA: Character[];
  teamB: Character[];
  
  appStage: 'PHASE_1_2_STUDIO' | 'PHASE_3_SETUP_BOARD' | 'PHASE_4_AI_GENERATING' | 'PHASE_5_SIMULATING' | 'PHASE_6_EXPORTING';
  Master_Timeline: any[];

  liveLogs: LogEvent[]; 
  activeDialogues: Record<string, { content: string, emotion: string } | null>;
  
  // 🚀 NÂNG CẤP: Chuyển activeVFX thành Mảng (Array) để cộng dồn nhiều hiệu ứng
  activeVFX: Record<string, any[]>;

  simulationSpeed: number;

  setMap: (file: File, previewUrl: string) => void;
  setMapDescription: (desc: string) => void;
  addShape: (file: File, previewUrl: string) => void;

  addCharacter: (team: 'A' | 'B', char: Character) => void;
  updateCharacter: (team: 'A' | 'B', id: string, updatedChar: Character) => void;
  removeCharacter: (team: 'A' | 'B', id: string) => void;

  setAppStage: (stage: 'PHASE_1_2_STUDIO' | 'PHASE_3_SETUP_BOARD' | 'PHASE_4_AI_GENERATING' | 'PHASE_5_SIMULATING' | 'PHASE_6_EXPORTING') => void;
  placeCharacterOnBoard: (team: 'A' | 'B', charId: string, x: number, y: number) => void;
  setMasterTimeline: (timeline: any[]) => void;

  addLiveLog: (log: Omit<LogEvent, 'id'>) => void; 
  setActiveDialogue: (charId: string, dialogue: { content: string, emotion: string } | null) => void;
  applyDamageById: (id: string, damage: number) => void;
  moveCharacterById: (id: string, x: number, y: number, duration?: number) => void;
  
  // 🚀 NÂNG CẤP: Các hàm quản lý vòng đời VFX mới
  addVFXById: (id: string, vfx: any) => string; // Trả về instanceId để hẹn giờ xóa
  removeVFXInstance: (id: string, instanceId: string) => void;
  clearAllVFX: () => void;
  
  setSimulationSpeed: (speed: number) => void;
  syncUpdatedState: (updatedState: Record<string, { hp: number, x: number, y: number }>) => void;
}

export const useMainStore = create<MainState>((set) => ({
  mapImage: null,
  mapPreviewUrl: null,
  mapDescription: '',
  uploadedShapes: [],
  teamA: [],
  teamB: [],
  
  appStage: 'PHASE_1_2_STUDIO',
  Master_Timeline: [],
  
  liveLogs: [],
  activeDialogues: {},
  activeVFX: {},
  
  simulationSpeed: 1, 
  
  setMap: (file, previewUrl) => set({ mapImage: file, mapPreviewUrl: previewUrl }),
  setMapDescription: (desc) => set({ mapDescription: desc }),
  addShape: (file, previewUrl) => set((state) => ({ 
      uploadedShapes: [...state.uploadedShapes, { id: crypto.randomUUID(), file, previewUrl }] 
  })),

  addCharacter: (team, char) => set((state) => {
    const newChar = { ...char, stats: { ...char.stats, maxHp: char.stats.hp } }; 
    return team === 'A' ? { teamA: [...state.teamA, newChar] } : { teamB: [...state.teamB, newChar] };
  }),
  
  updateCharacter: (team, id, updatedChar) => set((state) => {
    const newChar = { ...updatedChar, stats: { ...updatedChar.stats, maxHp: updatedChar.stats.hp } };
    if (team === 'A') return { teamA: state.teamA.map(c => c.id === id ? newChar : c) };
    return { teamB: state.teamB.map(c => c.id === id ? newChar : c) };
  }),
  
  removeCharacter: (team, id) => set((state) => {
    if (team === 'A') return { teamA: state.teamA.filter(c => c.id !== id) };
    return { teamB: state.teamB.filter(c => c.id !== id) };
  }),

  setAppStage: (stage) => set({ appStage: stage }),

  placeCharacterOnBoard: (team, charId, x, y) => set((state) => {
    if (team === 'A') return { teamA: state.teamA.map(c => c.id === charId ? { ...c, position: { x, y } } : c) };
    return { teamB: state.teamB.map(c => c.id === charId ? { ...c, position: { x, y } } : c) };
  }),

  setMasterTimeline: (timeline) => set({ Master_Timeline: timeline }),
  
  addLiveLog: (log) => set((state) => ({ 
    liveLogs: [...state.liveLogs, { ...log, id: crypto.randomUUID() }] 
  })),

  setActiveDialogue: (charId, dialogue) => set((state) => {
    if (dialogue === null) {
      const { [charId]: _, ...rest } = state.activeDialogues;
      return { activeDialogues: rest };
    }
    return {
      activeDialogues: { ...state.activeDialogues, [charId]: dialogue }
    };
  }),

  applyDamageById: (id, damage) => set((state) => {
    const updateFn = (c: Character) => {
      if (c.id === id) {
        const newHp = Math.max(0, c.stats.hp + damage); 
        return { ...c, stats: { ...c.stats, hp: newHp } };
      }
      return c;
    };
    return { teamA: state.teamA.map(updateFn), teamB: state.teamB.map(updateFn) };
  }),

  moveCharacterById: (id, x, y, duration) => set((state) => {
    const updateFn = (c: Character) => c.id === id ? { ...c, position: { x, y, duration: duration || 0 } } : c;
    return { teamA: state.teamA.map(updateFn), teamB: state.teamB.map(updateFn) };
  }),

  // 🚀 NÂNG CẤP: Logic thêm VFX vào mảng (Nhận trực tiếp 10 công cụ từ JSON)
  addVFXById: (id, vfx) => {
    const instanceId = crypto.randomUUID();
    const processedVFX = { ...vfx, _instanceId: instanceId };

    set((state) => {
      const existing = state.activeVFX[id] || [];
      return {
        activeVFX: {
          ...state.activeVFX,
          [id]: [...existing, processedVFX]
        }
      };
    });
    return instanceId; // Trả về ID để dùng cho Timeout xóa sau này
  },

  // 🚀 NÂNG CẤP: Logic gỡ bỏ một VFX cụ thể khi hết thời gian
  removeVFXInstance: (id, instanceId) => set((state) => {
    const existing = state.activeVFX[id];
    if (!existing) return state;

    const filtered = existing.filter((vfx: any) => vfx._instanceId !== instanceId);

    // Nếu xóa xong mà mảng rỗng thì dọn dẹp key luôn cho sạch state
    if (filtered.length === 0) {
      const newVfx = { ...state.activeVFX };
      delete newVfx[id];
      return { activeVFX: newVfx };
    }

    return {
      activeVFX: {
        ...state.activeVFX,
        [id]: filtered
      }
    };
  }),

  clearAllVFX: () => set({ activeVFX: {} }),

  setSimulationSpeed: (speed) => set({ simulationSpeed: speed }),

  syncUpdatedState: (updatedState) => set((state) => {
    const syncChar = (c: Character) => {
      const aiData = updatedState[c.id];
      if (aiData) {
        return { 
          ...c, 
          stats: { ...c.stats, hp: aiData.hp },
          position: { x: aiData.x, y: aiData.y }
        };
      }
      return c;
    };
    return {
      teamA: state.teamA.map(syncChar),
      teamB: state.teamB.map(syncChar)
    };
  })
}))