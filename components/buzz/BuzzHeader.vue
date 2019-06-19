<template>
  <div class="dashboard__header buzz-header">
    <div class="buzz-header__left m-0" :class="{ 'buzz-header__left--opened': isOpened }">
      <sidebar-trigger appname="Porto Turistico la maddalena" @toggle="toggleSidebar()" />
      <h1 v-if="isOpened" class="app-title">
        <nuxt-link to="/">
          <svgicon icon="logo-h" width="150px" color="white" :title="appName" />
        </nuxt-link>
      </h1>
    </div>
    <div class="buzz-header__right">
      <global-search class="hidden md:block w-1/3" />
      <profile-menu />
    </div>
  </div>
</template>
<script>
import GlobalSearch from './GlobalSearch'
import SidebarTrigger from './SidebarTrigger'
import ProfileMenu from './ProfileMenu'

export default {
  components: {
    ProfileMenu,
    GlobalSearch,
    SidebarTrigger
  },
  props: {
    appName: {
      type: String,
      default: 'App Name'
    }
  },
  data() {
    return {
      isOpened: false,
      logoPath: ''
    }
  },
  watch: {
    '$route.path': function() {
      this.isOpened = false
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpened = !this.isOpened
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="scss">
.buzz-header {
  align-items: center;
  background: var(--header-bg-color);
  color: var(--header-text-color);
  box-shadow: 0 0.1rem 1.5rem rgba(0, 0, 0, 0.075);
  display: flex;
  left: 0;
  min-height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  padding: 0;

  @screen md {
    flex-flow: row wrap;
  }

  @media screen and (min-width: 600px) {
    position: relative;
  }

  @media screen and (min-width: 1200px) {
  }

  @media print {
    display: none;
  }

  &__left {
    background: var(--title-bg-color);
    color: var(--title-text-color);
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: var(--animation-time);
    height: 80px;

    &--opened {
      display: flex;
      align-items: center;
      justify-content: left;
      transition: var(--animation-time);
      height: 80px;

      @screen md {
        width: 250px;
      }
    }

    @media screen and (min-width: 1200px) {
      overflow: hidden;
    }

    a {
      color: rgba(var(--sidebar-text-color), 1);
    }
  }

  &__logo {
    padding: 0 1rem;

    img {
      height: 64px;
      width: auto;
    }
  }

  &__right {
    margin: 0 0 0 auto;
    text-align: right;
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    padding: 0 1rem;

    @media screen and (min-width: 1200px) {
      margin: 0;
    }
  }
}

.app-title {
  display: none;

  @screen md {
    display: inline-block;
    font-size: 1.25rem;
    line-height: 2rem;
    padding: 1rem;
  }

  a:link,
  a:visited,
  a {
    color: var(--title-text-color);
  }
}
</style>
