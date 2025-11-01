import "./globals.css";
import { ReactNode } from "react";
import BackgroundMusic from "./components/BackgroundMusic";

export const metadata = {
  title: "Project Merlin",
  description: "A magical quiz experience",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white to-green-100 text-gray-800 min-h-screen overflow-hidden">
        {/* 🔊 Mystical looping background music */}
        <BackgroundMusic />

        {children}
      </body>
    </html>
  );
}
