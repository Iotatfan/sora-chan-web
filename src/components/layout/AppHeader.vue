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
              <router-link class="nav-link glow white" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link glow white" to="/commands">Commands</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link glow white" to="/about">About</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
};
</script>

<style scoped>
#nav {
  margin: 16px;
}

#navbarScroll a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

.sora-icon {
  margin-left: 24px;
}

.nav-link {
  margin-right: 24px;
}

.white {
  color: white !important;
  opacity: 0.75;
  text-decoration: none;
  transition: 0.3s !important;
}

.white:hover {
  opacity: 1;
}

</style>