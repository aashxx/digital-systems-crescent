/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nexa: {
          900: '#001C30'
        }
      },

      fontFamily: {
        comfortaa: "Comfortaa, sans-serif",
        poppins: "Poppins, sans-serif"
      },

      boxShadow: {
        '3xl': '7px 7px #001C30'
      },

      keyframes: {
        upDown: {
          '0%, 100%': { 'transform': 'translateY(-10px)'},
          '50%': {'transform': 'translateY(10px)' }
        }
      },

      animation: {
        'upDown': 'upDown 2s linear infinite'
      }
    },
  },
  plugins: [],
}

