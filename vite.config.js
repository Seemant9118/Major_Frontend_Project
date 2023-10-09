import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// const path = require('path');

// export default {
//  resolve: {
//    alias: {
//      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//    }  
//  },
//  css: {
//    preprocessorOptions: {
//      scss: {
//        additionalData: `@import "~bootstrap/scss/bootstrap.scss";`
//      }
//    }
//  }
// }