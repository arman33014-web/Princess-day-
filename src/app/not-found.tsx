import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import {
  GoldenDivider,
  RoyalCrownIcon,
  SparkleStar,
} from "@/components/illustrations/StorybookOrnaments";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[#FFF7FA] text-[#68485A] flex items-center justify-center px-4 py-12">
      <div className="storybook-card rounded-[32px] max-w-lg w-full px-6 py-10 sm:px-10 sm:py-12 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-[#FFE1EC] p-4 border-2 border-[#E8C77B] mb-5">
          <RoyalCrownIcon className="w-10 h-7" />
        </div>

        <p className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#7E576D]">
          <SparkleStar className="w-3.5 h-3.5" color="#E8C77B" />
          404 • Lost Fairytale Page
        </p>

        <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[#68485A]">
          Ye Rasta Castle Se Bahar Hai!
        </h1>

        <GoldenDivider className="my-5 max-w-[180px]" />

        <p className="text-base text-[#7E576D] leading-relaxed">
          Lagta hai aap kisi aise fairytale gate par aa gaye jo abhi Princess
          Dreamland mein maujood nahi hai. Chaliye wapas main castle par chalte
          hain!
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F5A6C8] hover:bg-[#EE94BB] text-[#4E2C3E] font-semibold px-7 py-3 border-2 border-[#E8C77B] shadow-sm transition-colors"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          <span>Return To Princess Dreamland</span>
        </Link>
      </div>
    </main>
  );
}
