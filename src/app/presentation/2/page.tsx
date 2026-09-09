'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 18;
const ACTIVE = 1;

const traderProblems = [
  'Keeping strategies effective as markets change',
  'Knowing which strategy fits current conditions',
  'Turning charts and signals into a clear trading decision',
];

export default function Slide2() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white"
      onClick={nextSlide}
    >
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          <motion.h1
            className="text-6xl font-bold text-black mb-6 tracking-[-0.035em] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why We Built VibeTrader
          </motion.h1>

          <motion.p
            className="text-[28px] text-gray-600 font-normal max-w-7xl leading-[1.55]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We saw a family member lose everything through trading. We built VibeTrader to help traders make more informed decisions.
          </motion.p>

          <div className="mt-10 flex items-center gap-16">
            <motion.div
              className="w-[1100px] shrink-0 aspect-video overflow-hidden relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/slide%201_V3.mp4"
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-[30px] font-semibold tracking-tight text-black mb-9 leading-[1.25]">
                What traders struggle with
                <sup className="ml-1 text-sm font-normal text-gray-500">1</sup>
              </h2>
              <ul className="list-disc pl-6 space-y-7 text-[28px] text-gray-700 font-normal leading-[1.45] marker:text-gray-400">
                {traderProblems.map((problem) => (
                  <li key={problem} className="pl-2">{problem}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="/research/trader-challenges"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Supporting research and sources (opens in a new tab)"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        className="absolute bottom-24 right-20 z-20 text-base leading-normal text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <sup className="mr-1 text-xs">1</sup> Supporting research &amp; sources
      </a>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
              } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  );
}
