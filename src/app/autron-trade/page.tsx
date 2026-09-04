import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroVisual } from "@/components/hero-visual";
import { ProductCarousel, type ProductCategory } from "@/components/product-carousel";
import { FlagIcon, ShipIcon, BoxIcon, CheckIcon } from "@/components/brand-graphics";
import { Gem, Link2, Globe as GlobeIcon, TrendingUp, ShoppingCart, MessageSquare, Package, PackageCheck, Handshake as LucideHandshake, ShieldCheck } from "lucide-react";
import { AnimatedCounter, FadeUp, FadeUpSpan, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "Autron Trade | Autron Group",
  description: "Autron Trade connects Australia and Taiwan through international trade, sourcing premium products for global markets."
};

const stats = [
  { value: "20+", label: "合作供應商", Icon: LucideHandshake },
  { value: "10+", label: "出口國家與地區", Icon: GlobeIcon },
  { value: "50+", label: "優質產品", Icon: BoxIcon },
  { value: "100+", label: "國際貿易經驗", Icon: ShipIcon }
];

const productCategories: ProductCategory[] = [
  { title: "蜂蜜與蜂膠", subtitle: "High Quality Honey & Propolis", image: "/honey.png" },
  { title: "橄欖油", subtitle: "Premium Olive Oil", image: "/oil.png" },
  { title: "保健產品", subtitle: "Health Supplements", image: "/health.png" },
  { title: "紅酒", subtitle: "Premium Wine", image: "/wine.png" },
  { title: "牛肉與羊肉", subtitle: "Beef & Lamb", image: "/meat.png" },
  { title: "醫療消耗品與器材", subtitle: "Medical Supplies & Devices", image: "/medical.png" }
];

const whyChoose = [
  { title: "精選全球優質產品", description: "嚴選來源，確保品質", Icon: Gem },
  { title: "完整供應鏈整合", description: "採購、倉儲到通路，一站式服務", Icon: Link2 },
  { title: "國際市場經驗", description: "深耕亞太、北美等主要市場", Icon: GlobeIcon },
  { title: "共創品牌價值", description: "協助品牌國際化、市場拓展", Icon: TrendingUp }
];

const marketChecklist = [
  "成熟通路與代理經銷",
  "在地法規與認證支援",
  "品牌行銷與市場推廣",
  "穩定供應與長期合作"
];

const mapMarkers = [
  { code: "US", label: "USA", position: "left-[11.5%] top-[42.5%]" },
  { code: "EU", label: "Europe", position: "left-[45.5%] top-[33.3%]" },
  { code: "CN", label: "China", position: "left-[60.8%] top-[45.6%]" },
  { code: "TW", label: "Taiwan", position: "left-[80%] top-[49.5%]" },
  { code: "VN", label: "Vietnam", position: "left-[75%] top-[63.9%]" },
  { code: "AU", label: "Australia", position: "left-[84.6%] top-[80.1%]" }
];

const mainMarkets = [
  { name: "Taiwan", zh: "台灣", code: "TW" },
  { name: "Australia", zh: "澳洲", code: "AU" },
  { name: "China", zh: "中國", code: "CN" },
  { name: "USA", zh: "美國", code: "US" },
  { name: "Japan", zh: "日本", code: "JP" },
  { name: "Vietnam", zh: "越南", code: "VN" }
];

/** Approximates the design reference's "globe + package" combo icon — lucide has no single
 * icon for this, so a small Package badge is layered over the bottom-right of a Globe. */
function GlobePackageIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex ${className}`}>
      <GlobeIcon className="h-full w-full" strokeWidth={1.5} />
      <Package className="absolute -bottom-1 -right-1 h-[55%] w-[55%] rounded-full bg-white p-[2px] text-primary" strokeWidth={1.75} />
    </span>
  );
}

const solutions = [
  {
    step: "01",
    title: "尋找優質商品",
    description: "協助尋找台灣與澳洲的優質商品，嚴選來源，確保品質與競爭力。",
    image: "/solutions-sourcing.png",
    Icon: ShoppingCart
  },
  {
    step: "02",
    title: "出口溝通協助",
    description: "協助與供應商、買家進行溝通協調，處理合約、文件與出口流程。",
    image: "/solutions-communication.png",
    Icon: MessageSquare
  },
  {
    step: "03",
    title: "國際運送安排",
    description: "整合國際物流資源，提供安全、高效且具成本優勢的運送方案。",
    image: "/solutions-shipping.png",
    Icon: GlobePackageIcon
  },
  {
    step: "04",
    title: "協助進口全球",
    description: "協助將商品進口到全球各國，完成清關與在地合作，拓展國際市場。",
    image: "/solutions-network.png",
    Icon: PackageCheck
  }
];

const solutionHighlights = [
  { title: "全球市場不設限", description: "協助進入任何國家與地區", Icon: GlobeIcon },
  { title: "一站式整合服務", description: "從商品、溝通、物流到進口", Icon: LucideHandshake },
  { title: "專業團隊把關", description: "確保合規、降低風險", Icon: ShieldCheck },
  { title: "創造最大商業價值", description: "降低成本，提高效率與利潤", Icon: TrendingUp }
];

export default function AutronTradePage() {
  return (
    <main className="bg-white text-charcoal">
      {/* Hero */}
      <section aria-labelledby="trade-hero-heading" className="bg-white px-0 pb-0 pt-0">
        <HeroVisual
          src="/trade-banner-2.png"
          alt="Autron Trade premium products connecting Australia and Taiwan to the world"
          accent={false}
        >
          <div className="relative z-[1] mx-auto grid h-full max-w-content w-full items-center gap-xl px-[clamp(1.5rem,3vw,3rem)] py-xl">
            <div className="flex h-full items-center">
              <div className="w-full max-w-[620px] self-center">
                <p className="mb-sm">
                  <FadeUpSpan className="text-sm font-semibold uppercase tracking-[0.18em] text-primary" delay={0}>AUTRON TRADE</FadeUpSpan>
                </p>
                <h1 id="trade-hero-heading" className="max-w-[600px] font-display text-[1.75rem] font-extrabold leading-snug tracking-[-0.03em] text-[#0A1B47] sm:text-[clamp(2rem,3vw,3.4rem)]">
                  <FadeUpSpan className="block" delay={0.08}>Bringing</FadeUpSpan>
                  <FadeUpSpan className="block text-[#236FD9]" delay={0.16}>Premium Products</FadeUpSpan>
                  <FadeUpSpan className="block" delay={0.24}>to the World.</FadeUpSpan>
                </h1>
                <FadeUp delay={0.4}>
                  <p className="mt-md max-w-[520px] text-[1.25rem] font-bold leading-snug text-[#0A1B47]">
                    連結澳洲與台灣，讓優質產品走向全球
                  </p>
                </FadeUp>
                <FadeUp delay={0.5}>
                  <p className="mt-md max-w-[520px] text-base leading-[1.8] text-[#0A1B47]/80">
                    整合全球優質商品、專業通路與貿易資源，建立長期穩定的國際供應與經銷網絡。
                  </p>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="mt-2xl flex flex-col gap-sm sm:flex-row">
                    <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-lg py-md text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary">
                      洽詢合作
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </HeroVisual>

        {/* Stats banner */}
        <StaggerContainer className="relative z-[2] mx-auto mt-[-4rem] mb-2xl grid max-w-[68rem] grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-xl sm:grid-cols-4" stagger={0.08} amount={0.4}>
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              y={12}
              className="relative flex items-center justify-center gap-md border-b border-line bg-white px-lg py-[1.4rem] text-center last:border-b-0 sm:border-b-0 sm:[&:not(:last-child)]:after:absolute sm:[&:not(:last-child)]:after:right-0 sm:[&:not(:last-child)]:after:top-1/2 sm:[&:not(:last-child)]:after:h-9 sm:[&:not(:last-child)]:after:w-px sm:[&:not(:last-child)]:after:-translate-y-1/2 sm:[&:not(:last-child)]:after:bg-line sm:[&:not(:last-child)]:after:content-['']"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#edf4ff] p-[0.65rem] text-[#236FD9] ring-1 ring-[#dbeafc]">
                <stat.Icon className="h-full w-full" />
              </div>
              <div className="min-w-0 text-left">
                <AnimatedCounter value={stat.value} className="font-display text-[1.7rem] font-extrabold leading-none text-[#236FD9]" />
                <p className="mt-1 text-[0.75rem] font-semibold text-navy">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Our Products */}
      <section className="mx-auto max-w-content px-[clamp(1.5rem,3vw,3rem)] py-4xl" aria-labelledby="products-heading">
        <div className="flex items-end justify-between gap-lg">
          <Reveal>
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-primary">OUR PRODUCTS</p>
            <h2 id="products-heading" className="font-display text-4xl font-bold text-navy sm:text-5xl">多元優質產品，滿足全球需求</h2>
            <p className="mt-sm max-w-2xl text-base text-charcoal/70">從天然健康、優質美食到醫療保健，為全球客戶提供高品質、具競爭力的產品。</p>
          </Reveal>
          <Link href="/autron-trade" className="hidden shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline sm:inline-flex">
            查看更多產品 <span aria-hidden="true" className="ml-xs">→</span>
          </Link>
        </div>

        <div className="mt-2xl">
          <ProductCarousel items={productCategories} />
        </div>
      </section>

      {/* Why Choose Autron Trade */}
      <section aria-labelledby="why-trade-heading" className="grid lg:grid-cols-2">
        <div className="relative h-[280px] lg:h-auto">
          <Image src="/business-autrongo.png" alt="Air and ocean freight for Autron Trade" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="bg-[#1453b8] px-[clamp(1.5rem,3vw,3rem)] py-4xl text-white">
          <div className="max-w-xl">
            <Reveal>
              <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-white/65">WHY CHOOSE AUTRON TRADE</p>
              <h2 id="why-trade-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">選擇 Autron Trade 的理由</h2>
            </Reveal>

            <StaggerContainer className="mt-2xl grid grid-cols-2 gap-x-lg gap-y-2xl" stagger={0.1} amount={0.2}>
              {whyChoose.map((item) => (
                <StaggerItem key={item.title} y={12}>
                  <item.Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                  <h3 className="mt-md font-display text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-xs text-sm text-white/60">{item.description}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Global Markets */}
      <section className="mx-auto max-w-content px-[clamp(1.5rem,3vw,3rem)] pt-[3.5rem] pb-[1.75rem]" aria-labelledby="global-markets-heading">
        <div className="grid gap-2xl lg:grid-cols-[0.75fr_1.7fr_0.55fr] lg:items-center">
          <Reveal>
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-primary">GLOBAL MARKETS</p>
            <h2 id="global-markets-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">全球市場佈局</h2>
            <p className="mt-sm text-sm font-bold leading-relaxed text-navy">以澳洲與台灣為核心，連結亞洲、北美及全球市場，創造更多跨境合作與商業機會。</p>
            <ul className="mt-lg space-y-sm">
              {marketChecklist.map((item) => (
                <li key={item} className="flex items-center gap-sm text-sm font-bold text-navy">
                  <CheckIcon className="h-4 w-4 shrink-0 text-primary" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/global-network" className="mt-lg inline-flex items-center gap-xs rounded-md border border-line px-lg py-sm text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
              探索全球市場 <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative aspect-[1634/894] w-full overflow-hidden">
            <Image src="/world-banner-2.png" alt="Autron Trade global market map" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain" />
            {mapMarkers.map((marker) => (
              <span key={marker.code} className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 ${marker.position}`}>
                <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-md">
                  <FlagIcon code={marker.code} className="h-full w-full" />
                </span>
                <span className="whitespace-nowrap rounded bg-navy/85 px-1.5 py-0.5 text-[0.65rem] font-semibold text-white">{marker.label}</span>
              </span>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="rounded-md border border-line bg-white p-xl shadow-lg">
            <h3 className="text-base font-semibold uppercase tracking-[0.14em] text-primary">主要市場</h3>
            <ul className="mt-md space-y-md">
              {mainMarkets.map((market) => (
                <li key={market.name} className="flex items-center gap-sm">
                  <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                    <FlagIcon code={market.code} className="h-full w-full" />
                  </span>
                  <span className="text-base font-semibold text-navy">{market.name} <span className="font-normal text-charcoal/50">{market.zh}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="bg-[#f5f7fb] px-[clamp(1.5rem,3vw,3rem)] py-4xl" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="mb-sm text-sm font-semibold uppercase tracking-[0.18em] text-primary">OUR SOLUTIONS</p>
            <h2 id="solutions-heading" className="font-display text-3xl font-bold text-navy sm:text-4xl">靈活通路，創造最大商業價值</h2>
            <p className="mt-sm max-w-2xl text-sm text-charcoal/70">依據不同市場特性，提供多元銷售與通路策略，協助合作夥伴快速成長。</p>
          </Reveal>

          <StaggerContainer className="mt-3xl grid gap-lg sm:grid-cols-2 lg:grid-cols-4 lg:gap-xl" stagger={0.08} amount={0.15}>
            {solutions.map((item, index) => (
              <StaggerItem key={item.step} className="relative">
                {index < solutions.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-full top-[7rem] z-10 hidden w-xl -translate-y-1/2 items-center lg:flex"
                  >
                    <span className="h-0 w-full border-t-2 border-dashed border-primary/40" />
                    <span className="ml-[-6px] text-primary/40">▶</span>
                  </span>
                )}
                <div className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                  <div className="relative h-44 w-full bg-navy">
                    <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-center" />
                  </div>
                  <div className="relative px-lg pb-lg pt-3xl text-center">
                    <span className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-white text-primary shadow-md">
                      <item.Icon className="h-8 w-8" />
                    </span>
                    <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                    <p className="mt-xs text-xs leading-relaxed text-charcoal/60">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal delay={0.2} className="mt-2xl rounded-md border border-line bg-white/80 px-lg py-lg shadow-sm">
            <div className="grid gap-lg sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-line">
              {solutionHighlights.map((item) => (
                <div key={item.title} className="flex items-center gap-md px-md first:pl-0">
                  <item.Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                    <p className="text-xs text-charcoal/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section aria-labelledby="trade-cta-heading" className="relative overflow-hidden bg-gradient-to-r from-navy to-navy-light px-[clamp(1.5rem,3vw,3rem)] py-4xl text-white">
        <Reveal className="relative mx-auto max-w-5xl text-center">
          <h2 id="trade-cta-heading" className="font-display text-3xl font-bold text-white sm:text-4xl lg:whitespace-nowrap">與 Autron Trade 一起，讓優質產品走向世界</h2>
          <p className="mx-auto mt-sm max-w-xl text-base font-bold text-white/80">無論您是品牌方、供應商或經銷夥伴，期待與您攜手共創全球市場。</p>
          <Link href="/contact" className="group mt-lg inline-flex items-center justify-center gap-xs rounded-md bg-white px-lg py-sm text-sm font-bold text-primary transition-colors duration-200 hover:bg-white/90">
            立即洽詢合作 <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
