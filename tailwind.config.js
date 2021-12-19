/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')
const fromRoot = (p) => path.join(__dirname, p)

const screens = {
  ...defaultTheme.screens,
  '3xl': '1900px',
  '4xl': '2200px',
}

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    screens,
    extend: {
      // fontFamily: {
      //   sans: ['Matter', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  purge: {
    mode: 'layers',
    enabled: process.env.NODE_ENV === 'production',
    content: [fromRoot('./src/**/*.+(js|ts|tsx|mdx|md)')],
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
