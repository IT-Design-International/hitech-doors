import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SectionalDoorsPage from './pages/SectionalDoorsPage'
import RollUpDoorsPage from './pages/RollUpDoorsPage'
import IndustrialShuttersPage from './pages/IndustrialShuttersPage'
import AluminiumShuttersPage from './pages/AluminiumShuttersPage'
import AutomationPage from './pages/AutomationPage'

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sectional-doors" element={<SectionalDoorsPage />} />
        <Route path="/roll-up-garage-doors" element={<RollUpDoorsPage />} />
        <Route path="/industrial-roller-shutters" element={<IndustrialShuttersPage />} />
        <Route path="/aluminium-window-shutters" element={<AluminiumShuttersPage />} />
        <Route path="/automation" element={<AutomationPage />} />
      </Routes>
    </BrowserRouter>
  )
}
