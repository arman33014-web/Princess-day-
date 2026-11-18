# Optional Local Background Music

Princess Dreamland keeps background music **disabled by default** and never autoplays audio without user interaction.

To use your own licensed background track:

1. Place an MP3 file named `fairytale-theme.mp3` in this folder (`public/audio/fairytale-theme.mp3`).
2. When a visitor enables music via the floating Music Control button, Princess Dreamland automatically detects and plays `/audio/fairytale-theme.mp3` on a gentle loop.
3. If no local audio file is present, enabling music plays a lightweight built-in Web Audio API fairytale music-box lullaby with zero external dependencies.
