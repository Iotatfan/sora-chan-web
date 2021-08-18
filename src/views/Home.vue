<template>
  <div class="container">
    <intro></intro>
    <social></social>
    <!-- <img alt="Vue logo" src="../assets/logo.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import Intro from "@/components/home/Intro.vue";
import Social from "@/components/home/Social.vue";
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    Intro,
    Social,
  },
};
</script>

<style>
.btn {
  font-size: 24px !important;
}

.btn-discord {
  background-color: #6889CB !important;
  color: white !important;
  margin-bottom: 16px;
}

.container .home {
  padding-top: 120px;
  padding-bottom: 40px;
}

.content {
  color: #838185;
  font-size: 30px;
}

.headline {
  font-weight: bold;
  font-size: 54px;
}

#btn-cmd a {
  color: white;
  text-decoration: none;
}

#btn-cmd a:hover {
  color: black;
  text-decoration: none;
}
</style>
