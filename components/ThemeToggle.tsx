"use client";

import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}

// One of the three nav controls in the artifact: an outlined 40px circle
// (.circ) between the solid search circle and the Menu pill.
export function ThemeToggle({ isDark, onToggle, className = "" }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`circ grid place-items-center ${className}`}
    >
      {isDark ? <Sun size={16} strokeWidth={1.8} /> : <Moon size={16} strokeWidth={1.8} />}
    </button>
  );
}
