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
        top: " 0px -2px 0px rgba(0, 0, 0, 0.35),0px -1px 1px rgba(3, 7, 18, 0.13),0px -2px 4px rgba(3, 7, 18, 0.10),0px -5px 9px rgba(3, 7, 18, 0.08),0px -10px 15px rgba(3, 7, 18, 0.05),0px -15px 24px rgba(3, 7, 18, 0.03)",
        top2: " 0px -2px 0px rgba(0, 0, 0, 0.25),0px -1px 2px rgba(3, 7, 18, 0.10), 0px -5px 10px rgba(3, 7, 18, 0.08), 0px -11px 22px rgba(3, 7, 18, 0.06), 0px -19px 38px rgba(3, 7, 18, 0.04), 0px -30px 60px rgba(3, 7, 18, 0.02)",
        newinner: "inset 0px 0px 12px 3px hsl(240,100%,70%)",
      },
    },
  },
  plugins: [tailwindcssAnimationDelay],
};
