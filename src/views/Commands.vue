<template>
  <div class="">
    <div class="flex flex-row">
      <!-- Categories -->
      <div class="flex flex-col category-wrapper">
        <io-button
          v-for="(category, index) in categories"
          :custom-class="['category-btn', selectedCategory === index ? 'active' : '']"
          :key="index"
          :label="category"
          @click="selectCategory(index)"
        />
      </div>
      <!-- Commands -->
      <div class="flex flex-col">
        <transition-group
          appear
          @before-enter="beforeEnter"
          @enter="enter"
          @before-leave="beforeLeave"
          @leave="leave"
        >
          <io-accordion 
            v-for="(command) in filteredCommands"
            :key="command.id"  
          >
            <template v-slot:title>
              <div style="margin-left: 1rem">
                {{ command.val }}
              </div>
            </template>
            <template v-slot:body>
              {{ command.desc }}
            </template>
          </io-accordion>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import categoriesData from "../assets/categories.json"
import commandsData from "../assets/commands.json"

export default {
  name: "Commands",
  data() {
    return {
      categories: categoriesData,
      commands: commandsData,
      selectedCategory: 0,
      displayCount: 0,
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
    delayTime: function () {
      let delay = 0;
      gsap.utils.toArray(".btn-cmd").forEach(function (el) {
        if (el.style.opacity == 0) {
          delay++;
        }
      });
      return delay;
    },
    
  },
  methods: {
    selectCategory(value) {
      this.selectedCategory = value;
    },
  },
  setup() {
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };

    const enter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: done,
        // delay: el.dataset.index * 0.2,
        delay: 0.5,
      });
    };

    const beforeLeave = (el) => {
      el.style.opacity = 1;
      // el.style.transform = "translateY(100px)";
    };

    const leave = (el, done) => {
      gsap.to(el, {
        opacity: 0,
        y: 100,
        duration: 1,
        onComplete: done,
        delay: 0.2,
      });
    };

    return { beforeEnter, enter, beforeLeave, leave };
  },
  watch: {},
};
</script>

<style scoped>

.category-wrapper {
  background: var(--dark-grey);
  border-radius: .25rem;
  width: inherit !important;
  max-width: 15rem;
  height: max-content !important;
  padding: .5rem;
}

.category-btn {
  margin: .5rem 1rem .5rem 1rem !important;
  background: var(--semi-dark-grey);
  color: white;
}

.category-btn.active {
  background: var(--discord);
}

@media (max-width: 30rem) {
  .category-wrapper {
    width: auto !important;
    max-width: 100%;
  }

  .category-btn {
    width: inherit;
  }
}
</style>