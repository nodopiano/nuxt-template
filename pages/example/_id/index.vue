<template>
  <div>
    <blocks-view resource="example" :page="page.main || {}" />
  </div>
</template>

<script>
import restMixin from '@/mixins/rest'
import permissionsMixin from '@/mixins/permissions'

export default {
  mixins: [
    restMixin('example'),
    permissionsMixin(
      {
        canSave: 'save',
        canDelete: 'delete'
      },
      'example'
    )
  ]
}
</script>
