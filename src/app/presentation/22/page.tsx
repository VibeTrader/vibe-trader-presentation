'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PRESENTATION_CONFIG } from '@/config/presentation';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 21;

const reasons = [
  {
    title: 'Trading doesn’t scale for people',
    description: 'Day trading is a full-time job, and even a great trader can follow only a few instruments.',
  },
  {
    title: 'Strategies scale, but can’t see the world',
    description: 'Every strategy has best, average, and worst stretches. None reads the news or global events behind them.',
  },
  {
    title: 'LLMs close the gap',
    description: 'They parse economic events to deploy a strategy when conditions suit it, and pull it when they don’t.',
  },
];

// [metric, ForexBotTrader, hold gold]
const summary = [
  ['P&L', '+$2,157.52 (+143.8%)', '−$287.00 (−19.1%)'],
  ['Worst drawdown', '−9.6% (−$226)', '−27.2% (−$438)'],
  ['Return ÷ worst drawdown', '15.0', '−0.7'],
  ['Profitable months', '6 of 6', '2 of 6'],
  ['Time in the market', '5.1%', '100%'],
];

// [month, ForexBotTrader, gold]
const months = [
  ['Feb', '+37.7%', '+4.7%'],
  ['Mar', '+33.1%', '−11.0%'],
  ['Apr', '+6.9%', '−1.5%'],
  ['May', '+11.2%', '−1.9%'],
  ['Jun', '+11.0%', '−11.8%'],
  ['Jul', '+0.8%', '+1.7%'],
];

export default function Slide21() {
  const { prevSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-24 overflow-hidden bg-white">
      <GlobeWatermark />

      <motion.div
        className="relative z-10 px-20 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black text-black mb-4 tracking-tighter leading-tight">
          FAQ: How Will AI Blur Trading and Investing?
        </h1>
        <p className="text-3xl font-light text-gray-700">
          Investors buy and wait. Traders react to every event. AI lets a strategy do both: stay out, and step in when conditions suit it.
        </p>

        <div className="mt-10 grid grid-cols-[1fr_1.35fr] items-start gap-16">
          <ul className="list-disc pl-8 space-y-7 text-2xl text-gray-700 leading-relaxed marker:text-black">
            {reasons.map((reason, i) => (
              <motion.li
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <span className="font-bold text-black">{reason.title}:</span>{' '}
                <span className="font-light">{reason.description}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="mb-3 text-xl font-bold text-black">
              A client’s live account: $1,500 each, Feb 9 → Jul 29, 2026
            </p>
            <div className="grid grid-cols-[1.15fr_1.2fr_1fr] text-2xl">
              <div />
              <div className="rounded-t-xl bg-black px-5 py-3 font-bold text-white">ForexBotTrader</div>
              <div className="px-5 py-3 font-bold text-gray-500">Hold gold</div>
              {summary.map(([metric, strategy, gold], i) => (
                <div key={metric} className="contents">
                  <div className="border-b border-gray-200 py-3 pr-4 font-bold text-black">{metric}</div>
                  <div className={`border-x-2 border-black px-5 py-3 font-bold text-black ${i === summary.length - 1 ? 'rounded-b-xl border-b-2' : 'border-b border-b-gray-200'}`}>{strategy}</div>
                  <div className="border-b border-gray-200 px-5 py-3 font-light text-gray-500">{gold}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-[auto_repeat(6,1fr)] text-xl">
          <div className="py-2 pr-8 font-bold text-gray-400 uppercase tracking-widest text-base">Monthly</div>
          {months.map(([month]) => (
            <div key={month} className="py-2 text-center font-bold text-gray-400">{month}</div>
          ))}
          <div className="border-t border-gray-200 py-2 pr-8 font-bold text-black">ForexBotTrader</div>
          {months.map(([month, strategy]) => (
            <div key={month} className="border-t border-gray-200 py-2 text-center font-bold text-black">{strategy}</div>
          ))}
          <div className="border-t border-gray-200 py-2 pr-8 font-bold text-gray-500">Hold gold</div>
          {months.map(([month, , gold]) => (
            <div key={month} className="border-t border-gray-200 py-2 text-center font-light text-gray-500">{gold}</div>
          ))}
        </div>

        <p className="mt-6 max-w-7xl text-lg text-gray-500 leading-snug">
          Gold $5,039.72 → $4,070.81. Strategy drawdown counts losses on open positions at the worst M1 price during each trade. Through Sep 14, gold is −15.1% and the strategy has been idle since Jul 29. Past performance does not guarantee future results.
        </p>
      </motion.div>

      <Link
        href="/presentation/14"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-8 left-20 z-30 text-xl underline underline-offset-4"
      >Back to FAQ</Link>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <div key={i} className={`h-2 rounded-full ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>

      <button onClick={prevSlide} aria-label="Previous slide"
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-20">←</button>
    </div>
  );
}
