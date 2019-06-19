<template>
  <div class="auth-page">
    <div class="login justify-center">
      <login-panel>
        <span slot="title">
          Password Dimenticata
        </span>
        <section class="container">
          <div>
            <form>
              <div class="flex mt-4 flex-wrap">
                <label for="email" class="p-2 w-full text-left uppercase font-bold text-grey-dark">
                  E-mail
                </label>
                <input v-model="form.email" type="email" name="email" class="p-2 w-full bg-grey-light border rounded inner-shadow">
                <has-errors :errors="errors.email" />
              </div>
              <div class="flex mt-4 flex-wrap">
                <label for="email" class="p-2 w-full text-left uppercase font-bold text-grey-dark">
                  Nuova password
                </label>
                <input v-model="form.password" type="password" name="password" class="p-2 w-full bg-grey-light border rounded inner-shadow">
                <has-errors :errors="errors.password" />
              </div>
              <div class="flex mt-4 flex-wrap">
                <label for="email" class="p-2 w-full text-left uppercase font-bold text-grey-dark">
                  conferma nuova password
                </label>
                <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="p-2 w-full bg-grey-light border rounded inner-shadow">
                <has-errors :errors="errors.password_confirmation" />
              </div>
              <div class="mt-4">
                <el-button type="primary" native-type="button" @click.prevent="reset()">
                  Reimposta password
                </el-button>
              </div>
            </form>
          </div>
        </section>
      </login-panel>
    </div>
  </div>
</template>

</template>

<script>
import HasErrors from '../components/HasErrors'

export default {
  head() {
    return { title: 'reset_password' }
  },

  components: {
    HasErrors
  },

  data: () => ({
    status: '',
    form: {
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    errors: []
  }),

  created() {
    this.form.token = this.$route.query.token
  },

  methods: {
    async reset() {
      try {
        const { data } = await this.$axios.post('api/password/reset', this.form)
        this.status = data.status
        this.$router.replace('/')
      } catch (error) {
        this.status = error.response.status
        this.errors = error.response.data.errors
      }
    }
  }
}
</script>
