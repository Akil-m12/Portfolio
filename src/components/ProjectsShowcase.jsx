import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState(0);
  const activeProj = PROJECTS[selectedProject];

  return (
    <section id="projects" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#182320] bg-[#070a09]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
            // 03 ARCHITECTURE BLUEPRINTS
          </span>
          <div className="h-[1px] flex-1 bg-[#182622]"></div>
          <span className="font-mono text-xs sm:text-sm text-[#6e857f]">CASE STUDIES & RUNBOOKS</span>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-tactical-parchment uppercase leading-none mb-4">
            WHAT I'VE <br />
            <span className="text-emerald-400">ARCHITECTED & SHIPPED.</span>
          </h2>
          <p className="font-serif italic text-xl sm:text-2xl text-tactical-parchment/90 max-w-2xl leading-snug">
            "Detailed production dossiers: the problem, the topology, the automation, and the verified business impact."
          </p>
        </div>

        {/* Project Selector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setSelectedProject(idx)}
              className={`p-5 sm:p-6 rounded-lg border text-left font-mono transition-all flex flex-col justify-between group min-h-[140px] ${
                selectedProject === idx
                  ? 'bg-[#0e1715] border-emerald-500/60 shadow-lg'
                  : 'bg-[#090f0e] border-[#182622] hover:border-[#223832]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                  <span className="text-emerald-400 font-bold">DOSSIER 0{idx + 1}</span>
                  <span className="text-[#6e857f] font-medium">{proj.category}</span>
                </div>
                <h3 className="text-sm sm:text-base font-sans font-bold text-tactical-parchment group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                  {proj.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-[#182622] flex items-center justify-between text-xs sm:text-sm text-[#a2b3ae]">
                <span className="text-emerald-400 font-bold">{proj.impact}</span>
                <span className="text-[#41534e]">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Blueprint Dossier Card */}
        <div className="bg-[#0a100e] border border-[#1b2b27] rounded-lg p-6 sm:p-8 lg:p-10 corner-frame shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#182622] pb-6 mb-6">
            <div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider mb-1.5">
                // CASE STUDY: {activeProj.category}
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-tactical-parchment mb-1">
                {activeProj.title}
              </h3>
              <div className="font-serif italic text-lg sm:text-xl text-tactical-parchment/90">
                {activeProj.subtitle}
              </div>
            </div>

            <div className="px-4 py-2.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-mono text-xs sm:text-sm font-bold">
              VERIFIED IMPACT: {activeProj.impact}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Left: Problem & Solution */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="font-mono text-xs sm:text-sm text-amber-400 font-bold uppercase tracking-wider mb-2">
                  [ THE PRODUCTION CHALLENGE ]
                </div>
                <p className="font-sans text-sm sm:text-base text-[#9fb0ab] leading-relaxed">
                  {activeProj.problem}
                </p>
              </div>

              <div>
                <div className="font-mono text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider mb-2">
                  [ THE ARCHITECTURAL SOLUTION ]
                </div>
                <p className="font-sans text-sm sm:text-base text-[#9fb0ab] leading-relaxed">
                  {activeProj.solution}
                </p>
              </div>
            </div>

            {/* Right: Architecture Flow */}
            <div className="lg:col-span-6 bg-[#070c0b] border border-[#172521] rounded p-5 sm:p-6 font-mono text-xs sm:text-sm shadow-inner">
              <div className="text-emerald-400 font-bold mb-3.5 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>TOPOLOGY PIPELINE ARCHITECTURE</span>
              </div>

              <div className="space-y-3">
                {activeProj.architecture.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[#a2b3ae]">
                    <span className="text-emerald-400 font-bold">0{idx + 1}.</span>
                    <span className="text-tactical-parchment/95 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-3 border-t border-[#172521] text-xs text-[#6e857f] font-semibold">
                CONFIDENTIAL ARCHITECTURE RUNBOOK // TESTED IN HIGH-VOLUME PROD
              </div>
            </div>
          </div>

          {/* Applied Technologies */}
          <div className="pt-5 border-t border-[#182622] flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-[#6e857f] uppercase font-bold mr-2">TECH ARTIFACTS:</span>
            {activeProj.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded bg-[#0f1715] border border-[#20332e] font-mono text-xs sm:text-sm text-[#a2b3ae]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
