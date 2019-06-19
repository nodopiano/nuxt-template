<template>
  <span class="flex" @click="logout">
    <svgicon icon="turn-off" width="20px" heigth="20px" class="mr-2" /><span>Logout</span>
  </span>
</template>
<script>
export default {
  props: {
    logoutRoute: {
      default: '/logout',
      type: String
    }
  },

  methods: {
    logout() {
      this.$auth.logout()
      this.$router.replace('/login')
    }
  }
}
</script>
<style lang="scss">
$white: #fafafa;
$black: #3a3a3a;
$primary: #409eff;
$animation-time: 0.4s all;

.logout {
  appearance: none;
  background-color: $white;
  border: 1px solid darken($white, 10%);
  border-radius: 0.25rem;
  color: $black;
  cursor: pointer;
  display: inline-block;
  outline: 0;
  padding: 0.5rem 0.75rem;
  text-align: center;
  transition: $animation-time;

  &:hover {
    color: $primary;
    background-color: lighten($primary, 35%);
    border-color: $primary;
    transition: $animation-time;
  }
}
</style>
