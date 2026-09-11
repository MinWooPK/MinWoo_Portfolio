/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f6f8",
          100: "#e9ebf0",
          200: "#d1d5e0",
          300: "#a8b0c4",
          400: "#7c859f",
          500: "#5a6480",
          600: "#434c66",
          700: "#353c52",
          800: "#1e2333",
          900: "#131725",
          950: "#0a0d18",
        },
        accent: {
          50: "#eefdf5",
          100: "#d6fbeb",
          200: "#aff5d6",
          300: "#7aebbb",
          400: "#43d99a",
          500: "#1ec07c",
          600: "#0fa063",
          700: "#0d7d50",
          800: "#0d6340",
          900: "#0b5034",
        },
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#b8d8ff",
          300: "#8ac0ff",
          400: "#5a9eff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4fd0",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Clash Display", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
