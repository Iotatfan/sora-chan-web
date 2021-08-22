<template>
  <app-header />
  <router-view />
  <app-footer />
</template>

<script>
import AppFooter from './components/layout/AppFooter.vue';
import AppHeader from "./components/layout/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
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
