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
        primary: {
          "": '#72cef5',
          100: '#e3f5fd',
          200: '#d5f0fc',
          600: '#72cef5',
        },
        secondary: {
          "":"#ffc1d8",
          100:"#fff3f7",
          200:"#ffecf3",
          600:"#ffc1d8",
        },
        black: "#000",
        white: "#fff",
        gray: {
          100:"#e2e2e2",
          200:"#aeadab",
          300:"#383735",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
