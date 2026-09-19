'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';
import { FlaskConical, LineChart, ShieldCheck } from 'lucide-react';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 2;

// Each pillar answers one of the questions on slide 2's problem card, in order.
const pillars = [
  {
    Icon: FlaskConical,
    label: 'Build & test',
    answers: 'Will this strategy work?',
    description: 'Describe a strategy in plain words. Test it on years of market history, then deploy.',
  },
  {
    Icon: LineChart,
    label: 'Understand',
    answers: 'Is it still working in today’s market?',
    description: 'Ask AI what is moving your market, from rate decisions to CPI releases, before you trade.',
  },
  {
    Icon: ShieldCheck,
    label: 'Subscribe',
    answers: 'Can I trust this?',
    description: 'Falcon pre-tested strategies, with live results you can check.',
  },
];

export default function Slide3() {
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
            Tested strategies, not promises
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 font-light leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Build, test or subscribe, with proof before you risk money.
          </motion.p>

          <div className="flex items-center gap-16 mt-12 mb-12">
            <div className="flex-1 min-w-0 space-y-10">
              {pillars.map(({ Icon, label, answers, description }, i) => (
                <motion.div
                  key={label}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center bg-black text-white">
                    <Icon className="h-8 w-8" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="mb-2 flex flex-wrap items-baseline gap-x-4">
                      <h2 className="text-3xl font-bold text-black">{label}</h2>
                      <p className="text-lg italic text-gray-500">Answers: {answers}</p>
                    </div>
                    <p className="text-2xl text-gray-700 font-light leading-snug">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="w-225 shrink-0 aspect-video overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/slide_2_V2.mp4"
                className="w-full h-full object-contain"
                aria-label="VibeTrader demo: describe a strategy, test it on market history, publish it"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </div>

          <SlideFooter className="w-full" delay={1.0}>
            Traders know what works, and why, <span className="font-bold">before they trade.</span>
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
