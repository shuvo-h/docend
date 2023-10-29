<template>
  <nav class="navbar_top" ref="navContainer">
    <div class="brand">DocEnd</div>
    <div>
        <ol class="items" :class="{items_hide: !isOpen}">
            <li v-for="(navEl) in navList" @click="closeMenuHandler" :key="navEl.title">
                <router-link :class="{active: $route.path === navEl.path}" :to="navEl.path">{{navEl.title}}</router-link>
            </li>
        </ol>
    </div>
    <label for="check" class="nav_toggle" @click.stop="toogleNav">
        <svg v-if="isOpen" class="toggle_icon" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.21 4.387.083-.094a1 1 0 0 1 1.32-.083l.094.083L12 10.585l6.293-6.292a1 1 0 1 1 1.414 1.414L13.415 12l6.292 6.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083L12 13.415l-6.293 6.292a1 1 0 0 1-1.414-1.414L10.585 12 4.293 5.707a1 1 0 0 1-.083-1.32l.083-.094-.083.094Z" fill="#FF0000"/></svg>
        <svg v-else class="toggle_icon" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 18a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z" fill="#fff"/></svg>
    </label>
  </nav>
</template>

<script>
import {  ref } from 'vue';
import {useClickOutside} from "@/hooks/useClickOutside";

const navList = [
    {title:"Home", path:"/"},
    {title:"About", path:"/about"},
    {title:"Contact US", path:"/contact"},
];

export default {
    name:"TopNav",
    setup(){
        const isOpen = ref(false);
        const navContainer = ref(null);

        const closeMenuHandler = () =>{
            if(isOpen.value) isOpen.value = false;
        }
        const toogleNav = () => isOpen.value = !isOpen.value;
        useClickOutside(navContainer,isOpen.value,()=>{
            isOpen.value = false;
        });
        /*
        const closeOutsideHandler = (event) =>{
            if (isOpen.value && navContainer.value) {
                if (!event.target.contains(navContainer.value)) {
                    isOpen.value = false;
                }
            }
        }

        // mount effect
        onMounted(()=>{
            document.addEventListener('click',closeOutsideHandler);
        })
        // unmount effect
        onUnmounted(()=>{
            document.removeEventListener('click',closeOutsideHandler);
        })
        */

        return {
            navList,
            isOpen,
            toogleNav,
            navContainer,
            closeMenuHandler,
        }
    },
}
</script>

<style lang="scss">
    .navbar_top{
        display: flex;
        justify-content: space-between;
        background-color: purple;
        color: wheat;
        padding: 0 10%;
        
        .brand{
            padding: 0px 10px;
            font-weight: 800;
            font-size: 30px;
        }
        .items{
            padding: 0;
        }
        .items li{
            display: inline-block;
            margin: 0;
            list-style: none;
        }
        .items li a{
            display: inline-block;
            color: wheat;
            text-decoration: none;
            padding: 12px 12px;
            font-size: 15px;
            font-weight: 700;
            transition: background ease 0.3s;
        }
        .items li a:hover{
            background-color: blue;
            transition: background ease-in-out 0.3s;
        }
        .active{
            // active router class by vue
            background-color: blue;
        }

        .nav_toggle{
            display: none;
        }

    }

    @media  only screen and (max-width:1092px) {
        .navbar_top{
            position: relative;
            display: block;
            padding: 0 5%;

            .items_hide{
                display: none;
            }
            .items li{
                display: block;
            }
            .items li a{
                display: block;
            }

            .nav_toggle{
                display: block;
                position: absolute;
                top: 15px;
                right: 15px;
            }

        }
    }
</style>