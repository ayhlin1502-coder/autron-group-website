"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const businessLinks = [
  { label: "International Trading", name: "Autron Trade", href: "/autron-trade" },
  { label: "Brand Distribution", name: "AuzCare", href: "/auzcare" },
  { label: "International Logistics", name: "AutronGo", href: "/autrongo" },
  { label: "Technology & Marketing", name: "Quarter Innovations", href: "/quarter-innovations" }
];

const primaryLinks = [
  { label: "首頁", href: "/" },
  { label: "關於澳創", href: "/about" },
  { label: "我們的事業", href: "/#business-platforms" },
  { label: "全球網絡", href: "/global-network" },
  { label: "聯絡我們", href: "/contact" }
];

const standardLinks = primaryLinks.filter((link) => link.label !== "我們的事業");

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    setBusinessOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled ? "border-line/70 bg-white/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/80" : "border-transparent bg-white"
      }`}
    >
      <div
        className={`mx-auto flex max-w-content items-center justify-between px-[clamp(1.5rem,3vw,3rem)] transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-sm" onClick={closeMenu}>
          <Image src="/logo.png" width={180} height={38} priority className="h-auto w-[9.5rem] sm:w-[11.25rem]" alt="Autron Group" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-lg lg:flex">
          {standardLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group relative text-sm font-medium text-charcoal transition-colors duration-fast hover:text-primary">
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
              className="flex items-center gap-xs text-sm font-medium text-charcoal transition-colors duration-fast hover:text-primary"
              aria-expanded={businessOpen}
              aria-haspopup="true"
              onClick={() => setBusinessOpen((open) => !open)}
            >
              <span className="block">我們的事業</span>
              <span aria-hidden="true" className={`text-xs transition-transform duration-fast ${businessOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            {businessOpen && (
              <div className="absolute left-1/2 top-full mt-md w-[20rem] -translate-x-1/2 border border-line bg-white p-sm shadow-lg">
                {businessLinks.map((business) => (
                  <Link
                    key={business.href}
                    href={business.href}
                    onClick={closeMenu}
                    className="block border-b border-line px-md py-sm last:border-0 hover:bg-surface-muted"
                  >
                    <span className="block text-xs uppercase tracking-[0.12em] text-charcoal/60">{business.label}</span>
                    <span className="mt-0.5 block text-sm font-semibold text-navy">{business.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-md lg:flex">
          <div className="flex items-center gap-xs text-sm" aria-label="Language selector">
            <button type="button" className="font-semibold text-navy" aria-pressed="true">繁中</button>
            <span aria-hidden="true" className="text-line">|</span>
            <button type="button" className="text-charcoal/60 transition-colors duration-fast hover:text-primary" aria-pressed="false">EN</button>
          </div>
          <Link href="/contact" className="bg-primary px-md py-sm text-sm font-semibold text-white transition-colors duration-fast hover:bg-secondary">
            聯絡我們
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
        <nav aria-label="Mobile navigation" className="border-t border-line bg-white px-lg py-md lg:hidden">
          <div className="flex flex-col">
            {standardLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="border-b border-line py-md text-base font-medium text-charcoal">
                <span className="block">{link.label}</span>
              </Link>
            ))}
            <button
              type="button"
              className="flex items-center justify-between border-b border-line py-md text-left text-base font-medium text-charcoal"
              aria-expanded={businessOpen}
              onClick={() => setBusinessOpen((open) => !open)}
            >
              我們的事業 <span aria-hidden="true">{businessOpen ? "−" : "+"}</span>
            </button>
            {businessOpen && (
              <div className="border-b border-line bg-surface-off px-md">
                {businessLinks.map((business) => (
                  <Link key={business.href} href={business.href} onClick={closeMenu} className="block py-sm text-sm text-charcoal/80">
                    {business.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="mt-lg flex items-center justify-between">
            <div className="flex items-center gap-xs text-sm" aria-label="Language selector">
              <button type="button" className="font-semibold text-navy" aria-pressed="true">繁中</button>
              <span aria-hidden="true" className="text-line">|</span>
              <button type="button" className="text-charcoal/60" aria-pressed="false">EN</button>
            </div>
            <Link href="/contact" onClick={closeMenu} className="bg-primary px-md py-sm text-sm font-semibold text-white">
              聯絡我們
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
