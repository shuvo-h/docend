<template>
  <main class="container">
    <h2>Home page</h2>
    <site-list />
    <div>
      <woot-modal></woot-modal>
    </div>
  </main>
</template>

<script>
  import SiteList from './SiteList.vue';

  export default {
    components: {SiteList, },
    setup(){},
  }
</script>


<style scoped>
  .container{
    padding: 0 10%;
  }
</style>