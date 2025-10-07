/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Na V4, o Tailwind agora usa seu próprio plugin PostCSS.
    '@tailwindcss/postcss': {},
  },
};

export default config;
