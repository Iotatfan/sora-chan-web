<template>
  <li class=" nav-item">
    <a class=" nav-link">
        <router-link :to="{{ name: route.name }}">{{route.name}}</router-link>
    </a>
  </li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
      route: Object
    }
}
</script>

<style>

</style>