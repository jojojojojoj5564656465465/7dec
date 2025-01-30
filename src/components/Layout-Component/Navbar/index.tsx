// Navbar.js
import * as s from './Navbar.css'
import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'
import MenuLinks from './menu.data'

export default component$((props) => {
  const isMenuOpen = useSignal<boolean>(false)
  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value
  })

  useOnDocument(
    'click',
    $((event) => {
      if (isMenuOpen.value) {
        const target = event.target as HTMLElement
        if (target.closest('#nav-bar') === null) {
          isMenuOpen.value = false
        }
      }
    })
  )

  return (
    <nav id="nav-bar" class={s.one.wrapper} aria-label="Main Navigation">
      <div class={s.one.logo}>J.H</div>
      <button
        class={s.buttonMobile.wrapper}
        type="button"
        onClick$={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={isMenuOpen.value}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          class={s.buttonMobile.svg}
          viewBox="0 0 24 24"
          width="36"
          height="36">
          <path
            d={
              !isMenuOpen.value
                ? 'M4 6h16M4 12h16M4 18h16'
                : 'M6 18 18 6M6 6l12 12'
            }
          />
        </svg>
      </button>
      <div
        class={isMenuOpen.value ? s.menuState.open : s.menuState.close}
        aria-hidden={!isMenuOpen.value}
        role="menu">
        {MenuLinks.map((el, index) => {
          return (
            <span key={index}>
              <a href={el.link}>{el.name}</a>
            </span>
          )
        })}
      </div>
    </nav>
  )
})
