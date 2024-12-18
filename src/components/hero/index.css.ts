import { globalStyle, style } from '@vanilla-extract/css'
import { theme, media } from '@theme'
import { container } from 'src/styles/global/main.css.ts'
import 'src/styles/global/globalStyle.css'
import { optimalFontSizePerTag } from '@/styles/tokens/font'

import FontSizeGenerator from '@styles/tokens/font/FontSizeGenerator'
import { fluid } from '@/styles/utils'

//const font = new FontSizeGenerator(380, 2100, 16)

export const contentHeroSpace = style([
  container.small,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: theme.space.md,
    marginInline: 'auto',
    //border: "1px solid red",
  },
])

export const firstName = style({
  color: theme.color.green,
  letterSpacing: 1.19,
  fontSize: fluid(42, 60),
  fontFamily: theme.fontFamily.nunito,
})

export const lastName = style({
  color: '#FFC44B',
})
export const subTitle = style({
  fontSize: fluid(20, 42),
  fontFamily: theme.fontFamily.exo,
  textDecoration: 'underline',  
  textDecorationColor: theme.color.green,
})
export const text = style({
  lineHeight: 1.7,
  color: 'black',
  marginBlock: theme.space.sm,
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