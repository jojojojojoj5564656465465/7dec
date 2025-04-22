import { $, component$ } from '@builder.io/qwik'
import s from './main.css'

export default component$(() => {
	const scrollToTop = $(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	})
	return (
		<button
			class={s.scrollToTop}
			type='button'
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			onClick$={() => (document.body.scrollTop = 0)}
		>
			Haut de la page ↑
		</button>
	)
})
