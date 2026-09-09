'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 18;
const ACTIVE = 8;

const rows = [
  { feature: 'Market Analysis', tv: '✓', cap: '✓', ts: '✓', comp: '◐', vibe: '✓' },
  { feature: 'Strategy Building & Testing', tv: '✓', cap: '✓', ts: '✓', comp: '✓', vibe: '✓' },
  { feature: 'Trade Automation', tv: '◐', cap: '✓', ts: '✓', comp: '✓', vibe: '✓' },
  { feature: 'Trader Decision Memory', tv: '—', cap: '—', ts: '—', comp: '—', vibe: '✓' },
  { feature: 'Adaptive Intelligence', tv: '—', cap: '◐', ts: '◐', comp: '◐', vibe: '✓' },
];

const renderValue = (val: string, isVibe = false) => {
  if (val === '✓') {
    return <span className={`${isVibe ? 'text-black font-black' : 'text-gray-800 font-semibold'}`}>✓</span>;
  }
  if (val === '◐') {
    return <span className="text-gray-500 font-normal">◐</span>;
  }
  return <span className="text-gray-300 font-light">—</span>;
};

export default function Slide9() {
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
          {/* Header Line */}
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
            Competitive Advantage
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From Trading Tools to Decision Intelligence
          </motion.p>

          {/* Comparison Table */}
          <div className="max-w-7xl mb-6 bg-white border border-gray-100 rounded-lg p-8 shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3.5 px-6 text-left text-sm uppercase tracking-wider text-gray-400 font-bold">Feature</th>
                  <th className="py-3.5 px-6 text-center text-lg font-bold text-gray-800">TradingView</th>
                  <th className="py-3.5 px-6 text-center text-lg font-bold text-gray-800">Capitalise.ai</th>
                  <th className="py-3.5 px-6 text-center text-lg font-bold text-gray-800">TrendSpider</th>
                  <th className="py-3.5 px-6 text-center text-lg font-bold text-gray-800">Composer</th>
                  <th className="py-3.5 px-6 text-center text-lg font-black text-white bg-black rounded-t-lg">VibeTrader</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3.5 px-6 text-lg font-bold text-gray-900">{row.feature}</td>
                    <td className="py-3.5 px-6 text-center text-xl">{renderValue(row.tv)}</td>
                    <td className="py-3.5 px-6 text-center text-xl">{renderValue(row.cap)}</td>
                    <td className="py-3.5 px-6 text-center text-xl">{renderValue(row.ts)}</td>
                    <td className="py-3.5 px-6 text-center text-xl">{renderValue(row.comp)}</td>
                    <td className="py-3.5 px-6 text-center text-xl font-bold bg-gray-50/50 border-x-2 border-black last:border-b-2">
                      {renderValue(row.vibe, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Legend */}
            <div className="mt-6 text-sm tracking-wider text-gray-400 text-left font-medium uppercase">
              ✓ Core &middot; ◐ Partial &middot; &mdash; Not core
            </div>
          </div>

          {/* Bottom Takeaway */}
          <motion.div
            className="bg-black text-white p-8 max-w-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              VibeTrader’s advantage is not another AI model. It is the intelligence accumulated across decisions, behavior, strategies, and changing markets.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'} rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >&larr;</button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide"
      >&rarr;</button>
    </div>
  );
}
