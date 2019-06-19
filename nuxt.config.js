const join = require('path').join
const messages = require('./translations')
const pkg = require('./package')
const tailwindJS = join(__dirname, 'tailwind.js')

require('dotenv').config()

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'La Maddalena - Gestione delle prenotazioni',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff6900' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css', '~/assets/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/buzz',
    '@/plugins/element-ui',
    '@/plugins/moment',
    '@/plugins/url-builder',
    '@/plugins/views',
    '@/plugins/common'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/dotenv', { filename: '.env', systemvars: true }],
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  env: {
    client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
    client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
    VERSION: process.env.npm_package_version
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      user: '/'
    },
    strategies: {
      password_grant: {
        _scheme: 'local',
        endpoints: {
          login: {
            method: 'post',
            url: '/oauth/token',
            propertyName: 'access_token'
          },
          logout: false,
          user: {
            url: 'api/auth/me'
          }
        }
      }
    }
    // Options
  },

  middleware: ['auth'],
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: process.env.LARAVEL_ENDPOINT
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [require('tailwindcss')(tailwindJS), require('autoprefixer')]
    },

    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
