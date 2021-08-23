<template>
  <div class="container-xxl">
    <intro></intro>
    <music></music>
    <social></social>
    <ready></ready>
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Music from "@/components/home/Music.vue";
import Social from "@/components/home/Social.vue";
import Ready from "@/components/home/Ready.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    Intro,
    Music,
    Social,
    Ready,
  },
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
</style>
