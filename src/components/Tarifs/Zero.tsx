import {
  $,
  component$,
  useComputed$,
  useSignal,
  useStore,
  useTask$
} from '@builder.io/qwik'
import { Tarif as s, WrapStyle } from './Tarif.css.ts'

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
  type Wrapper = Record<'clientWidth' | 'scrollLeft' | 'scrollWidth', number>

  const wrapper = useStore<Wrapper>({
    clientWidth: 250,
    scrollLeft: 0,
    scrollWidth: 800
  })

  const wrapperRef = useSignal<HTMLDivElement>(),
    activeIndex = useSignal<number>(0),
    zeroEffect = useSignal<boolean>(true)

  useTask$(({ track }) => {
    track(() => activeIndex.value)
    setTimeout(() => {
      zeroEffect.value = !zeroEffect.value
      setTimeout(() => {
        zeroEffect.value = !zeroEffect.value
      }, 600)
    }, 100)
  })

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

  // Gestionnaire de défilement pour mettre à jour activeIndex
  const handleScroll = $(() => {
    if (!wrapperRef.value) return

    initSize() // Mettre à jour les dimensions du conteneur

    const scrollPosition = wrapper.scrollLeft
    const newActiveIndex = Math.round(scrollPosition / wrapper.clientWidth)

    if (newActiveIndex !== activeIndex.value) {
      activeIndex.value = Math.max(
        0,
        Math.min(newActiveIndex, ZeroData.length - 1)
      )
    }
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
      <h3 class={[s.zeroBase, zeroEffect.value ? s.zeroActive : s.zeroEffect]}>
        0€
      </h3>
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
        <ul onScroll$={handleScroll} class={s.contentUl} ref={wrapperRef}>
          {ZeroData.map(({ description }, i) => (
            <li key={`${i}`} class={s.contentUlText}>
              {description}
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

const Wpp = component$(() => {
  return (
    <section class={WrapStyle.WRAPPER}>
      <div class={WrapStyle.orange}></div>
      <div class={WrapStyle.zero}>
        <Zero />
      </div>
    </section>
  )
})

export default Wpp
