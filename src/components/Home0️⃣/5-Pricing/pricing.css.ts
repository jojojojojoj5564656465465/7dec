import { createContainer, globalStyle, style, styleVariants } from '@vanilla-extract/css'
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

export const Box1Wrapper = style({
 paddingBlock: fluid(20, 40),
  backgroundColor: T.color.white,
  opacity: 0.9,
  fontFamily: T.fontFamily.exo,
  color: T.color.black,
  display: 'flex', // Ajoutez cette ligne
  flexDirection: 'column', // Ajoutez cette ligne
  alignItems: 'center', // Ajoutez cette ligne
  justifyContent: 'center',
})
export const Box1 = styleVariants({
  prixApartir: {
    color: T.color.red,
    fontSize: T.fontSize.xl,
    fontWeight: 800,
    fontFamily: T.fontFamily.dancingScript,
    marginInlineStart: T.space.xxxs,
    alignSelf: 'start',
    '::before': {
      content: '**À partir de : ',
      //maxInlineSize:20,
      color: T.color.black,
      fontSize: T.fontSize.sm,
      display: 'block',
    },
    '::selection': {
      color: 'green',
      backgroundColor: 'yellow',
      padding: 5,
    },
  },
  ul: {
    listStyle: 'none',
    fontFamily: T.fontFamily.exo,
    fontSize: T.fontSize.sm,
    fontWeight: 500,
    display: 'block',
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    marginInline: 10,
  },
  button: {
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
  },
})


export const customBullet = style({
  listStyleType: 'none',
  padding: '0',
  color:"green",  
 
})



T.globalStyleTag(Box1.ul, {
  li: {
     alignItems: 'center',
     placeItems:'center',
    position: 'relative',
   display: 'flex',
 
  },
})

  globalStyle(`${Box1.ul} > li:before`, {
    content: '🔸',
    marginInline: '0.2em',
    justifySelf: 'start',
    '@media': {
      'screen and (min-width: 668px)': {
        marginInline: '0.7em',
        //marginBlock: '0.5rem',
        top: 0,
        left: 0,
      },
    },
  })
  
  /**
   * MARK: SECOND DIV
   */
  
  
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