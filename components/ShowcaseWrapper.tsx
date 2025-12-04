"use client";

import { usePathname } from "next/navigation";
import Showcase from "@/components/Showcase";

export default function ShowcaseWrapper() {
  const pathname = usePathname();

  return pathname === "/" ? <Showcase /> : null;
}
