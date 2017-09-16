<template>
  <div id="app">
    <page-header />
    <!-- <img src="./assets/logo.png"> -->
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-group--text-field input {
  border-bottom: 0.4px solid #9e9e9e;
}

.toolbar__title {
  color: white
}

.application {
  min-height: 5vh !important;
}

.danger-alert {
  color: red
}
</style>
