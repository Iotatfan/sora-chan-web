<template>
  <div class="container home" id="intro">
    <h1 class="headline">Iotatfan's Personal Music Bot</h1>
    <p class="content">Sora-chan private concert in your server.</p>
    <div>
      <a class="btn btn-discord m-2" href="" target="_blank">
        Invite the bot
      </a>
      <a class="btn btn-outline-light m-2" id="btn-cmd">
        <router-link to="/commands">View Commands</router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {},
};
</script>