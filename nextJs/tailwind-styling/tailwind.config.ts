import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ] /* where tailwind will be used in this project*/,
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {},
        secondary: {},
      },
    },
  } /* what are my default styles for this project */,
  plugins: [
    require("flowbite/plugin"),
  ] /* which third party libraries I want to use that are built with tailwindcss */,
};
export default config;
