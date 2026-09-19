'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { plan, streams, totals, millions } from '@/config/financial-plan';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 6;

// Revenue regrouped by the three buyers on the market slide (slide 6).
const byTitle = (title: string) => streams.find((stream) => stream.title === title)!.values;
const buyers = [
  { label: 'Retail traders', shade: 'bg-black', values: plan.map((_, i) => byTitle('App subscriptions')[i] + byTitle('Premium strategies')[i]) },
  { label: 'RIAs', shade: 'bg-gray-500', values: byTitle('RIA strategy licensing') },
  { label: 'Businesses', shade: 'bg-gray-300', values: byTitle('B2B FX strategies') },
];
const BAR_MAX_PX = 250;
const assets = (value: number) => `$${value / 1_000_000_000}B RIA assets`;

export default function Slide7() {
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

        <div className="mt-10 flex gap-8 text-xl text-gray-600">
          {buyers.map((b) => (
            <span key={b.label} className="flex items-center gap-2">
              <span className={`inline-block h-4 w-4 ${b.shade}`} />
              {b.label}
            </span>
          ))}
        </div>

        <div
          className="flex gap-10 mt-6"
          role="img"
          aria-label={`Illustrative year-end annualized revenue: ${plan.map((p, i) => `${p.year} ${millions(totals[i])}`).join(', ')}. Bar heights use a common linear scale.`}
        >
          {plan.map((year, i) => (
            <div key={year.year} className="flex-1 text-center">
              <div className="h-[320px] flex flex-col justify-end items-center border-b border-gray-300">
                <p className="text-4xl font-black mb-4">{millions(totals[i])}</p>
                <motion.div
                  className="w-[150px] flex flex-col-reverse origin-bottom"
                  style={{ height: Math.max(3, (totals[i] / totals[4]) * BAR_MAX_PX) }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  {buyers.map((b) => (
                    <div key={b.label} className={b.shade} style={{ height: `${(b.values[i] / totals[i]) * 100}%` }} />
                  ))}
                </motion.div>
              </div>
              <p className="text-2xl font-bold mt-4">{year.year}</p>
              <p className="text-lg text-gray-600 mt-1">{(year.appUsers + year.strategySubs).toLocaleString('en-US')} paying traders</p>
              <p className="text-lg text-gray-500">
                {year.riaAssets === 0 && year.businessClients === 0
                  ? 'Retail only'
                  : `${assets(year.riaAssets)} · ${year.businessClients} companies`}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t-2 border-black pt-6">
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
        <p className="mt-8 text-xl text-gray-500">Illustrative targets, subject to validation. Year-end run rate, not revenue earned during the year.</p>
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
