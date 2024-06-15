import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: true, // 0.0.0.0
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
    define: {
      'process.env': env, // Expose environment variables to your code
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setupTests.ts',
    },
  };
});
