'use client';

import React, { useState } from 'react';
import { Zap, Terminal, Heart, Sparkles } from 'lucide-react';

export function Footer({ onOpenKonami }: { onOpenKonami?: () => void }) {
  const [clickCount, setClickCount] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);

  const handleBadgeClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setEasterEggActive(true);
      if (onOpenKonami) onOpenKonami();
    }
  };

  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-foreground">PulseEngine</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              Resilient data extraction & evasion platform designed for Acdyon Technologies Engineering Assessment. Built with modern web architecture and zero fake social proof.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">Product Navigation</h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>
                <a href="#sandbox" className="hover:text-emerald-500 transition-colors">
                  Live Interactive Sandbox
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-emerald-500 transition-colors">
                  Telemetry Demo & Chaos Lab
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-emerald-500 transition-colors">
                  Architecture & Evasion
                </a>
              </li>
              <li>
                <a href="#honesty" className="hover:text-emerald-500 transition-colors">
                  Honesty Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Secret / Easter Egg Trigger */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-foreground uppercase tracking-wider">Easter Egg Discovery</h4>
            <p className="text-xs text-muted-foreground">
              Try pressing <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono text-[11px]">↑ ↑ ↓ ↓ ← → ← → B A</code> anywhere on your keyboard!
            </p>
            <button
              onClick={handleBadgeClick}
              className="mt-2 inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-emerald-500/10 text-xs font-mono text-muted-foreground hover:text-emerald-500 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>
                {clickCount > 0 ? `Triple-Click Badge (${clickCount}/3)` : 'Developer Badge v2.4'}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <div>
            © {new Date().getFullYear()} PulseEngine • Engineered for Acdyon Technologies Frontend Challenge
          </div>
          <div className="flex items-center space-x-1 font-mono text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-500 fill-current inline mx-0.5" />
            <span>&amp; Zero Fake Testimonials</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
