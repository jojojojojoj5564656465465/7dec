import * as T from '@theme'
// styles.css
import { keyframes, style, styleVariants } from '@vanilla-extract/css'

import { fluid, globalStyleTag } from '@/styles/utils'

export const icon = style({
	width: 36,
	display: 'inline-block',
	aspectRatio: '1',
})

export const buttonMobile = styleVariants({
	wrapper: {
		backgroundColor: T.color.white,
		aspectRatio: '1',
		color: 'yellow',
		display: 'grid',
		placeItems: 'center',
		order: 2,
		margin: 5,
		minBlockSize: 36,
		isolation: 'isolate',
		'@media': {
			[T.media.lg]: {
				display: 'none',
				order: 3,
			},
		},
	},
	svg: {
		display: 'block',
		height: 36,
		width: 36,
		color: T.color.black,
		zIndex: 1000,
		strokeWidth: 2,
	},
})

export const one = styleVariants({
	wrapper: [
		T.container.full,
		{
			cursor: 'pointer',
			backgroundColor: T.color.black,
			height: 'auto',
			minBlockSize: '70px',
			display: 'grid',
			gridTemplateColumns: '1fr min-content',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginInline: fluid(10, 50),
			'@media': {
				[T.media.lg]: {
					gridTemplateColumns: 'min-content 0 min-content',
				},
			},
		},
	],
	logo: {
		color: T.color.white,
		marginInline: 20,
		fontFamily: T.fontFamily.dancingScript,
		order: 1,
		fontSize: T.fontSize['2xl'],
		display: 'flex',
		alignItems: 'center',
		gap: 10,
	},
})

const menuBase = style({
	display: 'flex',
	flexDirection: 'column',
	gap: 60,
	backgroundColor: T.color.black,
	justifyContent: 'center',
	order: 3,
	gridColumn: 'span 2',
	overflow: 'hidden',
	transition: 'max-height 0.3s ease-out, opacity 0.2s ease-out',
	color: T.color.white,
	'@media': {
		[T.media.lg]: {
			justifyContent: 'end',
			flexDirection: 'row',
			order: 2,
			marginInlineStart: 'auto',
			maxHeight: 'none !important',
			opacity: '1 !important',
		},
	},
})

const openAnimation = keyframes({
	'0%': { display: 'none' },
	'100%': { display: 'flex' },
})

export const menuState = styleVariants({
	open: [
		menuBase,
		{
			maxBlockSize: '500px',
			opacity: 1,
			color: `${T.color.white} !important`,
		},
	],
	close: [
		menuBase,
		{
			maxHeight: 0,
			opacity: 0,
			'@media': {
				[T.media.lg]: {
					display: 'flex',
				},
			},
		},
	],
	link: {
		color: T.color.white,
		fontSize: T.fontSize.md,
		textAlign: 'center',
	},
})

globalStyleTag(menuState.close, {
	span: {
		textAlign: 'center',
		marginBlock: 'center',
		fontSize: T.fontSize.lg,
	},
})
