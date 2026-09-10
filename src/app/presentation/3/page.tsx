'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 2;

export default function Slide3() {
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From Trading Ideas to Informed Action
          </motion.h1>

          <div className="flex items-center gap-16 mt-10 mb-10">
            <div className="flex-1 space-y-16">
            {[
              {
                label: 'Build and test',
                description: 'Turning a trading idea into something you can test and deploy requires technical work.',
                dir: -1,
              },
              {
                label: 'Understand the market',
                description: 'Charts and news provide information, but interpreting what matters takes time.',
                dir: 1,
              },
            ].map((group) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, x: 20 * group.dir }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-black mb-8">
                  {group.label}
                </h2>
                <p className="text-2xl text-gray-800 font-light leading-relaxed">
                  {group.description}
                </p>
              </motion.div>
            ))}
            </div>
            <motion.div
              className="w-[1100px] shrink-0 aspect-video overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/slide_2_V2.mp4"
                className="w-full h-full object-contain"
                aria-label="VibeTrader strategy building and trading insights video"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </div>

          <motion.div
            className="bg-black text-white p-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              VibeTrader combines <span className="font-bold">AI-powered strategy building</span> with <span className="font-bold">AI insights for trading.</span>
            </p>
          </motion.div>
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
