'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { ProductShowcase } from '@/components/product-showcase';
import { ArchitectureDeepDive } from '@/components/architecture-deep-dive';
import { HonestyGuarantee } from '@/components/honesty-guarantee';
import { PricingSpecs } from '@/components/pricing-specs';
import { Footer } from '@/components/footer';
import { KonamiModal } from '@/components/konami-modal';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function Home() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [isKonamiOpen, setIsKonamiOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Shortcut Ctrl+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsKonamiOpen((prev) => !prev);
        return;
      }

      // Konami Code sequence listener
      const expectedKey = KONAMI_CODE[konamiIndex];
      if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
        const nextIndex = konamiIndex + 1;
        if (nextIndex === KONAMI_CODE.length) {
          setIsKonamiOpen(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(nextIndex);
        }
      } else {
        setKonamiIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-400">
      <Navbar onOpenKonami={() => setIsKonamiOpen(true)} />
      <Hero />
      <ProductShowcase />
      <ArchitectureDeepDive />
      <HonestyGuarantee />
      <PricingSpecs />
      <Footer onOpenKonami={() => setIsKonamiOpen(true)} />

      {/* Konami Easter Egg Modal */}
      <KonamiModal isOpen={isKonamiOpen} onClose={() => setIsKonamiOpen(false)} />
    </main>
  );
}
