<template>
  <nuxt />
</template>

<style lang="scss">
$light-gray: #fefefe;
$white: #ffffff;
$global-radius: 3px;
$medium-gray: #dddddd;

.auth-page {
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100vh;

  &__inner {
    width: 100%;
  }

  &__panel {
    background-color: $white;
    border-radius: $global-radius;
    box-shadow: 0.5rem 0.5rem 1rem $medium-gray;
    padding: 2rem;
  }

  &__content {
    margin: 0 auto 1rem;

    p {
      margin: 0 auto;
    }
  }

  input[type='checkbox'] {
    appearance: none;
    border: 1px solid $medium-gray;
    border-radius: $global-radius;
    height: 36px;
    margin: 0 0.5rem 0 0;
    position: relative;
    vertical-align: middle;
    width: 36px;

    &:checked {
      background-color: get-color(primary);

      &::before {
        content: 'x';
        color: $white;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
      }
    }

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  &__button {
    margin: 1rem auto;
  }

  input,
  select,
  textarea {
    &:focus {
      border: 1px solid get-color(primary);
    }
  }
}

.login {
  &__logo {
    margin: 1rem auto;
  }

  &__title {
    color: #409eff;
  }

  &__field {
    margin: 0 auto 1rem;
  }
}
</style>
