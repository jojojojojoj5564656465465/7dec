import * as v from 'valibot'
import { $, component$, useComputed$, useSignal } from '@builder.io/qwik'
import { radio as s } from './pricing.css'

/**
 * @deprecated
 * @param str
 * @returns
 */
const urlMark = (str: string) => {
  const emailShema = v.pipe(
    v.string('email'),
    v.email(),
    v.transform((e) => `mailto:${e}`)
  )
  const phoneSchema = v.pipe(
    v.string(),
    v.minLength(9),
    v.maxLength(10),
    v.transform((e) => `tel:+33${e}`)
  )
  const union_email__and__phone = v.union([emailShema, phoneSchema])

  return v.parse(union_email__and__phone, str)
}

export default component$(() => {
  const phone__or__email = useSignal<'phone' | 'email' | false>(false)

  const items: { id: 'phone' | 'email'; value: string; label: string }[] = [
    { id: 'phone', value: '06.70.75.50.94', label: '📞  Téléphone' },
    {
      id: 'email',
      value: 'lrid1g2x@jonathanh55.anonaddy.com',
      label: '📧  Email'
    }
  ] as const

  const showValue = useComputed$(
    () => items.find(({ id }) => id === phone__or__email.value)?.value
  )

  const handleModeChange = $((e: 'phone' | 'email') => {
    phone__or__email.value = e
  })
  return (
    <div class={s.wrapper}>
      {items.map((item, index) => (
        <label
          class={s.eachRadio}
          key={item.id + index}
          onMouseEnter$={() => handleModeChange(item.id)}>
          <input
            type="radio"
            name="contact"
            value={item.id}
            checked={phone__or__email.value === item.id || false}
            onChange$={() => handleModeChange(item.id)}
          />
          {item.label}
        </label>
      ))}
      <p class={s.value}>{showValue.value}</p>
    </div>
  )
})
