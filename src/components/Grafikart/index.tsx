import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useOnWindow
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

export const Cards = component$(() => {
  const wrapperRef = useSignal<HTMLElement>()
  const buttonState = useStore({
    prev: false,
    next: true
  })
  const p = useStore({
    nbPages: 1,
    containerWidth: 0,
    clientWidth: 0
  })

  const getWrapperRefSize = $(() => {
    if (!wrapperRef.value) return
    const { clientWidth } = wrapperRef.value
    p.clientWidth = clientWidth
  })

  useOnWindow('resize', getWrapperRefSize)
  useOnDocument(
    'scroll',
    $(() => {
      if (!wrapperRef.value) return
      const { scrollLeft, scrollWidth } = wrapperRef.value

      buttonState.next = scrollWidth > scrollLeft * 1.06
      buttonState.prev = scrollLeft > 8
    })
  )

  const move = $((direction: 'LEFT' | 'RIGHT') => {
    if (!wrapperRef.value) return
    //const scrollLeft = direction === 'RIGHT' ? p.clientWidth : -p.clientWidth
    wrapperRef.value?.scrollBy({
      left:  20,
      behavior: 'smooth'
    })
  })

  return (
    <>
    <section class=" mx-auto grid gap-1">
      <div class={CardsStyle} ref={wrapperRef}>
        {Array.from({ length: 100 }, (_, i) => {
          return (
            <Card
              key={i}
              Category={`${i}`}
              Link="/"
              Price={350}
              Image="/nasa-rTZW4f02zY8-unsplash.jpg"
            />
          )
        })}
      </div>

      <span
        class={buttonState.prev ? button.available : button.disable}
        onClick$={$(() => move('LEFT'))}
>
        ← Prev
      </span>
      <span
        class={buttonState.next ? button.available : button.disable}
        onClick$={() => move('RIGHT')}>
        Next →
      </span>
    </section>
    </>
  )
})
export default Cards