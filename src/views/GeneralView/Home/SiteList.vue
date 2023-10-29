<template>
  <section>
    <h3>Site list</h3>
    <div>
        <site-card />
        <site-card />
    </div>
  </section>
</template>

<script>
import SiteCard from './SiteCard.vue'

export default {
  components: { SiteCard },

}
</script>

<style>

</style>