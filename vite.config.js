import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
// Need to install: npm install @vitejs/plugin-react --save-dev
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
        react({
            // This enables the new JSX Transform from React 17+
            jsxRuntime: 'automatic'
        }),
    ],
});
