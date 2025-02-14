import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { container, media } from './utils'
import * as T from '@theme'

export const ListPage = styleVariants({
  section: [
    container.small,
    {
      display: 'grid',
      justifyContent: 'center',

      paddingInline: 'auto',
      backgroundColor: T.color.green
    }
  ],
  ul: {
    gap: '1rem',
    display: 'grid',

    marginBlock: 40,
    gridTemplateColumns: 'repeat(2, minmax(2rem,1fr))',
    maxInlineSize: '90rem',
    minInlineSize: '90svw',
    justifyContent: 'start',
    justifyItems: 'start',
    marginInline: 'auto',
    '@media': {
      [media.mobile.portrait]: {
        gridTemplateColumns: 'repeat(2,1fr)',
        minInlineSize: '90svw',
        marginBlock: 20,
        marginInline: '0',
        paddingInline: '0.5rem',
        gap: '0.5rem'
      },
      [media.md]: {
        placeItems: 'center',
        gridTemplateColumns: 'repeat(3,1fr)',
        inlineSize: 600
      },
      [media.lg]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
        inlineSize: 900,
       
      }
    }
  },
  li: {
    inlineSize: '100%',
    textTransform: 'capitalize',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: T.color.white,

    borderRadius: '0.5rem',
    minInlineSize: '5rem',
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