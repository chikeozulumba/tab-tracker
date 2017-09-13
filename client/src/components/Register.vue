<template>
  <div>
    <h1>Register:</h1>

   <div class="row">
     <form action="" class="col s12">
       <div class="row">
        <div class="input-field col s6">
          <input 
          type="email" 
          name="email" 
          v-model="email"
          placeholder="Email">
        </div>

        <div class="input-field col s6">
          <input 
          type="password" 
          name="password" 
          v-model="password"
          placeholder="Password">
        </div>
      </div>
      <button @click="register">Register</button>
     </form>
   </div>
  </div>

 
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'Chike',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>

