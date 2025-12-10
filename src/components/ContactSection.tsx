import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('sent');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 animate-pulse">
            {'>'} CONTACT.INITIALIZE()
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">CONNECT</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on the next big innovation? Reach out and let's build something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href="mailto:abdulkaif@example.com"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-mono">abdulkaif@example.com</div>
                  </div>
                </a>

                <a
                  href="https://github.com/abdulkaif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg hover:border-purple-400 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">GitHub</div>
                    <div className="text-white font-mono">@abdulkaif</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/abdulkaif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg hover:border-blue-400 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">LinkedIn</div>
                    <div className="text-white font-mono">Abdul Kaif J</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-sm">STATUS: AVAILABLE</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently open to collaborations, internships, and exciting project opportunities.
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  {'>'} NAME_INPUT
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  {'>'} EMAIL_INPUT
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-cyan-400 font-mono text-sm mb-2">
                  {'>'} MESSAGE_INPUT
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black/60 border border-cyan-500/30 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'idle' && (
                  <>
                    <span>LET'S BUILD THE FUTURE TOGETHER</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <span>TRANSMITTING...</span>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <span>MESSAGE SENT!</span>
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="text-center">
                <p className="text-gray-500 text-xs font-mono">
                  {'>'} RESPONSE_TIME: &lt; 24 HOURS
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
