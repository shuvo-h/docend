<template>
  <nav class="navbar_top">
    <div class="brand">Logo</div>
    <div>
        <input type="checkbox" id="check">
        <ol>
            <li><router-link to="/">Item 1</router-link></li>
            <li><router-link to="/">Item 2</router-link></li>
            <li><router-link to="/">Item 3</router-link></li>
        </ol>
    </div>
    <label for="check" class="bar">
        <span class="toggle_icon" id="expand">+</span>
        <span class="toggle_icon" id="close">-</span>
    </label>
  </nav>
</template>


<script>



export default {
    name:"TopBar",
    setup() {
  },
}
</script>



<style lang="scss">
.neumorphism{
    border: 1px solid #f7f7f7;
    border-radius: 10px;
    box-shadow: -7px -7px 17px #fff,
                7px 7px 17px rgba(70,70,70,0.15);
}
.navbar_top{
    @extend .neumorphism;
    border-radius: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 50px;

    .brand{
        @extend .neumorphism;
        font-size: 35px;
        font-weight: 800;
        cursor: pointer;
        color: #778ba5;
        padding: 10px 15px;

    }
    
    ol{
        display: flex;
        margin: auto 0;
        list-style: none;
    }
    ol li{
        margin: 0 10px;
    }
    ol li a{
        @extend .neumorphism;
        font-size: 20px;
        color: #778ba5;
        text-decoration: none;
        letter-spacing: 1px;
        padding: 8px 12px;
    }

    ol li:hover a{
        color: #fff;
        background: #1e90ff;
    }

    input[type="checkbox"]{
        display: none;
    }
    .bar{
        position: relative;
        display: none
    }
    .toggle_icon{
        @extend .neumorphism;
        display: inline-block;
        
        color: #1e90ff;
        font-size: 35px;
        font-weight: 800;
        width: 65px;
        height: 65px;
        text-align: center;
    }
}

@media screen and (max-width: 1100px) {
    .navbar_top{
        display: block;
        padding: 0;

        .brand {
            display: inline-block;
            margin: 20px 50px;
        }

        ol{
            display: block;
            width: 100%;
        }
        ol li{
            position: relative;
            margin: 40px 0;
        }
        ol li a{
            width: 90%;
            text-align: center;
            padding: 30px;
            font-size: 28px;
            display: block;
            border-radius: 30px;
            left: 50%;
            transform: translateX(-50%);
            position: relative;
        }
        .bar{
            display: block;
            position: absolute;
            top: 25px;
            right: 80px;
            cursor: pointer;

            #close{
                color: #fe28a2;
            }
        }

    }
}

</style>