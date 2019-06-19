import ModuleBuilder from './builders/ModuleBuilder'

let owners = ModuleBuilder.Rest('owners')

export const state = owners.state
export const getters = owners.getters
export const actions = owners.actions
export const mutations = owners.mutations
