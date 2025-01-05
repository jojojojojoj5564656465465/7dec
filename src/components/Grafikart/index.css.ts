import { container } from '@/styles/global/main.css'
import { theme, media,hover } from '@theme'
import { bgg } from 'src/styles/utils.ts'
import {
  assignVars,
  createThemeContract,
  createVar,
  style,
  styleVariants,
} from '@vanilla-extract/css'


export const vars = createThemeContract({
  space: {
    items: null,
    gap: null,
  },
})

export const responsiveTheme = style({
  vars: assignVars(vars, {
    space: {
      items: "4",
      gap: '1rem',
    },
  }),
  '@media': {
    'screen and (width > 1224px)': {
      vars: assignVars(vars, {
        space: {
          items: "5",
          gap: '1.16rem',
        },
      }),
    },
    'screen and (394px < width < 790px ) and (pointer: coarse)': {
      vars: assignVars(vars, {
        space: {
          items: "3",
          gap: '0.60rem',
        },
      }),
    },
    'screen and (width < 394px) and (pointer: coarse)': {
      vars: assignVars(vars, {
        space: {
          items: "2",
          gap: '0.40rem',
        },
      }),
    },
  },
})

export const bgImage = createVar()
export const CardStyle = {
  wrapper: style([
    {
      display: 'block',

      // display: 'inline flex',
      padding: '1rem',
      borderRadius: '0.5rem',
      backgroundColor: 'orange',
      color: theme.color.white,
      textDecoration: 'none',
      border: `1.5px solid ${theme.color.green}`,

      scrollSnapAlign: 'start',
      //maxInlineSize: 304,
      blockSize: 304,
      minInlineSize: 220,
      maxInlineSize: `calc((100% - (${vars.space.items} - 1) * ${vars.space.gap}) / ${vars.space.items})`,
      '@media': {
        [media.lg]: {
          scrollSnapAlign: 'center', ///bad media qr
        },
      },
    },
 
  ]),
  image: style({
    content: '',
    width: 256,
    backgroundImage: bgImage,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: theme.radius[100],
    aspectRatio: '16 / 9',
  }),
  category: style({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
    display: 'block',
  }),
  price: style({
    fontSize: '1.5rem',
    color: theme.color.azure,
    display: 'block',
  }),
}
export const CardsStyle = style([
  {
    overflowBlock: 'hidden',
    display: 'flex',
    gap: vars.space.gap,
    flexWrap: 'nowrap',
    padding: `calc(${vars.space.gap} * 0.5)`,
    backgroundColor: theme.color.green,
    border: `1.5px solid ${theme.color.azure}`,
    overflowX: 'auto',
    scrollSnapType: 'x proximity',
    scrollSnapAlign: 'start',
    scrollPaddingInline: 0,
    '@media': {
      [media.lg]: {
        //overflow: 'hidden',
        scrollPaddingInline: `calc(${vars.space.gap} * 0.5)`,
        scrollSnapAlign: 'start',
        padding: '1rem',
        marginBlockEnd: 20,
      },
    },
  },
  responsiveTheme,
  container.small,
 // bgg("orange"),
])
const baseButton = style({
  marginTop: '4.5rem',
  color: theme.color.black,
  padding: '1rem',
  borderRadius: '1.5rem',
  fontSize: '1.5rem',
  '@media': {
    'only screen and (max-width: 1000px) and (pointer: coarse)': {
      display: 'none',
    },
  },
})
export const button = styleVariants({
  available: [
    baseButton,
    hover({ backgroundColor: '#004445', color: '#f8b400' }),
    {
      cursor: 'pointer',
      background: theme.color.green,
      color: theme.color.black,
      border: '2px solid green',
    },
  ],
  disable: [
    baseButton,
    {
      background: 'oklch(89.76% 0.0031 34 / 85.4%)',
      color: theme.color.red,
      cursor: 'none',
      border: '2px solid red',
    },
  ],
})