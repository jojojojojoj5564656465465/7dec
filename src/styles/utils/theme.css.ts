import { createGlobalTheme, globalLayer, globalStyle, style, styleVariants } from '@vanilla-extract/css'
import f from './fontFace.css'
import { ld } from './utils'

globalLayer('reset')
globalLayer('base')
globalLayer('custom')

const fontFamily = createGlobalTheme(':root', {
	dancingScript: `${f.dancingScript}, Times, serif`,
	exo: `${f.exo}, Times, serif`,
	numito: `${f.nunito}, Arial, sans-serif`,
})

const color = createGlobalTheme(':root', {
	azure: ld('oklch(58.01% 0.18 259.96)', 'oklch(62.76% 0.18 259.96)'),
	red: ld('#CE5555', 'oklch(64.84% 0.2037 13.339641794332277)'),
	orange: ld('#FFAE00', '#765306'),
	green: ld('oklch(60% 0.1507 154.1)', 'oklch(68.4% 0.1507 154.1)'),
	black: ld('oklch(19.28% 0.0452 243.97)', 'oklch(97.57% 0.0017 247.84)'),
	white: ld('oklch(97.57% 0.0017 247.84)', 'oklch(19.28% 0.0452 243.97)'),
	background: ld('oklch(93.62% 0.0132 168.35)', 'oklch(17.36% 0.0132 168.35)'),
})

const space = {
	xxxs: 'clamp(0.3125em, 0.3125em + 0dvw, 0.3125em)',
	xxs: 'clamp(0.5625em, 0.5408em + 0.1087dvw, 0.625em)',
	xs: 'clamp(0.875em, 0.8533em + 0.1087dvw, 0.9375em)',
	sm: 'clamp(1.125em, 1.0815em + 0.2174dvw, 1.25em)',
	md: 'clamp(1.6875em, 1.6223em + 0.3261dvw, 1.875em)',
	lg: 'clamp(2.25em, 1.6223em + 0.4348dvw, 2.5em)',
	xl: 'clamp(3.375em, 1.6223em + 0.6522dvw, 3.75em)',
	xxl: 'clamp(4.5em, 4.3261em + 0.8696dvw, 5em)',
	xxxl: 'clamp(6.75em, 6.4891em + 1.3043dvw, 7.5em)',
}
Object.freeze(space)

const fontSize = {
	cqi: 'clamp(0.60rem, .65cqi, .9cqi)',
	xs: 'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)',
	sm: 'clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)',
	base: 'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
	md: 'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
	lg: 'clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)',
	xl: 'clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)',
	'2xl': 'clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)',
	'3xl': 'clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)',
	'4xl': 'clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)',
	'5xl': 'clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)',
	'6xl': 'clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)',
}
Object.freeze(fontSize)

const media = {
	mobile: {
		portrait: 'screen and (max-width: 26.875em)',
		landscape: 'screen and (orientation: landscape) and (max-height: 26.875em)',
	},
	tablet: {
		portrait: 'screen and (orientation: portrait) and (27em <= width <= 52.02em)',
		landscape: 'screen and (orientation: landscape) and (27em <= height <= 51em)',
	},
	md: 'screen and (hover: hover) and (min-width: 51em)',
	lg: 'screen and (min-width: 64em)',
	xl: 'screen and (min-width: 80em)',
	'2xl': 'screen and (min-width: 110em)',
	motionSafe: 'screen and (prefers-reduced-motion: no-preference)',
	retina: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)',
	dark: 'screen and (prefers-color-scheme: dark)',
} as const
Object.freeze(media)

/**
 * MARK: Container Rules
 */
const containerSize = {
	default: '60rem',
	small: '60rem',
	medium: '72rem',
	large: '90rem',
	xxl: '120rem',
	full: '100svw',
} as const

// This function takes a parameter x of type keyof typeof containerSize and returns a string
const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
	// Return a string that calculates the minimum of three values:
	// 1. 100% minus twice the value of the parameter x from the containerSize object
	// 2. The value of the parameter x from the containerSize object
	// 3. 130rem
	return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]}, 130rem)`
}

const defaultContainer = style({
	'@layer': {
		custom: {
			marginInline: 'auto',
			position: 'relative',
			boxSizing: 'border-box',
			marginBlockEnd: space.lg,
			'@media': {
				[media.tablet.portrait]: {
					marginBlockEnd: space.md,
				},
			},
		},
	},
})

/**
 * @deprecated
 */
const cos = styleVariants(containerSize, x => [
	defaultContainer,
	{
		maxInlineSize: `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${x}, 130rem)`,
	},
])

const container = styleVariants({
	default: [defaultContainer],
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
	xxl: [
		defaultContainer,
		{
			maxInlineSize: maxInlineSizeFn('xxl'),
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
globalStyle(`${container.default} > ${container.xxl}`, {
	maxInlineSize: maxInlineSizeFn('xxl'),
})
globalStyle(`${container.default} > ${container.full}`, {
	maxInlineSize: maxInlineSizeFn('full'),
})
export { fontFamily, color, fontSize, space, media, container }
