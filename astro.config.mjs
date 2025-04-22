import path from 'node:path'
import { fileURLToPath } from 'node:url' // Import fileURLToPath from the url module
import qwikdev from '@qwikdev/astro'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
//import icon from 'astro-icon'
//import robotsTxt from 'astro-robots-txt'

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  output: 'static',
  server: {
    host: true,
    port: 3000,
    watch: {
      usePolling: true
    }
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@fonts': path.resolve(__dirname, 'public/fonts'),
        '@images': path.resolve(__dirname, 'public/images'),
        '@theme': path.resolve(__dirname, 'src/styles/utils')
      }
    },
    css: {
      transformer: 'lightningcss'
    },
    plugins: [
      vanillaExtractPlugin({
        enabled: true,
        identifiers: 'short'
      })
    ],
    optimizeDeps: {
      noDiscovery: true
      //include: [] // Empty array instead of undefined
    }
  },
  integrations: [
    qwikdev(),
    markdoc()
    // icon({ iconDir: 'src/assets/icons' })
    //robotsTxt()
  ]
})
