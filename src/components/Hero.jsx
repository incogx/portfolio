import { motion } from 'framer-motion'
import { useEffect, useState, Suspense } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import HeroCanvas from './3d/HeroCanvas'
import PortfolioPDF from './PortfolioPDF'

const roles = [
  'AI Systems Builder',
  'Robotics Prototyper',
  'Computer Vision Engineer',
  'Full-Stack Developer',
  'IoT Innovator',
]

function TypewriterText({ texts }) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1800)
      return
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 50 : 80
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, texts])

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <span className="gradient-text font-mono text-2xl md:text-3xl font-bold">
      {texts[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-neon-cyan`}>|</span>
    </span>
  )
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 z-10"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,102,255,0.1)] border border-[rgba(0,102,255,0.3)] text-blue-400 text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              Sathyabama University · CSE (AI & Robotics)
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight">
              <span className="gradient-text-white">Abdul</span>
              <br />
              <span className="gradient-text-white">Kaif</span>{' '}
              <span className="text-neon-cyan text-shadow-glow">J</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="h-10 flex items-center">
            <TypewriterText texts={roles} />
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl"
          >
            AI & Robotics student building real-world systems using{' '}
            <span className="text-blue-400 font-medium">AI-assisted development</span>,{' '}
            <span className="text-cyan-400 font-medium">computer vision</span>, robotics, and full-stack
            technologies. Focused on architecture, integration, and real-world problem solving.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="btn-primary group"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <PDFDownloadLink
              document={<PortfolioPDF />}
              fileName="Abdul-Kaif-Portfolio.pdf"
              className="btn-secondary flex items-center gap-2"
            >
              {({ loading }) => (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {loading ? 'Preparing PDF...' : 'Download Portfolio'}
                </>
              )}
            </PDFDownloadLink>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={itemVariants} className="flex gap-8 pt-4 border-t border-[rgba(0,102,255,0.15)]">
            {[
              { value: '5+', label: 'Projects' },
              { value: '3+', label: 'Years Building' },
              { value: 'AI', label: 'Assisted Dev' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">{s.value}</span>
                <span className="text-xs text-slate-500">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative h-[420px] md:h-[540px] w-full"
        >
          {/* Glow behind canvas */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent rounded-full blur-2xl" />
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border-2 border-neon-cyan border-t-transparent animate-spin" />
              </div>
            }
          >
            <HeroCanvas />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 cursor-pointer"
        onClick={() => scrollTo('#projects')}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  )
}
