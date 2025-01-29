import {
  component$,
  $,

  useStyles$,
  useVisibleTask$
} from '@builder.io/qwik'
import styles from './video.css?inline'

export default component$(() => {
  useVisibleTask$(() => {
    if (!document.querySelector('script[src*="wistia.com/player.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://fast.wistia.com/player.js'
      script.async = true
      document.head.appendChild(script)
    }
  })

  useStyles$(styles)
  return (
    <div class="video-container">
      <wistia-player media-id="ajtj2xpipw" />
    </div>
  )
})
