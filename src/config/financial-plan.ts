// Reconciled to VibeTrader Financials and Market Evidence.xlsx, September 30, 2026.
// Founder launch plan plus illustrative pricing, retention and later-year targets.
// App access bundled with a strategy is excluded from app subscriber counts.
export const launchPlan = {
  onboardingMonth: 'October 2026',
  firstFullYear: 'November 2026–October 2027',
  checkpoint: 'October 2027',
  customers: 500, // Minimum of the founder's 500+ planned paid customers, not current actuals.
  strategyPriceMonthly: 500, // Illustrative average within the $100–$2,500 monthly range.
  monthlyChurn: 0, // Unmeasured; zero is the example assumption.
  monthlyNewCustomers: 0, // No additions beyond the launch cohort in the Year 1 example.
  onboardingBillingFraction: 0.5,
  revenueTarget: 3_000_000,
};

// Customer roll-forward for the first 12 full service months, excluding onboarding.
let openingStrategyCustomers = launchPlan.customers;
export const firstYearStrategyMonths = Array.from({ length: 12 }, () => {
  const lost = openingStrategyCustomers * launchPlan.monthlyChurn;
  const closing = openingStrategyCustomers + launchPlan.monthlyNewCustomers - lost;
  const revenue = (openingStrategyCustomers + closing) / 2 * launchPlan.strategyPriceMonthly;
  openingStrategyCustomers = closing;
  return { closing, revenue };
});

export const plan = [
  { year: 'Year 1', appUsers: 500, strategySubs: firstYearStrategyMonths[11].closing, strategyPrice: launchPlan.strategyPriceMonthly, riaAssets: 0, businessClients: 0, milestone: 'Forex launch', detail: 'App + strategy subscriptions' },
  { year: 'Year 2', appUsers: 2000, strategySubs: 1000, strategyPrice: 800, riaAssets: 0, businessClients: 0, milestone: 'Futures + crypto', detail: 'Scale partner distribution' },
  { year: 'Year 3', appUsers: 5000, strategySubs: 2500, strategyPrice: 1000, riaAssets: 750_000_000, businessClients: 5, milestone: 'Stocks + RIA pilots', detail: 'First paid corporate FX clients' },
  { year: 'Year 4', appUsers: 10000, strategySubs: 5500, strategyPrice: 1000, riaAssets: 3_000_000_000, businessClients: 30, milestone: 'Options + institutional growth', detail: 'Expand strategy mandates' },
  { year: 'Year 5', appUsers: 20000, strategySubs: 10000, strategyPrice: 1000, riaAssets: 10_000_000_000, businessClients: 80, milestone: 'Scale across markets', detail: 'Four established revenue streams' },
];
// Blended app price: 80% Trader ($25), 15% Pro ($99), 5% Elite ($200) is about $45/month,
// the same tier mix the market-sizing research uses for the retail SAM.
const APP_PRICE_MONTHLY = 45;
export const forecastPeriods = plan.map((_, i) => `Nov ${2026 + i}–Oct ${2027 + i}`);

export const streams = [
  { title: 'App subscriptions', shade: '#a3a3a3', values: plan.map(p => p.appUsers * APP_PRICE_MONTHLY * 12) },
  { title: 'Premium strategies', shade: '#171717', values: plan.map(p => p.strategySubs * p.strategyPrice * 12) },
  { title: 'RIA strategy licensing', shade: '#525252', values: plan.map(p => p.riaAssets * 0.004) },
  { title: 'B2B FX strategies', shade: '#d4d4d4', values: plan.map(p => p.businessClients * 200_000) },
];
export const totals = plan.map((_, i) => streams.reduce((sum, stream) => sum + stream.values[i], 0));
// Earned revenue uses average balances. Later years keep the workbook's linear net ramp.
export const earnedStreams = [
  { title: 'App subscriptions', values: plan.map((p, i) => ((plan[i - 1]?.appUsers ?? 0) + p.appUsers) / 2 * APP_PRICE_MONTHLY * 12) },
  { title: 'Premium strategies', values: plan.map((p, i) => i === 0
    ? firstYearStrategyMonths.reduce((sum, month) => sum + month.revenue, 0)
    : (plan[i - 1].strategySubs + p.strategySubs) / 2 * p.strategyPrice * 12) },
  { title: 'RIA strategy licensing', values: plan.map((p, i) => ((plan[i - 1]?.riaAssets ?? 0) + p.riaAssets) / 2 * 0.004) },
  { title: 'B2B FX strategies', values: plan.map((p, i) => ((plan[i - 1]?.businessClients ?? 0) + p.businessClients) / 2 * 200_000) },
];
export const earnedTotals = plan.map((_, i) => earnedStreams.reduce((sum, stream) => sum + stream.values[i], 0));
export const onboardingRevenue = launchPlan.customers * launchPlan.strategyPriceMonthly * launchPlan.onboardingBillingFraction;
export const millions = (value: number, precision = 1) => value === 0 ? '—' : `$${Number((value / 1_000_000).toFixed(precision))}M`;
