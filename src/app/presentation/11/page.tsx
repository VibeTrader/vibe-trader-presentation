'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SocialLinks } from '@/components/SocialLinks';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 10;

export default function Slide12() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-24 overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <GlobeWatermark />

      <motion.div
        className="relative z-10 px-20 w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight">
          The Offer &amp; Our Vision
        </h1>
        <p className="text-3xl text-gray-600 font-light mb-12">
          Join us in building the intelligence layer for global retail trading.
        </p>

        <div className="grid grid-cols-2 gap-12">
          <motion.section
            aria-label="Investment offer"
            className="flex h-120 flex-col rounded-xl bg-black p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="self-start bg-white px-3 py-1 font-mono text-lg font-bold uppercase tracking-[0.2em] text-black">
              Investment offer
            </span>
            <p className="flex flex-1 items-center text-[132px] font-black leading-none tracking-tight text-white">
              $1M SAFE
            </p>
          </motion.section>

          <motion.section
            aria-labelledby="vision-heading"
            className="flex h-120 flex-col rounded-xl border-2 border-gray-200 bg-white p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="self-start bg-black px-3 py-1 font-mono text-lg font-bold uppercase tracking-[0.2em] text-white">
              Vision
            </span>
            <p id="vision-heading" className="flex flex-1 items-center text-[44px] font-black leading-tight tracking-tight text-black">
              Give everyone the financial intelligence to move forward—and, in doing so, move the global economy forward.
            </p>
          </motion.section>
        </div>

        <motion.div
          className="mt-8 flex items-center justify-between rounded-xl border-2 border-gray-200 bg-gray-50 px-8 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-2xl">
            <span className="font-black text-black">Saranya Amirthalingam</span>
            <span className="text-gray-500 font-light"> · CEO, VibeTrader</span>
          </p>
          <div className="flex items-center gap-8">
            <SocialLinks size={30} />
            <div className="h-8 w-px bg-gray-300" />
            <a
              href="https://vibetrader.com"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-2xl font-bold text-black hover:underline"
            >
              vibetrader.com
            </a>
            <a
              href="https://vibetrader.com"
              onClick={(e) => e.stopPropagation()}
              aria-label="QR code: scan to open vibetrader.com"
              className="block shrink-0 bg-white p-1.5 border border-gray-200"
            >
              <img src="/qr-vibetrader.svg" alt="QR code linking to vibetrader.com" className="h-24 w-24" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <div key={i} className={`h-2 rounded-full ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Previous slide"
      >←</button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors z-20"
        aria-label="Next slide: FAQ"
      >→</button>
    </div>
  );
}
