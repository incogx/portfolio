import { Trophy, Award, Heart, Fingerprint, Hand, BookOpen } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'BioLoop',
      subtitle: 'Circular Waste Intelligence System',
      description: 'A smart eco-innovation that converts soft waste to Black Soldier Fly larvae, hard waste to mushrooms using mycelium, and produces biodegradable bioplastic using combined outputs. Integrates sensors + AI for optimization.',
      icon: '🧬',
      awards: [
        { icon: Trophy, text: 'National Hackathon Winner' },
        { icon: Award, text: 'IEEE MakerFair Finalist' },
        { icon: Trophy, text: 'SIH Top 5 Waiting List' },
      ],
      color: 'from-green-500/20 to-cyan-500/20',
      borderColor: 'border-green-500/30',
      features: ['Waste → BSF Larvae', 'Mycelium Processing', 'Bioplastic Production', 'AI Optimization'],
    },
    {
      title: 'Emotion Intelligence System',
      subtitle: 'Multimodal Emotion Detection',
      description: 'A sophisticated system that detects user mood from voice tone and facial expressions, displaying real-time emotion holograms and waveforms for comprehensive emotional analysis.',
      icon: '🧠',
      awards: [],
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      features: ['Voice Analysis', 'Facial Recognition', 'Real-time Display', 'Emotion Mapping'],
    },
    {
      title: 'Biometric Attendance System',
      subtitle: 'Zero-Proxy Security',
      description: 'Fingerprint-based AI-secured attendance system with advanced biometric verification, ensuring zero possibility of proxy attendance through multi-factor authentication.',
      icon: '🔐',
      awards: [],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      features: ['Fingerprint Auth', 'AI Security', 'Real-time Tracking', 'Anti-Proxy System'],
    },
    {
      title: 'Gesture-Controlled Robot Car',
      subtitle: 'Intuitive Motion Control',
      description: 'Advanced robotic vehicle operated using gyroscope sensors, Bluetooth connectivity, and gesture recognition for seamless human-robot interaction.',
      icon: '🤖',
      awards: [],
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
      features: ['Gyroscope Control', 'Bluetooth Integration', 'Gesture Recognition', 'Real-time Response'],
    },
    {
      title: 'LMS Platform',
      subtitle: 'Tecknots Internship Project',
      description: 'Comprehensive Learning Management System with advanced dashboards, secure authentication, course management, and streamlined student flow using modern web technologies.',
      icon: '📚',
      awards: [],
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      features: ['User Dashboards', 'Authentication', 'Course Management', 'Student Analytics'],
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 animate-pulse">
            {'>'} PROJECTS.SHOWCASE()
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            INNOVATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PORTFOLIO</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge solutions bridging AI, robotics, and real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-sm border rounded-xl overflow-hidden hover:scale-105 transition-all duration-500"
              style={{
                borderColor: project.borderColor.replace('border-', '').replace('/30', ''),
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="text-5xl">{project.icon}</div>
                  {project.awards.length > 0 && (
                    <div className="flex space-x-1">
                      {project.awards.map((award, i) => (
                        <div key={i} className="relative group/award">
                          <award.icon className="w-5 h-5 text-yellow-400" />
                          <div className="absolute bottom-full mb-2 right-0 opacity-0 group-hover/award:opacity-100 transition-opacity bg-black/90 border border-yellow-400/30 rounded px-2 py-1 whitespace-nowrap text-xs text-gray-300">
                            {award.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-cyan-400 text-sm font-mono">{project.subtitle}</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-2 pt-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="bg-black/40 border border-cyan-500/20 rounded px-3 py-2 text-xs text-gray-400 hover:border-cyan-400/50 transition-colors"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
