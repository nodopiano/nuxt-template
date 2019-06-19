import pick from 'lodash/pick'

export default resource => {
  return {
    computed: {
      item() {
        return this.$store.getters[`${resource}/item`] || {}
      },
      page() {
        return this.$store.getters[`${resource}/page`] || {}
      }
    },
    methods: {
      delete: async function() {
        await this.$store.dispatch(`${resource}/delete`, this.$route.params.id)
        if (this.$withoutErrors(resource)) {
          this.$router.push(`/${resource}}`)
          return this.$message.success('Risorsa eliminata')
        }
        this.$message.error("Impossibile proseguire con l'eliminazione")
      },
      update: async function() {
        await this.$store.dispatch(`${resource}/update`, {
          id: this.$route.params.id,
          data: pick(this.item, this.page.fillable)
        })
        if (this.$withoutErrors(resource)) {
          this.$message.success('Aggiornamento eseguito con successo')
          this.$store.dispatch(`${resource}/show`, this.$route.params.id)
        } else {
          this.$message.error("Impossibile completare l'aggiornamento")
        }
      }
    }
  }
}
