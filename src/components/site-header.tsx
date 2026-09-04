"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const businessLinks = [
  { label: "國際貿易", name: "Autron Trade", href: "/autron-trade" },
  { label: "通路與經銷", name: "AuzCare", href: "https://auzcare.com", external: true },
  { label: "國際物流", name: "Autron Go", href: "https://papa-k.com", external: true },
  { label: "科技與數位服務", name: "Quarter Innovation", href: "https://quarter.com.tw", external: true }
];

const standardLinks = [
  { label: "首頁", href: "/" },
  { label: "關於澳創", href: "/about" },
  { label: "聯絡我們", href: "/contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const localPath = isEnglish ? pathname.slice(3) || "/" : pathname;
  const localizedHref = (href: string) => isEnglish && href.startsWith("/") ? (href === "/" ? "/en" : `/en${href}`) : href;
  const chineseHref = isEnglish ? localPath : pathname;
  const englishHref = isEnglish ? pathname : (localPath === "/" ? "/en" : `/en${localPath}`);
  const localizedBusinessLinks = businessLinks.map((link, index) => ({
    ...link,
    label: isEnglish ? ["International Trading", "Brand Distribution", "International Logistics", "Tech & Marketing"][index] : link.label,
    href: link.external ? link.href : localizedHref(link.href)
  }));
  const localizedStandardLinks = standardLinks.map((link, index) => ({
    ...link,
    label: isEnglish ? ["Home", "About Autron", "Contact Us"][index] : link.label,
    href: localizedHref(link.href)
  }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setBusinessOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setBusinessOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-line/70 bg-white/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/80" : "border-transparent bg-white"
      }`}
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-[clamp(1.5rem,3vw,3rem)] transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href={localizedHref("/")} className="flex items-center gap-sm" onClick={closeMenu}>
          <Image src="/logo.png" width={180} height={38} priority className="h-auto w-[9.5rem] sm:w-[11.25rem]" alt="Autron Group" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-2xl lg:flex">
          {localizedStandardLinks.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="group relative text-base font-semibold text-navy transition-colors duration-fast hover:text-primary">
              <span className="block">{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-xs text-base font-semibold text-navy transition-colors duration-fast hover:text-primary"
              aria-expanded={businessOpen}
              aria-haspopup="true"
              onClick={() => setBusinessOpen((open) => !open)}
            >
              <span className="block">{isEnglish ? "Our Businesses" : "我們的事業"}</span>
              <span aria-hidden="true" className={`text-xs transition-transform duration-fast ${businessOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            {businessOpen && (
              <div className="absolute left-1/2 top-full mt-md w-[15rem] -translate-x-1/2 rounded-xl border border-[#dbe8fa] bg-white p-1 shadow-[0_18px_42px_rgba(10,27,71,0.14)]">
                {localizedBusinessLinks.map((business) => (
                  <Link
                    key={business.href}
                    href={business.href}
                    target={business.external ? "_blank" : undefined}
                    rel={business.external ? "noopener noreferrer" : undefined}
                    onClick={closeMenu}
                    className="block border-b border-line px-sm py-sm transition-colors duration-fast last:border-b-0 hover:bg-[#edf4ff]"
                  >
                    <span className="block text-xs font-semibold text-primary">{business.label}</span>
                    <span className="mt-1 block text-lg font-bold text-navy">
                      {business.name} {business.external && <span aria-hidden="true" className="ml-1 inline-block text-lg font-bold leading-none">➜</span>}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {localizedStandardLinks.slice(2).map((link) => (
            <Link key={link.href} href={link.href} className="group relative text-base font-semibold text-navy transition-colors duration-fast hover:text-primary">
              <span className="block">{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-md lg:flex">
          <div className="flex items-center gap-xs text-base text-navy" aria-label="Language selector">
            <Link href={chineseHref} className={!isEnglish ? "font-semibold text-navy" : "text-navy/60 transition-colors duration-fast hover:text-primary"} aria-current={!isEnglish ? "page" : undefined}>繁中</Link>
            <span aria-hidden="true" className="text-line">|</span>
            <Link href={englishHref} className={isEnglish ? "font-semibold text-navy" : "text-navy/60 transition-colors duration-fast hover:text-primary"} aria-current={isEnglish ? "page" : undefined}>EN</Link>
          </div>
          <Link href={localizedHref("/contact")} className="bg-primary px-md py-sm text-sm font-semibold text-white transition-colors duration-fast hover:bg-secondary">
            {isEnglish ? "Contact Us" : "聯絡我們"}
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-line text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span aria-hidden="true" className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="Mobile navigation" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white px-lg py-md lg:hidden">
          <div className="flex flex-col">
            {localizedStandardLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="border-b border-line py-md text-lg font-semibold text-navy">
                <span className="block">{link.label}</span>
              </Link>
            ))}
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-md text-left text-lg font-semibold text-navy"
              aria-expanded={businessOpen}
              onClick={() => setBusinessOpen((open) => !open)}
            >
              {isEnglish ? "Our Businesses" : "我們的事業"} <span aria-hidden="true">{businessOpen ? "−" : "+"}</span>
            </button>
            {businessOpen && (
              <div className="border-b border-line bg-surface-off px-md py-sm">
                {localizedBusinessLinks.map((business) => (
                  <Link
                    key={business.href}
                    href={business.href}
                    target={business.external ? "_blank" : undefined}
                    rel={business.external ? "noopener noreferrer" : undefined}
                    onClick={closeMenu}
                    className="block border-b border-line px-sm py-sm transition-colors duration-fast last:border-b-0 hover:bg-white"
                  >
                    <span className="block text-xs font-semibold text-primary">{business.label}</span>
                    <span className="mt-0.5 block text-base font-semibold text-navy">{business.name} {business.external && <span aria-hidden="true" className="ml-1 inline-block text-base font-bold leading-none">➜</span>}</span>
                  </Link>
                ))}
              </div>
            )}
            {localizedStandardLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="border-b border-line py-md text-lg font-semibold text-navy">
                <span className="block">{link.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-lg flex items-center justify-between">
            <div className="flex items-center gap-xs text-base text-navy" aria-label="Language selector">
              <Link href={chineseHref} className={!isEnglish ? "font-semibold text-navy" : "text-navy/60"}>繁中</Link>
              <span aria-hidden="true" className="text-line">|</span>
              <Link href={englishHref} className={isEnglish ? "font-semibold text-navy" : "text-navy/60"}>EN</Link>
            </div>
            <Link href={localizedHref("/contact")} onClick={closeMenu} className="bg-primary px-md py-sm text-sm font-semibold text-white">
              {isEnglish ? "Contact Us" : "聯絡我們"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
