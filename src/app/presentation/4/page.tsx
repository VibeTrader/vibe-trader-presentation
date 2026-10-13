'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import type { SyntheticEvent } from 'react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';
import { betaResults, monthlyResults, myfxbookUrl, secondAccountMonthly, secondAccountUrl } from '@/data/trading-results';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 3;

// One bar per complete month, all Myfxbook-reported percentages from two real-money accounts. Account 1 stopped
// trading after July, so account 2 carries August and September; October is in progress and left out.
// See /research/trading-results.
const BASELINE = 150; // px from the top of the bar row
const PX_PER_PCT = 2.1;
const laterMonths = secondAccountMonthly.filter(m => ['Aug', 'Sep'].includes(m.month));
const GRID = 'grid grid-cols-[repeat(7,minmax(0,1fr))_40px_repeat(2,minmax(0,1fr))] gap-4';

const metrics = [
  { value: '+461.95%', label: 'Reported gain', detail: 'Account 1, Jan–Jul' },
  { value: '26.25%', label: 'Max drawdown', detail: 'Worst of the two accounts' },
  { value: String(betaResults.accounts), label: 'Beta accounts on Falcon', detail: 'September 2026' },
];

const pct = (n: number) => `${n > 0 ? '+' : ''}${n.toFixed(2)}%`;

function Bar({ value, height, label }: { value: number; height: number; label: string }) {
  const up = value >= 0;
  return (
    <div className="relative">
      <div className="absolute inset-x-0 border-t-2 border-gray-300" style={{ top: BASELINE }} />
      <div
        className={`absolute inset-x-6 ${up ? 'bg-black' : 'bg-red-700'}`}
        style={{ top: up ? BASELINE - height : BASELINE, height }}
      />
      <p
        className={`absolute inset-x-0 text-center text-xl font-bold ${up ? 'text-black' : 'text-red-700'}`}
        style={{ top: up ? BASELINE - height - 34 : BASELINE + height + 6 }}
      >
        {label}
      </p>
    </div>
  );
}

const stop = (event: SyntheticEvent) => event.stopPropagation();

export default function Slide4() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-16 overflow-hidden bg-white"
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
            Running live since January 2026
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="font-bold text-black">Falcon</span>, our automated gold-trading strategy, on real-money accounts tracked on
            Myfxbook, and now on {betaResults.accounts} beta accounts.
          </motion.p>

          <motion.section
            role="img"
            aria-label={`Falcon monthly returns on Myfxbook: ${[...monthlyResults, ...laterMonths].map(m => `${m.month} ${pct(m.gain)}`).join(', ')}.`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className={`${GRID} mb-4 text-lg uppercase tracking-[0.2em] font-semibold text-gray-500`}>
              <p className="col-span-7 border-b-2 border-black pb-2">Myfxbook account 1 · monthly return</p>
              <div />
              <p className="col-span-2 border-b-2 border-black pb-2">Account 2</p>
            </div>

            <div className={`${GRID} h-[260px]`}>
              {monthlyResults.map(({ month, gain }) => (
                <Bar key={month} value={gain} height={Math.abs(gain) * PX_PER_PCT} label={pct(gain)} />
              ))}
              <div className="mx-auto h-full border-l-2 border-dashed border-gray-300" />
              {laterMonths.map(({ month, gain }) => (
                <Bar key={month} value={gain} height={Math.abs(gain) * PX_PER_PCT} label={pct(gain)} />
              ))}
            </div>

            <div className={`${GRID} mt-3 text-center text-xl text-gray-600`}>
              {[...monthlyResults.map(m => m.month), '', ...laterMonths.map(m => m.month)].map(month => (
                <p key={month || 'divider'}>{month}</p>
              ))}
            </div>
          </motion.section>

          <div className="grid grid-cols-3 gap-10 mt-8">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="border-t-2 border-gray-200 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              >
                <p className="text-6xl font-black text-black leading-none tracking-tighter">{m.value}</p>
                <p className="text-lg uppercase tracking-widest text-gray-500 mt-3">{m.label}</p>
                <p className="text-xl text-gray-700 font-light">{m.detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex items-end justify-between gap-20 mt-6 text-lg text-gray-600 leading-snug"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p className="max-w-6xl">
              Monthly returns as reported on Myfxbook for two real-money accounts running Falcon: account 1 for Jan–Jul, account 2
              (still live) for Aug–Sep. Track records are not independently verified. Results through September 30, 2026.
              Past performance does not guarantee future results.
            </p>
            <div className="flex shrink-0 gap-8 text-black underline underline-offset-4">
              <a href={myfxbookUrl} target="_blank" rel="noopener noreferrer" onClick={stop} onPointerDown={stop}>Account 1 ↗</a>
              <a href={secondAccountUrl} target="_blank" rel="noopener noreferrer" onClick={stop} onPointerDown={stop}>Account 2 ↗</a>
              <a href="/research/trading-results" target="_blank" rel="noopener noreferrer" onClick={stop} onPointerDown={stop}>Full statistics ↗</a>
            </div>
          </motion.div>

          <SlideFooter className="w-full mt-8" delay={1.0}>
            <span className="font-bold">Falcon demonstrates our strategy capability.</span> Our beta accounts and partner
            channels give us a starting point for commercial validation.
          </SlideFooter>
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
