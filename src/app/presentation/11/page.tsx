'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 10;

// Chart data: barH = full bar height in px (out of 120 chart area)
const bars = [
  { year: 'Year 1', revenue: '$0.5M', users: '8K', barH: 22 },
  { year: 'Year 2', revenue: '$1.5M', users: '25K', barH: 44 },
  { year: 'Year 3', revenue: '$4M', users: '60K', barH: 68 },
  { year: 'Year 4', revenue: '$8M', users: '120K', barH: 92 },
  { year: 'Year 5', revenue: '$15M+', users: '200K', barH: 120 },
];

export default function Slide13() {
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
          {/* ── Standard header bar ── */}
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          {/* ── Title ── */}
          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Financials
          </motion.h1>

          {/* ── Subtitle ── */}
          <motion.p
            className="text-3xl text-gray-600 mb-8 font-light max-w-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Bottom-up growth driven by subscriptions and partner distribution.
          </motion.p>

          {/* ── Hero stat ── */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-8xl font-black text-black tracking-tighter leading-none">$15M+</span>
            <span className="block text-base uppercase tracking-widest text-gray-500 mt-2 font-mono font-bold">
              Projected Annual Revenue — Year 5
            </span>
          </motion.div>

          {/* ── Three Metric Cards (horizontal) ── */}
          <div className="flex gap-5 mb-6">
            {[
              { value: '1.8K → 200K', label: 'Registered Users', sub: 'Actual → Year 5 Target', delay: 0.5 },
              { value: '5%', label: 'Base-Case Conversion', sub: '10K Paying Subscribers by Year 5', delay: 0.6 },
              { value: '3', label: 'Revenue Engines', sub: 'Subscriptions · Broker Partnerships · Licensing', delay: 0.7 },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="flex-1 border-2 border-gray-200 rounded-lg bg-white"
                style={{ padding: '0.85rem 1.1rem' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.5 }}
              >
                <p className="font-black text-black leading-tight mb-1 text-4xl">{card.value}</p>
                <p className="uppercase tracking-widest text-gray-400 font-bold mb-0.5 text-xs">{card.label}</p>
                <p className="text-gray-400 font-light text-xs">{card.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* ── Growth Chart — animated area line chart ── */}
          <motion.div
            className="border border-gray-100 rounded-lg bg-gray-50/30 mb-6"
            style={{ padding: '1.5rem 1.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="uppercase tracking-widest text-gray-400 font-bold mb-4 text-xs">
              Projected Annual Revenue Growth
            </p>

            <div className="relative w-full" style={{ height: '185px' }}>
              {/* Gridlines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40" style={{ bottom: '35px', top: '15px' }}>
                <div className="border-b border-dashed border-gray-200 w-full h-0" />
                <div className="border-b border-dashed border-gray-200 w-full h-0" />
                <div className="border-b border-dashed border-gray-200 w-full h-0" />
                <div className="border-b border-dashed border-gray-200 w-full h-0" />
              </div>

              {/* SVG Area & Line Chart */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 185" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.0)" />
                  </linearGradient>
                </defs>

                {/* Filled Area */}
                <motion.path
                  d="M 100 135 L 300 120 L 500 95 L 700 65 L 900 25 L 900 150 L 100 150 Z"
                  fill="url(#chartGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                />

                {/* Line */}
                <motion.path
                  d="M 100 135 L 300 120 L 500 95 L 700 65 L 900 25"
                  fill="none"
                  stroke="black"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
                />

                {/* Dots */}
                {[
                  { x: 100, y: 135 },
                  { x: 300, y: 120 },
                  { x: 500, y: 95 },
                  { x: 700, y: 65 },
                  { x: 900, y: 25 }
                ].map((pt, i) => (
                  <g key={i}>
                    <motion.circle
                      cx={pt.x}
                      cy={pt.y}
                      r="6"
                      fill="white"
                      stroke="black"
                      strokeWidth="3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.1, duration: 0.3 }}
                    />
                  </g>
                ))}
              </svg>

              {/* HTML Labels Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {bars.map((bar, i) => {
                  const xPositions = ['10%', '30%', '50%', '70%', '90%'];
                  const yOffsets = ['105px', '90px', '65px', '35px', '-5px'];
                  return (
                    <div
                      key={i}
                      style={{ position: 'absolute', left: xPositions[i], top: 0, bottom: 0, width: '100px', transform: 'translateX(-50%)' }}
                    >
                      {/* Revenue Text */}
                      <div style={{ position: 'absolute', top: yOffsets[i], left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
                        <span className="font-black text-black text-sm block tracking-tight">
                          {bar.revenue}
                        </span>
                      </div>

                      {/* Year & Users (Fixed at bottom) */}
                      <div style={{ position: 'absolute', bottom: '0px', left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <span className="font-bold text-black text-xs">
                          {bar.year}
                        </span>
                        <span className="text-gray-400 font-medium text-[10px] whitespace-nowrap">
                          {bar.users} users
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>


          {/* ── Bottom Takeaway ── */}
          <SlideFooter className="max-w-7xl" delay={1.1}>
            Base case: 5% paid conversion across subscription tiers, broker partnerships, and platform licensing.
          </SlideFooter>

        </motion.div>
      </div>

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
