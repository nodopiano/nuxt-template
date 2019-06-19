<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth'
}
</script>
