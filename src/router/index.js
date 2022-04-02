import {createRouter, createWebHistory} from 'vue-router'

const AboutView = () => import("@/views/AboutView.vue")
const HomeView = () => import("@/views/HomeView.vue")
const DetailedNews = () => import("@/views/DetailedNews.vue")
const NewsFeed = () => import("@/views/NewsFeed.vue")

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: "About"
        }
    },
    {
        path: '/news',
        name: 'news',
        component: NewsFeed,
        meta: {
            title: "News Feed"
        }
    },
    {
        path: '/news/:title',
        name: 'detailedNews',
        component: DetailedNews,
    },
]
const router = createRouter({
    history: createWebHistory('/Vue_app_with_api/'),
    routes,
})
router.beforeEach((toRoute, fromRoute, next) => {
    next()
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home"
})

export default router
