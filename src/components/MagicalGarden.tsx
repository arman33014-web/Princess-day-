"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import type { GardenFlowerWish, PrincessConfig } from "@/config/princesses";
import { MagicalGardenScene } from "./illustrations/MagicalGardenScene";
import { InteractiveFlower } from "./illustrations/InteractiveFlower";
import {
  ButterflyIllustration,
  GoldenDivider,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface MagicalGardenProps {
  princess: PrincessConfig;
}

export function MagicalGarden({ princess }: MagicalGardenProps) {
  const { garden, accentColors } = princess;
  const [selectedWish, setSelectedWish] = useState<GardenFlowerWish | null>(
    null
  );
  const [discoveredIds, setDiscoveredIds] = useState<string[]>([]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWish(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleSelectFlower = (wish: GardenFlowerWish) => {
    setSelectedWish(wish);
    setDiscoveredIds((prev) =>
      prev.includes(wish.id) ? prev : [...prev, wish.id]
    );
  };

  const allDiscovered = discoveredIds.length === garden.wishes.length;

  return (
    <section
      id="magical-garden"
      className="relative z-10 py-14 sm:py-22 px-4 sm:px-6"
      aria-labelledby="magical-garden-heading"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE1EC] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#7E576D] border border-[#E8C77B]/50">
            <SparkleStar className="w-3.5 h-3.5" color="#E8C77B" />
            Chapter III • Magical Garden
          </span>
          <h2
            id="magical-garden-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#68485A] leading-tight"
          >
            {garden.heading}
          </h2>
          <p className="mt-1.5 font-script text-xl sm:text-2xl text-[#B9628A]">
            {garden.scriptAccent}
          </p>
          <GoldenDivider className="mt-3 max-w-[220px] mx-auto" />
          <p className="mt-4 text-base sm:text-lg text-[#68485A] max-w-xl mx-auto">
            {garden.supportingMessage}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#7E576D]">
            {garden.instructionHint}
          </p>
        </motion.div>

        {/* Illustrated Interactive Garden Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="storybook-card relative rounded-[32px] overflow-hidden"
        >
          <div className="relative min-h-[470px] sm:min-h-[520px] flex flex-col justify-between">
            <div className="absolute inset-0 z-0">
              <MagicalGardenScene
                primaryPink={accentColors.primaryPink}
                softGold={accentColors.softGold}
              />
            </div>

            {/* Ambient Floating Butterflies & Hearts inside Garden */}
            <div
              className="pointer-events-none absolute top-10 left-[14%] z-10 animate-flutter"
              aria-hidden="true"
            >
              <ButterflyIllustration className="w-9 h-8 sm:w-11 sm:h-10" />
            </div>
            <div
              className="pointer-events-none absolute top-14 right-[15%] z-10 animate-flutter"
              style={{ animationDelay: "1.6s" }}
              aria-hidden="true"
            >
              <ButterflyIllustration
                className="w-8 h-7 sm:w-10 sm:h-9 -scale-x-100"
                wingColor={accentColors.primaryPink}
              />
            </div>
            <div
              className="pointer-events-none absolute top-28 left-[46%] z-10 animate-heart-float hidden sm:block"
              aria-hidden="true"
            >
              <Heart className="w-4 h-4 text-[#F5A6C8] fill-[#F5A6C8]" />
            </div>

            {/* Top Progress Pill */}
            <div className="relative z-20 flex justify-center pt-5 px-4">
              <div className="royal-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-[#68485A]">
                <Sparkles
                  className="w-3.5 h-3.5 text-[#C98E34]"
                  aria-hidden="true"
                />
                <span>
                  {discoveredIds.length} of {garden.wishes.length} wishes
                  discovered
                </span>
              </div>
            </div>

            {/* Animated Wish Popup Card */}
            <div className="relative z-20 px-4 my-4 min-h-[144px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {selectedWish ? (
                  <motion.div
                    key={selectedWish.id}
                    initial={{ opacity: 0, y: 16, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    role="status"
                    aria-live="polite"
                    className="relative w-full max-w-md rounded-3xl bg-white/96 px-6 py-5 border-2 border-[#E8C77B] shadow-[0_18px_38px_-10px_rgba(140,82,112,0.28)] text-center"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedWish(null)}
                      aria-label="Close flower wish message"
                      className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF7FA] hover:bg-[#FFE1EC] text-[#7E576D] transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" aria-hidden="true" />
                    </button>

                    <p className="font-script text-xl text-[#B9628A]">
                      🌷 {selectedWish.flowerName}
                    </p>
                    <p className="mt-1.5 font-serif text-lg sm:text-xl font-bold text-[#68485A] leading-snug">
                      {selectedWish.wish}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#7E576D] leading-relaxed">
                      {selectedWish.subNote}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="garden-prompt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="rounded-full bg-white/88 px-5 py-2.5 border border-[#E8C77B]/60 text-xs sm:text-sm font-medium text-[#68485A] shadow-xs text-center"
                  >
                    {garden.emptyPrompt}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5 Interactive Flowers Garden Bed */}
            <div className="relative z-20 px-4 pb-7 pt-2 sm:px-8 sm:pb-9">
              <div
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 items-end justify-items-center"
                role="group"
                aria-label="Interactive wish flowers"
              >
                {garden.wishes.map((wish, index) => {
                  const isDiscovered = discoveredIds.includes(wish.id);
                  const isSelected = selectedWish?.id === wish.id;
                  const isLastOddMobile = index === garden.wishes.length - 1;

                  return (
                    <motion.button
                      key={wish.id}
                      type="button"
                      onClick={() => handleSelectFlower(wish)}
                      aria-pressed={isSelected}
                      aria-label={`Open wish from ${wish.flowerName}`}
                      whileHover={{ y: -6, scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      animate={
                        isSelected
                          ? { y: -7, scale: 1.06 }
                          : { y: 0, scale: 1 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 18,
                      }}
                      className={`group flex flex-col items-center rounded-2xl px-3 py-2.5 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C96B98] ${
                        isSelected
                          ? "bg-white/96 border-2 border-[#E8C77B] shadow-md"
                          : "bg-white/78 hover:bg-white/96 border border-white/90 shadow-xs hover:shadow-md"
                      } ${isLastOddMobile ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                      <InteractiveFlower
                        kind={wish.kind}
                        isDiscovered={isDiscovered}
                        className="w-16 h-20 sm:w-20 sm:h-24 transition-transform duration-300 group-hover:rotate-3"
                      />
                      <span className="mt-1 text-xs sm:text-sm font-semibold text-[#68485A] whitespace-nowrap">
                        {wish.flowerName}
                      </span>
                      <span className="text-[11px] font-medium text-[#7E576D]">
                        {isDiscovered ? "Opened ✨" : "Tap me"}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Celebration Banner When All 5 Wishes Are Discovered */}
              <AnimatePresence>
                {allDiscovered && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 text-center rounded-2xl bg-white/94 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#68485A] border border-[#E8C77B] max-w-lg mx-auto shadow-xs"
                  >
                    {garden.allDiscoveredMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
