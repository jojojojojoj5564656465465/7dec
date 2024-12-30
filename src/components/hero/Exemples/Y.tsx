import {
  component$,
  useSignal,
  useVisibleTask$,
  useComputed$,
  $
} from '@builder.io/qwik'

interface SliderProps {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: any[]
}

export const Slider = component$(({ children }: SliderProps) => {
  const wrapperRef = useSignal<HTMLElement>()
  const nextButtonRef = useSignal<HTMLButtonElement>()
  const prevButtonRef = useSignal<HTMLButtonElement>()
  const page = useSignal(0)

  const itemsToScroll = useComputed$(() => {
    if (wrapperRef.value) {
      return Number.parseInt(
        window.getComputedStyle(wrapperRef.value).getPropertyValue('--items'),
        10
      )
    }
    return 4 // Default value
  })

  const pages = useComputed$(() => {
    return Math.ceil(children.length / itemsToScroll.value)
  })

  const updateUI = $(() => {
    if (prevButtonRef.value) {
      if (page.value === 0) {
        prevButtonRef.value.setAttribute('hidden', 'hidden')
      } else {
        prevButtonRef.value.removeAttribute('hidden')
      }
    }
    if (nextButtonRef.value) {
      if (page.value === pages.value - 1) {
        nextButtonRef.value.setAttribute('hidden', 'hidden')
      } else {
        nextButtonRef.value.removeAttribute('hidden')
      }
    }
  })

  const move = $((direction: number) => {
    let newPage = page.value + direction

    if (newPage < 0) {
      newPage = 0
    }

    if (newPage >= pages.value) {
      newPage = pages.value - 1
    }

    page.value = newPage

    if (wrapperRef.value) {
      const child = wrapperRef.value.children[
        newPage * itemsToScroll.value
      ] as HTMLElement
      if (child) {
        wrapperRef.value.scrollTo({
          left: child.offsetLeft,
          behavior: 'smooth'
        })
      }
    }
  })

  useVisibleTask$(({ track }) => {
    track(() => page.value)
    updateUI()
  })

  useVisibleTask$(
    ({ track, cleanup }) => {
      track(() => wrapperRef.value)

      const handleScrollEnd = $(() => {
        if (wrapperRef.value) {
          page.value = Math.ceil(
            wrapperRef.value.scrollLeft / wrapperRef.value.offsetWidth
          )
        }
      })

      if (wrapperRef.value) {
        wrapperRef.value.addEventListener('scrollend', handleScrollEnd)
      }

      cleanup(() => {
        if (wrapperRef.value) {
          wrapperRef.value.removeEventListener('scrollend', handleScrollEnd)
        }
      })
    },
    { strategy: 'document-ready' }
  )

  return (
    <div class="relative" data-slider>
      <div
        class="items"
        data-slider-wrapper
        ref={wrapperRef}
        style={{
          display: 'flex',
          '--items': '4',
          '--gap': '1rem',
          gap: 'var(--gap)',
          overflowX: 'auto',
          scrollSnapType: 'x proximity',
          padding: 'calc(var(--gap) * .5)',
          margin: 'calc(var(--gap) * -.5)',
          scrollPaddingInline: 'calc(var(--gap) * .5)'
        }}>
        {children.map((child, index) => (
          <article
            key={index}
            class="item"
            style={{
              minWidth:
                'calc((100% - (var(--items) - 1) * var(--gap)) / var(--items))',
              scrollSnapAlign: 'start'
            }}>
            {child}
          </article>
        ))}
      </div>
      <button
        data-slider-next
        ref={nextButtonRef}
        onClick$={() => move(1)}
        type="button">
        Suivant
      </button>
      <button
        type="button"
        data-slider-prev
        hidden
        ref={prevButtonRef}
        onClick$={() => move(-1)}>
        Précédent
      </button>
    </div>
  )
})
