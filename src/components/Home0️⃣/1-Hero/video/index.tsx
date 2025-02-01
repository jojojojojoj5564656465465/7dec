import {
  component$,
  useStyles$,
  useSignal,
  $,
} from '@builder.io/qwik'
import styles from './video.css?inline'
import wrapper from './container.css'


export const V1 =component$(() => {
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


