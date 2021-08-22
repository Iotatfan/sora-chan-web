<template>
  <div class="container home" id="intro">
    <h1 class="headline">Iotatfan's Personal Music Bot</h1>
    <p class="content">Sora private concert in your server.</p>
    <div>
      <invite-button />
      <router-link class="btn btn-outline-light m-2" id="btn-cmd" to="/commands"
        >View Commands</router-link
      >
    </div>
  </div>
</template>

<script>
import InviteButton from "./InviteButton.vue";

export default {
  name: "Intro",
  components: {
    InviteButton,
  },
};
</script>