import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ParticleBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />

        <footer className="relative border-t border-cyan-500/30 bg-black/60 backdrop-blur-sm py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 font-mono text-sm">
              {'>'} SYSTEM.STATUS: <span className="text-cyan-400">OPERATIONAL</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 Abdul Kaif J. All rights reserved. Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
