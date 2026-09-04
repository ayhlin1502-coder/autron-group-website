import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CapabilityIcon, StatIcon } from "@/components/brand-graphics";
import { HeroVisual } from "@/components/hero-visual";
import { GlobalNetworkMap } from "@/components/global-network-map";
import { AnimatedCounter, FadeUp, FadeUpSpan, HoverLift, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Autron Group | Connecting Australia, Taiwan & Global Markets",
  description: "Autron Group connects Australia, Taiwan and global markets through international trade, brand distribution, logistics and technology."
};

const businessCards = [
  {
    title: "Autron Trade",
    subtitle: "國際貿易",
    description: "串聯全球供應鏈與市場，提供國際貿易、進出口及海外通路拓展服務。",
    image: "/business-trade.png",
    href: "/autron-trade"
  },
  {
    title: "AuzCare",
    subtitle: "通路與經銷",
    description: "專注優質商品品牌代理與經銷，打造線上線下整合的多元銷售通路。",
    image: "/business-auzcare.png",
    href: "https://auzcare.com",
    external: true
  },
  {
    title: "Autron Go",
    subtitle: "國際物流",
    description: "提供靈活高效的國際物流與跨境運輸服務，協助企業快速連結全球市場。",
    image: "/business-autrongo.png",
    href: "https://papa-k.com",
    external: true
  },
  {
    title: "Quarter Innovation",
    subtitle: "科技與數位服務",
    description: "結合網站開發、數位行銷與創新科技，協助企業打造品牌並加速數位成長。",
    image: "/business-quarter.png",
    href: "https://quarter.com.tw",
    external: true
  }
];

const capabilities = [
  { zh: "國際市場開發", en: "Global Market Expand", description: "掌握市場趨勢，開拓全球商機", icon: 0 },
  { zh: "通路與經銷", en: "Distribution", description: "布局多元通路，建立穩固銷售網絡", icon: 2 },
  { zh: "國際物流", en: "International Logistics", description: "高效整合物流資源，確保順暢交付", icon: 3 },
  { zh: "數位成長", en: "Digital Growth", description: "數位行銷與科技服務，加速品牌成長", icon: 4 }
];

const statistics = [
  { value: "4", label: "核心事業平台", sublabel: "事業平台", icon: 0 },
  { value: "2", label: "營運據點", sublabel: "澳洲 / 台灣", icon: 1 },
  { value: "6+", label: "服務市場", sublabel: "跨境商機", icon: 2 },
  { value: "∞", label: "無限商機可能", sublabel: "成長潛力", icon: 3 }
];

const heroBusinessLinks = [
  { label: "貿易合作", href: "/autron-trade", icon: 0 },
  { label: "通路經銷", href: "https://auzcare.com", icon: 2 },
  { label: "物流諮詢", href: "https://papa-k.com", icon: 3 },
  { label: "科技行銷", href: "https://quarter.com.tw", icon: 1 }
];

const markets = [
  { name: "Taiwan", code: "TW" },
  { name: "Australia", code: "AU" },
  { name: "China", code: "CN" },
  { name: "USA", code: "US" },
  { name: "Vietnam", code: "VN" },
  { name: "Japan", code: "JP" }
];

export default function Home() {
  return (
    <main className="bg-white text-charcoal">
      <section aria-labelledby="hero-heading" className="bg-white px-0 pb-0 pt-0">
        <HeroVisual>
          <div className="relative z-[1] mx-auto grid h-full max-w-content w-full items-center gap-xl px-[clamp(1.5rem,3vw,3rem)] py-xl lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex h-full items-center">
              <div className="w-full max-w-[620px] self-center">
                <h1 id="hero-heading" className="max-w-[640px] font-display text-[clamp(2.3rem,3.2vw,4.8rem)] font-extrabold leading-snug tracking-[-0.055em]">
                <FadeUpSpan className="block text-[#0A1B47]" delay={0}>Connecting</FadeUpSpan>
                <FadeUpSpan className="mt-0 block text-[#236FD9]" delay={0.1}>Australia, Taiwan</FadeUpSpan>
                <FadeUpSpan className="mt-0 block text-[#0A1B47]" delay={0.2}>&amp; Global Markets</FadeUpSpan>
              </h1>
              <FadeUp delay={0.35}>
                <p className="mt-lg max-w-[500px] text-[1.55rem] font-black leading-[1.3] tracking-[-0.035em] text-[#0A1B47]">
                  連結澳洲、台灣與全球市場
                </p>
              </FadeUp>
              <FadeUp delay={0.45}>
                <div className="mt-xl space-y-lg text-charcoal">
                  <p className="max-w-[560px] text-base leading-[1.8] text-[#0A1B47]/80">
                    透過國際貿易、品牌經銷、國際物流與科技服務，連結澳洲、台灣與全球市場的商機與成長動能。
                  </p>
                </div>
              </FadeUp>
              <FadeUp delay={0.55}>
                <div className="mt-2xl flex flex-col gap-sm sm:flex-row">
                  <Link href="#business-platforms" className="group inline-flex items-center justify-center rounded-xl bg-primary px-lg py-md text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary">
                    探索我們的事業
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-[#0A1B47]/20 bg-white/70 px-lg py-md text-sm font-semibold text-[#0A1B47] transition-colors duration-200 hover:bg-[#0A1B47] hover:text-white">
                    聯絡我們
                  </Link>
                </div>
              </FadeUp>
            </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>

        </HeroVisual>

        <aside aria-label="事業快捷選單" className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 items-center justify-center lg:flex">
          <div className="flex w-[5rem] items-center justify-center rounded-xl bg-[#1E5FCD] p-[0.8rem] text-white shadow-[0_12px_28px_rgba(7,19,52,0.26)] backdrop-blur-sm sm:w-[5.2rem] lg:w-[5rem]">
            <div className="flex w-full flex-col justify-center gap-[0.5rem]">
              {heroBusinessLinks.map((business) => (
                <HoverLift
                  key={business.href}
                  href={business.href}
                  liftX={0}
                  liftY={0}
                  className="group flex flex-col items-center gap-[0.2rem] py-[0.4rem] text-center last:border-0"
                >
                  <CapabilityIcon index={business.icon} className="h-[2.35rem] w-[2.35rem] text-white transition-all duration-200 group-hover:scale-110 group-hover:text-[#dbeafc] group-focus-visible:scale-110 group-focus-visible:text-[#dbeafc]" />
                  <span className="block text-[0.76rem] font-medium leading-tight text-white transition-transform duration-200 group-hover:scale-110 group-focus-visible:scale-110">{business.label}</span>
                </HoverLift>
              ))}
            </div>
          </div>
        </aside>

        <StaggerContainer className="relative z-[2] mx-auto mt-[-4rem] mb-2xl grid w-[calc(100%-2rem)] max-w-[76rem] grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-xl lg:grid-cols-4" stagger={0.08} amount={0.4}>
            {statistics.map((stat) => (
              <StaggerItem
                key={stat.label}
                y={12}
                className="relative flex items-center justify-center border-b border-line bg-white px-md py-lg text-center even:border-l even:border-line last:border-b-0 lg:border-b-0 lg:px-[2.25rem] lg:even:border-l-0 lg:[&:not(:last-child)]:after:absolute lg:[&:not(:last-child)]:after:right-0 lg:[&:not(:last-child)]:after:top-1/2 lg:[&:not(:last-child)]:after:h-9 lg:[&:not(:last-child)]:after:w-px lg:[&:not(:last-child)]:after:-translate-y-1/2 lg:[&:not(:last-child)]:after:bg-line lg:[&:not(:last-child)]:after:content-['']"
              >
                <div className="flex flex-col items-center justify-center gap-sm sm:flex-row sm:gap-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center text-[#236FD9] sm:h-14 sm:w-14">
                    <StatIcon index={stat.icon} className={stat.icon === 3 ? "h-10 w-10 max-sm:h-12 max-sm:w-12" : "h-10 w-10"} />
                  </div>
                  <div className="min-w-0 text-center">
                    <AnimatedCounter value={stat.value} className={`font-display font-extrabold leading-none text-[#236FD9] ${stat.value === "∞" ? "text-[3rem]" : "text-[2rem]"}`} />
                    <p className="mt-1 text-[0.9rem] font-semibold text-navy">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
        </StaggerContainer>
      </section>

      <section id="business-platforms" className="mx-auto max-w-content px-[clamp(1.5rem,3vw,3rem)] py-4xl" aria-labelledby="platforms-heading">
        <Reveal>
          <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-primary">OUR BUSINESSES</p>
          <h2 id="platforms-heading" className="font-display text-4xl font-bold text-navy sm:text-5xl">一個集團，四大核心平台</h2>
          <p className="mt-sm text-base text-charcoal/70">整合貿易、通路、物流、科技與行銷，創造跨境商業價值</p>
        </Reveal>

        <StaggerContainer className="mt-2xl grid gap-xl lg:grid-cols-4" stagger={0.1} amount={0.15}>
          {businessCards.map((card) => (
            <StaggerItem key={card.title}>
              <Link href={card.href} target={card.external ? "_blank" : undefined} rel={card.external ? "noopener noreferrer" : undefined} className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white shadow-md transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-lg focus-visible:-translate-y-2 focus-visible:shadow-lg">
                <div className="relative h-36 w-full shrink-0 overflow-hidden bg-surface-off">
                  <Image src={card.image} alt={card.title} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]" />
                  <span className="absolute left-0 top-0 flex h-11 w-[104px] items-center bg-primary pl-lg font-display text-lg font-bold text-white transition-transform duration-300 ease-out [clip-path:polygon(0_0,100%_0,calc(100%-28px)_100%,0_100%)] group-hover:scale-[1.05] group-focus-visible:scale-[1.05]">
                    0{businessCards.indexOf(card) + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-lg py-md">
                  <h3 className="font-display text-[1.25rem] font-bold leading-tight text-navy">{card.title}</h3>
                  <p className="font-display text-[1.25rem] font-bold leading-tight text-navy">{card.subtitle}</p>
                  <p className="mt-sm text-sm leading-relaxed text-charcoal/75">{card.description}</p>
                  <div className="mt-auto inline-flex pt-md text-sm font-semibold text-primary">
                    了解更多 <span aria-hidden="true" className="ml-xs transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section aria-labelledby="capabilities-heading" className="bg-[#1453b8] px-[clamp(1.5rem,3vw,3rem)] py-3xl text-white">
        <div className="mx-auto grid max-w-content gap-3xl lg:grid-cols-[1.46fr_0.54fr] lg:items-center">
          <div>
            <Reveal>
              <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-white/65">OUR CAPABILITIES</p>
              <h2 id="capabilities-heading" className="font-display text-4xl font-bold text-white sm:text-5xl">跨境商業整合能力</h2>
              <p className="mt-sm max-w-xl text-base text-white/70">從商品到市場，從供應鏈到數位成長，我們提供一站式解決方案</p>
            </Reveal>

            <StaggerContainer className="mt-2xl grid grid-cols-2 gap-x-lg gap-y-2xl lg:flex lg:flex-nowrap lg:items-start lg:justify-between lg:gap-0" stagger={0.18} amount={0.3}>
              {capabilities.flatMap((capability, index) => {
                const item = (
                  <StaggerItem key={capability.zh} y={8} className="flex flex-col items-center px-xs text-center lg:flex-1">
                    <CapabilityIcon index={capability.icon} className="h-16 w-16 text-white" />
                    <h3 className="mt-md font-display text-lg font-semibold text-white">{capability.zh}</h3>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white">{capability.en}</p>
                    <p className="mt-sm text-sm font-semibold leading-relaxed text-white/50">{capability.description}</p>
                  </StaggerItem>
                );
                if (index === capabilities.length - 1) return [item];
                return [
                  item,
                  <StaggerItem key={`arrow-${index}`} y={0} duration={0.3} className="hidden h-16 shrink-0 items-center text-xl font-bold text-white/45 lg:flex" aria-hidden="true">
                    ➜
                  </StaggerItem>
                ];
              })}
            </StaggerContainer>
          </div>

          <Reveal delay={0.15} y={20} className="rounded-xl bg-white p-xl text-charcoal shadow-xl">
            <h3 className="font-display text-2xl font-bold text-primary">我們的使命</h3>
            <p className="mt-lg text-base leading-relaxed text-charcoal/80">
              連結澳洲、台灣與全球市場，創造商業價值，成就合作夥伴。
            </p>
            <Link href="/contact" className="group mt-xl flex items-center justify-between gap-md rounded-lg bg-[#1453B8] px-lg py-md text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0f4196]">
              成為我們的合作夥伴 <span aria-hidden="true" className="text-xl font-bold leading-none transition-transform duration-200 group-hover:translate-x-1">➜</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="network-heading" className="bg-[#F9FAFD] px-[clamp(1.5rem,3vw,3rem)] py-4">
        <GlobalNetworkMap markets={markets} />
      </section>

      <section aria-labelledby="partner-heading" className="relative overflow-hidden bg-gradient-to-r from-navy to-navy-light px-[clamp(1.5rem,3vw,3rem)] py-4xl text-white">
        <svg aria-hidden="true" viewBox="0 0 200 200" className="pointer-events-none absolute -bottom-14 right-0 h-[300px] w-[300px] opacity-90 drop-shadow-[0_20px_35px_rgba(2,10,40,0.5)]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctaLegDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3E7BFF" />
              <stop offset="100%" stopColor="#0A1F66" />
            </linearGradient>
            <linearGradient id="ctaLegLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8FB6FF" />
              <stop offset="100%" stopColor="#1C4FC9" />
            </linearGradient>
          </defs>
          <path d="M20 160L60 40H80L40 160Z" fill="url(#ctaLegDark)" />
          <path d="M180 160L140 40H120L160 160Z" fill="url(#ctaLegLight)" />
          <rect x="80" y="84" width="40" height="14" rx="6" fill="#ffffff" opacity="0.85" />
        </svg>
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <h2 id="partner-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">準備拓展您的國際市場嗎？</h2>
          <p className="mx-auto mt-sm max-w-xl text-base font-bold text-white/80">
            讓澳創成為您值得信賴的跨境商業夥伴
          </p>
          <Link href="/contact" className="group mt-lg inline-flex items-center justify-center gap-xs rounded-md bg-white px-lg py-sm text-sm font-bold text-primary transition-colors duration-200 hover:bg-white/90">
            立即合作 <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
