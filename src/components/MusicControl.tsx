"use client";

import React, { useEffect, useRef, useState } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { FairytaleAudioPlayer } from "@/lib/musicBox";

export function MusicControl() {
  const playerRef = useRef<FairytaleAudioPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    playerRef.current = new FairytaleAudioPlayer();
    return () => {
      playerRef.current?.dispose();
      playerRef.current = null;
    };
  }, []);

  const handleTogglePlay = async () => {
    const player = playerRef.current;
    if (!player) return;

    if (isPlaying) {
      player.stop();
      setIsPlaying(false);
    } else {
      player.setMuted(isMuted);
      const started = await player.start();
      setIsPlaying(started);
    }
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    playerRef.current?.setMuted(nextMuted);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-2 border border-[#E8C77B]/70 shadow-[0_10px_28px_-8px_rgba(140,82,112,0.28)] backdrop-blur-sm"
      role="region"
      aria-label="Fairytale music controls"
    >
      <button
        type="button"
        onClick={() => void handleTogglePlay()}
        aria-pressed={isPlaying}
        aria-label={
          isPlaying ? "Pause fairytale music" : "Play fairytale music"
        }
        className="flex items-center gap-2 rounded-full bg-[#FFE1EC] hover:bg-[#F5A6C8]/45 active:scale-95 transition-all px-3 py-1.5 text-xs sm:text-sm font-medium text-[#68485A] cursor-pointer"
      >
        <Music className="w-4 h-4 text-[#B8638A]" aria-hidden="true" />
        <span className="hidden xs:inline sm:inline">
          {isPlaying ? "Music On" : "Music"}
        </span>

        {/* Small animated music indicator when playing & unmuted */}
        {isPlaying && !isMuted && (
          <span
            className="flex items-end gap-[2px] h-3.5 ml-0.5"
            aria-hidden="true"
          >
            <span
              className="animate-music-bar w-[2.5px] h-full rounded-full bg-[#C96B98]"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="animate-music-bar w-[2.5px] h-full rounded-full bg-[#E8C77B]"
              style={{ animationDelay: "0.22s" }}
            />
            <span
              className="animate-music-bar w-[2.5px] h-full rounded-full bg-[#C96B98]"
              style={{ animationDelay: "0.45s" }}
            />
          </span>
        )}
      </button>

      {isPlaying && (
        <button
          type="button"
          onClick={handleToggleMute}
          aria-pressed={isMuted}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
          title={isMuted ? "Unmute music" : "Mute music"}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF7FA] hover:bg-[#FFE1EC] text-[#68485A] transition-colors cursor-pointer"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-[#825C71]" aria-hidden="true" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#B8638A]" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  );
}
