<template>
  <div>
    <h2>project site title</h2>
    <div>
        <pre>{{site}}</pre>
        <h2>{{site.info}}</h2>
    </div>
    <section class="site_container">
        <aside class="site_nav">
            side accordian nav 
            <site-nav />
        </aside>
        <aside class="site_details">
            <request-details />
            <ResponseAPI />
        </aside>
    </section>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import {docList} from "@/data/docList.js";
import { onBeforeMount, reactive, } from 'vue';
import SiteNav from './SiteNav.vue';
import ResponseAPI from './ResponseAPI.vue';
import RequestDetails from './RequestDetails.vue';

export default {
  components: { SiteNav, ResponseAPI, RequestDetails, },
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

<style lang="scss" scoped>
    .site_container{
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 1rem;
    }
    .site_nav{
        border: 1px solid;
        background-color: rgb(225, 225, 225);
        max-height: calc(100vh - 250px);
        overflow: auto;
    }
    .site_details{
        
        .row{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 1rem;
        }
    }
</style>