const LayoutGeneral = () => import('../GeneralView/LayoutGeneral.vue');
const HomePage = () => import('../GeneralView/home/HomeView.vue');
const AboutPage = () => import('../GeneralView/AboutView.vue');
const ContactUsPage = () => import('../GeneralView/ContactUs.vue');


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
            path:"home",
            redirect: {name: 'home'}
        },
        {
            path: "about",
            name: 'about',
            component: AboutPage,
        },
        {
            path: "contact",
            name: 'contact',
            component: ContactUsPage,
        },
    ],
}