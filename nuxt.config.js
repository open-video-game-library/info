require('dotenv').config();
const { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } = process.env;

export default {
  mode: 'universal',
  srcDir: 'app',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/info/'
    // middleware: 'auth'
  },

  generate: {
    dir: 'docs'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Open Video Game Library',
    titleTemplate:  '%s - Open Video Game Library',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'favicons/icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/png', href: 'favicons/apple-touch-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    '@/assets/css/element-ui.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/firebase.js',
    '@/plugins/firebase.auth.js',
    '@/plugins/routerOption.js'
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://keitalab-opengame-test.firebaseio.com',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  env: {
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId
  }
  // dotenv??????????????????
  // privateRuntimeConfig: {
  //   apiKey: process.env.apiKey,
  //   authDomain: process.env.authDomain,
  //   databaseURL: process.env.databaseURL,
  //   projectId: process.env.projectId,
  //   storageBucket: process.env.storageBucket,
  //   messagingSenderId: process.env.messagingSenderId
  // }
}
