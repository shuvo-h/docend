<template>
  <section>
    <h3>Site list</h3>
    <div v-for="site in siteList" :key="site.title">
        <site-card 
          :title="site.title" 
          :slug="site.slug" 
          :logo_url="site.logo_url" 
          :time_stamp="site.time_stamp" 
          :category="site.category" 
          :summary="site.summary" 
        />
    </div>
  </section>
</template>

<script>
import SiteCard from './SiteCard.vue';
import {siteList} from '@/data/sitedata.js';


export default {
  components: { SiteCard },
  setup(){
    
    return{
      siteList,
    }
  },
}
</script>

<style>

</style>