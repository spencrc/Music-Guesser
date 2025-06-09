import { defineConfig, loadEnv } from 'vite';

export default defineConfig((env) => {
    const envars = loadEnv(env.mode, './');
    const serverURL = new URL(
        envars.VITE_SERVER_URL ?? '<http://localhost:3000'
    );
    const serverAPIPath = envars.VITE_SERVER_API_PATH ?? '/api';
    return {
        envDir: './',
        define: {
            __APP_ENV__: JSON.stringify(serverAPIPath),
        },
        server: {
            port: 5173,
            proxy: {
                // proxy requests with the API path to the server
                // <http://localhost:5173/api> -> <http://localhost:3001/api>
                [serverAPIPath]: serverURL.origin,
            }
        }
    }
});