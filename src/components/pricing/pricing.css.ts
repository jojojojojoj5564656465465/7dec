import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { container, media } from '@theme'
import * as T from '@theme'
import { fluid } from '@/styles/utils'

export const section = style([
  container.small,
  {
    backgroundColor: T.color.azure,
    display: 'grid',
    minBlockSize: 250,
    gridTemplateColumns: '1fr',
    '@media': {
      'screen and (hover: hover) and (min-width: 37em)': {
        minBlockSize: 500,
        gridTemplateColumns: "1fr 15rem",
      },
      [media.md]: {
        minBlockSize: 500,
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
  },
])

export const textBox = style({
   backgroundColor: T.color.white,
  opacity: 0.9,
  fontFamily: T.fontFamily.exo,  
  color: T.color.black,
})

export const image = style({
  display: 'none',
  '@media': {
    'screen and (hover: hover) and (min-width: 37em)': {
      backgroundImage: 'url(/images/nasa-rTZW4f02zY8-unsplash.jpg)',
      display: 'inline-block',
      maxInlineSize: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '60% center',
    },
    [media.md]: {
      backgroundPosition: 'center',
    },
  },
})

export const ul = style({
  listStyle: 'none',
  fontFamily: T.fontFamily.exo,
  fontSize: T.fontSize.sm,
  fontWeight: 500,
  display: 'flex',
  flexDirection: 'column',
  marginBlock: fluid(20,40)
})

globalStyle(`${ul} li`, {
  alignItems: 'center',
  display: 'flex',
  
})

globalStyle(`${ul} li:before`, {
  content: '•',
  color: 'orange',
  fontSize: '2.5em',
  marginInline: '0.2em',
  '@media': {
    'screen and (min-width: 668px)': {
      marginInline: '0.7em',
      
    },
  },
})
  export const prixApartir = style({
    color: T.color.red,
    fontSize: T.fontSize.xl,
    fontWeight: 800,
    fontFamily: T.fontFamily.dancingScript,
    marginInlineStart: T.space.xxxs,
  })

  export const button = style({
    backgroundColor: "green",
    color: T.color.white,
    fontSize: T.fontSize.md,

  });