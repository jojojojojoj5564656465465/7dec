import { defineMarkdocConfig } from '@astrojs/markdoc/config'
import shiki from '@astrojs/markdoc/shiki'
import * as nodes from './src/markdoc/nodes'
//import * as nodes from './src/markdoc/config/nodes';
import * as tags from './src/markdoc/tags'

/** @type {import('@markdoc/markdoc').Config} */
export default defineMarkdocConfig({
  nodes,
  tags,
})
