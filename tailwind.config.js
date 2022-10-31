/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        background: '#181719',
        interior: '#828282',
        lastcolor: '#A9A9A9'
      },
      fontFamily:{
        fontone: 'Crimson Pro',
        fonttwo: 'Lora',
        fontthree: 'Montserrat'
      },
      height:{
        hamHeight: '0.15rem'
      },
      keyframes:{
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation:{
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      width:{
        firstwidth: '14rem',
        blockwidth: '18rem',
        blockwidthone: '18rem',
        blockwidthtwo: '23rem',
        blocklastwidth: '28rem'
      },
      fontSize:{
        font: ['14px', {lineHeight: '17px'}]
      }
    },
  },
  plugins: [],
}
