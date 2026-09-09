'use client';

import { useState } from 'react';

const assistants = [
  { name: 'ChatGPT', url: 'https://chatgpt.com/' },
  { name: 'Claude', url: 'https://claude.ai/new' },
];

const DEFAULT_QUERY = 'Research on trading strategy performance across market conditions and investor decision-making';
const DEFAULT_CONTEXT = 'retail traders keeping strategies effective as markets change, choosing strategies for current conditions, and turning charts and signals into decisions';

type ResearchSearchProps = {
  defaultQuery?: string;
  context?: string;
};

export function ResearchSearch({ defaultQuery = DEFAULT_QUERY, context = DEFAULT_CONTEXT }: ResearchSearchProps = {}) {
  const [query, setQuery] = useState(defaultQuery);
  const [status, setStatus] = useState('');
  const search = query.trim();
  const prompt = `Research this question: ${search}\n\nContext: ${context}. Cite primary research with links. Distinguish published findings from interpretation and explain limitations for retail FX and CFD traders.`;

  return (
    <section aria-labelledby="research-search-title" className="mb-12">
      <h2 id="research-search-title" className="text-2xl font-semibold">Explore the research yourself</h2>
      <form action="https://www.google.com/search" method="get" target="_blank" rel="noopener noreferrer" className="mt-5">
        <label htmlFor="research-query" className="block text-sm font-medium mb-2">What would you like to research?</label>
        <input
          id="research-query"
          name="q"
          type="search"
          required
          value={query}
          onChange={(event) => { setQuery(event.target.value); setStatus(''); }}
          className="w-full rounded-md border border-gray-400 px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2"
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="submit" disabled={!search} className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-40">Search Google</button>
          {assistants.map(({ name, url }) => (
            <a
              key={name}
              href={search ? `${url}?${new URLSearchParams({ q: prompt })}` : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!search}
              onClick={(event) => {
                if (!search) { event.preventDefault(); return; }
                setStatus(`Opening ${name} with your research question. Review and send it there.`);
              }}
              className={`rounded-md border border-gray-400 px-4 py-2 hover:bg-gray-100 ${!search ? 'opacity-40' : ''}`}
            >
              Ask {name}
            </a>
          ))}
        </div>
      </form>
      <p className="mt-3 text-sm text-gray-600">Google opens search results. ChatGPT and Claude open with your research question. All open in a new tab.</p>
      <p role="status" className="mt-2 text-sm text-gray-700">{status}</p>
    </section>
  );
}
