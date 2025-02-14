import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { container, fluid, media } from './utils'
import * as T from '@theme'

export const ListPage = styleVariants({
  section: [
    container.small,
    {
      display: 'grid',
      justifyContent: 'center',
      justifyItems: 'center',

      backgroundColor: T.color.green
    }
  ],
  ul: {
    gap: '1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxInlineSize: '90rem',

    //marginInline: 'auto',
    marginBlock: fluid(20,45),
    placeItems: 'center',
    '@media': {

      [media.md]: {
        gridTemplateColumns: 'repeat(3,1fr)',
        //inlineSize: 600
      },
      [media.lg]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        //inlineSize: 900
      }
    }
  },
  li: {
    textTransform: 'capitalize',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: T.color.white,

    borderRadius: '0.5rem',
    inlineSize:'50%',
    minInlineSize: '8rem',
    maxInlineSize: '12rem',

    aspectRatio: '16/9',
    ':hover': {
      borderBlockColor: T.color.black,

      borderWidth: 5,
      borderStyle: 'double',
      color: T.color.azure
    }
  },
  a: {
    color: T.color.black,
    ':hover': {
      color: T.color.azure
    }
  }
})
globalStyle(`${ListPage.li}:hover:has(${ListPage.a}) ${ListPage.a}`, {
  color: T.color.azure
})