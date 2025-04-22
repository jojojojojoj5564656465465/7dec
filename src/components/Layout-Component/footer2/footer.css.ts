import { style } from '@vanilla-extract/css'
import { color, container, fontFamily, fontSize, media } from '@theme'
import { fluid } from '@styles/utils'

export const wrapper = style([
	container.full,
	{
		display: 'grid',
		gap: '3rem',
		borderTopColor: 'oklch(66% 0 313.41)',
		borderTopWidth: fluid(6, 10),
		borderTopStyle: 'double',
		alignItems: 'center',
		justifyContent: 'center',
		'@media': {
			[media.md]: {
				justifyContent: 'stretch',
				gridTemplateColumns: 'repeat(4,1fr)',
			},
		},
	},
])

export const slogan = style({
	gridColumn: 'span 2',
	fontSize: fontSize['3xl'],
	fontFamily: fontFamily.dancingScript,
	color: color.orange,
})

export const itemWrapper = style([
	{
		display: 'flex',
		gap: '0.5rem',
		color: color.black,
		cursor: 'pointer',
	},
])

export const item = style({
	backgroundColor: color.green,
	padding: 5,
	selectors: {
		[`${itemWrapper}:hover > &`]: {
			backgroundColor: color.azure,
		},
	},
})

export const text = style({
	verticalAlign: 'middle',
})
