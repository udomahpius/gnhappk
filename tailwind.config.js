/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  future: {
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    additionalBreakpoint: true,
    extendedFontSizeScale: true,
    extendedSpacingScale: true,
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        setly: {
          100: "rgb(93, 190, 248)",
          200: "rgb(93, 177, 164)",
          300: "rgb(93, 179, 199)",
        },
        "SETLY-BLUE": "rgb(93, 190, 248)",
        "SETLY-GREEN": "rgb(93, 177, 164)",
        "SETLY-BLUE-GREEN": "rgb(93, 179, 199)",
      },
      fontWeight: ["hover", "focus"],
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};