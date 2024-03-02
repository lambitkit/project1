/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/input.css",
    "*.{html,js}",
    "./images/*.jpg"
],
  theme: {
    extend: {
      backgroundImage: {
        'card-picture': "url('project1/images/cardpicture.jpg')",
        'github': "url('/github-mark/github-mark-white.png')",
      },
      animation: {
        'image-appear': 'appear 3s ease-in-out 1',
      },
      keyframes: {
        appear: {
          '0%': {opacity: 0, display: 'hidden' },
          '100%': {opacity: 1, display: 'inline-block' },
        },
      }
    },
  },
  plugins: [],
}

