import { $, component$, useSignal, useStylesScoped$ } from '@builder.io/qwik'

export const Lightbox = component$((props: { images: string[] }) => {
  const currentIndex = useSignal(0)
  const isOpen = useSignal(false)

  // Lazy-loaded event handlers for opening, closing, and navigating the lightbox
  const openLightbox$ = $((index: number) => {
    currentIndex.value = index
    isOpen.value = true
  })

  const closeLightbox$ = $(() => {
    isOpen.value = false
  })

  const nextImage$ = $(() => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length
  })

  const prevImage$ = $(() => {
    currentIndex.value =
      (currentIndex.value - 1 + props.images.length) % props.images.length
  })

  // Scoped styles for better encapsulation
  useStylesScoped$(`
    .lightbox-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .lightbox-image {
      max-width: 90%;
      max-height: 90%;
    }
    .lightbox-controls button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
    }
    .lightbox-controls button:focus {
      outline: none;
    }
    .thumbnails img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      cursor: pointer;
      border: 2px solid white;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }
    .thumbnails img:hover {
      transform: scale(1.1);
    }
  `)

  return (
    <>
      {/* Lightbox Overlay */}
      {isOpen.value && (
        <div class="lightbox-overlay">
          <button
            type="button"
            onClick$={closeLightbox$}
            style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            &times;
          </button>
          <img
            class="lightbox-image"
            src={props.images[currentIndex.value]}
            alt="lightbox"
          />
          <div class="lightbox-controls">
            <button
              type="button"
              onClick$={prevImage$}
              style={{ left: '1rem' }}>
              &lt;
            </button>
            <button
              type="button"
              onClick$={nextImage$}
              style={{ right: '1rem' }}>
              &gt;
            </button>
          </div>
        </div>
      )}

      {/* Thumbnails */}
      <div class="thumbnails">
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`thumbnail-${index}`}
            onClick$={() => openLightbox$(index)}
          />
        ))}
      </div>
    </>
  )
})

export const Gallery = component$(() => {
  const images = [
    'https://picsum.photos/200',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/200'
  ]

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Qwik Lightbox Gallery</h1>
      <Lightbox images={images} />
    </div>
  )
})
