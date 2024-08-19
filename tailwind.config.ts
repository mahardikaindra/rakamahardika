import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // custom warna pallet dengan kode warna berikut:
  // Contoh Palet:
  // #FF0000 (Merah Bendera Indonesia)
  // #FFFFFF (Putih)
  // #F5F5F5 (Abu-abu Terang)
  // #212121 (Hitam)
  // #FFCCCC (Merah Muda Terang)
  // #757575 (Abu-abu Tua)
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "red-flag": "#FF0000",
      white: "#FFFFFF",
      "gray-light": "#F5F5F5",
      black: "#212121",
      "red-light": "#FFCCCC",
      "gray-dark": "#757575",
    },
  },
  plugins: [],
};
export default config;
