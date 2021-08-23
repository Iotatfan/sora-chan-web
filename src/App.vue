<template>
  <app-header />
  <router-view />
  <app-footer />
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

html, body {
  background: #141518 !important;
}

.btn {
  font-size: 24px !important;
}

.content {
  padding-top: 128px;
  padding-bottom: 64px;
}

.content-text {
  color: #838185;
  font-size: 30px;
}

.headline {
  font-weight: bold;
  font-size: 54px;
}

.glow {
  opacity: 65%;
  transition: 0.3s;
}

.glow:hover {
  opacity: 100%;
}
</style>
