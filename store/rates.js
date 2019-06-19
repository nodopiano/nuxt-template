import ModuleBuilder from './builders/ModuleBuilder'

const rateUrl = bookingId => `/api/bookings/${bookingId}/rates`

let rates = ModuleBuilder.Rest('rates')

rates.addActions({
  forceUpdate: async function(context, bookingId) {
    await rates.restRequest(context, this.$axios, 'RESPONSE', {
      url: rateUrl(bookingId),
      method: 'PUT'
    })
    await context.dispatch(`bookings/show`, bookingId, { root: true })
  },
  storeCustom: async function(context, { bookingId, data }) {
    context.dispatch('resetErrors')
    await rates.restRequest(context, this.$axios, 'RESPONSE', {
      url: rateUrl(bookingId),
      method: 'POST',
      data
    })
    await context.dispatch(`bookings/show`, bookingId, { root: true })
  }
})

export const state = rates.state
export const getters = rates.getters
export const actions = rates.actions
export const mutations = rates.mutations
