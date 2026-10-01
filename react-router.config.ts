import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  // Static site: no server at runtime, every route is rendered to HTML at build time
  ssr: false,
  prerender: true,
} satisfies Config
