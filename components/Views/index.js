import LoginPanel from './LoginPanel'
import SinglePageMenu from './SinglePageMenu'

export default {
  install: (Vue, options) => {
    Vue.component('login-panel', LoginPanel)
    Vue.component('single-page-menu', SinglePageMenu)
  },
  LoginPanel,
  SinglePageMenu
}
