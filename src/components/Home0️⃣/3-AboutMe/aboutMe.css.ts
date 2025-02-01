import { globalStyle, keyframes, style } from '@vanilla-extract/css'
import { container } from '@theme'
import { globalStyleTag } from '@styles/utils'
import * as T from '@theme'

export const contentHeroSpace = style([
  container.small,
  {
    marginBlockEnd: T.space.xl,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: T.space.md,
    marginInline: 'auto'
  }
])
const moveLeft = keyframes({
  '0%': {
    left: '-2vw',
    opacity: 1
  },
  '100%': {
    left: '-4vw',
    opacity: 0
  }
})
export const image = style({
  position: 'relative',
  aspectRatio: '1',
  backgroundColor: 'light-dark(oklch(70% 0.1 346),oklch(30% 0.1 346))',
  minInlineSize: 'min(100%,250px)',
  minBlockSize: 'min(100%,250px)',
  maxBlockSize: '50svh',
  borderRadius: 30,
  transition: 'box-shadow 1.5s linear, left 1.5s linear',
  '@media': {
    [T.media.mobile.landscape]: {
      maxBlockSize: '90svh'
    },
    [T.media.md]: {
      boxShadow: `-5vw 0  ${T.color.green} `,
      ':hover': {
        boxShadow: '0 0 transparent'
      },
      selectors: {
        '&:hover::after': {
          content: '',
          left: 0
        }
      },
      '::after': {
        position: 'absolute',
        content: 'Je suis très Sympas !',
        writingMode: 'vertical-lr',
        left: '-4vw',
        animation: `${moveLeft} 2s linear`,
        rotate: '180deg',
        color: T.color.black,
        marginInline: '50px',
        fontSize: '2em',
        fontFamily: T.fontFamily.dancingScript
      }
    }
  }
})

export const aboutMe = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: T.space.md,
  padding: T.space.md,
  borderRadius: 30,
  backgroundColor: T.color.green,
  color: T.color.black
})

export const aboutMeList = style([
  container.small,
  {
    listStyle: 'none',
    margin: '20 auto auto 20'
  }
])
globalStyle(`${aboutMeList} li:before`, {
  content: '✓',
  color: T.color.green
})

globalStyleTag(contentHeroSpace, {
  h2: {
    marginInlineEnd: 20
  },
  h5: {
    textAlign: 'center'
  }
})
