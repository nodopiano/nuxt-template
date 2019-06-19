import ModuleBuilder from './builders/ModuleBuilder'

const bookingUrl = id => `/api/bookings/${id}/payments`

let payments = ModuleBuilder.Rest('payments')
const restRequest = payments.restRequest

payments.addActions({
  updateBooking: async function(context, { bookingId, payments }) {
    await restRequest(context, this.$axios, 'RESPONSE', {
      url: bookingUrl(bookingId),
      method: 'POST',
      data: payments
    })
    await context.dispatch('bookings/show', bookingId, { root: true })
    await context.dispatch(
      'bookings/child',
      { url: bookingUrl(bookingId), slug: 'payments' },
      { root: true }
    )
  },
  deleteBooking: async function(context, { bookingId, paymentId }) {
    await restRequest(context, this.$axios, 'RESPONSE', {
      url: `${bookingUrl(bookingId)}/${paymentId}`,
      method: 'DELETE'
    })
    await context.dispatch('bookings/show', bookingId, { root: true })
    await context.dispatch(
      'bookings/child',
      { url: bookingUrl(bookingId), slug: 'payments' },
      { root: true }
    )
  },
  update: async function(context, { bookingId, paymentId, payment: data }) {
    await restRequest(context, this.$axios, 'RESPONSE', {
      url: `${bookingUrl(bookingId)}/${paymentId}`,
      method: 'PUT',
      data
    })
    await context.dispatch('bookings/show', bookingId, { root: true })
    await context.dispatch(
      'bookings/child',
      { url: bookingUrl(bookingId), slug: 'payments' },
      { root: true }
    )
  }
})

export const state = payments.state
export const getters = payments.getters
export const actions = payments.actions
export const mutations = payments.mutations
