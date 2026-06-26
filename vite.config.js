import { defineConfig } from 'vite'
import chaincss from 'chaincss/plugin/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    chaincss({
      verbose: true,
      minify: true,
    })
  ],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'components.html'),
      }
    }
  }
})
