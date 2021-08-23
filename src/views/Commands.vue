<template>
  <div class="container px-xxl-5 py-5">
    <div class="d-flex flex-lg-row flex-column container pt-5 px-xxl-5">
      <!-- Categories -->
      <div
        class="
          d-flex
          flex-row flex-lg-column flex-wrap
          justify-content-center
          bg-dark
          rounded
          py-1
          px-2
          h-100
        "
      >
        <button-category
          v-for="(category, index) in categories"
          :category="category"
          :idx="index"
          :key="index"
        ></button-category>
      </div>
      <!-- Commands -->
      <div class="d-flex flex-column w-100 ms-lg-3 mt-lg-0 mt-3">
        <button-command
          v-for="(command, index) in commands"
          :command="command.val"
          :desc="command.desc"
          :idx="index"
          :key="index"
        ></button-command>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCategory from "../components/commands/ButtonCategory.vue";
import ButtonCommand from '../components/commands/ButtonCommand.vue';

export default {
  name: "Commands",
  components: {
    ButtonCategory,
    ButtonCommand,
  },
  data() {
    return {
      categories: ["All", "Basic", "Player", "Setting"],
      commands: [
        { val: "/play", desc: "Loads your input and adds it to the queue" },
        { val: "/queue", desc: "Displays the current song queue" },
        { val: "/skip", desc: "Skips to the next song" },
        { val: "/stop", desc: "Stops the currently playing track" },
      ],
    };
  },
};
</script>