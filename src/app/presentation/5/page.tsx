'use client';

import { motion } from 'framer-motion';
import { Building2, Network, GraduationCap } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 4;

const channels = [
  {
    icon: Building2,
    label: 'Brokers',
    headline: 'Embedded distribution',
    reach: '20K–200K traders per broker',
    status: 'Live',
    statusDetail: 'Dupoin pilot · 7 in pipeline',
    model: 'White label or flat licence',
  },
  {
    icon: Network,
    label: 'IB partnerships',
    headline: 'Community-led growth',
    reach: 'Introducing brokers with active trader communities',
    status: 'In talks',
    statusDetail: '2 communities onboarding',
    model: 'Revenue share per converted subscriber',
  },
  {
    icon: GraduationCap,
    label: 'Trading schools',
    headline: 'Cohort distribution',
    reach: 'Students already paying to learn',
    status: 'Live',
    statusDetail: 'Trading LatAm pilot',
    model: 'Seat licence per cohort',
  },
];

export default function Slide5() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-32 overflow-hidden bg-white"
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
              Distribution · As of July 21, 2026
            </motion.p>
          </div>

          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            How We Reach Traders
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-9 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Partner-led distribution into audiences that already pay to trade.
          </motion.p>

          <div className="grid grid-cols-3 gap-6">
            {channels.map((c, i) => {
              const Icon = c.icon;
              const isLive = c.status === 'Live';
              return (
                <motion.div
                  key={c.label}
                  className="flex flex-col border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`px-3 py-1 text-sm font-bold uppercase tracking-[0.15em] ${
                        isLive ? 'bg-black text-white' : 'border-2 border-gray-300 text-gray-500'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>

                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-2">{c.label}</p>
                  <p className="text-[32px] font-black text-black leading-none tracking-tighter mb-4">
                    {c.headline}
                  </p>
                  <p className="text-lg text-gray-700 font-light leading-snug mb-4">{c.reach}</p>
                  <p className="text-lg text-black font-medium leading-snug mb-5">{c.statusDetail}</p>

                  <div className="mt-auto border-t-2 border-gray-100 pt-4">
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">Model</p>
                    <p className="text-lg text-gray-700 font-light leading-snug">{c.model}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.svg
            viewBox="0 0 1200 56"
            preserveAspectRatio="none"
            className="w-full h-12"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <path d="M200 0 L200 20 L600 38 L600 50" fill="none" stroke="#d1d5db" strokeWidth="3" />
            <path d="M600 0 L600 50" fill="none" stroke="#d1d5db" strokeWidth="3" />
            <path d="M1000 0 L1000 20 L600 38 L600 50" fill="none" stroke="#d1d5db" strokeWidth="3" />
            <path d="M588 44 L600 56 L612 44 Z" fill="#111827" />
          </motion.svg>

          <motion.div
            className="bg-black text-white px-9 py-7 flex items-center gap-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            <p className="text-4xl font-black tracking-tighter shrink-0">VibeTrader</p>
            <div className="h-14 w-px bg-gray-700 shrink-0" />
            <div>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-1.5 font-semibold">
                Direct / product-led base
              </p>
              <p className="text-xl font-light leading-snug">
                1,800+ registered traders across 100+ countries on minimal ad spend · English · Spanish · Arabic
              </p>
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
