'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { Users, Activity, Megaphone, Handshake } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 3;

const metrics = [
  {
    icon: Users,
    value: '2,300+',
    label: 'Registered traders',
    detail: 'Signed up to the platform.',
  },
  {
    icon: Activity,
    value: '20',
    label: 'Live accounts',
    detail: 'Trading accounts running our strategies around the globe.',
  },
  {
    icon: Megaphone,
    value: '5',
    label: 'Community leaders',
    detail: 'Onboarded. Each is bringing 100+ paid strategy subscribers in the coming weeks.',
  },
  {
    icon: Handshake,
    value: '1',
    label: 'Broker partnership',
    detail: 'Active with Dupoin. Onboarding its traders now.',
  },
];

export default function Slide4() {
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
            Traction
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light max-w-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Traders are signing up, strategies are live, and partners are bringing paying subscribers.
          </motion.p>

          <div className="grid grid-cols-4 gap-6 mb-10">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  className="border-2 border-gray-200 hover:border-black transition-colors p-8 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                >
                  <div className="w-14 h-14 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-7xl font-black text-black mb-3 leading-none tracking-tighter">{m.value}</p>
                  <p className="text-lg uppercase tracking-widest text-gray-500 mb-3">{m.label}</p>
                  <p className="text-xl text-gray-700 font-light leading-snug">{m.detail}</p>
                </motion.div>
              );
            })}
          </div>

          <SlideFooter
            className="w-full"
            eyebrow="How we grow"
            items={[
              'Direct: product-led sign-ups',
              'Communities: 500+ paid subscribers in onboarding',
              'Brokers: Dupoin live, more to follow',
            ]}
            delay={1.0}
          />
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
