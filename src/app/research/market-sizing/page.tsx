import type { Metadata } from 'next';
import Link from 'next/link';
import { ResearchSearch } from '@/components/ResearchSearch';
import { plan, totals, earnedStreams, earnedTotals, launchPlan, millions } from '@/config/financial-plan';
import { billionRange, marketSizing, marketSources, totalMarket } from '@/config/market-sizing';

export const metadata: Metadata = {
  title: 'Market Sizing: Research | VibeTrader',
  description: 'How the dollar market figures on slide 6 are calculated, the sources behind them, and how far each one can be defended.',
};

const questions = [
  {
    id: 'tam',
    question: 'What does the combined TAM represent?',
    answer: `The workbook estimates ${billionRange(totalMarket.tam)} in annual revenue opportunity across three buyer groups. Retail uses an assumed 10–15 million people at $660 per year, giving ${billionRange(marketSizing.retail.tam)}. RIA licensing applies a 0.40% fee to $3.86 trillion of SMA assets, giving $15.44 billion. The business component uses a $6.6 billion estimate for the broader treasury-management market.`,
    context: 'The 10–15 million retail population is an unverified deck assumption, not an established industry consensus. The retail revenue assumption originates from an account-based model, while the population is expressed as people. SMA assets include many unrelated investment strategies, and treasury software and services extend beyond VibeTrader’s FX offering. These are broad proxies of different scopes, not proof of additive attainable demand.',
    sources: [
      { label: 'Cerulli: $3.86T in SMA assets, Q1 2025', href: marketSources.sma },
      { label: 'CMI issuer release: $6.6B treasury-management estimate for 2025', href: marketSources.treasury },
    ],
  },
  {
    id: 'retail-sam',
    question: 'How is the retail SAM calculated, including bundled app access?',
    answer: `Finance Magnates counted 6.787 million active CFD accounts in Q4 2025. The lower estimate is 6.787M × $25 × 12 = $2.0361 billion. The upper estimate assumes an app mix of 80% at $25, 15% at $99 and 5% at $200, averaging $44.85/month. It also assumes 1% of accounts buy a strategy at $1,000/month. Because strategies include app access, those 67,870 accounts are removed from separately billed app subscriptions. The adjusted upper estimate is $4.430675766 billion, producing the ${billionRange(marketSizing.retail.sam)} range shown on slide 6.`,
    context: `The bundle correction removes ${millions(marketSizing.bundledAppOverlap, 2)} of duplicate app fees. Accounts are not unique people or confirmed buyers. The tier mix, strategy adoption and $1,000 market price are assumptions. The $500 average used for the launch forecast is a separate assumption. Geography, platform support, customer eligibility and willingness to pay still need to narrow the serviceable pool.`,
    sources: [
      { label: 'Finance Magnates: active CFD accounts in Q4 2025', href: marketSources.accounts },
    ],
  },
  {
    id: 'ria-sam',
    question: 'What supports the RIA market estimate?',
    answer: 'Morningstar’s dated 2025 Model Portfolio Landscape report states that third-party model assets exceeded $645 billion as of March 31, 2025. Using $645 billion as a lower-bound asset proxy and the plan’s assumed 0.40% annual fee gives $2.58 billion in potential licensing revenue.',
    context: 'This is a future product opportunity. The asset pool is not a set of confirmed allocations to VibeTrader. The Year 5 target of $10 billion allocated would equal about 1.55% of that pool. Commercial access, investment suitability, distribution, signed mandates and realized fees need validation before describing the whole pool as serviceable.',
    sources: [
      { label: 'Morningstar: 2025 Model Portfolio Landscape, dated PDF, p. 3', href: marketSources.models },
      { label: 'Cerulli: separately managed account assets, Q1 2025', href: marketSources.sma },
    ],
  },
  {
    id: 'business-sam',
    question: 'What supports the $240 million business FX estimate?',
    answer: 'Kyriba’s July 2023 Currency Impact Report covers 1,200 large North American and European multinationals with at least 15% of revenue from overseas. Multiplying that historical sample by the assumed $200,000 annual contract gives $240 million. The broader $6.6 billion TAM comes from CMI’s 2025 treasury-management estimate, not from the Kyriba sample.',
    context: 'This is also a future offering. The 1,200 companies are a research sample, not a qualified sales list or a count of firms willing to pay VibeTrader. The Year 5 goal of 80 clients is 6.7% of the sample. Customer eligibility, buying intent, contract price and sales timing are not established by these sources.',
    sources: [
      { label: 'Kyriba: July 2023 report and 1,200-company sample', href: marketSources.companies },
      { label: 'CMI: broad treasury-management market estimate for 2025', href: marketSources.treasury },
    ],
  },
  {
    id: 'combined-sam',
    question: 'Why does the slide now show $4.86–7.25 billion SAM?',
    answer: `The lower bound adds $2.0361 billion retail, $2.58 billion RIA and $240 million business, for $4.8561 billion. The upper bound adds the bundle-adjusted $4.430675766 billion retail estimate to those same institutional components, for $7.250675766 billion. Slide 6 displays ${billionRange(totalMarket.sam)}. At one decimal place, the lower bound rounds to $4.9 billion.`,
    context: 'The former upper calculation billed app access on strategy accounts twice. The former $4.8 billion lower headline did not use normal rounding. Fixing these calculations does not validate the underlying serviceability assumptions. RIA and corporate opportunities are future expansion, so the combined figure is no longer labeled “serviceable today.”',
    sources: [],
  },
  {
    id: 'som',
    question: 'What is SOM, and how does it relate to the financial plan?',
    answer: `SOM is the revenue the company aims to capture over a specified period. The deck retains a ${millions(totals[4])} Year 5 annual run-rate target: $130.8 million retail, $40 million RIA licensing and $16 million business contracts. These are the same targets used on the financial slide. The first full-year target is ${millions(launchPlan.revenueTarget)}, supported in the launch example by 500 strategy subscriptions at $500/month.`,
    context: `The Year 5 SOM is a management target, not an independent market estimate. Its 10,000 strategy subscriptions would capture ${(plan[4].strategySubs / marketSizing.strategyAccounts * 100).toFixed(1)}% of the assumed 67,870-subscription premium pool. That concentration needs validation even though the target represents a small share of the combined SAM. Subscription totals must not be described as unique paying traders.`,
    sources: [],
  },
  {
    id: 'launch-forecast',
    question: 'How does the October launch support the $3 million first-year target?',
    answer: `The founder plans to onboard 500+ paid strategy customers in October 2026. The workbook models the minimum 500 at an illustrative $500 average monthly price, 0% monthly churn and no further strategy additions in Year 1. This gives ${millions(earnedStreams[1].values[0])} of strategy revenue over ${launchPlan.firstFullYear}. The separate standalone-app forecast adds $135,000, so combined revenue earned in that period is ${millions(earnedTotals[0], 3)}. At October 2027, the combined annual run rate is ${millions(totals[0], 2)}.`,
    context: `October 2026 onboarding uses half-month billing, generating an additional $125,000 in the example. It is excluded from the 12 full months of Year 1; launch plus Year 1 therefore spans 13 calendar months. The 500 customers are a founder plan, not a verified current paid count. Prices range from $100 to $2,500/month, but the realized tier mix and paid retention are unknown. Changing new-sales or churn assumptions changes Year 1 strategy revenue. Later years retain the deck’s net-growth targets.`,
    sources: [],
  },
  {
    id: 'actuals',
    question: 'What is observed today, and what remains an assumption?',
    answer: 'The supplied Clerk screenshots show 2,513 all-time app registrations, 63 active app users in the displayed week of September 28, and 7% app activity retention after eight weeks. The week may be partial. The founder reports that the app is pre-revenue and premium strategy selling has started. Clerk’s app activity does not establish strategy purchases, paid subscribers or subscription churn.',
    context: 'Paid strategy counts and revenue remain unconfirmed in the evidence workbook until billing records are available. The 500+ October onboarding plan is recorded separately from actuals. Costs are incomplete, so EBITDA and cash runway cannot be established from the current model. The 18-month runway on the funding slide is a planning goal, not a cost-validated result.',
    sources: [],
  },
  {
    id: 'next-evidence',
    question: 'What evidence would strengthen the projections?',
    answer: 'Match the October onboarding cohort to paid invoices, billing start dates, price tiers, cancellations and refunds. Use partner reach, qualified leads and observed paid conversion to forecast subsequent additions. Add payroll, hosting, AI/API bills, acquisition spend and commissions to the P&L. Narrow the market pools by supported geographies, products, platforms and customer eligibility.',
    context: 'The workbook separates source evidence, editable assumptions, monthly revenue, P&L, market sizing and reconciliation checks. Formula checks establish arithmetic consistency. They do not establish willingness to pay, future retention or the ability to achieve the Year 5 targets.',
    sources: [],
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
          <p className="mt-4 text-sm text-gray-500">Reconciled to the evidence workbook September 30, 2026</p>
        </header>
        <ResearchSearch
          defaultQuery="How many active retail forex and CFD traders are there worldwide, and how is that population measured?"
          context="sizing the retail forex and CFD market by active trader headcount and by daily trading volume, including how brokers, regulators and the BIS Triennial Survey each count participants"
        />
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {questions.map(({ id, question, answer, context, sources }, index) => (
            <section id={id} key={question} aria-labelledby={`question-${index}`} className="py-9">
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
