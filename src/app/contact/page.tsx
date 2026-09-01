import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Autron Group",
  description: "Contact Autron Group about international trade, brand distribution, logistics and technology services."
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-surface-off px-lg py-4xl" aria-labelledby="contact-hero-heading">
        <div className="mx-auto max-w-content">
          <p className="mb-lg text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact Autron Group</p>
          <h1 id="contact-hero-heading" className="max-w-4xl font-display text-display font-bold text-navy">Let&apos;s explore what we can build together.</h1>
          <p className="mt-xl max-w-2xl text-body-lg text-charcoal/80">Tell us what you are looking for and we can direct your enquiry to the most relevant business platform.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-content gap-3xl px-lg py-4xl lg:grid-cols-[0.65fr_1.35fr]" aria-labelledby="enquiry-heading">
        <div>
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.2em] text-primary">Start an Enquiry</p>
          <h2 id="enquiry-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">How can we help?</h2>
          <p className="mt-lg text-body text-charcoal/75">Complete the form and provide the details that best describe your enquiry.</p>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
