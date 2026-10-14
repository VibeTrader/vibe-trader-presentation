'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Cloud, Gauge } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 13;

// NVIDIA's Capital Connect template asks for current or planned NVIDIA use in business terms,
// and warns against overstated relationship claims. Inception membership is the only one made here.
// The language-model card makes no claim about the hardware Azure OpenAI or OpenRouter run on.
const today = [
  {
    icon: Cpu,
    title: 'Our own models on NVIDIA GPUs',
    body: 'We train, backtest and serve our own trading models on NVIDIA GPU cloud instances.',
  },
  {
    icon: MessageSquare,
    title: 'Language models for every trader question',
    body: 'Our market-analysis agents call models through Azure OpenAI and OpenRouter, so compute grows with users.',
  },
];

const planned = [
  {
    icon: Cloud,
    title: 'DGX Cloud and Inception credits',
    body: 'Train larger strategy models and run more backtests on each strategy before release.',
  },
  {
    icon: Gauge,
    title: 'TensorRT-LLM and Triton',
    body: 'Serve our own models faster, at a lower cost per trader question.',
  },
];

// Row-major order so each grid row's two cards share a height and stay aligned.
const rows = today.flatMap((item, i) => [
  { ...item, stage: 'today' as const },
  { ...planned[i], stage: 'planned' as const },
]);

export default function Slide14() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-28 overflow-hidden bg-white"
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            NVIDIA And Inception
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We already run our models on NVIDIA GPUs. Inception helps us scale that.
          </motion.p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
              <h2 className="text-2xl uppercase tracking-[0.2em] text-black font-bold">Today</h2>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
              <h2 className="text-2xl uppercase tracking-[0.2em] text-gray-500 font-bold">Planned with Inception</h2>
            </motion.div>

            {rows.map((cell, i) => {
              const Icon = cell.icon;
              const isToday = cell.stage === 'today';
              return (
                <motion.div
                  key={cell.title}
                  className={`h-full border-2 p-8 flex gap-6 items-start transition-colors hover:border-black ${
                    isToday ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50/60'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (isToday ? 0.5 : 0.7) + Math.floor(i / 2) * 0.08, duration: 0.5 }}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center shrink-0 ${
                      isToday ? 'bg-black text-white' : 'bg-white text-black border border-gray-300'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-3xl font-bold text-black mb-3 leading-tight">{cell.title}</h3>
                    <p className="text-2xl text-gray-600 font-light leading-snug">{cell.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <SlideFooter className="w-full" delay={1.0}>
            <span className="font-bold">Why it matters:</span> more strategies tested per dollar before traders risk money, and a lower AI cost per trader as we grow.
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
