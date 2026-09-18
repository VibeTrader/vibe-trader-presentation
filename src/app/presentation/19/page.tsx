'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 18;

const reasons = [
  {
    title: 'Different game',
    description: 'Citadel and Jane Street make markets and trade at institutional scale, with billions in capital and custom infrastructure.',
  },
  {
    title: 'Different customer',
    description: 'We serve retail forex traders: 2,300+ registered. Those firms do not build tools for them.',
  },
  {
    title: 'Different edge',
    description: 'Our advantage is not a better model. It is the intelligence accumulated across traders’ decisions, behavior, strategies, and changing markets, backed by 50+ years of combined forex experience.',
  },
];

export default function Slide18() {
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
          FAQ: Are You Better Than Citadel or Jane Street?
        </h1>
        <p className="text-4xl font-light text-gray-700">We are not competing with them.</p>

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
          <span className="font-bold">Think Formula 1 vs. Toyota:</span>{' '}
          <span className="font-light">F1 teams have the best engineers in the world. They don’t sell cars to commuters. Toyota does.</span>
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
