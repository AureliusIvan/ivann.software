import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        darkPink: '#A4183F', 
        softRed: '#F35578', 
        softOrange: '#FDD3C4', 
        grayishRed: '#FEE3E1', 
      },
      fontFamily: {
        'argentum-light': ['argetum-sans-light', 'sans'], 
        'lanche': ['lanche', 'sans'], 
        'argentum-regular': ['argentum-sans-regular', 'sans'], 
      },
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 1fr))', 
        '3': 'repeat(3, minmax(0, 1fr))',
      },
    },
  },
  variants: {},
  plugins: [],
};

export default config;
