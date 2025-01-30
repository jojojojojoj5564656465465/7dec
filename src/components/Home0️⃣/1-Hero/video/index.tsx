import {
  component$,
  useStyles$,
  useVisibleTask$,
  useSignal,
  $,
} from '@builder.io/qwik'
import styles from './video.css?inline'
import wrapper from './container.css'
export default component$(() => {

  const open = useSignal<boolean>(false)

  useVisibleTask$(() => {
    if (!document.querySelector('script[src*="wistia.com/player.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://fast.wistia.com/player.js'
      script.async = true
      document.head.appendChild(script)
    }
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
      {open.value && <wistia-player media-id="ajtj2xpipw" />}
    </div>
  )
})
