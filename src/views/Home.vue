<template>
  <div class="container-xxl">
    <intro></intro>
    <music class="trigger left"></music>
    <social class="trigger right"></social>
    <ready class="trigger left"></ready>
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Music from "@/components/home/Music.vue";
import Social from "@/components/home/Social.vue";
import Ready from "@/components/home/Ready.vue";
// @ is an alias to /src
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  components: {
    Intro,
    Music,
    Social,
    Ready,
  },
  mounted() {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      function animateFrom(el) {
        let x = 0

        if (el.classList.contains("left")) {
          x = -128
        } else if (el.classList.contains("right")) {
          x = 128
        }

        el.style.transform = "translate(" + x + "px)";
        el.style.opacity = 0;

        gsap.fromTo(
          el,
          { x: x, y: 0, autoAlpha: 0 },
          {
            duration: 1.5,
            x: 0,
            autoAlpha: 1,
            ease: "power2",
            overwrite: "auto",
          }
        );
      }

      function hide(el) {
        gsap.set(el, { autoAlpha: 0 });
      }

      gsap.utils.toArray(".trigger").forEach(function (el) {
        hide(el);
        ScrollTrigger.create({
          trigger: el,
          onEnter: function () {
            animateFrom(el);
          },
        });
      });
    },
  }
};
</script>

<style>
#btn-cmd {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}

#btn-cmd:hover {
  color: black;
  text-decoration: none;
}

.content {
  padding-bottom: 256px;
}

.content-text {
  color: #838185;
  font-size: 30px;
}
</style>
