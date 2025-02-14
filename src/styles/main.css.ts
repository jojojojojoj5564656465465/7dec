import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { container, globalStyleTag, hover, media } from './utils'

export const ListPage = styleVariants({
  section: [
    container.small,
    {
      display: 'grid',
      justifyContent: 'center',

      paddingInline: 'auto',
      backgroundColor: '#9acd32'
    }
  ],
  ul: {
    gap: '1rem',
    display: 'grid',

    marginBlock: 40,
    gridTemplateColumns: 'repeat(2, minmax(2rem,1fr))',
    maxInlineSize: '90rem',
    backgroundColor: 'indigo',

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
        inlineSize: 900
      }
    }
  },
  li: {
    inlineSize: '100%',
    textTransform: 'capitalize',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '0.5rem',
    minInlineSize: '5rem',
    aspectRatio: '16/9',
    ':hover': {
      backgroundColor: 'green'
    }
  }
})
