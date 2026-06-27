/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        ember: 'oklch(0.7 0.19 38)',
        'ember-soft': 'oklch(0.92 0.05 50)',
        ink: 'oklch(0.18 0.01 60)',
        'ink-soft': 'oklch(0.36 0.012 60)',
        paper: 'oklch(0.995 0.004 90)',
        'paper-warm': 'oklch(0.975 0.012 80)',
        border: 'oklch(0.9 0.008 70)',
      },
      fontFamily: {
        display: ['Archivo Black', 'Inter Tight', 'sans-serif'],
        sans: ['Inter Tight', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
