/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#1f2937', // gris oscuro
          hover: '#374151', // gris más claro
          selected: '#2563eb' // azul
        },
        brand: {
          DEFAULT: '#00afff' //2D323E 
        }
      }
    },
  },
  plugins: [],
}

