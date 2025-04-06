/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      colors:{
        Primary:{
          default: "#39DB4A",
          900: "#1c7024",
          800:"#259330",
          700:"#34cf43",
          600: "#39DB4A",
          400: "#4ade80",
          100: "#bbf7d0",
          50: "#e1ffeba7"
        }
      }
    },
  },
  plugins: [],
}

