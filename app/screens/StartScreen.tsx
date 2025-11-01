"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import flameAnim from "@/public/green_flame.json";

export default function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden bg-white">
      {/* Floating title */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute text-7xl font-bold text-green-400"
        style={{ top: "10%", fontFamily: "Comic Sans MS, cursive" }}
      >
        Project Merlin
      </motion.div>

      {/* Logo */}
      <img
        src="/logo.png"
        alt="Merlin Logo"
        className="absolute top-4 left-6 w-30 h-30"
      />

      {/* Electric green flame (Lottie animation) */}
      <div className="absolute top-2 right-4 w-28 h-28">
        <Lottie animationData={flameAnim} loop autoplay />
      </div>

      {/* Start button */}
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-green-500 text-white rounded-2xl mt-24 text-lg shadow-lg hover:bg-green-600 transition-all"
      >
        Begin the Magic
      </motion.button>
    </div>
  );
}
