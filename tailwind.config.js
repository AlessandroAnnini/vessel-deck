const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: {
      center: true,
    },
    backgroundImage: {
      none: 'none',
      'gradient-white':
        'linear-gradient(112.84deg, #FFFFFF 0.33%, #EDF5F2 100%)',
      'gradient-indigo': 'linear-gradient(98.24deg, #5D75F3 0%, #A279F9 100%)',
      'gradient-fuchsia':
        'linear-gradient(112.84deg, #46BAEB 0.33%, #AF2CFF 38.23%, #F790AF 65.22%, #C1ABFF 100%)',
      'gradient-blue2':
        'linear-gradient(90.41deg, #E0E7FF 0.25%, rgba(224, 231, 255, 0) 99.64%)',
      'gradient-orange': 'linear-gradient(98.24deg, #FFB36D 0%, #EC5353 100%)',
      'gradient-purple2':
        'linear-gradient(98.24deg, #F39682 0.01%, #7446F7 100%)',
      'gradient-black2': 'linear-gradient(133.11deg, #18181B 0%, #2E2E33 100%)',
      'gradient-orange2': 'linear-gradient(98.24deg, #EC5353 0%, #FFB36D 100%)',
      'gradient-blue': 'linear-gradient(98.24deg, #56C1E3 0%, #5B6AF0 100%)',
      'gradient-purple': 'linear-gradient(98.24deg, #6C2DD1 0%, #FF7DBC 100%)',
      'gradient-violet2':
        'linear-gradient(98.24deg, #FF9483 0%, #FFCBA4 0.01%, #8479F9 100%)',
      'gradient-cyan':
        'linear-gradient(90deg, rgba(108,213,246,1) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)',
      'gradient-cyan2':
        'linear-gradient(98.24deg, #6CD5F7 0%, #FEE2CE 35.94%, #B0A9DF 69.27%, #5B6AF0 100%)',
      'gradient-black':
        'linear-gradient(98.24deg, #212121 0.01%, #1D1D1D 100%)',
      'gradient-red': 'linear-gradient(98.24deg, #FF9483 0%, #F17980 100%)',
      'gradient-green': 'linear-gradient(98.24deg, #CEE9C1 0%, #83C8DE 100%)',
      'gradient-violet':
        'linear-gradient(98.24deg, #E0AEF8 1.56%, #3168F5 100%)',
      'gradient-pink':
        'linear-gradient(98.24deg, #FAF5F4 0%, #F4E3E4 55.95%, #F0D5D7 100%)',
      'gradient-pink2':
        'linear-gradient(112.84deg, #FFFFFF 0.33%, #EEDFEF 100%)',
      'gradient-gray':
        'linear-gradient(125.68deg, #F4F4F5 0.59%, #FBFBFB 100%)',
      'gradient-gray2':
        'linear-gradient(98.24deg, #FFFFFF 0%, #F9F9FF 47.4%, #EBECF7 100%)',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr':
        'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br':
        'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl':
        'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl':
        'linear-gradient(to top left, var(--tw-gradient-stops))',
    },
  },
  plugins: [require('tailwindcss-animate')],
};
