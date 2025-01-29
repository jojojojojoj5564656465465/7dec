import { component$ } from '@builder.io/qwik'
import icons from './icons'
import {
  ContainerQuery,
  socialNetwork,
  noShow,
  DivSocialNetwork
} from './containerQuerry.css'

type Icons = keyof typeof icons

interface SocialNetworklinkProps {
  icon: Icons
  link: `https://${string}`
}

export const SocialNetworklink = component$<SocialNetworklinkProps>(
  ({ icon, link }) => {
    return (
      <a class="" rel="noreferrer" target="_blank" href={link}>
        <span class="flex">
          <i class={['fill-white']}>{icons[icon]}</i>
          <p class={'inline mr-[2cqw]'}>{icon}</p>
        </span>
      </a>
    )
  }
)
