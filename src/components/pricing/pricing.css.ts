import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { theme, media } from '@theme'
import { container } from 'src/styles/global/main.css.ts'
import 'src/styles/global/globalStyle.css'

export const section = style([
  container.small,
  {
    backgroundColor: theme.color.azure,
    display: 'grid',
    minBlockSize: 350,
    gridTemplateColumns: '1fr',
    '@media': {
      [media.md]: {
        minBlockSize: 550,
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
  },
])

export const textBox = style({
   backgroundColor: theme.color.white,
  opacity: 0.9,
  fontFamily: theme.fontFamily.nunito,  
  color: theme.color.black,
})

export const image = style({
  display: 'none',
  '@media': {
    [media.md]: {
      display: 'inline-block',
      maxInlineSize: '100%',

      backgroundImage: 'url(public/nasa-rTZW4f02zY8-unsplash.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },
})

export const ul = style({
  listStyle: 'none',
  fontFamily: theme.fontFamily.exo,
  fontSize: theme.fontSize.sm,
  fontWeight:500
})
globalStyle(`${ul} li:before`, {
  content: '•',
  color: 'orange',
  // position: 'absolute',
  left: 0,
  fontSize: '2em',
  marginInlineEnd: '1em',
})

globalStyle(`${ul} li`, {
  marginInlineStart: '2em',
  })