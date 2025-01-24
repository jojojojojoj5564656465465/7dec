import { createContainer, globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { media, container } from '@theme'
import * as T from '@theme'

import { fluid } from '@/styles/utils'
import type { color } from 'bun'

//const font = new FontSizeGenerator(380, 2100, 16)

export const contentHeroSpace = style([
  container.small,
  {
    marginBlockEnd:T.space.xl,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: T.space.md,
    marginInline: 'auto',
  },
])

const _name = style({
  letterSpacing: 1.19,
  fontSize: fluid(42, 55),
  fontFamily: T.fontFamily.exo,
  '::selection': {
    color: T.color.green,
    backgroundColor: T.color.black,
  }

})

const nameColors = {
  firstName: T.color.green,
  lastName: 'orange',
}
export const name = styleVariants(nameColors, Color => [
  _name,
  { color: Color },
])


export const subTitle = style({
  fontSize: fluid(18, 38),
  fontFamily: T.fontFamily.exo,
  textDecoration: 'underline',
  textDecorationColor: T.color.green,
  
})
export const text = style({
  lineHeight: 1.7,
  color: T.color.black,
  marginBlock: T.space.sm,

  '@media': {
    [media.lg]: {
      lineHeight: 2,
    },
  },
})

export const slogan = style({
  color: T.color.red,
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
  boxShadow: T.boxShadowGenerator(
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
