import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
    },
    screens: {
      sm: "440px",

      md: "768px",

      mobile: {
        raw: "(max-height: 500px)",
      },

      em: "1024px",

      lg: "1360px",

      xl: "1512px",
    },
    container: {
      center: "true",
      padding: "2rem",
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.625rem",
      md: "0.75rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.625rem",
      "5xl": "1.75rem",
      "6xl": "1.875rem",
      "7xl": "2rem",
      "8xl": "2.125rem",
      "9xl": "2.25rem",
      "10xl": "2.375rem",
      "11xl": "2.5rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        vn: ["var(--font-kanit)"],
      },
      spacing: Array(200)
        .fill(0)
        .reduce((val, cur, index) => {
          return {
            ...val,
            [`${index + 1}`]: `${(index + 1) * 0.25}rem`,
            [`${index + 1.5}`]: `${(index + 1) * 0.25 + 0.125}rem`,
          };
        }, {}),
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        textSecondary: "var(--textSecondary)",
        error: {
          DEFAULT: "hsl(var(--error))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        red: {
          500: "#FF034F",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        sm: "0.5rem",
        md: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fade: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        fade: "fade 1s ease-in-out forwards 5s",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  plugins: [
    plugin(function ({
      addVariant,
      addBase,
      addUtilities,
      addComponents,
      theme,
      config,
    }) {
      addComponents({
        ".scrollbar-none-height": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      });
    }),
    animate,
  ],
};
