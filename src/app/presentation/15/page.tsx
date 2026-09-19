'use client';

import Link from 'next/link';
import { monthlyResults, myfxbookUrl } from '@/data/trading-results';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';

export default function TradingResultsSlide() {
  const { totalSlides, prevSlide, nextSlide } = useSlideNavigation();
  return (
    <div className="relative h-full w-full bg-white px-20 pt-16 text-black overflow-hidden">
      
      <h1 className="text-[88px] font-black tracking-tighter leading-none">Falcon</h1>
      <p className="text-4xl text-gray-600 mt-3">Live trading results</p>

      <div className="grid grid-cols-3 gap-10 border-b border-gray-300 py-7 mt-8">
        {[
          ['+461.95%', 'Reported gain'], ['24.77%', 'Drawdown'], ['77%', 'Win rate'],
        ].map(([value, label]) => <div key={label}><p className="text-7xl font-black tracking-tight">{value}</p><p className="text-xl text-gray-600 mt-2">{label}</p></div>)}
      </div>

      <div className="grid grid-cols-[2.2fr_1fr] gap-16 mt-8">
        <section>
          <h2 className="text-3xl font-bold">Monthly gain, January–July 2026</h2>
          <div className="relative h-[340px] mt-4" role="img" aria-label={monthlyResults.map(m => `${m.month} ${m.gain}%`).join(', ')}>
            <div className="absolute top-[235px] w-full border-t border-gray-400" />
            <div className="flex h-full justify-around">
              {monthlyResults.map(({month, gain}) => {
                const height = Math.abs(gain) * 3.3;
                return <div key={month} className="relative w-[105px] text-center">
                  <span className="absolute left-0 w-full text-xl font-bold" style={{top: gain >= 0 ? 235 - height - 34 : 235 + height + 6}}>{gain > 0 ? '+' : ''}{gain.toFixed(2)}%</span>
                  <div className={gain >= 0 ? 'absolute bg-emerald-500 left-5 right-5' : 'absolute bg-red-700 left-5 right-5'} style={{top: gain >= 0 ? 235 - height : 235, height}} />
                  <span className="absolute bottom-0 left-0 w-full text-xl text-gray-600">{month}</span>
                </div>;
              })}
            </div>
          </div>
        </section>
        <section className="border-l border-gray-300 pl-12 pt-4">
          <p className="text-6xl font-black tracking-tight">+81.70%</p>
          <h2 className="text-2xl text-gray-600 mt-3">Absolute gain</h2>
          <p className="text-6xl font-black tracking-tight mt-12">27.89%</p>
          <p className="text-2xl text-gray-600 mt-3">Monthly rate reported by Myfxbook</p>
        </section>
      </div>

      <div className="mt-10 text-lg text-gray-500 leading-relaxed">
        <p>Source: Myfxbook account “AI ORO GOLD X9”. PDF captured Sep 10, 2026; last update shown Aug 21.</p>
        <p>Track record and live update show warning icons. Past performance does not guarantee future results.</p>
      </div>
      <div className="flex gap-10 mt-5 text-2xl underline underline-offset-4">
        <a href={myfxbookUrl} target="_blank" rel="noopener noreferrer">Open Myfxbook account ↗</a>
      </div>
      <div className="absolute bottom-8 left-20 flex gap-8 text-xl underline underline-offset-4"><Link href="/presentation/12">Back to FAQ</Link><Link href="/presentation/10">Back to investment slide</Link></div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">{Array.from({length:totalSlides},(_,i)=><div key={i} className={`h-2 rounded-full ${i===15?'w-8 bg-black':'w-2 bg-gray-300'}`} />)}</div>
      <button onClick={prevSlide} aria-label="Previous slide" className="absolute left-8 top-1/2 text-gray-400">←</button>
      <button onClick={nextSlide} aria-label="Next slide" className="absolute right-8 top-1/2 text-gray-400">→</button>
    </div>
  );
}
