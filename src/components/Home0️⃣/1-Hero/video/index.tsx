import {
  component$,
  useStyles$,
  useSignal,
  $,
  useServerData
} from '@builder.io/qwik'
import styles from './video.css?inline'
import wrapper from './container.css'


export default component$(() => {
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
