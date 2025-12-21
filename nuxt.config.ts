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
      title: "Le Bistro Gourmand - Cuisine Authentique", // <--- Changement ici
      meta: [
        {
          name: "description",
          content: "Cuisine moderne et raffinée au cœur de la ville.",
        },
      ],
    },
  },
});
