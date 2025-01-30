import { defineConfig } from 'astro/config'
import path from 'node:path'
import { fileURLToPath } from 'node:url' // Import fileURLToPath from the url module
//import UnoCSS from 'unocss/astro'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import qwikdev from '@qwikdev/astro'
//import icon from 'astro-icon'
//import robotsTxt from 'astro-robots-txt'

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url))
import markdoc from '@astrojs/markdoc'

export default defineConfig({
  output: 'static',
  server: {
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
        '@images': path.resolve(__dirname, 'public/images')
      }
    },
    css: {
      transformer: 'lightningcss'
    },
    plugins: [
      vanillaExtractPlugin({
        enabled: true,
        identifiers: 'short'
      }),
      markdoc()
    ],
    optimizeDeps: {
      noDiscovery: true
      //include: [] // Empty array instead of undefined
    }
  },
  integrations: [
    // UnoCSS({
    //   injectReset: false
    // }),
    qwikdev()
    // icon({ iconDir: 'src/assets/icons' })
    //robotsTxt()
  ]
})
