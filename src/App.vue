<template>
  <div class="wrapper">
    <app-header></app-header>
  </div>
  <router-view/>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue'

export default {
    name: 'App',
    components: {
      AppHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  color: white;
  text-decoration: none;
}

body {
  background: #141518 !important;
}

</style>
