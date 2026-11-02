import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#09090a",
          900: "#0e0e10",
          850: "#131316",
          800: "#18181c",
          700: "#232329",
        },
        bone: "#ecebe6",
        mute: "#8d8c93",
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
