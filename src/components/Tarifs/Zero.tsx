import {
  $,
  component$,
  useComputed$,
  useSignal,
  useStore
} from '@builder.io/qwik'
import { Tarif as s } from './Tarif.css'

interface TarifProps {
  title: string
  description: string
}

const ZeroData: TarifProps[] = [
  {
    title: 'Abonnement',
    description:
      'Vous payez une seule et unique fois ! Aucun coût récurrent ne vous sera demandé.'
  },
  {
    title: 'Hébergement',
    description:
      'Votre visite virtuelle est hébergée sur les serveurs de Google et vous n’avez donc pas à vous soucier du stockage du fichier de votre Google Business View.'
  },
  {
    title: 'Coût par clic',
    description:
      'Vous ne payez qu’une seule fois ! Que les internautes visitent votre commerce 1 ou 100 fois par jour, vous n’avez rien à débourser à la fin du mois.'
  }
]

export const Zero = component$(() => {
  type Wrapper = {
    clientWidth: number
    scrollLeft: number
    scrollWidth: number
  }

  const wrapper = useStore<Wrapper>({
    clientWidth: 500,
    scrollLeft: 0,
    scrollWidth: 3000
  })

  const wrapperRef = useSignal<HTMLDivElement>()
  const activeIndex = useSignal(0) // Nouveau signal pour suivre l'index actif

  const buttonState = {
    prev: useComputed$(() => activeIndex.value > 0),
    next: useComputed$(() => activeIndex.value < ZeroData.length - 1)
  }

  const initSize = $(() => {
    if (!wrapperRef.value) return
    wrapper.clientWidth = wrapperRef.value.clientWidth
    wrapper.scrollWidth = wrapperRef.value.scrollWidth
    wrapper.scrollLeft = wrapperRef.value.scrollLeft
  })

  const move = $((direction: 'LEFT' | 'RIGHT') => {
    if (!wrapperRef.value) return

    initSize()

    let newIndex = activeIndex.value
    if (direction === 'RIGHT' && activeIndex.value < ZeroData.length - 1) {
      newIndex++
    } else if (direction === 'LEFT' && activeIndex.value > 0) {
      newIndex--
    }

    activeIndex.value = newIndex

    const scrollPosition = newIndex * wrapper.clientWidth
    wrapperRef.value.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  })

  const selectItem = $((index: number) => {
    if (!wrapperRef.value) return

    activeIndex.value = index

    const scrollPosition = index * wrapper.clientWidth
    wrapperRef.value.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  })

  return (
    <section class={s.wrapper}>
      <h3 class={s.zero}>0€</h3>
      <ul class={s.ul}>
        {ZeroData.map((item, i) => (
          <li
            key={`${item.title} ${i}`}
            class={s.item}
            onClick$={$(() => selectItem(i))}
            style={{
              backgroundColor:
                activeIndex.value === i ? '#e0e0e0' : 'transparent'
            }}>
            {item.title}
          </li>
        ))}
      </ul>
      <div class={s.content}>
        <button
          type="button"
          class={s.contentArrow}
          onClick$={$(() => move('LEFT'))}
          disabled={!buttonState.prev.value}>
          ←
        </button>
        <ul class={s.contentUl} ref={wrapperRef}>
          {ZeroData.map((item, i) => (
            <li key={`${item.title} ${i}`} class={s.contentText}>
              {item.description}
            </li>
          ))}
        </ul>
        <button
          type="button"
          class={s.contentArrow}
          onClick$={$(() => move('RIGHT'))}
          disabled={!buttonState.next.value}>
          →
        </button>
      </div>
    </section>
  )
})
