// app/components/BackgroundMusic.tsx
"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay immediately
    const tryPlay = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Autoplay prevented. Waiting for user interaction...");
        const unlock = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", unlock);
          window.removeEventListener("keydown", unlock);
        };
        window.addEventListener("click", unlock);
        window.addEventListener("keydown", unlock);
      }
    };

    tryPlay();
  }, []);

  return <audio ref={audioRef} src="/mystical_loop.mp3" loop preload="auto" />;
}
