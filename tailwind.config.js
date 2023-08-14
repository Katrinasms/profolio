/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        zoom:{
          // "0%": { transform: "scale(1.5)" },
          // "50%": { transform: "scale(1.5)" },
          "0%, 100%":{transform: "scale(1.5)"}
        }
      },
      colors:{
        primary1: '#F8F7F2',
        secondary2: '#000000',
        skillbutton: '#EFE5E3',
        skilltext:'#785A00'
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
        zoom:"zoom 1500ms ease-in-out"
      }
    },
  },
  plugins: [],
}
