import { container, media } from '@theme'
import * as T from '@theme'
import {
  createContainer,
  createVar,
  globalStyle,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css'

import { boxShadowGenerator, fluid } from '@/styles/utils'

//const font = new FontSizeGenerator(380, 2100, 16)

export const contentHeroSpace = style([
  container.small,
  {
    marginBlockEnd: T.space.xl,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: T.space.md,
    marginInline: 'auto',
    '@media': {
      [T.media.mobile.portrait]: {
        textAlign: 'center',
      },
    },
  },
])

const baseName = style({
  letterSpacing: 1.19,
  fontSize: fluid(42, 55),
  fontFamily: T.fontFamily.exo,
  textAlign: 'center',
  '::selection': {
    color: T.color.green,
    backgroundColor: T.color.black,
  },
  '@media': {
    [T.media.tablet.portrait]: {
      fontSize: 40,
      textAlign: 'center',
    },
    [T.media.md]: {
      textAlign: 'start',
    },
  },
})

export const name = styleVariants(
  {
    firstName: T.color.green,
    lastName:
      'light-dark(oklch(75.58% 0.1513 41.61),oklch(75.58% 0.0887 41.61))',
  },
  color => [baseName, { color }],
)

const moveUnderlineOffset = keyframes({
  '0%': {
    textUnderlineOffset: '.6em',
    textDecorationColor: 'whitesmoke',
  },
  '100%': {
    textUnderlineOffset: '.1em',
    textDecorationColor: 'green',
  },
})

export const subTitle = style({
  fontSize: fluid(18, 38),
  fontFamily: T.fontFamily.exo,
  animation: `4s linear 1s ${moveUnderlineOffset}`,

  textDecoration: 'underline',
  textDecorationColor: 'green',
  animationIterationCount: 1,
  textDecorationThickness: fluid(5, 9),
  textDecorationLine: 'underline',
  textAlign: 'center',
})
export const text = style({
  lineHeight: 1.7,
  color: T.color.black,
  marginBlock: T.space.sm,

  '@media': {
    [media.lg]: {
      lineHeight: 2,
      ':first-letter': {
        fontSize: 26,
      },
    },
  },
})

export const slogan = style({
  color: 'orange',
  fontSize: fluid(19, 25),
  textAlign: 'center',
  transition: 'color 1s, font-size 3s',
  '@media': {
    [media.md]: {
      textAlign: 'left',
      selectors: {
        'p:hover + &': {
          color: 'orangered',
          fontSize: fluid(22, 27),
        },
      },
    },
  },
})

export const image = style({
  aspectRatio: '1',
  backgroundColor: 'oklch(70% 0.1 346)',
  minInlineSize: 'min(100%,250px)',
  minBlockSize: 'min(100%,250px)',
  boxShadow: boxShadowGenerator(
    [
      T.color.green,
      T.color.azure,
      T.color.red,
      T.color.green,
      T.color.azure,
      T.color.red,
    ],
    3.5,
  ),
})
export const aboutMeList = style([
  container.small,
  {
    listStyle: 'none',
    margin: '20 auto auto 20',
  },
])
globalStyle(`${aboutMeList} li:before`, {
  content: '✓',
  color: T.color.green,
})
