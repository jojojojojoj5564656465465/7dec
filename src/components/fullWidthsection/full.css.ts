import { media } from '@theme'
import { createVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

const wrapperMaxWidth = createVar({
  syntax: '<length> | <percentage>',
  inherits: false,
  initialValue: '50rem'
})
const wrapperPaddingInline = createVar({
  syntax: '<length> | <percentage>',
  inherits: false,
  initialValue: '1rem'
})

const sectionPaddingBlock = createVar({
  syntax: '<length> | <percentage>',
  inherits: false,
  initialValue: '3rem'
})

export const wrapper = style({
  paddingInline: wrapperPaddingInline,
  marginInline: 'auto',
  maxInlineSize: wrapperMaxWidth
})

export const content = style({
  '@media': {
    [media.md]: {}
  }
})

export const fullWidthSplitScreen = style({
  paddingBlock: '0',
  '@media': {
    '(min-width: 600px)': {
      display: 'grid',
      gridTemplateColumns: `minmax(${wrapperPaddingInline},1fr) minmax(0,${calc.divide(wrapperPaddingInline, 2)}) minmax(0,${calc.divide(wrapperPaddingInline, 2)}) minmax(${wrapperPaddingInline},1fr)`,
      position: 'relative'
    }
  }
})
export const img = style({
  selectors: {
    [`${fullWidthSplitScreen} > :not(&)`]: {
      paddingBlock: sectionPaddingBlock,
      paddingInline: wrapperPaddingInline
    }
  },
  '@media': {
    [media.md]: {
      selectors: {
        [`${fullWidthSplitScreen} > :not(&)`]: {
          display: 'grid',
          alignContent: 'center',
          justifyItems: 'start'
        },
        [`${fullWidthSplitScreen} > &`]: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        },
        [`${fullWidthSplitScreen} > &:first-child`]: {
          gridColumn: '1 / 3'
        },
        [`${fullWidthSplitScreen} > &:last-child`]: {
          gridColumn: '3 / -1'
        }
      }
    }
  }
})
