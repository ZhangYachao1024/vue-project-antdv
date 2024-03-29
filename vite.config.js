import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ // 使用了unplugin-vue-components，可以不用手动引入组件
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
