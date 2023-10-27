const LayoutGeneral = () => import('../GeneralView/LayoutGeneral.vue');
const HomePage = () => import('../HomeView.vue');


export const routesGeneral = {
    path:"/",
    component: LayoutGeneral,
    children: [
        {
            path:"",
            name:"home",
            component: HomePage
        },
        {
            path:"/home",
            redirect: {name: 'home'}
        },
    ],
    // redirect: "",
}