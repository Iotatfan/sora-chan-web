<template>
  <app-header />
  <div class="flex-wrapper">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
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
  color: var(white);
  font-size: 16px;
}

body {
  background: var(--black-body) !important;
}

.flex-wrapper {
  display: flex;
  min-height: 70vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 20rem 0rem 20rem;
}

@media (max-width: 90rem) {
  .flex-wrapper {
    padding: 5rem 5rem 0rem 5rem;
  }
}

@media (max-width: 30rem) {
  .flex-wrapper {
    padding: 1rem;
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.25s ease-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.route-leave-active {
  transition: all 0.25s ease-in;
}
</style>
