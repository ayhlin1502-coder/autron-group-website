import type { ReactNode } from "react";
import { EnglishCopy } from "@/components/english-copy";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <>{children}<EnglishCopy /></>;
}
