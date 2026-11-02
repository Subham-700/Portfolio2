"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={clsx(
          "grid h-9 w-9 place-items-center rounded-full border border-line-subtle bg-ink-900/60 text-mute",
          className,
        )}
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "group relative flex items-center gap-2 rounded-full border border-line-subtle bg-ink-900/70 text-bone/85 transition-all duration-200 hover:border-signal/50 hover:text-signal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal",
        showLabel ? "px-3.5 py-2 text-xs font-medium" : "h-9 w-9 justify-center",
        className,
      )}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -60, scale: 0.6, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 60, scale: 0.6, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-signal transition-transform duration-200 group-hover:rotate-45" />
        ) : (
          <Moon className="h-4 w-4 text-signal transition-transform duration-200 group-hover:-rotate-12" />
        )}
      </motion.div>
      {showLabel && (
        <span className="font-mono text-xs text-bone">
          {isDark ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}

