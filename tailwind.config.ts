import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12131a',
        'surface-2': '#191a23',
        border: '#25262f',
        muted: '#9ca3af',
        text: '#f4f4f5',
        accent: {
          DEFAULT: '#39ff14',
          dim: '#22cc0e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(57, 255, 20, 0.18)',
        'glow-lg': '0 0 60px rgba(57, 255, 20, 0.25)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at center, rgba(57,255,20,0.06), transparent 60%)',
      },
    },
  },
  plugins: [],
};

export default config;
