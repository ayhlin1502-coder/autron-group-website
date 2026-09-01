"use client";

import { FormEvent, useState } from "react";

const helpOptions = [
  "International Trade",
  "Brand Distribution",
  "International Logistics",
  "Technology-Website",
  "Supplier Cooperation",
  "Distribution Cooperation",
  "General Enquiry"
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.currentTarget)
      });
      const result = await response.json() as { error?: string };

      if (!response.ok) {
        setError(result.error ?? "Unable to submit your enquiry. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Unable to submit your enquiry. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="border border-primary/30 bg-primary/5 p-xl text-charcoal">
        <h3 className="font-display text-2xl font-bold text-navy">Thank you for your enquiry.</h3>
        <p className="mt-md text-body">We have received your message and will review the details provided.</p>
      </div>
    );
  }

  return (
    <form className="space-y-lg" onSubmit={handleSubmit}>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="help" className="mb-sm block text-sm font-semibold text-charcoal">How Can We Help? <span aria-hidden="true" className="text-primary">*</span></label>
        <select id="help" name="help" required defaultValue="" className="w-full border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="" disabled>Select an enquiry type</option>
          {helpOptions.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>

      <div className="grid gap-lg sm:grid-cols-2">
        <Field id="name" label="Name" required />
        <Field id="company" label="Company" required />
        <Field id="email" label="Email" type="email" required />
        <Field id="phone" label="Phone" type="tel" />
        <Field id="country" label="Country" required />
        <Field id="business-type" label="Business Type" required />
      </div>

      <Field id="enquiry-category" label="Enquiry Category" required maxLength={120} />
      <div>
        <label htmlFor="message" className="mb-sm block text-sm font-semibold text-charcoal">Message <span aria-hidden="true" className="text-primary">*</span></label>
        <textarea id="message" name="message" required maxLength={5000} rows={6} className="w-full resize-y border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </div>

      <button type="submit" disabled={submitting} className="bg-primary px-lg py-md text-sm font-semibold text-white transition-colors duration-fast hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? "Submitting…" : "Submit Enquiry"}
      </button>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    </form>
  );
}

function Field({ id, label, type = "text", required = false, maxLength }: { id: string; label: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label htmlFor={id} className="mb-sm block text-sm font-semibold text-charcoal">{label} {required && <span aria-hidden="true" className="text-primary">*</span>}</label>
      <input id={id} name={id} type={type} required={required} maxLength={maxLength ?? (id === "name" ? 100 : id === "company" ? 150 : id === "email" ? 254 : id === "phone" ? 40 : id === "country" ? 100 : id === "business-type" ? 100 : 120)} className="w-full border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
