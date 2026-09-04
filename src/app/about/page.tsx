import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Code2,
  Globe2,
  Handshake,
  Layers3,
  Lightbulb,
  Network,
  PackageCheck,
  ShieldCheck,
  Truck
} from "lucide-react";
import { FadeUp, Reveal, StaggerContainer, StaggerItem } from "@/components/motion";

export const metadata: Metadata = {
  title: "關於澳創 | Autron Group",
  description: "認識澳創集團的發展歷程、集團架構與核心價值，以及串連台灣、澳洲與全球市場的四大事業平台。"
};

const highlights = [
  { english: "Autron Trade", chinese: "國際貿易", icon: Globe2 },
  { english: "AuzCare", chinese: "通路與經銷", icon: Handshake },
  { english: "Autron Go", chinese: "國際物流", icon: Truck },
  { english: "Quarter", chinese: "科技與數位服務", icon: Code2 }
];

const strengths = [
  { title: "跨境整合", description: "整合供應鏈、品牌與服務能力，讓跨市場合作更順暢。", icon: Globe2 },
  { title: "市場拓展", description: "從市場進入到通路發展，協助合作夥伴掌握成長機會。", icon: Network },
  { title: "長期合作價值", description: "以專業與透明溝通為基礎，建立值得信任的合作關係。", icon: Handshake }
];

const timeline = [
  { year: "2016", title: "創立 Autron Trade", description: "引進並代理澳洲蜂蜜品牌，正式跨入台灣市場。", icon: Handshake },
  { year: "2017", title: "成立 Autron Tech", description: "聚焦系統開發，逐步建立集團的科技服務能力。", icon: Code2 },
  { year: "2019", title: "成立 Quarter Innovation", description: "拓展網站設計與數位行銷服務，延伸企業成長所需的數位能力。", icon: Lightbulb },
  { year: "2022", title: "擴大品牌代理版圖", description: "持續增加品牌代理項目，並拓展多元經銷通路。", icon: PackageCheck },
  { year: "2024", title: "布局全球貿易市場", description: "啟動全球市場拓展，深化跨境貿易布局。", icon: Globe2 },
  { year: "2025", title: "成立 AuzCare", description: "擴充多品牌代理與經銷業務，強化品牌通路服務。", icon: Handshake },
  { year: "2026", title: "成立 Autron Go", description: "完成國際物流業務併購，進一步整合跨境物流能力。", icon: Truck }
];

const businessUnits = [
  { name: "Autron Trade", label: "國際貿易與品牌事業", description: "串連全球供應與市場需求，提供採購、進出口與市場開發服務。", icon: Globe2, accent: "border-primary text-primary" },
  { name: "AuzCare", label: "品牌代理與經銷", description: "協助品牌進入市場，發展代理、經銷與零售通路。", icon: Handshake, accent: "border-emerald-500 text-emerald-600" },
  { name: "Autron Go", label: "跨境物流事業", description: "整合國際運輸、集運與物流協調，支援貨物跨境移動。", icon: Truck, accent: "border-violet-500 text-violet-600" },
  { name: "Quarter Innovation", label: "科技與數位服務", description: "以網站設計、系統開發與數位行銷協助企業成長。", icon: Code2, accent: "border-orange-400 text-orange-500" }
];

const coreValues = [
  { title: "跨境連結", description: "連結市場、產品與專業能力，讓合適的機會在不同地區之間順利發生。", icon: Globe2 },
  { title: "專業可信", description: "以清楚溝通、深入理解與務實執行，建立值得長期合作的關係。", icon: ShieldCheck },
  { title: "協同整合", description: "整合貿易、品牌、物流與數位服務，讓不同事業能力彼此支援。", icon: Layers3 },
  { title: "共同成長", description: "與合作夥伴一起看見長期機會，持續創造可延伸的商業價值。", icon: Handshake }
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-charcoal">
      <section className="relative isolate overflow-visible bg-white" aria-labelledby="about-hero-heading">
        <div className="relative h-[70vh] overflow-hidden md:h-[75vh] lg:h-[78vh]">
          <Image src="/about-banner.png" alt="串連全球市場的跨境運輸與城市網絡" fill priority className="object-cover object-[63%_center]" sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_35%,rgba(255,255,255,0.25)_59%,rgba(255,255,255,0)_75%)]" aria-hidden="true" />
          <div className="relative z-[1] mx-auto flex h-full max-w-content items-center px-[clamp(1.5rem,4vw,3.5rem)] py-4xl">
            <div className="max-w-[39rem]">
              <FadeUp><p className="mb-lg text-sm font-bold text-primary">關於澳創 <span className="ml-xs font-semibold text-navy">About Autron Group</span></p></FadeUp>
              <FadeUp delay={0.08}><h1 id="about-hero-heading" className="font-display text-4xl font-extrabold leading-[1.25] tracking-[-0.035em] text-navy sm:text-5xl lg:text-[3.85rem]">連結澳洲、台灣與全球<br /><span className="mt-2 inline-block">創造無限商機</span></h1></FadeUp>
              <FadeUp delay={0.16}><p className="mt-xl max-w-xl text-body leading-8 text-navy/75">澳創國際整合貿易、品牌經銷、物流與科技的跨域實力，我們以跨境整合能力與創新思維，協助品牌與企業拓展新市場，實現永續成長與長期價值。</p></FadeUp>
            </div>
          </div>
        </div>

        <StaggerContainer className="relative z-[2] mx-auto -mt-12 grid w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_45px_rgba(10,27,71,0.13)] sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} amount={0.3}>
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return <StaggerItem key={highlight.english} className="relative flex items-center justify-center gap-lg px-lg py-xl text-center sm:[&:not(:last-child)]:after:absolute sm:[&:not(:last-child)]:after:right-0 sm:[&:not(:last-child)]:after:top-1/2 sm:[&:not(:last-child)]:after:h-12 sm:[&:not(:last-child)]:after:w-px sm:[&:not(:last-child)]:after:-translate-y-1/2 sm:[&:not(:last-child)]:after:bg-line sm:[&:not(:last-child)]:after:content-['']"><Icon className="h-11 w-11 shrink-0 text-primary" strokeWidth={1.55} aria-hidden="true" /><div className="min-w-0 text-center"><p className="font-display text-lg font-extrabold leading-tight text-navy sm:text-xl">{highlight.english}</p><p className="mt-xs text-base font-bold leading-6 text-primary sm:text-lg">{highlight.chinese}</p></div></StaggerItem>;
          })}
        </StaggerContainer>
      </section>

      <section id="who-we-are" className="scroll-mt-28 px-[clamp(1.5rem,4vw,3.5rem)] pb-4xl pt-5xl sm:pb-5xl" aria-labelledby="who-we-are-heading">
        <div className="mx-auto grid max-w-content gap-2xl lg:grid-cols-[0.82fr_1.18fr] lg:gap-3xl">
          <Reveal><div className="max-w-sm"><p className="inline-flex rounded border border-primary px-sm py-1 text-xs font-bold tracking-[0.12em] text-primary">公司簡介</p><h2 id="who-we-are-heading" className="mt-lg font-display text-3xl font-bold leading-snug text-navy sm:text-5xl">一個集團，<br />四大核心事業平台</h2><p className="mt-lg text-body leading-8 text-charcoal/70">整合貿易、品牌、物流與科技，創造跨境商業新價值。</p><Link href="#group-structure" className="group mt-xl inline-flex items-center gap-sm text-sm font-bold text-primary">了解更多 <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" /></Link></div></Reveal>
          <StaggerContainer className="grid gap-lg sm:grid-cols-3" stagger={0.1} amount={0.2}>{strengths.map((strength) => { const Icon = strength.icon; return <StaggerItem key={strength.title} className="h-full"><article className="h-full rounded-xl border border-[#e6edf7] bg-white p-xl shadow-[0_10px_28px_rgba(10,27,71,0.06)] transition-transform duration-normal hover:-translate-y-1"><Icon className="h-11 w-11 text-primary" strokeWidth={1.45} aria-hidden="true" /><h3 className="mt-lg font-display text-xl font-bold text-navy">{strength.title}</h3><p className="mt-sm text-sm leading-7 text-charcoal/65">{strength.description}</p></article></StaggerItem>; })}</StaggerContainer>
        </div>
      </section>

      <section id="milestones" className="relative scroll-mt-28 overflow-hidden bg-[#1453b8] px-[clamp(1.5rem,4vw,3.5rem)] py-3xl text-white sm:py-4xl" aria-labelledby="milestones-heading">
        <div className="absolute -right-28 bottom-0 h-72 w-72 rounded-full border-[26px] border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-content"><Reveal><p className="text-sm font-bold text-blue-100">發展里程碑</p><h2 id="milestones-heading" className="mt-sm font-display text-3xl font-bold text-white sm:text-5xl">一步一腳印，<br className="sm:hidden" />持續創造更多可能</h2></Reveal>
          <div className="relative mt-2xl hidden min-h-[26rem] lg:block" aria-label="澳創發展里程碑">
            <svg viewBox="0 0 1200 210" className="absolute left-0 top-[9.8rem] h-44 w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true"><path d="M-30 118 C 100 15, 180 183, 330 100 S 530 170, 675 106 S 835 170, 975 95 S 1120 143, 1230 35" fill="none" stroke="#b9d7ff" strokeWidth="3" /><path d="M-30 124 C 100 21, 180 189, 330 106 S 530 176, 675 112 S 835 176, 975 101 S 1120 149, 1230 41" fill="none" stroke="#e4f0ff" strokeWidth="1" /></svg><div className="absolute right-0 top-[9rem] text-3xl font-bold text-blue-100" aria-hidden="true">→</div>
            <div className="grid grid-cols-7 gap-3">{timeline.map((event, index) => { const Icon = event.icon; const isTop = index % 2 === 1; const isLast = index === timeline.length - 1; return <Reveal key={event.year} delay={Math.min(index * 0.04, 0.22)} className={`relative flex ${isTop ? "items-start" : "items-end pt-[14rem]"}`}>{isTop ? <article className="relative w-full rounded-xl border border-white/35 bg-white/20 p-sm text-center shadow-[0_8px_20px_rgba(2,16,56,0.18)] backdrop-blur-sm"><span className="absolute -bottom-[3.9rem] left-1/2 h-[3.4rem] w-px -translate-x-1/2 bg-blue-100/70" aria-hidden="true" /><span className="absolute -bottom-[4.4rem] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#1453b8] bg-blue-100 shadow-[0_0_0_1px_#e4f0ff]" aria-hidden="true" /><Icon className="mx-auto h-6 w-6 text-blue-50" strokeWidth={1.6} aria-hidden="true" /><p className="mt-xs font-display text-xl font-extrabold text-white">{event.year}</p><h3 className="mt-xs text-sm font-bold leading-snug text-white">{event.title}</h3><p className="mt-xs text-xs leading-5 text-blue-50/85">{event.description}</p></article> : <article className={`relative w-full rounded-xl border p-sm text-center shadow-[0_8px_20px_rgba(2,16,56,0.18)] ${isLast ? "border-white bg-white text-[#1453b8]" : "border-white/35 bg-white/20 text-white backdrop-blur-sm"}`}><span className="absolute -top-[3.9rem] left-1/2 h-[3.4rem] w-px -translate-x-1/2 bg-blue-100/70" aria-hidden="true" /><span className={`absolute -top-[4.4rem] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#1453b8] shadow-[0_0_0_1px_#e4f0ff] ${isLast ? "bg-white" : "bg-blue-100"}`} aria-hidden="true" /><Icon className={`mx-auto h-6 w-6 ${isLast ? "text-[#236FD9]" : "text-blue-50"}`} strokeWidth={1.6} aria-hidden="true" /><p className={`mt-xs font-display text-xl font-extrabold ${isLast ? "text-[#1453b8]" : "text-white"}`}>{event.year}</p><h3 className={`mt-xs text-sm font-bold leading-snug ${isLast ? "text-[#1453b8]" : "text-white"}`}>{event.title}</h3><p className={`mt-xs text-xs leading-5 ${isLast ? "text-[#294d86]/75" : "text-blue-50/85"}`}>{event.description}</p></article>}</Reveal>; })}</div>
          </div>
          <div className="relative mt-xl border-l-2 border-blue-100/70 pl-lg lg:hidden">{timeline.map((event, index) => { const Icon = event.icon; const isLast = index === timeline.length - 1; return <Reveal key={event.year} delay={Math.min(index * 0.04, 0.2)}><div className={`relative mb-md rounded-xl border p-md shadow-[0_8px_20px_rgba(2,16,56,0.18)] last:mb-0 ${isLast ? "border-white bg-white text-[#1453b8]" : "border-white/35 bg-white/20 text-white backdrop-blur-sm"}`}><span className="absolute -left-[1.6rem] top-5 h-4 w-4 rounded-full border-[3px] border-[#1453b8] bg-blue-100 shadow-[0_0_0_1px_#e4f0ff]" aria-hidden="true" /><div className="flex items-start gap-md"><Icon className={`mt-1 h-6 w-6 shrink-0 ${isLast ? "text-[#236FD9]" : "text-blue-50"}`} strokeWidth={1.6} aria-hidden="true" /><div><p className={`font-display text-2xl font-extrabold ${isLast ? "text-[#1453b8]" : "text-white"}`}>{event.year}</p><h3 className={`mt-1 font-bold ${isLast ? "text-[#1453b8]" : "text-white"}`}>{event.title}</h3><p className={`mt-xs text-sm leading-6 ${isLast ? "text-[#294d86]/75" : "text-blue-50/85"}`}>{event.description}</p></div></div></div></Reveal>; })}</div>
        </div>
      </section>

      <section id="group-structure" className="scroll-mt-28 px-[clamp(1.5rem,4vw,3.5rem)] py-4xl sm:py-5xl" aria-labelledby="structure-heading"><div className="mx-auto max-w-content"><Reveal><p className="text-sm font-bold text-primary">集團架構</p><h2 id="structure-heading" className="mt-sm font-display text-3xl font-bold text-navy sm:text-5xl">一個集團，<br className="sm:hidden" />整合多元專業</h2></Reveal><Reveal delay={0.08} className="relative mt-3xl"><div className="relative mx-auto w-full max-w-sm rounded-lg border-2 border-primary bg-white px-xl py-md text-center shadow-[0_10px_22px_rgba(35,111,217,0.08)]"><div className="flex items-center justify-center gap-sm"><Network className="h-6 w-6 text-primary" aria-hidden="true" /><h3 className="font-display text-xl font-bold text-navy">Autron Group</h3></div></div><div className="mx-auto h-10 w-px bg-primary/45" aria-hidden="true" /><div className="relative grid gap-lg md:grid-cols-2 xl:grid-cols-4 xl:gap-xl"><div className="absolute -top-5 left-[12.5%] right-[12.5%] hidden h-px bg-primary/45 xl:block" aria-hidden="true" />{businessUnits.map((unit) => { const Icon = unit.icon; return <article key={unit.name} className={`relative rounded-lg border-2 bg-white p-lg shadow-[0_8px_22px_rgba(10,27,71,0.05)] ${unit.accent}`}><span className="absolute -top-5 left-1/2 hidden h-5 w-px -translate-x-1/2 bg-primary/45 xl:block" aria-hidden="true" /><div className="flex items-center gap-sm"><Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" /><h3 className="font-display text-base font-bold text-navy">{unit.name}</h3></div><p className="mt-md text-sm font-semibold text-charcoal/75">{unit.label}</p><p className="mt-sm text-sm leading-6 text-charcoal/65">{unit.description}</p></article>; })}</div></Reveal></div></section>

      <section id="philosophy" className="scroll-mt-28 bg-[#f6f9fe] px-[clamp(1.5rem,4vw,3.5rem)] py-4xl sm:py-5xl" aria-labelledby="values-heading"><div className="mx-auto max-w-content"><Reveal><p className="text-sm font-bold text-primary">核心價值</p><h2 id="values-heading" className="mt-sm font-display text-3xl font-bold text-navy sm:text-5xl">讓合作走得更遠的核心價值</h2></Reveal><StaggerContainer className="mt-2xl grid gap-md sm:grid-cols-2 lg:grid-cols-4" stagger={0.08} amount={0.18}>{coreValues.map((value) => { const Icon = value.icon; return <StaggerItem key={value.title} className="h-full"><article className="h-full rounded-xl border border-white bg-white p-lg shadow-[0_8px_24px_rgba(10,27,71,0.06)]"><Icon className="h-10 w-10 text-primary" strokeWidth={1.55} aria-hidden="true" /><h3 className="mt-md font-display text-lg font-bold text-navy">{value.title}</h3><p className="mt-sm text-sm leading-7 text-charcoal/65">{value.description}</p></article></StaggerItem>; })}</StaggerContainer></div></section>

      <section className="relative isolate overflow-hidden bg-navy px-[clamp(1.5rem,4vw,3.5rem)] py-3xl text-white" aria-labelledby="about-cta-heading"><div className="absolute inset-0 -z-10 opacity-50" aria-hidden="true"><Image src="/world-banner-2.png" alt="" fill className="object-cover object-center" sizes="100vw" /></div><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,15,122,0.96),rgba(10,15,122,0.72))]" aria-hidden="true" /><Reveal className="mx-auto flex max-w-content flex-col items-center gap-lg text-center"><h2 id="about-cta-heading" className="font-display text-3xl font-bold sm:text-4xl">準備拓展您的國際商機嗎？</h2><p className="text-base text-white/80">讓澳創成為您值得信賴的跨境商業夥伴</p><Link href="/contact" className="group inline-flex items-center gap-sm rounded-md bg-white px-xl py-md text-sm font-bold text-primary transition-colors duration-fast hover:bg-blue-50">立即洽詢合作 <ArrowRight className="h-4 w-4 transition-transform duration-fast group-hover:translate-x-1" aria-hidden="true" /></Link></Reveal></section>
    </main>
  );
}
