import RestModule from './RestModule'
import Module from './Module'

export default class ModuleBuilder {
  static Rest(url) {
    return new RestModule(url).withNamespace()
  }

  static Create() {
    return new Module().withNamespace()
  }
}
