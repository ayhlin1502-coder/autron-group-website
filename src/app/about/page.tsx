import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Autron Group | Cross-Border Business Platform",
  description: "Learn how Autron Group connects Australia, Taiwan and global markets through complementary business platforms and cross-border capabilities."
};

const businessUnits = [
  { name: "Autron Trade", description: "International trade, global sourcing, import-export and market development.", href: "/autron-trade" },
  { name: "AuzCare", description: "Brand representation, distribution and retail channel development.", href: "/auzcare" },
  { name: "AutronGo", description: "International freight, consolidation and cross-border logistics coordination.", href: "/autrongo" },
  { name: "Quarter Innovations", description: "Website development and digital marketing for business growth.", href: "/quarter-innovations" }
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-surface-off px-lg py-4xl" aria-labelledby="about-hero-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-lg text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Autron Group</p>
          <h1 id="about-hero-heading" className="max-w-4xl font-display text-display font-bold text-navy">Connecting markets. Creating opportunities.</h1>
          <p className="mt-xl max-w-2xl text-body-lg text-charcoal/80">Autron Group is a cross-border business platform connecting Australia, Taiwan and global markets through complementary business capabilities.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-content gap-2xl px-lg py-4xl lg:grid-cols-[0.7fr_1.3fr]" aria-labelledby="who-we-are-heading">
        <h2 id="who-we-are-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Who We Are</h2>
        <div className="space-y-lg text-body text-charcoal/85">
          <p>Autron Group brings together market access, distribution, supply chain, logistics and digital capability to help products, brands and businesses move across borders.</p>
          <p>Our work is organised around four business platforms, each supporting a different part of the journey from sourcing and market entry to distribution, logistics and digital growth.</p>
        </div>
      </section>

      <section className="bg-surface-muted px-lg py-4xl" aria-labelledby="businesses-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Structure</p>
          <h2 id="businesses-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Businesses</h2>
          <div className="mt-2xl grid gap-md md:grid-cols-2">
            {businessUnits.map((unit) => (
              <article key={unit.name} className="border border-line bg-white p-xl">
                <h3 className="font-display text-xl font-semibold text-navy">{unit.name}</h3>
                <p className="mt-sm text-body text-charcoal/75">{unit.description}</p>
                <Link href={unit.href} className="mt-lg inline-flex text-sm font-semibold text-primary underline underline-offset-4">Explore {unit.name} <span aria-hidden="true" className="ml-xs">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-content gap-2xl px-lg py-4xl lg:grid-cols-2" aria-labelledby="philosophy-heading">
        <div>
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Philosophy</p>
          <h2 id="philosophy-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Built for meaningful connections.</h2>
        </div>
        <p className="text-body-lg text-charcoal/85">We believe cross-border business is built through clear communication, thoughtful market understanding and practical execution. Our approach is to connect the right opportunity, capability and market at the right stage.</p>
      </section>

      <section className="bg-navy px-lg py-4xl text-white" aria-labelledby="advantage-heading">
        <div className="mx-auto grid max-w-content gap-2xl lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Our Perspective</p>
            <h2 id="advantage-heading" className="font-display text-3xl font-bold sm:text-4xl">Australia × Taiwan Advantage</h2>
          </div>
          <p className="text-body-lg text-white/80">Autron Group combines an understanding of Australian suppliers, the Taiwanese market, Asian distribution and cross-border business. This perspective helps us identify and develop connections across markets.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-content gap-2xl px-lg py-4xl lg:grid-cols-2" aria-labelledby="network-heading">
        <div>
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Business Network</p>
          <h2 id="network-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">Our Global Network</h2>
        </div>
        <div>
          <p className="text-body-lg text-charcoal/80">Our business network connects Australia, Taiwan, China, the USA, Japan and Vietnam. Market roles and activities are managed and confirmed on an ongoing basis.</p>
          <Link href="/global-network" className="mt-lg inline-flex text-sm font-semibold text-primary underline underline-offset-4">View markets we serve <span aria-hidden="true" className="ml-xs">→</span></Link>
        </div>
      </section>

      <section className="bg-surface-off px-lg py-4xl" aria-labelledby="structure-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Group Structure</p>
          <h2 id="structure-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">One group, complementary platforms.</h2>
          <div className="mt-2xl border-l-2 border-primary pl-xl font-mono text-sm leading-8 text-charcoal/80">
            <p>Autron Holdings</p>
            <p>└── Autron Group / Autron International Australia</p>
            <p className="pl-lg">├── Autron International Trade</p>
            <p className="pl-2xl">├── Autron Trade</p>
            <p className="pl-2xl">└── AuzCare</p>
            <p className="pl-lg">├── Autron Logistics</p>
            <p className="pl-2xl">└── AutronGo</p>
            <p className="pl-lg">└── Autron Tech</p>
            <p className="pl-2xl">└── Quarter Innovations</p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-lg py-4xl text-center text-white" aria-labelledby="about-cta-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="about-cta-heading" className="font-display text-3xl font-bold sm:text-4xl">Explore an opportunity with Autron.</h2>
          <Link href="/contact" className="mt-2xl inline-flex border border-white px-lg py-md text-sm font-semibold text-white transition-colors duration-fast hover:bg-white hover:text-primary">Contact Autron Group <span aria-hidden="true" className="ml-sm">→</span></Link>
        </div>
      </section>
    </main>
  );
}
