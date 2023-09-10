// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss"],

  runtimeConfig: {
    secret: process.env.AUTH_SECRET,
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },

  auth: {
    origin: process.env.AUTH_ORIGIN,
  },
});
