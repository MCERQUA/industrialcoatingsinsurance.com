import type { Config } from "tailwindcss";

/* ============================================================
   INDUSTRIAL COATING INSURANCE — "Steel Shield" palette
   clay = slate navy · sage = teal · gold = industrial orange
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F8FA",
        sand: "#EBF0F4",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1E3A5E",
          dark: "#132640",
          light: "#2E5280",
          50: "#EBF0F7",
          100: "#CCDAEC",
          200: "#99B4D9",
          300: "#668FC6",
          400: "#3869B3",
          500: "#2E5280",
          600: "#1E3A5E",
          700: "#132640",
          800: "#0A1628",
          900: "#040A14",
        },
        sage: {
          DEFAULT: "#2E7B6B",
          dark: "#1E5A4E",
          light: "#4A9E8A",
          50: "#EBF5F3",
          100: "#CDE8E2",
          200: "#9BD2C6",
          300: "#69BBA9",
          400: "#3DA48D",
          500: "#2E7B6B",
          600: "#1E5A4E",
          700: "#154038",
        },
        gold: {
          DEFAULT: "#E07820",
          dark: "#B05C10",
          light: "#F09A50",
          50: "#FDF2E8",
          100: "#FAE0C2",
          200: "#F5C285",
          300: "#EFA04A",
          400: "#E88B30",
          500: "#E07820",
          600: "#B05C10",
          700: "#804208",
        },
        espresso: "#0E1824",
        cocoa: "#3A4850",
        mocha: "#687078",
        adobe: "#D4DCE4",
        adobeDark: "#B8C4CC",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F6F8FA 0%, #EBF0F4 40%, #E2EAF2 70%, #F6F8FA 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(46,82,128,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(224,120,32,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1E3A5E 0%, #2E5280 100%)",
        "sage-gradient": "linear-gradient(135deg, #2E7B6B 0%, #4A9E8A 100%)",
        "gold-gradient": "linear-gradient(135deg, #E07820 0%, #F09A50 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(30, 58, 94, 0.22), 0 4px 12px -6px rgba(14, 24, 36, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(30, 58, 94, 0.28), 0 10px 30px -10px rgba(14, 24, 36, 0.10)",
        card: "0 2px 8px -2px rgba(14, 24, 36, 0.06), 0 1px 3px -1px rgba(14, 24, 36, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(30, 58, 94, 0.22), 0 8px 20px -8px rgba(14, 24, 36, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(30, 58, 94, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
