<template>
  <div class="header">
    <div class="navbar navbar-dark navbar-expand-lg" id="nav">
      <div class="container-xxl">
        <div class="navbar-brand">
          <a id="title">
            <router-link to="/">
              <img
                src="@/assets/logo.jpg"
                class="img-fluid rounded sora-icon"
                width="64"
              />
            </router-link>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <io-button
                label="Home"
                buttonType="no-border"
                @click="goTo('Home')"
              />
            </li>
            <li class="nav-item">
              <io-button
                label="Commands"
                buttonType="no-border"
                @click="goTo('Commands')"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IoButton from '@/external/components/button/Button.vue'

export default {
  components: {
    IoButton
  },
  name: "AppHeader",
  methods: {
    goTo: function(name) {
      this.$router.push({ name: name })
    }
  }
};
</script>

<style scoped>
#nav {
  margin: 16px;
}

#navbarScroll a {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
}

.sora-icon {
  margin-left: 1.5rem;
}

.nav-link {
  margin-right: 1.5rem;
}

</style>