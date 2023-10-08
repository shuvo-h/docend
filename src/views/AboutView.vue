<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <pre>{{api_response}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      api_response:{
        "title":"This is title",
        "paragraph":"This is paragraph. And this is another line."
      }
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
