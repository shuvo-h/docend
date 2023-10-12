<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <h2>{{$t('HEADER.TITLE')}}</h2>
      <p>{{$t('HEADER.PARA')}}</p>
    </div>
    <div>
      <router-link to="/home">Home</router-link>
      <br>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <pre>{{api_response}}</pre>
    </div>
    <div>
      <h2>Counter = {{count}}</h2>
    </div>
      <div>
        <button @click="changeLocale('en')">English</button>
        <button @click="changeLocale('ar')">Arabic</button>
        <!-- Your other content -->
      </div>
  </div>
</template>

<script>
import {ref, onMounted, inject} from 'vue';

export default {
  // mixins(){},
  setup(){
    const count = ref(27);

    // Mounted lifecycle hook
    onMounted(() => {
      // Fetch API data, update state, etc.
    });

    const i18n = inject('i18n'); // Inject the i18n instance

    const changeLocale = (locale) => {
      i18n.global.locale = locale;
    };

    return {
      count,
      changeLocale,
      api_response:{
        "title":"This is title",
        "paragraph":"This is paragraph. And this is another line."
      }
    }
  },
}
</script>

<style>


</style>
