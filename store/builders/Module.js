/* eslint-disable no-useless-constructor */
export default class Module {
  namespaced = false
  actions = {}
  mutations = {}
  getters = {}
  stateObject = {}

  constructor() {}

  state = () => {
    return this.stateObject
  }

  addState = state => {
    this.stateObject = { ...this.stateObject, ...state }
    return this
  }

  addGetters = getters => {
    this.getters = { ...this.getters, ...getters }
    return this
  }

  addActions = actions => {
    this.actions = { ...this.actions, ...actions }
    return this
  }

  addMutations = mutations => {
    this.mutations = { ...this.mutations, ...mutations }
    return this
  }

  withNamespace = () => {
    this.namespaced = true
    return this
  }
}
