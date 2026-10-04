import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          surface: "#0B1120",
          card: "rgba(11, 17, 32, 0.75)",
          border: "rgba(0, 229, 255, 0.15)",
          primary: "#00E5FF",
          secondary: "#2563EB",
          accent: "#7C3AED",
          green: "#10B981",
          orange: "#F59E0B",
          red: "#EF4444",
          white: "#FFFFFF",
          gray: "#94A3B8",
          dark: "#03050C",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "cyber-grid": "linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.15), transparent 70%)",
        "accent-glow": "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        "cyber-sm": "0 0 10px rgba(0, 229, 255, 0.2)",
        "cyber-md": "0 0 20px rgba(0, 229, 255, 0.3)",
        "cyber-lg": "0 0 35px rgba(0, 229, 255, 0.4)",
        "accent-glow": "0 0 25px rgba(124, 58, 237, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "matrix-fall": "matrixFall 10s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(0, 229, 255, 0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(0, 229, 255, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
