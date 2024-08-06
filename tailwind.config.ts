import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        sky: {
          100: '#C0D8DC',
          200: '#D9EBFA'
        },
        zinc: {
          100: '#595F62'
        },
        slate: {
          100: '#F2F2F2'
        }
      },

      letterSpacing: {
        custom: '0.50em', // Espaçamento personalizado
      },

    },
  },
  plugins: [],
};
export default config;
