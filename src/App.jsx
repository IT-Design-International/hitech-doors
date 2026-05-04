import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import SectionalDoorsPage from './pages/SectionalDoorsPage'
import RollUpDoorsPage from './pages/RollUpDoorsPage'
import IndustrialShuttersPage from './pages/IndustrialShuttersPage'
import AluminiumShuttersPage from './pages/AluminiumShuttersPage'
import AutomationPage from './pages/AutomationPage'

function ScrollRestoration() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollRestoration />
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
