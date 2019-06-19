<template>
  <div class="sidebar-header">
    <div
      class="sidebar-toggle"
      :class="{ opened: opened }"
      @click="toggleSidebar"
    >
      <svg
        id="lnr-menu"
        viewBox="0 0 1024 1024"
        :style="`fill: rgba(var(--sidebar-text-color), 1)`"
      >
        <title>menu</title><path
          class="path1"
          d="M896 307.2h-768c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.462 25.6 25.6s-11.461 25.6-25.6 25.6z"
        /><path class="path2" d="M896 563.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" /><path class="path3" d="M896 819.2h-768c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h768c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fill: {
      type: String,
      default: 'white'
    }
  },
  data() {
    return {
      opened: false
    }
  },

  methods: {
    toggleSidebar() {
      this.opened = !this.opened
      this.$emit('toggle')
    }
  }
}
</script>
<style lang="scss">
$black: #3a3a3a;
$white: #fafafa;

@mixin icon($height, $width) {
  background-color: $black;
  height: $height;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  transition-duration: var(--animation-time);
  width: $width;
}

@mixin icon-before($height, $width, $top) {
  background-color: $black;
  content: '';
  height: $height;
  position: absolute;
  top: $top;
  transition-duration: var(--animation-time);
  width: $width;
}

@mixin icon-after($height, $width, $top) {
  background-color: $black;
  closedcontent: '';
  height: $height;
  position: absolute;
  top: $top;
  transition-duration: var(--animation-time);
  width: $width;
}

.sidebar-header {
  display: inline-block;
  //padding: 1rem;
  width: 100%;
  max-width: 80px;
}

.sidebar-toggle {
  height: 35px;
  position: relative;
  transition-duration: var(--animation-time);
  width: 35px;
  margin: 0 auto;
  display: inline-block;

  &__icon {
    @include icon(2px, 100%);

    &:before {
      @include icon-before(2px, 100%, -10px);
    }

    &:after {
      @include icon-after(2px, 100%, 10px);
    }
  }

  &.opened {
    .sidebar-toggle__icon {
      background: transparent;
      transition: var(--animation-time);
      margin-right: 1rem;

      &:before {
        // transform: rotateZ(45deg) scaleX(1.25) translate(6.5px, 6.5px);
      }

      &:after {
        // transform: rotateZ(-45deg) scaleX(1.25) translate(6px, -6px);
      }
    }
  }

  &:hover {
    cursor: pointer;

    .sidebar-toggle__icon {
      &::before,
      &::after {
        box-shadow: inset 0 30px 0 #409eff;
      }
    }
  }
}
</style>
