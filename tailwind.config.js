/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/pexels-girl-weights-1.jpg')",
        'gym-background': "url('/src/assets/pexels-gym-weights.jpg')",
        'rocks-background': "url('/src/assets/pexels-balancing-rocks.jpg')",
      },
    }
  },
  plugins: [],
}

