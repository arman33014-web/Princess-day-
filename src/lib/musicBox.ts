"use client";

/**
 * Lightweight, zero-dependency Web Audio fairytale music-box lullaby
 * plus optional local licensed audio file (/audio/fairytale-theme.mp3).
 * Never autoplays without explicit user interaction.
 */

const LOCAL_AUDIO_PATH = "/audio/fairytale-theme.mp3";

// Gentle original music-box waltz in F major (Hz, duration in beats)
const LULLABY_NOTES: ReadonlyArray<readonly [number, number]> = [
  [523.25, 1.0], // C5
  [659.25, 1.0], // E5
  [783.99, 1.0], // G5
  [880.0, 1.5], // A5
  [783.99, 0.5], // G5
  [659.25, 1.0], // E5
  [698.46, 1.0], // F5
  [587.33, 1.0], // D5
  [523.25, 2.0], // C5
  [440.0, 1.0], // A4
  [523.25, 1.0], // C5
  [698.46, 1.0], // F5
  [659.25, 1.5], // E5
  [587.33, 0.5], // D5
  [523.25, 2.0], // C5
  [0, 1.0], // gentle pause
];

export class FairytaleAudioPlayer {
  private audioEl: HTMLAudioElement | null = null;
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private noteIndex = 0;
  private playing = false;
  private muted = false;
  private checkedLocalFile = false;
  private hasLocalFile = false;

  private async checkLocalAudioExists(): Promise<boolean> {
    if (this.checkedLocalFile) return this.hasLocalFile;
    this.checkedLocalFile = true;
    try {
      const response = await fetch(LOCAL_AUDIO_PATH, { method: "HEAD" });
      const contentType = response.headers.get("content-type") ?? "";
      this.hasLocalFile = response.ok && contentType.startsWith("audio/");
    } catch {
      this.hasLocalFile = false;
    }
    return this.hasLocalFile;
  }

  public async start(): Promise<boolean> {
    if (this.playing) return true;

    const useFile = await this.checkLocalAudioExists();
    if (useFile) {
      try {
        if (!this.audioEl) {
          this.audioEl = new Audio(LOCAL_AUDIO_PATH);
          this.audioEl.loop = true;
          this.audioEl.volume = 0.35;
        }
        this.audioEl.muted = this.muted;
        await this.audioEl.play();
        this.playing = true;
        return true;
      } catch {
        // Fall through to gentle music-box synth
      }
    }

    return this.startMusicBox();
  }

  private startMusicBox(): boolean {
    if (typeof window === "undefined") return false;
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtx) return false;

    try {
      if (!this.audioCtx) {
        this.audioCtx = new AudioCtx();
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.value = this.muted ? 0 : 0.14;
        this.masterGain.connect(this.audioCtx.destination);
      }

      if (this.audioCtx.state === "suspended") {
        void this.audioCtx.resume();
      }

      this.playing = true;
      this.scheduleNextNote();
      return true;
    } catch {
      return false;
    }
  }

  private scheduleNextNote(): void {
    if (!this.playing || !this.audioCtx || !this.masterGain) return;

    const [freq, beats] = LULLABY_NOTES[this.noteIndex % LULLABY_NOTES.length];
    this.noteIndex += 1;

    if (freq > 0) {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const chimeOver = this.audioCtx.createOscillator();
      const noteGain = this.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      // Soft sparkle overtone an octave above
      chimeOver.type = "triangle";
      chimeOver.frequency.setValueAtTime(freq * 2, now);

      const overGain = this.audioCtx.createGain();
      overGain.gain.setValueAtTime(0.18, now);

      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.9, now + 0.03);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);

      osc.connect(noteGain);
      chimeOver.connect(overGain);
      overGain.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      chimeOver.start(now);
      osc.stop(now + 1.4);
      chimeOver.stop(now + 1.4);
    }

    const stepMs = Math.round(beats * 580);
    this.timerId = window.setTimeout(() => {
      this.scheduleNextNote();
    }, stepMs);
  }

  public stop(): void {
    this.playing = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.audioEl) {
      this.audioEl.pause();
    }
  }

  public setMuted(muted: boolean): void {
    this.muted = muted;
    if (this.audioEl) {
      this.audioEl.muted = muted;
    }
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(
        muted ? 0 : 0.14,
        this.audioCtx.currentTime,
        0.04
      );
    }
  }

  public dispose(): void {
    this.stop();
    if (this.audioCtx) {
      void this.audioCtx.close();
      this.audioCtx = null;
      this.masterGain = null;
    }
    this.audioEl = null;
  }
}
