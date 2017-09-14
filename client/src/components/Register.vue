<template>
  <div class="container">
    <div class="row">
      <div id="reg" class="col s6 card-panel">
        <h5>Register</h5>
        <div class="input-field">
          <input type="text" name="email" v-model="email" placeholder="Email">
        </div>

        <div class="input-field">
          <input type="password" name="password" v-model="password" placeholder="Password">
          <div class="error" v-html="error" />
          <a class="btn waves-effect waves-orange" @click="register">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red
}

#reg {
  padding: 10px
}
</style>

