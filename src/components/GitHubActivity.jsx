import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

export default function GitHubActivity() {
  return (
    <section id="github" className="relative py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-mono text-green-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,200,80,0.25)] rounded-full">
            Open Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text-white mb-3">
            Development Activity
          </h2>
          <p className="text-slate-400 text-base">
            Contribution graph for{' '}
            <a
              href="https://github.com/incogx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-neon-cyan transition-colors font-mono"
            >
              @incogx
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card neon-border p-6 md:p-8 rounded-2xl overflow-x-auto"
        >
          <GitHubCalendar
            username="incogx"
            colorScheme="dark"
            theme={{
              dark: ['#0d1117', '#0d3366', '#0052cc', '#0066ff', '#00FFFF'],
            }}
            style={{ margin: '0 auto' }}
            blockRadius={4}
            blockSize={14}
            fontSize={14}
          />
        </motion.div>
      </div>
    </section>
  )
}
