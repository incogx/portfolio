import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const isGitHubPages =
    process.env.DEPLOY_TARGET === 'gh-pages' || process.env.GITHUB_ACTIONS === 'true'

  return {
    base: isGitHubPages ? '/portfolio/' : '/',
    plugins: [react()],
    optimizeDeps: {
      include: ['three', '@react-three/fiber', '@react-three/drei', 'reactflow'],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three', '@react-three/fiber', '@react-three/drei'],
            motion: ['framer-motion'],
            router: ['react-router-dom'],
          },
        },
      },
      chunkSizeWarningLimit: 900,
    },
  }
})
