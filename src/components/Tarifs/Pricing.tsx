import { component$ } from '@builder.io/qwik'
import { PricingStyle as s } from './Tarif.css.ts'

export const Pricing = component$(() => {
	return (
		<section class={s.wrapper}>
			<div class={s.card}>
				<div class={s.header}>
					<h3>Nos tarifs</h3>
					<div class={s.price}>À partir de 450€</div>
					<div class={s.subPrice}>Paiement unique - Sans frais cachés</div>
				</div>
				<div class={s.features}>
					<div class={s.featureItem}>
						<span class={s.featureIcon}>📸</span>
						<div>
							<span class={s.featureTitle}>Shooting professionnel</span>
							<span class={s.featureDesc}>Prise de vue réalisée avec du matériel certifié Google par un photographe diplômé depuis 2013</span>
						</div>
					</div>
					<div class={s.featureItem}>
						<span class={s.featureIcon}>⚡</span>
						<div>
							<span class={s.featureTitle}>Publication rapide</span>
							<span class={s.featureDesc}>Votre visite virtuelle est publiée sur Google Maps et votre fiche d'établissement sous 1 semaine maximum</span>
						</div>
					</div>
					<div class={s.featureItem}>
						<span class={s.featureIcon}>🎯</span>
						<div>
							<span class={s.featureTitle}>Couverture complète</span>
							<span class={s.featureDesc}>Intervention dans tout Paris et l'Île-de-France pour tous types d'établissements</span>
						</div>
					</div>
					<div class={s.featureItem}>
						<span class={s.featureIcon}>✨</span>
						<div>
							<span class={s.featureTitle}>Qualité garantie</span>
							<span class={s.featureDesc}>Images haute définition, assemblage professionnel et intégration optimisée sur Google</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
})
