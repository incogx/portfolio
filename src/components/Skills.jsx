import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { skills } from '../data/projects'

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group glass-card neon-border neon-border-hover p-6 relative overflow-hidden"
    >
      {/* Top gradient accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${skill.color}80, transparent)` }}
      />

      {/* Icon & Category */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
          style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}30` }}
        >
          {skill.icon}
        </div>
        <h3
          className="font-bold text-base"
          style={{ color: skill.color }}
        >
          {skill.category}
        </h3>
      </div>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 + i * 0.04 }}
            className="text-xs px-3 py-1.5 rounded-full font-mono font-medium transition-all duration-200 cursor-default"
            style={{
              background: `${skill.color}10`,
              border: `1px solid ${skill.color}20`,
              color: '#94a3b8',
            }}
            whileHover={{
              background: `${skill.color}25`,
              borderColor: `${skill.color}60`,
              color: '#e2e8f0',
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-600/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,255,255,0.2)] rounded-full">
            Technical Stack
          </span>
          <h2 className="section-heading gradient-text-white">
            Skills & Technologies
          </h2>
          <p className="section-subheading">
            A broad engineering toolkit spanning AI, robotics, full-stack, and systems — applied to build real-world solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>

        {/* AI Tools note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-card neon-border px-6 py-4 rounded-2xl">
            <span className="text-2xl">⚡</span>
            <p className="text-slate-400 text-sm">
              Frequently leverages{' '}
              <span className="text-blue-400 font-medium">AI-assisted development tools</span>{' '}
              to design, prototype, and build systems with speed and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
