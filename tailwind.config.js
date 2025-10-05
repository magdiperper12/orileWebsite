/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, // ✅ الحل النهائي ضد Bootstrap
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Tbody: "#FFF7F4",
        Tprimary: "#24403f",
        Ttext: "#000000",
        Taccent: "#B1946A",
        Tsecondary: "#FFFFFF",
        TtransparentAccent: "#FFFFFF80",
        TtransparentSecondary: "#00000080",
        TlightBackground: "#24403f",
        TlightAccent: "#FEEFE9",
      },
    },
  },
  plugins: [],
};
