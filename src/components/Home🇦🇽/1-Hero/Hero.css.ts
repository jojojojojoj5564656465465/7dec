import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { media, container } from '@theme'
import * as T from '@theme'

import { fluid } from '@/styles/utils'

//const font = new FontSizeGenerator(380, 2100, 16)

export const contentHeroSpace = style([
  container.small,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: T.space.md,
    marginInline: 'auto',
  },
])

export const firstName = style({
  color: T.color.green,
  letterSpacing: 1.19,
  fontSize: fluid(42, 60),
  fontFamily: T.fontFamily.exo,
})

export const lastName = style({
  color: '#FFC44B',
})
export const subTitle = style({
  fontSize: fluid(20, 42),
  fontFamily: T.fontFamily.exo,
  textDecoration: 'underline',
  textDecorationColor: T.color.green,
})
export const text = style({
  lineHeight: 1.7,
  color: 'black',
  marginBlock: T.space.sm,
  fontSize: fluid(16.6, 22),
  '@media': {
    [media.lg]: {
      lineHeight: 2,
    },
  },
})

export const slogan = style({
  color: 'red',
  fontSize: fluid(19, 25),
  textAlign: 'center',
  '@media': {
    [media.md]: {
      textAlign: 'left',
    },
  },
})

export const image = style({
  aspectRatio: '1/1',
  backgroundColor: 'oklch(70% 0.1 346)',
  minInlineSize: 'min(100%,250px)',
  minBlockSize: 'min(100%,250px)',
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