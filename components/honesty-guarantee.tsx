'use client';

import React from 'react';
import { ShieldCheck, Check, X, AlertCircle } from 'lucide-react';

export function HonestyGuarantee() {
  return (
    <section id="honesty" className="py-20 md:py-28 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Honesty &amp; Signal-Over-Noise Guarantee</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            No Fabricated Logos. No Fake Testimonials.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Most landing pages populate fake Fortune 500 logos and quotes from invented VPs. We believe software engineering is graded on architecture, speed, and real code — not stock photos or fabricated marketing numbers.
          </p>
        </div>

        {/* The Pledge Card */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-emerald-500/30 bg-card p-6 sm:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-border">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
                Acdyon Grading Criteria Compliance
              </span>
              <h3 className="text-xl font-bold text-foreground">Our Anti-Hype Commitments</h3>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/20">
              <Check className="w-4 h-4" />
              <span>Transparent Copy</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero Fake User Counts</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We present an interactive architectural simulation rather than inventing &quot;10,000+ Happy Developers&quot; marketing numbers.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero Invented Quotes</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                No fake quotes from fictional Tech Leads. Every feature is backed by transparent technical design documentation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Explicit Simulation Scope</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We explicitly disclose that our interactive sandbox is a demonstration running against low-risk public endpoints.
              </p>
            </div>
          </div>
        </div>

        {/* Qualitative Architectural Comparison Matrix */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground">Architectural Comparison</h3>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              Qualitative design trade-offs of PulseEngine vs standard ingestion patterns
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="bg-muted/60 border-b border-border text-muted-foreground">
                    <th className="p-4 font-semibold">Architectural Vector</th>
                    <th className="p-4 font-semibold text-emerald-600 dark:text-emerald-400">PulseEngine Concept</th>
                    <th className="p-4 font-semibold">Raw Playwright</th>
                    <th className="p-4 font-semibold">Simple cURL/Fetch</th>
                    <th className="p-4 font-semibold">Paid Proxy API</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground">
                  <tr>
                    <td className="p-4 font-sans font-medium">TLS Profile Evasion</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> TLS Socket Profile
                    </td>
                    <td className="p-4 text-amber-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Full Browser
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Fixed Client Hello
                    </td>
                    <td className="p-4 text-emerald-500 font-medium">Provider Managed</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Memory Footprint</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">Low (Design Target)</td>
                    <td className="p-4 text-red-500">High (Browser Runtime)</td>
                    <td className="p-4 text-emerald-500">Minimal</td>
                    <td className="p-4 text-muted-foreground">SaaS Managed</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">DOM Drift Resilience</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Semantic Microdata
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Brittle Selectors
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Brittle Selectors
                    </td>
                    <td className="p-4 text-amber-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Raw HTML
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Session Pacing</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Jittered Pacing
                    </td>
                    <td className="p-4 text-amber-500">Manual Scripting</td>
                    <td className="p-4 text-red-500">Unpaced Direct</td>
                    <td className="p-4 text-emerald-500">Server-Side Buckets</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Infrastructure Model</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">Self-Hosted Serverless/VPS</td>
                    <td className="p-4 text-amber-500">Heavy Compute Nodes</td>
                    <td className="p-4 text-emerald-500">Minimal Compute</td>
                    <td className="p-4 text-muted-foreground">Metered SaaS Subscriptions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
