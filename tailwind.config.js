/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#080810',
          800: '#0d0d1a',
          700: '#12121f',
          600: '#1a1a2e',
          500: '#222238',
        },
        border: 'rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #8A2BE2 0%, #FF2D95 100%)',
        'gradient-brand-r': 'linear-gradient(135deg, #FF2D95 0%, #8A2BE2 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(138,43,226,0.15) 0%, rgba(255,45,149,0.15) 100%)',
      },
      boxShadow: {
        brand: '0 0 40px rgba(138,43,226,0.25)',
        'brand-sm': '0 0 20px rgba(138,43,226,0.15)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
