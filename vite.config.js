// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  // GitHub Pages 배포 경로
  base: '/green/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  // 경로 별칭
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@api': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@page': path.resolve(__dirname, './src/page'),
      '@store': path.resolve(__dirname, './src/store'),
      '@util': path.resolve(__dirname, './src/util'),
      '@zustand': path.resolve(__dirname, './src/zustand'),
    },
  },

  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // AG Grid 안정 분리(필수)
          if (id.includes('ag-grid-react')) return 'aggrid-react';
          if (id.includes('ag-grid-enterprise')) return 'aggrid-enterprise';
          if (id.includes('ag-grid-community')) return 'aggrid-community';

          // PrimeReact 계열 분리
          if (
            id.includes('primereact') ||
            id.includes('primeflex') ||
            id.includes('primeicons')
          )
            return 'prime';

          // React & ReactDOM 분리
          if (id.includes('react') || id.includes('react-dom'))
            return 'vendor';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },

  css: {
    devSourcemap: true,
  },

  define: {
    __APP_VERSION__: JSON.stringify('1.0.0'),
    global: 'globalThis',
  },

  optimizeDeps: {
    include: ['ag-grid-react', 'ag-grid-community'],
  },
});
