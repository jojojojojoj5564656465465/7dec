import { globalStyle } from '@vanilla-extract/css'
import { globalLayer } from '@vanilla-extract/css'
import * as v from 'valibot'
import * as T from './theme.css'
globalLayer('reset')
globalLayer('base')
globalLayer('custom')

globalStyle('*, *::before, *::after', {
	'@layer': {
		reset: {
			boxSizing: 'border-box',
			margin: 0,
		},
	},
})

globalStyle('*', {
	'@layer': {
		reset: {
			margin: 0,
			maxInlineSize: '100dvw',
			boxSizing: 'border-box',
		},
	},
})

globalStyle('html, body', {
	'@layer': {
		reset: {
			blockSize: '100%',
			overflowInline: 'hidden',
			boxSizing: 'border-box',
			lineHeight: 1.5,
			WebkitFontSmoothing: 'antialiased',
			scrollBehavior: 'smooth',
		},
	},
})

globalStyle('img, svg', {
	'@layer': {
		reset: {
			verticalAlign: 'middle',
		},
	},
})
globalStyle('input, button, textarea, select', {
	'@layer': {
		reset: {
			font: 'inherit',
			all: 'unset',
		},
	},
})
globalStyle(':where(img, picture, video, canvas, svg)', {
	'@layer': {
		reset: {
			scrollBehavior: 'smooth',
			display: 'block',
			maxInlineSize: '100%',
		},
	},
})

globalStyle(':root', {
	'@layer': {
		reset: {
			colorScheme: 'light dark',
			isolation: 'isolate',
		},
	},
})

globalStyle('html, body *', {
	'@layer': {
		reset: {
			boxSizing: 'border-box',
		},
	},
})

globalStyle('ul li', {
	'@layer': {
		reset: {
			listStyleType: 'none',
		},
	},
})

globalStyle('img', {
	'@layer': {
		reset: {
			objectFit: 'cover',
		},
	},
})

globalStyle('a', {
	'@layer': {
		reset: {
			textDecoration: 'none',
		},
	},
})

globalStyle('a:hover', {
	'@layer': {
		reset: {
			textDecoration: 'underline',
		},
	},
})

globalStyle(':where(h1, h2, h3, h4, h5, h6, p)', {
	margin: 0,
})

/**
 * Font size reset
 * MARK: FONTS
 * @type {Record<string, string>}
 */
const ValidObj = v.object({
	fontSize: v.string(),
	color: v.string(),
	fontFamily: v.optional(v.string()),
})

const responsiveFontSize: Record<string, v.InferInput<typeof ValidObj>> = {
	h1: {
		fontSize: 'clamp(2.5rem, 5vw, 4rem)',
		color: T.color.azure,
		fontFamily: T.fontFamily.dancingScript,
	},
	h2: {
		fontSize: 'clamp(2rem, 4vw, 3rem)',
		color: T.color.green,
		fontFamily: T.fontFamily.dancingScript,
	},
	h3: {
		fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
		color: T.color.green,
		fontFamily: T.fontFamily.exo,
	},
	h4: {
		fontSize: 'clamp(1.5rem, 3vw, 2rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.exo,
	},
	h5: {
		fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.exo,
	},
	h6: {
		fontSize: 'clamp(1rem, 2vw, 1.5rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.exo,
	},
	p: {
		fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.numito,
	},
	span: {
		fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.numito,
	},
	li: {
		fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
		color: T.color.black,
		fontFamily: T.fontFamily.numito,
	},
} as const

for (const [key, value] of Object.entries(responsiveFontSize)) {
	const { color, fontSize, fontFamily } = v.parse(ValidObj, value)
	globalStyle(key, {
		'@layer': {
			custom: {
				fontSize,
				color,
				fontFamily,
			},
		},
	})
}
