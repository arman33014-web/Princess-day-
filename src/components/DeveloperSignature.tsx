"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GoldenDivider,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

interface DeveloperSignatureProps {
  onReplayWelcome?: () => void;
}

function HandwrittenHeartIllustration({ className = "w-12 h-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Soft Glow Behind Heart */}
      <circle cx="32" cy="30" r="24" fill="#FFFFFF" fillOpacity="0.72" />
      {/* Illustrated Pastel Heart */}
      <path
        d="M32 21.5C27.8 14.5 17 15.8 15.8 24.4C14.6 33.4 25.5 41.2 32 46.2C38.5 41.2 49.4 33.4 48.2 24.4C47 15.8 36.2 14.5 32 21.5Z"
        fill="#F5A6C8"
        stroke="#B66B8E"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Delicate Inner Highlight */}
      <path
        d="M22.5 23.5C21.8 25.2 22.2 27.4 23.8 29"
        stroke="#FFF7FA"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Tiny Golden Accent Sparkles */}
      <path
        d="M52 10L53.4 13.6L57 15L53.4 16.4L52 20L50.6 16.4L47 15L50.6 13.6L52 10Z"
        fill="#E8C77B"
      />
      <circle cx="12" cy="17" r="2.2" fill="#E8C77B" />
    </svg>
  );
}

export function DeveloperSignature({
  onReplayWelcome,
}: DeveloperSignatureProps) {
  return (
    <footer
      id="developer-signature"
      aria-label="Personal closing note from Your Developer"
      className="relative z-10 px-4 pt-8 pb-24 sm:px-6 sm:pt-12 sm:pb-20"
    >
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] px-6 py-10 sm:px-12 sm:py-13 text-center border-[1.5px] border-[#E8C77B]/85 shadow-[0_20px_48px_-20px_rgba(167,112,140,0.28),inset_0_0_0_6px_rgba(255,255,255,0.75),inset_0_0_0_7.5px_rgba(232,199,123,0.45)]"
          style={{
            background:
              "linear-gradient(160deg, #FFEAF2 0%, #FFF6FA 52%, #FFE5EF 100%)",
          }}
        >
          {/* Tiny Floating Twinkling Stars */}
          <div
            className="pointer-events-none absolute top-6 left-7 animate-twinkle"
            style={{ animationDelay: "0.2s" }}
            aria-hidden="true"
          >
            <SparkleStar className="w-4 h-4" color="#E8C77B" />
          </div>
          <div
            className="pointer-events-none absolute top-8 right-8 animate-twinkle"
            style={{ animationDelay: "1.1s" }}
            aria-hidden="true"
          >
            <SparkleStar className="w-4 h-4" color="#E8C77B" />
          </div>
          <div
            className="pointer-events-none absolute bottom-7 left-10 animate-twinkle hidden sm:block"
            style={{ animationDelay: "1.8s" }}
            aria-hidden="true"
          >
            <SparkleStar className="w-3.5 h-3.5" color="#F5A6C8" />
          </div>
          <div
            className="pointer-events-none absolute bottom-8 right-10 animate-twinkle hidden sm:block"
            style={{ animationDelay: "0.7s" }}
            aria-hidden="true"
          >
            <SparkleStar className="w-3.5 h-3.5" color="#F5A6C8" />
          </div>

          {/* Small Illustrated Heart Centerpiece */}
          <div className="flex justify-center mb-4">
            <div className="animate-float-slow">
              <HandwrittenHeartIllustration className="w-14 h-12" />
            </div>
          </div>

          {/* Closing Personal Line */}
          <p className="font-serif text-lg sm:text-xl text-[#68485A] leading-relaxed max-w-lg mx-auto">
            Made with a little creativity, a lot of care, and a tiny bit of
            magic. ❤️
          </p>

          <GoldenDivider className="my-6 max-w-[180px] mx-auto" />

          {/* Handwritten Sign-Off */}
          <p className="font-script text-2xl sm:text-[1.7rem] text-[#8E5B74]">
            With warm wishes,
          </p>

          {/* Prominent Signature */}
          <div className="mt-2 inline-flex flex-col items-center">
            <p className="font-script text-4xl sm:text-5xl font-bold text-[#5C364A] tracking-wide drop-shadow-[0_2px_10px_rgba(245,166,200,0.45)]">
              Apka Dev{" "}
              <span className="inline-block not-italic text-3xl sm:text-4xl align-middle">
                👨‍💻
              </span>
            </p>
            <span
              className="mt-1.5 h-[2.5px] w-36 sm:w-44 rounded-full bg-gradient-to-r from-transparent via-[#E8C77B] to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Playful Warm Final Whisper */}
          <p className="mt-6 text-sm sm:text-base font-medium text-[#7E576D]">
            Hope this little world made you smile. ✨
          </p>
        </motion.div>

        {/* Quiet Optional Replay Link Below Signature Card */}
        {onReplayWelcome && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onReplayWelcome}
              className="text-xs sm:text-sm font-medium text-[#8C6478] hover:text-[#68485A] underline underline-offset-4 transition-colors cursor-pointer"
            >
              Revisit Welcome Gate ✨
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
