// app/components/BackgroundMusic.tsx
"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Try to play automatically (may need user gesture first)
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay prevented. Waiting for user interaction...");
        });
      }
    }
  }, []);

  return <audio ref={audioRef} src="/mystical_loop.mp3" loop preload="auto" />;
}
