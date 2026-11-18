"use client";

import React from "react";
import { motion } from "framer-motion";
import type { PrincessConfig } from "@/config/princesses";
import { PrincessCharacter } from "./illustrations/PrincessCharacter";
import { InteractiveFlower } from "./illustrations/InteractiveFlower";
import {
  ButterflyIllustration,
  GoldenDivider,
  RoseCornerOrnament,
  RoyalCrownIcon,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface PrincessIntroductionProps {
  princess: PrincessConfig;
}

export function PrincessIntroduction({ princess }: PrincessIntroductionProps) {
  const { introduction, accentColors } = princess;

  return (
    <section
      id="meet-princess"
      className="relative z-10 py-14 sm:py-22 px-4 sm:px-6"
      aria-labelledby="meet-princess-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Chapter Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE1EC] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#7E576D] border border-[#E8C77B]/50">
            <SparkleStar className="w-3.5 h-3.5" color="#E8C77B" />
            {introduction.badgeText}
          </span>
          <h2
            id="meet-princess-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#68485A] leading-tight"
          >
            {introduction.heading}
          </h2>
          <p className="mt-1.5 font-script text-xl sm:text-2xl text-[#B9628A]">
            {introduction.scriptNote}
          </p>
          <GoldenDivider className="mt-3 max-w-[220px] mx-auto" />
        </motion.div>

        {/* Storybook Spread Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="storybook-card relative rounded-[32px] p-6 sm:p-10 md:p-12 overflow-hidden"
        >
          {/* Decorative Rose Corners */}
          <RoseCornerOrnament className="absolute top-3 left-3 w-12 h-12 sm:w-16 sm:h-16 opacity-85 pointer-events-none" />
          <RoseCornerOrnament
            flipX
            className="absolute top-3 right-3 w-12 h-12 sm:w-16 sm:h-16 opacity-85 pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Left: Illustrated Princess Portrait + Ornate Royal Nameplate */}
            <div className="md:col-span-5 flex flex-col items-center relative">
              <div className="animate-flutter absolute -top-2 right-4 sm:right-8 pointer-events-none">
                <ButterflyIllustration
                  className="w-10 h-9"
                  wingColor={accentColors.primaryPink}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-end justify-center"
              >
                <div className="hidden sm:block -mr-4 mb-3 opacity-90">
                  <InteractiveFlower kind="tulip" className="w-12 h-14" />
                </div>
                <PrincessCharacter
                  name={princess.name}
                  className="w-52 sm:w-60 h-auto"
                  dressPrimary={accentColors.dressPrimary}
                  dressHighlight={accentColors.dressHighlight}
                  crownGold={accentColors.crownGold}
                  ribbonPink={accentColors.ribbonPink}
                />
                <div className="hidden sm:block -ml-4 mb-3 opacity-90">
                  <InteractiveFlower kind="rose" className="w-12 h-14" />
                </div>
              </motion.div>

              {/* Ornate Royal Nameplate */}
              <div className="mt-3 relative inline-flex flex-col items-center rounded-2xl bg-[#FFF7FA] px-6 py-3 border-2 border-[#E8C77B] shadow-[0_8px_20px_-8px_rgba(167,123,145,0.3)]">
                <div className="-mt-6 mb-1 rounded-full bg-white p-1.5 border border-[#E8C77B] shadow-xs">
                  <RoyalCrownIcon className="w-7 h-5" />
                </div>
                <p className="font-serif text-xl sm:text-2xl font-bold text-[#68485A]">
                  {princess.displayName}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#7E576D] mt-0.5 text-center">
                  {princess.royalTitle}
                </p>
              </div>
            </div>

            {/* Right: Warm Hinglish Storybook Introduction */}
            <div className="md:col-span-7 text-center md:text-left space-y-5">
              {introduction.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? "font-script text-3xl sm:text-4xl font-semibold text-[#B9628A]"
                      : "text-base sm:text-lg leading-[1.85] text-[#68485A]"
                  }
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-2">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#FFE1EC] px-5 py-2.5 text-sm sm:text-base font-medium text-[#5C3A4D] border border-[#E8C77B]/60">
                  {introduction.closingLine}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
