// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'serif': ['Montserrat']
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
};
