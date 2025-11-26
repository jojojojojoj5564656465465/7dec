import { component$ } from '@builder.io/qwik'
import { ExpertiseStyle as s } from './Tarif.css.ts'

interface ButtonsProps {
	link: string
	text: string
}
const Button = component$((props: ButtonsProps) => {
	return (
		<button type='button' class={s.statItem}>
			<a href={props.link} type='Buttons' >
				{props.text}
			</a>
		</button>)
})

const ListButon: ButtonsProps[] = [{
	link: '/bars',
	text: 'Bars'
},
{
	link: '/boulangerie',
	text: 'Boulangerie'
},
{
	link: '/ecoles',
	text: 'Écoles privées'
},
{
	link: '/immobilier',
	text: 'Immobilier'
},
{
	link: '/salle-sport',
	text: 'Salle de sport'
},
{
	link: '/restaurant',
	text: 'Restaurant'
},
{
	link: '/hotel',
	text: 'Hotels'
},
]
export const Expertise = component$(() => {
	return (
		<section class={s.wrapper}>
			<h3 class={s.title}>Plus de 10 ans d'expertise</h3>
			<div class={s.subtitle}>Photographe certifié Google depuis 2013</div>
			<p class={s.text}>Des centaines de clients satisfaits à Paris et en Île-de-France</p>
			<div class={s.stats}>
				{ListButon.map((btn, index) => <Button key={index} link={btn.link} text={btn.text} />)}
			</div>
		</section>
	)
})
