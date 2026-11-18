import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MISTY_PRINCESS } from "@/config/princesses";
import { FairytaleCastle } from "@/components/illustrations/FairytaleCastle";
import { PrincessCharacter } from "@/components/illustrations/PrincessCharacter";
import {
  GoldenDivider,
  RoseCornerOrnament,
  RoyalCrownIcon,
  SparkleStar,
} from "@/components/illustrations/StorybookOrnaments";
import { FloatingElements } from "@/components/FloatingElements";

export default function HomePage() {
  const princess = MISTY_PRINCESS;

  return (
    <div className="relative min-h-screen w-full bg-[#FFF7FA] text-[#68485A] flex flex-col">
      <FloatingElements />

      <main className="relative z-10 flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
          {/* Top Occasion Badge */}
          <div className="royal-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6">
            <RoyalCrownIcon className="w-5 h-4" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-[#7E576D]">
              International Princess Day • {princess.occasionDate}
            </span>
          </div>

          {/* Enhanced Royal Pink Castle Centerpiece */}
          <div className="w-full max-w-[380px] sm:max-w-[440px] mb-4">
            <FairytaleCastle
              className="w-full h-auto"
              primaryPink={princess.accentColors.primaryPink}
              softGold={princess.accentColors.softGold}
            />
          </div>

          {/* Title & Warm Hinglish Subtitle */}
          <p className="font-script text-2xl sm:text-3xl font-semibold text-[#B9628A]">
            {princess.greeting.scriptAccent}
          </p>

          <h1 className="mt-1 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#68485A] tracking-tight leading-tight">
            Princess Dreamland
          </h1>

          <GoldenDivider className="my-5 max-w-[240px]" />

          <p className="text-base sm:text-lg text-[#68485A] max-w-2xl leading-relaxed">
            Pata hai, ye chhoti si website sirf{" "}
            <span className="font-semibold">{princess.name}</span> ke liye
            banayi hai — bas ek cute si fairytale jagah jahan enter karte hi
            tumhare face par ek pyari si smile aa jaaye ✨
          </p>

          {/* Misty's Personal Royal Portal Card */}
          <section
            aria-label={`Enter ${princess.displayName}'s fairytale`}
            className="mt-10 sm:mt-12 w-full max-w-xl"
          >
            <article className="storybook-card group relative rounded-[32px] p-7 sm:p-10 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-1">
              <RoseCornerOrnament className="absolute top-3 left-3 w-12 h-12 opacity-85 pointer-events-none" />
              <RoseCornerOrnament
                flipX
                className="absolute top-3 right-3 w-12 h-12 opacity-85 pointer-events-none"
              />

              <div className="w-44 sm:w-48 mb-2">
                <PrincessCharacter
                  name={princess.name}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
                  dressPrimary={princess.accentColors.dressPrimary}
                  dressHighlight={princess.accentColors.dressHighlight}
                  crownGold={princess.accentColors.crownGold}
                  ribbonPink={princess.accentColors.ribbonPink}
                />
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFE1EC] px-3.5 py-1 text-xs font-medium text-[#7E576D] border border-[#E8C77B]/50">
                <SparkleStar className="w-3 h-3" color="#E8C77B" />
                A Little Gift Just For You
              </span>

              <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[#68485A]">
                {princess.displayName} 👑
              </h2>

              <p className="mt-1 font-script text-xl text-[#B9628A]">
                {princess.royalTitle}
              </p>

              <p className="mt-3 text-sm sm:text-base text-[#68485A] leading-relaxed max-w-md">
                {princess.greeting.hinglishWhisper}
              </p>

              <Link
                href={princess.route}
                className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5A6C8] hover:bg-[#EE94BB] text-[#4E2C3E] font-semibold text-base sm:text-lg px-8 py-3.5 border-2 border-[#E8C77B] shadow-[0_12px_24px_-8px_rgba(213,119,161,0.55)] transition-all"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Enter {princess.name}&apos;s Fairytale</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </article>
          </section>
        </div>
      </main>

      <footer className="relative z-10 py-8 px-4 text-center border-t border-[#E8C77B]/40 bg-white/65">
        <p className="font-serif text-base font-semibold text-[#68485A]">
          Princess Dreamland • International Princess Day •{" "}
          {princess.occasionDate}
        </p>
        <p className="mt-1 font-script text-xl text-[#B9628A]">
          Thoughtfully made for {princess.displayName} 👑❤️
        </p>
      </footer>
    </div>
  );
}
