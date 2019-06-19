<template>
  <nuxt-link :to="link">
    <div class="square links__item" @click="$emit('scroll-top')">
      <div v-if="icon" class="square__svg">
        <svgicon :icon="icon" width="48" height="48" />
      </div>
      <div class="square__label">
        {{ label }}
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: '',
      required: false
    }
  }
}
</script>
<style lang="scss">
.square {
  width: 200px;
  height: 200px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.05);
  margin: 2rem;
  transition: all 350ms;
  transition-property: background-color, color ease-in;
  text-align: center;

  &:hover {
    @apply text-white bg-blue;
  }

  &__svg + &__label {
    margin-top: 1rem;
  }

  &__label {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 0 0.5rem;
  }
}
</style>
