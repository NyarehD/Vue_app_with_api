import {createRouter, createWebHistory} from 'vue-router'
import About from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue'
import DetailedNews from "@/views/DetailedNews.vue";
import NewsFeed from "@/views/NewsFeed.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
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
    history: createWebHistory(),
    routes,
    base: import.meta.env.BASE_URL
})
router.beforeEach((toRoute, fromRoute, next) => {
    next()
    window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home"
})

export default router
