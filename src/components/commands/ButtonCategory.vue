<template>
  <a
    class="d-flex flex-grow-1 justify-content-center btn btn-category m-2 px-5"
    :tabindex="idx"
  >
    {{ category }}
  </a>
</template>

<script>
export default {
  name: "ButtonCategory",
  props: ["category", "idx"],
};
</script>

<style scoped>
.btn-category {
  background: rgba(42, 44, 48, 1) !important;
  color: white !important;
  margin-bottom: 16px;
}

a {
  font-size: 18px !important;
}

.btn-category:focus {
  background: rgba(114, 137, 218, 1) !important;
  box-shadow: none !important;
}
</style>