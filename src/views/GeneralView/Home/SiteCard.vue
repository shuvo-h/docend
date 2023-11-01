<template>
  <div class="card">
        <div class="img_wrapper">
            <!-- <img src="https://static.vecteezy.com/system/resources/thumbnails/000/579/276/small/12-27.jpg" alt=""> -->
            <img :src="logo_url" alt="">
        </div>
        <div class="body">
            <router-link :to="siteSlugUrl">
                <h3 class="title">{{title}}</h3>
            </router-link>
            <div class="category">
                <button>{{time_stamp}}</button>
                in
                <span>{{category}}</span>
            </div>
            <p>{{summary}}</p>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
            title:{
                type: String,
                required: true,
            },
            slug:{
                type: String,
                required: true,
            },
            logo_url:{
                type: String,
                required: true
            },
            time_stamp:{
                type: String,
                required: true
            },
            category:{
                type: String,
                required: true
            },
            summary:{
                type: String,
                required: true
            },
        },
    setup(props){
        // const props = defineProps()
        console.log({props});
        const siteSlugUrl = computed(()=>{
            return `/sites/${props.slug}`;
        })
        return {
            siteSlugUrl,
        }
    },
}
</script>

<style scoped lang="scss">
    .card{
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 1rem;
        border: 1px solid #c0ccee;
        margin: 10px auto;
        padding: 10px;
        border-radius: 4px;
        box-shadow: -7px -7px 17px rgb(229, 229, 229),
                    7px 7px 17px rgb(220, 220, 220);

        .img_wrapper{
            border-radius: 10px;
            overflow: hidden;

            img{
                width: 150px;
                height: 150px;
            }
        }

        .body{

            a{
                text-decoration: none;
            }

            .title{
                font-size: 20px;
                font-weight: 500;
            }

            .category{
                border: 1px solid;
                border-radius: 4px;
                overflow: hidden;
                button{
                    border: none;
                    background: rgb(47, 119, 47);
                    color: #fff;
                    padding: 4px 20px;
                    line-height: 20px;
                }
            }
        }
       
    }
</style>