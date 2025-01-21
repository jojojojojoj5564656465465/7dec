import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { media, container } from '@theme'
import * as T from '@theme'


import { fluid } from '@/styles/utils'



/** MARK: AVANTAGE */
export const Avantages = style([
  container.large,
  {
    
    zIndex: 10,
    marginInline: 'auto',
    paddingBlock: T.space.md,
    paddingInline: T.space.sm,
    backgroundColor: T.color.background,
    position: 'relative',
    display: 'grid',
    gap: T.space.sm,
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    '@media': {
      [media.md]: {
        gridTemplateColumns: 'repeat(auto-fit, 1fr)',
      },
    },
  },
])
export const ribbonSvg = style({
  position: 'absolute',
  top: -160,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  opacity: 0.3,
})

export const boxContainerQuery = createContainer()

export const box = {
  container: style({
    //aspectRatio: '1/1',
    border: `2px solid ${T.color.green}`,
    display: 'flex',
    marginInline: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: 60,
    padding: 10,
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    //maxInlineSize: 'max( 250px, 20vw )',
    // blockSize: '329px',
    containerName: boxContainerQuery,
    containerType: 'inline-size',
    minInlineSize: '100%',
  }),
  icon: style({
    aspectRatio: 1,
    marginTop: -30,
    borderRadius: '50%',
    backgroundColor: T.color.azure,
    boxShadow: '0 0 10px rgba(0,0,0,.1)',
    minInlineSize: 70,
    minBlockSize: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  titre: style({
    fontSize: fluid(19, 32),
    fontFamily: T.fontFamily.exo,
    textDecoration: 'underline',
    textDecorationColor: T.color.green,
    marginBlock: T.space.xs,
    '@container': {
      [`${boxContainerQuery} (250px<width)`]: {
        fontSize: 32,
        letterSpacing: 1.7,
      },
    },
  }),
  text: style({
    textAlign: 'center',
    color: 'light-dark(#666666, red)',
    marginBlock: '1px 4px',
    fontSize: fluid(16.6, 18),
    minInlineSize: '100%',
    '@media': {
      [media.lg]: {
        lineHeight: 1.2,
      },
    },
    '@container': {
      [`${boxContainerQuery} (250px<width)`]: {
        fontSize: fluid(17, 19),
      },
    },
  }),
}

