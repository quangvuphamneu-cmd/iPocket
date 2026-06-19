import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tcbs-red': '#ea1b23',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        sheepPopIn: {
          '0%':   { transform: 'scale(0) rotate(-10deg)', opacity: '0' },
          '60%':  { transform: 'scale(1.15) rotate(4deg)', opacity: '1' },
          '80%':  { transform: 'scale(0.92) rotate(-2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        sheepSway: {
          '0%,100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(1deg)' },
        },
        bubblePop: {
          '0%':   { transform: 'scale(0.6)', opacity: '0' },
          '70%':  { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        comicBounce: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%':     { transform: 'translateY(-15px) scale(1.02)' },
        },
        ticker: {
          '0%':   { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        cfFall: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg) scale(1)', opacity: '1' },
          '80%':  { opacity: '1' },
          '100%': { transform: 'translateY(105vh) rotate(720deg) scale(0.6)', opacity: '0' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to:   { transform: 'translateX(0)', opacity: '1' },
        },
        slideOut: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to:   { transform: 'translateX(-100%)', opacity: '0' },
        },
        slideInBack: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to:   { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutBack: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to:   { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'sheep-pop-in':   'sheepPopIn 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'sheep-sway':     'sheepSway 3s ease-in-out infinite',
        'bubble-pop':     'bubblePop 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards',
        'comic-bounce':   'comicBounce 4s ease-in-out infinite',
        'ticker':         'ticker 40s linear infinite',
        'cf-fall':        'cfFall linear forwards',
        'slide-in':       'slideIn 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-out':      'slideOut 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-in-back':  'slideInBack 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
        'slide-out-back': 'slideOutBack 0.35s cubic-bezier(0.4,0,0.2,1) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
