import * as T from '@theme'
import { globalStyle, styleVariants } from '@vanilla-extract/css'
import { container, fluid, media } from './utils'

/**
 * MARK: EXEMPLES
 */
export const ListPage = styleVariants({
  section: [
    container.small,
    {
      display: 'grid',
      justifyContent: 'center',
      justifyItems: 'center',

      //backgroundColor: T.color.green,
    },
  ],
  ul: {
    gap: '1rem', //gap: fluid(15, 25),
    display: ['grid','flex'],
    flexWrap:"wrap",


    marginBlock: fluid(20, 45),
    //justifyContent: 'space-between',
    '@media': {
      [media.md]: {

        display:"grid",
        gridTemplateColumns: 'repeat(3, 1fr)',
        //gridTemplateColumns: 'repeat(3,1fr)'
        //inlineSize: 600
      },
      [media.lg]: {
        maxInlineSize: '60rem',
        gridTemplateColumns: 'repeat(4, 1fr)',
        //gridTemplateColumns: 'repeat(4, 1fr)'
        //inlineSize: 900
      }
    },
  },
  li: {
    textTransform: 'capitalize',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: T.color.white,

    borderRadius: '0.5rem',
  border:`1px solid ${T.color.black}`,
    minInlineSize: '9rem',
    maxInlineSize: '12rem',

    aspectRatio: '16/9',
    ':hover': {
      borderColor: T.color.white,

      backgroundColor: T.color.black,
      borderWidth: 5,
      borderStyle: 'double',
      color: T.color.white,
    },
  },
  a: {
    color: T.color.black,
    ':hover': {
      color: T.color.white,
    },
  },
})
globalStyle(`${ListPage.li}:hover:has(${ListPage.a}) ${ListPage.a}`, {
  color: T.color.white,
})

/**
 * MARK: ETUDE DE CAS
 */
export const caseStudy = styleVariants({
  wrapper: [container.medium, {}],

  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(20rem,1fr))',
    gap: '1.5rem',
  },
  cardEach: {
    borderTop: '5px double light-dark(orange, white)',
    display: 'grid',
    gap: '1rem',
  },
  h4: {
    //textDecoration: 'underline solid light-dark(orange, white)',
         fontFamily: T.fontFamily.numito,
    '::selection': {
      backgroundColor: 'pink',
      color: 'green',
    },
  },
  p: {
    fontSize: T.fontSize.base,
    lineHeight: fluid(25, 35),
  },
  span: {
    fontWeight: 800,
    color: T.color.azure,
    '::selection': {
      backgroundColor: 'pink',
    },
  },
  button: {
    border: '3px solid light-dark(orange, white)',
    marginBlockStart: 15,
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    fontFamily: T.fontFamily.exo,
    letterSpacing: 2,
    color: T.color.white,
    borderRadius: '10px',



    ':hover': {
      backgroundColor: 'orange',
      border: `3px solid ${T.color.black}`,
    },

  },
  button_button:{
    width:"100%",
    display:"grid",
    gridTemplateColumns:"1fr auto",
    ':hover':{
      color: 'light-dark(white, black)',
    }

  }
})
