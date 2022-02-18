<template>
  <div class="footer card-footer">
    <div class="container-xxl">
      <div class="d-flex justify-content-between" id="main-footer">
        <div class="d-flex flex-column align-items-start pt-2">
          <img
            src="@/assets/logo.jpg"
            class="img-fluid rounded sora-icon"
            width="64"
          />
          <a href="mailto:imaniatfan@gmail.com" class="text-lg-start text-blue"
            >Contact me</a
          >
        </div>
        <div class="d-flex align-items-center me-2">
          <a href="" class="d-flex align-items-center mx-3">
            <fa-icon 
              class="icon-glow fa-2xl"
              :icon="['fab', 'twitter']" 
            />
          </a>
          <a
            href="https://github.com/Iotatfan"
            class="d-flex align-items-center mx-3"
          >
            <fa-icon 
              class="icon-glow fa-2xl"
              :icon="['fab', 'github']" 
            />
          </a>
        </div>
      </div>
      <!-- <div class="mt-2" id="sub-footer">
        <hr />
        <p class="text-center">
          Special thanks to everyone who helped and contributed.
        </p>
      </div> -->
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.sora-icon {
  margin-left: 24px;
}

.icon-glow {
  color: white !important;
  opacity: 0.75;
  transition: 0.3s !important;
}

.icon-glow:hover {
  opacity: 1;
}

.text-blue {
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 24px;
  margin-top: 10px;
  color: var(--blue-link);
  text-decoration: none;
  opacity: 0.8;
  transition: 0.3s;
}

.text-blue:hover {
  color: white;
  opacity: 1;
}
</style>