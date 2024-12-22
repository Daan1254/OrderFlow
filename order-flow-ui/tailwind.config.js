/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC72C', // McDonald's yellow/gold
        secondary: '#DA291C', // McDonald's red
        destructive: '#27251F', // McDonald's dark gray/black
        background: '#F5F5F5', // Light gray background
      },
    },
  },
  plugins: [],
}

