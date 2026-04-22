import { useScroll, useSpring, motion } from "framer-motion"
import About from './components/About'
import Experiences from './components/Experiences'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-5 md:px-10">
        <Home />
        <Services />
        <About />
        <Experiences />
        <Education />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
