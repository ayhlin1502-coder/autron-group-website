"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const businessLinks = [
  { label: "Autron Trade", href: "/autron-trade" },
  { label: "AuzCare", href: "https://auzcare.com", external: true },
  { label: "Autron Go", href: "https://papa-k.com", external: true },
  { label: "Quarter Innovation", href: "https://quarter.com.tw", external: true }
];

const aboutLinks = [
  { label: "公司簡介", href: "/about#who-we-are" },
  { label: "集團架構", href: "/about#group-structure" },
  { label: "核心價值", href: "/about#philosophy" },
  { label: "最新動態" }
];

const resourceLinks = [
  { label: "合作夥伴", href: "/contact#enquiry" },
  { label: "供應商合作", href: "/contact#enquiry" },
  { label: "經銷商合作", href: "/contact#enquiry" },
  { label: "專案案例" }
];

export function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const localizedHref = (href: string) => isEnglish && href.startsWith("/") ? (href === "/" ? "/en" : `/en${href}`) : href;
  const localizedAboutLinks = aboutLinks.map((link, index) => ({ ...link, label: isEnglish ? ["Company Profile", "Group Structure", "Core Values", "Latest News"][index] : link.label, href: link.href ? localizedHref(link.href) : undefined }));
  const localizedResourceLinks = resourceLinks.map((link, index) => ({ ...link, label: isEnglish ? ["Partners", "Supplier Cooperation", "Distributor Cooperation", "Case Studies"][index] : link.label, href: link.href ? localizedHref(link.href) : undefined }));
  return (
    <footer className="border-t border-line bg-white text-charcoal">
      <div className="mx-auto flex max-w-content flex-col gap-3xl px-lg py-3xl lg:flex-row lg:items-start lg:gap-[7.5rem]">
        <div className="max-w-[16rem] shrink-0">
          <Link href={localizedHref("/")} className="inline-flex items-center gap-sm">
            <Image src="/logo.png" width={220} height={46} className="h-auto w-[13.75rem]" alt="Autron Group" />
          </Link>
          <p className="mt-lg text-sm leading-7 text-charcoal/70">
            {isEnglish ? "Autron Group connects Australia, Taiwan and global markets through international trade, brand distribution, logistics and technology services." : "澳創集團致力於連結澳洲、台灣與全球市場，透過國際貿易、品牌經銷、國際物流與科技服務，創造商業價值，成就合作夥伴。"}
          </p>
          <div className="mt-lg flex items-center gap-md" aria-label="官方社群連結待提供">
            <SocialPlaceholder label="LinkedIn" path="M14 14h4v4h-4zM14 21h4v13h-4zM21 21h4v2c1-2 3-3 6-3 5 0 7 3 7 8v6h-4v-5c0-3 0-5-3-5s-4 2-4 5v5h-4V21z" />
            <SocialPlaceholder label="Facebook" path="M27 10h5v5h-5v4h5v5h-5v10h-5V24h-4v-5h4v-4c0-3 2-5 5-5z" />
            <SocialPlaceholder label="YouTube" path="M10 15c0-2 2-4 4-4h20c2 0 4 2 4 4v10c0 2-2 4-4 4H14c-2 0-4-2-4-4V15zM22 16v8l8-4-8-4z" />
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-x-lg gap-y-2xl sm:grid-cols-[1fr_1fr_1fr_auto_1fr]">
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-primary">{isEnglish ? "Our Businesses" : "我們的事業"}</h2>
            <ul className="mt-md space-y-sm text-sm">
              {businessLinks.map((business) => (
                <li key={business.href}><Link href={business.external ? business.href : localizedHref(business.href)} target={business.external ? "_blank" : undefined} rel={business.external ? "noopener noreferrer" : undefined} className="text-charcoal/75 transition-colors duration-fast hover:text-primary">{business.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-primary">{isEnglish ? "About Us" : "關於我們"}</h2>
            <ul className="mt-md space-y-sm text-sm">
              {localizedAboutLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? <Link href={item.href} className="text-charcoal/75 transition-colors duration-fast hover:text-primary">{item.label}</Link> : <span className="text-charcoal/45">{item.label}{isEnglish ? " (Under Construction)" : "（建置中）"}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-primary">{isEnglish ? "Resources" : "資源"}</h2>
            <ul className="mt-md space-y-sm text-sm">
              {localizedResourceLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? <Link href={item.href} className="text-charcoal/75 transition-colors duration-fast hover:text-primary">{item.label}</Link> : <span className="text-charcoal/45">{item.label}{isEnglish ? " (Under Construction)" : "（建置中）"}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block w-[2px] bg-charcoal/20" aria-hidden="true" />
          <div>
            <h2 className="text-lg font-bold uppercase tracking-[0.12em] text-primary">{isEnglish ? "Contact Us" : "聯絡我們"}</h2>
            <div className="mt-md space-y-lg text-sm leading-6 text-charcoal/70">
              <address className="not-italic">
                <p className="font-semibold text-navy">{isEnglish ? "Taiwan Headquarters" : "台灣總公司"}</p>
                <p className="mt-xs flex items-center gap-xs"><PhoneIcon />+886 2 2702 6643</p>
                <p className="mt-xs flex items-center gap-xs"><MailIcon />info@autron.xyz</p>
              </address>
              <address className="not-italic">
                <p className="font-semibold text-navy">{isEnglish ? "Australia Office" : "澳洲辦公室"}</p>
                <p className="mt-xs flex items-center gap-xs"><PhoneIcon />+61 2 9415 4272</p>
                <p className="mt-xs flex items-center gap-xs"><MailIcon />info@autron.xyz</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-content flex-col gap-sm px-lg py-md text-xs text-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Autron Group. All rights reserved.</p>
          <div className="flex gap-md">
            <Link href={localizedHref("/privacy-policy")} className="transition-colors duration-fast hover:text-primary">Privacy Policy</Link>
            <Link href={localizedHref("/cookie-policy")} className="transition-colors duration-fast hover:text-primary">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialPlaceholder({ label, path }: { label: string; path: string }) {
  return (
    <span role="img" aria-label={`${label}（連結待提供）`} className="cursor-not-allowed text-charcoal/35" title={`${label}（連結待提供）`}>
      <svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={path} fill="currentColor" />
      </svg>
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 4h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3c0 1.1-.9 2-2 2C11 20 4 13 4 6c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 7L12 13L19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
