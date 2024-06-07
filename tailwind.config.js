/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        skeletonKeyframe: {
          "0%": { backgroundPosition: "100% 0" },
          "100%": { backgroundPosition: "-100% 0" },
        },
        borderAnimation: {
          "0%": { borderOpacity: 1 },
          "100%": { borderOpacity: 0 },
        },
      },
      animation: {
        skeleton: "skeletonKeyframe 2s infinite linear",
        border: "borderAnimation 2s infinite linear",
      },

      backgroundImage: {
        skeletonGradiant:
          "linear-gradient(120deg,transparent 38%, rgba(245,245, 245,0.35) 50%,transparent 62%)",
        whiteoverlay:
          "radial-gradient(circle at center, transparent 0%, rgba(255,255,255) 75%)",
      },
      boxShadow: {
        n1: "0px 2px 4px 0px rgb(0,0,0,0.025),0px 4px 8px -1px rgb(0,0,0,0.025),0px 8px 16px -2px rgb(0,0,0,0.025)",
      },
    },
  },
  plugins: [],
};
