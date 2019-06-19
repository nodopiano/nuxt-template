export default (slug = '') => {
  return {
    asyncData({ params }) {
      return {
        slug: slug || params.slug,
        id: params.id
      }
    },

    props: {
      resource: {
        type: String,
        required: true
      }
    },

    computed: {
      page() {
        return this.$store.getters[`${this.resource}/page`].pages
          ? this.$store.getters[`${this.resource}/page`].pages[this.slug]
          : {}
      },
      item() {
        return this.$store.getters[`${this.resource}/item`]
      },
      meta() {
        return this.$store.getters[`${this.resource}/meta`]
      },
      links() {
        return this.$store.getters[`${this.resource}/links`]
      }
    }
  }
}
