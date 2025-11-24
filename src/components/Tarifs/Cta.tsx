import { component$ } from '@builder.io/qwik'
import { CtaStyle as s } from './Tarif.css.ts'

const list = ["Réponse sous 24h", 'Devis personnalisé', 'Sans engagement','Email', 'Téléphone']
export const Cta = component$(() => {
	return (
		<section class={s.wrapper}>
			<h3 class={s.title}>Demandez votre devis gratuit</h3>
			<a href="/contact" class={s.button}>
				Obtenir un devis
			</a>
			<p class={s.subtext}>{list.join(" • ")}</p>
		</section>
	)
})
