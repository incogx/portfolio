import { motion } from 'framer-motion'
import { useState } from 'react'

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'abdulsist23@gmail.com',
    href: 'mailto:abdulsist23@gmail.com',
    color: '#0066FF',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/incogx',
    href: 'https://github.com/incogx',
    color: '#7dd3fc',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Abdul Kaif J',
    href: 'https://www.linkedin.com/in/abdul-kaif-j-770268288',
    color: '#0ea5e9',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Chennai, India',
    href: null,
    color: '#00FFFF',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:abdulsist23@gmail.com?subject=${subject}&body=${body}`)
    setStatus('sent')
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-700/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono text-cyan-400 tracking-widest uppercase mb-4 px-3 py-1 border border-[rgba(0,255,255,0.2)] rounded-full">
            Get In Touch
          </span>
          <h2 className="section-heading gradient-text-white">Let's Build Something</h2>
          <p className="section-subheading">
            Open to AI research collaborations, robotics projects, internships, and full-time roles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <p className="text-slate-400 leading-relaxed text-base">
              I'm always interested in hearing about exciting AI and robotics challenges. Whether you have a project in mind, an internship opportunity, or just want to talk about the future of intelligent systems — reach out!
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {contactDetails.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-card neon-border-hover border border-[rgba(0,102,255,0.15)] p-4 rounded-xl flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-200 hover:text-neon-cyan transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-slate-200">{c.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card neon-border p-8 rounded-2xl flex flex-col gap-5"
            >
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Smith' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-sm text-slate-400 font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="bg-[rgba(255,255,255,0.04)] border border-[rgba(0,102,255,0.2)] rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-[rgba(0,255,255,0.5)] focus:bg-[rgba(0,102,255,0.05)] transition-all duration-200"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-400 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="bg-[rgba(255,255,255,0.04)] border border-[rgba(0,102,255,0.2)] rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-[rgba(0,255,255,0.5)] focus:bg-[rgba(0,102,255,0.05)] transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary mt-2 text-center flex items-center justify-center gap-3"
              >
                {status === 'sent' ? (
                  <>
                    <svg className="w-5 h-5 text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Let's Build the Future Together
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
