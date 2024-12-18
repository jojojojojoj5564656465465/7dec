import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css'
import { media, theme } from '@theme'

const baseButton = style({
  borderRadius: theme.radius[100],

  margin: 5,
  fontSize: theme.fontSize.md,
  color: theme.color.white,
  display: 'inline-flex',
})

export const button = styleVariants({
  green: [
    baseButton,
    {
      backgroundColor: theme.color.green,
      selectors: {
        '&:hover': {
          backgroundColor: theme.color.red,
        },
      },
    },
  ],
  red: [
    baseButton,
    {
      backgroundColor: theme.color.red,
      selectors: {
        '&:hover': {
          backgroundColor: theme.color.green,
        },
      },
    },
  ],
})
export const bg = style({
  backgroundColor: theme.color.background,
})

const baseText = style({
  fontSize: theme.fontSize.base,
})

export const textV = styleVariants({
  a: [
    baseText,
    {
      fontFamily: theme.fontFamily.nunito,
      backgroundColor: theme.color.azure,
    },
  ],
  b: [
    baseText,
    {
      fontFamily: theme.fontFamily.exo,
      backgroundColor: theme.color.green,
    },
  ],
  c: [
    baseText,
    {
      fontFamily: theme.fontFamily.dancingScript,
      bgColor: theme.color.red,
    },
  ],
  d: [
    baseText,
    {
      fontFamily: theme.fontFamily.dancingScript,
      bgColor: 'yellow',
    },
  ],
})

