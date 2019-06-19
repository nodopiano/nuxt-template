import VueSVGIcon from 'vue-svgicon'
import BuzzHeader from './BuzzHeader'
import BuzzMenu from './BuzzMenu'
import BuzzMenuItem from './BuzzMenuItem'
import BuzzSidebar from './BuzzSidebar'
import GlobalSearch from './GlobalSearch'
import LoggedUser from './LoggedUser'
import Logout from './Logout'
import ProfileMenu from './ProfileMenu'
import SidebarTrigger from './SidebarTrigger'

import widgets from './widgets'

export default {
  ...widgets,
  ...{
    install: (Vue, options) => {
      Vue.use(widgets)
      Vue.use(VueSVGIcon)

      Vue.component('buzz-header', BuzzHeader)
      Vue.component('buzz-menu', BuzzMenu)
      Vue.component('buzz-menu-item', BuzzMenuItem)
      Vue.component('buzz-sidebar', BuzzSidebar)
    },
    BuzzHeader,
    BuzzMenu,
    BuzzMenuItem,
    BuzzSidebar,
    GlobalSearch,
    LoggedUser,
    Logout,
    ProfileMenu,
    SidebarTrigger,
    VueSVGIcon
  }
}
