'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { ArrowRight, Bot, GraduationCap, Trophy, User } from 'lucide-react';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 1;

const edgeSpending = [
  { Icon: GraduationCap, label: 'Courses', stat: '$1.2B', text: 'into one fake trading academy', source: 'FTC, 2026' },
  { Icon: Bot, label: 'Signals & bots', stat: '$1.7B', text: 'lost to a fake forex “AI\u00a0bot”', source: 'CFTC, 2023' },
  { Icon: Trophy, label: 'Prop challenges', stat: '93%', text: 'of buyers never get paid', source: 'FPFX data, 2024' },
];

const traderQuestions = [
  'Will this strategy work?',
  'Is it still working in today’s market?',
  'Can I trust this signal, bot or AI?',
];

const LOSING_TRADERS = 7;

function StepArrow({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex shrink-0 items-center self-center text-gray-300"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      <ArrowRight className="h-12 w-12" strokeWidth={1.5} />
    </motion.div>
  );
}

export default function Slide2() {
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
            Traders can’t tell which strategies actually work
          </motion.h1>

          <motion.p
            className="text-3xl text-gray-700 font-light leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            So they pay for promises, not tested results, and most still lose.
          </motion.p>

          <div className="mt-16 flex items-stretch gap-6">
            <motion.div
              className="flex w-96 shrink-0 flex-col justify-center border-2 border-black px-8 py-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="mb-6 text-lg uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap">Traders can’t answer</p>
              <ul className="space-y-5">
                {traderQuestions.map((question) => (
                  <li key={question} className="border-l-2 border-black pl-4 text-2xl font-semibold text-black leading-snug">
                    {question}
                  </li>
                ))}
              </ul>
            </motion.div>

            <StepArrow delay={0.9} />

            <motion.div
              className="flex min-w-0 flex-1 flex-col bg-gray-50 px-10 py-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.2em] text-gray-500 mb-6">
                What they already pay for
                <sup className="ml-1 text-xs">1</sup>
              </p>
              <div className="grid flex-1 grid-cols-3 gap-8">
                {edgeSpending.map(({ Icon, label, stat, text, source }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
                  >
                    <div className="mb-4 flex items-center gap-3 text-black">
                      <Icon className="h-9 w-9" strokeWidth={1.5} />
                      <span className="text-xl font-semibold">{label}</span>
                    </div>
                    <p className="text-6xl font-black tracking-tighter text-black leading-none mb-3">{stat}</p>
                    <p className="text-2xl text-gray-700 font-light leading-snug">{text}</p>
                    <p className="mt-auto pt-4 text-base text-gray-400">{source}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <StepArrow delay={1.6} />

            <motion.div
              className="flex w-88 shrink-0 flex-col items-center justify-center bg-black px-8 py-10 text-center text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
            >
              <p className="text-lg uppercase tracking-[0.2em] text-gray-400 mb-6">The result</p>
              <div className="mb-6 grid grid-cols-5 gap-x-3 gap-y-4" aria-hidden="true">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.9 + i * 0.05, duration: 0.3 }}
                  >
                    <User
                      className={`h-11 w-11 ${i < LOSING_TRADERS ? 'text-white' : 'text-gray-600'}`}
                      strokeWidth={i < LOSING_TRADERS ? 2.5 : 1.5}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-5xl font-black tracking-tighter leading-none mb-2">
                7 in 10
                <sup className="ml-1 text-base font-normal text-gray-400">1</sup>
              </p>
              <p className="text-2xl font-light text-gray-300">retail traders lose money</p>
            </motion.div>
          </div>

          <motion.div
            className="mt-14 flex items-baseline gap-6 border-l-4 border-black pl-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
          >
            <p className="text-3xl font-bold tracking-tight text-black whitespace-nowrap">
              Our customers: retail traders, who subscribe directly.
            </p>
            <p className="text-3xl text-gray-700 font-light">
              Brokers, IBs &amp; academies bring them to us on commission.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="/research/trader-challenges"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Supporting research and sources (opens in a new tab)"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={(event) => event.stopPropagation()}
        className="absolute bottom-24 right-20 z-20 text-base leading-normal text-gray-500 underline decoration-gray-300 underline-offset-4 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <sup className="mr-1 text-xs">1</sup> Supporting research &amp; sources
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
