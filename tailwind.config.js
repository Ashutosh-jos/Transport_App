/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: 
    {
      colors:
      {
        purple1:"#705AA9",//main dark color
        purple2:"#705AA920",//light
        purple3:"#FFFFFF20",//meidum
      }
    },
  },
  plugins: [],
}
