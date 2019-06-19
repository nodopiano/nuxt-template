<template>
  <div class="error-page container mx-auto max-w-md">
    <div class="error-page__inner">
      <div class="error-page__inner__code">
        {{ error.statusCode }}
      </div>
      <div class="error-page__inner__message">
        <span v-if="error.statusCode === 404">
          La pagina richiesta non esiste
        </span>
        <span v-else>
          {{ error.message }}
        </span>
      </div>
      <div class="error-page__inner__go-home">
        Vai alla
        <nuxt-link to="/">
          Home page
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {
        return {}
      },
      required: false
    }
  },
  layout: 'default'
}
</script>

<style lang="scss">
.error-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #94959e;

  &__inner {
    &__code {
      font-size: 10rem;
      font-weight: bold;
    }

    &__go-home {
      font-size: 1.2rem;
      margin-top: 1rem;
      text-align: center;
    }

    &__message {
      font-size: 1.75rem;
    }
  }
}
</style>
