import Vue from 'vue'
import Buzz from '@/components/buzz'
import BuzzFields from '@nodopiano/buzz-fields'
import '@nodopiano/buzz-fields/dist/buzz-fields.css'

// Importazione delle icone SVG compilate
import '@/compiled-icons'

const indexResources = { today: true, validations: true }

export default ({ app }) => {
  Vue.use(Buzz)
  Vue.use(BuzzFields, {
    getErrors: function(resource) {
      return this.$store.getters[`${resource}/errors`]
    },
    getItems: function(resource) {
      if (indexResources[resource])
        return this.$store.getters[`${resource}/index`]
      return this.$store.getters[`${resource}/item`]
    },
    updateError: function(traverse, resource) {
      return this.$store.dispatch(`${resource}/clearError`, traverse)
    },
    updateItem: function(traverse, resource) {
      this.$store.dispatch(`${resource}/updateItem`, traverse)
    },
    restDriver: function() {
      return app.$axios
    },
    refreshItem: function(resource, traverse) {
      let id = this.$store.getters[`${resource}/item`].id
      if (traverse) {
        let links = this.$store.getters[`${resource}/links`]
        if (links[traverse])
          return this.$store.dispatch(`${resource}/child`, {
            url: links[traverse],
            slug: traverse
          })
      }
      return this.$store.dispatch(`${resource}/show`, id)
    },
    locale: 'it'
  })
}
