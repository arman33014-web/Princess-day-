"use client";

import React, { useEffect, useState } from "react";
import { Crown, Flower2, Gift, Heart, Mail } from "lucide-react";

interface StoryNavigationProps {
  princessName: string;
  onReplayWelcome: () => void;
}

const CHAPTERS = [
  { id: "meet-princess", label: "Princess", icon: Crown },
  { id: "royal-letter", label: "Letter", icon: Mail },
  { id: "magical-garden", label: "Garden", icon: Flower2 },
  { id: "royal-surprise", label: "Surprise", icon: Gift },
] as const;

export function StoryNavigation({
  princessName,
  onReplayWelcome,
}: StoryNavigationProps) {
  const [activeId, setActiveId] = useState<string>("meet-princess");

  useEffect(() => {
    const sections = CHAPTERS.map((ch) => document.getElementById(ch.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -45% 0px",
        threshold: [0.15, 0.4, 0.7],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full px-3 py-2.5 sm:px-6 bg-[#FFF7FA]/90 backdrop-blur-md border-b border-[#E8C77B]/40">
      <nav
        aria-label="Fairytale chapters"
        className="mx-auto flex max-w-5xl items-center justify-between gap-2"
      >
        {/* Princess Crest Button (Revisits Welcome Gate) */}
        <button
          type="button"
          onClick={onReplayWelcome}
          className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 border border-[#E8C77B]/60 shadow-xs hover:bg-[#FFE1EC]/60 transition-colors cursor-pointer shrink-0"
          aria-label={`Return to welcome screen for Princess ${princessName}`}
        >
          <Heart
            className="w-3.5 h-3.5 text-[#D96D9C] fill-[#F5A6C8]"
            aria-hidden="true"
          />
          <span className="font-serif text-sm sm:text-base font-semibold text-[#68485A] tracking-tight">
            Princess {princessName}
          </span>
        </button>

        {/* Chapter Links */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {CHAPTERS.map((chapter) => {
            const Icon = chapter.icon;
            const isActive = activeId === chapter.id;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 sm:px-3.5 text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[#F5A6C8] text-[#4E2C3E] shadow-xs"
                      : "text-[#7E576D] hover:bg-[#FFE1EC]/70 hover:text-[#68485A]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{chapter.label}</span>
                  <span className="sr-only sm:hidden">{chapter.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
