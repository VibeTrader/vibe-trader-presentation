'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 13;

export default function Slide17() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white"
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
            FAQ: How Is VibeTrader Different?
          </motion.h1>

          <div className="flex items-center gap-16 mt-16">
            <ul className="flex-1 list-disc pl-8 space-y-10 text-2xl text-gray-700 leading-relaxed marker:text-black">
              {[
                {
                  title: 'Ready to test',
                  description: 'A built-in trading environment to test strategies immediately.',
                },
                {
                  title: 'Rules + AI',
                  description: 'Combine fixed trading rules with AI-powered decisions.',
                },
                {
                  title: 'Event-driven trading',
                  description: 'Build strategies that react to celebrity tweets, breaking news, and economic calendar events.',
                },
              ].map((feature, i) => (
                <motion.li
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <span className="font-bold text-black">{feature.title}:</span>{' '}
                  <span className="font-light">{feature.description}</span>
                </motion.li>
              ))}
            </ul>
          <motion.div
            className="relative w-[1000px] shrink-0 aspect-video overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <Image
              src="/event-workflow.png"
              alt="Illustrative event-driven trading workflow: an event passes through AI and fixed rules before a trade."
              fill
              sizes="1000px"
              className="object-contain"
              priority
            />
          </motion.div>
          </div>

        </motion.div>
      </div>

      <Link
        href="/presentation/13"
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-8 left-20 z-30 text-xl underline underline-offset-4"
      >Back to FAQ</Link>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${
              i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'
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
      <button onClick={nextSlide} aria-label="Next slide: Demo"
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black z-20">→</button>
    </div>
  );
}
