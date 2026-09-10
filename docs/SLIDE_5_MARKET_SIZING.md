# Slide 5: evidence for the market sizing figures

Research checked September 9, 2026. Heading: **Large Market. Focused Entry.**

Slide 5 states three numbers: a 370M TAM, a 10–15M SAM, and a 6.2M SOM. All three are industry estimates rather than measured populations. No official body counts self-directed retail traders globally, so the honest claim the slide can carry is that the market is large enough not to be the binding constraint — not that these are precise counts.

Companion page for investors: `/research/market-sizing`.

## TAM — 370M global active self-directed traders

Bottom-up sum across speculative asset classes: ~160–170M equities, 50–100M crypto, 10–15M forex and CFDs, 8–10M options and futures. An independent aggregator estimate of ~330M people active in financial markets in 2025 is the closest external check, and it lands in the same order of magnitude.

The crypto component is the weakest. Crypto.com's on-chain estimate puts global crypto *ownership* at 741M in 2025 (up from 659M in 2024), but ownership is not trading, and the 50–100M active-trader figure is an assumed subset of that.

Suggested framing: **an order-of-magnitude ceiling**, not a count.

Sources:
- https://crypto.com/en/research/crypto-market-sizing-report-2025
- https://www.weforum.org/publications/global-retail-investor-outlook-2025/key-insights-global-retail-investor-outlook-2025/
- https://www.compareforexbrokers.com/trading/statistics/

## SAM — 10–15M active retail forex and CFD traders

This is the repeated industry consensus range, where "active" typically means at least one trade in a 90-day window.

The most rigorous recent count is narrower. Finance Magnates Intelligence recorded **6.787M active CFD accounts in Q4 2025**, up 14.6% from 5.922M in Q3 2025, and up from 5.067M in Q4 2024. That series measures accounts at tracked brokers rather than individuals, so it undercounts brokers outside the panel and overcounts traders holding multiple accounts.

Defensible statement: the active retail FX/CFD population is in the **high single-digit to low double-digit millions and growing at double-digit rates**, with 10–15M at the optimistic end. The quarterly Finance Magnates series is the better long-term anchor because it is measured rather than estimated.

Sources:
- https://www.financemagnates.com/forex/analysis/exclusive-cfd-industry-tops-6-million-accounts-can-the-momentum-hold-in-2026/
- https://www.compareforexbrokers.com/trading/statistics/

## Retail daily volume — use $242B, not $650B

The **$650B daily retail volume figure in the source market-sizing extract does not hold up.** It circulates on aggregator sites attributed to "margin account data" and could not be traced to a primary source.

The BIS Triennial Central Bank Survey put total OTC FX turnover at **$9.6T per day in April 2025** (+28% since 2022). Within that, **retail-driven trades averaged $242B per day, about 2.5% of global turnover**, up 26% from $192B in 2022. That is roughly 2.7x smaller than the $650B claim. Slide 5 now cites $242B.

One caveat on the figure we do use: the BIS headline release breaks counterparties into inter-dealer (46%), other financial institutions (50%) and non-financial customers (5%), and does not publish a retail line. The $242B is reported from the survey dataset by industry analysts rather than lifted from the public summary.

Volume is also the wrong denominator for a subscription business. It sizes the market traders operate in, not the revenue available from them — a point already raised in `GENERALIST_INVESTOR_SLIDE_REVIEW.md`.

Sources:
- https://www.bis.org/statistics/rpfx25_fx.htm
- https://www.bis.org/statistics/rpfx25_announcement.htm
- https://www.compareforexbrokers.com/trading/statistics/

## SOM — 6.2M traders in the three launch regions

The three launch regions sum to ~6.2M traders: **APAC 3.2M, North America 1.5M, Europe 1.5M**. (EMEA expansion would add ~1.3M in Africa and ~1M in the Middle East.)

These regional counts trace to BrokerNotes' *Modern Trader* study — 9.6M online traders worldwide, with 3.2M in Asia, 1.5M in Europe and 1.3M in Africa. **This is the weakest input on the slide:**

- The study dates from 2018 and aggregators that once cited it now describe it as dated.
- Its regional counts derive from social platform audience data, not broker records.
- It counts online traders across asset classes, not forex traders specifically.
- The North America figure of 1.5M appears in secondary summaries but not in the published regional appendix we could retrieve.

The SOM states the reachable population in those regions. Capture is a separate planning assumption that belongs with the financials: 1% over one to three years would be **62,000 active users**. Capture rate is not a finding — it follows from a channel mix, CAC and conversion rate that must be defended on their own evidence, and it is a headcount, not revenue.

Sources:
- https://www.brokernotes.co/modern-trader
- https://www.brokernotes.co/forex-traders-map

## Open items

1. Replace the 2018 regional split with current broker-level or regulator-published account counts for the launch markets.
2. Re-anchor the SAM on the Finance Magnates quarterly account series, which is measured and shows a real growth trend.
3. Convert the capture assumption from headcount to revenue with a stated ARPU and retention assumption.
4. The old slide 8 that cited a "150K–250K MT4/MT5 retail trader market" has since been removed from the deck, so that contradiction is resolved.
