import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#fafaf8',
          card: '#f4f1ec',
          border: '#e5e0d8',
          gold: '#c9a84c',
          cream: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
