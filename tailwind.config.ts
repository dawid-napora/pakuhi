import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00DC82",
          50: "#BDFFE4",
          100: "#A9FFDC",
          200: "#80FFCB",
          300: "#57FFBA",
          400: "#2FFFAA",
          500: "#06FF99",
          600: "#00DC82",
          700: "#00A461",
          800: "#006C40",
          900: "#00341F",
          950: "#00180E",
        },
        "graph-light": {
          "level-1": "#9be9a8",
          "level-2": "#40c463",
          "level-3": "#30a14e",
          "level-4": "#216e39",
        },
        "graph-dark": {
          "level-1": "#9be9a8",
          "level-2": "#40c463",
          "level-3": "#30a14e",
          "level-4": "#216e39",
        },
      },
    },
  },
};
