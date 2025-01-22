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
        gridTemplateColumns: '1fr 15rem',
      },
      [media.md]: {
        minBlockSize: 500,
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
  },
])

export const textBox = style({
  //paddingBlock: fluid(20, 40),
  backgroundColor: T.color.white,
  opacity: 0.9,
  fontFamily: T.fontFamily.exo,
  color: T.color.black,
  display: 'flex', // Ajoutez cette ligne
  flexDirection: 'column', // Ajoutez cette ligne
  alignItems: 'center', // Ajoutez cette ligne
  justifyContent: 'center',
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
  justifyContent: 'start',
  marginInline:10
})

globalStyle(`${ul} li`, {
  alignItems: 'start',
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
  alignSelf:'start',
  "::before": {
    content:"À partir de : ",
    //maxInlineSize:20,
    color:T.color.black,
    fontSize:T.fontSize.sm,
    display:'block'
  }
})

export const button = style({
  backgroundColor: T.color.black,
  color: T.color.white,
  fontSize: T.fontSize.md,
  maxInlineSize: 300,
  borderRadius: 10,
  padding: `${T.space.xs} ${T.space.md}`,
  //marginInline: 'auto',
 // justifySelf: 'start',
  //display:"block",
  ':hover': {
    backgroundColor: T.color.green,
    color: T.color.black,
  },
})


