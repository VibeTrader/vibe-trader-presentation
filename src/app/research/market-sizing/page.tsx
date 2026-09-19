import type { Metadata } from 'next';
import Link from 'next/link';
import { ResearchSearch } from '@/components/ResearchSearch';

export const metadata: Metadata = {
  title: 'Market Sizing: Research | VibeTrader',
  description: 'How the dollar market figures on slide 6 are calculated, the sources behind them, and how far each one can be defended.',
};

const questions = [
  {
    question: 'How are the TAM figures on slide 6 calculated?',
    answer: 'Retail: the industry consensus of 10–15 million active retail forex and CFD traders, multiplied by about $660 a year, the same revenue per account used for the retail SAM ($4.46 billion across 6.787 million accounts), gives $6.6–9.9 billion. RIAs: Cerulli reported $3.86 trillion in separately managed account (SMA) assets at 1Q 2025; at the 0.40% licensing fee in our plan that is $15.4 billion. Businesses: the treasury management software market, which includes FX risk tools, is estimated at about $6.6 billion for 2025 by Coherent Market Insights. Together the three TAMs come to about $29–32 billion.',
    context: 'The business TAM is the weakest figure: it comes from a market research firm whose estimates conflict with other firms, and it covers all treasury software, not only FX strategies. The 10–15 million retail figure is an industry estimate of individuals rather than a measured count. SMA managers charge 0.18–0.60% according to Cerulli, so 0.40% sits inside the observed range. SOM figures on slide 6 are the Year-5 targets from our financial plan on slide 7, not independent market estimates.',
    sources: [
      { label: 'Cerulli: US Managed Accounts 2025', href: 'https://www.cerulli.com/reports/us-managed-accounts-2025' },
      { label: 'Coherent Market Insights: Treasury management market', href: 'https://www.coherentmarketinsights.com/market-insight/treasury-management-market-6115' },
      { label: 'Finance Magnates: More than 6 million active CFD accounts in Q4 2025', href: 'https://www.financemagnates.com/forex/analysis/exclusive-cfd-industry-tops-6-million-accounts-can-the-momentum-hold-in-2026/' },
    ],
  },
  {
    question: 'How is the $2–4.5 billion retail forex and CFD market calculated?',
    answer: 'Finance Magnates Intelligence counted 6.787 million active CFD accounts in Q4 2025. At our entry platform price of $25 per month, that is 6.787M × $25 × 12 = $2.04 billion a year. With a blended tier mix of 80% Trader ($25), 15% Pro ($99) and 5% Elite ($200), the average is about $538 a year, or $3.65 billion. Adding strategy subscriptions for 1% of accounts at $1,000 per month, the price assumed in our five-year plan, adds about $0.81 billion, for roughly $4.5 billion.',
    context: 'Accounts are not people: one trader can hold several accounts, and brokers outside the Finance Magnates panel are missed. The tier mix and 1% strategy take-up are our assumptions, not measured behavior. The $2 billion floor uses only the account count and our lowest published price.',
    sources: [
      { label: 'Finance Magnates: More than 6 million active CFD accounts in Q4 2025', href: 'https://www.financemagnates.com/forex/analysis/exclusive-cfd-industry-tops-6-million-accounts-can-the-momentum-hold-in-2026/' },
    ],
  },
  {
    question: 'How is the $2.6 billion RIA market calculated?',
    answer: 'Morningstar reported more than $645 billion in third-party model portfolio assets at March 31, 2025, up 62% from June 2023. Applying the 0.40% annual licensing fee assumed in our five-year plan gives $645B × 0.40% = $2.58 billion. As a cross-check, managed futures (CTA) assets were $339.4 billion at Q4 2024 according to BarclayHedge, which at the same fee is $1.36 billion. There were 16,544 SEC-registered investment advisers in 2025.',
    context: 'A 0.40% fee is at the high end for model and strategist fees, where about 0.20% is typical, but inside the 0.18–0.60% range for separately managed account managers. The Year-5 plan of $10 billion allocated is 1.5% of model portfolio assets and about 3% of all managed futures assets, which is ambitious for a new strategy. Selling strategies to RIAs requires VibeTrader to register as an investment adviser or sub-adviser, and advising on forex or futures generally requires CTA registration with the CFTC and NFA membership. Platforms usually expect a multi-year audited track record.',
    sources: [
      { label: 'Morningstar: 2025 US Model Portfolio Landscape', href: 'https://www.morningstar.com/business/insights/research/model-portfolio-landscape' },
      { label: 'BarclayHedge: CTA industry assets under management', href: 'https://www.ionanalytics.com/barclayhedge/solutions/assets-under-management/cta-industry-assets-under-management/' },
      { label: 'IAA and Comply: 2026 Investment Adviser Industry Snapshot', href: 'https://www.comply.com/resource/2026-investment-adviser-industry-snapshot-shows-continued-growth-in-demand-for-adviser-services/' },
    ],
  },
  {
    question: 'How is the $240 million business FX market calculated, and why is it smaller?',
    answer: 'Kyriba’s Currency Impact Report tracks about 1,200 large North American and European multinationals, which reported $95 billion of currency impact in 2023. At the $200,000 annual contract assumed in our five-year plan, those companies alone are 1,200 × $200K = $240 million a year. The BIS Triennial Survey shows non-financial customers account for about 5% of $9.6 trillion in daily FX turnover, and a 2026 MillTech survey found 88% of corporates hedge forecastable FX risk.',
    context: 'We present businesses as an entry wedge, not a billion-dollar market, because we found no credible count of companies that would pay $200,000 a year. At advisory rates such as Chatham’s, $200,000 implies hundreds of millions of hedged notional per client, which points to large companies rather than small ones. Hedging advice to businesses is a regulated activity: Chatham’s hedging adviser is a registered CTA. The Year-5 plan of 80 clients is 6.7% of the 1,200 multinationals.',
    sources: [
      { label: 'Kyriba: Currency Impact Report, $95 billion impact in 2023', href: 'https://www.kyriba.com/news/kyribas-q4-cir-shows-95-bn-currency-impact-2023/' },
      { label: 'BIS: OTC foreign exchange turnover in April 2025', href: 'https://www.bis.org/statistics/rpfx25_fx.htm' },
      { label: 'The Full FX: MillTech Global FX Report 2026 hedging survey', href: 'https://thefullfx.com/automation-increased-fx-hedging-focus-for-buy-side-in-2026-survey/' },
      { label: 'Chatham Financial: CTA disclosure document (2025)', href: 'https://assets.chathamfinancial.com/documents/Chatham-Disclosure-Document-Jan-2025.pdf' },
    ],
  },
  {
    question: 'What does “six firms earn $4.6 billion+ a year from retail traders” include?',
    answer: 'The latest reported annual revenue of IG Group (£1,123.4 million, calendar 2025), Plus500 ($792.4 million, FY2025), eToro ($868 million net contribution, FY2025), XTB (about €507 million operating income, 2025), CMC Markets (£392.6 million net operating income, year to March 2026) and FTMO ($422.4 million, 2025), converted at approximate exchange rates. Plus500 also reports an average acquisition cost of $1,267 per new customer.',
    context: 'It is a floor, not an industry estimate: large private brokers such as Exness, IC Markets and Pepperstone do not publish group revenue and are excluded. Some totals include stockbroking or institutional revenue. Plus500’s FY2025 figures are preliminary, and we could not confirm whether FTMO’s 2025 accounts are audited.',
    sources: [
      { label: 'IG Group: CY25 results', href: 'https://www.iggroup.com/~/media/Files/I/IG-Group/documents/investors/financial-results/results-reports-and-presentations/2026/igg-cy25-results-rns.pdf' },
      { label: 'Plus500: FY2025 preliminary results', href: 'https://cdn.plus500.com/Media/Investors/Reports/Plus500_Preliminary_Results_FY2025.pdf' },
      { label: 'eToro: fourth quarter and full year 2025 results', href: 'https://investors.etoro.com/news-releases/news-release-details/etoro-reports-fourth-quarter-and-full-year-2025-results' },
      { label: 'XTB: preliminary 2025 financial results', href: 'https://ir.xtb.com/wp-content/uploads/2026/01/RB-2-2026-Wstepne-wyniki-finansowe-i-operacyjne-2025-ENG-all.pdf' },
      { label: 'FX News Group: FTMO 2025 revenue', href: 'https://fxnewsgroup.com/forex-news/retail-forex/ftmo-2025-revenues-rise-31-to-422m-paid-422m-for-oanda/' },
    ],
  },
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
      'The BIS Triennial Central Bank Survey put total OTC foreign exchange turnover at $9.6 trillion per day in April 2025, a 28% rise since 2022. Within that, retail-driven trades averaged $242 billion per day, about 2.5% of global turnover, up 26% from $192 billion in 2022. Slide 6 no longer shows it.',
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
    question: 'What happened to the 100,000-user three-year target?',
    answer:
      'It was retired from slide 6 because it did not match our five-year financial plan on slide 7, which assumes 7,500 paying retail subscribers in Year 3. Slide 6 now shows that plan directly: $186.8 million of Year-5 annualized revenue, made up of $130.8 million retail ($10.8 million app subscriptions at a blended $45 a month and $120 million strategy subscriptions), $40 million RIA licensing and $16 million business FX strategies.',
    context:
      'The target needs validation against event leads, partner reach, advertising budgets, conversion and retention. Users are not necessarily active or paying customers; strategy subscriptions may also overlap with app users. The financial slide remains an illustrative planning scenario.',
    sources: [],
  },
  {
    question: 'What would make these numbers more defensible?',
    answer:
      'Three things. Replacing the 2018 regional split with current broker-level or regulator-published account counts for our launch markets. Grounding the SAM in the Finance Magnates account series, which is measured quarterly and shows a real growth trend. And converting the capture assumption from headcount to revenue with a stated ARPU and retention assumption.',
    context:
      'Until then, the honest framing of slide 6 is that the market is large enough not to be the binding constraint, and the numbers are estimates drawn from industry sources of varying quality. The figures support a claim about scale. They do not establish demand for VibeTrader specifically — that requires customer evidence, not market sizing.',
    sources: [
      { label: 'Finance Magnates Intelligence: quarterly CFD industry account data', href: 'https://www.financemagnates.com/tag/intelligence-report/' },
    ],
  },
];

export default function MarketSizingResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950 px-6 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/presentation/6" className="text-sm text-gray-600 underline underline-offset-4 hover:text-black">
          Back to slide 6
        </Link>
        <header className="mt-12 mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">VibeTrader research</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">How we sized the market</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            The sources behind the market figures on slide 6, how each figure was derived, and where the evidence is
            thinner than the number on the slide suggests.
          </p>
          <p className="mt-4 text-sm text-gray-500">Research reviewed September 18, 2026</p>
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
