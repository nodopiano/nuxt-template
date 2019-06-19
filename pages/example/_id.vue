<template>
  <div>
    <single-page-menu :children="children" resource="example" :current="current">
      Pagina di esempio - Show
    </single-page-menu>
    <nuxt-child class="mt-4" resource="example" />
  </div>
</template>

<script>
export default {
  computed: {
    current() {
      return (
        Object.keys(this.links).find(link => {
          return this.$route.path.search(link) !== -1
        }) || 'index'
      )
    },
    children() {
      const pages = this.$store.getters['example/page'].pages
      if (!pages) return []
      let links = Object.keys(pages).map(page => {
        return {
          link: page === 'index' ? '' : page,
          label: pages[page].label
        }
      })
      links.unshift({
        link: '',
        label: this.$store.getters['example/page'].main.label
      })
      return links
    }
  },

  asyncData({ params }) {
    return {
      id: params.id
    }
  },

  async fetch({ store, params }) {}
}
</script>
