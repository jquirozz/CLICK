import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/Explore': path.resolve(__dirname, './src/domains/Explore'), 
      '@/Post': path.resolve(__dirname, './src/domains/Post'),
      '@/Profile': path.resolve(__dirname, './src/domains/Profile'),
      '@/Public': path.resolve(__dirname, './src/domains/Public'),
      '@/Settings': path.resolve(__dirname, './src/domains/Settings'),
      '@/services': path.resolve(__dirname, './src/services'), 
      '@/components': path.resolve(__dirname, './src/components'), 
      '@': path.resolve(__dirname, './src'),
    },
  },
})
