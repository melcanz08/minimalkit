import { defineConfig } from 'vite'
import chaincss from 'chaincss/plugin/vite'

export default defineConfig({
  plugins: [
    chaincss({
      verbose: true,
      minify: true,
    })
  ],
  build: {
    minify: 'esbuild',
  }
})
