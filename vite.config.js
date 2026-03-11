import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'reactflow']
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
      // Three.js is inherently large; 900 kB is acceptable for a 3D portfolio
      chunkSizeWarningLimit: 900,
  },
})
