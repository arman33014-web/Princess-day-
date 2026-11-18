"use client";

import React from "react";
import { motion } from "framer-motion";

export type GiftBoxStage = "closed" | "untying" | "opened";

interface RoyalGiftBoxProps {
  stage: GiftBoxStage;
  primaryPink?: string;
  softGold?: string;
  ribbonPink?: string;
}

export function RoyalGiftBox({
  stage,
  primaryPink = "#F5A6C8",
  softGold = "#E8C77B",
  ribbonPink = "#E57AA8",
}: RoyalGiftBoxProps) {
  const isUntying = stage === "untying";
  const isOpened = stage === "opened";

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px] select-none">
      <svg
        viewBox="0 0 320 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_18px_30px_rgba(167,123,145,0.25)]"
        role="img"
        aria-label="Illustrated pastel pink royal gift box tied with an animated golden silk ribbon bow"
      >
        {/* Soft Shadow Beneath Box */}
        <ellipse cx="160" cy="284" rx="112" ry="16" fill="#F2D0E0" fillOpacity="0.68" />

        {/* Magical Sparkle & Rising Hearts Burst When Opened */}
        <motion.g
          initial={false}
          animate={{
            opacity: isOpened ? 1 : 0,
            scale: isOpened ? 1.06 : 0.65,
            y: isOpened ? -10 : 12,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "160px 145px" }}
        >
          <circle cx="160" cy="140" r="94" fill="#FFF3C2" fillOpacity="0.48" />
          <path d="M160 32L164 48L180 52L164 56L160 72L156 56L140 52L156 48L160 32Z" fill={softGold} />
          <path d="M94 68L97 78L107 81L97 84L94 94L91 84L81 81L91 78L94 68Z" fill={primaryPink} />
          <path d="M226 66L229 76L239 79L229 82L226 92L223 82L213 79L223 76L226 66Z" fill={primaryPink} />
          {/* Rising Pink Hearts */}
          <path
            d="M126 102C123.5 98.5 118.5 99.6 118.5 103.6C118.5 107.6 126 113 126 113C126 113 133.5 107.6 133.5 103.6C133.5 99.6 128.5 98.5 126 102Z"
            fill={ribbonPink}
          />
          <path
            d="M196 96C193.5 92.5 188.5 93.6 188.5 97.6C188.5 101.6 196 107 196 107C196 107 203.5 101.6 203.5 97.6C203.5 93.6 198.5 92.5 196 96Z"
            fill={primaryPink}
          />
        </motion.g>

        {/* Gift Box Main Body */}
        <rect
          x="56"
          y="146"
          width="208"
          height="132"
          rx="16"
          fill={primaryPink}
          stroke="#A86986"
          strokeWidth="2.4"
        />
        <rect
          x="68"
          y="156"
          width="184"
          height="112"
          rx="10"
          fill="#FFCEE2"
          fillOpacity="0.58"
        />
        {/* Polka & Heart Trim */}
        <circle cx="94" cy="190" r="4" fill="#FFF7FA" fillOpacity="0.75" />
        <circle cx="94" cy="236" r="4" fill="#FFF7FA" fillOpacity="0.75" />
        <circle cx="226" cy="190" r="4" fill="#FFF7FA" fillOpacity="0.75" />
        <circle cx="226" cy="236" r="4" fill="#FFF7FA" fillOpacity="0.75" />

        {/* Vertical Golden Silk Ribbon on Box (loosens gently during untie) */}
        <motion.g
          initial={false}
          animate={{
            scaleX: isUntying ? 0.92 : isOpened ? 0.85 : 1,
            opacity: isOpened ? 0.72 : 1,
          }}
          transition={{ duration: 0.35 }}
          style={{ transformOrigin: "160px 212px" }}
        >
          <rect
            x="140"
            y="146"
            width="40"
            height="132"
            fill={softGold}
            stroke="#B58943"
            strokeWidth="1.8"
          />
          <line x1="150" y1="148" x2="150" y2="276" stroke="#FAF0C8" strokeWidth="2.5" opacity="0.75" />
        </motion.g>

        {/* Decorative Mini Flowers on Base Corners */}
        <g transform="translate(52, 244)">
          <circle cx="14" cy="14" r="9" fill="#FFE1EC" stroke="#B06B8B" strokeWidth="1.4" />
          <circle cx="14" cy="14" r="4" fill={softGold} />
        </g>
        <g transform="translate(240, 244)">
          <circle cx="14" cy="14" r="9" fill="#FFE1EC" stroke="#B06B8B" strokeWidth="1.4" />
          <circle cx="14" cy="14" r="4" fill={softGold} />
        </g>

        {/* Animated Lifting Gift Lid */}
        <motion.g
          initial={false}
          animate={
            isOpened
              ? { y: -58, rotate: -14, x: -16 }
              : isUntying
                ? { y: -5, rotate: 0, x: 0 }
                : { y: 0, rotate: 0, x: 0 }
          }
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
          style={{ transformOrigin: "160px 136px" }}
        >
          {/* Lid Base */}
          <rect
            x="44"
            y="112"
            width="232"
            height="42"
            rx="12"
            fill="#FFE1EC"
            stroke="#A86986"
            strokeWidth="2.4"
          />
          {/* Lid Ribbon Band */}
          <rect
            x="138"
            y="112"
            width="44"
            height="42"
            fill={softGold}
            stroke="#B58943"
            strokeWidth="1.8"
          />

          {/* Animated Untying Silk Ribbon Bow */}
          {/* Left Bow Loop */}
          <motion.g
            initial={false}
            animate={
              isUntying || isOpened
                ? { x: -24, y: -14, rotate: -26, opacity: isOpened ? 0.35 : 0.9 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "156px 110px" }}
          >
            <path
              d="M160 112C132 78 86 72 82 96C79 112 114 118 156 113"
              fill="#F5DF9F"
              stroke="#B58943"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M156 110C136 92 106 90 102 100C100 106 124 110 154 110"
              fill={softGold}
            />
          </motion.g>

          {/* Right Bow Loop */}
          <motion.g
            initial={false}
            animate={
              isUntying || isOpened
                ? { x: 24, y: -14, rotate: 26, opacity: isOpened ? 0.35 : 0.9 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "164px 110px" }}
          >
            <path
              d="M160 112C188 78 234 72 238 96C241 112 206 118 164 113"
              fill="#F5DF9F"
              stroke="#B58943"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M164 110C184 92 214 90 218 100C220 106 196 110 166 110"
              fill={softGold}
            />
          </motion.g>

          {/* Ribbon Center Rose Jewel */}
          <motion.g
            initial={false}
            animate={
              isUntying || isOpened
                ? { scale: 0.8, y: -8, opacity: isOpened ? 0.4 : 0.95 }
                : { scale: 1, y: 0, opacity: 1 }
            }
            transition={{ duration: 0.35 }}
            style={{ transformOrigin: "160px 110px" }}
          >
            <circle cx="160" cy="110" r="13" fill={ribbonPink} stroke="#A45478" strokeWidth="1.8" />
            <path
              d="M160 106.5C158.2 104.4 155 105.2 155 107.8C155 110.5 160 114.2 160 114.2C160 114.2 165 110.5 165 107.8C165 105.2 161.8 104.4 160 106.5Z"
              fill="#FFF7FA"
            />
          </motion.g>
        </motion.g>

        {/* Ambient Sparkles */}
        <path d="M36 90L38.2 96L44 98L38.2 100L36 106L33.8 100L28 98L33.8 96L36 90Z" fill={softGold} />
        <path d="M284 80L286.5 87L293.5 89.5L286.5 92L284 99L281.5 92L274.5 89.5L281.5 87L284 80Z" fill={softGold} />
        <path d="M280 192L281.8 196.5L286.5 198.2L281.8 200L280 204.5L278.2 200L273.5 198.2L278.2 196.5L280 192Z" fill={primaryPink} />
      </svg>
    </div>
  );
}
