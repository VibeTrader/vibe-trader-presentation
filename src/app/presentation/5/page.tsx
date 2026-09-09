'use client';

import { motion } from 'framer-motion';
import { Users, Rocket, Handshake } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 18;
const ACTIVE = 4;

const stats = [
  {
    icon: Users,
    metric: '1,800+',
    label: 'Registered traders',
    detail: 'Users across 100+ countries.',
  },
  {
    icon: Rocket,
    metric: '2',
    label: 'Live pilots',
    detail: 'Trading LatAm (Academy) · Dupoin (Broker).',
  },
  {
    icon: Handshake,
    metric: '7+',
    label: 'Broker pipeline',
    detail: 'Lirunex · PU Prime · GTCFX · Blueberry Markets · HFM · Ultima Markets · OneRoyal.',
  },
];

const infra = [
  'MT4 / MT5 integration',
  'Multi-language platform: English · Spanish · Arabic',
  'Broker ecosystem',
];

export default function Slide5() {
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
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              className="w-16 h-1.5 bg-black"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            />
            <motion.p
              className="text-base uppercase tracking-[0.25em] text-gray-600 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              As of July 21, 2026
            </motion.p>
          </div>

          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Market Validation
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Growing validation from traders and industry partners.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-5xl font-black text-black mb-2 leading-none tracking-tighter">
                    {s.metric}
                  </p>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-3">{s.label}</p>
                  <p className="text-lg text-gray-700 font-light leading-snug">{s.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-lg uppercase tracking-widest text-gray-400 mb-3 font-semibold">
              Ready to scale
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xl font-light leading-snug">
              {infra.map((m, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="inline-block h-2 w-2 shrink-0 bg-white" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
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
