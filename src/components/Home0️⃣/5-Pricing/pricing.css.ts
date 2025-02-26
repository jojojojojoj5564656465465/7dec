import { boxShadowGenerator, fluid, globalStyleTag } from '@/styles/utils'
import * as T from '@theme'
import { container, media } from '@theme'
import {
  createVar,
  globalStyle,
  style,
  styleVariants
} from '@vanilla-extract/css'

export const section = style([
  container.small,
  {
    backgroundColor: T.color.azure,
    border: '4px solid black',
    display: 'grid',
    minBlockSize: 250,
    gridTemplateColumns: '1fr',
    justifyContent: 'center',
    marginBlock: T.space.sm,
    '@media': {
      [T.media.mobile.landscape]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      'screen and (hover: hover) and (min-width: 37em)': {
        minBlockSize: 500,
        gridTemplateColumns: '1fr 15rem'
      },
      [media.md]: {
        marginBlockEnd: T.space.lg,
        minBlockSize: 500,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
    }
  }
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
  justifyContent: 'space-between'
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
      display: 'block'
    },
    '::selection': {
      color: 'green',
      backgroundColor: 'yellow',
      padding: 5
    }
  },
  ul: {
    listStyle: 'none',
    fontFamily: T.fontFamily.numito,
    fontSize: T.fontSize.sm,
    display: 'flex',
    rowGap: T.space.xxs,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'center',
    marginInline: 10
  },
  button: {
    backgroundColor: T.color.black,
    color: T.color.white,
    fontSize: T.fontSize.md,
    maxInlineSize: 300,
    borderRadius: 10,
    padding: `${T.space.xxs} ${T.space.sm}`,
    outline: '1.6px solid white',
    //border: `4px solid ${T.color.black}`,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: T.color.green,
      color: T.color.black,
      //border: '4px solid white',
      //outline: `4px solid ${T.color.black}`,
      boxShadow: boxShadowGenerator(
        [
          'oklch(60.3% 0.148 155.12)',
          'oklch(32.05% 0.148 268.41)',
          'oklch(77.74% 0.148 155.12)',
          'oklch(51.63% 0.148 268.41)',
          'oklch(86.94% 0.148 155.12)',
          'oklch(64.09% 0.148 268.41)'
        ],
        2
      )
    },
    '@media': {
      [T.media.mobile.portrait]: {
        marginBlockStart: 30,
        minInlineSize: '90%'
      }
    }
  }
})

export const customBullet = style({
  listStyleType: 'none',
  padding: '0',
  color: 'green'
})

globalStyleTag(Box1.ul, {
  li: {
    alignItems: 'center',
    placeItems: 'center',
    position: 'relative',
    display: 'flex'
  }
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
      left: 0
    }
  }
})

/**
 * MARK: SECOND DIV
 */

export const image = styleVariants({
  wrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'start',
    alignItems: 'center',
    maxInlineSize: '100%',
    backgroundColor: T.color.white,
    '@media': {
      'screen and (max-width: 460px)': {
        flexDirection: 'column',
        justifyContent: 'end',
        alignItems: 'center'
      }
    }
  },
  verticalText: {
    fontSize: fluid(20, 30),
    display: 'flex',
    flexDirection: 'column',
    writingMode: 'vertical-rl',
    paddingBlockStart: 10,
    marginBlockEnd: 5,
    color: T.color.black,
    '@media': {
      'screen and (max-width: 460px)': {
        display: 'none'
      }
    }
  }
})

globalStyleTag(image.wrapper, {
  svg: {
    stroke: T.color.white,
    fill: T.color.azure
  }
})

export const flexRowDirection = createVar()
/**
 * MARK: CONTACT Button Element
 */
export const element = styleVariants({
  wrapperMain: { display: 'flex', gap: 4, marginBlock: fluid(10, 30) },
  wrapper: {
    display: 'flex',
    border: `2px solid ${T.color.black}`,
    borderRadius: 1,
    flexDirection: flexRowDirection,
  },
  button: {
    backgroundColor: 'white',
    minWidth: 80,
    aspectRation: '1',
    cursor: 'pointer',
    display: 'grid',
    padding: '5px 10px',
    placeItems: 'center',

    ':hover': { backgroundColor: T.color.azure },
  },
  text: {
    color: T.color.black,
    transition: 'all 0.3s ease',
    borderInlineStart: `2px solid ${T.color.black}`,
    disabled: {
      display: 'none',
    },
  },
})
