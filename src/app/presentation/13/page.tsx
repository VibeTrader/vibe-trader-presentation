'use client';

import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = 16;
const ACTIVE = 12;

const contacts = [
  {
    icon: '👤',
    label: 'Saranya Amirthalingam',
    sub: 'Co-Founder & CEO, VibeTrader',
  },
  {
    icon: '✉',
    label: 'saranya@vibetrader.com',
    sub: 'Reach out directly',
    href: 'mailto:saranya@vibetrader.com',
  },
  {
    icon: '🌐',
    label: 'vibetrader.com',
    sub: 'Product & Demo',
    href: 'https://vibetrader.com',
  },
];

export default function Slide15() {
  const { prevSlide, nextSlide } = useSlideNavigation();

  return (
    <div className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white">
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
          {/* Standard header bar */}
          <motion.div
            className="w-16 h-1.5 bg-black mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />

          {/* Title */}
          <motion.h1
            className="text-6xl font-black text-black mb-3 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let&apos;s Build This Together.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-3xl text-gray-600 mb-16 font-light max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Trading platforms helped traders execute. VibeTrader helps traders{' '}
            <span className="italic text-black font-medium">decide.</span>
          </motion.p>

          {/* Contact cards + QR side by side */}
          <div className="flex gap-10 items-stretch mb-10 w-full max-w-[1550px]">
            {/* Left: Contact details (Heights match QR code card via flex-1 stretching) */}
            <div className="flex flex-col gap-4 max-w-7xl w-full flex-1">
              {contacts.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-colors group bg-white flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                >
                  <span className="text-3xl flex-shrink-0">{c.icon}</span>
                  <div>
                    {c.href ? (
                      <a
                        href={c.href}
                        onClick={(e) => e.stopPropagation()}
                        className="font-black text-black text-2xl tracking-tight group-hover:underline"
                      >
                        {c.label}
                      </a>
                    ) : (
                      <p className="font-black text-black text-2xl tracking-tight">{c.label}</p>
                    )}
                    <p className="text-gray-400 text-sm font-light mt-0.5">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: QR code card (Vertically aligned) */}
            <motion.div
              className="flex-shrink-0 flex flex-col items-center justify-between gap-4 bg-white p-8 border-2 border-gray-200 rounded-lg w-[320px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {/* QR code — Real scannable QR Code for https://vibetrader.com */}
              <div className="flex items-center justify-center flex-1">
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 33 33"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="crispEdges"
                >
                  <path fill="#ffffff" d="M0 0h33v33H0z"/>
                  <path
                    stroke="#000000"
                    d="M4 4.5h7m2 0h1m2 0h1m1 0h1m1 0h1m1 0h7M4 5.5h1m5 0h1m3 0h4m1 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h3m4 0h2m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m4 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h3m2 0h3m2 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h4m3 0h2M4 12.5h1m1 0h5m4 0h5m2 0h5M4 13.5h2m1 0h2m2 0h1m2 0h2m4 0h1m2 0h1m3 0h1M5 14.5h2m2 0h2m2 0h3m1 0h1m1 0h2m3 0h2m1 0h2M4 15.5h1m6 0h5m2 0h2m1 0h3m4 0h1M5 16.5h1m1 0h1m1 0h2m1 0h2m1 0h1m1 0h3m1 0h4m1 0h3M4 17.5h3m4 0h1m2 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h1M4 18.5h1m2 0h8m2 0h3m2 0h4m1 0h2M4 19.5h1m3 0h2m1 0h4m1 0h1m1 0h1m4 0h2m3 0h1M4 20.5h1m5 0h1m2 0h1m2 0h9m1 0h1M12 21.5h1m4 0h1m2 0h1m3 0h2M4 22.5h7m3 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3M4 23.5h1m5 0h1m1 0h4m2 0h1m1 0h1m3 0h2M4 24.5h1m1 0h3m1 0h1m1 0h4m3 0h6m1 0h3M4 25.5h1m1 0h3m1 0h1m1 0h3m1 0h2m1 0h1m1 0h2m1 0h5M4 26.5h1m1 0h3m1 0h1m1 0h3m2 0h2m6 0h2m1 0h1M4 27.5h1m5 0h1m5 0h2m2 0h6m2 0h1M4 28.5h7m1 0h2m2 0h1m1 0h1m2 0h8"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-400 font-medium uppercase tracking-widest text-center mt-2">
                Scan to visit<br />vibetrader.com
              </p>
            </motion.div>
          </div>

          {/* Bottom Takeaway — standard style matching all other slides */}
          <motion.div
            className="bg-black text-white p-8 max-w-7xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <p className="text-2xl font-light leading-snug">
              The <span className="font-bold text-white">AI decision intelligence layer</span> for trading.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <motion.div
            key={i + 1}
            className={`h-2 transition-all duration-300 ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'} rounded-full`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.03 }}
          />
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
