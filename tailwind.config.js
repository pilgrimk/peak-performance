/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/pexels-girl-weights-1.jpg')",
        'gym-background': "url('/src/assets/pexels-gym-weights.jpg')",
        'rocks-background': "url('/src/assets/pexels-balancing-rocks.jpg')",
      },
    }
  },
  plugins: [],
}

