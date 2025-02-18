import { container, media } from '@theme'
import * as T from '@theme'
import {
  createContainer,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css'

import { fluid, globalStyleTag } from '@/styles/utils'

/** MARK: AVANTAGE */
export const WrapperAdvantage = style([
  container.medium,
  {
    marginBlockEnd: T.space.xl,
    zIndex: 10,
    marginInline: 'auto',
    paddingBlock: T.space.md,
    paddingInline: T.space.sm,
    backgroundColor: T.color.background,
    position: 'relative',
    display: ['flex', 'grid', 'block'],
    gap: T.space.sm,
    //gridTemplateRows: '100px 1fr',
    //gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',

    // '@media': {
    //   [media.tablet.portrait]: {
    //     gridTemplateColumns: 'repeat(2, 1fr)',
    //     gridTemplateRows: '100px repeat(2,1fr)',
    //   },
    //   [media.mobile.landscape]: {
    //     gridTemplateColumns: 'repeat(2, 1fr)',
    //     gridTemplateRows: '100px repeat(2,1fr)',
    //   },
    //   // [media.mobile.portrait]: {},
    //   [media.md]: {
    //     gridTemplateRows: '120px 1fr auto',
    //     gridTemplateColumns: 'repeat(4,1fr)',
    //   },
    // },
  },
])
export const WrapperAdvantage_cards = style({
  marginBlockStart: T.space.xl,
  display: ['flex', 'grid'],
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  gap: 10,
  minInlineSize: '100%',

  maxInlineSize: 250,

  placeContent: 'center',
  '@media': {
    [media.tablet.portrait]: {
      gridTemplateColumns: 'repeat(2, minmax(150px, 260px))',
    },
    [media.mobile.landscape]: {
      gridTemplateColumns: 'repeat(2, minmax(150px, 260px))',
    },
    [media.mobile.portrait]: {
      gridTemplateColumns: '1fr',
    },
  },
})

globalStyleTag(WrapperAdvantage, {
  h2: {
    //background:"white",
    // gridColumn:"1 / span 4",
    textAlign: 'center',
  },
})

export const boxContainerQuery = createContainer()
const hoverColor = 'light-dark(oklch(70.18% 0.1548 66.77),oklch(69.29% 0.1 65))'

/**
 * MARK: CARD
 */
export const card = styleVariants({
  wrapper: {
    border: `${fluid(4, 7)} solid ${T.color.green}`,
    display: 'flex',
    gap: 10,
    marginInline: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: 50,

    '@media': {
      [media.mobile.portrait]: {
        aspectRatio: '15/9',
      },
      [media.tablet.portrait]: {
        aspectRatio: '1',
        height: '100%',
        maxInlineSize: 100,
      },
      [media.md]: {
        aspectRatio: '1',
      },
    },
    //padding: 10,
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    //maxInlineSize: 'max( 250px, 20vw )',
    containerName: boxContainerQuery,
    containerType: 'inline-size',
    minInlineSize: '100%',
    ':hover': {
      boxShadow: '0px 9px 30px 0px rgba(255,149,5,0.3)',
      border: `2px solid ${hoverColor}`,
    },
  },
  icon: {
    aspectRatio: 1,
    marginTop: -30,
    borderRadius: '50%',
    backgroundColor: 'oklch(86.47% 0.1202 166.11 / 92.68%)',
    boxShadow: '0 0 10px rgba(0,0,0,.1)',
    minInlineSize: 70,
    minBlockSize: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
  titre: {
    fontSize: T.fontSize.md,
    fontFamily: T.fontFamily.exo,
    fontWeight: 800,
    color: 'black',
    textDecoration: 'underline',
    textDecorationColor: T.color.green,
    marginBlock: T.space.xxxs,
    '::selection': {
      color: T.color.green,
      backgroundColor: 'greenyellow',
    },
    '@container': {
      [`${boxContainerQuery} (250px < width)`]: {
        fontSize: 32,
        letterSpacing: 1.7,
      },
    },
  },
  text: {
    textAlign: 'center',
    color: 'black',
    marginBlock: '1px 4px',
    fontSize: T.fontSize.base,
    fontFamily: T.fontFamily.numito,
    minInlineSize: '100%',
    paddingInline: '10px',
    '::selection': {
      color: 'green',
      backgroundColor: 'yellow',
      fontWeight: 800,
    },

    '@media': {
      [media.lg]: {
        lineHeight: 1.2,
      },
    },
    '@container': {
      [`${boxContainerQuery} (250px<width)`]: {
        fontSize: T.fontSize.sm,
      },
    },
  },
})

/**MARK: HOVER START */
globalStyle(`${card.wrapper}:hover > :is(${card.icon})`, {
  backgroundColor: hoverColor,
  border: '3px solid white',
  outline: '3px solid orange',
})

globalStyle(`${card.wrapper}:hover > :is(${card.titre})`, {
  color: hoverColor,
  fontWeight: 800,
})

export const ribbonSvg = style({
  position: 'absolute',
  top: -160,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  opacity: 0.3,
})
