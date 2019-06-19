import { unset } from 'lodash'
import Module from './Module'

export default class RestModule extends Module {
  resource = ''

  constructor(resource) {
    super()
    this.resource = resource
    this.loading()
      .response()
      .meta()
      .links()
      .children()
      .errors()
      .page()
    this.implementRest()
  }

  loading = () => {
    this.addState({ loading: false })
    this.addGetters({ loading: state => state.loading })
    this.addMutations({
      LOADING: (state, loading) => (state.loading = loading)
    })
    return this
  }

  response = () => {
    this.addState({ response: {} })
    this.addGetters({ response: state => state.response })
    this.addMutations({
      RESPONSE: (state, response) => (state.response = response)
    })
    return this
  }

  meta = () => {
    this.addState({ meta: {} })
    this.addGetters({ meta: state => state.meta })
    return this
  }

  links = () => {
    this.addState({ links: {} })
    this.addGetters({ links: state => state.links })
    return this
  }

  children = () => {
    let _this = this
    this.addState({ child: {}, childMeta: {} })
    this.addGetters({ child: state => state.child })
    this.addActions({
      child: async function(context, { url, slug, mergeMeta }) {
        await _this.restRequest(context, this.$axios, 'CHILD', { url })
        context.commit('MERGE_CHILD', { slug, mergeMeta })
        return true
      }
    })
    this.addMutations({
      CHILD: (state, { data }) => {
        let child = data.data || data
        if (data.meta) state.childMeta = data.meta
        state.child = child
      },
      MERGE_CHILD: (state, { slug, mergeMeta = false }) => {
        delete state.item[slug]
        let tempItem = { ...state.item }
        tempItem[slug] = state.child
        state.item = { ...tempItem }
        if (mergeMeta) {
          delete state.meta[slug]
          let tempMeta = { ...state.meta }
          tempMeta[slug] = state.childMeta
          state.meta = { ...tempMeta }
        }
      }
    })
    return this
  }

  errors = () => {
    this.addState({ errors: {} })
    this.addGetters({ errors: state => state.errors })
    this.addActions({
      resetErrors: ({ commit }) => {
        commit('ERRORS', {})
      },
      clearError: ({ commit }, traverse) => {
        commit('CLEAR_ERROR', traverse)
      }
    })
    this.addMutations({
      ERRORS: (state, errors) => {
        state.errors = {}
        state.errors = errors
      },
      CLEAR_ERROR: (state, traverse) => {
        unset(state.errors, traverse)
      }
    })
    return this
  }

  page = () => {
    let _this = this
    this.addState({ page: [] })
    this.addGetters({ page: state => state.page })
    this.addActions({
      page: async function(context, id = null) {
        context.dispatch('resetErrors')
        if (!process.env.MOCK_PAGES)
          await _this.restRequest(context, this.$axios, 'PAGE', {
            url: `/api/pages/${_this.resource}${id ? '/' + id : ''}`
          })
        if (!_this.empty(context.state.errors) || process.env.MOCK_PAGES) {
          console.warn('CARICO PAGINA DA JSON!')
          const jsonPage = await import(`@/json-files/pages/${_this.resource}/${
            id ? 'show.json' : 'index.json'
          }`)
          context.commit('PAGE', jsonPage.default)
        }
      }
    })
    this.addMutations({
      PAGE: (state, { data }) => (state.page = data.data || data)
    })
    return this
  }

  implementRest = () => {
    this.index()
      .create()
      .store()
      .show()
      .edit()
      .update()
      .delete()
    return this
  }
  /* REST Standard Methods */
  index = () => {
    let _this = this
    this.addState({ index: {} })
    this.addGetters({ index: state => state.index })
    this.addActions({
      index: async function(context, params = '') {
        context.dispatch('resetErrors')
        await _this.restRequest(context, this.$axios, 'INDEX', {
          url: `/api/${_this.resource}${params}`
        })
      }
    })
    this.addMutations({
      INDEX: (state, { data }) => {
        state.index = {}
        state.index = data.data || data
        state.meta = data.meta
      }
    })
    return this
  }

  create = () => {
    let _this = this
    this.addState({ create: {} })
    this.addGetters({ create: state => state.create })
    this.addActions({
      create: async function(context, show = true) {
        context.dispatch('resetErrors')
        if (!show) return context.commit('CREATE', { data: { data: null } })
        await _this.restRequest(context, this.$axios, 'CREATE', {
          url: `/api/pages/${_this.resource}/create`
        })
      }
    })
    this.addMutations({
      CREATE: (state, { data }) => (state.create = data.data || data)
    })
    return this
  }

  store = () => {
    let _this = this
    this.addActions({
      store: async function(context, payload) {
        await _this.restRequest(context, this.$axios, 'ITEM', {
          method: 'POST',
          url: `/api/${_this.resource}`,
          data: payload
        })
      }
    })
    return this
  }

  show = () => {
    let _this = this
    this.addState({ item: {} })
    this.addGetters({ item: state => state.item })
    this.addActions({
      updateItem: ({ commit }, item) => commit('UPDATE_ITEM', item),
      show: async function(context, id) {
        await _this.restRequest(context, this.$axios, 'ITEM', {
          url: `/api/${_this.resource}/${id}`
        })
      }
    })
    this.addMutations({
      ITEM: (state, { data }) => {
        let newItem = data.data || data
        state.item = false
        state.meta = false
        state.item = newItem
        state.meta = data.meta
        state.links = data.links
      },
      UPDATE_ITEM: (state, data) => {
        state.item = false
        state.item = data
      }
    })
    return this
  }

  edit = () => {
    return this
  }

  update = () => {
    let _this = this
    this.addActions({
      update: async function(context, { id, data }) {
        context.dispatch('resetErrors')
        await _this.restRequest(context, this.$axios, 'RESPONSE', {
          url: `/api/${_this.resource}/${id}`,
          method: 'PUT',
          data
        })
        if (!context.getters.errors.errors) context.dispatch('show', id)
      }
    })
    return this
  }

  delete = () => {
    let _this = this
    this.addState({ showDelete: false })
    this.addGetters({ showDelete: state => state.showDelete })
    this.addActions({
      showDelete: ({ commit }, show) => commit(show),
      delete: async function(context, id) {
        context.dispatch('resetErrors')
        await _this.restRequest(context, this.$axios, 'RESPONSE', {
          method: 'DELETE',
          url: `/api/${_this.resource}/${id}`
        })
      }
    })
    this.addMutations({
      SHOW_DELETE: (state, show) => (state.showDelete = show)
    })
    return this
  }

  restRequest = async ({ commit }, driver, mutation, axiosParams) => {
    let response = {}
    commit('LOADING', true)

    try {
      response = await driver(axiosParams)
      commit(mutation, response)
    } catch (errors) {
      // console.warn('RestRequest:', errors)
      response = errors.response
      let toCommit = errors
      if (errors.response)
        toCommit = errors.response.data
          ? errors.response.data.errors || {
              error: errors.response.data.message
            }
          : errors.response
      commit('ERRORS', toCommit)
    }

    commit('LOADING', false)
    return response
  }

  empty = obj => {
    return Boolean(!Object.keys(obj).length)
  }
}
