import React, { useState, useEffect } from 'react';
import ChassisHeader from './components/ChassisHeader';
import LiveTelemetryTicker from './components/LiveTelemetryTicker';
import Hero from './components/Hero';
import AboutEditorial from './components/AboutEditorial';
import ExperienceDossier from './components/ExperienceDossier';
import ProjectsShowcase from './components/ProjectsShowcase';
import SkillsMatrix from './components/SkillsMatrix';
import ContactFooter from './components/ContactFooter';
import TerminalDrawer from './components/TerminalDrawer';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Keyboard shortcut `~` or `Escape` to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
      if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="min-h-screen bg-[#070a09] text-[#e8e4dc] font-sans relative selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Top Telemetry & Nav Header */}
      <ChassisHeader onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Hero Section with Embedded Telemetry */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        
        {/* Live Operational Marquee Ticker */}
        <LiveTelemetryTicker />

        {/* Chapter 01: Philosophy & Runbook */}
        <AboutEditorial />

        {/* Chapter 02: Operational Experience & Incidents */}
        <ExperienceDossier />

        {/* Chapter 03: Architecture Blueprints */}
        <ProjectsShowcase />

        {/* Chapter 04: Uniform Capabilities Matrix */}
        <SkillsMatrix />
      </main>

      {/* Chapter 05: Transmission / Contact */}
      <ContactFooter onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Terminal Drawer */}
      <TerminalDrawer
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
