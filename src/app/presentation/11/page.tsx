'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 10;

// Illustrative operating assumptions at each year-end, not validated forecasts.
// App access bundled with a strategy is excluded from app subscriber counts.
const plan = [
  { year: 'Year 1', appUsers: 500, strategySubs: 400, strategyPrice: 500, riaAssets: 0, businessClients: 0, milestone: 'Forex launch', detail: 'App + strategy subscriptions' },
  { year: 'Year 2', appUsers: 2000, strategySubs: 1000, strategyPrice: 800, riaAssets: 0, businessClients: 0, milestone: 'Futures + crypto', detail: 'Scale partner distribution' },
  { year: 'Year 3', appUsers: 5000, strategySubs: 2500, strategyPrice: 1000, riaAssets: 750_000_000, businessClients: 5, milestone: 'Stocks + RIA pilots', detail: 'First paid corporate FX clients' },
  { year: 'Year 4', appUsers: 10000, strategySubs: 5500, strategyPrice: 1000, riaAssets: 3_000_000_000, businessClients: 30, milestone: 'Options + institutional growth', detail: 'Expand strategy mandates' },
  { year: 'Year 5', appUsers: 20000, strategySubs: 10000, strategyPrice: 1000, riaAssets: 10_000_000_000, businessClients: 80, milestone: 'Scale across markets', detail: 'Four established revenue streams' },
];
const streams = [
  { title: 'App subscriptions', shade: '#a3a3a3', values: plan.map(p => p.appUsers * 100 * 12) },
  { title: 'Premium strategies', shade: '#171717', values: plan.map(p => p.strategySubs * p.strategyPrice * 12) },
  { title: 'RIA strategy licensing', shade: '#525252', values: plan.map(p => p.riaAssets * 0.004) },
  { title: 'B2B FX strategies', shade: '#d4d4d4', values: plan.map(p => p.businessClients * 200_000) },
];
const totals = plan.map((_, i) => streams.reduce((sum, stream) => sum + stream.values[i], 0));
const millions = (value: number) => value === 0 ? '—' : `$${Number((value / 1_000_000).toFixed(1))}M`;

export default function Slide11() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-black" onClick={nextSlide}>
      <GlobeWatermark />
      <motion.main className="relative z-10 px-20 pt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="w-16 h-1.5 bg-black mb-5" />
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-6xl font-black tracking-tighter leading-tight">Financials</h1>
            <p className="text-3xl text-gray-600 font-light mt-3">Five-year growth plan</p>
          </div>
          <div className="text-right">
            <p className="text-8xl font-black tracking-tighter">{millions(totals[4])}</p>
            <p className="text-2xl text-gray-600 mt-2">Year 5 annualized revenue target</p>
          </div>
        </div>

        <div className="flex gap-10 mt-16" role="img" aria-label="Illustrative year-end annualized revenue: Year 1, 3 million; Year 2, 12 million; Year 3, 40 million; Year 4, 96 million; Year 5, 200 million dollars. Bar heights use a common linear scale.">
          {plan.map((year, i) => (
            <div key={year.year} className="flex-1 text-center">
              <div className="h-[350px] flex flex-col justify-end items-center border-b border-gray-300">
                <p className="text-4xl font-black mb-4">{millions(totals[i])}</p>
                <div className="w-[150px] bg-black" style={{ height: `${totals[i] / totals[4] * 270}px` }} />
              </div>
              <p className="text-2xl font-bold mt-4">{year.year}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t-2 border-black pt-6">
          <p className="text-xl uppercase tracking-widest text-gray-500 mb-5">Year 5 revenue mix</p>
          <div className="grid grid-cols-4 gap-10">
            {streams.map(stream => (
              <div key={stream.title}>
                <p className="text-5xl font-black">{millions(stream.values[4])}</p>
                <p className="text-[27px] text-gray-700 mt-3">{stream.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 text-xl text-gray-500">Illustrative targets, subject to validation. Year-end run rate, not revenue earned during the year.</p>
      </motion.main>

      {/* Navigation dots */}
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

      <button onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide">←</button>
      <button onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide">→</button>
    </div>
  );
}
