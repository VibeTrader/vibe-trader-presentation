'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { streams, totals, millions } from '@/config/financial-plan';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 5;

// TAM and SAM use our pricing (slide 5) and fee assumptions; SOM is the Year-5
// plan from src/config/financial-plan.ts, the same numbers as Financials (slide 7).
// Calculations and sources are on /research/market-sizing.
const yearFive = (title: string) => streams.find((stream) => stream.title === title)!.values[4];

const segments = [
  {
    buyer: 'Retail forex & CFD traders',
    tam: { value: '$6.6–9.9B', basis: '10–15M active traders × ~$660/yr' },
    sam: { value: '$2.0–4.5B', basis: '6.8M measured accounts × our pricing' },
    som: yearFive('App subscriptions') + yearFive('Premium strategies'),
    source: 'Finance Magnates, Q4 2025',
  },
  {
    buyer: 'RIAs licensing strategies',
    tam: { value: '$15.4B', basis: '$3.86T in managed accounts (SMAs) × 0.40%' },
    sam: { value: '$2.6B', basis: '$645B in third-party models × 0.40%' },
    som: yearFive('RIA strategy licensing'),
    source: 'Cerulli, Morningstar 2025',
  },
  {
    buyer: 'Businesses with FX exposure',
    tam: { value: '$6.6B', basis: 'Treasury & FX risk software (analyst estimate)' },
    sam: { value: '$240M', basis: '1,200 large multinationals × $200K' },
    som: yearFive('B2B FX strategies'),
    source: 'Kyriba, BIS 2025',
  },
];

// Combined across the three buyers; see /research/market-sizing for the sums.
const total = {
  tam: '$29–32B',
  sam: '$4.8–7.3B',
  som: millions(totals[4]),
};

// Nested circles are illustrative, not to scale.
const circles = [
  { key: 'tam', label: 'TAM', caption: 'Addressable', size: 620, style: 'bg-gray-100 text-black', labelTop: 56 },
  { key: 'sam', label: 'SAM', caption: 'Serviceable today', size: 400, style: 'bg-gray-300 text-black', labelTop: 44 },
  { key: 'som', label: 'SOM', caption: 'Year-5 target', size: 190, style: 'bg-black text-white', labelTop: 0 },
] as const;

export default function Slide6() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-28 overflow-hidden bg-white"
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
            Market Opportunity
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Three buyers. $4.8B+ serviceable today; our Year-5 target is {millions(totals[4])}.
            <sup className="ml-1 text-base text-gray-500">1</sup>
          </motion.p>

          <div className="flex items-end gap-16">
            <motion.div
              className="relative shrink-0"
              style={{ width: 640, height: 620 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              role="img"
              aria-label={`Total market: TAM ${total.tam}, SAM ${total.sam}, SOM ${total.som} Year-5 target`}
            >
              {circles.map((c) => (
                <div
                  key={c.key}
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full flex flex-col items-center ${c.style} ${
                    c.key === 'som' ? 'justify-center' : ''
                  }`}
                  style={{ width: c.size, height: c.size, paddingTop: c.key === 'som' ? 0 : c.labelTop }}
                >
                  <p className="text-lg uppercase tracking-[0.2em] font-semibold opacity-70">
                    {c.key === 'som' ? c.label : `${c.label} · ${c.caption}`}
                  </p>
                  <p className={`${c.key === 'som' ? 'text-5xl' : 'text-6xl'} font-black tracking-tighter leading-none mt-2`}>
                    {total[c.key]}
                  </p>
                  {c.key === 'som' && <p className="text-base mt-2 opacity-70">{c.caption}</p>}
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4">Three buyers make up the total</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="py-3 text-left text-lg uppercase tracking-wider text-gray-400 font-semibold">Buyer</th>
                    <th className="py-3 text-right text-lg uppercase tracking-wider text-gray-400 font-semibold">TAM</th>
                    <th className="py-3 pr-6 text-right text-lg uppercase tracking-wider text-gray-400 font-semibold">SAM</th>
                    <th className="py-3 pl-4 text-right text-lg uppercase tracking-wider text-white font-semibold bg-black px-4">SOM Yr 5</th>
                  </tr>
                </thead>
                <tbody>
                  {segments.map((seg) => (
                    <tr key={seg.buyer} className="border-b border-gray-200">
                      <td className="py-5 pr-4">
                        <p className="text-2xl font-bold text-black leading-tight">{seg.buyer}</p>
                        <p className="text-base text-gray-400 mt-1">{seg.source}</p>
                      </td>
                      <td className="py-5 text-right text-3xl font-black tracking-tight text-gray-500">{seg.tam.value}</td>
                      <td className="py-5 pr-6 text-right text-3xl font-black tracking-tight text-gray-700">{seg.sam.value}</td>
                      <td className="py-5 px-4 text-right text-3xl font-black tracking-tight text-black bg-gray-50">{millions(seg.som)}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-black">
                    <td className="py-5 text-2xl font-black text-black">Total</td>
                    <td className="py-5 text-right text-3xl font-black tracking-tight text-black">{total.tam}</td>
                    <td className="py-5 pr-6 text-right text-3xl font-black tracking-tight text-black">{total.sam}</td>
                    <td className="py-5 px-4 text-right text-3xl font-black tracking-tight text-white bg-black">{total.som}</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-6 text-2xl text-gray-700 font-light leading-snug">
                The Year-5 target is <span className="font-bold text-black">under 4% of the serviceable market</span>. Assumptions are on the Financials slide.
              </p>
            </motion.div>
          </div>
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
