/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        128: '28rem',
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      colors: {
        gr1: { DEFAULT: '#2F3C54' },
        gr2: { DEFAULT: '#1A2843' },
        gr3: { DEFAULT: '#25324C' },

        cdark: {
          DEFAULT: '#000F2D',
        },
        cblue1: {
          DEFAULT: '#0451df',
        },
        cblue2: {
          DEFAULT: '#0085FF',
        },
      },
    },
  },
  plugins: [],
};
