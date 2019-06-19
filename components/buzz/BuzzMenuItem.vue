<template>
  <li class="menu__item menu-item">
    <nuxt-link :to="item.url" :title="item.label">
      <svgicon
        :icon="item.icon"
        class="menu-item__icon"
      />
      <span
        class="menu-item__label"
        :title="item.label"
        v-text="item.label"
      />
    </nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        label: 'label',
        icon: 'pencil',
        url: '/'
      })
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.menu-item {
  text-align: center;
  width: 100%;

  a {
    align-items: center;
    color: rgba(var(--sidebar-text-color), 1);
    display: inline-flex;
    flex-flow: row wrap;
    width: 100%;
    font-size: 1.25rem;
    padding: 1rem;
    text-transform: capitalize;

    &:visited,
    &:link {
      color: rgba(var(--sidebar-text-color), 1);
    }

    &:hover {
      color: var(--main-bg-color);
    }

    &.router-link-active,
    &.nuxt-link-active {
      color: rgba(var(--sidebar-text-color), 1);
      background: rgba(var(--sidebar-text-color), 0.1);
      transition: var(--animation-time);
    }
  }

  &__icon {
    display: inline-block;
    margin: 0 auto;
    transition: var(--animation-time);
    color: rgba(var(--sidebar-text-color), 1);
    width: 2rem;
    height: 2rem;
    overflow: hidden;
  }

  &__label {
    display: none;
    margin-left: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    color: rgba(var(--sidebar-text-color), 0.7);
    letter-spacing: 1px;

    &:hover {
      color: rgba(var(--sidebar-text-color), 1);
    }
  }

  .sidebar--opened & {
    text-align: left;
    width: 100%;

    &__icon {
      font-size: 1.25rem;
      margin: 0;
      padding: 0 0.5rem 0 0;
      transition: var(--animation-time);
    }

    &__label {
      display: inline-block;
    }
  }
}
</style>
