'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, RefreshCw, Lock, Terminal, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export function ArchitectureDeepDive() {
  const [activeTab, setActiveTab] = useState<'fingerprint' | 'ingestion' | 'resilience' | 'ethics'>('fingerprint');

  return (
    <section id="architecture" className="py-20 md:py-28 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems Design & Engineering</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The Evasion & Resilience Architecture
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            How PulseEngine bypasses bot detection systems without relying on brittle scrapers or risking target accounts.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-muted/60 border border-border overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('fingerprint')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'fingerprint'
                  ? 'bg-card text-foreground shadow-sm border border-border'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Shield className="w-4 h-4 text-emerald-500" />
              <span>1. Detection Surface</span>
            </button>
            <button
              onClick={() => setActiveTab('ingestion')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'ingestion'
                  ? 'bg-card text-foreground shadow-sm border border-border'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <RefreshCw className="w-4 h-4 text-blue-500" />
              <span>2. Ingestion Strategy</span>
            </button>
            <button
              onClick={() => setActiveTab('resilience')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'resilience'
                  ? 'bg-card text-foreground shadow-sm border border-border'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Cpu className="w-4 h-4 text-purple-500" />
              <span>3. Self-Healing Resilience</span>
            </button>
            <button
              onClick={() => setActiveTab('ethics')}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeTab === 'ethics'
                  ? 'bg-card text-foreground shadow-sm border border-border'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Lock className="w-4 h-4 text-amber-500" />
              <span>4. Ethical Scope & Line</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8 max-w-4xl mx-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-lg">
          {activeTab === 'fingerprint' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-500" />
                  <span>Detection Surface Evasion (TLS & Fingerprints)</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Modern anti-bot platforms (Cloudflare, Akamai, PerimeterX) don&apos;t just look at User-Agents. They fingerprint the TLS Client Hello handshake, HTTP/2 frame order, TCP window sizes, and headless DOM artifacts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>JA3/JA4 TLS Camouflage</span>
                  </div>
                  <p className="text-muted-foreground font-sans">
                    Custom ciphersuite ordering and TLS extension signatures mimicking legitimate macOS Chrome 128 browsers at the socket layer.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Headless Artifact Stripping</span>
                  </div>
                  <p className="text-muted-foreground font-sans">
                    Removes `navigator.webdriver`, spoofs WebGL renderer string, and injects realistic AudioContext & Canvas noise buffer.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>HTTP/2 Header Alignment</span>
                  </div>
                  <p className="text-muted-foreground font-sans">
                    Enforces strict Chromium pseudo-header ordering (`:method`, `:authority`, `:scheme`, `:path`) with matching `Sec-Ch-Ua` headers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Behavioral Jittering</span>
                  </div>
                  <p className="text-muted-foreground font-sans">
                    Randomized inter-request delays following Poisson distribution rather than fixed interval timers that alert bot detectors.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ingestion' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                  <span>Ingestion Strategy & Fallback Pipeline</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  How we pull high-volume data under the radar while maintaining 99.9% pipeline uptime when primary endpoints get rate-limited.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl border border-border bg-background flex items-start space-x-3">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-bold text-[10px]">
                    TIER 1
                  </span>
                  <div>
                    <div className="font-bold text-foreground font-sans text-sm">Direct HTTP/2 TLS Request</div>
                    <div className="text-muted-foreground font-sans text-xs mt-1">
                      Ultra-fast (sub-100ms) request using spoofed TLS Client Hello. Used for 80% of volume without browser overhead.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background flex items-start space-x-3">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 font-bold text-[10px]">
                    TIER 2
                  </span>
                  <div>
                    <div className="font-bold text-foreground font-sans text-sm">Stealth Headless Browser Isolate</div>
                    <div className="text-muted-foreground font-sans text-xs mt-1">
                      Invoked automatically if a JS Turnstile challenge is returned. Solves challenge in isolated v8 runtime and harvests bypass cookies.
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background flex items-start space-x-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold text-[10px]">
                    TIER 3
                  </span>
                  <div>
                    <div className="font-bold text-foreground font-sans text-sm">Public RSS & Open Index Stream</div>
                    <div className="text-muted-foreground font-sans text-xs mt-1">
                      Guaranteed Plan B fallback when a platform initiates aggressive blocking mid-run. Zero risk to main proxy pool.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'resilience' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-500" />
                  <span>Self-Healing AST & DOM Drift Recovery</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Websites change HTML class names overnight to break CSS selectors. PulseEngine uses multi-tier heuristic extraction so pipelines never fail silently.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs space-y-3">
                <div className="text-slate-400">// Heuristic Extraction Order</div>
                <div className="flex items-center text-emerald-400">
                  <ChevronRight className="w-4 h-4 shrink-0 mr-1" />
                  <span>1. Microdata & Embedded JSON-LD (`&lt;script type=&quot;application/ld+json&quot;&gt;`)</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <ChevronRight className="w-4 h-4 shrink-0 mr-1" />
                  <span>2. Semantic OpenGraph & Meta Tags (`og:title`, `og:description`)</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <ChevronRight className="w-4 h-4 shrink-0 mr-1" />
                  <span>3. Relative Tree-Distance & ARIA Attribute Matching (`[role=&quot;job-title&quot;]`)</span>
                </div>
                <div className="flex items-center text-amber-400">
                  <ChevronRight className="w-4 h-4 shrink-0 mr-1" />
                  <span>4. LLM-Assisted Off-Thread Extraction (Zero Schema Loss)</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ethics' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Lock className="w-5 h-5 text-amber-500" />
                  <span>Where We Stop (Ethical Guardrails & Scope)</span>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every scraping project requires clear personal and technical boundaries. PulseEngine enforces strict guardrails by default.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-foreground font-mono">1. Zero Live Account Risk</div>
                  <p className="text-muted-foreground">
                    We never require logged-in authentication credentials or session tokens for private accounts. Data is gathered purely from public endpoints.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-foreground font-mono">2. Strict Rate-Limit Caps</div>
                  <p className="text-muted-foreground">
                    Hardware rate limiters cap maximum concurrency per destination domain to avoid DDOS behavior or degrading target servers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-foreground font-mono">3. Robots.txt Respect Mode</div>
                  <p className="text-muted-foreground">
                    Optional strict compliance mode that parses target `robots.txt` disallow lists and crawl-delays before sending requests.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                  <div className="font-bold text-foreground font-mono">4. PII Scrubbing Engine</div>
                  <p className="text-muted-foreground">
                    All scraped payloads pass through an automatic regex sanitizer that redacts personal phone numbers and email addresses before storage.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
