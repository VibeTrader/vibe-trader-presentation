'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 9;

const cards = [
  {
    label: 'DEMAND',
    title: 'Ready-Made Strategies',
    body: 'We found stronger demand for tested strategies than for the app alone.',
  },
  {
    label: 'LIVE RESULTS',
    title: '8–9 Months',
    body: 'Strategies we built in-house have run profitably across multiple users’ live accounts.*',
  },
  {
    label: 'PREMIUM SALES',
    title: '$100–$2,500',
    body: 'Falcon strategies sell at premium prices based on risk tier.',
  },
  {
    label: 'FUNDING UNLOCKS',
    title: 'Expand Sales',
    body: 'Fund marketing and legal work to reach more buyers and accelerate strategy sales.',
  },
];

export default function Slide12() {
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
            Why Invest Now
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-6 font-light max-w-[1600px] leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We built an app to create strategies. Customers showed stronger demand for the finished product.
          </motion.p>

          <div className="grid grid-cols-4 gap-6 max-w-[1600px] mt-10 mb-10">
            {cards.map((card, i) => (
              <motion.div
                key={card.label}
                className="border-2 border-gray-200 rounded-lg bg-white p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <p className="text-6xl font-black mb-6">{i + 1}</p>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-4">{card.label}</p>
                <h2 className="text-3xl font-black leading-tight min-h-[76px] mb-5">{card.title}</h2>
                <p className="text-2xl text-gray-700 font-light leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-black text-white p-6 max-w-[1600px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              Strategy sales are our entry point: bring buyers onto the app, where they can run more strategies or create their own.
            </p>
          </motion.div>
          <p className="text-lg text-gray-500 mt-5 max-w-7xl leading-relaxed">
            *Founder-reported results across multiple users. Past performance does not guarantee future results.
          </p>
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
