<template>
  <section>
    <div>
        <input type="text" placeholder="search here">
    </div>
    <div>
        <div>
            <ul>
                <li v-for="navItem in activeSiteNavv.section" :key="navItem.slug">
                    <label for="">{{navItem.name}}</label>
                    <ul>
                        <li v-for="category in navItem.categories" :key="category.title">
                            <label for="">{{category.title}}</label>
                            <ul>
                                <li v-for="apiInfo in category.apiList" :key="apiInfo.hash">
                                    <label for="">
                                        <router-link :to="`#${apiInfo.hash}`">
                                            <a>{{apiInfo.title}}</a>
                                        </router-link>
                                    </label>
                                </li>
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
  </section>
</template>

<script>
import {navApiList} from "@/data/navApiList.js"
import { useRoute } from 'vue-router';
import { onBeforeMount, reactive } from 'vue';

export default {
    setup(){
        // find out the side nav of this project
        const route = useRoute();
        const activeSiteNavv = reactive({})
        console.log(route);
        
        onBeforeMount(()=>{
            const result = navApiList.find(navEl=>navEl.slug === route.params.site_slug);
            Object.assign(activeSiteNavv,result);
            console.log({activeSiteNavv});
        })

        return{
            activeSiteNavv,
            navItems: navApiList,
        }
    }
}
</script>

<style>

</style>