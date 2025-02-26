import {
  $,
  component$,
  createContextId,
  type QRL,
  type Signal,
  useComputed$,
  useContext,
  useContextProvider,
  useOn,
  useSignal
} from '@builder.io/qwik'
import { element as S, flexRowDirection } from './pricing.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'

type PropsElFlex = Record<'flexRowDirection', 'row' | 'row-reverse'>
type PropsEl = Record<'text' | 'icon', string> &
  PropsElFlex & {
    fromParentFunction: QRL<(x: number) => void>
  } & Record<'id', number>

export type Props = Record<'phone' | 'email', PropsEl>

const IdContextOpen = createContextId<Signal<number>>('what-is-open-button')

const Element = component$<PropsEl>((props) => {
  const iconShow = useSignal<boolean>(false)

  const openClick = $(() => {
    iconShow.value = !iconShow.value
  })

  const useCTX = useContext(IdContextOpen)
  const ctx__equal__id = useComputed$(() => useCTX.value === props.id)
  
  /**
   * @description General context must be equal to the local Id to open
   */
  const ctx_equal_id___and__iconShow = useComputed$(
    () => ctx__equal__id.value && iconShow.value
  )
  useOn(
    'click',
    $(() => {
      props.fromParentFunction(props.id)
    })
  )
  return (
    <div
      class={S.wrapper}
      style={assignInlineVars({
        [flexRowDirection]: props.flexRowDirection
      })}>
      <button
        class={S.button}
        type="button"
        onClick$={openClick}
        aria-expanded={iconShow.value}>
        <span>{props.icon}</span>
      </button>

      <span class={ctx_equal_id___and__iconShow.value ? S.text : null}>
        {ctx_equal_id___and__iconShow.value ? props.text : null}
      </span>
    </div>
  )
})

const contact = component$(() => {
  const id = useSignal<number>(0)
  const changeId = $((xIndex: number) => {
    id.value = xIndex
  })

  const data: Props = {
    email: {
      text: 'lrid1g2x@jonathanh55.anonaddy.com',
      icon: '📧',
      flexRowDirection: 'row-reverse',
      fromParentFunction: changeId,
      id: 1
    },
    phone: {
      text: '0670755094',
      icon: '📞',
      flexRowDirection: 'row',
      fromParentFunction: changeId,
      id: 2
    }
  } as const
  useContextProvider(IdContextOpen, id)
  return (
    <div class={S.wrapperMain}>
      <Element {...data.email} />
      <Element {...data.phone} />
    </div>
  )
})

export default contact
