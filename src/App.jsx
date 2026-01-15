import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'

// Sections
import Hero from './sections/Hero'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Blogs from './sections/Blogs'
import Contact from './sections/Contact'
import AllProjects from './pages/AllProjects'

function HomePage() {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-50">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />
          <Route
            path="/projects"
            element={<AllProjects />}
          />
        </Routes>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
