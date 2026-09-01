"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "./motion";

export type ProductCategory = { title: string; subtitle: string; image: string };

export function ProductCarousel({ items }: { items: ProductCategory[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 220) + 16;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="上一組產品"
        className="absolute left-[-14px] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-navy shadow-md transition-colors duration-200 hover:bg-primary hover:text-white sm:flex"
      >
        <span aria-hidden="true">←</span>
      </button>

      <div ref={trackRef} className="flex gap-md overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06} amount={0.1}>
            <div data-card className="group w-[200px] shrink-0 overflow-hidden rounded-md border border-line bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg sm:w-[220px]">
              <div className="relative h-40 w-full overflow-hidden bg-surface-off">
                <Image src={item.image} alt={item.title} fill sizes="220px" className="object-cover transition-transform duration-300 ease-out group-hover:scale-105" />
              </div>
              <div className="p-md">
                <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-xs text-xs text-charcoal/60">{item.subtitle}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="下一組產品"
        className="absolute right-[-14px] top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-navy shadow-md transition-colors duration-200 hover:bg-primary hover:text-white sm:flex"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
