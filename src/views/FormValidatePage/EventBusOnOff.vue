<template>
  <div>
    <h3>Event Display Component</h3>
    <div>
      <p>Name: {{ eventBusData.name }}</p>
      <p>Age: {{ eventBusData.age }}</p>
    </div>
    <div>
        <h4>Manual Event Data</h4>
      <p>Name: {{ eventBusManualData.schoolName }}</p>
      <p>Age: {{ eventBusManualData.address }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
import EventBus from '../../helper/EventBus';
import { useEventBus } from '../../hooks/useEventBus';

export default defineComponent({
  setup() {
    // way 1: custom hook
    const { eventBusData } = useEventBus();

    // way 2: manual event listener
    const eventBusManualData = ref({schoolName:null,address:null})
    const onManualEventTrigger = (data)=>{
        eventBusManualData.value = data;
    }
    onBeforeMount(()=>{
        EventBus.on('moonEvent',onManualEventTrigger)
    })
    onMounted(()=>{
        EventBus.on('moonEvent',onManualEventTrigger)
    })

    return {
      eventBusData,
      eventBusManualData
    };
  },
});
</script>
