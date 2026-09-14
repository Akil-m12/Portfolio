import React, { useState } from 'react';
import { Mail, FileText, Copy, Check, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL } from '../data/portfolioData';

export default function ContactFooter({ onOpenTerminal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="w-full pt-20 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-[#050807] text-[#e8e4dc]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase">
            // 05 INITIATE TRANSMISSION
          </span>
          <div className="h-[1px] flex-1 bg-[#182622]"></div>
          <span className="font-mono text-xs sm:text-sm text-[#6e857f]">OPEN FOR DEVOPS & INFRASTRUCTURE ROLES</span>
        </div>

        {/* Main Editorial CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight text-tactical-parchment leading-none mb-6">
              LET'S BUILD <br />
              <span className="text-emerald-400">INFRASTRUCTURE</span> <br />
              THAT SURVIVES AT SCALE.
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-tactical-parchment/90 max-w-2xl mb-8 leading-snug">
              "Whether you're scaling a Web3 node cluster, slashing real-time socket latency, or hardening multi-cloud IaC — let's connect."
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="min-h-[48px] px-6 py-3.5 rounded bg-emerald-500 hover:bg-emerald-400 text-[#070a09] font-mono text-xs sm:text-sm font-bold tracking-wider transition-all shadow-lg shadow-emerald-500/10 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>INITIATE EMAIL</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="min-h-[48px] px-5 py-3.5 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#20332e] text-[#a2b3ae] hover:text-tactical-parchment font-mono text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY: {PERSONAL.email}</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenTerminal}
                className="min-h-[48px] px-5 py-3.5 rounded bg-[#0f1715] hover:bg-[#172522] border border-[#20332e] text-emerald-400 font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4" />
                <span>CLI CONSOLE</span>
              </button>
            </div>
          </div>

          {/* Right Direct Coordinates Card */}
          <div className="lg:col-span-4 bg-[#090f0e] border border-[#192723] rounded-lg p-6 sm:p-7 space-y-4 font-mono text-xs sm:text-sm corner-frame shadow-xl">
            <div className="text-emerald-400 font-bold uppercase tracking-wider border-b border-[#182622] pb-3 text-xs sm:text-sm">
              // DIRECT TRANSMISSION COORDINATES
            </div>

            <div>
              <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">EMAIL</span>
              <a href={`mailto:${PERSONAL.email}`} className="text-tactical-parchment hover:text-emerald-400 transition-colors text-sm sm:text-base font-medium">
                {PERSONAL.email}
              </a>
            </div>

            <div>
              <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">DIRECT PHONE</span>
              <a href={`tel:${PERSONAL.phone}`} className="text-tactical-parchment hover:text-emerald-400 transition-colors text-sm sm:text-base font-medium">
                {PERSONAL.phone}
              </a>
            </div>

            <div>
              <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">LINKEDIN PROFILE</span>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tactical-parchment hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-sm sm:text-base font-medium"
              >
                <span>linkedin.com/in/{PERSONAL.linkedinHandle}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>
            </div>

            <div>
              <span className="text-[#6e857f] block text-xs uppercase font-semibold mb-0.5">GITHUB REPOSITORY</span>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tactical-parchment hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-sm sm:text-base font-medium"
              >
                <span>github.com/{PERSONAL.githubHandle}</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
              </a>
            </div>

            <div className="pt-3 border-t border-[#182622]">
              <a
                href={PERSONAL.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2 transition-colors font-bold text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW OFFICIAL RESUME</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry & Copyright Bar */}
        <div className="pt-8 border-t border-[#14201c] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#6e857f]">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-[#8ca09a]">ALL PRODUCTION SYSTEMS NOMINAL</span>
            <span className="text-[#364742]">|</span>
            <span>REGION: AP-SOUTH-1</span>
          </div>

          <div className="text-[#8ca09a]">
            © {new Date().getFullYear()} AKIL THANVEER M • CRAFTED WITH REACT & TAILWIND
          </div>
        </div>
      </div>
    </footer>
  );
}
