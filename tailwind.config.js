/** @type {import('tailwindcss').Config} */

import tailwindcssAnimationDelay from "tailwindcss-animation-delay";

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
          "0%": { width: "60px", borderColor: "rgba(0,0,0,0)" },
          "5%": { width: "77px", borderColor: "#d4d4d4" },
          "100%": { width: "400px", borderColor: "rgba(0,0,0,0)" },
        },
      },

      animation: {
        skeleton: "skeletonKeyframe 2s infinite linear",
        border: "borderAnimation 3.5s infinite linear",
      },

      animationDelay: {
        2100: "2100ms",
        2800: "2800ms",
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
  plugins: [tailwindcssAnimationDelay],
};
