import { nodes, component } from '@astrojs/markdoc/config'

export default {
  ...nodes.list,
  render: component('@/components/Articles/Li.astro')
  //render:null
}
