import Link from "next/link";

export type BusinessPageData = {
  name: string;
  eyebrow: string;
  hero: string;
  positioning: string;
  services?: string[];
  serviceGroups?: { title: string; items: string[] }[];
  productGroups?: { title: string; items: string[] }[];
  targetMarkets?: { market: string; channels: string[] }[];
  brands?: string[];
  note?: string;
  ctas: { label: string; href: string; primary?: boolean }[];
};

function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="mt-lg grid gap-sm sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="border-b border-line py-sm text-charcoal/85">{item}</li>
      ))}
    </ul>
  );
}

export function BusinessPage({ data }: { data: BusinessPageData }) {
  return (
    <main>
      <section className="bg-surface-off px-lg py-4xl" aria-labelledby="business-hero-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-lg text-sm font-semibold uppercase tracking-[0.2em] text-primary">{data.eyebrow}</p>
          <h1 id="business-hero-heading" className="max-w-5xl font-display text-display font-bold text-navy">{data.hero}</h1>
          <p className="mt-xl max-w-3xl text-body-lg text-charcoal/80">{data.positioning}</p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-lg py-4xl" aria-labelledby="services-heading">
        <div className="grid gap-2xl lg:grid-cols-[0.7fr_1.3fr]">
          <h2 id="services-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Services &amp; Capabilities</h2>
          <div>
            {data.services && <ContentList items={data.services} />}
            {data.serviceGroups?.map((group) => (
              <div key={group.title} className="border-t border-line py-xl first:mt-lg">
                <h3 className="font-display text-xl font-semibold text-charcoal">{group.title}</h3>
                <ContentList items={group.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.productGroups && (
        <section className="bg-surface-muted px-lg py-4xl" aria-labelledby="products-heading">
          <div className="mx-auto max-w-content">
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Products We Trade</p>
            <h2 id="products-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Product Categories</h2>
            <div className="mt-2xl grid gap-xl md:grid-cols-2">
              {data.productGroups.map((group) => (
                <article key={group.title} className="border border-line bg-white p-xl">
                  <h3 className="font-display text-xl font-semibold text-charcoal">{group.title}</h3>
                  <ContentList items={group.items} />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.brands && (
        <section className="bg-surface-muted px-lg py-4xl" aria-labelledby="brands-heading">
          <div className="mx-auto max-w-content">
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</p>
            <h2 id="brands-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Brand Cooperation</h2>
            <p className="mt-lg max-w-3xl text-body text-charcoal/80">The following brand names require confirmation of their current relationship and classification before publication.</p>
            <div className="mt-2xl grid gap-md sm:grid-cols-2 lg:grid-cols-3">
              {data.brands.map((brand) => (
                <div key={brand} className="border border-line bg-white p-lg">
                  <h3 className="font-display text-lg font-semibold text-navy">{brand}</h3>
                  <p className="mt-sm text-sm text-charcoal/65">[CONTENT REQUIRED - 待確認分類]</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.targetMarkets && (
        <section className="mx-auto max-w-content px-lg py-4xl" aria-labelledby="markets-heading">
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Target Markets</p>
          <h2 id="markets-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Markets &amp; Channel Types</h2>
          <div className="mt-2xl grid gap-md md:grid-cols-2 lg:grid-cols-3">
            {data.targetMarkets.map((market) => (
              <article key={market.market} className="border border-line p-xl">
                <h3 className="font-display text-xl font-semibold text-navy">{market.market}</h3>
                <ul className="mt-md space-y-sm text-sm leading-6 text-charcoal/75">
                  {market.channels.map((channel) => <li key={channel}>— {channel}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {data.note && <p className="mx-auto max-w-content px-lg pb-4xl text-sm italic text-charcoal/65">{data.note}</p>}

      <section className="bg-primary px-lg py-4xl text-center text-white" aria-labelledby="business-cta-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="business-cta-heading" className="font-display text-3xl font-bold sm:text-4xl">Work with {data.name}</h2>
          <div className="mt-2xl flex flex-col justify-center gap-sm sm:flex-row">
            {data.ctas.map((cta) => (
              <Link key={cta.label} href={cta.href} className={cta.primary ? "bg-white px-lg py-md text-sm font-semibold text-primary transition-colors duration-fast hover:bg-surface-muted" : "border border-white px-lg py-md text-sm font-semibold text-white transition-colors duration-fast hover:bg-white hover:text-primary"}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
