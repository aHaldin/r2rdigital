import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Operations from './pages/Operations'
import DigitalSolutions from './pages/DigitalSolutions'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function useFadeIn() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Use rAF so DOM has fully painted before we check positions
    const raf = requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.fade-in-up')

      // Immediately show anything already in the viewport
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight + 20) {
          el.classList.add('visible')
        }
      })

      // Observer for elements further down the page
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      )

      document.querySelectorAll('.fade-in-up:not(.visible)').forEach((el) =>
        observer.observe(el)
      )

      return () => observer.disconnect()
    })

    return () => cancelAnimationFrame(raf)
  }, [pathname])
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
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
