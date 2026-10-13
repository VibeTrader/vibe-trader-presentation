import Link from 'next/link';
import { betaResults, monthlyResults, myfxbookUrl, resultGroups, resultsPdf, secondAccountMonthly, secondAccountRows, secondAccountUrl } from '@/data/trading-results';

export default function TradingResultsEvidence() {
  return <main className="min-h-screen bg-white text-black p-10"><article className="max-w-5xl mx-auto">
    <Link href="/presentation/4" className="underline">Back to trading-results slide</Link>
    <h1 className="text-5xl font-bold mt-10 mb-4">Falcon: captured trading statistics</h1>
    <p className="text-xl mb-6">Myfxbook still lists Falcon under its internal name, AI ORO GOLD X9, so that name appears on the account page and in the PDF below. Transcribed from the user-supplied Myfxbook PDF captured September 10, 2026. These are historical snapshot values, not a live feed.</p>
    <p className="mb-6">The PDF contains summary statistics, not individual trade-history rows. Open trades and lots are private. Trading privileges show a check mark; track record and live update show warning icons. No independent verification is implied. Past performance does not guarantee future results.</p>
    <div className="flex gap-8 mb-10 underline"><a href={myfxbookUrl} target="_blank" rel="noopener noreferrer">Myfxbook account</a><a href={resultsPdf} target="_blank" rel="noopener noreferrer">Original five-page PDF</a></div>
    {resultGroups.map(group=><section key={group.title} className="mb-10"><h2 className="text-3xl font-bold mb-4">{group.title}</h2><table className="w-full text-lg"><tbody>{group.rows.map(([label,value])=><tr key={label} className="border-b border-gray-200"><th scope="row" className="text-left font-medium py-3 pr-6 w-1/3">{label}</th><td className="py-3">{value}</td></tr>)}</tbody></table></section>)}
    <section className="mb-10"><h2 className="text-3xl font-bold mb-4">Monthly gain, 2026</h2><table className="w-full text-lg"><tbody>{monthlyResults.map(m=><tr key={m.month} className="border-b border-gray-200"><th scope="row" className="text-left py-3">{m.month}</th><td>{m.gain>0?'+':''}{m.gain.toFixed(2)}%</td></tr>)}</tbody></table></section>
    <p className="mb-5">Source discrepancy preserved: the account panel reports +461.95% gain while the “This Year” row reports +461.89%. The PDF gives no explanation. Monthly values are transcribed directly; no missing months or chart points have been inferred.</p>
    <p>The original PDF also lists other systems by the publisher and broker advertisements. Those are not Falcon results and are retained only in the source PDF.</p>
    <section className="mt-16 mb-10"><h2 className="text-3xl font-bold mb-4">Myfxbook account 2</h2>
      <p className="mb-6">A second real-money account running Falcon, read from its public Myfxbook page on October 7, 2026. The deck uses its August and September returns, after account 1 stopped trading. October was in progress when read. No independent verification is implied. <a href={secondAccountUrl} target="_blank" rel="noopener noreferrer" className="underline">Myfxbook account 2</a></p>
      <table className="w-full text-lg mb-8"><tbody>{secondAccountRows.map(([label,value])=><tr key={label} className="border-b border-gray-200"><th scope="row" className="text-left font-medium py-3 pr-6 w-1/3">{label}</th><td className="py-3">{value}</td></tr>)}</tbody></table>
      <h3 className="text-2xl font-bold mb-4">Monthly gain, 2026</h3>
      <table className="w-full text-lg"><tbody>{secondAccountMonthly.map(m=><tr key={m.month} className="border-b border-gray-200"><th scope="row" className="text-left py-3">{m.month}{'partial' in m ? ' (month to date)' : ''}</th><td>{m.gain>0?'+':''}{m.gain.toFixed(2)}%</td></tr>)}</tbody></table>
    </section>
    <section className="mt-16 mb-10"><h2 className="text-3xl font-bold mb-4">Live beta accounts, {betaResults.period}</h2>
      <p className="mb-6">After July, Falcon moved from the Myfxbook account to beta customers’ live accounts. Beta accounts running our other strategies are not included. These figures come from VibeTrader’s own trade records, not a third-party tracker, and the export is not published because it lists customer accounts. No figures are shown for August.</p>
      <table className="w-full text-lg"><tbody>{betaResults.rows.map(([label,value])=><tr key={label} className="border-b border-gray-200"><th scope="row" className="text-left font-medium py-3 pr-6 w-1/3">{label}</th><td className="py-3">{value}</td></tr>)}</tbody></table>
    </section>
  </article></main>;
}
