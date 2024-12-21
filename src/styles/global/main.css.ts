import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import { media, theme } from '@theme'
import { fluid } from '../utils'



const baseButton = style({
  borderRadius: theme.radius[200],
  paddingInline: fluid(10, 20),
  fontSize: theme.fontSize.md,
  color: theme.color.green,
  cursor: 'pointer',
})

export const button = styleVariants({
  green: [
    baseButton,
    {
      backgroundColor: theme.color.green,
    },
  ],
  red: [
    baseButton,
    {
      backgroundColor: theme.color.red,
    },
  ],
})
export const containerSize = {
  default: '60rem',
  small: '60rem',
  medium: '72rem',
  large: '90rem',
  full: '100%',
}
const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
  return `min(calc(100% - clamp(0.75rem, 0.41181818181818186rem + 1.690909090909091vw, 1.68rem) * 2), ${containerSize[x]})`
}

const defaultContainer = style({
  marginInline: 'auto',
  position: 'relative',
  boxSizing: 'border-box',
})

export const container = styleVariants({
  default: [defaultContainer, {}],
  small: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('small'),
    },
  ],
  medium: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('medium'),
    },
  ],
  large: [
    defaultContainer,
    {
      maxInlineSize: maxInlineSizeFn('large'),
    },
  ],
  full: [defaultContainer, { maxInlineSize: 'none' }],
})

globalStyle(`${container.default} > *`, {
  marginInline: 'auto',
  maxInlineSize: maxInlineSizeFn('default'),
})
globalStyle(`${container.default} > ${container.medium}`, {
  maxInlineSize: maxInlineSizeFn('medium'),
})
globalStyle(`${container.default} > ${container.large}`, {
  maxInlineSize: maxInlineSizeFn('large'),
})
globalStyle(`${container.default} > ${container.full}`, {
  maxInlineSize: maxInlineSizeFn('full'),
})