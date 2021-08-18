<template>
  <div class="navbar navbar-dark navbar-expand-lg" id="nav">
    <div class="container-fluid">
        <div class="navbar-brand">
            <router-link to="/">
                <img src="@/assets/logo.jpg" class=" img-fluid rounded" width="30">
                <a id="title" class=""> Sora-chan</a>
            </router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style="--bs-scroll-height: 100px;">
                <li class=" nav-item">
                    <a class=" nav-link">
                        <router-link to="/">Home</router-link>
                    </a>
                </li>
                 <li class=" nav-item">
                    <a class=" nav-link">
                        <router-link to="/guide">Guide </router-link>
                    </a>
                </li>
                 <li class=" nav-item">
                    <a class=" nav-link">
                        <router-link to="/about">About </router-link>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'AppHeader',
    components: {
    }
}
</script>

<style>
#title {
    font-weight: bold;
}

</style>