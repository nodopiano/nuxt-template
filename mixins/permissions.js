import Vue from 'vue'

const getPermissions = function(permission, ctx, resource) {
  let store = ctx.$store.getters[`${resource}/meta`]
  return store.permissions ? store.permissions[permission] : false
}

export default (permissionsObject, resource) => {
  let computed = {}
  Object.keys(permissionsObject).map(permissionName => {
    let permission = permissionsObject[permissionName]
    computed[permissionName] = function() {
      const { computedPermission } = Vue.observable({
        computedPermission: getPermissions(permission, this, resource)
      })
      return computedPermission
    }
  })
  return { computed }
}
