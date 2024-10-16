import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-purple": "#131028",
        "royal-blue": "#3B58E1",
        "alice-blue": "#EEF3FF",
      },
      fontFamily: {
        sans: ["poppins-medium", "ui-sans-serif", "system-ui"], // Agrega tu fuente a la pila
      },
    },
  },
  plugins: [],
};
export default config;
