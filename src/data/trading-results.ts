export const myfxbookUrl = 'https://www.myfxbook.com/portfolio/ai-oro-gold-x9/11957941';
export const resultsPdf = '/evidence/ai-oro-gold-x9-2026-09-10.pdf';
export const monthlyResults = [
  { month: 'Jan', gain: 32.52 }, { month: 'Feb', gain: 54.70 },
  { month: 'Mar', gain: 50.56 }, { month: 'Apr', gain: 33.53 },
  { month: 'May', gain: 52.42 }, { month: 'Jun', gain: 1.43 },
  { month: 'Jul', gain: -11.82 },
];
export const resultGroups = [
  { title: 'Account and snapshot', rows: [
    ['Strategy', 'Falcon (internal name on Myfxbook: AI ORO GOLD X9)'], ['Publisher', 'forexbottrade'], ['Account', 'Real (USD)'],
    ['Broker', 'VT Markets'], ['Method', 'Technical, automated'], ['Leverage', '1:500'], ['Platform', 'MetaTrader 4'],
    ['PDF captured', 'September 10, 2026 at 2:06 PM (timezone not specified)'], ['Last update shown', 'Aug 21 at 05:10'], ['Tracking', '3'],
    ['Verification indicators', 'Trading privileges: check mark; track record, live update and cashback: warning icons'],
  ] },
  { title: 'Account performance', rows: [
    ['Gain', '+461.95%'], ['Absolute gain', '+81.70%'], ['Daily', '0.72%'], ['Monthly', '27.89%'], ['Drawdown', '24.77%'],
    ['Balance', '$0.00'], ['Equity', '(0%) $0.00'], ['Highest', '$3,666.49 (Feb 06)'], ['Profit', '$3,088.24'],
    ['Interest', '-$6.15'], ['Deposits', '$3,780.00'], ['Withdrawals', '$6,868.24'],
  ] },
  { title: 'Period summary', rows: [
    ['Today / this week / this month', 'All metrics shown as dashes'], ['This year: gain', '+461.89%'],
    ['This year: profit', '$3,088.24'], ['This year: pips', '+296,530.0'], ['This year: win rate', '77%'],
    ['This year: trades', '716'], ['This year: lots', 'Private'], ['Period differences', 'Shown as dashes'],
  ] },
  { title: 'Trade statistics', rows: [
    ['Trades', '716'], ['Profitability field', 'Blank in PDF; period summary reports 77% win rate'], ['Pips', '296,530.0'],
    ['Average win', '858.56 pips / $8.82'], ['Average loss', '-1105.62 pips / -$11.08'], ['Lots', 'Private'], ['Commissions', '$0.00'],
    ['Longs won', '(313/394) 79%'], ['Shorts won', '(241/322) 74%'], ['Best trade ($)', '$109.65 (Jan 19)'],
    ['Worst trade ($)', '-$89.72 (Jun 09)'], ['Best trade (pips)', '8,764.0 (Jan 20)'], ['Worst trade (pips)', '-8,972.0 (Jun 09)'],
    ['Average trade length', '1h 4m'], ['Profit factor', '2.72'], ['Standard deviation', '$14.913'], ['Sharpe ratio', '0.27'],
    ['Z-score (probability)', '-7.40 (99.99%)'], ['Expectancy', '414.1 pips / $4.31'], ['AHPR', '0.25%'], ['GHPR', '0.08%'],
  ] },
];

// Falcon admin trade records for the beta accounts running Falcon, exported Oct 6, 2026. One test account is excluded.
// Beta accounts running our other strategies are not included.
// The export lists customer names, so it stays out of the repo and the public site.
export const betaResults = {
  period: 'Sep 7 – Oct 6, 2026',
  accounts: 12,
  // Net profit in USD per month. The dashboard records no account balances, so there are no percentages.
  months: [
    { label: 'Sep 7–30', netProfit: 5554.18 },
    // October is in progress, so the deck chart leaves it out until the month closes.
    { label: 'Oct 1–6', netProfit: -3663.84, partial: true },
  ],
  rows: [
    ['Period', 'September 7 – October 6, 2026'],
    ['Accounts', '12 beta accounts running Falcon; one test account excluded'],
    ['Closed trades', '336 (244 wins, 86 losses, 6 breakeven)'],
    ['Win rate', '73.94% of decided trades'],
    ['Net P&L', '$1,890.34'],
    ['Profit factor', '1.31'],
    ['Expectancy', '$5.63 per trade'],
    ['Average win / loss', '$32.35 / -$69.81'],
    ['Average trade length', '55m 45s'],
    ['Sub-strategies', '9 run; 6 profitable, 3 lost money'],
    ['September 7–30', '+$5,554.18 net · 257 trades · 84.71% win rate · profit factor 3.55'],
    ['October 1–6', '-$3,663.84 net · 79 trades · 37.33% win rate · profit factor 0.04'],
    ['Source', 'VibeTrader Falcon admin trade records, exported October 6, 2026'],
  ],
};

// Second real-money Myfxbook account running Falcon (internal name "AI ORO GOLD X9 STD"). Read from the public
// page on Oct 7, 2026, when it was still live. It carries the record after account 1 stopped trading in July.
export const secondAccountUrl = 'https://www.myfxbook.com/members/forexbottrade/ai-oro-gold-x9-std/11988201';
export const secondAccountMonthly = [
  { month: 'Mar', gain: 45.14 }, { month: 'Apr', gain: 10.66 },
  { month: 'May', gain: 40.63 }, { month: 'Jun', gain: 36.31 },
  { month: 'Jul', gain: 1.15 }, { month: 'Aug', gain: 12.62 },
  { month: 'Sep', gain: 2.70 },
  // October is in progress (month to date on Oct 7), so the deck chart leaves it out until the month closes.
  { month: 'Oct', gain: -8.95, partial: true },
];
export const secondAccountRows = [
  ['Strategy', 'Falcon (internal name on Myfxbook: AI ORO GOLD X9 STD)'],
  ['Account', 'Real (USD), VT Markets, 1:500, MetaTrader 4'],
  ['Read', 'October 7, 2026; page showed last update 20 hours earlier'],
  ['Verification indicators', 'Trading privileges: check mark; track record, live update and cashback: warning icons'],
  ['Gain', '+227.98%'], ['Absolute gain', '+23.64%'], ['Monthly', '18.11%'], ['Drawdown', '26.25%'],
  ['Balance', '$941.80'], ['Equity', '$991.50'], ['Deposits', '$6,005.23'], ['Withdrawals', '$6,433.24'],
  ['Profit', '$1,419.51'], ['Trades', '707'], ['Win rate (this year)', '72%'], ['Profit factor', '1.67'],
];
