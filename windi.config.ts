import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    extend: {
      colors: {
        primary: {
          red: '#FF295D',
          yellow: '#FFBA02',
          pink: '#FB44E3',
          purple: '#4B2EC5',
        },
        background: '#030E29',
        teal: colors.teal,
        cyan: colors.cyan,
        brown: {
          DEFAULT: '#795548',
          '50': '#efebe9',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      flex: {
        layout: '1 0 auto',
      },
      backgroundImage: (theme) => ({
        'hero': 'url("/assets/images/hero-wave.svg")',
        'spots': `
          radial-gradient(circle at 10% 30%, ${theme("colors.primary.red")}25, transparent 35%),
          radial-gradient(circle at 95% 40%, ${theme("colors.primary.pink")}25, transparent 35%),
          radial-gradient(circle at 35% 90%, ${theme("colors.primary.yellow")}25, transparent 35%),
          radial-gradient(circle at 60% 20%, ${theme("colors.primary.purple")}20, transparent 20%)
        `,
      }),
    },
  },
  variants: {},
  plugins: [
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})
