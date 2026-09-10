'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Server, ArrowLeftRight } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 6;

const nowStreams = [
  {
    icon: CreditCard,
    title: 'App subscriptions',
    body: 'Trader $25 / Pro $99 / Elite $200 per month. Build, test, and deploy strategies with AI insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium strategies',
    body: 'Falcon: $100–$2,500 per month by risk tier. Ongoing subscription to pre-tested strategies validated on live accounts.',
  },
];

const nextStreams = [
  {
    icon: Server,
    title: 'Software licensing',
    body: 'Decision intelligence for brokers, academies, and trading communities.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Payments & treasury',
    body: 'Remittance firms, B2B payment providers and banks convert billions across corridors. The same strategy engine could price and time that flow. Exploratory, long term.',
  },
];

// Row-major order so each grid row's two cards share a height and stay aligned.
const rows = nowStreams.flatMap((stream, i) => [
  { ...stream, stage: 'now' as const },
  { ...nextStreams[i], stage: 'next' as const },
]);

export default function Slide6() {
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Business Model
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Two recurring subscriptions: the app, and the strategies that run on it.
          </motion.p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-7xl mb-8">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
              <h2 className="text-2xl uppercase tracking-[0.2em] text-black font-bold">Now</h2>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
              <h2 className="text-2xl uppercase tracking-[0.2em] text-gray-500 font-bold">Next</h2>
            </motion.div>

            {rows.map((cell, i) => {
              const Icon = cell.icon;
              const isNow = cell.stage === 'now';
              return (
                <motion.div
                  key={`${cell.stage}-${cell.title}`}
                  className="h-full bg-gray-50/30 border border-gray-100 hover:border-black transition-all duration-300 p-8 rounded-lg flex gap-6 items-start min-h-[190px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (isNow ? 0.5 : 0.7) + Math.floor(i / 2) * 0.08, duration: 0.5 }}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center shrink-0 rounded-lg ${
                      isNow ? 'bg-black text-white' : 'bg-white text-black border border-gray-200'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-black mb-2 leading-tight">{cell.title}</h3>
                    <p className="text-2xl text-gray-600 font-light leading-relaxed">{cell.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <SlideFooter className="max-w-7xl mt-8" delay={1.0}>
            Both streams bill monthly. Strategy subscriptions carry the higher price and the stronger demand.
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
