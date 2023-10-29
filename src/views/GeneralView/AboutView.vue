<template>
  <div class="about">

    <h1 class="bg">This is an about page</h1>
    <div>
      <h2>{{$t('HEADER.TITLE')}}</h2>
      <p>{{$t('HEADER.PARA')}}</p>
    </div>
    
    <div>
      <pre>{{api_response}}</pre>
    </div>
    
    <div>
      <h2>Counter = {{count}}</h2>
    </div>
    <div>
      <button  @click="changeLocale('en')">English</button>
      <button  @click="changeLocale('ar')">Arabic</button>
    </div>
    <div>
      <woot-avatar></woot-avatar>
    </div>
    <div>
      <form-validate-page />
    </div>
    
  </div>
</template>

<script>
import {ref, onMounted, inject, } from 'vue';
import {useRoute,} from 'vue-router';
import {useStore} from 'vuex';
import FormValidatePage from '../FormValidatePage/FormValidatePage.vue';



export default {
  components: { 
      FormValidatePage ,
    },
  // mixins(){},
  setup(){
    const route = useRoute();
    const store = useStore();
    const count = ref(27);

    // Mounted lifecycle hook
    onMounted(() => {
      // Fetch API data, update state, etc.
    });

    const i18n = inject('i18n'); // Inject the i18n instance

    const changeLocale = (locale) => {
      console.log(locale);
      console.log(store.state.abc,route);
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

<style lang="scss">

// @import '../assets/scss/style.scss';

</style>
