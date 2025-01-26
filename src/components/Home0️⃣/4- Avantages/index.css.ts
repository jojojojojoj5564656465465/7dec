import {
  createContainer,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { media, container, globalStyleTag } from '@theme'
import * as T from '@theme'

import { fluid } from '@/styles/utils'

/** MARK: AVANTAGE */
export const WrapperAvantage = style([
  container.medium,
  {
    marginBlockEnd: T.space.xl,
    zIndex: 10,
    marginInline: 'auto',
    paddingBlock: T.space.md,
    paddingInline: T.space.sm,
    backgroundColor: T.color.background,
    position: 'relative',
    display: ['flex', 'grid'],
    gap: T.space.sm,
    gridTemplateRows: '120px 1fr auto',
    gridTemplateColumns: 'repeat(4,1fr)',

    // '@media': {
    //   [media.md]: {
    //     gridTemplateRows: 'repeat(2,1fr)',
    //     gridTemplateColumns: 'repeat(auto-fit, 1fr)',
    //   },
    // },
  },
])
globalStyleTag(WrapperAvantage,{
  h2:{
    //background:"white",
    gridColumn:"1 / span 4",
    textAlign:'center'
  }
})

export const boxContainerQuery = createContainer()

export const box = styleVariants({
  boxContainer: {
    border: `2px solid ${T.color.green}`,
    display: 'flex',
    marginInline: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: 60,
    //padding: 10,
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    //maxInlineSize: 'max( 250px, 20vw )',
    // blockSize: '329px',
    containerName: boxContainerQuery,
    containerType: 'inline-size',
    minInlineSize: '100%',
    ':hover': {
      boxShadow: '0px 9px 30px 0px rgba(255,149,5,0.3)',
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
    fontSize:40
  },
  titre: {
    fontSize: T.fontSize.md,
    fontFamily: T.fontFamily.exo,
    fontWeight: 800,
    color:"black",
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

globalStyle(`${box.boxContainer}:hover > ${box.icon}`, {
  backgroundColor: 'oklch(86.47% 0.1202 77.29 / 92.68%)',
  border: '3px solid white',
  outline: '3px solid orange' 
})

globalStyle(`${box.boxContainer}:hover > ${box.titre}`, {
  color: 'oklch(86.47% 0.1402 77.29)',
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