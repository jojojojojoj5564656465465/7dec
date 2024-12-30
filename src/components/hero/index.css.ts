import { createContainer, globalStyle, style } from '@vanilla-extract/css'
import { theme, media } from '@theme'
import { container } from 'src/styles/global/main.css.ts'
import 'src/styles/global/globalStyle.css'
import { optimalFontSizePerTag } from '@/styles/tokens/font'

import FontSizeGenerator from '@styles/tokens/font/FontSizeGenerator'
import { fluid } from '@/styles/utils'

//const font = new FontSizeGenerator(380, 2100, 16)

export const contentHeroSpace = style([
  container.small,
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: theme.space.md,
    marginInline: 'auto',
  },
])

export const firstName = style({
  color: theme.color.green,
  letterSpacing: 1.19,
  fontSize: fluid(42, 60),
  fontFamily: theme.fontFamily.nunito,
})

export const lastName = style({
  color: '#FFC44B',
})
export const subTitle = style({
  fontSize: fluid(20, 42),
  fontFamily: theme.fontFamily.exo,
  textDecoration: 'underline',
  textDecorationColor: theme.color.green,
})
export const text = style({
  lineHeight: 1.7,
  color: 'black',
  marginBlock: theme.space.sm,
  fontSize: fluid(16.6, 22),
  '@media': {
    [media.lg]: {
      lineHeight: 2,
    },
  },
})

export const slogan = style({
  color: 'red',
  fontSize: fluid(19, 25),
  textAlign: 'center',
  '@media': {
    [media.md]: {
      textAlign: 'left',
    },
  },
})

export const image = style({
  aspectRatio: '1/1',
  backgroundColor: 'oklch(70% 0.1 346)',
  minInlineSize: 'min(100%,250px)',
  minBlockSize: 'min(100%,250px)',
})
export const aboutMeList = style([
  container.small,
  {
    listStyle: 'none',
    margin: '20 auto auto 20',
  },
])
globalStyle(`${aboutMeList} li:before`, {
  content: '✓',
  color: theme.color.green,
})

/** MARK: AVANTAGE */
export const Avantages = style([
  container.large,
  {
    
    zIndex: 10,
    marginInline: 'auto',
    paddingBlock: theme.space.md,
    paddingInline: theme.space.sm,
    backgroundColor: theme.color.background,
    position: 'relative',
    display: 'grid',
    gap: theme.space.sm,
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
    border: `2px solid ${theme.color.green}`,
    display: 'flex',
    marginInline: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: theme.radius[200],
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
    backgroundColor: theme.color.azure,
    boxShadow: '0 0 10px rgba(0,0,0,.1)',
    minInlineSize: 70,
    minBlockSize: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  titre: style({
    fontSize: fluid(19, 32),
    fontFamily: theme.fontFamily.exo,
    textDecoration: 'underline',
    textDecorationColor: theme.color.green,
    marginBlock: theme.space.xs,
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

