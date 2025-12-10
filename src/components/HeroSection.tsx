import { Trophy, Award, Briefcase, GraduationCap, Network } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [currentHolo, setCurrentHolo] = useState(0);
  const holos = ['BioLoop', 'Neural Network', 'BSF Cycle', 'Emotion AI'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHolo((prev) => (prev + 1) % holos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const achievements = [
    { icon: Trophy, text: 'National Hackathon Winner', color: 'text-cyan-400' },
    { icon: Award, text: 'IEEE MakerFair Finalist', color: 'text-blue-400' },
    { icon: Trophy, text: 'Smart India Hackathon Top 5', color: 'text-cyan-400' },
    { icon: Briefcase, text: 'Software Engineer Intern @ Tecknots', color: 'text-green-400' },
    { icon: GraduationCap, text: 'Sathyabama University (AI & Robotics, 2027)', color: 'text-purple-400' },
    { icon: Network, text: 'CCNA Certified', color: 'text-blue-400' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-cyan-400 font-mono text-sm tracking-wider animate-pulse">
                {'>'} SYSTEM.INITIALIZE()
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient">
                  ABDUL KAIF J
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-light text-gray-300 border-l-4 border-cyan-400 pl-4">
                BRIDGING AI WITH REAL-WORLD IMPACT
              </div>
              <p className="text-lg text-gray-400 max-w-2xl">
                AI Engineer | Machine Learning & Computer Vision | Robotics Innovator | Startup Builder
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-start space-x-3">
                    <achievement.icon className={`w-5 h-5 ${achievement.color} flex-shrink-0 mt-1`} />
                    <span className="text-sm text-gray-300 leading-tight">{achievement.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative w-80 h-80 perspective-1000">
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"></div>
                  <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full"></div>
                  <div className="absolute inset-8 border-2 border-purple-400/30 rounded-full"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 animate-float">
                    <div className="text-6xl">🧬</div>
                    <div className="text-cyan-400 font-mono text-lg tracking-wider">
                      {holos[currentHolo]}
                    </div>
                    <div className="flex justify-center space-x-2">
                      {holos.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentHolo ? 'bg-cyan-400 w-8' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 animate-slide-in-right">
                <div className="text-xs text-cyan-400 font-mono mb-2">LIVE DATA</div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">AI Models:</span>
                    <span className="text-green-400">12 Active</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Projects:</span>
                    <span className="text-blue-400">8 Deployed</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 bg-black/60 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 animate-slide-in-left">
                <div className="text-xs text-blue-400 font-mono mb-2">STATUS</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300">Building the Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
