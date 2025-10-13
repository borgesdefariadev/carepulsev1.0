/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          200: 'var(--dark-200)',
          300: 'var(--dark-300)',
          400: 'var(--dark-400)',
          500: 'var(--dark-500)',
          600: 'var(--dark-600)',
          700: 'var(--dark-700)',
        },
        light: {
          200: 'var(--light-200)'
        },
        green: {
          500: 'var(--green-500)',
          600: 'var(--green-600)'
        },
        blue: {
          500: 'var(--blue-500)',
          600: 'var(--blue-600)'
        },
        red: {
          500: 'var(--red-500)',
          600: 'var(--red-600)'
        }
      }
    }
  },
  plugins: []
  ,
  safelist: [
    // common dynamic patterns
    { pattern: /text-(dark|green|blue|red)-[0-9]{3}/ },
    { pattern: /bg-(dark|green|blue|red)-[0-9]{3}/ }
  ]
}
