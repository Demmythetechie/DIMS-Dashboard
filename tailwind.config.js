// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-topbar': '0 2px 2px 0 rgba(80, 35, 105, 0.2)',
      },
    },
  },
  plugins: [],
}
