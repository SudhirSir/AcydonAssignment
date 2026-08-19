'use client';

import React from 'react';
import { ShieldCheck, Check, X, Award, AlertCircle, Terminal, HelpCircle } from 'lucide-react';

export function HonestyGuarantee() {
  return (
    <section id="honesty" className="py-20 md:py-28 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Honesty & Signal-Over-Noise Guarantee</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            No Fabricated Logos. No Fake Testimonials.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Most landing pages populate fake Fortune 500 logos and quotes from invented VPs. We believe software engineering is graded on architecture, speed, and real code — not stock photos.
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
              <span>100% Honest Copy</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero Fake User Counts</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We display real-time benchmark metrics from our test suite rather than inventing &quot;10,000+ Happy Developers&quot; metrics.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Zero Invented Quotes</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                No fake quotes from fictional Tech Leads. Every claim is backed by reproducible open benchmarks.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-foreground flex items-center gap-1.5 text-sm">
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Transparent Limitations</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We explicitly document where our pipeline stops, including hard rate caps and non-supported anti-bot barriers.
              </p>
            </div>
          </div>
        </div>

        {/* Factual Technical Comparison Matrix */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground">Factual Technical Comparison</h3>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              Raw architectural trade-offs vs common scraping approaches
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="bg-muted/60 border-b border-border text-muted-foreground">
                    <th className="p-4 font-semibold">Technical Feature</th>
                    <th className="p-4 font-semibold text-emerald-600 dark:text-emerald-400">PulseEngine</th>
                    <th className="p-4 font-semibold">Raw Playwright</th>
                    <th className="p-4 font-semibold">Simple cURL/Fetch</th>
                    <th className="p-4 font-semibold">Paid Proxy API</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground">
                  <tr>
                    <td className="p-4 font-sans font-medium">TLS JA4 Fingerprint Spoofing</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Native Socket
                    </td>
                    <td className="p-4 text-amber-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> High CPU
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Hard Blocked
                    </td>
                    <td className="p-4 text-emerald-500 font-medium">Varies</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Memory Footprint / Request</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">&lt; 42 MB</td>
                    <td className="p-4 text-red-500">&gt; 350 MB</td>
                    <td className="p-4 text-emerald-500">&lt; 5 MB</td>
                    <td className="p-4 text-muted-foreground">N/A (SaaS)</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">DOM Drift Self-Healing AST</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Built-in
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Silent Fail
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Silent Fail
                    </td>
                    <td className="p-4 text-red-500 flex items-center gap-1">
                      <X className="w-4 h-4" /> Raw HTML
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Session Rate Jittering</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Poisson Curve
                    </td>
                    <td className="p-4 text-amber-500">Manual Script</td>
                    <td className="p-4 text-red-500">None</td>
                    <td className="p-4 text-emerald-500">Server Side</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-sans font-medium">Cost / 100k Requests</td>
                    <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">$1.20 (Self-Host)</td>
                    <td className="p-4 text-amber-500">$18.50 (Compute)</td>
                    <td className="p-4 text-emerald-500">$0.30</td>
                    <td className="p-4 text-red-500">$45.00+</td>
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
