import { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Journal from './pages/Journal'
import Process from './pages/Process'
import NotFound from './pages/NotFound'
import { initSmoothScroll, destroySmoothScroll, getLenis } from './lib/smoothScroll'

function App() {
  const location = useLocation()
  const mainRef = useRef(null)
  const firstRender = useRef(true)

  useEffect(() => {
    initSmoothScroll()
    return () => destroySmoothScroll()
  }, [])

  useEffect(() => {
    const lenis = getLenis()
    lenis?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()

    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (mainRef.current) {
      gsap.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' })
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main ref={mainRef} className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/process" element={<Process />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
