import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useOnWindow,
  useComputed$
} from '@builder.io/qwik'
import { CardStyle, bgImage, CardsStyle, button } from './index.css.ts'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type CardProps = {
  Category: string
  Image: string
  Price: number
  Link: string
}

const Card = component$<CardProps>((props) => {
  return (
    <a href={props.Link}>
      <div class={CardStyle.wrapper}>
        {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
        <div
          class={CardStyle.image}
          style={assignInlineVars({ [bgImage]: `url(${props.Image})` })}></div>
        <h3 class={CardStyle.category}>{props.Category}</h3>
        <p class={CardStyle.price}>{props.Price}</p>
      </div>
    </a>
  )
})

const Cards = component$(() => {
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
    'scroll',
    $(() => {
      if (!wrapperRef.value) return
      wrapper.scrollLeft = wrapperRef.value?.scrollLeft
    })
  )

  const buttonState = {
    prev: useComputed$(() => {
      return wrapper.scrollLeft > 8
    }),
    next: useComputed$(() => {
      return wrapper.scrollWidth >= wrapper.scrollLeft * 1.06
    })
  }

  const move = $((direction: 'LEFT' | 'RIGHT') => {
    if (!wrapperRef.value) return
    const scrollLeft =
      direction === 'RIGHT' ? wrapper.clientWidth : -wrapper.clientWidth

    wrapperRef.value?.scrollBy({
      left: scrollLeft,
      behavior: 'smooth'
    })
  })

  return (
    <>
      <section class="mx-auto grid gap-1">
        <div class={CardsStyle} ref={wrapperRef}>
          {Array.from({ length: 100 }, (_, i) => {
            return (
              <Card
                key={i}
                Category={`${i}`}
                Link="/"
                Price={wrapper.clientWidth}
                Image="/nasa-rTZW4f02zY8-unsplash.jpg"
              />
            )
          })}
        </div>
        <span
          class={buttonState.prev.value ? button.available : button.disable}
          onClick$={$(() => move('LEFT'))}>
          ← Prev
        </span>
        <span
          class={buttonState.next.value ? button.available : button.disable}
          onClick$={[initSize, $(() => move('RIGHT'))]}>
          Next →
        </span>
      </section>
    </>
  )
})
export default Cards
