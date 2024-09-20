// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    // './node_modules/daisyui/dist/**/*.js', // Not required but can be added
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
