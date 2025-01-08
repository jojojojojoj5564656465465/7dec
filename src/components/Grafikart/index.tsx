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


type CardProps = {
  Category: string
  Image: string
  Gif?: string
  Price: number
  Link: string
}

/** MARK: Card
 * @param {CardProps} props - The props for the Card component.
 * @param {string} props.Category - The category of the product.
 * @param {string} props.Image - The URL of the product image.
 * @param {number} props.Price - The price of the product.
 * @param {string} props.Link - The URL link to the product details.
 * @returns {JSX.Element} The rendered Card component.
 */
const Card = component$<CardProps>((props) => {
  return (
    <section class={card.wapperCard}>
      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      <div
        class={card.hoverImg}
        style={assignInlineVars(card.imageHoverContract, {
          gif: `url(${props.Gif})` || `url(${props.Image})`,
          image: `url(${props.Image})`
        })}></div>
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
    </section>
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
    scrollWidth: 3000
  })
  const buttonState = {
    prev: useComputed$(() => {
      return wrapper.scrollLeft > 8
    }),
    next: useComputed$(() => {
      return wrapper.scrollLeft + 10 < wrapper.scrollWidth - wrapper.clientWidth
    })
  }

  /** MARK: FUNCTIONS
   *
   */
  const initSize = $(() => {
    if (!wrapperRef.value) return
    wrapper.clientWidth = wrapperRef.value?.clientWidth
    wrapper.scrollWidth = wrapperRef.value?.scrollWidth
    wrapper.scrollLeft = wrapperRef.value?.scrollLeft ?? 0
  })
  const move = $((direction: 'LEFT' | 'RIGHT') => {
    if (!wrapperRef.value) return
    initSize()
    const scrollLength =
      direction === 'RIGHT' ? wrapper.clientWidth : -wrapper.clientWidth

    wrapperRef.value?.scrollBy({
      left: scrollLength ?? 250,
      behavior: 'smooth'
    })
  })

  /** MARK: Event LISTNER
   *
   */
  useOnWindow('resize', initSize)
  useOnDocument('scrollend', initSize)

  useOn(
    'keydown',
    $((event) => {
      if (event.key === 'ArrowRight') {
        move('RIGHT')
      } else if (event.key === 'ArrowLeft') {
        move('LEFT')
      }
      return
    })
  )
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
                key={`Cards exemple n°${i}`}
                Category={`${i} ${wrapper.scrollLeft} ${wrapper.scrollWidth}`}
                Link="/"
                Price={wrapper.clientWidth}
                Image="public/nasa-rTZW4f02zY8-unsplash.jpg"
                Gif="public/giphy.webp"
              />
            )
          })}
        </div>
        <button
          type="button"
          class={buttonState.next.value ? button.available : button.disable}
          onClick$={$(() => move('RIGHT'))}>
          Next →
        </button>
      </section>
    </>
  )
})
