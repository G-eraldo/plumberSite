import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Forge & Flux | Artisan Plombier & Design d'Eau",
      meta: [
        {
          name: "description",
          content:
            "Expertise en plomberie haute performance et rénovation de salles de bain design à Paris. Intervention rapide et devis transparent.",
        },
      ],
    },
  },
});
