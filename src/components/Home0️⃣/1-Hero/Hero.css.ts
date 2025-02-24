import * as T from '@theme'
import { container, media } from '@theme'
import {
  globalStyle,
  keyframes,
  style,
  styleVariants
} from '@vanilla-extract/css'

import { boxShadowGenerator, fluid } from '@/styles/utils'

export const contentHeroSpace = style([
  container.small,
  {
    marginBlockEnd: T.space.xl,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px,100%), 1fr))',
    justifyContent: 'center',
    alignItems: 'center',
    gap: T.space.md,
    marginInline: 'auto',
    '@media': {
      [T.media.mobile.portrait]: {
        textAlign: 'center'
      }
    }
  }
])

const baseName = style({
  letterSpacing: 1.19,
  fontSize: fluid(42, 55),
  fontFamily: T.fontFamily.exo,
  textAlign: 'center',
  '::selection': {
    color: T.color.green,
    backgroundColor: T.color.black
  },
  '@media': {
    [T.media.tablet.portrait]: {
      fontSize: 40,
      textAlign: 'center'
    },
    [T.media.md]: {
      textAlign: 'start'
    }
  }
})

export const name = styleVariants(
  {
    firstName: T.color.green,
    lastName:
      'light-dark(oklch(62.17% 0.1535 49.76),oklch(76.47% 0.1535 49.76))'
  },
  (color) => [baseName, { color }]
)

const moveUnderlineOffset = keyframes({
  '0%': {
    textUnderlineOffset: '.6em',
    textDecorationColor: 'whitesmoke'
  },
  '100%': {
    textUnderlineOffset: '.1em',
    textDecorationColor: 'green'
  }
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
  textAlign: 'center'
})
export const text = style({
  lineHeight: 1.7,
  color: T.color.black,
  marginBlock: T.space.sm,

  '@media': {
    [media.lg]: {
      lineHeight: 2,
      ':first-letter': {
        fontSize: 26
      }
    }
  }
})

export const slogan = style({
  color: T.color.orange,
  fontSize: fluid(19, 25),
  textAlign: 'center',
  transition: 'color 1s, font-size 3s',
  '@media': {
    [media.md]: {
      textAlign: 'left',
      selectors: {
        'p:hover + &': {
          color: 'orangered',
          fontSize: fluid(22, 27)
        }
      }
    }
  }
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
      T.color.red
    ],
    3.5
  )
})
export const aboutMeList = style([
  container.small,
  {
    listStyle: 'none',
    margin: '20 auto auto 20'
  }
])
globalStyle(`${aboutMeList} li:before`, {
  content: '✓',
  color: T.color.green
})

interface Buble {
  colors: string[]
  position: {
    left: number | string
    top: number | string
  }
}

const bubleColors: Record<string, Buble> = {
  blue: {
    colors: [
      'oklch(58.01% 0.1316 249.88)',
      'oklch(65.73% 0.1316 249.88)',
      'oklch(71.96% 0.1316 249.88)'
    ],
    position: {
      left: 50,
      top: 100
    }
  },
  orange: {
    colors: [
      'oklch(62.46% 0.1499 52.94)',
      'oklch(68.1% 0.1499 52.94)',
      'oklch(73.44% 0.1499 52.94)',
      'oklch(77.35% 0.1499 52.94)'
    ],
    position: {
      left: 'min(650px,75dvw)',
      top: 150
    }
  },
  green: {
    colors: [
      'oklch(66.32% 0.1504 153.53)',
      'oklch(70.16% 0.1504 153.53)',
      'oklch(81.16% 0.1504 153.53)',
      'oklch(86.16% 0.1504 153.53)'
    ],
    position: {
      left: 'min(80dvw, 950px)',
      top: 'min(50vh, 350px)'
    }
  }
}

const bubbleBase = style({
  position: 'absolute',
  content: '',
  borderRadius: '50%',
  width: '1px',
  aspectRatio: '1',

  opacity: 0.6,
  zIndex: -1
})

export const bubble = styleVariants(
  bubleColors,
  ({ colors, position: { left, top } }) => [
    bubbleBase,
    {
      display: 'none',
      '@media': {
        [T.media.md]: {
          display: 'inline',
          left,
          top,
          boxShadow: colors
            .map((color) => `0 0 min(30dvw,100vw) 150px ${color}`)
            .join(', ')
        }
      }
    }
  ]
)
