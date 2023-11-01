<template>
  <div class="container">
    <h2>project site title</h2>
    <div>
        <pre>{{site}}</pre>
        <h2>{{site.info}}</h2>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import {docList} from "@/data/docList.js";
import { onBeforeMount, reactive, toRefs, watch } from 'vue';

export default {
    name:"project-site",
    setup(){
        const router = useRouter();
        const route = useRoute();
        const site = reactive({});

        const siteSlug = route.params.site_slug;
        
       onBeforeMount(()=>{
        const currentSite = docList.find(siteEl => siteEl.slug === siteSlug);
        if (currentSite) {
            Object.assign(site,currentSite);
        }
       })
        console.log({router,siteSlug,site});
        return {
            site,
        }
    },
}
</script>

<style scoped>
    .container{
        padding: 0 10%;
    }
</style>