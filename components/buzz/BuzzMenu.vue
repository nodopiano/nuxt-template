<template>
  <ul class="menu">
    <buzz-menu-item v-for="(item, index) in items" :key="index" :item="item" />
    <slot />
  </ul>
</template>
<script>
import BuzzMenuItem from './BuzzMenuItem.vue'
export default {
  components: {
    BuzzMenuItem
  },

  props: {
    items: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 100%;

  @screen md {
    margin-top: 2rem;
  }
}
</style>
