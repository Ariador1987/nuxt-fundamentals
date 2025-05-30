// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/style.css"],
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        public: {
            apiKey: process.env.NUXT_API_KEY,
        },
    },
    vite: {
        css: {
            devSourcemap: true,
        },
    },
});
