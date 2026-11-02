import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          850: "rgb(var(--ink-850) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
        },
        bone: "rgb(var(--bone) / <alpha-value>)",
        mute: "rgb(var(--mute) / <alpha-value>)",
        line: {
          DEFAULT: "rgb(var(--line) / <alpha-value>)",
          subtle: "rgb(var(--line) / 0.08)",
          strong: "rgb(var(--line) / 0.16)",
        },
        signal: {
          DEFAULT: "#ff8a3d",
          soft: "#ffb37a",
          glow: "#ffd166",
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      maxWidth: { shell: "72rem" },
      keyframes: {
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(255,138,61,.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(255,138,61,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255,138,61,0)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        pulseDot: "pulseDot 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
