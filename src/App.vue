<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <RouterView v-slot="{Component}">
    <!-- v-slot=Component is the variable for :is=Commponent -->
    <transition name="route-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<style scoped>
  /* transition style start */
  .route-fade-enter-active,
  .route-fade-leave-active {
    transition: opacity 0.5s;
  }
  .route-fade-enter, 
  .route-fade-leave-to {
    opacity: 0;
  }
  /* transition style end */

</style>
