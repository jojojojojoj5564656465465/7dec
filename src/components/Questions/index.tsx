import {
  $,
  type QRL,
  type Signal,
  component$,
  createContextId,
  useComputed$,
  useContext,
  useContextProvider,
  useOn,
  useSignal,
} from '@builder.io/qwik'
import s from './Question.css'
import faqData from './data.ts'

interface PropsElement {
  question: string
  response: string
  id: number
  fromParentFunction: QRL<(x: number) => void>
}

export const IdContextOpen =
  createContextId<Signal<number>>('faq-active-open-id')

/***
 * MARK:CARD item
 *
 */
const Element = component$<PropsElement>(props => {
  useOn(
    'click',
    $(() => {
      props.fromParentFunction(props.id)
    }),
  )
  const childContextId = useContext(IdContextOpen)
  const activeP = useComputed$(() => childContextId.value === props.id)

  return (
    <div class={s.card}>
      <dt class={s.dt}>
        <h5 class={s.titleCard}>{props.question}</h5>
        <h5>{activeP.value || '+︎'}</h5>
      </dt>
      <dd class={activeP.value ? s.open : s.close}>{props.response}</dd>
    </div>
  )
})

/***
 * MARK:WRAPPER
 *
 */
export default component$(() => {
  const id = useSignal<number>(0)
  const changeId = $((xIndex: number) => {
    id.value = xIndex
  })
  useContextProvider(IdContextOpen, id)
  return (
    <section class={s.wrapper}>
      <h1>Questions / Réponses </h1>

      <dl>
        {faqData.map(({ question, response }, index) => {
          return (
            <Element
              key={`${index} Element`}
              id={index}
              question={question}
              response={response}
              fromParentFunction={changeId}
            />
          )
        })}
      </dl>
    </section>
  )
})
