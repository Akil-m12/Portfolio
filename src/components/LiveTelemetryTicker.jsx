import React from 'react';
import { Activity, Shield, Cpu, Zap, Server, Database } from 'lucide-react';

export default function LiveTelemetryTicker() {
  const telemetryItems = [
    { icon: Activity, text: "PROD HOST: 113+ DAYS ZERO-DOWNTIME UPTIME" },
    { icon: Cpu, text: "PM2 SUPERVISOR: 24 CONCURRENT MICROSERVICES ONLINE" },
    { icon: Zap, text: "WEBSOCKET LATENCY: 80% DROP VIA EC2 MIGRATION" },
    { icon: Server, text: "VOICE AI CLUSTER: DOCKER, REDIS & PGVECTOR HEALTHY" },
    { icon: Shield, text: "TERRAFORM STATE: LOCKED & ZERO-TRUST NSGs ENFORCED" },
    { icon: Database, text: "BITCOIN & DOGECOIN NODES: LOCALHOST RPC BOUND" },
    { icon: Activity, text: "OVERALL PLATFORM SLA: 99.98% HIGH AVAILABILITY" }
  ];

  return (
    <div className="w-full bg-[#0a0f0e] border-y border-[#182320] py-3 overflow-hidden select-none relative">
      {/* Subtle fade edges for smooth entrance/exit */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#070a09] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#070a09] to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {/* Render twice for seamless continuous infinite looping */}
        {[...telemetryItems, ...telemetryItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm text-[#a2b3ae]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
              <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold">{item.text}</span>
              <span className="text-[#324943] ml-4 select-none">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
