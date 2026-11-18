"use client";

import React, { useCallback, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import type { PrincessConfig } from "@/config/princesses";
import { FloatingElements } from "./FloatingElements";
import { MusicControl } from "./MusicControl";
import { StoryNavigation } from "./StoryNavigation";
import { WelcomeScreen } from "./WelcomeScreen";
import { PrincessIntroduction } from "./PrincessIntroduction";
import { RoyalLetter } from "./RoyalLetter";
import { MagicalGarden } from "./MagicalGarden";
import { GiftSurprise } from "./GiftSurprise";
import { DeveloperSignature } from "./DeveloperSignature";
import { RoyalSectionDivider } from "./illustrations/StorybookOrnaments";

interface PrincessFairytaleExperienceProps {
  princess: PrincessConfig;
}

export function PrincessFairytaleExperience({
  princess,
}: PrincessFairytaleExperienceProps) {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnterFairytale = useCallback(() => {
    setHasEntered(true);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleReplayWelcome = useCallback(() => {
    setHasEntered(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const handleScrollToSignature = useCallback(() => {
    if (typeof document === "undefined") return;
    const signatureEl = document.getElementById("developer-signature");
    signatureEl?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen w-full bg-[#FFF7FA] text-[#68485A] flex flex-col">
        {/* Lightweight Ambient Storybook Atmosphere */}
        <FloatingElements />

        {/* Optional Non-Autoplaying Music Control */}
        <MusicControl />

        <AnimatePresence mode="wait">
          {!hasEntered ? (
            <WelcomeScreen
              key="welcome"
              princess={princess}
              onEnter={handleEnterFairytale}
            />
          ) : (
            <motion.div
              key="storybook-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="relative z-10 flex flex-col flex-1"
            >
              {/* Chapter Navigation Bar */}
              <StoryNavigation
                princessName={princess.name}
                onReplayWelcome={handleReplayWelcome}
              />

              {/* Storytelling Chapters 02 -> 05 with Royal Section Dividers */}
              <main className="flex-1">
                <PrincessIntroduction princess={princess} />
                <RoyalSectionDivider />
                <RoyalLetter princess={princess} />
                <RoyalSectionDivider />
                <MagicalGarden princess={princess} />
                <RoyalSectionDivider />
                <GiftSurprise
                  princess={princess}
                  onAfterClose={handleScrollToSignature}
                />
              </main>

              {/* Final Chapter 06: Personal Handwritten Developer Signature */}
              <RoyalSectionDivider />
              <DeveloperSignature onReplayWelcome={handleReplayWelcome} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
