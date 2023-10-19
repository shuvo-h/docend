<template>
  <div>
    <h3>Event Trigger Component</h3>
    <button @click="triggerData">Trigger Event</button>
    <div>
        <button @click="manualTriggerFn">set Moon</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useEventBus } from '../../hooks/useEventBus';
import EventBus from "../../helper/EventBus";

export default defineComponent({
  setup() {
    const { triggerUserDataEvent } = useEventBus();

    // way 1: custom hook
    const triggerData = () => {
      const data = {
        name: 'User Name',
        age: 30,
      };
      triggerUserDataEvent(data);
    };

    // way 2: manual trigger
    const manualTriggerFn = () =>{
        const data = {schoolName:"AKH Hight School", address:"A/D, 509 point, Moon"};
        EventBus.trigger('moonEvent',data);
    }

    return {
      triggerData,
      manualTriggerFn,
    };
  },
});
</script>
