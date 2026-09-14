import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceDossier() {
  const [activeTab, setActiveTab] = useState(0);
  const activeExp = EXPERIENCES[activeTab];

  return (
    <section id="experience" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#182320] bg-[#070a09]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
            // 02 OPERATIONAL EXPERIENCE
          </span>
          <div className="h-[1px] flex-1 bg-[#182622]"></div>
          <span className="font-mono text-xs sm:text-sm text-[#6e857f]">BATTLE SCARS & PRODUCTION OWNERSHIP</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Role Selector Tabs */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-tactical-parchment uppercase leading-none mb-4">
              WHERE I'VE <br />
              <span className="text-emerald-400">OPERATED.</span>
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-tactical-parchment/90 mb-6 leading-snug">
              "Real production stakes. 15+ live client environments. Zero tolerance for unmonitored failures."
            </p>

            <div className="space-y-3">
              {EXPERIENCES.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-lg border font-mono transition-all flex items-center justify-between group min-h-[64px] ${
                    activeTab === idx
                      ? 'bg-[#0e1715] border-emerald-500/60 text-tactical-parchment shadow-md'
                      : 'bg-[#090f0e] border-[#182622] text-[#a2b3ae] hover:border-[#223832] hover:text-tactical-parchment'
                  }`}
                >
                  <div>
                    <div className="text-xs sm:text-sm text-emerald-400 font-bold mb-1">
                      {exp.period}
                    </div>
                    <div className="text-base sm:text-lg font-bold tracking-wide text-tactical-parchment">
                      {exp.company}
                    </div>
                    <div className="text-xs sm:text-sm text-[#7e948e] font-medium">
                      {exp.role}
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      activeTab === idx ? 'text-emerald-400 translate-x-1' : 'text-[#384c46]'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Quick Summary Box */}
            <div className="mt-6 p-5 rounded-lg bg-[#0a100e] border border-[#1b2b27] font-mono text-xs sm:text-sm text-[#a2b3ae] shadow-md">
              <span className="text-emerald-400 font-bold block mb-2">⚡ TRACK RECORD SUMMARY</span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#8ca09a] leading-relaxed">
                <li>• 15+ live crypto exchanges & gaming platforms owned</li>
                <li>• 80% latency reduction in WebSocket migrations</li>
                <li>• 60% faster CI/CD build-to-deploy cycles</li>
                <li>• Operated Bitcoin & Dogecoin full nodes</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Detailed Experience Panel */}
          <div className="lg:col-span-8 bg-[#0a100e] border border-[#1b2b27] rounded-lg p-6 sm:p-8 lg:p-10 corner-frame shadow-xl">
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#182622] pb-5 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wide text-tactical-parchment mb-1">
                  {activeExp.role}
                </h3>
                <div className="text-base sm:text-lg font-mono text-emerald-400 font-bold">
                  @{activeExp.company}
                </div>
              </div>
              <div className="font-mono text-xs sm:text-sm text-[#7e948e] flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  {activeExp.period}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  {activeExp.location}
                </span>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-tactical-parchment/95 leading-relaxed mb-8 font-medium">
              {activeExp.summary}
            </p>

            {/* Verified Achievements List */}
            <div className="space-y-4 mb-8">
              <div className="font-mono text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider">
                // VERIFIED DELIVERABLES & INCIDENTS RESOLVED
              </div>

              <div className="space-y-3.5">
                {activeExp.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#9fb0ab] leading-relaxed">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applied Tech Stack */}
            <div className="pt-6 border-t border-[#182622]">
              <div className="font-mono text-xs sm:text-sm text-[#6e857f] font-bold uppercase tracking-wider mb-3">
                DEPLOYED TECHNOLOGIES & CLOUD SERVICES
              </div>
              <div className="flex flex-wrap gap-2">
                {activeExp.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded bg-[#0f1715] border border-[#20332e] font-mono text-xs sm:text-sm text-[#a2b3ae] hover:text-tactical-parchment hover:border-emerald-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
