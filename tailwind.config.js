/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-bg':'#9999ff',
        'custom-text':'white',
        'theme-color': '#7A47E0',
        'theme-light-color': '#9067e0',
        'theme-dark-blue':'#180778',
        'theme-light-blue':'#3a22bf',
      }
    },
  },
  plugins: [],
}
