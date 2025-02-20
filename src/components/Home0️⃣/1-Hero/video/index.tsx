import {
  $,
  Resource,
  component$,
  useResource$,
  useSignal,
  useStyles$,
  useTask$
} from '@builder.io/qwik'

import wrapper from './container.css'
import styles from './video.css?inline'

export default component$(() => {
  useStyles$(styles)
  const open = useSignal<boolean>(false)

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
          />
          <wistia-player media-id="ajtj2xpipw" />
        </>
      )}
    </div>
  )
})



export const V7 = component$(() => {
  const open = useSignal<boolean>(false)

  const Video = useResource$<string>(async ({ track }) => {
    track(() => open.value)
    return 'https://fast.wistia.com/assets/external/E-v1.js' as string
  })


  useStyles$(styles)

  const toggleOpen = $(() => {
    open.value = true
  })

  return (
    <div
      onMouseover$={toggleOpen}
      onClick$={toggleOpen}
      class={open.value ? wrapper.open : wrapper.closed}>
      <Resource
        value={Video}
        onPending={() => <p>Loading...</p>}
        onRejected={() => <div>Failed to load</div>}
        onResolved={(data) => (
          <>
            <script async src={data} />
            { open.value && (<wistia-player media-id="ajtj2xpipw" />)}
          </>
        )}
      />
    </div>
  )
})