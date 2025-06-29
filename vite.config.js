import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
// Need to install: npm install @vitejs/plugin-react --save-dev
import react from '@vitejs/plugin-react';
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";
import path from "node:path";

export default defineConfig({
    server: {
        cors: true
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
        tailwindcss(),
        react({
            // This enables the new JSX Transform from React 17+
            jsxRuntime: 'automatic'
        }),
    ],
    resolve: {
        alias: {
            '@css': path.resolve(__dirname, 'resources', 'css'),
            '@img': path.resolve(__dirname, 'resources', 'img'),
        }
    }
});
