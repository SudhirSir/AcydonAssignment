'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, AlertTriangle, Zap, Server, Database, CheckCircle2, Cpu, RefreshCw, BarChart3, Radio } from 'lucide-react';
import { runSimulatedExtraction, ExecutionResult } from '@/lib/sandbox-simulation';

export function ProductShowcase() {
  const [chaosState, setChaosState] = useState<'none' | 'rate-limit-429' | 'cloudflare-challenge' | 'markup-drift'>('none');
  const [simulationResult, setSimulationResult] = useState<ExecutionResult>(() =>
    runSimulatedExtraction('indeed-public', 'tls-camouflage', 'none')
  );
  const [isSimulating, setIsSimulating] = useState(false);

  const triggerChaos = (type: 'none' | 'rate-limit-429' | 'cloudflare-challenge' | 'markup-drift') => {
    setChaosState(type);
    setIsSimulating(true);
    setTimeout(() => {
      const res = runSimulatedExtraction('indeed-public', 'tls-camouflage', type);
      setSimulationResult(res);
      setIsSimulating(false);
    }, 500);
  };

  return (
    <section id="dashboard" className="py-20 md:py-28 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Product Telemetry</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Watch the Resilience Pipeline Under Attack
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Don't take our word for it. Test PulseEngine&apos;s real-time evasion engine against simulated rate limits, anti-bot challenges, and markup shifts right now.
          </p>
        </div>

        {/* Live Dashboard Card (Interactive Product Showcase) */}
        <div className="mt-12 rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
          {/* Top Control Bar */}
          <div className="bg-muted/40 border-b border-border p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span>PulseEngine Live Telemetry & Chaos Lab</span>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    Live Simulator
                  </span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Simulating ingestion against high-anti-bot targets
                </p>
              </div>
            </div>

            {/* Chaos Trigger Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground hidden sm:inline mr-1">
                Inject Failure Event:
              </span>
              <button
                onClick={() => triggerChaos('none')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  chaosState === 'none'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-background border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                Normal Traffic
              </button>
              <button
                onClick={() => triggerChaos('rate-limit-429')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-1 ${
                  chaosState === 'rate-limit-429'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-background border border-border text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'
                }`}
              >
                <AlertTriangle className="w-3 h-3" />
                <span>Simulate 429 Rate-Limit</span>
              </button>
              <button
                onClick={() => triggerChaos('cloudflare-challenge')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-1 ${
                  chaosState === 'cloudflare-challenge'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-background border border-border text-blue-600 dark:text-blue-400 hover:bg-blue-500/10'
                }`}
              >
                <ShieldCheck className="w-3 h-3" />
                <span>Simulate Anti-Bot Challenge</span>
              </button>
              <button
                onClick={() => triggerChaos('markup-drift')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center space-x-1 ${
                  chaosState === 'markup-drift'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-background border border-border text-purple-600 dark:text-purple-400 hover:bg-purple-500/10'
                }`}
              >
                <Cpu className="w-3 h-3" />
                <span>Simulate DOM Class Drift</span>
              </button>
            </div>
          </div>

          {/* Visual Pipeline Flow Nodes */}
          <div className="p-6 bg-card border-b border-border">
            <div className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-wider">
              Real-Time End-to-End Pipeline Routing:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
              {/* Node 1 */}
              <div className="p-4 rounded-xl border border-border bg-background flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">01. INGESTION</span>
                  <Server className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Client Request</div>
                  <div className="text-[11px] text-muted-foreground">HTTP/2 TLS Initiated</div>
                </div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✓ Active (0ms)
                </div>
              </div>

              {/* Node 2 */}
              <div className={`p-4 rounded-xl border transition-all ${
                chaosState === 'cloudflare-challenge'
                  ? 'border-blue-500/50 bg-blue-500/5 ring-1 ring-blue-500/30'
                  : 'border-border bg-background'
              } flex flex-col justify-between space-y-2`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">02. CAMOUFLAGE</span>
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">TLS Evasion</div>
                  <div className="text-[11px] text-muted-foreground">JA4 Fingerprint Spoof</div>
                </div>
                <div className="text-[10px] font-mono text-blue-500 font-semibold">
                  {chaosState === 'cloudflare-challenge' ? '⚡ Challenge Solved' : '✓ Verified 99.8%'}
                </div>
              </div>

              {/* Node 3 */}
              <div className={`p-4 rounded-xl border transition-all ${
                chaosState === 'rate-limit-429'
                  ? 'border-amber-500/50 bg-amber-500/5 ring-1 ring-amber-500/30'
                  : 'border-border bg-background'
              } flex flex-col justify-between space-y-2`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">03. PROXY MESH</span>
                  <RefreshCw className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Session Pacing</div>
                  <div className="text-[11px] text-muted-foreground">Residential IP Swapper</div>
                </div>
                <div className="text-[10px] font-mono text-amber-500 font-semibold">
                  {chaosState === 'rate-limit-429' ? '🔄 IP Swapped (250ms)' : '✓ Rotated'}
                </div>
              </div>

              {/* Node 4 */}
              <div className={`p-4 rounded-xl border transition-all ${
                chaosState === 'markup-drift'
                  ? 'border-purple-500/50 bg-purple-500/5 ring-1 ring-purple-500/30'
                  : 'border-border bg-background'
              } flex flex-col justify-between space-y-2`}>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">04. PARSER</span>
                  <Cpu className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Self-Healing AST</div>
                  <div className="text-[11px] text-muted-foreground">Semantic JSON-LD Tag</div>
                </div>
                <div className="text-[10px] font-mono text-purple-500 font-semibold">
                  {chaosState === 'markup-drift' ? '🧩 Heuristic Active' : '✓ Standard Match'}
                </div>
              </div>

              {/* Node 5 */}
              <div className="p-4 rounded-xl border border-border bg-background flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-muted-foreground">05. OUTPUT</span>
                  <Database className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">Clean JSON</div>
                  <div className="text-[11px] text-muted-foreground">Zero Schema Loss</div>
                </div>
                <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>200 OK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Telemetry Output Log Stream */}
          <div className="p-5 bg-card grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Live Logs Stream */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-500" />
                  RESILIENCE RECOVERY LOG STREAM:
                </span>
                {isSimulating && (
                  <span className="text-emerald-500 animate-spin">
                    <RefreshCw className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs space-y-2 min-h-[160px]">
                {simulationResult.resilienceLogs.map((log, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      log.includes('⚠️')
                        ? 'text-amber-400 font-bold'
                        : log.includes('✅')
                        ? 'text-emerald-400 font-semibold'
                        : log.includes('🔄')
                        ? 'text-purple-300'
                        : 'text-slate-300'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Stats Cards */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono text-muted-foreground font-semibold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                SYSTEM LATENCY METRICS:
              </div>

              <div className="p-4 rounded-xl border border-border bg-background space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-muted-foreground">p50 Latency</span>
                    <span className="font-bold text-foreground">95 ms</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[28%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-muted-foreground">p95 Latency</span>
                    <span className="font-bold text-foreground">180 ms</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-[52%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-muted-foreground">Evasion Success Rate</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">99.4%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[99.4%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-muted-foreground">Worker Node Memory</span>
                    <span className="font-bold text-foreground">&lt; 42 MB / node</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full w-[35%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
