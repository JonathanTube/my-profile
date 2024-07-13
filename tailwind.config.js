/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "jonathan-dark": "#212121",
        "jonathan-gray": "#323232",
        "jonathan-main": "#0D7377",
        "jonathan-light": "#14FFEC",
      },
    },
  },
  plugins: [],
}
