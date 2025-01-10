import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }), dynamicImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
