import { onBeforeMount, onMounted, ref } from "vue";
import EventBus from "../helper/EventBus";

export function useEventBus() {
    const eventBusData = ref({name:"",age:0});

    const onUserDataEvent = (data) =>{
        eventBusData.value = data;
    }

    onMounted(()=>{
        EventBus.on('userDataEvent',onUserDataEvent);
    })

    onBeforeMount(()=>{
        EventBus.off('userDataEvent',onUserDataEvent);
    })

    const triggerUserDataEvent = (data) => {
        EventBus.trigger('userDataEvent', data);
    };
    
    return {
        eventBusData,
        triggerUserDataEvent,
    };
    
}