<template>
  <div>
    <slot />
    <el-menu :default-active="currentMenu" mode="horizontal" class="single-page-menu">
      <el-menu-item
        v-for="child in children"
        :key="child.link || 'index'"
        :index="child.link || 'index'"
      >
        <nuxt-link :to="`/${resource}/${item.id ? item.id + '/' : ''}${child.link}`" class="inline-block">
          {{ child.label }}
        </nuxt-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    children: {
      type: Array,
      required: true
    },
    resource: {
      type: String,
      required: true
    },
    current: {
      type: String,
      default: '',
      required: false
    }
  },

  computed: {
    item() {
      return this.$store.getters[`${this.resource}/item`]
    },
    currentMenu() {
      return this.$route.params.slug || this.current || 'index'
    }
  }
}
</script>

<style lang="scss">
.single-page-menu {
  @media print {
    display: none;
  }
}
</style>
