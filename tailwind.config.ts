import type { Config } from "tailwindcss";

/* ============================================================
   INDUSTRIAL COATING INSURANCE — "Steel Shield" palette
   clay = iron-oxide rust · sage = teal · gold = industrial orange
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
        cream: "#FBF8F3",
        sand: "#F3EEE6",
        white: "#FFFFFF",
        // Was a slate-navy ramp; now iron-oxide rust (Josh: no blue/purple/pink).
        // #7A3414 is 8.5:1 on cream. clay-gradient runs dark->DEFAULT so the
        // FinalCTA gold-light heading keeps 4.4:1 (2.6:1 if it ended on clay-light).
        clay: {
          DEFAULT: "#7A3414",
          dark: "#57240E",
          light: "#A0501F",
          50: "#FBEFE8",
          100: "#F4D6C4",
          200: "#E8AE8A",
          300: "#D4834F",
          400: "#B9612B",
          500: "#A0501F",
          600: "#7A3414",
          700: "#57240E",
          800: "#3A180A",
          900: "#1F0D05",
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
        espresso: "#1E1712",
        cocoa: "#4A4038",
        mocha: "#6E6358",
        adobe: "#E7DFD3",
        adobeDark: "#D2C4B2",
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
          "linear-gradient(180deg, #FBF8F3 0%, #F3EEE6 40%, #EFE6DA 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(160,80,31,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(224,120,32,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #57240E 0%, #7A3414 100%)",
        "sage-gradient": "linear-gradient(135deg, #2E7B6B 0%, #4A9E8A 100%)",
        "gold-gradient": "linear-gradient(135deg, #E07820 0%, #F09A50 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(122, 52, 20, 0.22), 0 4px 12px -6px rgba(30, 23, 18, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(122, 52, 20, 0.28), 0 10px 30px -10px rgba(30, 23, 18, 0.10)",
        card: "0 2px 8px -2px rgba(30, 23, 18, 0.06), 0 1px 3px -1px rgba(30, 23, 18, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(122, 52, 20, 0.22), 0 8px 20px -8px rgba(30, 23, 18, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(122, 52, 20, 0.10)",
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
