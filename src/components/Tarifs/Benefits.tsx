import { component$ } from '@builder.io/qwik'
import { BenefitsStyle as s } from './Tarif.css.ts'

export const Benefits = component$(() => {
	const benefits = [
		'Aucun coût au clic - Contrairement aux publicités, votre visite virtuelle est visible gratuitement par tous vos visiteurs',
		"Pas d'abonnement - Un seul paiement pour une visibilité permanente sur Google",
		'Meilleur référencement - Améliorez votre position dans les résultats de recherche Google',
		'Confiance accrue - 67% des clients préfèrent les établissements avec visite virtuelle',
		"Accessible 24h/24 - Vos clients découvrent votre espace à tout moment, où qu'ils soient",
		"Compatible tous appareils - Ordinateur, smartphone, tablette : l'expérience est optimale partout",
	]

	return (
		<section class={s.wrapper}>
			<h3 class={s.title}>Les avantages d'une visite virtuelle Google</h3>
			<div class={s.grid}>
				{benefits.map((benefit, i) => (
					<div key={i} class={s.item}>
						<p class={s.text}>{benefit}</p>
					</div>
				))}
			</div>
		</section>
	)
})
