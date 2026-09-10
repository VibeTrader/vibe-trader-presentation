'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = 16;
const ACTIVE = 8;

const ceo = [
  { text: 'Product strategy, partnerships, and fundraising', style: { paddingBottom: '20px' } },
  { text: 'Built broker and academy partnerships', style: { paddingBottom: '20px' } },
  { text: '2,300+ traders · 2 live B2B pilots', style: { paddingBottom: '0px' } },
];

const cto = [
  { text: 'Former Amazon engineer', style: { paddingBottom: '20px' } },
  { text: '15+ years in AI and cloud infrastructure', style: { paddingBottom: '20px' } },
  { text: 'Built VibeTrader\'s AI platform and MT4/MT5 integrations', style: { paddingBottom: '0px' } },
];

const advisor = [
  { text: '50+ years combined Forex experience', style: { paddingBottom: '20px' } },
  { text: 'Built alongside active retail traders', style: { paddingBottom: '20px' } },
  { text: 'Continuous real-market validation', style: { paddingBottom: '0px' } },
];

export default function Slide11() {
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
            className="text-6xl font-black text-black mb-10 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Leadership Team
          </motion.h1>

          {/* 3 Columns Grid for Team Cards */}
          <div className="grid grid-cols-3 gap-8 w-full max-w-[1450px] mb-2">
            {/* CEO Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {/* Photo Image */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '200px', alignSelf: 'center' }}
              >
                <img
                  src="/saranya mam image.jpg"
                  alt="Saranya Amirthalingam"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Saranya Amirthalingam
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Co-Founder & CEO</p>
              <ul className="w-full mt-2">
                {ceo.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTO Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              {/* Photo Image */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '200px', alignSelf: 'center' }}
              >
                <img
                  src="/nithya sir image.jpg"
                  alt="Nithyakumaran Gnanasekar"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-black text-black leading-tight mb-4 whitespace-nowrap">
                Nithyakumaran Gnanasekar
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Co-Founder & CTO</p>
              <ul className="w-full mt-2">
                {cto.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Advisor / Domain Expert Card */}
            <motion.div
              className="border-2 border-gray-200 rounded-lg bg-white group hover:border-black transition-colors flex flex-col"
              style={{ minHeight: '440px', paddingTop: '24px', paddingBottom: '32px', paddingLeft: '32px', paddingRight: '32px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* Visual Placeholder */}
              <div
                className="w-full bg-gray-50 border border-gray-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:border-gray-200 transition-colors shrink-0"
                style={{ height: '200px', width: '200px', alignSelf: 'center' }}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-br from-gray-50 to-gray-100/50">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                    <span>LIVE VIBE SYSTEM</span>
                    <span className="text-emerald-500 font-bold">+18.4%</span>
                  </div>
                  <svg className="w-full h-24 text-emerald-500" viewBox="0 0 100 50" fill="none" preserveAspectRatio="none">
                    <path
                      d="M0,45 Q15,40 30,32 T60,25 T90,8 L100,5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,45 Q15,40 30,32 T60,25 T90,8 L100,5 L100,50 L0,50 Z"
                      fill="url(#chart-grad)"
                      opacity="0.15"
                    />
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest text-center font-bold">
                    MARKET VALIDATION
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Trading Expertise
              </h3>
              <p className="text-xl text-gray-500 font-bold mb-4 mt-2">Forex & Market Validation</p>
              <ul className="w-full mt-2">
                {advisor.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-2xl text-gray-700 font-light leading-relaxed"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3.5 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Simplified Bottom Takeaway */}
          <SlideFooter className="w-full max-w-[1450px] mt-6 mb-6" delay={1.0}>
            Deep AI engineering + real trading experience.
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
