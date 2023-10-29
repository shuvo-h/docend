<template>
  <div class="page">
    <header>
        <TopBar />
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <h3>General Layout footer</h3>
    </footer>
  </div>
</template>

<script>
import TopBar from '@/components/Shared/navbar/Topbar.vue';


export default {
    components:{TopBar},
    // computed:{},
    // mounted:{},
    setup(){
        // onMounted
    },
}

</script>

<style lang="scss">
.page{
    background-color: #eee;
    min-height: 100vh;
}
</style>