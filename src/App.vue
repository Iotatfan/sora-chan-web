<template>
  <app-header></app-header>
  <router-view />
</template>

<script>
import AppHeader from "./components/navigation/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

body {
  background: #141518 !important;
}
</style>
