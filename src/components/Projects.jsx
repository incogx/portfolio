import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group glass-card neon-border neon-border-hover p-6 flex flex-col gap-4 cursor-pointer relative overflow-hidden"
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px at 50% 0%, ${project.color}10 0%, transparent 70%)`,
        }}
      />

      {/* Icon & category */}
      <div className="flex items-start justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
        <span className="text-xs font-mono text-slate-500 bg-[rgba(255,255,255,0.04)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.08)]">
          {project.year}
        </span>
      </div>

      {/* Title */}
      <div className="min-h-[82px] flex flex-col items-start">
        <h3
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:to-blue-300"
        >
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mt-0.5">{project.subtitle}</p>
        <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 mb-1 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.shortDesc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-mono"
            style={{
              background: `${project.color}12`,
              border: `1px solid ${project.color}25`,
              color: project.accentColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Category chip & link */}
      <div className="flex items-center justify-between pt-2 border-t border-[rgba(255,255,255,0.06)]">
        <span className="text-xs text-slate-500">{project.category}</span>
        <Link
          to={`/project/${project.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
          style={{ color: project.accentColor }}
        >
          View Case Study
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="relative py-28">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,102,255,0.3)] rounded-full">
            Engineering Portfolio
          </span>
          <h2 className="section-heading gradient-text-white">
            Projects & Systems
          </h2>
          <p className="section-subheading">
            Real-world AI systems, robotics prototypes, and full-stack applications built using modern AI-assisted development workflows.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/incogx"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
