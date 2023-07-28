import react from '@vitejs/plugin-react';
import { join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(async () => ({
    plugins: [react()],
    clearScreen: true,
    server: {
        port: 1420,
        strictPort: true
    },
    envPrefix: ['VITE_', 'TAURI_'],
    build: {
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        sourcemap: !!process.env.TAURI_DEBUG
    },
    resolve: {
        alias: {
            '@': join(__dirname, 'src')
        }
    }
}));
