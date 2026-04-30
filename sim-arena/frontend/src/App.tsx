import MainDashboard from './components/layout/MainDashboard'
import BattleLayout from './components/battle/BattleLayout'
import QuickTester from './components/QuickTester' // <-- 1. IMPORT FILE VÀO ĐÂY
import { useMainStore } from './store/useMainStore'

function App() {
  const { appStage } = useMainStore()

  return (
    <>
      <QuickTester /> {/* <-- 2. GỌI NÚT BẤM RA ĐÂY */}
      
      {appStage === 'PHASE_1_2_STUDIO' && <MainDashboard />}
      {appStage !== 'PHASE_1_2_STUDIO' && <BattleLayout />}
    </>
  )
}

export default App