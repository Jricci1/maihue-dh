export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Maihue DH",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  // Source directory of the Nuxt application.
  srcDir: "src/",

  components: [
    // Equivalent to { path: '~/components' }
    "~/components",
    { path: "~/components/layouts", extensions: ["vue"] },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://github.com/nuxt-community/vuetify-module
    "@nuxtjs/vuetify",
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
  },
};
