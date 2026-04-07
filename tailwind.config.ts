import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fadeInOut 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },
          '15%, 85%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 