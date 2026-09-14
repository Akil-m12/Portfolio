import React, { useState } from 'react';
import { ArrowDown, Copy, Check, Terminal } from 'lucide-react';
import { PERSONAL, TELEMETRY_METRICS } from '../data/portfolioData';

export default function Hero({ onOpenTerminal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full pt-8 sm:pt-12 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#182320] overflow-hidden bg-tactical-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/[0.05] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Top Screen Chassis Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-[#182320] font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm font-bold">
              // PRODUCTION DEVOPS ENGINEER
            </span>
            <span className="hidden sm:inline text-[#556963]">•</span>
            <span className="hidden sm:inline text-[#a2b3ae] font-medium">4+ YEARS PRODUCTION CLOUD & SERVER INFRASTRUCTURE</span>
          </div>
          <div className="flex items-center gap-2 text-[#a2b3ae] font-medium">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{PERSONAL.availability}</span>
          </div>
        </div>

        {/* Main Editorial Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-8">
            <div className="mb-3">
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-emerald-400/90">
                [ PRODUCTION SRE & CLOUD DOSSIER: 001 ]
              </span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tight text-tactical-parchment leading-[0.88] mb-6">
              AKIL <br />
              <span className="text-tactical-parchment">THANVEER</span> <br />
              <span className="text-emerald-400">M.</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-tactical-parchment/95 mb-6 max-w-2xl font-normal leading-snug">
              "Building resilient cloud infrastructure that survives 3 AM production fires and zero-day traffic storms."
            </p>

            <p className="text-base sm:text-lg text-[#a2b3ae] font-sans leading-relaxed max-w-2xl mb-8">
              DevOps Engineer with 4+ years supporting production cloud and server infrastructure across <strong className="text-tactical-parchment font-semibold">AWS, Azure, and VPS environments</strong>. 
              Hands-on ownership for 15+ production platforms spanning <strong className="text-tactical-parchment font-semibold">blockchain exchanges, Unity WebGL gaming backends, RWA/IDO, and backend services</strong>.
            </p>

            {/* Action Buttons (Touch friendly min 44px) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="min-h-[44px] px-6 py-3 rounded bg-emerald-500 hover:bg-emerald-400 text-[#070a09] font-mono text-xs sm:text-sm font-bold tracking-wider transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#experience"
                className="min-h-[44px] px-5 py-3 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#20332e] hover:border-emerald-500/40 text-tactical-parchment font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all flex items-center"
              >
                INCIDENT ARCHIVE
              </a>

              <button
                onClick={handleCopyEmail}
                className="min-h-[44px] px-4 py-3 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#20332e] text-[#a2b3ae] hover:text-tactical-parchment font-mono text-xs sm:text-sm font-medium transition-all flex items-center gap-2"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenTerminal}
                className="min-h-[44px] px-4 py-3 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#20332e] text-emerald-400 font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
                title="Launch Terminal"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI CONSOLE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Tactical Snapshot Box */}
          <div className="lg:col-span-4 bg-[#0a100e] border border-[#1b2a26] rounded-lg p-6 sm:p-7 relative corner-frame shadow-xl">
            <div className="flex items-center justify-between border-b border-[#182622] pb-3.5 mb-5">
              <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold uppercase tracking-wider">
                // SYSTEM_OVERVIEW.CONF
              </span>
              <span className="font-mono text-xs text-[#6e857f] font-semibold">VERIFIED</span>
            </div>

            <div className="space-y-4 font-mono text-xs sm:text-sm">
              <div>
                <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">PRIMARY ROLE</span>
                <span className="text-tactical-parchment font-bold text-sm sm:text-base">
                  DevOps Engineer
                </span>
              </div>

              <div>
                <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">CLOUD & SERVER ENVIRONMENTS</span>
                <span className="text-tactical-parchment font-medium leading-relaxed">
                  AWS (EC2, VPC, S3, RDS), Azure, VPS / Contabo
                </span>
              </div>

              <div>
                <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">IAC & CONTAINERS</span>
                <span className="text-tactical-parchment font-medium leading-relaxed">
                  Terraform • Docker • Kubernetes • GitHub Actions
                </span>
              </div>

              <div>
                <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">PRODUCTION HIGHLIGHT</span>
                <span className="text-emerald-400 font-medium leading-relaxed block">
                  Operated Bitcoin & Dogecoin full nodes with localhost-only RPC and zero unplanned desyncs.
                </span>
              </div>

              <div className="pt-3.5 border-t border-[#182622]">
                <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">LOCATION</span>
                <span className="text-tactical-parchment font-medium text-xs sm:text-sm block">
                  Coimbatore, India • <span className="text-emerald-400 font-semibold">Open to Relocation</span>
                </span>
              </div>
            </div>

            {/* Quick Sticker */}
            <div className="mt-6 p-3.5 rounded bg-[#0d1614] border border-[#223832] font-mono text-xs text-[#a2b3ae] leading-relaxed">
              <span className="text-emerald-400 font-bold block mb-1">⚡ ON-CALL DISCIPLINE:</span>
              "Automate the fix before the alert sounds twice."
            </div>
          </div>
        </div>

        {/* Hero Telemetry Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded bg-[#0a100e] border border-[#1a2925] hover:border-emerald-500/50 transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-tactical-parchment group-hover:text-emerald-400 transition-colors mb-1">
                {metric.value}
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-tactical-parchment/95 mb-1 leading-tight">
                {metric.label}
              </div>
              <div className="font-mono text-xs text-[#7e948e] leading-snug">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
