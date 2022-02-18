<template>
  <div class="pt-5">
    <h1 class="content-header">Iotatfan's Personal Music Bot</h1>
    <p class="content-body">Sora private concert in your server.</p>
    <div>
      <!-- Discord Invite Button -->
      <io-button
        label="Add to Discord"
        button-type="discord"
        @click="inviteToDiscord"
      />
      <!-- View Command Button -->
      <io-button
        label="View Commands"
        button-type="transparent"
        @click="goToCommands"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: "Intro",
  methods: {
    inviteToDiscord: function() {
      window.open("https://discord.com/api/oauth2/authorize?client_id=697841248987512924&permissions=36826624&scope=bot", "_blank")
    },
    goToCommands: function() {
      this.$router.push({ name: 'Commands' })
    }
  }
};
</script>

<style scoped>

</style>