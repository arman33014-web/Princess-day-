import React from "react";
import type { FlowerKind } from "@/config/princesses";

interface InteractiveFlowerProps {
  kind: FlowerKind;
  isDiscovered?: boolean;
  className?: string;
}

export function InteractiveFlower({
  kind,
  isDiscovered = false,
  className = "w-20 h-24",
}: InteractiveFlowerProps) {
  return (
    <svg
      viewBox="0 0 96 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle Magical Glow when Discovered */}
      {isDiscovered && (
        <circle cx="48" cy="44" r="34" fill="#FFE6F0" fillOpacity="0.78" />
      )}

      {/* Stem & Leaves */}
      <path
        d="M48 64C48 80 47 94 48 106"
        stroke="#7BA380"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M47 86C34 86 24 78 26 70C34 68 44 76 47 86Z"
        fill="#C6DFC7"
        stroke="#7BA380"
        strokeWidth="1.6"
      />
      <path
        d="M49 82C62 82 72 74 70 66C62 64 52 72 49 82Z"
        fill="#C6DFC7"
        stroke="#7BA380"
        strokeWidth="1.6"
      />

      {/* Flower Bloom Variants */}
      {kind === "rose" && (
        <g>
          <circle cx="48" cy="42" r="24" fill="#F8B6D2" stroke="#AD6988" strokeWidth="1.8" />
          <circle cx="38" cy="38" r="13" fill="#FAD0E2" stroke="#B67391" strokeWidth="1.4" />
          <circle cx="58" cy="38" r="13" fill="#FAD0E2" stroke="#B67391" strokeWidth="1.4" />
          <circle cx="48" cy="44" r="14" fill="#F39BC2" stroke="#A65E7E" strokeWidth="1.5" />
          <path
            d="M42 43C43 38 53 38 54 43C55 48 47 51 44 47.5C42 45 45 41.5 49 42.2C51.5 42.7 51 45.5 48.5 45.5"
            stroke="#FFF5F9"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>
      )}

      {kind === "cherryBlossom" && (
        <g>
          {[0, 72, 144, 216, 288].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 48 42)`}>
              <path
                d="M48 42C39 30 39 16 45 14C47 16 48 18 48 18C48 18 49 16 51 14C57 16 57 30 48 42Z"
                fill="#FFE1EC"
                stroke="#C583A1"
                strokeWidth="1.5"
              />
            </g>
          ))}
          <circle cx="48" cy="42" r="8" fill="#F5A6C8" />
          <circle cx="48" cy="42" r="4" fill="#F5DF9F" />
          <circle cx="43" cy="38" r="1.5" fill="#E8C77B" />
          <circle cx="53" cy="38" r="1.5" fill="#E8C77B" />
          <circle cx="48" cy="47" r="1.5" fill="#E8C77B" />
        </g>
      )}

      {kind === "tulip" && (
        <g>
          <path
            d="M27 36C27 24 34 18 39 24L48 14L57 24C62 18 69 24 69 36C69 54 59 64 48 64C37 64 27 54 27 36Z"
            fill="#F9C5DA"
            stroke="#B4728F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M36 62C34 48 39 28 48 17C57 28 62 48 60 62C56 64 40 64 36 62Z"
            fill="#FFE6F0"
            stroke="#E8C77B"
            strokeWidth="1.6"
          />
          <path
            d="M48 22V56"
            stroke="#F4DC9B"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>
      )}

      {kind === "peony" && (
        <g>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="48"
              cy="26"
              rx="10"
              ry="14"
              fill="#FAD2E3"
              stroke="#B87795"
              strokeWidth="1.4"
              transform={`rotate(${angle} 48 42)`}
            />
          ))}
          {[22, 82, 142, 202, 262, 322].map((angle) => (
            <ellipse
              key={angle}
              cx="48"
              cy="32"
              rx="8"
              ry="10"
              fill="#F5A6C8"
              stroke="#B06889"
              strokeWidth="1.2"
              transform={`rotate(${angle} 48 42)`}
            />
          ))}
          <circle cx="48" cy="42" r="8" fill="#F7E3A8" stroke="#C79E50" strokeWidth="1.4" />
        </g>
      )}

      {kind === "lily" && (
        <g>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <path
              key={angle}
              d="M48 42C41 32 42 18 48 12C54 18 55 32 48 42Z"
              fill={angle % 120 === 0 ? "#FFFFFF" : "#FFE6F0"}
              stroke="#BD7F9B"
              strokeWidth="1.5"
              transform={`rotate(${angle} 48 42)`}
            />
          ))}
          <circle cx="48" cy="42" r="6" fill="#F5A6C8" />
          <circle cx="48" cy="42" r="3" fill="#E8C77B" />
        </g>
      )}

      {/* Magical Star Sparkle */}
      <path
        d="M76 16L77.8 20.5L82.5 22.2L77.8 24L76 28.5L74.2 24L69.5 22.2L74.2 20.5L76 16Z"
        fill={isDiscovered ? "#E8C77B" : "#F5A6C8"}
      />
    </svg>
  );
}
