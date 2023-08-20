/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "setly": {
          100: "rgb(93, 190, 248)",
          200: "rgb(93, 177, 164)",
          300: "rgb(93, 179, 199)"
        }
      }
    },
  },
  plugins: [
  ],
}