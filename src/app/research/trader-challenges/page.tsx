import type { Metadata } from 'next';
import Link from 'next/link';
import { ResearchSearch } from '@/components/ResearchSearch';

export const metadata: Metadata = {
  title: 'Trader Challenges: Research | VibeTrader',
  description: 'The research behind the trader challenges discussed in slide 2, and what the evidence establishes.',
};

const questions = [
  {
    question: 'How much do traders spend trying to find an edge?',
    answer: 'A great deal, much of it on products that do not deliver. IM Mastery Academy, a forex and crypto trading-education business, took in more than $1.2 billion from consumers since 2018; in May 2026 its lead defendants settled with the FTC, which had obtained a $795.8 million judgment. Mirror Trading International, marketed as a forex “AI trading bot”, was ordered to pay $1.7 billion in restitution to victims, the largest civil monetary penalty in CFTC history. On the legitimate side, FTMO, the largest proprietary-trading firm, reported about $329 million in 2024 revenue, largely challenge fees paid by traders. Data from FPFX Tech covering more than 300,000 prop-challenge accounts found that only 7% of traders ever received a payout, after spending about $800 each on challenges on average.',
    context: 'The IM Academy and Mirror Trading figures are regulator findings about specific schemes, not a measure of the whole market. The FPFX figures are vendor data reported by Finance Magnates, not an independent audit. Broader totals, such as the $8.65 billion in US investment-fraud losses reported by the FBI for 2025, mostly involve crypto and romance-style fraud rather than traders buying strategies, so we do not present them as trader spending.',
    sources: [
      { label: 'FTC: IM Mastery Academy lead defendants settle (May 2026)', href: 'https://www.ftc.gov/news-events/news/press-releases/2026/05/lead-defendants-im-mastery-academy-mlm-scheme-turn-over-tens-millions-dollars-assets-settle-ftc' },
      { label: 'CFTC: $1.7 billion restitution order against Mirror Trading International (2023)', href: 'https://www.cftc.gov/PressRoom/PressReleases/8772-23' },
      { label: 'CFTC advisory: AI Won’t Turn Trading Bots into Money Machines', href: 'https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/AITradingBots.html' },
      { label: 'Finance Magnates: FTMO parent 2024 revenue and profit', href: 'https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/' },
      { label: 'Finance Magnates: only 7% of 300,000 prop trading accounts achieved payouts (2024)', href: 'https://www.financemagnates.com/forex/analysis/exclusive-only-7-of-300000-prop-trading-accounts-achieved-payouts/' },
      { label: 'FBI IC3: 2025 Internet Crime Report', href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf' },
    ],
  },
  {
    question: 'Where does “7 in 10 retail traders lose money” come from?',
    answer: 'Regulated CFD brokers must publish the share of their retail accounts that lose money. On September 18, 2026 the figures shown were 69% at IG (UK), 72.9% at Pepperstone (UK) and 76% at Plus500. When ESMA restricted CFDs in 2018, national regulators found that 74–89% of retail CFD accounts lost money.',
    context: 'These figures cover retail CFD accounts at the brokers named, which include forex CFDs. Broker disclosures are updated regularly and vary by broker; “7 in 10” is a rounded summary of the current range, not a single regulator statistic.',
    sources: [
      { label: 'IG UK: retail CFD loss disclosure', href: 'https://www.ig.com/uk' },
      { label: 'Pepperstone UK: retail CFD loss disclosure', href: 'https://www.pepperstone.com/en-gb/' },
      { label: 'Plus500: retail CFD loss disclosure', href: 'https://www.plus500.com/en' },
      { label: 'ESMA: Product intervention on CFDs and binary options (2018)', href: 'https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors' },
    ],
  },
  {
    question: 'How many retail investors use AI, and how many trust it?',
    answer: 'In an Investing.com survey of 938 US retail investors conducted March 3–10, 2026, 62% said they use AI to inform investment decisions, while 24% said they trust AI mostly or completely. eToro’s Retail Investor Beat (Opinium, 11,000 investors in 13 countries, October 2025) found 19% use AI tools to select or adjust investments, up from 13% a year earlier.',
    context: 'The 62% and 24% figures come from a US survey of retail investors, not specifically forex or CFD traders. Usage rates differ widely by survey and definition; we cite them to show a gap between use and trust, not a precise global rate.',
    sources: [
      { label: 'Traders Magazine: Investing.com retail investor AI survey (2026)', href: 'https://www.tradersmagazine.com/xtra/nearly-two-thirds-of-retail-investors-use-ai-to-inform-investment-decisions/' },
      { label: 'eToro: Retail Investor Beat, AI usage (2025)', href: 'https://www.etoro.com/news-and-analysis/etoro-updates/retail-investors-flock-to-ai-tools-with-usage-up-46-in-one-year/' },
    ],
  },
  {
    question: 'Why is keeping a strategy effective a challenge?',
    answer: 'A strategy can perform differently across market conditions. In Momentum Crashes, Kent Daniel and Tobias Moskowitz document severe losses for momentum strategies around market rebounds following declines and periods of high volatility. This illustrates why a strong average track record can conceal vulnerability in particular conditions.',
    context: 'The study supports condition-dependent performance. It does not establish that every strategy stops working or that every retail trader experiences the same problem.',
    sources: [{ label: 'Daniel & Moskowitz: Momentum Crashes (2014 working paper)', href: 'https://www.nber.org/papers/w20439' }],
  },
  {
    question: 'Why is it hard to know which strategy fits current conditions?',
    answer: 'Historical results need context. The momentum research shows that performance can depend on the market state. MetaTrader 5 also provides forward testing on a separate period to help assess whether optimized parameters are fitted to a particular historical interval.',
    context: 'Our interpretation is that choosing a strategy involves judging how well past evidence applies now. These sources do not measure how many VibeTrader users struggle with that judgment.',
    sources: [
      { label: 'Daniel & Moskowitz: Momentum Crashes', href: 'https://www.nber.org/papers/w20439' },
      { label: 'MetaTrader 5: Strategy Testing, including forward testing', href: 'https://www.metatrader5.com/en/terminal/help/algotrading/testing' },
    ],
  },
  {
    question: 'Why can charts and signals still leave a trader unsure what to do?',
    answer: 'Information still requires judgment. Research by Mark Grinblatt and Matti Keloharju links sensation seeking and overconfidence to trading activity using equity trading records and individual-level data. It shows that behavior can influence trading alongside the information available.',
    context: 'The difficulty of turning charts and signals into a clear decision is our user-problem framing. This study provides related behavioral evidence, rather than directly testing that specific difficulty or its prevalence among retail FX and CFD traders.',
    sources: [{ label: 'Grinblatt & Keloharju: Sensation Seeking, Overconfidence, and Trading Activity (2006)', href: 'https://www.nber.org/papers/w12223' }],
  },
  {
    question: 'Do existing trading platforms already help with decisions?',
    answer: 'Yes. MetaTrader 5 offers technical and fundamental analysis as well as strategy testing. The problem described on slide 2 is the difficulty users can face applying those tools to a decision. It is not a claim that other platforms provide only order execution.',
    context: 'A separate FCA experiment with more than 9,000 consumers found that certain engagement features, including push notifications and prize draws, can increase trading frequency and risk taking. That finding concerns specific features, not every platform.',
    sources: [
      { label: 'MetaTrader 5: Trading platform capabilities', href: 'https://www.metatrader5.com/en/trading-platform' },
      { label: 'FCA: Trading apps experiment (2024)', href: 'https://www.fca.org.uk/news/press-releases/fca-keeps-trading-apps-under-review-over-gaming-concerns' },
    ],
  },
  {
    question: 'Does this research validate VibeTrader’s user problems or results?',
    answer: 'It establishes relevant market and behavioral challenges. Customer interviews, surveys, and product usage evidence are needed to establish how often our users face each problem. Evidence of better decisions or trading outcomes would require a separate product evaluation.',
    context: 'The founder’s family experience with trading losses motivated VibeTrader. It is separate from the external research summarized here.',
    sources: [],
  },
];

export default function TraderChallengesResearchPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950 px-6 py-12 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/presentation/2" className="text-sm text-gray-600 underline underline-offset-4 hover:text-black">
          Back to slide 2
        </Link>
        <header className="mt-12 mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">VibeTrader research</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">What traders struggle with</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">The evidence behind the challenges on slide 2, with a clear distinction between published findings and our interpretation of user needs.</p>
          <p className="mt-4 text-sm text-gray-500">Research reviewed September 18, 2026</p>
        </header>
        <ResearchSearch />
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
