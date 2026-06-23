import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/filosofia-morale/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        quiz: 'quiz.html',
        riassunti: 'riassunti.html',
      }
    }
  }
})
