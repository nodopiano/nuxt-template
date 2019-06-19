<template>
  <div class="auth-page">
    <div class="login justify-center">
      <login-panel v-loading="loading">
        <span slot="title">
          Login
        </span>
        <div class="errors text-red text-sm">
          {{ errors }}
        </div>
        <form>
          <div class="flex flex-wrap">
            <label for="username" class="p-2 w-full text-left uppercase font-bold text-grey-dark">
              Indirizzo Email
            </label>
            <input v-model="user.username" name="username" class="p-2 w-full bg-grey-light border rounded inner-shadow" @click="errors = ''">
          </div>
          <div class="flex mt-4 flex-wrap">
            <label for="password" class="p-2 w-full text-left uppercase font-bold text-grey-dark">
              Password
            </label>
            <input v-model="user.password" type="password" name="password" class="p-2 w-full bg-grey-light border rounded inner-shadow" @click="errors = ''">
          </div>
          <div class="mt-4">
            <el-button type="primary" native-type="submit" class="mt-4" @click.prevent="passwordGrantLogin">
              Accedi
            </el-button>
          </div>
        </form>
        <div class="text-left text-sm mt-8">
          <nuxt-link to="/forgot-password">
            Hai dimenticato la password?
          </nuxt-link>
        </div>
      </login-panel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      errors: '',
      loading: false
    }
  },

  methods: {
    passwordGrantLogin() {
      this.loading = true
      this.errors = ''
      this.$auth
        .loginWith('password_grant', {
          data: {
            grant_type: 'password',
            client_id: process.env.client_id,
            client_secret: process.env.client_secret,
            scope: '*',
            username: this.user.username,
            password: this.user.password
          }
        })
        .then(response => this.$router.replace('/'))
        .catch(errors => {
          this.loading = false
          this.errors = errors.response.data.hint
            ? errors.response.data.hint
            : errors.response.data.message
        })
    }
  }
}
</script>

<style lang="scss">
</style>
