import BigButton from './BigButton'
import BreadCrumbs from './BreadCrumbs'
import BuzzWysiwyg from './BuzzWysiwyg'
import HumanCrumb from './HumanCrumb'

export default {
  install: (Vue, options) => {
    Vue.component('big-button', BigButton)
    Vue.component('bread-crumbs', BreadCrumbs)
    Vue.component('buzz-wysiwyg', BuzzWysiwyg)
  },
  BigButton,
  BreadCrumbs,
  BuzzWysiwyg,
  HumanCrumb
}
