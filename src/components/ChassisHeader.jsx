import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export default function ChassisHeader({ onOpenTerminal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1c2925] bg-[#070a09]/95 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Telemetry & Identity */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-mono text-base sm:text-lg font-bold tracking-widest text-emerald-400 group-hover:text-emerald-300">
              AT//<span className="text-tactical-parchment">INFRA</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#0e1614] border border-[#1e2e2a] text-xs font-mono">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-bold">PROD_OK</span>
            <span className="text-[#4b6059]">|</span>
            <span className="text-[#a2b3ae]">99.98% SLA</span>
          </div>

          
        </div>

        {/* Center Nav Anchors (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs xl:text-sm tracking-wider text-[#a2b3ae]">
          <a href="#about" className="hover:text-emerald-400 transition-colors">
            <span className="text-emerald-500/80">//01</span> PHILOSOPHY
          </a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">
            <span className="text-emerald-500/80">//02</span> EXPERIENCE
          </a>
          <a href="#projects" className="hover:text-emerald-400 transition-colors">
            <span className="text-emerald-500/80">//03</span> BLUEPRINTS
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">
            <span className="text-emerald-500/80">//04</span> SKILLS
          </a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">
            <span className="text-emerald-500/80">//05</span> CONTACT
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded bg-[#0f1715] hover:bg-[#152320] border border-[#20332e] hover:border-emerald-500/50 text-xs sm:text-sm font-mono text-tactical-parchment transition-all group shadow-sm"
            title="Open Interactive DevOps CLI"
          >
            <Terminal className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">CLI</span>
            <span className="hidden md:inline-block px-1 py-0.5 text-[11px] bg-[#1a2825] text-emerald-400 rounded">~</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded bg-[#0f1715] border border-[#20332e] text-[#a2b3ae] hover:text-tactical-parchment transition-colors"
            title="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden pt-4 pb-3 border-t border-[#1c2925] mt-3 space-y-3 font-mono text-sm animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2 text-xs text-[#a2b3ae]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded bg-[#0d1513] border border-[#1b2b27] hover:border-emerald-500/40 hover:text-emerald-400"
            >
              //01 PHILOSOPHY
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded bg-[#0d1513] border border-[#1b2b27] hover:border-emerald-500/40 hover:text-emerald-400"
            >
              //02 EXPERIENCE
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded bg-[#0d1513] border border-[#1b2b27] hover:border-emerald-500/40 hover:text-emerald-400"
            >
              //03 BLUEPRINTS
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded bg-[#0d1513] border border-[#1b2b27] hover:border-emerald-500/40 hover:text-emerald-400"
            >
              //04 SKILLS
            </a>
          </div>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-2.5 rounded bg-emerald-500 text-[#070a09] font-bold text-xs"
          >
            //05 INITIATE CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
