import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-line bg-white">
      <ol className="mx-auto flex max-w-content items-center gap-xs px-[clamp(1.5rem,3vw,3rem)] py-sm text-xs text-charcoal/60">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-xs">
            {index > 0 && <span aria-hidden="true" className="text-charcoal/30">›</span>}
            {item.href ? (
              <Link href={item.href} className="transition-colors duration-fast hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-navy">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
