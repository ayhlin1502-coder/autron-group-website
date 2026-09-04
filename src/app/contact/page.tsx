import type { Metadata } from "next";
import { Building2, Clock3, Globe2, Handshake, MapPin, Mail, Phone, Truck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "聯絡我們 | Autron Group", description: "聯絡澳創集團，洽詢國際貿易、品牌經銷、物流與科技服務。" };

const services = [
  { title: "業務諮詢", description: "了解我們的事業與解決方案", icon: Building2 },
  { title: "合作夥伴", description: "尋求策略合作，共同開發機會", icon: Handshake },
  { title: "經銷與貿易", description: "產品開發、貿易合作與市場拓展", icon: Globe2 },
  { title: "物流與支援", description: "物流服務、技術支援與售後服務", icon: Truck }
];

export default function ContactPage() {
  return (
    <main className="bg-white text-charcoal">
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-[#f9fbff] via-[#f0f6ff] to-[#e5efff] px-lg py-4xl sm:py-5xl" aria-labelledby="contact-hero-heading">
        <div className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] rounded-full border-[5rem] border-primary/10" />
        <div className="pointer-events-none absolute right-10 top-10 h-72 w-72 bg-[radial-gradient(circle_at_30%_30%,rgba(35,111,217,.2)_0_2px,transparent_3px)] [background-size:28px_28px] opacity-70" />
        <div className="relative mx-auto max-w-content"><p className="text-sm font-bold tracking-[0.2em] text-primary">聯絡澳創集團</p><h1 id="contact-hero-heading" className="mt-lg max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-[-0.03em] text-navy sm:text-6xl">Explore what<br className="hidden sm:block" /> we can build together.</h1><div className="mt-xl h-1 w-12 bg-primary" /><p className="mt-lg max-w-xl text-body-lg font-bold text-navy">告訴我們您的需求，我們將協助您找到最適合的事業平台。</p></div>
      </section>

      <section id="enquiry" className="mx-auto grid max-w-content scroll-mt-28 gap-3xl px-lg py-4xl lg:grid-cols-[0.72fr_1.28fr]" aria-labelledby="enquiry-heading">
        <div><p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">與我們聯繫</p><h2 id="enquiry-heading" className="mt-sm font-display text-3xl font-bold text-navy sm:text-4xl">我們可以怎麼協助您？</h2><p className="mt-lg max-w-md text-sm leading-7 text-charcoal/70">無論您有任何採購諮詢、合作提案或產品需求，我們都將盡快回覆並協助您找到最合適的團隊。</p>
          <div className="mt-xl grid grid-cols-2 gap-md">{services.map(({ title, description, icon: Icon }) => <div key={title} className="rounded-lg border border-line bg-white p-md shadow-[0_8px_22px_rgba(10,27,71,0.07)]"><Icon className="h-8 w-8 text-primary" strokeWidth={1.7} aria-hidden="true" /><h3 className="mt-sm font-display text-base font-bold text-primary">{title}</h3><p className="mt-xs text-xs leading-5 text-charcoal/70">{description}</p></div>)}</div>
          <h2 className="mt-2xl font-display text-2xl font-bold text-navy">聯絡資訊</h2><div className="mt-md space-y-sm"><ContactOffice flag="🇹🇼" title="台灣總公司" phone="+886 2 2702 6643" address="台北市大安區信義路四段 6 號 6 樓" /><ContactOffice flag="🇦🇺" title="澳洲辦公室" phone="+61 2 9415 4272" address="Level 12, 80 Collins St, Sydney NSW 2000, Australia" /></div>
          <div className="mt-md flex items-start gap-sm rounded-lg border border-primary/25 bg-[#edf4ff] p-md text-sm text-navy"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><p><span className="font-bold">快速回覆</span><br /><span className="text-xs text-charcoal/70">我們的團隊將於 1–2 個工作天內回覆您的詢問。</span></p></div>
        </div>
        <div className="rounded-xl border border-line bg-white p-lg shadow-[0_12px_32px_rgba(10,27,71,0.1)] sm:p-xl"><h2 className="font-display text-2xl font-bold text-navy">提交您的詢問</h2><ContactForm /></div>
      </section>
    </main>
  );
}

function ContactOffice({ flag, title, phone, address }: { flag: string; title: string; phone: string; address: string }) {
  return <div className="rounded-lg border border-line bg-white p-md shadow-[0_8px_22px_rgba(10,27,71,0.07)]"><div className="flex items-start gap-md"><span className="text-2xl" aria-hidden="true">{flag}</span><div><h3 className="font-bold text-primary">{title}</h3><p className="mt-xs flex items-center gap-xs text-xs text-charcoal/75"><Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />{phone}</p><p className="mt-xs flex items-center gap-xs text-xs text-charcoal/75"><Mail className="h-3.5 w-3.5 text-primary" aria-hidden="true" />info@autron.xyz</p><p className="mt-xs flex items-start gap-xs text-xs leading-5 text-charcoal/75"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />{address}</p></div></div></div>;
}
