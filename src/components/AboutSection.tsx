import { Brain, Cpu, Eye, Zap, Network, Code, Cloud, Cog } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { icon: Brain, label: 'AI', x: 50, y: 20, color: 'text-cyan-400' },
    { icon: Cpu, label: 'ML', x: 20, y: 40, color: 'text-blue-400' },
    { icon: Eye, label: 'Computer Vision', x: 80, y: 40, color: 'text-purple-400' },
    { icon: Zap, label: 'Robotics', x: 10, y: 70, color: 'text-green-400' },
    { icon: Network, label: 'Networking', x: 45, y: 60, color: 'text-yellow-400' },
    { icon: Code, label: 'Python', x: 75, y: 65, color: 'text-cyan-400' },
    { icon: Code, label: 'FastAPI', x: 30, y: 85, color: 'text-green-400' },
    { icon: Code, label: 'React', x: 65, y: 85, color: 'text-blue-400' },
    { icon: Cog, label: 'Hardware Sensors', x: 85, y: 75, color: 'text-purple-400' },
    { icon: Cloud, label: 'Cloud', x: 50, y: 45, color: 'text-cyan-400' },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 9], [1, 4], [1, 5], [2, 8], [3, 4], [4, 9], [5, 6], [5, 7], [6, 9], [7, 9], [8, 9]
  ];

  return (
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-mono text-sm tracking-wider mb-4 animate-pulse">
            {'>'} ABOUT.LOAD()
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            WHO IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ABDUL KAIF</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Abdul Kaif is an <span className="text-cyan-400 font-semibold">AI Engineer in the making</span> with strong hands-on experience in Machine Learning, Computer Vision, Python engineering, and robotics systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                He specializes in turning complex problems into real, deployable prototypes using rapid ideation, hardware integration, and startup-style product execution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'AI + Robotics Engineering Student',
                'Multi-Award-Winning Innovator',
                'Builder of Sustainable Tech',
                'Full-Stack Developer',
                'Hardware Integration Specialist',
                'Real-World Problem Solver'
              ].map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <defs>
      {/* Neon Glow */}
      <filter id="nodeGlow">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Animated gradient for lines */}
      <linearGradient id="flowGradient">
        <stop offset="0%" stopColor="#00eaff">
          <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stopColor="#7b2ff7">
          <animate attributeName="offset" values="1;0;1" dur="3s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>
    </defs>

    {/* CONNECTION LINES WITH FLOW ANIMATION */}
    {connections.map((conn, i) => (
      <line
        key={i}
        x1={skills[conn[0]].x}
        y1={skills[conn[0]].y}
        x2={skills[conn[1]].x}
        y2={skills[conn[1]].y}
        stroke="url(#flowGradient)"
        strokeWidth="0.35"
        strokeLinecap="round"
        opacity="0.55"
        className="transition-all"
        style={{
          animation: `flowAnim 3s ease-in-out ${i * 140}ms infinite`,
        }}
      />
    ))}

    {/* NODE RINGS + FLOATING EFFECT */}
    {skills.map((skill, index) => (
      <g key={index} className="pointer-events-none">
        {/* Glowing ring */}
        <circle
          cx={skill.x}
          cy={skill.y}
          r="5.5"
          stroke={skill.color.replace("text-", "")}
          strokeWidth="0.6"
          opacity="0.4"
          filter="url(#nodeGlow)"
          className="animate-pulse"
        />

        {/* Core dot */}
        <circle
          cx={skill.x}
          cy={skill.y}
          r="2.2"
          fill={skill.color.replace("text-", "")}
          filter="url(#nodeGlow)"
        />
      </g>
    ))}
  </svg>

  {/* INTERACTIVE ICONS */}
  <div className="absolute inset-0">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 group
        transition-all duration-500 hover:scale-125"
        style={{
          left: `${skill.x}%`,
          top: `${skill.y}%`,
          animation: `floatAnim ${3 + (index % 3)}s ease-in-out infinite`,
        }}
      >
        <div
          className="relative bg-black/70 backdrop-blur-xl border border-cyan-500/20 
          rounded-full p-3 shadow-[0_0_20px_rgba(0,200,255,0.4)]
          group-hover:shadow-[0_0_40px_rgba(0,200,255,0.8)]
          transition-all duration-500"
        >
          <skill.icon className={`w-5 h-5 ${skill.color}`} />
        </div>

        {/* Tooltip */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 
          group-hover:opacity-100 transition-all duration-500 
          translate-y-2 group-hover:translate-y-0
          bg-black/90 backdrop-blur-sm border border-cyan-500/30 px-2 py-1 rounded"
        >
          <span className="text-xs text-gray-300">{skill.label}</span>
        </div>
      </div>
    ))}
  </div>

  {/* Animations */}
  <style>{`
    @keyframes floatAnim {
      0% { transform: translate(-50%, -50%) translateY(0px); }
      50% { transform: translate(-50%, -50%) translateY(-4px); }
      100% { transform: translate(-50%, -50%) translateY(0px); }
    }

    @keyframes flowAnim {
      0% { opacity: 0.3; }
      50% { opacity: 1; }
      100% { opacity: 0.3; }
    }
  `}</style>
</div>

        </div>
      </div>
    </section>
  );
}
