import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';
//import * as nodes from './src/markdoc/config/nodes';
import * as tags from './src/markdoc/tags';

// const config = defineMarkdocConfig({
//   nodes,
//   tags
// })
// export default config;

export default defineMarkdocConfig({
  //nodes,
  tags,
 
});
