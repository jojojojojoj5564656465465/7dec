import { container, fluid, media } from '@/styles/utils'
import * as T from '@theme'
import { globalStyle, styleVariants } from '@vanilla-extract/css'

const article = styleVariants({
	section: [
		container.xxl,
		{
			display: 'grid',
			justifyContent: 'center',
			alignItems: 'start',
			maxInlineSize: '80rem',
			paddingInline: fluid(10, 30),
			'@media': {
				[media['2xl']]: {
					// maxInlineSize: '120rem',
					maxInlineSize: '95%',
					gridTemplateColumns: '1fr 1fr',
				},
			},
		},
	],
	wrapperIframe: {
		'@media': {
			[media.lg]: {
				minInlineSize: '100%',
				position: 'sticky',
				top: 20,
			},
		},
	},
	Iframe: {
		border: '0px',
		width: '100%',

		marginBlockStart: 20,

		// aspectRatio: '16/9',
		'@media': {
			[media.mobile.portrait]: {
				width: '100sdw',
				height: '100sdh',
				aspectRatio: '9/16',
			},
			[media.mobile.landscape]: {
				minInlineSize: '99%',
				aspectRatio: '16/8',
			},
			[media.md]: {
				aspectRatio: '16/9',
			},
			[media.tablet.portrait]: {
				aspectRatio: '16/9',
			},
			[media.lg]: {
				aspectRatio: '16/9',
			},
		},
	},
	tags: {
		display: 'flex',
		gap: 10,
		flexWrap: 'wrap',
		marginBlock: 20,
		justifyContent: 'end',
	},
	content: {
		maxInlineSize: 800,
		order: 0,
		listStyleType: 'circle',
		'@media': {
			[media['2xl']]: {
				maxInlineSize: undefined,
			},
		},
	},
	scrollToTop: {
		position: 'static',
		backgroundColor: T.color.black,
		padding: '0.5rem 1rem',
		color: 'black',
		borderRadius: 20,
		cursor: 'pointer',
		opacity: 0.5,
		display: 'none',
		visibility: 'hidden',
		'@media': {
			[media.md]: {
				display: 'flex',
				opacity: 0.8,
				padding: '1.5rem 2rem',
				visibility: 'initial',
				marginInline: 'auto',
				':hover': {
					backgroundColor: 'orange',
					fontWeight: 'bold',
				},
			},
			[media['2xl']]: {
				borderRadius: 10,
				order: 4,
			},
		},
	},
})
globalStyle(`${article.content} ul li`, {
	listStyleType: 'circle',
})
globalStyle(`${article.tags} p`, {
	border: `0.10rem solid ${T.color.black}`,
	padding: '0.3rem 0.6rem',
	borderRadius: 30,
	textTransform: 'capitalize',
	'@media': {
		[media.md]: {
			padding: 'min(1rem, 0.3rem + 15%), 2rem',
		},
	},
})

globalStyle(`${article.content} h3`, {
	marginTop: T.space.md,
})

export default article
