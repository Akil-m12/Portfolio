import React from 'react';
import { Cloud, Boxes, ShieldCheck, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const iconMap = {
  Cloud,
  Boxes,
  ShieldCheck,
  Cpu
};

export default function SkillsMatrix() {
  return (
    <section id="skills" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#182320] bg-[#070a09]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
            // 04 TECHNICAL INVENTORY
          </span>
          <div className="h-[1px] flex-1 bg-[#182622]"></div>
          <span className="font-mono text-xs sm:text-sm text-[#6e857f]">UNIFORM OPERATIONAL MATRIX</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-tactical-parchment uppercase leading-none mb-4">
            VERIFIED <br />
            <span className="text-emerald-400">ENGINEERING CAPABILITIES.</span>
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-tactical-parchment/90 max-w-2xl leading-snug">
            "Uniform tactical proficiencies honed through continuous production ownership, incident recovery, and automated delivery."
          </p>
        </div>

        {/* 4 Official Resume Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cloud;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-lg bg-[#0a100e] border border-[#1a2925] hover:border-emerald-500/50 transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded bg-[#0f1715] border border-[#20332e] text-emerald-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-tactical-parchment group-hover:text-emerald-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded bg-[#0e1614] border border-[#1a2825] font-mono text-xs sm:text-sm text-[#a2b3ae] hover:text-tactical-parchment hover:border-emerald-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-[#15201d] flex items-center justify-between text-xs font-mono text-[#6e857f]">
                  <span className="font-semibold">RESUME DOMAIN 0{idx + 1}</span>
                  <span className="text-emerald-400 font-bold">100% PROD_READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
