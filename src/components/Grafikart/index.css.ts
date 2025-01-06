import { container } from '@/styles/global/main.css'
import { theme, media, hover, flex } from '@theme'
import { bgg } from 'src/styles/utils.ts'
import {
  assignVars,
  createThemeContract,
  createVar,
  style,
  styleVariants,
  keyframes,
} from '@vanilla-extract/css'
import { backgroundImage } from '../hero/Exemples/Exemple.css'


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

 const bgImage = createVar()
const CardStyle = {
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
}



export const sectionWrapperCardButtons = style([
  container.large,
  {
    backgroundColor: 'pink',
    display: ['inline', 'flex', 'grid'],
    marginInline: 'auto',
    '@supports': {
      '(display: grid)': {
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr max-content',
        justifyContent: 'center',
      },
    },
  },
])

 export const CardsStyle = style([
  {

    overflowBlock: 'hidden',
    display: ['inline', 'flex'],
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
])

const baseButton = style({
  all:"unset",
  marginBlock: 'auto',
  display:["flex","grid"],
  placeItems:"center",
  alignContent:"center",
  color: theme.color.black,
  padding: '1rem 2rem',
  borderRadius: '1.5rem',
  fontSize: '1.5rem',
  maxHeight:"60px",
  '@media': {
    'only screen and (max-width: 1000px) and (pointer: coarse)': {
      display: 'none',
    },
  },
})
const greenAnimation = keyframes({
  '0%': { boxShadow: '0 0.1px 0 0 green' },
  '50%': { boxShadow: '0 1.00px 0 0 oklch(77.06% 0.1723 159.88 / 88.47%)' },
  '70%': { boxShadow: '0 2.80px 0 0 oklch(77.06% 0.1723 159.88 / 38.47%)' },
  '100%': { boxShadow: '0 4.00px 0 0 oklch(77.06% 0.1723 159.88 / 20.47%)' },
})
export const button = styleVariants({
  available: [
    baseButton,
    hover({
      backgroundColor: 'oklch(44.79% 0.1347 153.85 / 26.49%)',
      color: 'oklch(56% 0.2322 324)',
    }),
    {
      cursor: 'pointer',
      background: theme.color.green,
      color: theme.color.black,
      border: '2px solid green',
      ':hover': {
        animationName: greenAnimation,
        animationDuration: '1s',
        animationTimingFunction: 'ease',
      },
    },
  ],
  disable: [
    baseButton,
    {
      background: 'oklch(89.76% 0.0031 34 / 85.4%)',
      color: theme.color.red,
      cursor: 'not-allowed',
      pointerEvents: 'none',
      border: `1.5px solid ${theme.color.red}`,
      boxShadow: '0 1.51px 0 0 oklch(82.35% 0.1191 348.14 / 52.89%)',
    },
  ],
})
