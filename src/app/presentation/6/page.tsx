'use client';

import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Server, BarChart3 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 18;
const ACTIVE = 5;

const nowStreams = [
  {
    icon: CreditCard,
    title: 'App subscriptions',
    body: 'Trader $25 / Pro $99 / Elite $200 per month. Build, test, and deploy strategies with AI insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Premium strategies',
    body: 'Falcon: $100–$2,500 by risk tier. Pre-tested strategies validated on live accounts. Value-based pricing.',
  },
];

const nextStreams = [
  {
    icon: Server,
    title: 'Software licensing',
    body: 'Decision intelligence for brokers, academies, and trading communities.',
  },
  {
    icon: BarChart3,
    title: 'Market intelligence',
    body: 'Anonymous behavioral insights and institutional analytics.',
  },
];

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
            App subscriptions plus premium strategy sales.
          </motion.p>

          <div className="grid grid-cols-2 gap-12 max-w-7xl mb-8">
            {/* NOW Column */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
                <h2 className="text-2xl uppercase tracking-[0.2em] text-black font-bold">Now</h2>
              </motion.div>
              <div className="flex flex-col gap-6">
                {nowStreams.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      className="bg-gray-50/30 border border-gray-100 hover:border-black transition-all duration-300 p-8 rounded-lg flex gap-6 items-start min-h-[190px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                    >
                      <div className="w-14 h-14 bg-black text-white flex items-center justify-center shrink-0 rounded-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl font-bold text-black mb-2 leading-tight">{s.title}</h3>
                        <p className="text-2xl text-gray-600 font-light leading-relaxed">{s.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* NEXT Column */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
                <h2 className="text-2xl uppercase tracking-[0.2em] text-gray-500 font-bold">Next</h2>
              </motion.div>
              <div className="flex flex-col gap-6">
                {nextStreams.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.div
                      key={i}
                      className="bg-gray-50/30 border border-gray-100 hover:border-black transition-all duration-300 p-8 rounded-lg flex gap-6 items-start min-h-[190px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    >
                      <div className="w-14 h-14 bg-white text-black border border-gray-200 flex items-center justify-center shrink-0 rounded-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-4xl font-bold text-black mb-2 leading-tight">{s.title}</h3>
                        <p className="text-2xl text-gray-600 font-light leading-relaxed">{s.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Subscription access to the app. Premium pricing for validated strategies.
            </p>
          </motion.div>
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
