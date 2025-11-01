"use client";

import { useState } from "react";
import StartScreen from "../app/screens/StartScreen";
import QuizScreen from "../app/screens/QuizScreen";
import ResultScreen from "../app/screens/ResultScreen";

export default function Home() {
  const [screen, setScreen] = useState<"start" | "quiz" | "result">("start");
  const [score, setScore] = useState(0);

  return (
    <>
      {screen === "start" && <StartScreen onStart={() => setScreen("quiz")} />}
      {screen === "quiz" && (
        <QuizScreen
          onFinish={(finalScore) => {
            setScore(finalScore);
            setScreen("result");
          }}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          score={score}
          onRestart={() => {
            setScore(0);
            setScreen("start");
          }}
        />
      )}
    </>
  );
}
