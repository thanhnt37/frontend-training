import type { Config } from "tailwindcss";

const config: Config = {
   content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
},
  plugins: [],
};
export default config;
