const LayoutGeneral = () => import('../GeneralView/LayoutGeneral.vue');
const HomePage = () => import('../GeneralView/home/HomeView.vue');
const SiteDocPage = () => import('../GeneralView/Sites/Site.vue');
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
            path: "sites/:site_slug",
            name:"site-doc",
            component: SiteDocPage,
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