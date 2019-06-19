class UrlBuilder {
  constructor() {
    this.stringParams = ''
  }

  addParam(key, param) {
    this.stringParams.length
      ? (this.stringParams += '&')
      : (this.stringParams = '?')
    this.stringParams += String(key) + '=' + String(param)
  }

  include(...toBeIncluded) {
    if (toBeIncluded[0]) this.addParam('include', toBeIncluded.join(','))
    return this
  }

  append(...toAppend) {
    if (toAppend[0]) this.addParam('append', toAppend.join(','))
    return this
  }

  where(filter, ...params) {
    if (params[0]) this.addParam(`filter[${filter}]`, params.join(','))
    return this
  }

  sortBy(field, order) {
    if (field) this.addParam('sort', `${order ? '' : '-'}${field}`)
    return this
  }

  page(pageNumber) {
    this.addParam('page', pageNumber)
    return this
  }

  period(params) {
    this.addParam('period', params.join(','))
    return this
  }

  get() {
    const stringParams = this.stringParams
    this.clean()
    return stringParams
  }

  clean() {
    this.stringParams = ''
    return this
  }

  print() {
    console.log(this.stringParams)
    return this
  }

  rawPair(key, param) {
    this.addParam(key, param)

    return this
  }

  rawString(param) {
    this.stringParams += String(param)

    return this
  }
}

export { UrlBuilder }

export default ({ app }, inject) => {
  inject('urlBuilder', new UrlBuilder())
}
