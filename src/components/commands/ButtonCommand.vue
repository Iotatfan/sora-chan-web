<template>
  <div class="accordion-item px-4 mb-3 rounded" id="accordion">
    <h2 class="accordion-header" :id="'heading' + idx">
      <a
        class="d-flex flex-grow-1 btn btn-command collapsed align-items-start"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapse' + idx"
        aria-expanded="true"
        aria-controls="collapse"
      >
        <!-- <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 512"
          width="24"
          height="24"
          class="mt-2 rotate"
        >
          <path
            fill="white"
            d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
            class=""
          ></path>
        </svg> -->
        {{ command }}
      </a>
    </h2>
    <div
      class="accordion-collapse collapse mb-3"
      :id="'collapse' + idx"
      :aria-labelledby="'heading' + idx"
      data-bs-parent="accordion"
    >
      <div class="accordion-body align-items-start rounded">
        <p class="text-start desc">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonCommand",
  props: ["command", "desc", "idx"],
};
</script>

<style scoped>
.accordion-item {
  background: rgba(42, 44, 48, 1) !important;
}

.accordion-header a {
  font-size: 28px !important;
  font-weight: bold !important;
}

.accordion-body {
  background: rgba(54, 57, 63, 1) !important;
  padding-bottom: 1px !important;
}

.btn-command {
  background: rgba(42, 44, 48, 1) !important;
  color: white !important;
}
</style>