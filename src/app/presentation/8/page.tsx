'use client';

import { motion } from 'framer-motion';
import { UserCheck, Users2, Building2 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 18;
const ACTIVE = 7;

const phases = [
  {
    icon: UserCheck,
    label: '1',
    category: 'Direct',
    title: 'Acquire',
    timeline: '0–6 months',
    points: ['Organic acquisition', 'Product-led onboarding'],
    accent: 'bg-black text-white',
  },
  {
    icon: Users2,
    label: '2',
    category: 'Community',
    title: 'Expand',
    timeline: '6–12 months',
    points: ['Trading academies', 'Affiliates and educators'],
    accent: 'bg-white text-black border-2 border-black',
  },
  {
    icon: Building2,
    label: '3',
    category: 'Broker',
    title: 'Scale',
    timeline: '12–24 months',
    points: ['Embedded distribution', 'Broker partnerships', 'White-label / API'],
    accent: 'bg-gray-100 text-black border-2 border-gray-300',
  },
];

export default function Slide8() {
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
            Go-to-Market Strategy
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From direct adoption to broker-led distribution.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-8">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-10 flex flex-col rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-16 h-16 flex items-center justify-center text-4xl font-black rounded-lg ${p.accent}`}
                    >
                      {p.label}
                    </div>
                    <Icon className="w-9 h-9 text-gray-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-black leading-tight mb-1">
                    {p.category}
                  </h3>
                  <p className="text-base uppercase tracking-[0.25em] text-gray-400 mb-2">
                    {p.title}
                  </p>
                  <p className="text-xl uppercase tracking-widest text-gray-500 mb-5">
                    {p.timeline}
                  </p>
                  <ul className="space-y-3">
                    {p.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                      >
                        <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Designed to scale across our initial{' '}
              <span className="font-bold text-white">150K–250K MT4/MT5 retail trader market</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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
