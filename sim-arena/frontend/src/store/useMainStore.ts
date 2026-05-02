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
    maxHp?: number; // Thêm maxHp để tính % thanh máu
    agility: number;        
    damage: number;         
    range: number;          
  };
  shapeId: string | null;  
  // THÊM THUỘC TÍNH duration ĐỂ CSS BIẾT DI CHUYỂN TRONG BAO LÂU
  position: { x: number, y: number, duration?: number } | null;
}

// Cấu trúc mới cho một dòng Log
export interface LogEvent {
  id: string;
  type: 'SYSTEM' | 'NARRATIVE' | 'DIALOGUE' | 'COMBAT' | 'MOVE';
  content: string;
  charId?: string; // Dùng để móc nối lấy hình Avatar
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

  // --- PHASE 5: REALTIME RENDER STATE ---
  liveLogs: LogEvent[]; 
  activeDialogues: Record<string, { content: string, emotion: string } | null>;
  activeVFX: Record<string, any>;

  // --- TỐC ĐỘ MÔ PHỎNG ---
  simulationSpeed: number;

  // Actions
  setMap: (file: File, previewUrl: string) => void;
  setMapDescription: (desc: string) => void;
  addShape: (file: File, previewUrl: string) => void;

  addCharacter: (team: 'A' | 'B', char: Character) => void;
  updateCharacter: (team: 'A' | 'B', id: string, updatedChar: Character) => void;
  removeCharacter: (team: 'A' | 'B', id: string) => void;

  setAppStage: (stage: 'PHASE_1_2_STUDIO' | 'PHASE_3_SETUP_BOARD' | 'PHASE_4_AI_GENERATING' | 'PHASE_5_SIMULATING' | 'PHASE_6_EXPORTING') => void;
  placeCharacterOnBoard: (team: 'A' | 'B', charId: string, x: number, y: number) => void;
  setMasterTimeline: (timeline: any[]) => void;

  // --- PHASE 5: ACTIONS ---
  addLiveLog: (log: Omit<LogEvent, 'id'>) => void; 
  setActiveDialogue: (charId: string, dialogue: { content: string, emotion: string } | null) => void;
  applyDamageById: (id: string, damage: number) => void;
  moveCharacterById: (id: string, x: number, y: number, duration?: number) => void;
  setVFXById: (id: string, vfx: any | null) => void;
  
  // --- ACTION ĐỔI TỐC ĐỘ ---
  setSimulationSpeed: (speed: number) => void;
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
  
  simulationSpeed: 1, // Mặc định là 1x
  
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

  // --- PHASE 5 LOGIC ---
  
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

  setVFXById: (id, vfx) => set((state) => {
    // Nếu truyền null, dọn dẹp sạch sẽ VFX của target này
    if (vfx === null) {
      const newVfx = { ...state.activeVFX };
      delete newVfx[id];
      return { activeVFX: newVfx };
    }

    const existing = state.activeVFX[id];
    
    // FIX LỖI GHI ĐÈ: Hợp nhất (Merge) các hiệu ứng nếu có nhiều VFX xảy ra cùng lúc
    if (existing) {
      return {
        activeVFX: {
          ...state.activeVFX,
          [id]: {
            ...existing, // Giữ lại animation cũ
            ...vfx,      // Ưu tiên animation mới nhất nếu có
            // Gộp CSS Override (Ví dụ vừa nhận filter đỏ, vừa nhận box-shadow trắng)
            css_override: { ...(existing.css_override || {}), ...(vfx.css_override || {}) },
            // Gộp danh sách lệnh vẽ Canvas để bắn được 2 tia laser cùng lúc
            canvas_commands: [...(existing.canvas_commands || []), ...(vfx.canvas_commands || [])]
          }
        }
      };
    }

    return {
      activeVFX: { ...state.activeVFX, [id]: vfx }
    };
  }),

  setSimulationSpeed: (speed) => set({ simulationSpeed: speed })
}))
