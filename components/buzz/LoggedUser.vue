<template>
  <div class="relative cursor-pointer z-10">
    <Avatar :username="loggedInUser.data.name" :size="20" inline class="mr-2" />
    <span v-if="loggedInUser.data.name" class="hidden md:inline-block">{{
      loggedInUser.data.name
    }}</span>
    <span v-else class="hidden md:inline-block">{{ loggedInUser.data.name }}</span>
    <span class="inline-block ml-2">
      <svg
        class="fill-current text-grey-darker h-4 w-4 block opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
        />
      </svg>
    </span>
  </div>
</template>
<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar
  },

  props: {
    user: {
      type: Object,
      default: () => ({
        name: 'user'
      })
    }
  },
  data() {
    return {}
  },

  computed: {
    loggedInUser() {
      return this.$auth.user
    }
  },

  created() {}
}
</script>
<style lang="scss">
$animation-time: 0.4s all;

.user-profile {
  width: 100%;

  &__avatar {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    display: inline-block !important;
    transform: scale(1);
    transition: $animation-time;
  }

  &__info {
    display: inline-block;
  }
}

.user-profile {
  background-color: transparent;
  color: #3a3a3a;
  line-height: 20px;

  &__name {
    font-size: 1rem;
    line-height: 20px;
    text-align: center;
    text-transform: lowercase;
  }
}
</style>
