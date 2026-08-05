import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AnsearchSection from './components/AnsearchSection'
import Projects from './components/Projects'
import Marquee from './components/Marquee'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <AnsearchSection />
        <Projects />
        <Marquee />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
