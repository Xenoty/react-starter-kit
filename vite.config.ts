import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    // If you want to enable HTTPS,
    // 1. generate certificates (like mkcert)
    // 2. Add the certificates to the root folder
    // https: {
    //   key: fs.readFileSync('./localhost+2-key.pem'),
    //   cert: fs.readFileSync('./localhost+2.pem'),
    // },
    open: true,
    cors: true,
    // ... other server options if needed
  },
  resolve: {
    alias: {
      '@': '/src', // Adjust the path as needed
    },
  },
});
