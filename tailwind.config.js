/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}", "!./node_modules"],
    theme: {
      extend: {
        container: {
          padding: '1.5rem',
          center: true,
          screens: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
          },
        },
        fontFamily: {
          'sans': 'inter',
        },
        colors: {
          primary: '#ffd803',
          secondary: '#392396',
          accent: '#e3f6f5',
          card: '#f7f7f7',
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            primary: '#ffd803',
            secondary: '#392396',
            accent: '#e3f6f5',
          }
        }
      ]
    }
  }
  