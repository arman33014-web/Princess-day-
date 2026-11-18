"use client";

import React from "react";
import {
  ButterflyIllustration,
  CloudIllustration,
  SparkleStar,
} from "./illustrations/StorybookOrnaments";

const PETALS = [
  { left: "8%", delay: "0s", duration: "15s", size: 12 },
  { left: "26%", delay: "4s", duration: "17s", size: 10 },
  { left: "54%", delay: "2s", duration: "16s", size: 13 },
  { left: "78%", delay: "7s", duration: "14s", size: 11 },
  { left: "91%", delay: "10s", duration: "18s", size: 10 },
];

export function FloatingElements() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gentle Top Clouds */}
      <div className="animate-drift-cloud absolute top-8 -left-6 opacity-70 hidden sm:block">
        <CloudIllustration className="w-36 h-16" />
      </div>
      <div className="animate-drift-cloud-reverse absolute top-20 -right-8 opacity-65 hidden md:block">
        <CloudIllustration className="w-40 h-18" />
      </div>

      {/* Subtle Ambient Twinkling Stars */}
      <div
        className="animate-twinkle absolute top-24 left-[14%]"
        style={{ animationDelay: "0.4s" }}
      >
        <SparkleStar className="w-4 h-4" color="#E8C77B" />
      </div>
      <div
        className="animate-twinkle absolute top-44 right-[12%]"
        style={{ animationDelay: "1.3s" }}
      >
        <SparkleStar className="w-5 h-5" color="#F5A6C8" />
      </div>
      <div
        className="animate-twinkle absolute bottom-40 left-[8%] hidden sm:block"
        style={{ animationDelay: "2.1s" }}
      >
        <SparkleStar className="w-4 h-4" color="#E8C77B" />
      </div>
      <div
        className="animate-twinkle absolute bottom-28 right-[10%] hidden sm:block"
        style={{ animationDelay: "0.9s" }}
      >
        <SparkleStar className="w-4 h-4" color="#F5A6C8" />
      </div>

      {/* Two Delicate Floating Butterflies */}
      <div
        className="animate-flutter absolute top-[34%] left-[4%] opacity-75 hidden lg:block"
        style={{ animationDelay: "0.5s" }}
      >
        <ButterflyIllustration className="w-10 h-9" />
      </div>
      <div
        className="animate-flutter absolute top-[62%] right-[4%] opacity-75 hidden lg:block"
        style={{ animationDelay: "2.4s" }}
      >
        <ButterflyIllustration
          className="w-9 h-8 -scale-x-100"
          wingColor="#F5A6C8"
          accentColor="#FFF7FA"
        />
      </div>

      {/* Light Falling Cherry Blossom Petals (CSS-only, GPU transform) */}
      {PETALS.map((petal, idx) => (
        <span
          key={idx}
          className="animate-petal absolute -top-6 rounded-full"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${Math.round(petal.size * 0.72)}px`,
            backgroundColor: idx % 2 === 0 ? "#FFD2E4" : "#FFE4EF",
            borderRadius: "70% 30% 65% 35% / 60% 40% 60% 40%",
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}
