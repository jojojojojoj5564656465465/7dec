import {
  component$,
  useStyles$,
  useSignal,
  $,
  useResource$,
  Resource
} from '@builder.io/qwik'
import styles from './video.css?inline'
import wrapper from './container.css'
import { log } from 'node_modules/astro/dist/core/logger/core'

export const V1 = component$(() => {
  const open = useSignal<boolean>(false)

  useStyles$(styles)
  const toggleOpen = $(() => {
    open.value = true
  })

  return (
    <div
      onMouseover$={toggleOpen}
      onClick$={toggleOpen}
      class={open.value ? wrapper.open : wrapper.closed}>
      {open.value && <wistia-player media-id="ajtj2xpipw" />}
    </div>
  )
})

export const V2 = component$(() => {
  const open = useSignal<boolean>(false)

  useStyles$(styles)
  const toggleOpen = $(() => {
    open.value = true
  })

  return (
    <div
      onMouseover$={toggleOpen}
      onClick$={toggleOpen}
      class={open.value ? wrapper.open : wrapper.closed}>
      {open.value && (
        <>
          <script
            async
            src="https://fast.wistia.com/assets/external/E-v1.js"
            onLoad$={() => console.log('loaded')}
          />
          <wistia-player media-id="ajtj2xpipw" />
        </>
      )}
    </div>
  )
})

export const V3 = component$(() => {
  useStyles$(styles)
  const Player = useResource$<any>(() => {
    const url = new URL('https://fast.wistia.com/assets/external/E-v1.js')
    console.log(url)
    return url
  })
  const Player2 = useResource$<any>(async () => {
    const response = await fetch(
      'https://fast.wistia.com/assets/external/E-v1.js'
    )
  })

  return (
    <div class={wrapper.open}>
      {
        <Resource
          value={Player}
          onPending={() => <div>Loading...</div>}
          onRejected={() => <div>Failed to load PLAYER</div>}
          onResolved={() => {
            return (
              <div>
                <wistia-player media-id="ajtj2xpipw" />
              </div>
            )
          }}
        />
      }
    </div>
  )
})

export const V4 = component$(() => {
  useStyles$(styles)

  const Player = useResource$<any>(async () => {
    const response = await fetch(
      'https://fast.wistia.com/assets/external/E-v1.js'
    )
    if (!response.ok) {
      throw new Error('Failed to load script')
    }
    return response.text()
  })

  return (
    <div class={wrapper.open}>
      <Resource
        value={Player}
        onPending={() => <div>Loading...</div>}
        onRejected={(error) => (
          <div>Failed to load PLAYER: {error.message}</div>
        )}
        onResolved={() => {
          return (
            <div>
              <wistia-player media-id="ajtj2xpipw" />
            </div>
          )
        }}
      />
    </div>
  )
})

export const V5 = component$(() => {
  useStyles$(styles)

  const playerResource = useResource$<any>(async () => {
    const response = await fetch(
      'https://fast.wistia.com/assets/external/E-v1.js'
    )
    const script = await response.text()
    // You can't directly load a script using fetch,
    // but you can create a new script element and append it to the head
    const scriptElement = document.createElement('script')
    scriptElement.textContent = script
    document.head.appendChild(scriptElement)
    return true // Return a value to indicate the resource has loaded
  })

  return (
    <div class={wrapper.open}>
      <Resource
        value={playerResource}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Failed to load PLAYER</div>}
        onResolved={() => {
          return (
            <div>
              <wistia-player media-id="ajtj2xpipw" />
            </div>
          )
        }}
      />
    </div>
  )
})



export const V6 = component$(() => {
  useStyles$(styles)
  const isScriptLoaded = useSignal(false)

  const wistiaResource = useResource$(async ({ cleanup }) => {
    const abortController = new AbortController()
    cleanup(() => abortController.abort('cleanup'))

    // Create a promise that resolves when the script is loaded
    const scriptLoadPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = 'https://fast.wistia.com/assets/external/E-v1.js'
      script.async = true

      script.onload = () => {
        isScriptLoaded.value = true
        resolve(true)
      }

      script.onerror = () => {
        reject(new Error('Failed to load Wistia script'))
      }

      document.body.appendChild(script)
    })

    try {
      await scriptLoadPromise
      return true
    } catch (error) {
      console.error('Error loading Wistia script:', error)
      throw error
    }
  })

  return (
    <div class={wrapper.open}>
      <Resource
        value={wistiaResource}
        onPending={() => <div>Loading Wistia player...</div>}
        onRejected={() => <div>Failed to load Wistia player</div>}
        onResolved={() => (
          <div>
            {isScriptLoaded.value && <wistia-player media-id="ajtj2xpipw" />}
          </div>
        )}
      />
    </div>
  )
})
