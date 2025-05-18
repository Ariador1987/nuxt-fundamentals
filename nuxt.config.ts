// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    runtimeConfig: {
        public: {
            apiKey: process.env.NUXT_API_KEY,
        },
    },
});
