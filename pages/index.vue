<template>
  <div class="main-page">
    La tua prima pagina!
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  middleware: 'auth'
}
</script>

<style lang="scss">
.main-page {
  width: 100%;

  &__inner {
    margin-top: 2rem;

    &__img img {
      height: 232px;
    }
  }
}
</style>
