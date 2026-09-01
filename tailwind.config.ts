import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#236FD9",
        secondary: "#0A0F7A",
        charcoal: "#2B2B2B",
        background: {
          DEFAULT: "#FFFFFF",
          offWhite: "#FAFAFA",
          lightGrey: "#F2F3F5"
        },
        // Backward-compatible semantic aliases for component usage.
        navy: {
          DEFAULT: "#0A0F7A",
          light: "#18238F"
        },
        surface: {
          DEFAULT: "#FFFFFF",
          off: "#FAFAFA",
          muted: "#F2F3F5"
        },
        ink: "#171717",
        line: "#D9DDE3"
      },
      fontFamily: {
        english: ["Inter", "Arial", "sans-serif"],
        chinese: ["Noto Sans TC", "Arial", "sans-serif"],
        sans: ["Inter", "Noto Sans TC", "Arial", "sans-serif"],
        display: ["Inter", "Noto Sans TC", "Arial", "sans-serif"]
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2.25rem",
        "3xl": "3rem",
        "4xl": "4.5rem",
        "5xl": "6rem"
      },
      fontSize: {
        body: ["1rem", { lineHeight: "1.75" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        display: ["clamp(2.5rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }]
      },
      transitionDuration: {
        fast: "200ms",
        normal: "400ms",
        slow: "600ms"
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.125rem"
      },
      maxWidth: {
        content: "80rem"
      }
    }
  },
  plugins: []
};

export default config;
