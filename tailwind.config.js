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
        'primary-opaque': 'var(--color-primary-opaque)',
        'primary-half-opaque': 'var(--color-primary-half-opaque)',
        secondary: 'var(--color-secondary)',
        'secondary-opaque': 'var(--color-secondary-opaque)'
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
