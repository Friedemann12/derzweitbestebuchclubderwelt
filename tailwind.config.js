/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      '10': '20px',
    },

    minWidth: {
      'nav': '350px',
      'content': '500px',
    },
    maxWidth: {
      'nav': '350px',
      'content': '500px',
    },
    maxHeight: {
      "klappentext": "600px",
    },
    extend: {
      width: {
        "book": "550px",
        "bookPicto": "110px",
      },
      height: {
        "bookPicto": "150px",
        "book": "750px",
      },
      dropShadow: {
        'book': '0 35px 35px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        'reclam-yellow': '#ffe400',
      },
    },
  },
  plugins: [],
}
