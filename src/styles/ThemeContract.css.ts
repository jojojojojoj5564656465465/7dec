import { createThemeContract, style } from '@vanilla-extract/css'

import tokens from './tokens/index'
import { light } from 'src/styles/tokens/color/colors.ts'

export const theme = createThemeContract({
  fontSize: tokens.fontSizes,
  color: light,
  fontFamily: tokens.fontFamilies,
  size: tokens.sizes,
  space: tokens.spaces,
  radius: tokens.radii,
})
export const media = {
  mobile: {
    portrait:
      'screen and (orientation: portrait) and (max-width: 26.875em) and (pointer: coarse)',
    landscape:
      'screen and (orientation: landscape) and (max-height: 26.875em) and (pointer: coarse)',
  },
  tablet: {
    portrait:
      'screen and (orientation: portrait) and (27em <= width <= 52.02em) and (pointer: coarse)',
    landscape:
      'screen and (orientation: landscape) and (27em <= height <= 51em) and (pointer: coarse)',
  },
  md: 'screen and (hover: hover) and (min-width: 51em)',
  lg: 'screen and (min-width: 64em)',
  xl: 'screen and (min-width: 80em)',
  '2xl': 'screen and (min-width: 110em)',
  motionSafe: 'screen and (prefers-reduced-motion: no-preference)',
  retina: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)',
  dark: 'screen and (prefers-color-scheme: dark)',
} as const


type hoverProps = {
  backgroundColor: string
  color?: string | 'inherit'
}

export const hover = (props: hoverProps) => {
  return style({
    ':active': {
      backgroundColor: props.backgroundColor,
      color: props.color ?? 'inherit',
    },
    ':focus': {
      outline: `4px solid ${props.backgroundColor}`,
      outlineOffset: '1px',
      color: props.color ?? 'inherit',
    },
    '@media': {
      [media.md]: {
        ':hover': {
          backgroundColor: props.backgroundColor,
          color: props.color ?? 'inherit',
        },
      },
    },
  })
}
