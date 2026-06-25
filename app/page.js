import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import Education from './sections/Education'
import Contact from './sections/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
