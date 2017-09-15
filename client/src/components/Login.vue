<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="blue-grey darken-2" dark>
          <v-toolbar-title> Login </v-toolbar-title>
        </v-toolbar>
      </div>

      <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="text" name="email" v-model="email" label="Email" required></v-text-field>

          <v-text-field type="password" name="password" v-model="password" label="Password" required></v-text-field>

          <div class="error" v-html="error" />
          <v-btn light dark class="" large @click="login">Login</v-btn>
      </div>

    </v-flex>
  </v-layout>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
/* #reg {
  padding: 10px
} */
</style>

