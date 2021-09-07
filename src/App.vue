<template>
  <app-header />
  <div class="flex-wrapper">
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "./components/layout/AppFooter.vue";
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

.btn {
  font-size: 24px !important;
}

.flex-wrapper {
  display: flex;
  min-height: 88vh;
  flex-direction: column;
  justify-content: space-between;
}

.headline {
  font-weight: bold;
  font-size: 54px;
}
</style>
