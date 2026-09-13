'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SlideFooterProps = {
  /** Uppercase label set inline before the copy, so the bar stays one line tall. */
  eyebrow?: string;
  /** Show the VibeTrader wordmark and divider on the left. */
  brand?: boolean;
  /** Renders as a row of square-bulleted items instead of a paragraph. */
  items?: string[];
  /** Spread items edge to edge rather than packing them left. */
  spread?: boolean;
  /** Paragraph copy. Ignored when `items` is given. */
  children?: ReactNode;
  /** Width constraint for the slide this sits on, e.g. "max-w-7xl". */
  className?: string;
  delay?: number;
};

/**
 * The black takeaway bar that closes most slides. One component so padding,
 * type scale and animation stay identical across the deck; slides pass only
 * their own width constraint.
 */
export function SlideFooter({
  eyebrow,
  brand = false,
  items,
  spread = false,
  children,
  className = 'max-w-7xl',
  delay = 1.0,
}: SlideFooterProps) {
  const body = items ? (
    <div
      className={`flex flex-wrap items-center gap-y-3 text-xl font-light leading-snug ${
        spread ? 'justify-between' : 'gap-x-8'
      }`}
    >
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 shrink-0 bg-white" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  ) : (
    <p className={`${brand ? 'text-xl' : 'text-2xl'} font-light leading-snug`}>{children}</p>
  );

  return (
    <motion.div
      className={`bg-black text-white px-9 py-7 ${brand ? 'flex items-center gap-9' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {brand && (
        <>
          <p className="text-4xl font-black tracking-tighter shrink-0">VibeTrader</p>
          <div className="h-14 w-px bg-gray-700 shrink-0" />
        </>
      )}
      <div className={`${brand ? 'min-w-0 ' : ''}${eyebrow ? 'flex items-baseline gap-6' : ''}`}>
        {eyebrow && (
          <p className="shrink-0 text-sm uppercase tracking-widest text-gray-400 font-semibold">{eyebrow}</p>
        )}
        {body}
      </div>
    </motion.div>
  );
}
