/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        hammock: {
          brown: '#5D4037',
          'brown-dark': '#3E2723',
          sunset: '#F57C00',
          beige: '#F5E0C3',
          'beige-soft': '#FAF3E8'
        }
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: '0 20px 40px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'sunset-gradient':
          'radial-gradient(circle at top, rgba(245, 224, 195, 0.9), transparent 55%), linear-gradient(to bottom right, #3E2723, #5D4037, #F57C00)'
      }
    }
  },
  plugins: []
};

