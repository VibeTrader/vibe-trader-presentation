'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 3;

const market = [
  { label: 'TAM', value: '370M', description: 'Global active self-directed traders across equities, crypto, FX and derivatives' },
  { label: 'SAM', value: '10–15M', description: 'Active retail forex and CFD traders worldwide, driving ~$242B in daily volume' },
  { label: 'SOM', value: '62K', description: '1% of the 6.2M traders across APAC, North America and Europe' },
];

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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Market and Opportunity
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A massive global trading addressable market, starting with high-leverage Forex retail traders.
          </motion.p>

          <div className="grid grid-cols-3 gap-9 mt-16 mb-12">
            {market.map((item, i) => (
              <motion.div
                key={item.label}
                className="border-2 border-gray-200 rounded-lg bg-white p-11 min-h-[310px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              >
                <p className="inline-block bg-black text-white px-3 py-1 text-sm font-bold tracking-[0.25em] mb-7">{item.label}</p>
                <p className="text-7xl font-black tracking-tight text-black mb-5">{item.value}</p>
                <p className="text-2xl text-gray-600 font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-black text-white p-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-relaxed">Start with forex. Expand across financial markets.</p>
          </motion.div>

        </motion.div>
      </div>

      <a
        href="/research/market-sizing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Supporting research and sources (opens in a new tab)"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        className="absolute bottom-24 right-20 z-20 text-base leading-normal text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <sup className="mr-1 text-xs">1</sup> Supporting research &amp; sources
      </a>

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
