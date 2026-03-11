import { motion } from 'framer-motion'
import { Trophy, Medal, Rocket, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { achievements } from '../data/projects'

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  rocket: Rocket,
  briefcase: BriefcaseBusiness,
  graduation: GraduationCap,
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-mono text-blue-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,102,255,0.25)] rounded-full">
            &gt; achievements.unlocked()
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold gradient-text-white">Achievements</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon]

            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass-card border border-[rgba(0,102,255,0.2)] rounded-2xl p-7 min-h-[130px] flex items-center"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}35` }}
                  >
                    <Icon size={20} color={item.color} strokeWidth={2.1} />
                  </div>
                  <p className="text-slate-300 text-[1.03rem] leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
