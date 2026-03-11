import { motion } from 'framer-motion'
import { timeline } from '../data/projects'

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-700/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,102,255,0.3)] rounded-full">
            Career Journey
          </span>
          <h2 className="section-heading gradient-text-white">Engineering Timeline</h2>
          <p className="section-subheading">
            A chronicle of projects, innovations, and milestones from student to engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{ background: 'linear-gradient(180deg, transparent, #0066FF, #00FFFF, transparent)' }}
          />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-[28px] md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10"
                  style={{
                    borderColor: item.color,
                    background: '#020408',
                    boxShadow: `0 0 12px ${item.color}80`,
                  }}
                />

                {/* Card — alternating sides */}
                <div className={`ml-14 md:ml-0 md:w-[44%] ${i % 2 === 0 ? 'md:mr-auto md:text-right md:pr-12' : 'md:ml-auto md:text-left md:pl-12'}`}>
                  <div
                    className="glass-card neon-border p-5 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
                    style={{ borderColor: `${item.color}25` }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(400px at 50% 0%, ${item.color}08 0%, transparent 70%)` }}
                    />
                    <div className="flex items-center gap-2 mb-2" style={{ justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <span
                        className="font-mono font-bold text-sm px-3 py-1 rounded-full"
                        style={{
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}30`,
                          color: item.color,
                        }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
