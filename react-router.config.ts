import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  buildDirectory: 'build',
  prerender: ['/', '/productos', '/contacto', '/404'],
  ssr: false,
  // Comportamiento de React Router v8 activado desde ya (y sin avisos al arrancar)
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
} satisfies Config
