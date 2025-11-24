import { component$ } from '@builder.io/qwik'
import { ExpertiseStyle as s } from './Tarif.css.ts'

export const Expertise = component$(() => {
	return (
		<section class={s.wrapper}>
			<h3 class={s.title}>Plus de 10 ans d'expertise</h3>
			<div class={s.subtitle}>Photographe certifié Google depuis 2013</div>
			<p>Des centaines de clients satisfaits à Paris et en Île-de-France</p>
			<div class={s.stats}>
				<div class={s.statItem}>Restaurants</div>
				<div class={s.statItem}>Hôtels</div>
				<div class={s.statItem}>Boutiques</div>
				<div class={s.statItem}>Salles de sport</div>
				<div class={s.statItem}>Cabinets médicaux</div>
			</div>
		</section>
	)
})
