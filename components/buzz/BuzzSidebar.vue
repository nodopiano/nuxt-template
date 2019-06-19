<template>
  <aside class="sidebar" :class="{ 'sidebar--opened': isOpened }">
    <buzz-menu :items="menu">
      <slot name="menu" />
    </buzz-menu>
    <div class="sidebar__footer">
      v{{ version }}
    </div>
  </aside>
</template>
<script>
import BuzzMenu from './BuzzMenu.vue'

export default {
  components: {
    BuzzMenu
  },

  props: {
    menu: {
      type: [Array, Object],
      default: () => []
    },
    opened: {
      type: Boolean,
      default: false
    },
    user: {
      type: Object,
      default: () => ({
        name: 'utente'
      })
    }
  },
  data() {
    return {
      version: process.env.VERSION
    }
  },

  computed: {
    isOpened() {
      return this.opened
    }
  },

  created() {},

  methods: {}
}
</script>
<style lang="scss">
.sidebar {
  background: rgba(var(--sidebar-bg-color), 1);
  color: rgba(var(--sidebar-text-color), 1);
  align-content: flex-start;
  position: fixed;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.075);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  //height: calc(100vh - 80px);
  right: 100%;
  top: 80px;
  transition: var(--animation-time);
  width: 80px;
  z-index: 1;

  @media screen and (min-width: 600px) {
    position: relative;
    left: 0;
    display: flex;
    top: 0;
    transition: var(--animation-time);
    right: initial;
  }

  &--opened {
    left: 0;
    display: flex;
    right: initial;
    bottom: 0;
    transition: var(--animation-time);
    width: 250px;
  }

  &__footer {
    background-color: rgba(var(--sidebar-bg-color), 0.8);
    bottom: 0;
    color: rgba(var(--sidebar-text-color), 1);
    font-weight: bold;
    left: 0;
    padding: 0.5rem 1rem;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
  }
}
</style>
