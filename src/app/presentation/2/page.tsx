'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 1;

const traderProblems = [
  'Verify whether a strategy’s claims hold up',
  'Know which strategy fits current markets',
  'Understand the risk before trading',
];

export default function Slide2() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-24 overflow-hidden bg-white"
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
            className="text-5xl font-black text-black mb-6 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Traders pay for an edge—but struggle to know what to trust
          </motion.h1>

          <div className="mt-10 flex items-center gap-12">
            <motion.div
              className="w-250 shrink-0 aspect-video overflow-hidden relative"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/slide%201_V3.mp4"
                className="w-full h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
            <motion.div
              className="flex-1 min-w-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-black mb-8 leading-[1.25]">
                Tools, courses, and strategies are widely available.
              </h2>
              <p className="mb-6 text-2xl text-gray-600 font-light">Traders still struggle to:</p>
              <ul className="list-disc pl-6 space-y-7 text-3xl text-gray-700 font-light leading-[1.45] marker:text-gray-400">
                {traderProblems.map((problem) => (
                  <li key={problem} className="pl-2">{problem}</li>
                ))}
              </ul>

            </motion.div>
          </div>

          <motion.div
            className="mt-8 grid grid-cols-3 gap-12 border-t-2 border-black pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div>
              <p className="text-6xl font-black tracking-tighter text-black">69–76%</p>
              <p className="mt-3 text-2xl text-gray-700 font-light leading-snug">
                of retail CFD accounts lose money at IG, Pepperstone and Plus500.¹
              </p>
              <p className="mt-2 text-lg text-gray-500">Broker disclosures · September 18, 2026</p>
            </div>
            <div>
              <p className="text-6xl font-black tracking-tighter text-black">300K</p>
              <p className="mt-3 text-2xl text-gray-700 font-light leading-snug">
                paying subscribers at Investing.com for financial information and tools.
              </p>
              <a
                href="https://www.investing.com/about-us/index/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => event.stopPropagation()}
                className="mt-2 inline-block text-lg text-gray-500 underline underline-offset-4 hover:text-black"
              >Company-reported subscribers ↗</a>
            </div>
            <div>
              <p className="text-6xl font-black tracking-tighter text-black">$1.2B</p>
              <p className="mt-3 text-2xl text-gray-700 font-light leading-snug">
                investment-training and business-venture scheme: IM Mastery, per FTC.
              </p>
              <a
                href="https://www.ftc.gov/legal-library/browse/cases-proceedings/im-mastery"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => event.stopPropagation()}
                className="mt-2 inline-block text-lg text-gray-500 underline underline-offset-4 hover:text-black"
              >FTC case and settlements, 2025–26 ↗</a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="/research/trader-challenges"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Broker disclosures and supporting sources (opens in a new tab)"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        className="absolute bottom-24 right-20 z-20 text-base leading-normal text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <sup className="mr-1 text-xs">1</sup> Broker disclosures &amp; sources
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
