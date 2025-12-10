import { Brain, Cpu, Eye, Network, Code, Smartphone, Database, Server } from 'lucide-react';

export default function SkillsSection() {
  const skillGroups = [
    {
      title: 'AI & ML',
      icon: Brain,
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'CNNs'],
      level: 90,
    },
    {
      title: 'Robotics & Embedded',
      icon: Cpu,
      color: 'from-green-500 to-cyan-500',
      skills: ['Arduino', 'Sensors', 'Integration', 'Automation'],
      level: 85,
    },
    {
      title: 'Computer Vision',
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      skills: ['Image Processing', 'Object Detection', 'Face Recognition', 'Real-time CV'],
      level: 88,
    },
    {
      title: 'Full Stack',
      icon: Code,
      color: 'from-blue-500 to-purple-500',
      skills: ['React', 'React Native', 'Tailwind', 'FastAPI'],
      level: 82,
    },
    {
      title: 'Systems & Network',
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Linux', 'Git', 'CCNA', 'Cloud Services'],
      level: 80,
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-pink-500 to-purple-500',
      skills: ['React Native', 'Cross-platform', 'UI/UX', 'Native APIs'],
      level: 78,
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-blue-500',
      skills: ['FastAPI', 'REST APIs', 'WebSockets', 'Authentication'],
      level: 85,
    },
    {
      title: 'Data Systems',
      icon: Database,
      color: 'from-cyan-500 to-green-500',
      skills: ['Firebase', 'SQL', 'Data Processing', 'Analytics'],
      level: 80,
    },
  ];

  return (
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 animate-pulse">
            {'>'} SKILLS.ANALYZE()
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ARSENAL</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI, robotics, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 rounded-xl blur-xl group-hover:opacity-40 transition-opacity"
                   style={{
                     backgroundImage: `linear-gradient(to bottom right, ${group.color.split(' ')[1]}, ${group.color.split(' ')[3]})`
                   }}
              ></div>

              <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:scale-105 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${group.color}`}>
                    <group.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{group.level}%</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{group.title}</h3>

                <div className="space-y-2 mb-4">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${group.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: `${group.level}%`,
                      animationDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Projects Completed', value: '15+', icon: '🚀' },
            { label: 'Awards Won', value: '8', icon: '🏆' },
            { label: 'Lines of Code', value: '50K+', icon: '💻' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
