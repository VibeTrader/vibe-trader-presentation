'use client';

import { PRESENTATION_CONFIG } from '@/config/presentation';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

const TOTAL_SLIDES = PRESENTATION_CONFIG.lastSlide;
const ACTIVE = 9;

const priorities = [
  { title: 'Product', body: 'AI intelligence, mobile, security' },
  { title: 'Growth', body: 'Brokers, academies, affiliates' },
  { title: 'Team', body: 'Engineering, sales, customer success' },
];

export default function Slide10() {
  const { nextSlide, prevSlide } = useSlideNavigation();

  return (
    <div className="relative h-full w-full overflow-hidden bg-white text-black" onClick={nextSlide}>
      <h1 className="absolute left-[54px] top-[60px] text-[104px] font-black tracking-tighter leading-none">
        Why Invest Now
      </h1>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        aria-label="Evidence supports the raise, which funds product, growth and team toward target outcomes"
      >
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 1920 1080">
          <defs>
            <marker id="investment-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill="black" />
            </marker>
          </defs>
          <g fill="none" stroke="black" strokeWidth="3.5" strokeLinejoin="round">
            <path d="M 450 424 H 498 Q 510 424 510 436 V 784 Q 510 796 498 796 H 450 M 450 606 H 510" />
            <path d="M 510 606 H 570" markerEnd="url(#investment-flow-arrow)" />
            <path d="M 894 606 H 950 M 950 424 V 796" />
            <path d="M 950 424 H 1007" markerEnd="url(#investment-flow-arrow)" />
            <path d="M 950 606 H 1007" markerEnd="url(#investment-flow-arrow)" />
            <path d="M 950 796 H 1007" markerEnd="url(#investment-flow-arrow)" />
            <path d="M 1368 424 H 1400 Q 1412 424 1412 436 V 784 Q 1412 796 1400 796 H 1368 M 1368 606 H 1412" />
            <path d="M 1412 606 H 1477" markerEnd="url(#investment-flow-arrow)" />
          </g>
        </svg>

        <section aria-labelledby="evidence-heading" className="absolute left-[54px] top-[250px] w-[396px]">
          <h2 id="evidence-heading" className="text-[42px] font-black tracking-tight border-b-2 border-gray-400 pb-4 mb-7">Evidence today</h2>
          <div className="h-[188px] border-[3px] border-gray-400 rounded-xl px-6 py-5 mb-6">
            <h3 className="text-[30px] font-bold leading-tight mb-2">Demand for ready-made strategies</h3>
            <p className="text-[27px] text-gray-700 leading-tight">Stronger than demand for the app alone</p>
          </div>
          <div className="h-[148px] border-[3px] border-gray-400 rounded-xl px-6 flex items-center mb-6">
            <Link href="/presentation/16" onClick={(event) => event.stopPropagation()} onPointerDown={(event) => event.stopPropagation()} className="block underline decoration-gray-300 underline-offset-4 hover:decoration-black"><h3 className="text-[32px] font-bold leading-tight">8–9 months<br />profitable live results</h3><span className="text-lg text-gray-600">View Falcon results · Slide 16 →</span></Link>
          </div>
          <div className="h-[148px] border-[3px] border-gray-400 rounded-xl px-6 py-6">
            <h3 className="text-[31px] font-bold leading-tight mb-2">$100–$2,500/month</h3>
            <p className="text-[27px] text-gray-700 leading-tight">Falcon pricing by risk tier</p>
          </div>
        </section>

        <section aria-label="Investment ask" className="absolute left-[580px] top-[498px] w-[314px] h-[204px] rounded-2xl bg-black text-white flex flex-col items-center justify-center">
          <h2 className="text-[94px] font-black tracking-tight leading-none">$1M</h2>
          <p className="text-[36px] font-bold mt-2">Pre-seed raise</p>
        </section>

        <section aria-labelledby="priorities-heading" className="absolute left-[1014px] top-[250px] w-[354px]">
          <h2 id="priorities-heading" className="text-[42px] font-black tracking-tight border-b-2 border-gray-400 pb-4 mb-7">What we build</h2>
          <div className="space-y-7">
            {priorities.map((priority) => (
              <div key={priority.title} className="h-[162px] border-[3px] border-gray-400 rounded-xl px-6 py-5">
                <h3 className="text-[36px] font-bold leading-tight mb-2">{priority.title}</h3>
                <p className="text-[27px] text-gray-700 leading-tight">{priority.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="outcomes-heading" className="absolute left-[1484px] top-[250px] w-[384px]">
          <h2 id="outcomes-heading" className="text-[42px] font-black tracking-tight border-b-2 border-gray-400 pb-4">Target outcomes</h2>
          <div className="mt-[94px] h-[380px] border-[3px] border-gray-400 rounded-xl px-8 py-10 flex flex-col justify-between text-[34px] font-bold leading-tight">
            <p className="text-[30px] whitespace-nowrap">5,000+ active users</p>
            <p>Commercial broker partnerships</p>
            <p>Recurring revenue growth</p>
          </div>
        </section>
      </motion.div>

      <p className="absolute left-[54px] bottom-[88px] text-[20px] text-gray-700">
        Past performance does not guarantee future results.
      </p>

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
