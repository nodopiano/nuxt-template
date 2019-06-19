import Vue from 'vue'
import _set from 'lodash/set'

Vue.prototype.$clearErrors = function(traverse) {
  _set(this.errors, traverse, [])
}

Vue.prototype.$emptyObject = function(obj) {
  if (!(obj instanceof Object)) return true
  return Boolean(!Object.keys(obj).length)
}

Vue.prototype.$withoutErrors = function(resource = '') {
  return this.$emptyObject(
    this.$store.getters[`${resource || this.$route.params.slug}/errors`]
  )
}
