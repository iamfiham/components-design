/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        skeletonKeyframe: {
          '0%': {backgroundPosition: '100% 0'},
          '100%': {backgroundPosition: '-100% 0'},
        },
      },
      animation: {
        skeleton: 'skeletonKeyframe 2s infinite linear',
      },
      backgroundImage: {
        skeletonGradiant: 'linear-gradient(120deg,transparent 38%, rgba(245,245, 245,0.35) 50%,transparent 62%)',
      },
    },
  },
  plugins: [],
};
