'use client';

import React from 'react';
import { Server, Zap, Cpu, Terminal, CheckCircle2, ArrowRight, HardDrive } from 'lucide-react';

export function PricingSpecs() {
  return (
    <section id="specs" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-mono font-medium border border-purple-500/20">
            <Server className="w-3.5 h-3.5" />
            <span>Deployment Architecture & Specs</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Developer-First Deployment Targets
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Deploy as an isolated microservice, an Edge API route, or a lightweight Docker container on any free tier host.
          </p>
        </div>

        {/* Deployment Options Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Option 1: Free Tier Serverless */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold">
                  FREE / SERVERLESS
                </span>
                <Zap className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Edge Function Deploy</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Ideal for Vercel, Netlify, or Cloudflare Workers. Runs HTTP TLS Evasion with zero persistent server costs.
              </p>

              <div className="mt-6 space-y-2.5 text-xs font-mono">
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Sub-second Cold Starts (&lt;20ms)</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>TLS Camouflage Engine Included</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>100% Free Tier Compatible</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <span>Headless Browser: Excluded</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border">
              <button
                onClick={() => {
                  const el = document.getElementById('sandbox');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl border border-border bg-muted/50 hover:bg-muted text-foreground font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <span>Test Edge Payload</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Option 2: Docker Container (Featured) */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-card p-6 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider">
              Recommended for Production
            </div>

            <div>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-bold">
                  SELF-HOSTED DOCKER
                </span>
                <Cpu className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Full Resilience Container</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Deploy on Render, Railway, or VPS. Includes Chromium Stealth isolate for handling complex Turnstile challenges.
              </p>

              <div className="mt-6 space-y-2.5 text-xs font-mono">
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Full 3-Tier Evasion Hierarchy</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Stealth Chromium Headless Included</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Self-Healing AST Heuristics</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Proxy Pool Rotation Manager</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border">
              <button
                onClick={() => {
                  const el = document.getElementById('sandbox');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md transition-colors flex items-center justify-center space-x-1.5"
              >
                <span>Inspect Docker Spec</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Option 3: Enterprise Microservice */}
          <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500/40 transition-colors">
            <div>
              <div className="flex justify-between items-center">
                <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[11px] font-bold">
                  HIGH-THROUGHPUT CLUSTER
                </span>
                <HardDrive className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">Distributed Mesh Cluster</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Horizontal scaling for 10M+ daily request workloads with distributed rate buckets and Redis queue orchestration.
              </p>

              <div className="mt-6 space-y-2.5 text-xs font-mono">
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Distributed Redis Token Bucket</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Global Residential IP Router</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Kafka/RabbitMQ Pipeline Sinks</span>
                </div>
                <div className="flex items-center text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 shrink-0" />
                  <span>Prometheus & Grafana Telemetry</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border">
              <button
                onClick={() => {
                  const el = document.getElementById('architecture');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-xl border border-border bg-muted/50 hover:bg-muted text-foreground font-semibold text-xs transition-colors flex items-center justify-center space-x-1.5"
              >
                <span>View Mesh Topology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
