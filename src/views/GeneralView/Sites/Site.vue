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
            <div>
                <input type="text" placeholder="search here">
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <label for="">Platform</label>
                            <ul>
                                <li>
                                    <label for="">Users API</label>
                                    <ul>
                                        <li><label for="">Careate User</label></li>
                                        <li><label for="">Get User</label></li>
                                        <li><label for="">Delete User</label></li>
                                        <li><label for="">Update User</label></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="">Application</label>
                            <ul>
                                <li>
                                    <label for="">Video API</label>
                                    <ul>
                                        <li><label for="">Add a Video</label></li>
                                        <li><label for="">Get Video</label></li>
                                        <li><label for="">Delete Video</label></li>
                                        <li><label for="">Update Video</label></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <label for="">API docs by BondBridgeLink Inc.</label>
                </div>
            </div>
        </aside>
        <aside class="site_details">
            <div class="row">
                <div>details 1</div>
                <div>API Response code snippet response 1</div>
            </div>
            <div class="row">
                <div>details 2</div>
                <div>
                    API Response code snippet response 2
                    <pre style="color:#00FFFF;background-color:#000; width:fit-content;">{{site}}</pre>
                </div>
            </div>
        </aside>
    </section>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import {docList} from "@/data/docList.js";
import { onBeforeMount, reactive, } from 'vue';

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

<style lang="scss" scoped>
    .site_container{
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 1rem;
    }

    .site_details{
        
        .row{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 1rem;
        }
    }
</style>