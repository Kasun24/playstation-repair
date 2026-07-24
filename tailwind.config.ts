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
          DEFAULT: '#3b82f6',
          dim: '#2563eb',
        },
        highlight: {
          DEFAULT: '#facc15',
          dim: '#eab308',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(59, 130, 246, 0.22)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at center, rgba(59,130,246,0.08), transparent 60%)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
