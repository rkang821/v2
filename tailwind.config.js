/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    colors: {
      navy: "#0a192f",
      lightNavy: "#112240",
      lightestNavy: "#233554",
      darkSlate: "#495670",
      slate: "#8892b0",
      lightSlate: "#a8b2d1",
      lightestSlate: "#ccd6f6",
      white: "#e6f1ff",
      green: "#64ffda",
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: [
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Menlo",
        "monospace",
      ],
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      heading: "32px",
    },
  },
  plugins: [],
  darkMode: "class",
  content: [
    /* … your globs … */
  ],
  theme: {
    /* … */
  },
  plugins: [],
};
