<template>
  <div class="container" ref="menuContainer">
    <div class="menu-toggle flex_center" @click="toggleMenu">
      <span class="fa fa-plus" :class="{ open: isMenuOpen }"></span>
      <svg  class="fa" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :d="apps[0].path" fill="#212121"/>
        </svg>
    </div>
    <div class="menu-round" :class="{ open: isMenuOpen }">
      <div class="btn-app flex_center" v-for="(app, index) in apps" :key="index" :style="getAppStyle(index)">
        <!-- <div class="fa" :class="app.iconClass"></div> -->
        <svg  class="fa" width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path :d="app.path" fill="#212121"/>
        </svg>
      </div>
    </div>
    <!--     
    <div class="menu-line" :class="{ open: isMenuOpen }">
      <div class="btn-app" v-for="(app, index) in apps" :key="index" :style="getAppStyle(index)">
        <div class="fa" :class="app.iconClass"></div>
      </div>
    </div> -->

  </div>
</template>


<script>
import { onMounted, onUnmounted, ref } from 'vue';


export default {
    name:"TopBar",
    setup() {
    // State
    const isMenuOpen = ref(false);
    const menuContainer = ref(null);

    // App data
    const appsX = [
      { iconClass: "fa fa-twitter" },
      { iconClass: "fa fa-facebook" },
      { iconClass: "fa fa-wikipedia-w" },
      { iconClass: "fa fa-map-marker" },
      { iconClass: "fa fa-envelope" },
      { iconClass: "fa fa-video-camera" },
      { iconClass: "fa fa-soundcloud" },
      { iconClass: "fa fa-graduation-cap" },
      { iconClass: "fa fa-image" },
      { iconClass: "fa fa-vine" },
    ];
    console.log(appsX);

    const appsY = [
        {
            path:"M12 1.998a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm8.344 4.518a2.01 2.01 0 0 0-2.612-1.255l-1.607.6a.75.75 0 0 0-.416.381 4.086 4.086 0 0 1-7.386.01.75.75 0 0 0-.415-.38L6.28 5.264A2.007 2.007 0 0 0 4.816 9L8 10.31v3.148l-1.972 5.713a1.956 1.956 0 0 0 3.683 1.321l1.846-4.958a.48.48 0 0 1 .9-.002l1.882 5.009a1.94 1.94 0 0 0 3.652-1.315L16 13.446v-3.134l3.195-1.307a2.01 2.01 0 0 0 1.149-2.489Z",
        },
        {
            path:"M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z",
        },
    ];

    const apps = [
        ...appsY,...appsY,...appsY,...appsY,...appsY,...appsY,
        ...appsY,...appsY,...appsY,...appsY,...appsY,...appsY,
        ...appsY,...appsY,...appsY,...appsY,...appsY,...appsY,
    ]

    // Methods
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const getAppStyle = (index) => {
      if (isMenuOpen.value) {
        let right = 0.5;
        if(index === 0) right += 4;
        if(index === 1) right += 3.5;

        let bottom = index * 3 + 0.25 - (index > 1 ? 1.5 : 0);
        console.log({bottom,index});
        return {
          right: `${right}em`,
          bottom: `${bottom}em`,
          transition: "0.4s",
          "transition-delay": index * 0.1 + "s",
        };
      }
      return {};
    };

    // close menu if click outside
    const closeMenuClickOutside = (event) =>{
        if (isMenuOpen.value && menuContainer.value) {
            if (!menuContainer.value.contains(event.target)) {
                isMenuOpen.value = false;
            }
            
        }
    }

    onMounted(()=>{
        document.addEventListener('click',closeMenuClickOutside)
    })
    onUnmounted(()=>{
        document.removeEventListener('click',closeMenuClickOutside)
    })


    return {
      isMenuOpen,
      apps,
      toggleMenu,
      getAppStyle,
      menuContainer,
    };
  },
}
</script>



<style lang="scss">
.flex_center{
    display: flex;
    justify-content: center;
    align-items: center;
}

// this makes a basic circle
@mixin circle($param) {
	width:$param;
	height:$param;
	border-radius:50%;
}

// Brand Colour Palette
$purple:#462882;
$green:#1ef0a0;
$blue:#4644fd;
$red:#ff3c4b;

body {
	background-color: $purple;
	height:100vh;
	width:100vw;
	position: relative;
}

// this is what I use to place the menu thing wherever I want
.container {
	position: fixed;
	bottom:1em;
	right:1em;
}

// this toggles the whole damn thing
.menu-toggle {
	@include circle(60px);
	background-color: $green;
	box-shadow:4px 4px 2px 1px rgba(#000, 0.2);
	
	position: absolute;
	z-index:5;
	bottom:0;
	right:0;
	// display:table;
	
	// text-align: center;
	
	.fa {
		color:#fff;
		font-size:2em;
		display:table-cell;
		vertical-align:middle;
		transition:0.4s;
	}
	
	// Twist the plus so it looks like a close 'x'
	&.open .fa {
		transform:rotate(135deg);
	}
}

// Single Template buttons
.btn-app {
	@include circle(2.5em);
	position:absolute;
	
	background-color: $blue;
	color:#fff;
	text-align: center;
	
	.fa {
		line-height:2.5em;
	}
}

// add shadow only when templates are activated
.open .btn-app {
	box-shadow:4px 4px 2px 1px rgba(#000, 0.2);
}

// The most-popular apps in a circular thingo
.menu-round {
	position: absolute;
	bottom:0;
	right:0;
	z-index:3;
	
	.btn-app {
		bottom:0.25em;
		right:0.25em;
		transition:0.4s;
	}
	
	// position of templates when activated
	&.open {
		.btn-app:nth-of-type(1){
			right:0.5em;
			bottom:4.25em;
			transition-delay:0.2s;
		}
		.btn-app:nth-of-type(2){
			right:3.5em;
			bottom:3.5em;
			transition-delay:0.1s;
		}
		.btn-app:nth-of-type(3){
			right:4.25em;
			bottom:0.5em;
		}
	}	

}

// stacked template icons
.menu-line {
	position: absolute;
	z-index:2;
	
	.btn-app {
		bottom:0;
		right:0.5em;
		transition:0.3s;
		transition-delay:0.5s;
	}
	
	&.open {
		// first one. add 3 to each subsequent template
		$bottom:4.25em;
		$templates:7;
		
		.btn-app:nth-of-type(1) {
			bottom:$bottom;
		}
		
		// align each template item on top of the next
		@for $i from 1 through $templates {
			.btn-app:nth-of-type(#{$i}) {
				bottom:$bottom + 3 * $i;
			}
		}
	}	
	
}


   
</style>