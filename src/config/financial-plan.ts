// Five-year plan behind the market slide (slide 6) and its research page.
// The financials slide that also used it is in presentation/backup.
// Illustrative operating assumptions at each year-end, not validated forecasts.
// App access bundled with a strategy is excluded from app subscriber counts.
export const plan = [
  { year: 'Year 1', appUsers: 500, strategySubs: 400, strategyPrice: 500, riaAssets: 0, businessClients: 0, milestone: 'Forex launch', detail: 'App + strategy subscriptions' },
  { year: 'Year 2', appUsers: 2000, strategySubs: 1000, strategyPrice: 800, riaAssets: 0, businessClients: 0, milestone: 'Futures + crypto', detail: 'Scale partner distribution' },
  { year: 'Year 3', appUsers: 5000, strategySubs: 2500, strategyPrice: 1000, riaAssets: 750_000_000, businessClients: 5, milestone: 'Stocks + RIA pilots', detail: 'First paid corporate FX clients' },
  { year: 'Year 4', appUsers: 10000, strategySubs: 5500, strategyPrice: 1000, riaAssets: 3_000_000_000, businessClients: 30, milestone: 'Options + institutional growth', detail: 'Expand strategy mandates' },
  { year: 'Year 5', appUsers: 20000, strategySubs: 10000, strategyPrice: 1000, riaAssets: 10_000_000_000, businessClients: 80, milestone: 'Scale across markets', detail: 'Four established revenue streams' },
];
// Blended app price: 80% Trader ($25), 15% Pro ($99), 5% Elite ($200) is about $45/month,
// the same tier mix the market-sizing research uses for the retail SAM.
const APP_PRICE_MONTHLY = 45;

export const streams = [
  { title: 'App subscriptions', shade: '#a3a3a3', values: plan.map(p => p.appUsers * APP_PRICE_MONTHLY * 12) },
  { title: 'Premium strategies', shade: '#171717', values: plan.map(p => p.strategySubs * p.strategyPrice * 12) },
  { title: 'RIA strategy licensing', shade: '#525252', values: plan.map(p => p.riaAssets * 0.004) },
  { title: 'B2B FX strategies', shade: '#d4d4d4', values: plan.map(p => p.businessClients * 200_000) },
];
export const totals = plan.map((_, i) => streams.reduce((sum, stream) => sum + stream.values[i], 0));
export const millions = (value: number) => value === 0 ? '—' : `$${Number((value / 1_000_000).toFixed(1))}M`;
