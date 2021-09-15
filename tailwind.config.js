module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        10.5: "2.625rem",
        13: "3.25rem",
        18: "4.5rem",
        34: "8.5rem",
        55: "13.75rem",
        110: '27.5rem',
        170: '42.5rem',
      },
      colors: {
        "interactive-normal": "#b9bbbe",
        "interactive-hover": "#dcddde",
        muted: "#72767d",
        "header-primary": "#fff",
        "header-secondary": "#b9bbbe",
        'header-primary-light': '#060607',

      },
      backgroundColor: {
        tertiary: "#202225",
        secondary: "#2f3136",
        primary: "#36393f",
        "modifier-selected": "rgba(79,84,92,0.32)",
        "message-bar": "#5564e9",
        "accent": "#4f545c",
        "text-normal": "#dcddde"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
