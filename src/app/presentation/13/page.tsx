'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { GlobeWatermark } from '@/components/GlobeWatermark';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 12;

// Placeholder while the deck is rebuilt; replaced by the closing slide.
export default function Slide13() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div
      className="relative flex h-full w-full items-start pt-36 overflow-hidden bg-white"
      onClick={nextSlide}
    >
      <GlobeWatermark />

      <div className="relative z-10 px-20 w-full">
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black text-black mb-6 tracking-tighter leading-tight">
          Slide in progress
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2 z-20">
        {[...Array(TOTAL_SLIDES)].map((_, i) => (
          <div
            key={i + 1}
            className={`h-2 rounded-full ${i === ACTIVE ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`}
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
