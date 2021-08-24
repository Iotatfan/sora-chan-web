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
          :class="{ active: index === this.selectedCategory }"
          v-on:click="SelectCategory(index)"
        ></button-category>
      </div>
      <!-- Commands -->
      <div class="d-flex flex-column w-100 ms-lg-3 mt-lg-0 mt-3">
        <button-command
          v-for="(command, index) in filteredCommands"
          :command="command.val"
          :desc="command.desc"
          :idx="index"
          :key="command.id"
        ></button-command>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCategory from "../components/commands/ButtonCategory.vue";
import ButtonCommand from "../components/commands/ButtonCommand.vue";

export default {
  name: "Commands",
  components: {
    ButtonCategory,
    ButtonCommand,
  },
  data() {
    return {
      categories: ["All", "Player", "Setting"],
      commands: [
        {
          id: 0,
          val: ",play",
          desc: "Loads your input and adds it to the queue",
          category: "Player",
        },
        {
          id: 1,
          val: ",queue",
          desc: "Displays the current song queue",
          category: "Player",
        },
        {
          id: 2,
          val: ",skip",
          desc: "Skips to the next song",
          category: "Player",
        },
        {
          id: 3,
          val: ",stop",
          desc: "Stops the currently playing track",
          category: "Player",
        },
        {
          id: 4,
          val: ",shuffle",
          desc: "Randomizes the current order of tracks in the queue",
          category: "Player",
        },
        {
          id: 5,
          val: ",disconnect",
          desc: "Disconnects the bot from your voice channel and clears the queue",
          category: "Player",
        },
        {
          id: 6,
          val: ",autoplay",
          desc: "Toggles AutoPlay, which will automatically queue the best song to play next through looking at your listening history",
          category: "Setting",
        },
      ],
      selectedCategory: 0,
    };
  },
  computed: {
    filteredCommands: function () {
      if (this.selectedCategory === 0) {
        return this.commands;
      }
      return this.commands.filter(
        (n) => n.category == this.categories[this.selectedCategory]
      );
    },
  },
  methods: {
    SelectCategory(value) {
      this.selectedCategory = value;
    },
  },
  watch: {},
};
</script>