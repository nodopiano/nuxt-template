<template>
  <p
    v-if="errors"
    class="text-red text-xs italic"
    v-text="errors[0]"
  />
</template>
<script>
export default {
  props: {
    errors: {
      type: Array,
      default: undefined
    }
  }
}
</script>
