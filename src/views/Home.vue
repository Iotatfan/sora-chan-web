<template>
  <div class="container">
    <intro></intro>
    <music></music>
    <social></social>
    <ready></ready>
    <!-- <img alt="Vue logo" src="../assets/logo.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Music from '@/components/home/Music.vue';
import Social from "@/components/home/Social.vue";
import Ready from '@/components/home/Ready.vue';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    Intro,
    Music,
    Social,
    Ready
  },
};
</script>

<style>
.btn {
  font-size: 24px !important;
}

.container .home {
  padding-top: 128px;
  padding-bottom: 64px;
}

.content {
  color: #838185;
  font-size: 30px;
}

.headline {
  font-weight: bold;
  font-size: 54px;
}

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
