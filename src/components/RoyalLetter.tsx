"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MailOpen, RotateCcw } from "lucide-react";
import type { PrincessConfig } from "@/config/princesses";
import { RoyalEnvelope } from "./illustrations/RoyalEnvelope";
import {
  GoldenDivider,
  RoseCornerOrnament,
  RoyalCrownIcon,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface RoyalLetterProps {
  princess: PrincessConfig;
}

export function RoyalLetter({ princess }: RoyalLetterProps) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const timerRef = useRef<number | null>(null);
  const { letter, accentColors } = princess;

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleOpenLetter = () => {
    if (isEnvelopeOpen || isLetterVisible) return;
    setIsEnvelopeOpen(true);
    timerRef.current = window.setTimeout(() => {
      setIsLetterVisible(true);
    }, 340);
  };

  const handleCloseLetter = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setIsLetterVisible(false);
    timerRef.current = window.setTimeout(() => {
      setIsEnvelopeOpen(false);
    }, 220);
  };

  return (
    <section
      id="royal-letter"
      className="relative z-10 py-14 sm:py-22 px-4 sm:px-6"
      aria-labelledby="royal-letter-heading"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFE1EC] px-4 py-1.5 text-xs sm:text-sm font-medium text-[#7E576D] border border-[#E8C77B]/50">
            <SparkleStar className="w-3.5 h-3.5" color="#E8C77B" />
            Chapter II • Royal Letter
          </span>
          <h2
            id="royal-letter-heading"
            className="mt-4 font-serif text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-[#68485A] leading-tight"
          >
            {letter.heading}
          </h2>
          <p className="mt-1.5 font-script text-xl sm:text-2xl text-[#B9628A]">
            {letter.scriptAccent}
          </p>
          <GoldenDivider className="mt-3 max-w-[220px] mx-auto" />
        </motion.div>

        {/* Interactive Envelope -> Letter Transition */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            {!isLetterVisible ? (
              <motion.div
                key="sealed-envelope"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={{ duration: 0.28 }}
                className="storybook-card rounded-[32px] px-6 py-9 sm:px-12 sm:py-12 w-full max-w-xl flex flex-col items-center text-center"
              >
                <div
                  className="w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  onClick={handleOpenLetter}
                  aria-hidden="true"
                >
                  <RoyalEnvelope
                    isOpen={isEnvelopeOpen}
                    primaryPink={accentColors.primaryPink}
                    softGold={accentColors.softGold}
                    ribbonPink={accentColors.ribbonPink}
                  />
                </div>

                <p className="mt-5 text-sm sm:text-base text-[#7E576D] max-w-md leading-relaxed">
                  {letter.envelopeHint}
                </p>

                <motion.button
                  type="button"
                  onClick={handleOpenLetter}
                  aria-expanded={isLetterVisible}
                  aria-controls="royal-letter-paper"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#F5A6C8] hover:bg-[#EE94BB] text-[#4E2C3E] font-semibold text-base sm:text-lg px-8 py-3.5 border-2 border-[#E8C77B] shadow-[0_12px_24px_-8px_rgba(213,119,161,0.5)] transition-colors cursor-pointer"
                >
                  <MailOpen className="w-5 h-5" aria-hidden="true" />
                  <span>{letter.buttonLabel}</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.article
                id="royal-letter-paper"
                key="opened-letter"
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="storybook-paper relative rounded-[28px] px-6 py-10 sm:px-12 sm:py-14 w-full max-w-2xl"
                aria-label={`Royal letter for ${princess.displayName}`}
              >
                {/* Decorative Rose Corners */}
                <RoseCornerOrnament className="absolute top-3 left-3 w-12 h-12 sm:w-16 sm:h-16 opacity-90 pointer-events-none" />
                <RoseCornerOrnament
                  flipX
                  className="absolute top-3 right-3 w-12 h-12 sm:w-16 sm:h-16 opacity-90 pointer-events-none"
                />

                {/* Letter Header */}
                <div className="flex flex-col items-center text-center mb-7">
                  <RoyalCrownIcon className="w-10 h-7 mb-2" />
                  <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#825C71]">
                    Princess Day Note • {princess.occasionDate}
                  </p>
                </div>

                {/* Letter Body (Handwritten salutation & pause accents + super-readable Poppins body) */}
                <div className="space-y-5 text-[#68485A] text-base sm:text-[1.06rem] leading-[1.88]">
                  <p className="font-script text-3xl sm:text-4xl font-semibold text-[#B9628A]">
                    {letter.salutation}
                  </p>

                  {letter.paragraphs.map((paragraph, idx) => {
                    const isShortPause =
                      paragraph.endsWith("...") && paragraph.length < 36;
                    return (
                      <p
                        key={idx}
                        className={
                          isShortPause
                            ? "font-script text-2xl sm:text-[1.7rem] text-[#9E5274] pt-1"
                            : undefined
                        }
                      >
                        {paragraph}
                      </p>
                    );
                  })}

                  <p className="font-serif text-xl sm:text-2xl font-bold text-[#68485A] pt-2">
                    {letter.closingWish}
                  </p>
                </div>

                <GoldenDivider className="my-7 max-w-[200px]" />

                {/* Sign-Off */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="text-sm sm:text-base text-[#7E576D]">
                      {letter.signOffPrefix}
                    </p>
                    <p className="font-script text-2xl sm:text-3xl font-semibold text-[#68485A] mt-0.5">
                      {letter.signOffName}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCloseLetter}
                    className="inline-flex items-center justify-center gap-2 self-start sm:self-auto rounded-full bg-[#FFF7FA] hover:bg-[#FFE1EC] text-[#68485A] text-xs sm:text-sm font-medium px-4 py-2 border border-[#E8C77B]/70 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{letter.closeLabel}</span>
                  </button>
                </div>

                {/* Postscript Handwritten Note */}
                <p className="mt-6 pt-4 border-t border-[#FFE1EC] font-script text-lg sm:text-xl text-[#825C71]">
                  {letter.postScript}
                </p>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
