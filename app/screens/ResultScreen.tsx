"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import flameAnim from "@/public/green_flame.json";

export default function ResultScreen({
  score,
  onRestart,
}: {
  score: number;
  onRestart: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative bg-white overflow-hidden">
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Merlin Logo"
        className="absolute top-4 left-6 w-30 h-30"
      />

      {/* Electric green flame (Lottie animation) */}
      <div className="absolute top-2 right-4 w-24 h-24">
        <Lottie animationData={flameAnim} loop autoplay />
      </div>

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring" }}
        className="text-4xl font-bold text-green-600 mb-6"
      >
        {score > 2
          ? "🧙‍♂️ You are a True $MRLN Sorcerer!"
          : "🔮 Keep Practicing, Apprentice!"}
      </motion.h1>

      <p className="text-lg mb-8 text-green-700">Your Score: {score}</p>

      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-green-500 text-white rounded-2xl shadow-lg hover:bg-green-600 transition-all"
      >
        Restart Quest
      </motion.button>
    </div>
  );
}
