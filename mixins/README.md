# Cartella `mixins`

Qui puoi trovare alcuni mixins utili per facilitare la creazione di pagine.

* `permissions`: Crea delle permissions reattive in base alle API 
  ```js
  // Esempio
  import permissions from './permissions.js'

  export default {
    mixins: [
      permissions({
        computedPermissionName: 'permission.traverse.in.resource.meta'
      }, 'resource')
    ]
  }
  ```

* `rest`: Aggiunge i metodi `update` e `delete` per una risorsa, e aggiunge due computed property per ottenere la risorsa (`item`) e la pagina (`page`)
  ```js
  import rest from './rest.js'

  export default {
    mixins: [
      rest('your-resource')
    ]
  }
  ```

* `slug`: Crea tre computed property per ottenere la risorsa (`item`), la pagina (`page`), i meta (`meta`) e i links (`links`) di una sottopagina di una risorsa
  ```js
  import slug from './slug.js'

  export default {
    mixins: [
      slug(/* Slug della pagina, altrimenti lo prende da Vue Router */)
    ]
  }
