<template>
  <div>
    <el-autocomplete
      v-model="search"
      class="global-search inline-input w-full rounded-full"
      :fetch-suggestions="fetchSuggestions"
      :placeholder="placeholder"
    >
      <template slot-scope="auto">
        <div class="auto-results">
          <b class="auto-results__title">
            {{ auto.item.label }}
          </b>
          <div class="auto-results__list">
            <nuxt-link
              v-for="(link, index) in auto.item.results"
              :key="index"
              :to="`/${auto.item.slug}/${link.id}`"
              class="auto-results__list__link"
            >
              {{ link.value }}
              <el-tag v-if="link.tag" size="mini">
                {{ link.tag.value || link.tag.label }}
              </el-tag>
            </nuxt-link>
          </div>
        </div>
      </template>
    </el-autocomplete>
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      default: 'cerca...',
      type: String
    }
  },

  data() {
    return {
      search: ''
    }
  },

  methods: {
    fetchSuggestions: async function(query, displayResults) {
      if (!query) return displayResults(new Array(0))

      const params = this.$urlBuilder.rawPair('value', query).get()
      const { data } = await this.$axios.get(`/api/search${params}`)

      displayResults(
        Object.keys(data.data).map(slug => {
          return {
            slug,
            label: data.data[slug].label,
            results: data.data[slug].results
          }
        })
      )
    }
  }
}
</script>

<style lang="scss">
.rounded-full input {
  border-radius: 30px;
}
.auto-results {
  cursor: default;

  &__list {
    &__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;

      .el-tag {
        margin-left: 0.5rem;
      }

      &:hover {
        background-color: #f5f7fa;
      }
    }
  }

  &__title {
    cursor: default;
    padding-left: 1rem;
  }
}

.el-autocomplete-suggestion {
  li {
    padding: 0;
  }

  li.highlighted,
  li:hover {
    background-color: initial;
  }
}
</style>
