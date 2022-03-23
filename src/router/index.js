import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailedNews from "@/views/DetailedNews";
import NewsFeed from "@/views/NewsFeed";
import About from "@/views/AboutView.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: About 
    },
    {
        path: '/news',
        name: 'news',
        component: NewsFeed,
    }, {
        path: '/news/:title',
        name: 'detailedNews',
        component: DetailedNews
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
