/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bfe0ff',
          500: '#155dfc',
        },
        brand: {
          DEFAULT: '#0ea5a4',
        },
        neutral: {
          100: '#f5f7fa',
          500: '#6a7282',
          800: '#1e2939',
        },
        test: {
          900: 'var(--test-900)',
          500: 'var(--test-500)',
          200: 'var(--test-200)',
          50: 'var(--test-50)',
          DEFAULT: 'var(--test-500)',
        },
      },
    },
  },
  plugins: [],
};
