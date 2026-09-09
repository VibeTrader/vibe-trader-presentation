'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlobeWatermark } from '@/components/GlobeWatermark';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function Slide16() {
  const { prevSlide, nextSlide, totalSlides } = useSlideNavigation();
  return (
    <div className="relative h-full w-full overflow-hidden bg-white px-20 pt-36">
      <GlobeWatermark />
      <motion.div className="relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="w-16 h-1.5 bg-black mb-6" />
        <h1 className="text-6xl font-black tracking-tighter mb-20">FAQ</h1>
        <ul className="space-y-12 text-4xl font-light">
          <li><a href="/research/trader-challenges" target="_blank" rel="noopener noreferrer" onPointerDown={(event) => event.stopPropagation()} className="underline underline-offset-8 decoration-gray-300 hover:decoration-black">What research supports these trader challenges?</a></li>
          <li><Link href="/presentation/17" className="underline underline-offset-8 decoration-gray-300 hover:decoration-black">How is VibeTrader different from other strategy builders?</Link></li>
          <li><Link href="/presentation/18" className="underline underline-offset-8 decoration-gray-300 hover:decoration-black">Can we see the product in action?</Link></li>
        </ul>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div key={i} className={`h-2 rounded-full ${i === 15 ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>
      <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-8 top-1/2 p-2 text-gray-400 hover:text-black">←</button>
      <button onClick={nextSlide} aria-label="Next slide" className="absolute right-8 top-1/2 p-2 text-gray-400 hover:text-black">→</button>
    </div>
  );
}
