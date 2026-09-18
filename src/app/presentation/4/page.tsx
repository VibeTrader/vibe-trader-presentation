'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 3;

const modes = [
  {
    icon: Wrench,
    mode: 'Build',
    title: 'Build & Test Your Own Strategies',
    detail: 'Turn a trading idea into a strategy, test it, and deploy it through supported broker accounts.',
  },
  {
    icon: ShieldCheck,
    mode: 'Subscribe',
    title: 'Access Pre-Tested Strategies',
    detail: 'Choose pre-tested strategies and subscribe based on account equity.',
  },
  {
    icon: Sparkles,
    mode: 'Understand',
    title: 'AI Decision Intelligence',
    detail: 'Understand market context, risk and what may matter before making a trading decision.',
  },
];

const intelligence = ['Market Intelligence', 'Strategy Intelligence', 'Risk Intelligence', 'Trader Intelligence'];

export default function Slide4() {
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
            className="text-6xl font-black text-black mb-12 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            One Platform. Multiple Ways to Trade.
          </motion.h1>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {modes.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.mode}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-5">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-2">{m.mode}</p>
                  <p className="text-3xl font-black text-black mb-3 leading-tight tracking-tight">{m.title}</p>
                  <p className="text-xl text-gray-700 font-light leading-snug">{m.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="flex items-center gap-6 border-2 border-black px-8 py-5 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
          >
            <p className="shrink-0 text-sm uppercase tracking-widest text-gray-500 font-semibold">Intelligence layer</p>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-y-2 text-xl font-medium text-black">
              {intelligence.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 shrink-0 bg-black" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <SlideFooter className="w-full" delay={1.0}>
            VibeTrader connects market understanding, strategy creation, pre-tested strategies and deployment in one platform.
          </SlideFooter>
        </motion.div>
      </div>

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
