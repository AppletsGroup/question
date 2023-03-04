/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/applet-design/dist/*.{js,jsx,ts,tsx,mjs}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('applet-design-utility')
  ],
}
