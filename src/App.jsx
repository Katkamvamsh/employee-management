import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ProjectCard from './components/ProjectCard/ProjectCard'
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('portfolio-theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="app-shell">
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects with a point of view.</h2>
          </div>
          <div className="projects-grid">
            <ProjectCard number="01" title="Project Name" description="A short description of a product, experiment, or client project. Replace this with your own story." tags={['React', 'CSS', 'API']} />
            <ProjectCard number="02" title="Another Project" description="A second placeholder for the work you are most proud of and the outcome it created." tags={['JavaScript', 'Design']} />
            <ProjectCard number="03" title="A Case Study" description="Use this card for a longer-running project, collaboration, or open-source contribution." tags={['Research', 'Frontend']} />
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
