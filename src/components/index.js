import Avatar from "./widgets/Avatar.vue";
import ShowMore from "./widgets/ShowMore.vue";
import Modal from "./Modal.vue";

const components = [
    { name: 'WootAvatar', component: Avatar },
    { name: 'WootShowMore', component: ShowMore },
    { name: 'WootModal', component: Modal },
    // Add other components...
];
  

const WootUIKit = {
    install(app){
        components.forEach(componentEL =>{
            app.component(componentEL.name, componentEL.component);
        })
    }
};

export default WootUIKit;
