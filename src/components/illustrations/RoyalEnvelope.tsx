"use client";

import React from "react";
import { motion } from "framer-motion";

interface RoyalEnvelopeProps {
  isOpen: boolean;
  primaryPink?: string;
  softGold?: string;
  ribbonPink?: string;
}

export function RoyalEnvelope({
  isOpen,
  primaryPink = "#F5A6C8",
  softGold = "#E8C77B",
  ribbonPink = "#E57AA8",
}: RoyalEnvelopeProps) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] select-none">
      <svg
        viewBox="0 0 380 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_14px_24px_rgba(167,123,145,0.22)]"
        role="img"
        aria-label="Illustrated pastel pink royal envelope sealed with a pink wax seal and golden border"
      >
        {/* Envelope Base Back */}
        <rect
          x="22"
          y="54"
          width="336"
          height="190"
          rx="16"
          fill="#FFF2F7"
          stroke="#B57B96"
          strokeWidth="2.2"
        />

        {/* Peeking Letter Inside */}
        <motion.g
          initial={false}
          animate={{ y: isOpen ? -38 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x="44"
            y="72"
            width="292"
            height="140"
            rx="10"
            fill="#FFFFFF"
            stroke={softGold}
            strokeWidth="1.8"
          />
          <line x1="78" y1="102" x2="240" y2="102" stroke="#F4D3E1" strokeWidth="4" strokeLinecap="round" />
          <line x1="78" y1="120" x2="296" y2="120" stroke="#F8E2EC" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="78" y1="136" x2="270" y2="136" stroke="#F8E2EC" strokeWidth="3.5" strokeLinecap="round" />
          {/* Little Heart on Letter */}
          <path
            d="M286 98C284 95.5 280.2 96.4 280.2 99.4C280.2 102.4 286 106.5 286 106.5C286 106.5 291.8 102.4 291.8 99.4C291.8 96.4 288 95.5 286 98Z"
            fill={primaryPink}
          />
        </motion.g>

        {/* Left & Right Envelope Folds */}
        <path
          d="M24 68L178 160L24 234C22.5 231 22 228 22 224V72C22 70.5 22.8 69 24 68Z"
          fill="#FFE4EF"
          stroke="#B57B96"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M356 68L202 160L356 234C357.5 231 358 228 358 224V72C358 70.5 357.2 69 356 68Z"
          fill="#FFE4EF"
          stroke="#B57B96"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Bottom Fold */}
        <path
          d="M28 242L176 146C184 140.5 196 140.5 204 146L352 242C349 243.5 345 244 342 244H38C35 244 31 243.5 28 242Z"
          fill="#FFF8FB"
          stroke="#B57B96"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Golden Decorative Border on Envelope Front */}
        <rect
          x="32"
          y="64"
          width="316"
          height="170"
          rx="11"
          stroke={softGold}
          strokeWidth="1.4"
          strokeDasharray="5 4"
          opacity="0.85"
        />

        {/* Corner Roses */}
        <g transform="translate(38, 206)">
          <circle cx="10" cy="14" r="7" fill={primaryPink} stroke="#A86685" strokeWidth="1.2" />
          <path d="M18 18C22 14 26 17 24 22C21 24 17 22 18 18Z" fill="#C9DFCA" stroke="#7FA483" strokeWidth="1" />
        </g>
        <g transform="translate(316, 206)">
          <circle cx="16" cy="14" r="7" fill={primaryPink} stroke="#A86685" strokeWidth="1.2" />
          <path d="M8 18C4 14 0 17 2 22C5 24 9 22 8 18Z" fill="#C9DFCA" stroke="#7FA483" strokeWidth="1" />
        </g>

        {/* Animated Top Triangular Flap */}
        <motion.g
          style={{ transformOrigin: "190px 58px" }}
          initial={false}
          animate={{
            rotateX: isOpen ? 168 : 0,
            opacity: isOpen ? 0.92 : 1,
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <path
            d="M28 56H352C354.5 56 356 58 354 60L202 162C194.5 167 185.5 167 178 162L26 60C24 58 25.5 56 28 56Z"
            fill="#FFDCEB"
            stroke="#B57B96"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M42 64L190 156L338 64"
            stroke={softGold}
            strokeWidth="1.4"
            strokeDasharray="4 4"
          />

          {/* Pink Wax Seal with Golden Crown */}
          <g transform="translate(162, 126)">
            <circle cx="28" cy="28" r="24" fill={ribbonPink} stroke="#A45478" strokeWidth="2" />
            <circle cx="28" cy="28" r="18.5" fill={primaryPink} stroke="#FFF0F6" strokeWidth="1.4" />
            <path
              d="M18 33L16 23L22.5 27L28 20L33.5 27L40 23L38 33H18Z"
              fill="#F7E3A8"
              stroke="#B58943"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </g>
        </motion.g>

        {/* Tiny Sparkle Stars Around Envelope */}
        <path d="M52 28L54 34L60 36L54 38L52 44L50 38L44 36L50 34L52 28Z" fill={softGold} />
        <path d="M332 24L334.5 31L341.5 33.5L334.5 36L332 43L329.5 36L322.5 33.5L329.5 31L332 24Z" fill={softGold} />
        <path d="M190 12L192 18L198 20L192 22L190 28L188 22L182 20L188 18L190 12Z" fill={primaryPink} />
      </svg>
    </div>
  );
}
