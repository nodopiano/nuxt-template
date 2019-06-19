<template>
  <div>
    <span>
      <nuxt-link to="/">
        Porto Turistico
      </nuxt-link>
      <span class="ml-2">
        /
      </span>
    </span>
    <human-crumb
      v-for="(crumb, index) in crumbs"
      :key="index"
      :crumb="crumb"
      :index="index"
      :link="index | link(crumbs)"
      :store-resource="crumbs[0]"
    />
  </div>
</template>

<script>
import HumanCrumb from './HumanCrumb'

export default {
  filters: {
    link: function(index, crumbs) {
      return index < crumbs.length - 1
        ? `/${crumbs.slice(0, index + 1).join('/')}/`
        : ''
    }
  },

  components: {
    HumanCrumb
  },

  computed: {
    crumbs() {
      return this.$route.fullPath.split('/').filter(path => {
        return path !== ''
      })
    }
  }
}
</script>
