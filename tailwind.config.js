/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#24AE7C",
          500: "#24AE7C",
          600: "#0D2A1F",
        },
        blue: {
          DEFAULT: "#79B5EC",
          500: "#79B5EC",
          600: "#152432",
        },
        red: {
          DEFAULT: "#F24E43",
          500: "#F37877",
          600: "#3E1716",
          700: "#F24E43",
        },
        light: {
          DEFAULT: "#E8E9E9",
          200: "#E8E9E9",
        },
        dark: {
          DEFAULT: "#0D0F10",
          200: "#0D0F10",
          300: "#131619",
          400: "#1A1D21",
          500: "#363A3D",
          600: "#76828D",
          700: "#ABB8C4",
        },
      },
      fontSize: {
        12: ['0.75rem', { lineHeight: '1rem' }],
        14: ['0.875rem', { lineHeight: '1.125rem' }],
        16: ['1rem', { lineHeight: '1.25rem' }],
        18: ['1.125rem', { lineHeight: '1.5rem' }],
        24: ['1.5rem', { lineHeight: '1.75rem' }],
        32: ['2rem', { lineHeight: '2.25rem' }],
        36: ['2.25rem', { lineHeight: '2.5rem' }],
      },
      backgroundImage: {
        'light-rays': "url('/assets/images/light-rays.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}