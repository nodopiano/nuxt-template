<template>
  <div>
    <blocks-view :page="page" resource="customslug" />
  </div>
</template>

<script>
import slugMixin from '@/mixins/slug'

export default {
  mixins: [slugMixin('customslug')],

  async created() {
    const links = this.$store.getters['example/links']
    await this.$store.dispatch('example/child', {
      url: links.customslug,
      slug: 'customslug'
    })
  }
}
</script>
