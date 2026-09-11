"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

const helpOptions = [
  "國際貿易",
  "品牌經銷",
  "國際物流",
  "科技與網站",
  "供應商合作",
  "經銷商合作",
  "一般諮詢"
];

export function ContactForm() {
  const isEnglish = usePathname().startsWith("/en");
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
        <h3 className="font-display text-2xl font-bold text-navy">{isEnglish ? "Thank you for your enquiry." : "感謝您的詢問"}</h3>
        <p className="mt-md text-body">{isEnglish ? "We have received your message and will be in touch shortly." : "我們已收到您的訊息，將盡快與您聯繫。"}</p>
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
        <label htmlFor="help" className="mb-sm block text-sm font-semibold text-charcoal">{isEnglish ? "Enquiry Type" : "詢問類型"} <span aria-hidden="true" className="text-primary">*</span></label>
        <select id="help" name="help" required defaultValue="" className="w-full rounded-md border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20">
          <option value="" disabled>{isEnglish ? "Select an enquiry type" : "請選擇詢問類型"}</option>
          {(isEnglish ? ["International Trade", "Brand Distribution", "International Logistics", "Technology & Website", "Supplier Cooperation", "Distributor Cooperation", "General Enquiry"] : helpOptions).map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>

      <div className="grid gap-lg sm:grid-cols-2">
        <Field id="name" label={isEnglish ? "Name" : "姓名"} required />
        <Field id="company" label={isEnglish ? "Company" : "公司名稱"} required />
        <Field id="email" label={isEnglish ? "Email" : "電子郵件"} type="email" required />
        <Field id="phone" label={isEnglish ? "Phone" : "聯絡電話"} type="tel" />
        <Field id="country" label={isEnglish ? "Country / Region" : "國家／地區"} required />
        <Field id="business-type" label={isEnglish ? "Business Type" : "公司類型"} />
      </div>

      <Field id="enquiry-category" label={isEnglish ? "Message Subject" : "訊息標題"} maxLength={120} />
      <div>
        <label htmlFor="message" className="mb-sm block text-sm font-semibold text-charcoal">{isEnglish ? "Message" : "訊息內容"} <span aria-hidden="true" className="text-primary">*</span></label>
        <textarea id="message" name="message" required maxLength={5000} rows={6} className="w-full resize-y rounded-md border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </div>

      <button type="submit" disabled={submitting} className="flex w-full items-center justify-center gap-sm rounded-md bg-primary px-lg py-md text-sm font-semibold text-white transition-colors duration-fast hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60">
        {submitting ? (isEnglish ? "Submitting…" : "送出中…") : (isEnglish ? "Submit Enquiry" : "提交詢問")}
      </button>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    </form>
  );
}

function Field({ id, label, type = "text", required = false, maxLength }: { id: string; label: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
        <label htmlFor={id} className="mb-sm block text-sm font-semibold text-charcoal">{label} {required && <span aria-hidden="true" className="text-primary">*</span>}</label>
      <input id={id} name={id} type={type} required={required} maxLength={maxLength ?? (id === "name" ? 100 : id === "company" ? 150 : id === "email" ? 254 : id === "phone" ? 40 : id === "country" ? 100 : id === "business-type" ? 100 : 120)} className="w-full rounded-md border border-line bg-white px-md py-md text-sm text-charcoal outline-none transition-colors duration-fast focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}
