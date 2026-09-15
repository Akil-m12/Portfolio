import React from 'react';
import { OPERATING_TENETS, PERSONAL } from '../data/portfolioData';

export default function AboutEditorial() {
  return (
    <section id="about" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#182320] bg-[#070a09]">
      <div className="max-w-7xl mx-auto">
        {/* Section Chapter Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
            // 01 PHILOSOPHY & RUNBOOK
          </span>
          <div className="h-[1px] flex-1 bg-[#182622]"></div>
          <span className="font-mono text-xs sm:text-sm text-[#6e857f]">DISCIPLINE & PRINCIPLES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Metadata */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-tactical-parchment uppercase leading-none">
              HOW I <br />
              <span className="text-emerald-400">ENGINEER.</span>
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-tactical-parchment/90 leading-snug">
              "Most engineers monitor dashboards. I inspect kernel sockets, automate self-healing daemons, and eliminate manual toil."
            </p>

            {/* Tactical Stickers */}
            <div className="space-y-3 pt-2 font-mono text-xs sm:text-sm">
              <div className="p-4 rounded bg-[#0b1210] border border-[#1b2b27] -rotate-1 hover:rotate-0 transition-transform shadow-md">
                <span className="text-emerald-400 font-bold block mb-1">RULE #1:</span>
                <span className="text-[#a2b3ae]">Never SSH directly into production without a versioned runbook.</span>
              </div>

              <div className="p-4 rounded bg-[#0b1210] border border-[#1b2b27] rotate-1 hover:rotate-0 transition-transform shadow-md">
                <span className="text-amber-400 font-bold block mb-1">RULE #2:</span>
                <span className="text-[#a2b3ae]">If it is not defined in Terraform, it does not exist in our estate.</span>
              </div>

              <div className="p-4 rounded bg-[#0b1210] border border-[#1b2b27] -rotate-1 hover:rotate-0 transition-transform shadow-md">
                <span className="text-emerald-400 font-bold block mb-1">RULE #3:</span>
                <span className="text-[#a2b3ae]">Cold-start latencies are architectural bugs, not cloud facts of life.</span>
              </div>
            </div>

            {/* Education & Certification Card */}
            <div className="p-5 rounded bg-[#090f0e] border border-[#182622] font-mono text-xs sm:text-sm text-[#a2b3ae] space-y-3.5 shadow-lg">
              <div>
                <div className="text-[#6e857f] text-xs uppercase font-bold mb-1">EDUCATION</div>
                <div className="text-tactical-parchment font-bold text-sm sm:text-base mb-0.5">
                  {PERSONAL.education.institution}
                </div>
                <div className="text-emerald-400 font-semibold text-xs sm:text-sm">
                  {PERSONAL.education.degree} • {PERSONAL.education.graduation} • CGPA: {PERSONAL.education.cgpa}
                </div>
              </div>
              <div className="pt-3 border-t border-[#182622]">
                <div className="text-[#6e857f] text-xs uppercase font-bold mb-1">CERTIFICATION</div>
                <div className="text-tactical-parchment font-semibold text-xs sm:text-sm">
                  {PERSONAL.certification.name}
                </div>
                <div className="text-xs text-[#7e948e]">{PERSONAL.certification.institution}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Tenets */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-6 text-base sm:text-lg lg:text-xl text-[#a2b3ae] font-sans leading-relaxed">
              <p>
                Over the past 4+ years, I have supported production cloud and server infrastructure across <strong className="text-tactical-parchment font-semibold">AWS, Azure, and VPS environments</strong>. 
                From deploying and operating a <strong className="text-tactical-parchment font-semibold">multi-tenant Voice AI platform</strong> 
                handling real-time calls with pgvector and Redis to cutting <strong className="text-tactical-parchment font-semibold">80% latency on multiplayer Unity WebGL backends</strong>, 
                I treat infrastructure not as static servers, but as a living, resilient software system.
              </p>
              <p>
                My approach bridges traditional enterprise reliability (VPC network topologies, strict UFW CIDR whitelisting, automated snapshots) 
                with modern containerized GitOps (Docker, Kubernetes, GitHub Actions, GitLab CI/CD, Terraform). 
                I design architectures that make midnight fire drills obsolete.
              </p>
            </div>

            {/* The 3 Core Operating Tenets */}
            <div className="space-y-6">
              <div className="font-mono text-xs sm:text-sm text-emerald-400 uppercase tracking-wider font-bold">
                // CORE OPERATIONAL TENETS
              </div>

              <div className="grid grid-cols-1 gap-6">
                {OPERATING_TENETS.map((tenet) => (
                  <div
                    key={tenet.id}
                    className="p-6 sm:p-7 rounded-lg bg-[#0a100e] border border-[#1b2b27] hover:border-emerald-500/50 transition-all group relative corner-frame shadow-md"
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold tracking-widest">
                        [{tenet.id}]
                      </span>
                      <span className="font-mono text-xs text-[#6e857f] font-semibold">OPERATIONAL STANDARD</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide text-tactical-parchment mb-2.5 group-hover:text-emerald-300 transition-colors">
                      {tenet.title}
                    </h3>

                    <p className="font-serif italic text-base sm:text-lg text-tactical-parchment/95 mb-3 leading-snug">
                      "{tenet.summary}"
                    </p>

                    <p className="font-sans text-sm sm:text-base text-[#9fb0ab] leading-relaxed">
                      {tenet.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
