import { component$ } from '@builder.io/qwik'
import { HeroStyle as s } from './Tarif.css.ts'

export const Hero = component$(() => {
	return (
		<section class={s.wrapper}>
			<h1 class={s.title}>Visite Virtuelle Google Street View</h1>
			<h2 class={s.subtitle}>Paris & Île-de-France</h2>
			<p class={s.description}>
				Donnez vie à votre établissement en ligne. Offrez à vos clients une immersion totale dans votre espace grâce à la visite virtuelle Google Street View certifiée. Augmentez votre visibilité et vos conversions dès aujourd'hui.
			</p>
		</section>
	)
})
