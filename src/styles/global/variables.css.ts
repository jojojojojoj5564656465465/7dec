import { createGlobalTheme } from '@vanilla-extract/css'
// supprimer cette page

const globalVars = createGlobalTheme(':root', {
  space: {
    px: '1px',
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    xxxs: 'clamp(0.3125em, 0.3125em + 0dvw, 0.3125em)',
    xxs: 'clamp(0.5625em, 0.5408em + 0.1087dvw, 0.625em)',
    xs: 'clamp(0.875em, 0.8533em + 0.1087dvw, 0.9375em)',
    sm: 'clamp(1.125em, 1.0815em + 0.2174dvw, 1.25em)',
    md: 'clamp(1.6875em, 1.6223em + 0.3261dvw, 1.875em)',
    lg: 'clamp(2.25em, 1.6223em + 0.4348dvw, 2.5em)',
    xl: 'clamp(3.375em, 1.6223em + 0.6522dvw, 3.75em)',
    xxl: 'clamp(4.5em, 4.3261em + 0.8696dvw, 5em)',
    xxxl: 'clamp(6.75em, 6.4891em + 1.3043dvw, 7.5em)',
  },

  radius: {
    '50': '4px',
    '75': '6px',
    '100': '8px',
    '200': '12px',
    '300': '20px',
    '1000': '50%',
    swaying: '45% 60% 45% 60% / 60% 45% 60% 45%',
    full: '9999px',
  },
  sizes: {
    none: 'none',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
    full: '100%',
    screenHeight: '100vh',
  },
  zIndices: {
    auto: 'auto',
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
  },
  borderWidths: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
})

globalVars.sizes['4xl']