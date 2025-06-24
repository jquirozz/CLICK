import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/shared/components'), 
      '@/feed': path.resolve(__dirname, './src/features/feed'), 
      '@/profile': path.resolve(__dirname, './src/features/profile'), 
      '@/explore': path.resolve(__dirname, './src/features/explore'), 
      '@/settings': path.resolve(__dirname, './src/features/settings'), 
      '@': path.resolve(__dirname, './src'),
    },
  },
})
