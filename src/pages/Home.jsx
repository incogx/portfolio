import ParticleBackground from '../components/ParticleBackground'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import GitHubActivity from '../components/GitHubActivity'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-deep-black">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Timeline />
        <GitHubActivity />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
