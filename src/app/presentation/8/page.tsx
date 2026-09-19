'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 7;

const ceo = [
  { text: 'Took over the family textile business in India after her father’s sudden death', style: { paddingBottom: '14px' } },
  { text: 'Ran tight, profitable operations', style: { paddingBottom: '14px' } },
  { text: 'Leads growth and partners: 2,300+ traders, live broker partner', style: { paddingBottom: '0px' } },
];

const cto = [
  { text: '15+ years in AI and software, from neural networks to LLMs', style: { paddingBottom: '14px' } },
  { text: 'Former Amazon & AWS engineer', style: { paddingBottom: '14px' } },
  { text: 'Built VibeTrader\'s AI platform and MT4/MT5 integrations', style: { paddingBottom: '0px' } },
];

const advisor = [
  { text: '2 founders in the US; 10 contract engineers and traders in India', style: { paddingBottom: '14px' } },
  { text: 'Traders from Gen Z to Gen X, with 50+ years of combined experience', style: { paddingBottom: '14px' } },
  { text: 'Both founders have traded for 10+ years', style: { paddingBottom: '0px' } },
];

export default function Slide11() {
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
            className="text-6xl font-black text-black mb-10 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Leadership Team
          </motion.h1>

          {/* 3 Columns Grid for Team Cards */}
          <div className="grid grid-cols-3 gap-8 w-full mb-2">
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
                style={{ height: '170px', width: '170px', alignSelf: 'center' }}
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
              <p className="text-2xl text-gray-500 font-bold mt-2">Co-Founder & CEO</p>
              <div className="flex items-center h-14 mt-3 mb-2">
                <img src="/logos/penn-state.svg" alt="Penn State" className="h-5 w-auto" />
              </div>
              <ul className="w-full mt-2">
                {ceo.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-[26px] text-gray-700 font-light leading-snug"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
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
                style={{ height: '170px', width: '170px', alignSelf: 'center' }}
              >
                <img
                  src="/nithya sir image.jpg"
                  alt="Nithyakumaran Gnanasekar"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Nithyakumaran Gnanasekar
              </h3>
              <p className="text-2xl text-gray-500 font-bold mt-2">Co-Founder & CTO</p>
              <div className="flex items-center h-14 mt-3 mb-2">
                <img src="/logos/university-of-cincinnati.png" alt="University of Cincinnati" className="h-14 w-auto" />
              </div>
              <ul className="w-full mt-2">
                {cto.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-[26px] text-gray-700 font-light leading-snug"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
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
              {/* Stat tile */}
              <div
                className="bg-black text-white rounded-xl mb-4 flex flex-col items-center justify-center shrink-0"
                style={{ height: '170px', width: '170px', alignSelf: 'center' }}
              >
                <p className="text-7xl font-black tracking-tighter leading-none">12</p>
                <p className="text-lg mt-2 text-gray-300">people</p>
              </div>

              <h3 className="text-3xl font-black text-black leading-tight mb-4">
                Team of 12
              </h3>
              <p className="text-2xl text-gray-500 font-bold mb-4 mt-2">Engineers + traders</p>
              <ul className="w-full mt-2">
                {advisor.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-[26px] text-gray-700 font-light leading-snug"
                    style={item.style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  >
                    <span className="mt-3 inline-block h-2.5 w-2.5 shrink-0 bg-black" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Simplified Bottom Takeaway */}
          <SlideFooter className="w-full mt-6" delay={1.0}>
            An operator who runs profitable businesses and an engineer who built at Amazon scale, with a team of engineers and traders behind them.
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
