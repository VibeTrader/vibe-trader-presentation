import type { Metadata } from 'next';
import Link from 'next/link';
import { ResearchSearch } from '@/components/ResearchSearch';

export const metadata: Metadata = {
  title: 'Market Sizing: Research | VibeTrader',
  description: 'The sources behind the TAM, SAM and target regions figures on slide 5, and how far each one can be defended.',
};

const questions = [
  {
    question: 'Where does the 370M TAM come from?',
    answer:
      'It is a bottom-up sum of self-directed retail participants across the speculative asset classes: roughly 160–170M in equities, 50–100M in crypto, 10–15M in forex and CFDs, and 8–10M in options and futures. Independent industry estimates put the number of people active in financial markets in 2025 at a similar order of magnitude, around 330M, which is the closest external check available.',
    context:
      'No official body counts self-directed traders globally, so every component is an industry estimate rather than a measured population. The crypto component is the loosest: on-chain estimates put global crypto ownership at 741M in 2025, but owners are not traders, and the 50–100M active-trader figure is an assumed subset of that. Treat 370M as an order-of-magnitude ceiling, not a precise count.',
    sources: [
      { label: 'Crypto.com Research: Crypto Market Sizing 2025 (741M owners, on-chain estimate)', href: 'https://crypto.com/en/research/crypto-market-sizing-report-2025' },
      { label: 'World Economic Forum: Global Retail Investor Outlook 2025', href: 'https://www.weforum.org/publications/global-retail-investor-outlook-2025/key-insights-global-retail-investor-outlook-2025/' },
      { label: 'CompareForexBrokers: Forex industry and market statistics (2026 update)', href: 'https://www.compareforexbrokers.com/trading/statistics/' },
    ],
  },
  {
    question: 'How solid is the 10–15M forex and CFD SAM?',
    answer:
      'It is the widely repeated industry consensus range for active retail forex and CFD traders, where active usually means at least one trade in a 90-day window. The most rigorous recent count is narrower: Finance Magnates Intelligence recorded 6.787M active CFD accounts in Q4 2025, up 14.6% from 5.922M in Q3 2025 and from 5.067M a year earlier.',
    context:
      'The two figures measure different things. The broker-level count covers accounts at tracked brokers, not people, and one trader can hold several accounts while brokers outside the panel are missed. The 10–15M range is an estimate of individuals across the whole market. The defensible statement is that the active retail FX and CFD population is in the high single-digit to low double-digit millions and growing at double-digit rates, with 10–15M at the optimistic end of that band.',
    sources: [
      { label: 'Finance Magnates: More than 6 million active CFD accounts in Q4 2025', href: 'https://www.financemagnates.com/forex/analysis/exclusive-cfd-industry-tops-6-million-accounts-can-the-momentum-hold-in-2026/' },
      { label: 'CompareForexBrokers: Forex industry and market statistics (2026 update)', href: 'https://www.compareforexbrokers.com/trading/statistics/' },
    ],
  },
  {
    question: 'How much daily volume does the retail segment actually represent?',
    answer:
      'The BIS Triennial Central Bank Survey put total OTC foreign exchange turnover at $9.6 trillion per day in April 2025, a 28% rise since 2022. Within that, retail-driven trades averaged $242 billion per day, about 2.5% of global turnover, up 26% from $192 billion in 2022. Slide 5 cites the $242 billion figure.',
    context:
      'A $650 billion daily retail figure circulates on aggregator sites, attributed to margin account data. It is roughly 2.7 times the BIS-derived number and we could not trace it to a primary source, so we do not use it. One caveat on the number we do use: the BIS headline release reports counterparties as inter-dealer, other financial institutions and non-financial customers, without publishing a retail line, so the $242 billion is reported from the survey dataset by industry analysts rather than lifted from the public summary. Volume is also the wrong denominator for a subscription business — it sizes the market traders operate in, not the revenue available from them.',
    sources: [
      { label: 'BIS: OTC foreign exchange turnover in April 2025', href: 'https://www.bis.org/statistics/rpfx25_fx.htm' },
      { label: 'BIS: 2025 Triennial Central Bank Survey announcement and methodology', href: 'https://www.bis.org/statistics/rpfx25_announcement.htm' },
      { label: 'CompareForexBrokers: retail-driven turnover, citing the BIS 2025 dataset', href: 'https://www.compareforexbrokers.com/trading/statistics/' },
    ],
  },
  {
    question: 'Which regions are we targeting?',
    answer:
      'MENA, North America, APAC and Europe. MENA outreach starts with Forex Expo, while North America is the intended first paid advertising market after funding.',
    context:
      'These are target geographies, not a measured obtainable market. The former 6.2M estimate was removed because it relied on dated regional counts and did not reflect the current launch plan.',
    sources: [],
  },
  {
    question: 'What is the three-year SOM target?',
    answer:
      'Our planning target is 100,000 users over three years across MENA, North America, APAC and Europe. This is an illustrative operating assumption, not a measured market size or a validated acquisition forecast.',
    context:
      'The target needs validation against event leads, partner reach, advertising budgets, conversion and retention. Users are not necessarily active or paying customers; strategy subscriptions may also overlap with app users. The financial slide remains an illustrative planning scenario.',
    sources: [],
  },
  {
    question: 'What would make these numbers more defensible?',
    answer:
      'Three things. Replacing the 2018 regional split with current broker-level or regulator-published account counts for our launch markets. Grounding the SAM in the Finance Magnates account series, which is measured quarterly and shows a real growth trend. And converting the capture assumption from headcount to revenue with a stated ARPU and retention assumption.',
    context:
      'Until then, the honest framing of slide 5 is that the market is large enough not to be the binding constraint, and the numbers are estimates drawn from industry sources of varying quality. The figures support a claim about scale. They do not establish demand for VibeTrader specifically — that requires customer evidence, not market sizing.',
    sources: [
      { label: 'Finance Magnates Intelligence: quarterly CFD industry account data', href: 'https://www.financemagnates.com/tag/intelligence-report/' },
    ],
  },
];

export default function MarketSizingResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950 px-6 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/presentation/5" className="text-sm text-gray-600 underline underline-offset-4 hover:text-black">
          Back to slide 5
        </Link>
        <header className="mt-12 mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">VibeTrader research</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">How we sized the market</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            The sources behind the TAM, SAM and target regions on slide 5, how each figure was derived, and where the evidence is
            thinner than the number on the slide suggests.
          </p>
          <p className="mt-4 text-sm text-gray-500">Research reviewed September 9, 2026</p>
        </header>
        <ResearchSearch
          defaultQuery="How many active retail forex and CFD traders are there worldwide, and how is that population measured?"
          context="sizing the retail forex and CFD market by active trader headcount and by daily trading volume, including how brokers, regulators and the BIS Triennial Survey each count participants"
        />
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {questions.map(({ question, answer, context, sources }, index) => (
            <section key={question} aria-labelledby={`question-${index}`} className="py-9">
              <h2 id={`question-${index}`} className="text-2xl font-semibold leading-snug">{question}</h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">{answer}</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">{context}</p>
              {sources.length > 0 && (
                <ul aria-label="Sources" className="mt-5 space-y-3">
                  {sources.map((source) => (
                    <li key={source.href}>
                      <a href={source.href} className="text-sm font-medium underline underline-offset-4 hover:text-gray-600">{source.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
