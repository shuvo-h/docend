<template>
  <div class="card">
        <div class="img_wrapper">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/579/276/small/12-27.jpg" alt="">
        </div>
        <div class="body">
            <h3 class="title">Bond Bridge Link: A Social boostup web application</h3>
            <div class="category">
                <button>1 Week Ago</button>
                in
                <span>Video Editing</span>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quam aspernatur rerum neque ullam est eveniet officia, eos reiciendis? Accusamus.</p>
        </div>
    </div>
</template>

<script>
export default {

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
                width: 100%;
                height: 100%;
            }
        }

        .body{

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