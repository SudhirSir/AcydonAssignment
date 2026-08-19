'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Zap, Terminal, ShieldCheck, Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar({ onOpenKonami }: { onOpenKonami?: () => void }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            <Zap className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-lg tracking-tight">PulseEngine</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                v2.4 Stealth
              </span>
            </div>
            <p className="text-[11px] text-muted-foreground hidden sm:block">
              Resilient Data Extraction Architecture
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => scrollToSection('sandbox')}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1.5"
          >
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span>Live Sandbox</span>
          </button>
          <button
            onClick={() => scrollToSection('dashboard')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Telemetry Demo
          </button>
          <button
            onClick={() => scrollToSection('architecture')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection('honesty')}
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>Honesty Guarantee</span>
          </button>
          <button
            onClick={() => scrollToSection('specs')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Specs
          </button>
        </nav>

        {/* Right Actions: Theme Toggle, Secret Console Button & CTA */}
        <div className="flex items-center space-x-3">
          {/* Konami / Terminal Quick Trigger */}
          {onOpenKonami && (
            <button
              onClick={onOpenKonami}
              title="Click or press Konami Code (↑↑↓↓←→←→BA) for Developer Console"
              className="p-2 rounded-lg border border-border bg-card/50 hover:bg-emerald-500/10 text-muted-foreground hover:text-emerald-500 transition-colors hidden sm:flex items-center space-x-1 text-xs font-mono"
            >
              <Cpu className="w-4 h-4" />
              <span className="text-[11px]">CLI [Ctrl+K]</span>
            </button>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          )}

          {/* Main Action CTA */}
          <button
            onClick={() => scrollToSection('sandbox')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-200 shadow-md shadow-emerald-600/20 active:scale-95"
          >
            Try Interactive Sandbox
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-border bg-card text-foreground"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3"
          >
            <button
              onClick={() => scrollToSection('sandbox')}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium"
            >
              ⚡ Live Interactive Sandbox
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium"
            >
              📊 Telemetry Demo
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium"
            >
              ⚙️ Architecture & Evasion
            </button>
            <button
              onClick={() => scrollToSection('honesty')}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium"
            >
              🛡️ Honesty & Anti-Hype Guarantee
            </button>
            <button
              onClick={() => scrollToSection('specs')}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-muted text-sm font-medium"
            >
              📦 Deployment Specs
            </button>
            <div className="pt-2 border-t border-border flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('sandbox')}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs text-center"
              >
                Launch Sandbox Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
