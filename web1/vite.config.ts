import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({}) => {
    process.env = { ...process.env, ...loadEnv('', process.cwd()) };
    return defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: process.env.VITE_API,
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                },
            },
        },
    });
};
