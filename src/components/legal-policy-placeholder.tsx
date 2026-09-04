import Link from "next/link";

export function LegalPolicyPlaceholder({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <main>
      <section className="flex h-[70vh] items-center bg-surface-off px-lg py-4xl md:h-[75vh] lg:h-[78vh]" aria-labelledby="legal-policy-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-lg text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h1 id="legal-policy-heading" className="max-w-4xl font-display text-display font-bold text-navy">{title}</h1>
          <p className="mt-xl max-w-2xl text-body-lg text-charcoal/80">
            This page is reserved for the company-approved policy.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-content px-lg py-4xl" aria-labelledby="legal-content-heading">
        <div className="max-w-3xl border border-line bg-white p-xl shadow-sm">
          <h2 id="legal-content-heading" className="font-display text-2xl font-bold text-navy">Policy content</h2>
          <p className="mt-lg text-body font-semibold text-primary">[CONTENT REQUIRED - pending legal review]</p>
          <p className="mt-md text-body leading-7 text-charcoal/75">
            The final policy wording will be published after it has been supplied and approved by the appropriate company or legal owner.
          </p>
          <Link href="/contact" className="mt-xl inline-flex border border-primary px-lg py-md text-sm font-semibold text-primary transition-colors duration-fast hover:bg-primary hover:text-white">
            Contact Autron Group <span aria-hidden="true" className="ml-sm">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
