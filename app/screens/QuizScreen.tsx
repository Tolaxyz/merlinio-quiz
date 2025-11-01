"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { questions } from "../data/questions";
import Lottie from "lottie-react";
import flameAnim from "@/public/green_flame.json";

export default function QuizScreen({
  onFinish,
}: {
  onFinish: (score: number) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [showScroll, setShowScroll] = useState(false);
  const [isWaving, setIsWaving] = useState(true); // Merlin waves before question appears

  useEffect(() => {
    setShowScroll(false);
    setIsWaving(true);

    const timer = setTimeout(() => {
      setIsWaving(false);
      setShowScroll(true);
    }, 1500); // wand wave duration

    return () => clearTimeout(timer);
  }, [current]);

  const handleAnswer = (option: string) => {
    const isCorrect = option === questions[current].answer;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      setFeedback(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        onFinish(score + (isCorrect ? 1 : 0));
      }
    }, 2000);
  };

  const q = questions[current];

  return (
    <div className="flex flex-col items-center justify-center h-screen relative text-center px-4 overflow-hidden bg-white">
      {/* Logo and flame */}
      <img
        src="/logo.png"
        alt="Merlin Logo"
        className="absolute top-4 left-6 w-30 h-30"
      />

      {/* Electric green flame (Lottie animation) */}
      <div className="absolute top-2 right-4 w-24 h-24">
        <Lottie animationData={flameAnim} loop autoplay />
      </div>

      {/* Merlin character */}
      <motion.img
        key={isWaving ? "wave" : "idle"}
        src={isWaving ? "/merlin_wave.png" : "/merlin_idle.png"}
        alt="Merlin"
        className="w-56 mb-8 select-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Scroll with question */}
      {showScroll && (
        <motion.div
          key={q.question}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 rounded-2xl p-6 shadow-xl w-full max-w-md border-4 border-green-200 origin-top"
        >
          <h2 className="text-2xl mb-4 font-semibold text-green-700">
            {q.question}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {q.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-green-100 hover:bg-green-300 transition-all py-2 rounded-xl"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Magical feedback */}
      {feedback === "correct" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1.2, 1] }}
          className="absolute bottom-20 text-green-600 font-bold text-3xl"
        >
          ✨ Correct! ✨
        </motion.div>
      )}
      {feedback === "wrong" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, rotate: [0, 5, -5, 0] }}
          className="absolute bottom-20 text-red-500 font-bold text-3xl"
        >
          💨 Wrong Spell! 💨
        </motion.div>
      )}
    </div>
  );
}
