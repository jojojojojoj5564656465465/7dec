import { container } from '@/styles/utils'
import { createContainer, style, styleVariants } from '@vanilla-extract/css'
import * as T from '@theme'
import {fluid} from '@/styles/utils'
const iconShow = createContainer()

export const Tarif = styleVariants({
	wrapper: [
		container.small,
		{
			positionAnchor: '--progi',
			display: 'grid',
			gridTemplateRows: 'auto 1fr auto',
			gap: '2rem',
			color: '#333',
			backgroundColor: 'light-dark(oklch(93.32% 0 0),oklch(28.04% 0 0))',
			padding: '2rem',
			borderRadius: '15px',
			maxInlineSize: '60rem',
			boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
			transition: 'box-shadow 0.3s ease',
			':hover': {
				boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
			},
		},
	],
	zeroBase: {
		fontSize: T.fontSize['4xl'],
		fontWeight: 'bold',
		textAlign: 'center',

		textShadow: '1px 1px 9px rgba(0, 0, 0, 0.2)',
		marginBottom: '1rem',
		position: 'relative',
		'::after': {
			content: ' TTC',
			fontSize: '0.45em',
			position: 'absolute',
		},
	},
	zeroActive: {
		color: 'oklch(72.06% 0.1692 54)',
		transition: 'color 0.3s ease',
	},
	zeroEffect: {
		color: 'oklch(91.47% 0.1692 99.53)',
		textShadow: '1px 1px 49px oklch(72.06% 0.1692 54 / 40%)',
		transition: 'text-shadow 0.3s ease',
	},
	ul: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))',
		gap: '1rem',
		listStyle: 'none',
		padding: 0,
		margin: 0,
		backgroundColor: '#fff',
		border: '2px solid #ddd',
		borderRadius: '10px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
	},
	item: {
		containerName: iconShow,
		containerType: 'inline-size',
		color: '#1e88e5',
		fontWeight: 'bold',
		textAlign: 'center',
		padding: '1rem',
		cursor: 'pointer',
		transition: 'background-color 0.3s ease, transform 0.3s ease',
		':hover': {
			backgroundColor: '#e0e0e0',
			transform: 'scale(1.05)',
		},
		':focus-visible': {
			outline: '2px solid #1e88e5',
			outlineOffset: '2px',
		},
	},
	itemIcon: {
		marginLeft: 'min(0.5rem,3vw)',
		'@container': {
			[`${iconShow} (width < 150px)`]: {
				display: 'none',
			},
		},
	},
	content: {
		display: 'grid',
		gridTemplateColumns: '1fr',

		alignItems: 'center',
		backgroundColor: '#fff',
		padding: '1.5rem 1rem',
		borderRadius: '10px',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
		justifyContent: 'space-between',

		'@media': {
			[T.media.md]: {
				gridTemplateColumns: 'auto 1fr auto',
				gap: '0.81rem',
			},
		},
	},

	contentUl: {
		backgroundColor: 'undefined',

		display: 'flex',
		overflowX: 'scroll',
		width: '100%',
		gap: '0.5rem',
		scrollSnapType: 'x mandatory', // Ajout de scrollSnapType pour un défilement fluide
		scrollbarWidth: 'none', // Masque la barre de défilement
		msOverflowStyle: 'none', // Pour IE/Edge
		'&::-webkit-scrollbar': {
			display: 'none', // Pour Chrome/Safari
		},
		'@media': {
			[T.media.md]: {
				// display: 'inline-block',
			},
		},
	},
	contentUlText: {
		minInlineSize: 'calc(100% + 1rem)',
		paddingInline: '1.5rem',
		backgroundColor: '#fafafa',
		border: '1px solid #ddd',
		borderRadius: '8px',
		boxSizing: 'border-box',
		whiteSpace: 'pre-line',
		lineHeight: '1.6',
		color: '#444',
		scrollSnapAlign: 'start', // Aligne chaque élément au début du conteneur
		transition: 'transform 0.3s ease',
	},
	contentArrow: {
		display: 'none',
		'@media': {
			[T.media.md]: {
				display: 'inline-block',
			},
		},
		appearance: 'none',
		background: T.color.red,
		color: '#fff',
		padding: '0.5rem 0.75rem',
		borderRadius: '50%',
		border: 'none',
		cursor: 'pointer',
		transition: 'background-color 0.3s ease, transform 0.3s ease',
		':disabled': {
			opacity: 0.5,
			cursor: 'not-allowed',
			pointerEvents: 'none',
		},
		':hover': {
			backgroundColor: '#e53935',
			transform: 'scale(1.1)',
		},
		':focus-visible': {
			outline: '2px solid #1e88e5',
			outlineOffset: '2px',
		},
	},
})

export const WrapStyle = styleVariants({
	WRAPPER: {
		display: 'grid',
		gridTemplateRows: '1fr',
		'@media': {
			[T.media.md]: {
				gridTemplateColumns: 'repeat(12,1fr)',
				gridTemplateRows: '80px auto 80px',
				gap: '1rem',
			},
		},
	},
	orange: {
		visibility: 'hidden',
		'@media': {
			[T.media.md]: {
				backgroundColor: T.color.orange,
				backgroundImage: 'url(/images/happyGuy.jpg)',
				backgroundPositionX: '-20rem',
				backgroundBlendMode: 'multiply',
				backgroundRepeat: 'no-repeat',
				visibility: 'visible',
				gridRow: '1 / 4',
				gridColumn: '1 / 8',
			},
		},
	},
	zero: {
		gridRow: '1 / 3',
		gridColumn: '1 / 13',
		'@media': {
			[T.media.md]: {
				gridRow: '2 / 3',
				gridColumn: '3 / 10',
			},
		},
	},
})

export const HeroStyle = styleVariants({
	wrapper: [
		container.medium,
		{
			textAlign: 'center',
			paddingBlock: '4rem',
			display: 'grid',
			gap: '1.5rem',
		},
	],
	title: {
		fontSize: T.fontSize['4xl'],
		fontFamily: T.fontFamily.dancingScript,
		color: T.color.orange,
		marginBottom: '1rem',
	},
	subtitle: {
		fontSize: T.fontSize['2xl'],
		fontFamily: T.fontFamily.exo,
		color: T.color.black,
		textTransform: 'uppercase',
		letterSpacing: '2px',
		marginBottom: '1rem',
	},
	description: {
		fontSize: T.fontSize.lg,
		maxWidth: '800px',
		marginInline: 'auto',
		color: '#555',
		lineHeight: 1.6,
	},
})

export const PricingStyle = styleVariants({
	wrapper: [
		container.small,
		{
			paddingBlock: '4rem',
			display: 'grid',
			gap: '2rem',
			textAlign: 'center',
		},
	],
	card: {
		backgroundColor: T.color.white,
		borderRadius: '20px',
		padding: '2.5rem',
		boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
		border: `2px solid ${T.color.orange}`,
		display: 'grid',
		gap: '2rem',
		position: 'relative',
		overflow: 'hidden',
		transition: 'transform 0.3s ease',
		':hover': {
			transform: 'translateY(-5px)',
		},
	},
	header: {
		display: 'grid',
		gap: '0.5rem',
	},
	price: {
		fontSize: T.fontSize['4xl'],
		color: T.color.green,
		fontWeight: 'bold',
		fontFamily: T.fontFamily.exo,
	},
	subPrice: {
		fontSize: T.fontSize.sm,
		color: '#666',
		fontStyle: 'italic',
	},
	features: {
		display: 'grid',
		gap: '1.5rem',
		textAlign: 'left',
		marginBlock: '1rem',
	},
	featureItem: {
		display: 'grid',
		gridTemplateColumns: 'auto 1fr',
		gap: '1rem',
		alignItems: 'start',
	},
	featureIcon: {
		fontSize: '1.5rem',
	},
	featureTitle: {
		fontWeight: 'bold',
		color: T.color.black,
		marginBottom: '0.25rem',
		display: 'block',
	},
	featureDesc: {
		fontSize: '0.9rem',
		color: '#555',
	},
})

export const BenefitsStyle = styleVariants({
	wrapper: [
		container.medium,
		{
			//maxInlineSize: '70rem',
			paddingBlock: '4rem',
			marginInline: 'auto',
		},
	],
	title: {
		fontSize: T.fontSize['3xl'],
		textAlign: 'center',
		fontFamily: T.fontFamily.exo,
		color: T.color.black,
		marginBottom: '2rem',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		gap: '2rem',
		overflowX: "scroll",
	},

	item: {
		backgroundColor: '#f9f9f9',
		padding: '2rem',
		borderRadius: '15px',
		display: 'inline',
	
		transition: 'background-color 0.3s ease',
		':hover': {
			backgroundColor: '#f0f0f0',
		},
	},
	check: {
		float: 'left',
		fontSize: fluid(25, 35),
		color: T.color.green,
		fontWeight: 'bold',
		
		marginRight: '0.5rem',
		marginTop: '0.2rem',
	},
	text: {
		fontSize: T.fontSize.base,
		color: '#444',
		lineHeight: 1.5,
	},
})

export const ExpertiseStyle = styleVariants({
	wrapper: [
		container.medium,
		{
			paddingBlock: '4rem',
			textAlign: 'center',
			backgroundColor: '#fafafa',
			borderRadius: '20px',
			marginBlock: '2rem',
		},
	],
	title: {
		fontSize: T.fontSize['3xl'],
		fontFamily: T.fontFamily.dancingScript,
		color: T.color.orange,
		marginBottom: '1rem',
	},
	subtitle: {
		fontSize: T.fontSize.xl,
		fontWeight: 'bold',
		color: T.color.black,
		marginBottom: '2rem',
	},
	stats: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: '2rem',
		marginTop: '2rem',
	},
	statItem: {
		backgroundColor: T.color.white,
		padding: '1rem 2rem',
		borderRadius: '10px',
		boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
		fontWeight: 'bold',
		color: '#555',
	},
})

export const CtaStyle = styleVariants({
	wrapper: [
		container.small,
		{
			paddingBlock: '4rem',
			textAlign: 'center',
			display: 'grid',
			gap: '2rem',
			justifyItems: 'center',
		},
	],
	title: {
		fontSize: T.fontSize['3xl'],
		fontFamily: T.fontFamily.exo,
		color: T.color.black,
	},
	button: {
		backgroundColor: T.color.orange,
		color: T.color.white,
		padding: '1rem 2.5rem',
		fontSize: T.fontSize.xl,
		borderRadius: '50px',
		border: 'none',
		cursor: 'pointer',
		fontWeight: 'bold',
		boxShadow: '0 4px 15px rgba(255, 174, 0, 0.4)',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		textDecoration: 'none',
		display: 'inline-block',
		':hover': {
			transform: 'scale(1.05)',
			boxShadow: '0 6px 20px rgba(255, 174, 0, 0.6)',
		},
	},
	subtext: {
		fontSize: T.fontSize.base,
		color: '#666',
	},
})
