'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { PresentationScaleWrapper } from '@/components/PresentationScaleWrapper';

// Dynamically import Globe component (requires browser window)
const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => (
    <div className="w-[600px] h-[600px] flex items-center justify-center">
      <div className="text-gray-400">Loading globe...</div>
    </div>
  ),
});

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/presentation/1');
  };

  return (
    <PresentationScaleWrapper>
      <div className="relative flex h-full w-full items-center overflow-hidden bg-white">
        {/* Subtle dot pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Left side - Content */}
        <motion.div 
          className="relative z-10 w-1/2 px-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Small accent line */}
        <motion.div 
          className="w-12 h-1 bg-black mb-8"
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        
        {/* Title */}
        <motion.h1 
          className="mb-8 text-9xl font-black text-black leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Vibe<br />Trader
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="mb-12 text-3xl text-gray-700 max-w-2xl font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Modernizing Global<br />FOREX Trading
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Button
            onClick={handleButtonClick}
            size="lg"
            style={{ fontSize: '2.25rem', padding: '2.5rem 4rem', fontWeight: 'bold' }}
            className="group bg-black text-white hover:bg-gray-800 rounded-none transition-all duration-300"
          >
            View Pitch Deck
            <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-1" />
          </Button>
          
          {/* Professional messaging */}
          <p className="mt-6 font-semibold text-gray-600" style={{ fontSize: '1.875rem' }}>
            Investor pitch deck
          </p>
        </motion.div>

        {/* Vision points */}
        <motion.div 
          className="mt-16 flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div>
            <p className="text-3xl font-bold text-black">AI-Powered</p>
            <p className="text-sm text-gray-500">Intelligence</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black">Social</p>
            <p className="text-sm text-gray-500">Trading</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-black">Global</p>
            <p className="text-sm text-gray-500">Markets</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Globe */}
      <motion.div 
        className="relative w-1/2 h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Globe />
      </motion.div>
    </div>
    </PresentationScaleWrapper>
  );
}