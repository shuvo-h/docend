<template>
  <div>
    <section class="site_container">
        <aside  >
            <div class="site_nav" style="position: sticky; top: 100px;">
                side accordian nav 
                <site-nav  />
            </div>
        </aside>

        <aside>
            <section 
                v-for="number in Array.from(Array(10).keys())" 
                class="site_details row"
                :key="number"
            >
                <aside>
                    <div v-if="number === 0" style="margin-top: 2rem;">
                        <h2>Chatwoot (1.0.0)</h2>
                        <p>Download OpenAPI specification:Download</p>
                        <p>E-mail: hello@chatwoot.com</p>
                        <p>License: MIT License</p>
                        <p>Terms of Service</p>
                        <p>This is the API documentation for Chatwoot server.</p>  
                    </div>
                    <request-details v-if="number !== 0" style="margin-top: 2rem;" />
                </aside>
                <aside style="background-color: rgb(38 50 56); color: #fff; padding: 2rem;">
                    <ResponseAPI v-if="number !== 0" />
                </aside>
            </section>
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
        max-height: calc(100vh - 150px);
        overflow: auto;

    }
    .site_details{
        
        &.row{
            display: grid;
            grid-template-columns: 1fr minmax(500px,600px);
        }
    }
</style>