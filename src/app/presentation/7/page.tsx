'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { plan, streams, totals, earnedStreams, earnedTotals, launchPlan, onboardingRevenue, forecastPeriods, millions } from '@/config/financial-plan';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 6;

// Revenue regrouped by the three buyers on the market slide (slide 6).
const byTitle = (title: string) => streams.find((stream) => stream.title === title)!.values;
const buyers = [
  { label: 'Retail traders', shade: 'bg-black', values: plan.map((_, i) => byTitle('App subscriptions')[i] + byTitle('Premium strategies')[i]) },
  { label: 'RIAs', shade: 'bg-gray-500', values: byTitle('RIA strategy licensing') },
  { label: 'Businesses', shade: 'bg-gray-300', values: byTitle('B2B FX strategies') },
];
const BAR_MAX_PX = 135;
const assets = (value: number) => `$${value / 1_000_000_000}B RIA assets`;
const firstYearStrategyRevenue = earnedStreams.find(stream => stream.title === 'Premium strategies')!.values[0];
const firstYearAppRevenue = earnedStreams.find(stream => stream.title === 'App subscriptions')!.values[0];

export default function Slide7() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-black" onClick={nextSlide}>
      <GlobeWatermark />
      <motion.main className="relative z-10 px-20 pt-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className="w-16 h-1.5 bg-black mb-4" />
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-6xl font-black tracking-tighter leading-tight">Financials</h1>
            <p className="text-3xl text-gray-600 font-light mt-2">Launch in {launchPlan.onboardingMonth}. First full year ends {launchPlan.checkpoint}.</p>
          </div>
          <div className="text-right">
            <p className="text-7xl font-black tracking-tighter">{millions(launchPlan.revenueTarget)}</p>
            <p className="text-xl text-gray-600 mt-2">First full-year revenue target</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-4 gap-6" aria-label="Launch and first-year revenue assumptions">
          <div className="border-t-2 border-black pt-3">
            <p className="text-lg text-gray-600">October launch plan</p>
            <p className="text-4xl font-black mt-1">{launchPlan.customers}+ customers</p>
            <p className="text-xl text-gray-600 mt-1">{launchPlan.customers} modeled at ${launchPlan.strategyPriceMonthly}/month</p>
          </div>
          <div className="border-t-2 border-black pt-3">
            <p className="text-lg text-gray-600">Strategy revenue · Year 1</p>
            <p className="text-4xl font-black mt-1">{millions(firstYearStrategyRevenue)}</p>
            <p className="text-xl text-gray-600 mt-1">{launchPlan.firstFullYear}</p>
          </div>
          <div className="border-t-2 border-black pt-3">
            <p className="text-lg text-gray-600">Total revenue earned · Year 1</p>
            <p className="text-4xl font-black mt-1">{millions(earnedTotals[0], 3)}</p>
            <p className="text-xl text-gray-600 mt-1">Includes ${(firstYearAppRevenue / 1_000).toLocaleString('en-US')}K app revenue</p>
          </div>
          <div className="border-t-2 border-black pt-3">
            <p className="text-lg text-gray-600">Total annual run rate · Oct 2027</p>
            <p className="text-4xl font-black mt-1">{millions(totals[0], 2)}</p>
            <p className="text-xl text-gray-600 mt-1">App + strategy subscriptions</p>
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-600 leading-snug">
          Example: ${launchPlan.strategyPriceMonthly} average monthly strategy price, {launchPlan.monthlyChurn * 100}% churn and {launchPlan.monthlyNewCustomers} new strategy sales/month after launch.
          October onboarding adds ${(onboardingRevenue / 1_000).toLocaleString('en-US')}K at half-month billing, shown outside Year 1.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Five-year annual revenue run rate</h2>
          <div className="flex gap-8 text-lg text-gray-600">
            {buyers.map((b) => (
              <span key={b.label} className="flex items-center gap-2">
                <span className={`inline-block h-4 w-4 ${b.shade}`} />
                {b.label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="flex gap-10 mt-3"
          role="img"
          aria-label={`Illustrative year-end annualized revenue: ${plan.map((p, i) => `${p.year} ${millions(totals[i], i === 0 ? 2 : 1)}`).join(', ')}. Bar heights use a common linear scale.`}
        >
          {plan.map((year, i) => (
            <div key={year.year} className="flex-1 text-center">
              <div className="h-[190px] flex flex-col justify-end items-center border-b border-gray-300">
                <p className="text-3xl font-black mb-3">{millions(totals[i], i === 0 ? 2 : 1)}</p>
                <motion.div
                  className="w-[150px] flex flex-col-reverse origin-bottom"
                  style={{ height: (totals[i] / totals[4]) * BAR_MAX_PX }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  {buyers.map((b) => (
                    <div key={b.label} className={b.shade} style={{ height: `${(b.values[i] / totals[i]) * 100}%` }} />
                  ))}
                </motion.div>
              </div>
              <p className="text-xl font-bold mt-3">{year.year} <span className="text-base text-gray-500 font-normal">{forecastPeriods[i]}</span></p>
              <p className="text-lg text-gray-600 mt-1">{(year.appUsers + year.strategySubs).toLocaleString('en-US')} retail subscriptions</p>
              <p className="text-lg text-gray-500">
                {year.riaAssets === 0 && year.businessClients === 0
                  ? 'Retail only'
                  : `${assets(year.riaAssets)} · ${year.businessClients} companies`}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t-2 border-black pt-4">
          <p className="text-lg uppercase tracking-widest text-gray-500 mb-3">Year 5 annual run rate: {millions(totals[4])} target</p>
          <div className="grid grid-cols-4 gap-10">
            {streams.map(stream => (
              <div key={stream.title}>
                <p className="text-4xl font-black">{millions(stream.values[4])}</p>
                <p className="text-2xl text-gray-700 mt-2">{stream.title}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-lg text-gray-600 leading-snug">
          Forecasts, not paid-customer actuals. Later years retain deck targets. Subscription counts are not unique people.
          Costs are incomplete; profitability and runway remain unvalidated.
        </p>
        <a href="/research/market-sizing#launch-forecast" target="_blank" rel="noopener noreferrer"
          onClick={event => event.stopPropagation()} onPointerDown={event => event.stopPropagation()}
          className="inline-block mt-3 text-base text-gray-500 underline underline-offset-4 hover:text-black">
          Forecast assumptions and evidence ↗
        </a>
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
