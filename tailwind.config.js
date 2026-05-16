/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        maroon: "var(--maroon)",
        gold: "var(--gold)",
        "light-gold": "var(--light-gold)",
        cream: "var(--cream)",
        "dark-text": "var(--dark-text)",
        "muted-text": "var(--muted-text)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        poppins: ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}
