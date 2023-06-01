import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({}) => {
    process.env = { ...process.env, ...loadEnv('', process.cwd()) };
    return defineConfig({
        plugins: [
            vue(),
            VueI18nPlugin({
                include: resolve(
                    dirname(fileURLToPath(import.meta.url)),
                    './src/locales/**'
                ),
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        server: {
            proxy: {
                '/api': {
                    target: 'https://hodei-web1.onrender.com',
                    // target: process.env.VITE_API,
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                },
            },
        },
    });
};
