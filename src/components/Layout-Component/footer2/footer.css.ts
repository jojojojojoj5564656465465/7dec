import { style, globalStyle } from '@vanilla-extract/css'
import { fontFamily, color, fontSize, space, media, container } from '@theme'
import { boxShadowGenerator, globalStyleTag, ld, fluid, flex, hover } from '@styles/utils'

export const wrapper = style([
  container.full,
  {
    marginBlockStart:'auto',
    
    display: 'grid',
    gap: '3rem',
    backgroundColor: color.background,
    height: fluid(100,190),
    '@media': {
      [media.md]: {
        gridTemplateColumns: 'repeat(4,1fr)',

      },
    },
  },
])

export const slogan = style({
  gridColumn: 'span 2',
  fontSize: fontSize['3xl'],
  fontFamily: fontFamily.dancingScript,
  color: color.orange,
})

export const item = style([
  hover({ backgroundColor: 'green', color: color.green }),
  {
    display: 'flex',
    gap: '0.5rem',
    color: color.black,
    cursor: 'pointer',
  },
])
