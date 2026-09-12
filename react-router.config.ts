import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  prerender: ['/', '/productos', '/contacto', '/404'],
  ssr: false,
} satisfies Config
