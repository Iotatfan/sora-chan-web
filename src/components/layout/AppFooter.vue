<template>
  <div class="footer card-footer">
    <div class="container-fluid">
      <div
        class="d-flex justify-content-between align-items-start"
        id="main-footer"
      >
        <div class="d-flex flex-column align-items-start">
          <img
            src="@/assets/logo.jpg"
            class="img-fluid rounded sora-icon"
            width="64"
          />
          <a href="mailto:imaniatfan@gmail.com" class="text-lg-start text-blue"
            >Contact us</a
          >
        </div>
      </div>
      <div id="sub-footer"></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
<style>
.sora-icon {
  margin-left: 24px;
}

.text-blue {
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 24px;
  margin-top: 10px;
  color: #78a4fa;
  text-decoration: none;
  opacity: 0.8;
  transition: 0.3s;
}

.text-blue:hover {
  color: white;
  opacity: 1;
}
</style>