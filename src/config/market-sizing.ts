// Historical inputs and assumptions from the Evidence and Market sizing workbook tabs.
// These are broad revenue proxies; geography and product eligibility are not yet filtered.
export const marketInputs = {
  retailPeopleLow: 10_000_000, // Unverified deck estimate of people, not measured accounts.
  retailPeopleHigh: 15_000_000,
  retailRevenueAnnual: 660,
  cfdAccounts: 6_787_000, // Finance Magnates, Q4 2025.
  appEntryMonthly: 25,
  appBlendedMonthly: 25 * 0.8 + 99 * 0.15 + 200 * 0.05,
  strategyTakeUp: 0.01, // Assumed share of accounts; not observed paid conversion.
  strategyMonthly: 1_000, // Market / Year 5 blend, distinct from the $500 launch example.
  smaAssets: 3_860_000_000_000, // Cerulli, Q1 2025.
  modelAssets: 645_000_000_000, // Morningstar, March 31, 2025 lower-bound proxy.
  riaAnnualFee: 0.004,
  treasuryMarket: 6_600_000_000, // CMI's broad 2025 treasury-management estimate.
  sampledCompanies: 1_200, // Kyriba, July 2023 sample; not a qualified customer list.
  businessAnnualContract: 200_000,
};

const m = marketInputs;
const strategyAccounts = m.cfdAccounts * m.strategyTakeUp;
const bundledAppOverlap = strategyAccounts * m.appBlendedMonthly * 12;
export const marketSizing = {
  retail: {
    tam: [m.retailPeopleLow * m.retailRevenueAnnual, m.retailPeopleHigh * m.retailRevenueAnnual],
    sam: [m.cfdAccounts * m.appEntryMonthly * 12,
      m.cfdAccounts * m.appBlendedMonthly * 12 + strategyAccounts * m.strategyMonthly * 12 - bundledAppOverlap],
  },
  ria: { tam: m.smaAssets * m.riaAnnualFee, sam: m.modelAssets * m.riaAnnualFee },
  business: { tam: m.treasuryMarket, sam: m.sampledCompanies * m.businessAnnualContract },
  strategyAccounts,
  bundledAppOverlap,
};
export const totalMarket = {
  tam: marketSizing.retail.tam.map(value => value + marketSizing.ria.tam + marketSizing.business.tam),
  sam: marketSizing.retail.sam.map(value => value + marketSizing.ria.sam + marketSizing.business.sam),
};
export const billionRange = (values: number[]) => `$${values.map(value => Number((value / 1_000_000_000).toFixed(2))).join('–')}B`;
// The deck shows one figure per estimate: the median of its low and high bounds.
export const midpoint = (values: number[]) => values.reduce((sum, value) => sum + value, 0) / values.length;
export const billions = (value: number) => billionRange([value]);

export const marketSources = {
  accounts: 'https://www.financemagnates.com/forex/analysis/exclusive-cfd-industry-tops-6-million-accounts-can-the-momentum-hold-in-2026/',
  sma: 'https://www.cerulli.com/press-releases/asset-managers-face-higher-than-expected-sma-redemption-rates',
  models: 'https://marketing.morningstar.com/content/cs-assets/v3/assets/blt9415ea4cc4157833/blt035fbf00ab4b9715/68acc5d112dfd77061f6f62e/2025_Model_Portfolio_Landscape_-_FINAL_Revised_Links.pdf',
  treasury: 'https://www.globenewswire.com/news-release/2025/10/07/3162611/0/en/Treasury-Management-Market-Size-to-Hit-USD-16-31-Billion-by-2032-says-Coherent-Market-Insights.html',
  companies: 'https://www.kyriba.com/news/kyriba-cir-july-2023-unveils-fx-headwinds/',
};
