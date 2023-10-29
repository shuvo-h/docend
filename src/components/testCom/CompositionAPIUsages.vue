<template>
  <div>
    <h3>All Composition API useages</h3>
  </div>
</template>

<script>
// Import Composition API functions from Vue
import { ref, reactive, computed, watch, onMounted, onBeforeUnmount, onUpdated, toRefs } from 'vue';

export default {
  setup() {
    // Define and initialize reactive data
    const message = ref('Hello, Vue 3!'); // ref for primitive data
    const user = reactive({ name: 'John', age: 30 }); // reactive for objects

    // Define computed properties
    const userSummary = computed(() => `${user.name} is ${user.age} years old.`);

    // Watch for changes in data
    watch(message, (newValue, oldValue) => {
      console.log(`Message changed from "${oldValue}" to "${newValue}"`);
    });

    // Lifecycle hooks
    onMounted(() => {
      // This code runs when the component is mounted
      console.log('Component is mounted');
    });

    onBeforeUnmount(() => {
      // This code runs before the component is unmounted
      console.log('Component is about to be unmounted');
    });

    onUpdated(() => {
      // This code runs when the component is updated (e.g., when data changes)
      console.log('Component is updated');
    });

    // Returning data, computed properties, and functions to be used in the template
    return {
      message,
      user,
      userSummary,
    };
  }
}
</script>

<style>
/* Your styles here */
</style>
