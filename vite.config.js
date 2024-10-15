import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // Ensure relative paths
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // No need to specify 'cjs' format; ES module (ES6+) is default
    },
  },
});
