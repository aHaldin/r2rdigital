import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Operations from './pages/Operations'
import DigitalSolutions from './pages/DigitalSolutions'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const elements = document.querySelectorAll('.fade-in-up')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

function AppContent() {
  useFadeIn()
  return (
    <div className="min-h-screen bg-[#080810]">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/digital-solutions" element={<DigitalSolutions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppContent />
    </>
  )
}
