<template>
  <div class="container home" id="intro">
    <h1 class="headline">Ready for Sora concert?</h1>
    <p class="content">
      Add Sora to your Discord server today and listen to all of your favorite
      songs together with your friends!
    </p>
    <div>
      <invite-button />
    </div>
  </div>
</template>

<script>
import InviteButton from "./InviteButton.vue";
export default {
  name: "Ready",
  components: {
    InviteButton,
  },
};
</script>
    