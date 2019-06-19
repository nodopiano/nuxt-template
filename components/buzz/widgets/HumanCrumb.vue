<template>
  <span v-if="link" class="ml-2">
    <nuxt-link :to="link">
      {{ humanCrumb }}
    </nuxt-link>
    <span class="ml-2">
      /
    </span>
  </span>
  <span v-else class="ml-2">
    {{ humanCrumb }}
  </span>
</template>

<script>
export default {
  props: {
    crumb: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '',
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    storeResource: {
      type: String,
      default: '',
      required: false
    },
    storeField: {
      type: String,
      default: 'name',
      required: false
    }
  },

  computed: {
    getFromStore() {
      return (
        !isNaN(this.crumb) &&
        this.storeResource &&
        this.$store.getters[`${this.storeResource}/item`]
      )
    },
    humanCrumb() {
      if (this.getFromStore) {
        let fromStore = this.$store.getters[`${this.storeResource}/item`][
          this.storeField
        ]
        return fromStore || this.crumb
      }
      return isNaN(this.crumb) ? this.$t(`crumbs.${this.crumb}`) : this.crumb
    }
  }
}
</script>
