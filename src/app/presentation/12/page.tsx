'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 11;

const exitPath = [
  'Build the global decision intelligence platform for retail trading',
  'Potential strategic acquisition by major brokers, trading platforms, or fintech leaders',
];

export default function Slide12() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-24 overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <motion.div
        className="relative z-10 px-20 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight">
          Offer &amp; Long-Term Opportunity
        </h1>
        <p className="text-3xl text-gray-600 font-light mb-12">
          Join us in building the intelligence layer for global retail trading.
        </p>

        <div className="grid grid-cols-2 gap-12">
          <motion.section
            aria-label="Investment offer"
            className="flex h-130 flex-col rounded-xl bg-black p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="self-start bg-white px-3 py-1 font-mono text-lg font-bold uppercase tracking-[0.2em] text-black">
              Investment offer
            </span>
            <p className="flex flex-1 items-center text-[132px] font-black leading-none tracking-tight text-white">
              $1M SAFE
            </p>
          </motion.section>

          <motion.section
            aria-labelledby="exit-heading"
            className="flex h-130 flex-col rounded-xl border-2 border-gray-200 bg-white p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="self-start bg-black px-3 py-1 font-mono text-lg font-bold uppercase tracking-[0.2em] text-white">
              Long-term path
            </span>
            <h2 id="exit-heading" className="mt-5 text-4xl font-black tracking-tight text-black">
              Strategic Exit &amp; Growth
            </h2>
            <ul className="mt-5 mb-8 space-y-4 text-2xl font-light leading-snug text-gray-700">
              {exitPath.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-3 w-3 shrink-0 bg-black" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-gray-200 pt-6">
              <p className="font-mono text-base uppercase tracking-[0.2em] text-gray-400">Vision statement</p>
              <p className="mt-3 text-[26px] font-black leading-snug text-black">
                Give everyone the financial intelligence to move forward—and, in doing so, move the global economy forward.
              </p>
            </div>
          </motion.section>
        </div>

        <motion.div
          className="mt-8 flex items-center justify-between rounded-xl border-2 border-gray-200 bg-gray-50 px-8 py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-2xl">
            <span className="font-black text-black">Saranya Amirthalingam</span>
            <span className="text-gray-500 font-light"> · CEO, VibeTrader</span>
          </p>
          <a
            href="https://vibetrader.com"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-2xl font-bold text-black hover:underline"
          >
            vibetrader.com
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <div key={i} className={`h-2 rounded-full ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >←</button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide: FAQ"
      >→</button>
    </div>
  );
}
