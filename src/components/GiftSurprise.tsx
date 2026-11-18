"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gift, Heart, Sparkles, X } from "lucide-react";
import type { PrincessConfig } from "@/config/princesses";
import { RoyalGiftBox, type GiftBoxStage } from "./illustrations/RoyalGiftBox";
import { FairytaleCastle } from "./illustrations/FairytaleCastle";
import { InteractiveFlower } from "./illustrations/InteractiveFlower";
import {
  GoldenDivider,
  RoseCornerOrnament,
  RoyalCrownIcon,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface GiftSurpriseProps {
  princess: PrincessConfig;
  onAfterClose?: () => void;
}

const CELEBRATION_CONFETTI = [
  { left: "8%", delay: 0, color: "#F5A6C8", size: 10, shape: "circle" },
  { left: "16%", delay: 0.25, color: "#E8C77B", size: 12, shape: "diamond" },
  { left: "24%", delay: 0.5, color: "#FFE1EC", size: 11, shape: "circle" },
  { left: "34%", delay: 0.15, color: "#DDA0A8", size: 9, shape: "diamond" },
  { left: "44%", delay: 0.4, color: "#F5A6C8", size: 12, shape: "circle" },
  { left: "56%", delay: 0.2, color: "#E8C77B", size: 10, shape: "diamond" },
  { left: "66%", delay: 0.45, color: "#F8B6D2", size: 11, shape: "circle" },
  { left: "76%", delay: 0.1, color: "#E8C77B", size: 10, shape: "diamond" },
  { left: "85%", delay: 0.35, color: "#F5A6C8", size: 12, shape: "circle" },
  { left: "92%", delay: 0.55, color: "#DDA0A8", size: 10, shape: "diamond" },
] as const;

const FLOATING_HEARTS = [
  { left: "10%", delay: "0s" },
  { left: "24%", delay: "0.9s" },
  { left: "40%", delay: "0.4s" },
  { left: "58%", delay: "1.4s" },
  { left: "74%", delay: "0.7s" },
  { left: "88%", delay: "1.1s" },
] as const;

export function GiftSurprise({ princess, onAfterClose }: GiftSurpriseProps) {
  const [boxStage, setBoxStage] = useState<GiftBoxStage>("closed");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const timersRef = useRef<number[]>([]);
  const { finalSurprise, accentColors } = princess;

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  useEffect(() => {
    if (!isOverlayOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  const handleOpenGift = () => {
    clearTimers();
    // Stage 1: Untie the golden ribbon bow
    setBoxStage("untying");

    // Stage 2: Pop open the gift box lid with rising hearts & sparkles
    const t1 = window.setTimeout(() => {
      setBoxStage("opened");
    }, 340);

    // Stage 3: Reveal the pink fairytale full-screen surprise
    const t2 = window.setTimeout(() => {
      setIsOverlayOpen(true);
    }, 760);

    timersRef.current = [t1, t2];
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    if (onAfterClose) {
      window.setTimeout(() => {
        onAfterClose();
      }, 260);
    }
  };

  return (
    <section
      id="royal-surprise"
      className="relative z-10 py-14 sm:py-22 px-4 sm:px-6"
      aria-labelledby="royal-surprise-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE1EC] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#7E576D] border border-[#E8C77B]/50">
            <SparkleStar className="w-3.5 h-3.5" color="#E8C77B" />
            Final Chapter • Royal Gift
          </span>
          <h2
            id="royal-surprise-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#68485A] leading-tight"
          >
            {finalSurprise.heading}
          </h2>
          <p className="mt-1.5 font-script text-xl sm:text-2xl text-[#B9628A]">
            {finalSurprise.scriptAccent}
          </p>
          <GoldenDivider className="mt-3 max-w-[220px] mx-auto" />
        </motion.div>

        {/* Illustrated Gift Box Stage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="storybook-card relative rounded-[32px] px-6 py-10 sm:px-12 sm:py-14 flex flex-col items-center text-center overflow-hidden"
        >
          <RoseCornerOrnament className="absolute top-3 left-3 w-12 h-12 sm:w-16 sm:h-16 opacity-85 pointer-events-none" />
          <RoseCornerOrnament
            flipX
            className="absolute top-3 right-3 w-12 h-12 sm:w-16 sm:h-16 opacity-85 pointer-events-none"
          />

          <div className="relative flex items-end justify-center w-full">
            <div className="hidden sm:block -mr-4 mb-4 opacity-90">
              <InteractiveFlower kind="peony" className="w-16 h-20" />
            </div>

            <div
              className="w-full max-w-[300px] sm:max-w-[330px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={handleOpenGift}
              aria-hidden="true"
            >
              <RoyalGiftBox
                stage={boxStage}
                primaryPink={accentColors.primaryPink}
                softGold={accentColors.softGold}
                ribbonPink={accentColors.ribbonPink}
              />
            </div>

            <div className="hidden sm:block -ml-4 mb-4 opacity-90">
              <InteractiveFlower kind="lily" className="w-16 h-20" />
            </div>
          </div>

          <p className="mt-5 text-base sm:text-lg text-[#7E576D] max-w-lg">
            {finalSurprise.subtext}
          </p>

          <motion.button
            type="button"
            onClick={handleOpenGift}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#F5A6C8] hover:bg-[#EE94BB] text-[#4E2C3E] font-semibold text-base sm:text-lg px-8 py-4 border-2 border-[#E8C77B] shadow-[0_14px_28px_-8px_rgba(213,119,161,0.55)] transition-colors cursor-pointer"
          >
            <Gift className="w-5 h-5" aria-hidden="true" />
            <span>{finalSurprise.buttonLabel}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Full-Screen Pink Fairytale Surprise Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            key="surprise-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="surprise-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            style={{
              background:
                "radial-gradient(circle at 50% 25%, rgba(255, 225, 236, 0.96) 0%, rgba(245, 166, 200, 0.92) 55%, rgba(164, 98, 128, 0.92) 100%)",
            }}
          >
            {/* Dreamy Pink Fairytale Castle Silhouette Backdrop */}
            <div
              className="pointer-events-none fixed inset-0 flex items-end justify-center opacity-22 overflow-hidden"
              aria-hidden="true"
            >
              <FairytaleCastle
                className="w-[540px] max-w-none translate-y-12"
                primaryPink={accentColors.primaryPink}
                softGold={accentColors.softGold}
              />
            </div>

            {/* Confetti & Floating Hearts Layer */}
            <div
              className="pointer-events-none fixed inset-0 overflow-hidden"
              aria-hidden="true"
            >
              {CELEBRATION_CONFETTI.map((piece, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: -24, opacity: 0, rotate: 0 }}
                  animate={{
                    y: ["0vh", "102vh"],
                    opacity: [0, 0.95, 0.9, 0],
                    rotate: [0, 220, 420],
                  }}
                  transition={{
                    duration: 4.8 + (idx % 3),
                    delay: piece.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0"
                  style={{
                    left: piece.left,
                    width: `${piece.size}px`,
                    height: `${piece.size}px`,
                    backgroundColor: piece.color,
                    borderRadius: piece.shape === "circle" ? "9999px" : "2px",
                  }}
                />
              ))}

              {FLOATING_HEARTS.map((heart, idx) => (
                <div
                  key={idx}
                  className="animate-heart-float absolute bottom-10"
                  style={{ left: heart.left, animationDelay: heart.delay }}
                >
                  <Heart className="w-7 h-7 text-white fill-[#FFE1EC] drop-shadow-xs" />
                </div>
              ))}
            </div>

            {/* Celebration Storybook Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="storybook-paper relative z-10 w-full max-w-xl rounded-[32px] px-6 py-9 sm:px-10 sm:py-12 text-center my-auto"
            >
              <button
                type="button"
                onClick={handleCloseOverlay}
                aria-label="Close royal surprise"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF7FA] hover:bg-[#FFE1EC] text-[#68485A] border border-[#E8C77B]/60 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>

              <RoseCornerOrnament className="absolute top-3 left-3 w-12 h-12 opacity-90 pointer-events-none" />

              <div className="flex flex-col items-center">
                <div className="rounded-full bg-[#FFE1EC] p-3.5 border-2 border-[#E8C77B] shadow-sm mb-4">
                  <RoyalCrownIcon className="w-11 h-8" />
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7FA] px-4 py-1 text-xs sm:text-sm font-medium text-[#7E576D] border border-[#E8C77B]/60">
                  <Sparkles className="w-3.5 h-3.5 text-[#C98E34]" aria-hidden="true" />
                  {finalSurprise.revealBadge}
                </span>

                <h3
                  id="surprise-modal-title"
                  className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#68485A]"
                >
                  {princess.displayName} 👑
                </h3>

                <GoldenDivider className="my-5 max-w-[200px]" />

                <div className="space-y-4 text-base sm:text-lg leading-[1.82] text-[#68485A]">
                  {finalSurprise.paragraphs.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl bg-[#FFE1EC] px-6 py-3.5 font-serif text-xl sm:text-2xl font-bold text-[#5A364A] border border-[#E8C77B]/70">
                  {finalSurprise.celebrationLine}
                </p>

                <p className="mt-4 font-script text-xl sm:text-2xl text-[#825C71]">
                  {finalSurprise.closingNote}
                </p>

                <button
                  type="button"
                  onClick={handleCloseOverlay}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#68485A] hover:bg-[#553949] text-white text-sm font-medium px-6 py-2.5 transition-colors cursor-pointer"
                >
                  <span>Back To Your Fairytale</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
