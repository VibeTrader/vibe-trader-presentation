'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const SWIPE_THRESHOLD = 30;

export function SwipeHandler({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const match = pathname.match(/\/presentation\/(\d+)/);
    if (match) {
      setCurrentSlide(parseInt(match[1], 10));
    }
  }, [pathname]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && currentSlide < TOTAL_SLIDES) {
      router.push(`/presentation/${currentSlide + 1}`);
    } else if (direction === 'right' && currentSlide > 1) {
      router.push(`/presentation/${currentSlide - 1}`);
    }
  };

  return (
    <motion.div
      className="h-full w-full"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragEnd={(_, info) => {
        if (info.offset.x < -SWIPE_THRESHOLD) {
          handleSwipe('left');
        } else if (info.offset.x > SWIPE_THRESHOLD) {
          handleSwipe('right');
        }
      }}
      whileDrag={{ cursor: 'grabbing' }}
      style={{ touchAction: 'pan-y' }}
    >
      {children}
    </motion.div>
  );
}