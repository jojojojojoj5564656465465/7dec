import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useOnWindow,
  useComputed$,
  Slot,
  useOn,
  type QRL,
  useStylesScoped$
} from '@builder.io/qwik'
import { CardsStyle, button, sectionWrapperCardButtons } from './index.css.ts'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as card from './card.css.ts'
import { flex } from '@/styles/ThemeContract.css.ts'
import { style } from '@vanilla-extract/css'

type CardProps = {
  Category: string
  Image: string
  Price: number
  Link: string
}

 /** MARK: Card */
const Card = component$<CardProps>((props) => {
  return (
    <div class={card.wapperCard}>
      <div class={card.ImageContainer}>
        <img src={props.Image} alt={props.Category} />
      </div>
      <p class={card.Title}>{props.Category}</p>
      <p class={card.price}>{props.Price}</p>
      <div class={card.Btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0"
          viewBox="0 0 384 512">
          <path
            stroke="none"
            d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80v352c0 17.4 9.4 33.4 24.5 41.9S58.2 482 73 473l288-176c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
          />
          <title>PLAY</title>
        </svg>
        <span class={card.BtnText}>Voir la Visite</span>
      </div>
    </div>
  )
})

 /** MARK: Cards */
export default component$(() => {
  const wrapperRef = useSignal<HTMLDivElement>()

  type Wrapper = {
    clientWidth: number
    scrollLeft: number
    scrollWidth: number
  }
  const wrapper = useStore<Wrapper>({
    clientWidth: 500,
    scrollLeft: 0,
    scrollWidth: 300
  })

  const initSize = $(() => {
    if (!wrapperRef.value) return
    wrapper.clientWidth = wrapperRef.value?.clientWidth
    wrapper.scrollWidth = wrapperRef.value?.scrollWidth
  })
  useOnWindow('resize', initSize)
  useOnDocument(
    'scrollend',
    $(() => {
      if (!wrapperRef.value) {
        return initSize()
      }
      wrapper.scrollLeft = wrapperRef.value?.scrollLeft
    })
  )


  const buttonState = {
    prev: useComputed$(() => {
      return wrapper.scrollLeft > 8
    }),
    next: useComputed$(() => {
      return wrapper.scrollLeft <= wrapper.scrollWidth - wrapper.clientWidth
    })
  }

  const move = $((direction: 'LEFT' | 'RIGHT') => {
    if (!wrapperRef.value) return
    const scrollLeft =
      direction === 'RIGHT' ? wrapper.clientWidth : -wrapper.clientWidth

    wrapperRef.value?.scrollBy({
      left: scrollLeft ?? 250,
      behavior: 'smooth'
    })
  })

  return (
    <>
      <section class={sectionWrapperCardButtons}>
        <button
          type="button"
          class={buttonState.prev.value ? button.available : button.disable}
          onClick$={$(() => move('LEFT'))}>
          ← Prev
        </button>
        <div class={CardsStyle} ref={wrapperRef}>
          {Array.from({ length: 20 }, (_, i) => {
            return (
              <Card
                key={`Cards exemple n°${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
i}`}
                Category={`${i}`}
                Link="/"
                Price={wrapper.clientWidth}
                Image="/nasa-rTZW4f02zY8-unsplash.jpg"
              />
            )
          })}
        </div>
        <button
          type="button"
          class={buttonState.next.value ? button.available : button.disable}
          onClick$={[initSize, $(() => move('RIGHT'))]}>
          Next →
        </button>
      </section>
    </>
  )
})
