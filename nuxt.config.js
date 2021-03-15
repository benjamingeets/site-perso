export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:'static',
  head: {
    title: 'Benjamin Geets - Développeur web (Tournai 🇧🇪)',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Etudiant et développeur web dans la région de Tournai' },
      { hid: 'og:title', property: 'og:title', content: "Benjamin Geets - Développeur web (Tournai 🇧🇪)"},
      { hid: 'og:image', property: 'og:image', content: "https://benjamingeets.be/og_image.png" },
      { hid: 'og:description', property: 'og:description', content: "Benjamin Geets - Etudiant en e-Business et auto didacte dévoloppeur web" },
      { hid: 'twitter:card', name: 'twitter:card' ,content:'summary_large_image'},
      { hid: 'twitter:site', name: 'twitter:site', content:'@benjamingeets'},
      { hid: 'twitter:title', name:'twitter:title', content:'Benjamin Geets - Développeur web (Tournai 🇧🇪)'},
      { hid: 'twitter:description', name: 'twitter:description', content:"Benjamin Geets - Etudiant en e-Business et auto didacte dévoloppeur web"},
      { hid: 'twitter:image', name:'twitter:image', content:'https://benjamingeets.be/og_image.png'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "normalize.css",
    "sakura.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],
  content:{
    nestedProperties: [],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: '/public/'
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-div',
      'markdown-it-attrs'
    ],
    runtime: true // Support `$md()`
  }
}
