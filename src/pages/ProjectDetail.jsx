import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { projects } from '../data/projects'
import Footer from '../components/Footer'

const BioLoopDiagram = lazy(() => import('../components/BioLoopDiagram'))

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
      <Link to="/" className="btn-primary">← Back to Portfolio</Link>
    </div>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) return <NotFound />

  return (
    <div className="min-h-screen bg-deep-black">
      {/* Hero banner */}
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.color}18 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
        />

        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-slate-500 mb-8"
          >
            <Link to="/" className="hover:text-blue-400 transition-colors">Portfolio</Link>
            <span>/</span>
            <Link to="/#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
            <span>/</span>
            <span style={{ color: project.color }}>{project.title}</span>
          </motion.div>

          {/* Title block */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
              style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
            >
              {project.icon}
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full font-semibold"
                    style={{
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      color: project.color,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{project.year}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-2 leading-tight">
                  {project.title}
                </h1>
                <p
                  className="text-xl md:text-2xl font-semibold mb-4"
                  style={{ color: project.accentColor }}
                >
                  {project.subtitle}
                </p>
                <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
                  {project.shortDesc}
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mt-5"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full font-mono"
                    style={{
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}25`,
                      color: project.accentColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 pb-28 flex flex-col gap-14">

        {/* Overview */}
        <Section label="Overview" color={project.color} index={0}>
          <p className="text-slate-300 leading-relaxed text-base">{project.overview}</p>
        </Section>

        {/* Problem + Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section label="Problem" color="#ef4444" index={1}>
            <p className="text-slate-300 leading-relaxed text-base">{project.problem}</p>
          </Section>
          <Section label="Solution" color={project.color} index={2}>
            <p className="text-slate-300 leading-relaxed text-base">{project.solution}</p>
          </Section>
        </div>

        {/* Architecture */}
        <Section label="System Architecture" color={project.accentColor} index={3}>
          <div className="flex flex-col gap-3">
            {project.architecture.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-4 items-start p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.2)] transition-colors group"
              >
                <span
                  className="font-mono font-bold text-sm px-3 py-1 rounded-lg flex-shrink-0 mt-0.5"
                  style={{
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}25`,
                    color: project.color,
                  }}
                >
                  {step.step}
                </span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BioLoop interactive diagram */}
          {project.hasBioLoopDiagram && (
            <div className="mt-8">
              <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">
                Interactive System Flow — Drag nodes to explore
              </p>
              <Suspense fallback={<div className="h-[600px] glass-card neon-border rounded-2xl flex items-center justify-center text-slate-500">Loading diagram...</div>}>
                <BioLoopDiagram />
              </Suspense>
            </div>
          )}
        </Section>

        {/* Technologies */}
        <Section label="Technologies Used" color="#7dd3fc" index={4}>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-4 py-2 rounded-xl font-mono text-sm font-medium text-slate-200"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}20`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Impact */}
        <Section label="Impact & Outcomes" color="#00C851" index={5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.impact.map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(0,200,80,0.05)] border border-[rgba(0,200,80,0.12)]"
              >
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
          <Link to="/#projects" className="btn-secondary flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Projects
          </Link>
        </motion.div>

        {/* More Projects */}
        <div>
          <h3 className="text-xl font-bold text-slate-300 mb-6">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 4)
              .map((p, i) => (
                <motion.div
                  key={p.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/project/${p.id}`}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card neon-border-hover border border-[rgba(0,102,255,0.1)] group transition-all duration-300 hover:border-[rgba(0,255,255,0.25)]"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${p.color}15` }}
                    >
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white text-sm group-hover:text-neon-cyan transition-colors truncate">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 truncate">{p.subtitle}</p>
                    </div>
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-neon-cyan transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function Section({ label, color, children, index = 0 }) {
  return (
    <motion.section
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div
          className="w-1 h-8 rounded-full"
          style={{ background: `linear-gradient(180deg, ${color}, transparent)` }}
        />
        <h2 className="text-2xl font-bold text-white">{label}</h2>
      </div>
      <div className="pl-4 border-l border-[rgba(255,255,255,0.06)]">
        {children}
      </div>
    </motion.section>
  )
}
