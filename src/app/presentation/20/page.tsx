'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 19;

const reasons = [
  {
    title: 'A different kind of loss',
    description: 'Jane Street’s July loss came from concentrated AI-stock bets on its own balance sheet, including a stake in an AI hedge fund.',
  },
  {
    title: 'Risk stays in each account',
    description: 'Strategies run on each trader’s own broker account, with capital limits by tier and position sizes set from balance, risk per trade, and stop loss.',
  },
  {
    title: 'AI works inside fixed rules',
    description: 'AI decisions pass through fixed trading rules before any trade. Falcon strategies are pre-tested and validated on live accounts.',
  },
];

export default function Slide19() {
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
          FAQ: Could Your System Make a $15B Mistake?
        </h1>
        <p className="text-4xl font-light text-gray-700">No system can promise zero losses. Ours limits how large one mistake can get.</p>

        <ul className="mt-16 max-w-6xl list-disc pl-8 space-y-10 text-3xl text-gray-700 leading-relaxed marker:text-black">
          {reasons.map((reason, i) => (
            <motion.li
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            >
              <span className="font-bold text-black">{reason.title}:</span>{' '}
              <span className="font-light">{reason.description}</span>
            </motion.li>
          ))}
        </ul>

        <p className="mt-12 text-3xl text-black">
          <span className="font-bold">Think circuit breakers:</span>{' '}
          <span className="font-light">they don’t stop an appliance from failing. They stop one failure from burning the house down.</span>
        </p>

        <p className="mt-8 text-lg text-gray-500">
          Source: Bloomberg, “Jane Street Lost $15 Billion in Its First Down Month in a Decade,” Aug 14, 2026. Past performance does not guarantee future results.
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
