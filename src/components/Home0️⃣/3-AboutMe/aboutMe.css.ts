import { globalStyleTag } from '@styles/utils'
import { container } from '@theme'
import * as T from '@theme'
import { globalStyle, keyframes, style, styleVariants } from '@vanilla-extract/css'

export const contentHeroSpace = style([
	container.small,
	{
		marginBlockEnd: T.space.xl,
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
		gap: T.space.md,
		marginInline: 'auto',
	},
])
const moveLeft = keyframes({
	'0%': {
		left: '-1.5vw',
		opacity: 0,
	},
	'100%': {
		left: '-4vw',
		opacity: 1,
	},
})
export const image = style({
	position: 'relative',
	aspectRatio: '1',
	backgroundColor: 'light-dark(oklch(70% 0.1 346),oklch(30% 0.1 346))',
	minInlineSize: 'min(100%,250px)',
	minBlockSize: 'min(100%,250px)',
	maxBlockSize: '50svh',
	borderRadius: 30,
	transition: 'box-shadow 1.5s linear, left 4s linear',
	'@media': {
		[T.media.mobile.landscape]: {
			maxBlockSize: '90svh',
		},
		[T.media.md]: {
			boxShadow: `-4vw 0  ${T.color.green}`,
			':hover': {
				boxShadow: '0 0 transparent',
			},
			selectors: {
				'&:hover::after': {
					content: '',
					left: 0,
				},
			},
			'::after': {
				position: 'absolute',
				content: 'Je suis très Sympas !',
				writingMode: 'vertical-lr',
				animation: `${moveLeft} 4s linear`,
				left: '-4vw',
				rotate: '180deg',
				color: T.color.black,
				marginInline: '50px',
				fontSize: T.fontSize.lg,
				fontFamily: T.fontFamily.dancingScript,
			},
		},
	},
})

export const image2 = styleVariants({
	wrapper: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'end',
		maxInlineSize: 500,
		maxBlockSize: 500,

		':after': {
			position: 'absolute',
			content: '',
			backgroundImage: 'url("/favicon.svg")',
			right: 0,
			bottom: 0,
			width: 80,
			height: 80,
			aspectRatio: 1,
		},
		'@media': {
			[T.media.mobile.portrait]: {
				flexDirection: 'column',
			},
			[T.media.mobile.landscape]: {
				':after': {
					right: 15,
					bottom: 25,
					width: 70,
					height: 70,
				},
			},
			[T.media.tablet.portrait]: {
				':after': {
					right: 0,
					bottom: 25,
					width: 100,
					height: 100,
				},
			},
			[T.media.tablet.landscape]: {
				':after': {
					right: 0,
					bottom: 25,
					width: 110,
					height: 110,
				},
			},
			[T.media.md]: {
				':after': {
					right: 0,
					bottom: 20,
					width: 120,
					height: 120,
				},
			},
		},
	},
	image: {
		WebkitClipPath: 'url(#my-clip-path)',
		clipPath: 'url(#my-clip-path)',
		flexBasis: 280,
		flexGrow: 1,
		order: 2,
		flexShrink: 0,
		maxBlockSize: '100%',
		minBlockSize: 50,
		objectFit: 'cover',

		'@media': {
			[T.media.mobile.landscape]: {
				maxBlockSize: '100svh',
			},
		},
	},
	svgNoShow: {
		inset: 0,
		position: 'absolute',
	},
	slogan: {
		backgroundColor: T.color.green,
		order: 1,
		flexGrow: 0,
		flexShrink: 0,
		alignSelf: 'start',
		paddingInline: 10,
		writingMode: 'vertical-lr',
		rotate: '180deg',
		transition: 'background-color 0.5s linear',
		'@media': {
			[T.media.mobile.portrait]: {
				writingMode: 'horizontal-tb',
				rotate: 'initial',
			},
		},
	},
})

globalStyle(`${image2.image}:hover + ${image2.slogan}`, {
	backgroundColor: T.color.azure,
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
	color: T.color.black,
})

export const aboutMeList = style([
	container.small,
	{
		listStyle: 'none',
		margin: '20 auto auto 20',
		'::marker': {
			listStyleType: 'none !important',
		},
	},
])
globalStyle(`${aboutMeList} li:before`, {
	content: '✓',
	color: T.color.green,
})
globalStyle(`${aboutMeList} li::marker`, {
	listStyleType: 'none !important',
})

globalStyleTag(contentHeroSpace, {
	h2: {
		marginInlineEnd: 20,
	},
	h5: {
		textAlign: 'center',
	},
})
