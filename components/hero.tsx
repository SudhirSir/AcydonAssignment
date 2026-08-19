'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RefreshCw, CheckCircle2, ShieldAlert, Cpu, Terminal, Code2, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { SAMPLE_SOURCES, runSimulatedExtraction, ExecutionResult } from '@/lib/sandbox-simulation';

export function Hero() {
  const [selectedSource, setSelectedSource] = useState(SAMPLE_SOURCES[0].id);
  const [selectedEngine, setSelectedEngine] = useState<'stealth-headless' | 'tls-camouflage' | 'rss-fallback'>('tls-camouflage');
  const [activeTab, setActiveTab] = useState<'json' | 'headers' | 'logs'>('json');
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<ExecutionResult>(() =>
    runSimulatedExtraction(SAMPLE_SOURCES[0].id, 'tls-camouflage')
  );

  const handleRunExtraction = () => {
    setIsExecuting(true);
    setTimeout(() => {
      const res = runSimulatedExtraction(selectedSource, selectedEngine);
      setResult(res);
      setIsExecuting(false);
    }, 450);
  };

  return (
    <section id="sandbox" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground shadow-sm hover:border-emerald-500/40 transition-colors cursor-pointer"
            onClick={() => {
              const el = document.getElementById('honesty');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Acdyon Frontend Challenge</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Zero Fake Social Proof Guarantee</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.12]"
          >
            Extract Data from Any Platform.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
              Zero Blocked Requests.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal"
          >
            Enterprise TLS fingerprint camouflage, jittered session pacing, and self-healing AST parsers. Built for high-throughput AI data ingestion pipelines that survive source anti-bot updates.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                const el = document.getElementById('sandbox-widget');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-95"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Live Sandbox Below</span>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('architecture');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-card border border-border hover:bg-muted text-foreground font-semibold text-sm transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Read Architecture Deep-Dive</span>
            </button>
          </motion.div>
        </div>

        {/* Live Interactive Code Playground (The "Wow" Element) */}
        <motion.div
          id="sandbox-widget"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 max-w-5xl mx-auto rounded-2xl border border-border bg-card/90 shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Header Bar */}
          <div className="bg-muted/60 border-b border-border px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-muted-foreground ml-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                PulseEngine Sandbox Terminal v2.4
              </span>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="flex items-center text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5"></span>
                API Ready (200 OK)
              </span>
              <span className="text-muted-foreground hidden sm:inline">
                JA4+ Fingerprint: <code className="text-foreground">CHROME_128</code>
              </span>
            </div>
          </div>

          {/* Configuration Controls Bar */}
          <div className="p-4 sm:p-5 bg-card border-b border-border grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Target Source Dropdown */}
            <div className="md:col-span-5 flex flex-col space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground flex items-center justify-between">
                <span>Target Data Stream</span>
                <span className="text-[10px] text-emerald-500 font-mono">Low-Risk Sandbox</span>
              </label>
              <select
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full text-xs font-mono bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                {SAMPLE_SOURCES.map((src) => (
                  <option key={src.id} value={src.id}>
                    {src.name} ({src.type.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Engine Evasion Switcher */}
            <div className="md:col-span-4 flex flex-col space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Evasion Engine</label>
              <div className="flex rounded-lg border border-border bg-background p-1 text-xs">
                <button
                  onClick={() => setSelectedEngine('tls-camouflage')}
                  className={`flex-1 py-1 px-2 rounded-md font-mono transition-colors text-[11px] ${
                    selectedEngine === 'tls-camouflage'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  TLS Camouflage
                </button>
                <button
                  onClick={() => setSelectedEngine('stealth-headless')}
                  className={`flex-1 py-1 px-2 rounded-md font-mono transition-colors text-[11px] ${
                    selectedEngine === 'stealth-headless'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Headless
                </button>
                <button
                  onClick={() => setSelectedEngine('rss-fallback')}
                  className={`flex-1 py-1 px-2 rounded-md font-mono transition-colors text-[11px] ${
                    selectedEngine === 'rss-fallback'
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  RSS Stream
                </button>
              </div>
            </div>

            {/* Run Button */}
            <div className="md:col-span-3 flex items-end">
              <button
                onClick={handleRunExtraction}
                disabled={isExecuting}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold text-xs transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                {isExecuting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Extracting...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Extraction Pipeline</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="bg-muted/30 px-5 py-2.5 border-b border-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div>
              <span className="text-muted-foreground block text-[10px]">RESPONSE LATENCY</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">{result.latencyMs}ms</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[10px]">ROTATED PROXY IP</span>
              <span className="font-medium text-foreground">{result.proxyIp}</span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[10px]">TLS VERDICT</span>
              <span className="font-semibold text-blue-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                PASSED (99.8%)
              </span>
            </div>
            <div>
              <span className="text-muted-foreground block text-[10px]">PAYLOAD SIZE</span>
              <span className="font-medium text-foreground">{(result.bytesReceived / 1024).toFixed(1)} KB</span>
            </div>
          </div>

          {/* Tab Navigation for Results */}
          <div className="flex border-b border-border bg-card px-4 pt-2">
            <button
              onClick={() => setActiveTab('json')}
              className={`px-4 py-2 text-xs font-mono font-medium border-b-2 transition-colors flex items-center space-x-1.5 ${
                activeTab === 'json'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Extracted Payload ({result.data.length} items)</span>
            </button>
            <button
              onClick={() => setActiveTab('headers')}
              className={`px-4 py-2 text-xs font-mono font-medium border-b-2 transition-colors flex items-center space-x-1.5 ${
                activeTab === 'headers'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>HTTP Headers & TLS Spec</span>
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-2 text-xs font-mono font-medium border-b-2 transition-colors flex items-center space-x-1.5 ${
                activeTab === 'logs'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Resilience Evasion Logs ({result.resilienceLogs.length})</span>
            </button>
          </div>

          {/* Output Display Body */}
          <div className="p-4 sm:p-5 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto min-h-[220px] max-h-[340px]">
            {activeTab === 'json' && (
              <pre className="text-emerald-400/90 leading-relaxed">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            )}

            {activeTab === 'headers' && (
              <div className="space-y-2">
                <div className="text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  // Spoofed TLS 1.3 Handshake Verification Headers
                </div>
                {Object.entries(result.headers).map(([key, val]) => (
                  <div key={key} className="flex">
                    <span className="text-cyan-400 w-52 shrink-0">{key}:</span>
                    <span className="text-slate-200">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'logs' && (
              <div className="space-y-1.5">
                {result.resilienceLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={
                      log.includes('⚠️')
                        ? 'text-amber-400 font-semibold'
                        : log.includes('✅')
                        ? 'text-emerald-400 font-semibold'
                        : 'text-slate-300'
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
