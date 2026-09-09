import type { Metadata } from 'next';
import Link from 'next/link';
import { ResearchSearch } from '@/components/ResearchSearch';

export const metadata: Metadata = {
  title: 'Trader Challenges: Research | VibeTrader',
  description: 'The research behind the trader challenges discussed in slide 2, and what the evidence establishes.',
};

const questions = [
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
    context: 'The family experience on slide 2 is the founder’s motivation. It is separate from the external research summarized here.',
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
          <p className="mt-4 text-sm text-gray-500">Research reviewed September 9, 2026</p>
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
