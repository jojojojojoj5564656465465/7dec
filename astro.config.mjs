import path from 'node:path'
import { fileURLToPath } from 'node:url' 
import qwikdev from '@qwikdev/astro'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'astro/config'
import markdoc from '@astrojs/markdoc'
import tailwindcss from '@tailwindcss/vite';
//import icon from 'astro-icon'


// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  trailingSlash: 'never',
  experimental: {
    contentLayer: true
  },
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
        '@': path.resolve(__dirname, './src'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@fonts': path.resolve(__dirname, 'public/fonts'),
        '@images': path.resolve(__dirname, 'public/images'),
        '@theme': path.resolve(__dirname, './src/styles/utils')
      }
    },
    css: {
      transformer: 'lightningcss'
    },
    plugins: [
      vanillaExtractPlugin({
        identifiers: 'short'
      }),
      tailwindcss()
    ],
    optimizeDeps: {
      noDiscovery: true
      //include: [] // Empty array instead of undefined
    }
  },
  integrations: [
    markdoc(),
    qwikdev()
    // icon({ iconDir: 'src/assets/icons' })
  ]
})