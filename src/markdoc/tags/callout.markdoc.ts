import { component } from '@astrojs/markdoc/config'

const callout = {
  // render: component('./src/components/Callout.astro'),
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: 'note',
      matches: ['caution', 'check', 'note', 'warning'],
      errorLevel: 'critical',
    },
    title: {
      type: String,
    },
  },
}

export const Iframe = {
  render: component('@/components/Articles/Iframe.astro'),
  attributes: {
    Link: {
      type: String,
      required: true,
      errorLevel: 'critical',
    },
  },
}
