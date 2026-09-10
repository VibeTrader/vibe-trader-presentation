'use client';

import { motion } from 'framer-motion';
import { Building2, Network, GraduationCap } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 5;

// Bars are a log-scale read on reach per partner, so 200 and 200,000 can sit
// on the same axis. Schools stay unquantified until we have a cohort size.
const channels = [
  {
    icon: Building2,
    channel: 'Brokers',
    label: 'Embedded distribution',
    status: 'Live',
    reach: '20K–200K',
    reachNote: 'traders per broker',
    bar: 100,
    stage: 'Dupoin live · 7 in pipeline',
  },
  {
    icon: Network,
    channel: 'IB partners',
    label: 'Community-led',
    status: 'Signing',
    reach: '200+',
    reachNote: 'users per IB',
    bar: 43,
    stage: 'Contracts signing · onboarding under way',
  },
  {
    icon: GraduationCap,
    channel: 'Schools',
    label: 'Cohort distribution',
    status: 'Signed',
    reach: 'Cohort',
    reachNote: 'students per academy cohort',
    bar: null,
    stage: 'Trading LatAm referral signed · no paying users yet',
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
                  key={c.channel}
                  className="flex flex-col border-2 border-gray-200 hover:border-black transition-colors p-7 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between mb-4">
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

                  <p className="text-5xl font-black text-black mb-2 leading-none tracking-tighter">
                    {c.channel}
                  </p>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-6">{c.label}</p>

                  <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Reach</p>
                  <p className="text-3xl font-black text-black leading-none tracking-tight mb-1">{c.reach}</p>
                  <p className="text-base text-gray-600 font-light mb-3">{c.reachNote}</p>
                  <div className="h-2.5 w-full bg-gray-100 mb-6">
                    {c.bar === null ? (
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(135deg, #d1d5db 0 6px, transparent 6px 12px)',
                        }}
                      />
                    ) : (
                      <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        animate={{ width: `${c.bar}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                      />
                    )}
                  </div>

                  <div className="mt-auto border-t-2 border-gray-100 pt-4">
                    <p className="text-sm uppercase tracking-widest text-gray-400 mb-1">Status</p>
                    <p className="text-lg text-black font-light leading-snug">{c.stage}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="mt-5 text-base text-gray-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Bars show reach per partner on a log scale. Cohort size for schools is not yet quantified.
          </motion.p>

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
