'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { Users, Activity, Megaphone, Handshake, Building2 } from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { SlideFooter } from '@/components/SlideFooter';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 3;

// Grouped so live results, the paid conversion and the pipeline are never read as one number.
const groups = [
  {
    label: 'Live now',
    metrics: [
      {
        icon: Users,
        value: '2,300+',
        label: 'Registered traders',
        detail: 'Acquired on about $3/day of ad spend.',
      },
      {
        icon: Handshake,
        value: '1',
        label: 'Broker partnership',
        detail: 'Live with Dupoin. Onboarding its traders now.',
      },
    ],
  },
  {
    label: 'Converting to paid in October',
    metrics: [
      {
        icon: Activity,
        value: '20',
        label: 'Beta strategy accounts',
        detail: 'Running our strategies live. Falcon pricing is $100–$2,500/month by risk tier.',
      },
    ],
  },
  {
    label: 'Pipeline',
    metrics: [
      {
        icon: Megaphone,
        value: '500+',
        label: 'Subscribers in onboarding',
        detail: 'Through referral partners paid on commission: 5 community leaders and Trading LATAM (academy).',
      },
      {
        icon: Building2,
        value: '7+',
        label: 'Broker opportunities',
        detail: 'In active discussion across multiple markets.',
      },
    ],
  },
];

export default function Slide4() {
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
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Traction
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-600 mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            2,300+ traders on $3/day of ad spend. Beta strategy accounts start paying in October.
          </motion.p>

          <div className="grid grid-cols-3 gap-8 mb-10">
            {groups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + gi * 0.15, duration: 0.5 }}
              >
                <p className="text-lg uppercase tracking-[0.2em] text-gray-500 font-semibold border-b-2 border-black pb-3 mb-5">
                  {group.label}
                </p>
                <div className="space-y-5">
                  {group.metrics.map((m) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.label}
                        className="flex gap-6 border-2 border-gray-200 hover:border-black transition-colors p-6 group"
                      >
                        <div className="w-14 h-14 shrink-0 bg-black text-white flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-6xl font-black text-black mb-2 leading-none tracking-tighter">{m.value}</p>
                          <p className="text-lg uppercase tracking-widest text-gray-500 mb-2">{m.label}</p>
                          <p className="text-xl text-gray-700 font-light leading-snug">{m.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <SlideFooter
            className="w-full"
            eyebrow="How we grow"
            items={[
              'Direct: low-cost sign-ups prove demand',
              'Communities: 100+ subscribers each',
              'Brokers: 20K–200K traders each',
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
