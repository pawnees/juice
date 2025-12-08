/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
          'slide-in-down': {
            '0%': { visibility: 'visible', transform: 'translate3d(0, -100%, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
          'slide-in-up': {
            '0%': { visibility: 'visible', transform: 'translate3d(0, 100%, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
          'slide-in-left': {
            '0%': { visibility: 'visible', transform: 'translate3d(-100%, 0, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
          'slide-in-right': {
            '0%': { visibility: 'visible', transform: 'translate3d(100%, 0, 0)' },
            '100%': { transform: 'translate3d(0, 0, 0)' },
          },
          'slide-out-down': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { visibility: 'hidden', transform: 'translate3d(0, 100%, 0)' },
          },
          'slide-out-up': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { visibility: 'hidden', transform: 'translate3d(0, -100%, 0)' },
          },
          'slide-out-left': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)' },
          },
          'slide-out-right': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { visibility: 'hidden', transform: 'translate3d(100%, 0, 0)' },
          },
          'slide-down': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '10%': { transform: 'translate3d(0, 10%, 0)' },
          },
          'slide-up': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '10%': { transform: 'translate3d(0, -10%, 0)' },
          },
          'slide-left': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { transform: 'translate3d(-1000%, 0, 0)' },
          },
          'slide-right': {
            '0%': { transform: 'translate3d(0, 0, 0)' },
            '100%': { transform: 'translate3d(100%, 0, 0)' },
          },
          'zoom-in-up': {
            '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)' },
            '80%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          },
          'zoom-in-down': {
            '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)' },
            '80%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          },
          'zoom-in-left': {
            '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)' },
            '80%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          },
          'zoom-in-right': {
            '0%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)' },
            '80%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
          },
          'zoom-out': {
            '0%': { opacity: 1, transform: 'scale3d(1, 1, 1)' },
            '15%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)' },
          },
          'zoom-out-up': {
            '0%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
            '15%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(0, -100%, 0)' },
          },
          'zoom-out-down': {
            '0%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
            '15%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)' },
          },
          'zoom-out-left': {
            '0%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
            '15%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(-100%, 0, 0)' },
          },
          'zoom-out-right': {
            '0%': { opacity: 1, transform: 'translate3d(0, 0, 0)' },
            '15%': { opacity: 0.8, transform: 'scale3d(1.1, 1.1, 1.1)' },
            '100%': { opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3) translate3d(100%, 0, 0)' },
          },
          zigzag: {
            "0%":   { transform: "translateX(0px)" },
            "25%":  { transform: "translateX(50px)" },
            "50%": { transform: "translateX(0px)", opacity: 1 },
            "100%": { transform: "translateX(-100px)", opacity: 0 }
          },
          fadeOut: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
        },
        animation: {
          slideindown: 'slide-in-down 0.7s ease-in-out ',
          slideinup: 'slide-in-up 0.7s ease-in-out ',
          slideinleft: 'slide-in-left 0.7s ease-in-out ',
          slideinright: 'slide-in-right 0.7s ease-in-out ',
          slideoutdown: 'slide-out-down 0.7s ease-in-out ',
          slideoutup: 'slide-out-up 0.7s ease-in-out ',
          slideoutleft: 'slide-out-left 0.7s ease-in-out ',
          slideoutright: 'slide-out-right 0.7s ease-in-out ',
          slidedown: 'slide-down 0.7s ease-in-out ',
          slideup: 'slide-up 0.7s ease-in-out ',
          slideleft: 'slide-left 0.7s ease-in-out ',
          slideright: 'slide-right 0.7s ease-in-out ',
          zoomin: 'zoom-in 0.7s ease-in-out ',
          zoominup: 'zoom-in-up 0.7s ease-in-out ',
          zoomindown: 'zoom-in-down 0.7s ease-in-out ',
          zoominleft: 'zoom-in-left 0.7s ease-in-out ',
          zoominright: 'zoom-in-right 0.7s ease-in-out ',
          zoomout: 'zoom-out 0.7s ease-in-out ',
          zoomoutup: 'zoom-out-up 0.7s ease-in-out ',
          zoomoutdown: 'zoom-out-down 0.7s ease-in-out ',
          zoomoutleft: 'zoom-out-left 0.7s ease-in-out ',
          zoomoutright: 'zoom-out-right 0.7s ease-in-out ',
          zigzag: "zigzag 0.6s ease-in-out",
          fadeOut: "fadeOut 0.6s ease-out forwards",
        },
    },
  },
  plugins: [],
}

