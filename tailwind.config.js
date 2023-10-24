/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        marginTop:'4rem'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}