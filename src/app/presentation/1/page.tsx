'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading globe...</div>
    </div>
  ),
});

const TOTAL_SLIDES = 18;

export default function Slide1() {
  const { nextSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <motion.div
        className="relative z-10 w-1/2 px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="w-16 h-1.5 bg-black mb-10"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        <motion.h1
          className="mb-6 text-8xl font-black text-black leading-[0.95] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          VibeTrader
        </motion.h1>

        <motion.p
          className="mb-4 text-3xl text-gray-700 font-light leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          AI Decision Intelligence for Traders
        </motion.p>

        <motion.p
          className="mb-12 text-2xl text-gray-500 font-light italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Helping traders make smarter decisions through intelligence that continuously learns and adapts.
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-xl uppercase tracking-[0.3em] text-gray-500 mb-3">Presented by</p>
          <p className="text-2xl text-gray-800 font-light">
            Saranya Amirthalingam <span className="text-gray-400">·</span> CEO
          </p>
          <p className="text-xl text-gray-500 font-light">VibeTrader, Inc.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <Button
            onClick={nextSlide}
            size="lg"
            className="group bg-black text-white hover:bg-gray-800 text-2xl px-14 py-9 rounded-none font-medium transition-all duration-300"
          >
            Begin
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-1/2 h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Globe />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === 0 ? 'w-8 bg-black' : 'w-2 bg-gray-300'
              } rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
        ))}
      </div>
    </div>
  );
}
