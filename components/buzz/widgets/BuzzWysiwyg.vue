<template>
  <wysiwyg v-model="content" :placeholder="placeholder" />
</template>
<script>
import Vue from 'vue'
import wysiwyg from 'vue-wysiwyg'

export default {
  props: {
    id: {
      default: '',
      type: String
    },
    name: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    },
    placeholder: {
      default: '',
      type: String
    },
    config: {
      default: function() {
        return {
          hideModules: { code: true },
          maxHeight: '500px'
        }
      },
      type: Object
    }
  },
  data() {
    return {}
  },

  computed: {
    content: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit('input', value)
      }
    }
  },

  beforeMount() {
    Vue.use(wysiwyg, this.config)
  }
}
</script>
<style lang="scss">
$primary: #409eff;

.editr--toolbar {
  background: #ffffff;

  a {
    &:hover {
      background: lighten($primary, 30%);
    }
  }
}
</style>
