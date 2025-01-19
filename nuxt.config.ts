// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@prisma/nuxt",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    globalAppMiddleware: {
      isEnabled: true,
    },
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: "AUTH_ORIGIN",
    baseURL: "http://localhost:3000/api/auth",
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "credentials",
      addDefaultCallbackUrl: true,
    },
    sessionRefresh: {
      enablePeriodically: false,
      enableOnWindowFocus: false,
    },
  },
  prisma: {
    autoSetupPrisma: true,
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
