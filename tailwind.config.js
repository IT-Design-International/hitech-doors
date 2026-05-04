/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary:   '#F5F7FA',
        bgSecondary: '#EEF1F5',
        bgSurface:   '#FFFFFF',
        bgDeep:      '#1C4060',
        accent:      { DEFAULT: '#DE2922', hover: '#B82220', soft: '#FCE4E3' },
        teal:        { DEFAULT: '#2AACAC', light: '#E6F7F7' },
        ink:         { DEFAULT: '#1A2535', secondary: '#3D4F63', muted: '#6B7F95' },
        line:        { DEFAULT: '#D1DCE8', subtle: '#E8EEF4' },
      },
      fontFamily: {
        display: ['"Oswald"', 'Impact', 'sans-serif'],
        body:    ['"Open Sans"', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 4px 24px rgba(28, 64, 96, 0.08)',
        cardHover:  '0 8px 32px rgba(28, 64, 96, 0.14)',
        deep:       '0 12px 48px rgba(28, 64, 96, 0.20)',
      },
    },
  },
  plugins: [],
}
