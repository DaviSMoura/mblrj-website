import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'

// tailwind + main css
import './styles/index.css'

export const createApp = ViteSSG(
  // The root component
  App,
  // vue-router options
  { routes },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map((i) => { const x = i as any; x.install?.(ctx) })
  }
)
