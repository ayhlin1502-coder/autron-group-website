import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Network | Autron Group",
  description: "Explore the markets connected to Autron Group across Australia, Taiwan, China, the USA, Japan and Vietnam."
};

const markets = ["Australia", "Taiwan", "China", "USA", "Japan", "Vietnam"];

const marketCategories = [
  { title: "Operational Markets", description: "Markets with confirmed operational activity.", markets: ["[CONTENT REQUIRED - 待確認市場]"] },
  { title: "Trading Markets", description: "Markets connected to confirmed or developing trading activity.", markets: ["[CONTENT REQUIRED - 待確認市場]"] },
  { title: "Distribution Markets", description: "Markets with confirmed or developing distribution activity.", markets: ["[CONTENT REQUIRED - 待確認市場]"] },
  { title: "Expansion Markets", description: "Markets identified for future business development.", markets: ["[CONTENT REQUIRED - 待確認市場]"] }
];

export default function GlobalNetworkPage() {
  return (
    <main>
      <section className="bg-surface-off px-lg py-4xl" aria-labelledby="network-hero-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-lg text-sm font-semibold uppercase tracking-[0.2em] text-primary">Markets We Serve</p>
          <h1 id="network-hero-heading" className="max-w-4xl font-display text-display font-bold text-navy">Global Network</h1>
          <p className="mt-xl max-w-2xl text-body-lg text-charcoal/80">Connecting Australia, Taiwan and international markets through trade, distribution, logistics and technology capabilities.</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-lg py-4xl" aria-labelledby="markets-heading">
        <div className="max-w-2xl">
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Markets We Serve</p>
          <h2 id="markets-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">A network across key markets.</h2>
        </div>
        <ul className="mt-2xl grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market) => <li key={market} className="relative z-0 bg-white px-md py-xl text-center font-display text-lg font-semibold text-navy transition-all duration-fast hover:z-10 hover:scale-[1.03] hover:bg-primary hover:text-white">{market}</li>)}
        </ul>
      </section>

      <section className="bg-surface-muted px-lg py-4xl" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Market Framework</p>
          <h2 id="categories-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Network by Activity</h2>
          <div className="mt-2xl grid gap-md md:grid-cols-2">
            {marketCategories.map((category) => (
              <article key={category.title} className="border border-line bg-white p-xl">
                <h3 className="font-display text-xl font-semibold text-navy">{category.title}</h3>
                <p className="mt-sm text-sm leading-6 text-charcoal/70">{category.description}</p>
                <ul className="mt-lg space-y-sm text-sm text-charcoal/80">
                  {category.markets.map((market) => <li key={market}>— {market}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-xl text-sm italic text-charcoal/60">Market classification and activity status require confirmation before publication. This page does not represent market locations as offices.</p>
        </div>
      </section>

      <section className="bg-primary px-lg py-4xl text-center text-white" aria-labelledby="network-cta-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="network-cta-heading" className="font-display text-3xl font-bold sm:text-4xl">Connect with our network.</h2>
          <Link href="/contact" className="mt-2xl inline-flex border border-white px-lg py-md text-sm font-semibold text-white transition-colors duration-fast hover:bg-white hover:text-primary">Partner With Autron <span aria-hidden="true" className="ml-sm">→</span></Link>
        </div>
      </section>
    </main>
  );
}
