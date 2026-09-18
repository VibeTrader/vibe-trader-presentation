'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 20;

// [what trading needs, Claude Code / Codex, VibeTrader]
const rows = [
  ['Built for', 'Developers', 'Traders who don’t code'],
  ['Market data and history', 'You wire it up', 'Built in'],
  ['Backtesting', 'You write it', 'Built in'],
  ['Demo trading first', 'You set it up', 'Built in'],
  ['Broker connection (MT4/MT5)', 'You integrate it', 'Built in'],
  ['Economic calendar events', 'You build it', 'Built in'],
  ['Deploy and monitor', 'You host it', 'Built in'],
  ['Ready-made strategies', 'None', 'Strategy library and Falcon'],
];

export default function Slide20() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white">
      <GlobeWatermark />

      <motion.div
        className="relative z-10 px-20 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black text-black mb-6 tracking-tighter leading-tight">
          FAQ: How Is VibeTrader Different From Claude Code or Codex?
        </h1>
        <p className="text-3xl font-light text-gray-700">
          They turn a description into code. VibeTrader turns it into a strategy that’s tested, connected to your broker, and trading.
        </p>

        <div className="mt-12 grid max-w-375 grid-cols-[1.2fr_1fr_1.2fr] text-2xl">
          <div />
          <div className="px-6 pb-4 pt-3 font-bold text-gray-500">Claude Code / Codex</div>
          <div className="rounded-t-xl bg-black px-6 pb-4 pt-3 font-bold text-white">VibeTrader</div>
          {rows.map(([need, coding, vibe], i) => (
            <motion.div
              key={need}
              className="contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
            >
              <div className="border-b border-gray-200 py-3 pr-6 font-bold text-black">{need}</div>
              <div className="border-b border-gray-200 px-6 py-3 font-light text-gray-500">{coding}</div>
              <div className={`border-x-2 border-black px-6 py-3 font-bold text-black ${i === rows.length - 1 ? 'rounded-b-xl border-b-2' : 'border-b border-b-gray-200'}`}>✓ {vibe}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-3xl text-black">
          <span className="font-bold">Think Excel vs. QuickBooks:</span>{' '}
          <span className="font-light">anyone can do accounting in Excel. Small businesses still pay for QuickBooks.</span>
        </p>
        <p className="mt-3 text-xl text-gray-500">
          VibeTrader builds on the same kind of AI models, so every model upgrade makes it better.
        </p>
      </motion.div>

      <Link
        href="/presentation/14"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-8 left-20 z-30 text-xl underline underline-offset-4"
      >Back to FAQ</Link>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <div key={i} className={`h-2 rounded-full ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>

      <button onClick={prevSlide} aria-label="Previous slide"
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-20">←</button>
      <button onClick={nextSlide} aria-label="Next slide"
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-20">→</button>
    </div>
  );
}
