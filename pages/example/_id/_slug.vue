<template>
  <blocks-view :page="page" resource="example" />
</template>

<script>
import slugMixin from '@/mixins/slug'

export default {
  mixins: [slugMixin()]
}
</script>
