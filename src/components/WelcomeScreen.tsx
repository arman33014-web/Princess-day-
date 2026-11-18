"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { PrincessConfig } from "@/config/princesses";
import { FairytaleCastle } from "./illustrations/FairytaleCastle";
import { PrincessCharacter } from "./illustrations/PrincessCharacter";
import { InteractiveFlower } from "./illustrations/InteractiveFlower";
import {
  ButterflyIllustration,
  CloudIllustration,
  GoldenDivider,
  RoseCornerOrnament,
  RoyalCrownIcon,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface WelcomeScreenProps {
  princess: PrincessConfig;
  onEnter: () => void;
}

export function WelcomeScreen({ princess, onEnter }: WelcomeScreenProps) {
  const { greeting, accentColors } = princess;

  return (
    <motion.section
      key="welcome-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-14 overflow-hidden bg-[#FFF7FA]"
      aria-label={`Welcome screen for ${princess.displayName}`}
    >
      {/* Subtle Breathing Pastel Dawn Backdrop */}
      <div
        className="pointer-events-none absolute inset-0 animate-bg-breath"
        style={{
          background:
            "radial-gradient(circle at 50% 22%, #FFE5F0 0%, #FFF7FA 60%, #FFF1F7 100%)",
        }}
        aria-hidden="true"
      />

      {/* Floating Clouds */}
      <div className="pointer-events-none absolute top-6 left-2 sm:left-10 animate-drift-cloud opacity-92">
        <CloudIllustration className="w-28 sm:w-40 h-auto" />
      </div>
      <div className="pointer-events-none absolute top-14 right-2 sm:right-12 animate-drift-cloud-reverse opacity-88">
        <CloudIllustration className="w-24 sm:w-36 h-auto" />
      </div>

      {/* Sparkling Stars & Animated Butterflies */}
      <div
        className="pointer-events-none absolute top-24 left-[18%] animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      >
        <SparkleStar className="w-4 h-4 sm:w-5 sm:h-5" color={accentColors.softGold} />
      </div>
      <div
        className="pointer-events-none absolute top-32 right-[16%] animate-twinkle"
        style={{ animationDelay: "1.1s" }}
      >
        <SparkleStar className="w-5 h-5" color={accentColors.primaryPink} />
      </div>
      <div
        className="pointer-events-none absolute bottom-28 left-[11%] animate-flutter hidden sm:block"
        style={{ animationDelay: "0.4s" }}
      >
        <ButterflyIllustration className="w-11 h-10" />
      </div>
      <div
        className="pointer-events-none absolute bottom-32 right-[11%] animate-flutter hidden sm:block"
        style={{ animationDelay: "1.8s" }}
      >
        <ButterflyIllustration
          className="w-10 h-9 -scale-x-100"
          wingColor={accentColors.primaryPink}
        />
      </div>

      {/* Main Welcome Storybook Stage */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Occasion Royal Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="royal-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
        >
          <RoyalCrownIcon className="w-5 h-4" />
          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#7E576D]">
            International Princess Day • {princess.occasionDate}
          </span>
        </motion.div>

        {/* Illustrated Scene: Fairytale Castle + Princess Character + Flanking Flowers */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative w-full max-w-[560px] flex items-end justify-center mb-4 sm:mb-6"
        >
          {/* Left Animated Flower */}
          <div className="hidden sm:block animate-float-slow -mr-5 mb-2 shrink-0">
            <InteractiveFlower kind="rose" className="w-16 h-20" />
          </div>

          {/* Castle Backdrop */}
          <div className="relative w-full max-w-[390px] sm:max-w-[445px]">
            <FairytaleCastle
              className="w-full h-auto"
              primaryPink={accentColors.primaryPink}
              softGold={accentColors.softGold}
            />

            {/* Princess Character Standing in Front of Castle Steps */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-3 right-2 sm:right-4 w-28 sm:w-36 pointer-events-none"
            >
              <PrincessCharacter
                name={princess.name}
                className="w-full h-auto drop-shadow-[0_12px_20px_rgba(140,82,112,0.22)]"
                dressPrimary={accentColors.dressPrimary}
                dressHighlight={accentColors.dressHighlight}
                crownGold={accentColors.crownGold}
                ribbonPink={accentColors.ribbonPink}
              />
            </motion.div>
          </div>

          {/* Right Animated Flower */}
          <div
            className="hidden sm:block animate-float-slow -ml-4 mb-2 shrink-0"
            style={{ animationDelay: "1.4s" }}
          >
            <InteractiveFlower kind="cherryBlossom" className="w-16 h-20" />
          </div>
        </motion.div>

        {/* Personalized Welcome Storybook Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="storybook-card relative rounded-[30px] px-6 py-8 sm:px-11 sm:py-10 max-w-2xl w-full overflow-hidden"
        >
          <RoseCornerOrnament className="absolute top-2.5 left-2.5 w-11 h-11 opacity-80 pointer-events-none" />
          <RoseCornerOrnament
            flipX
            className="absolute top-2.5 right-2.5 w-11 h-11 opacity-80 pointer-events-none"
          />

          <p className="font-script text-2xl sm:text-3xl font-semibold text-[#B9628A]">
            {greeting.scriptAccent}
          </p>

          <h1 className="mt-1.5 font-serif text-2xl sm:text-4xl md:text-[2.55rem] font-bold leading-tight text-[#68485A] tracking-tight">
            {greeting.welcomeHeading}
          </h1>

          <GoldenDivider className="my-4 max-w-[200px] mx-auto" />

          <p className="text-base sm:text-lg font-medium text-[#68485A]">
            {greeting.supportingText}
          </p>

          <div className="mt-3.5 space-y-2.5 text-sm sm:text-base leading-relaxed text-[#7E576D] max-w-xl mx-auto">
            {greeting.welcomeParagraphs.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          <div className="mt-7">
            <motion.button
              type="button"
              onClick={onEnter}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5A6C8] hover:bg-[#EE94BB] text-[#4E2C3E] font-semibold text-base sm:text-lg px-8 py-3.5 sm:px-10 sm:py-4 border-2 border-[#E8C77B] shadow-[0_12px_26px_-8px_rgba(213,119,161,0.55)] transition-colors cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#68485A]" aria-hidden="true" />
              <span>{greeting.ctaLabel}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
