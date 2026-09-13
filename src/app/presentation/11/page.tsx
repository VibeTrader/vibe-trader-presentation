'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 10;

// Planning assumptions, not observed traction or market-research forecasts.
// Count only separately billed app subscriptions; exclude bundled app access.
const streams = [
  { title: 'App subscriptions', detail: '20,000 standalone subscribers × $100/month', revenue: 20_000 * 100 * 12 },
  { title: 'Premium strategy subscriptions', detail: '10,000 paid strategy subscriptions × $1,000/month', revenue: 10_000 * 1_000 * 12 },
  { title: 'RIA strategy licensing', detail: '$10B allocated to our strategies × 0.40% annual fee', revenue: 10_000_000_000 * 0.004 },
  { title: 'B2B FX transaction strategies', detail: '80 business clients × $200,000 annual contract', revenue: 80 * 200_000 },
];
const total = streams.reduce((sum, stream) => sum + stream.revenue, 0);
const millions = (value: number) => `$${value / 1_000_000}M`;

export default function Slide11() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-black" onClick={nextSlide}>
      <GlobeWatermark />
      <motion.main className="relative z-10 px-20 pt-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="w-16 h-1.5 bg-black mb-5" />
        <h1 className="text-6xl font-black tracking-tighter leading-tight">Financials</h1>
        <p className="text-3xl text-gray-600 font-light mt-3">Four revenue streams across individual and institutional customers</p>

        <div className="flex items-end gap-10 mt-8 mb-7">
          <p className="text-[112px] font-black tracking-tighter leading-none">{millions(total)}</p>
          <div className="pb-2">
            <p className="text-2xl font-bold uppercase tracking-wide">Year 5 annualized revenue run rate</p>
            <p className="text-2xl text-gray-600 mt-2">Illustrative target scenario · not a validated forecast</p>
          </div>
        </div>

        <table className="w-full border-collapse text-left" aria-label="Illustrative Year 5 revenue assumptions">
          <thead className="text-lg uppercase tracking-widest text-gray-500 border-b-2 border-black">
            <tr><th className="pb-3 w-[35%]">Revenue stream</th><th className="pb-3">Year 5 assumption</th><th className="pb-3 text-right">Annualized revenue</th></tr>
          </thead>
          <tbody>
            {streams.map((stream) => (
              <tr key={stream.title} className="border-b border-gray-300">
                <th scope="row" className="py-5 text-[28px] font-bold tracking-tight">{stream.title}</th>
                <td className="py-5 text-[25px] text-gray-700">{stream.detail}</td>
                <td className="py-5 text-right text-4xl font-black">{millions(stream.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-7 border-l-4 border-black pl-5">
          <p className="text-xl uppercase tracking-widest font-bold mb-2">Expansion through Year 5</p>
          <p className="text-[27px] text-gray-700">Forex → futures, crypto, stocks &amp; options · RIA strategy mandates · corporate FX execution &amp; hedging</p>
        </div>
        <div className="mt-6 text-[20px] text-gray-600 leading-relaxed">
          <p>Assumptions to validate: acquisition, retention, pricing and enterprise mandates. Strategy pricing assumes migration to the $1,000/month floor.</p>
          <p>App revenue excludes bundled access. RIA fees apply only to allocated assets. Before partner commissions and operating costs.</p>
          <p>Year-end run rate differs from revenue earned during Year 5; asset-based fees vary with allocations and market values.</p>
        </div>
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
