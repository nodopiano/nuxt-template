<template>
  <div class="dashboard">
    <buzz-header app-name="Nuova dashboard con Nuxt" @toggle="sidebar = !sidebar" />
    <div class="dashboard__inner">
      <buzz-sidebar :menu="menu" :opened="sidebar">
        <template #menu>
          <karto-web />
        </template>
      </buzz-sidebar>
      <div class="dashboard__body">
        <div class="dashboard__content">
          <div v-if="showBreadCrumbs" class="mb-8 text-xs breadcrumbs">
            <bread-crumbs />
          </div>
          <nuxt />
          <panel v-if="false" class="mt-16">
            <template #header>
              Attività recenti
            </template>
            <span class="text-grey-dark">
              logs
            </span>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KartoWeb from '@/components/KartoWeb'

export default {
  components: {
    KartoWeb
  },

  data() {
    return {
      sidebar: false
    }
  },

  computed: {
    menu() {
      return this.$store.getters['dashboard/menu']
    },
    showBreadCrumbs() {
      return (
        this.$route.path !== '/' &&
        this.$route.path !== '/reports' &&
        this.$route.path !== '/reports/'
      )
    }
  },

  watch: {
    '$route.path': function() {
      this.sidebar = false
    }
  },

  created() {
    this.$store.dispatch('dashboard/getMenu')
  }
}
</script>

<style lang="scss">
.content__inner {
  &--user {
    .panel {
      font-size: 1.1rem;
      text-align: center;

      &:hover {
        .panel__inner {
          transform: scale(0.99);
          transition: var(--animation-time);
        }
      }

      &__inner {
        align-items: flex-start;
        transform: scale(1);
        transition: var(--animation-time);
      }

      &__header,
      &__footer {
        * {
          margin: 0 auto;
          text-align: center;
        }
      }

      &__icon {
        font-size: 8rem;
      }
    }
  }
}

.dashboard {
  background-color: var(--main-bg-color);

  &__body {
    align-content: flex-start;
    display: flex;
    flex: 1 1 auto;
    flex-flow: row wrap;
    margin: 80px 0 0 auto;
    min-height: calc(100vh - 80px);
    transition: var(--animation-time);
    width: 100%;

    @media print {
      margin: 0;
    }

    @media screen and (min-width: 600px) {
      margin: 0 0 0 auto;
      max-width: calc(100% - 80px);

      .sidebar--opened + & {
        max-width: calc(100% - 250px);
        transition: var(--animation-time);
      }
    }
  }

  &__inner {
    display: flex;
    flex-flow: row wrap;
  }

  &__content {
    width: 100%;
    padding: 0.5rem;

    @media screen and (min-width: 600px) {
      padding: 1rem 4rem;
    }
  }
}

.error-message {
  color: var(--error-color);
}

.form__error {
  input,
  select,
  textarea {
    border: 1px solid var(--error-color);
    box-shadow: none;

    &:focus {
      border: 1px solid var(--error-color) !important;
      box-shadow: none;
    }
  }
}

.page-error {
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  font-weight: bold;
  justify-content: center;
  min-height: calc(80vh - 80px);
  opacity: 0.15;
  text-align: center;
  width: 100%;

  &__code {
    font-size: 20rem;
    width: 100%;
  }

  &__description {
    font-size: 2rem;
    width: 100%;
  }
}

.breadcrumbs {
  @media print {
    display: none;
  }
}
</style>
