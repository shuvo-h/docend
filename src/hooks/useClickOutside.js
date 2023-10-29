import { onMounted, onUnmounted,  } from "vue";

export function useClickOutside(targetRef,isTrue=true,callbackFn) {
    const outsideClickHandler = (event) =>{
        if (isTrue & targetRef.value) {
            if (!event.target.contains(targetRef.target)) {
                callbackFn();
            }
        }
    }

    onMounted(()=>{
        document.addEventListener('click',outsideClickHandler);
    })
    onUnmounted(()=>{
        document.addEventListener('click',outsideClickHandler);
    })
}