import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsList from "../views/NewsFeed";
import DetailedNews from "@/components/DetailedNews";
import NewsFeed from "@/views/NewsFeed";

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
        children: [{
            path: "some",
            components: {
                feed: NewsList
            }
        }, {
            path: ":title",
            component: DetailedNews
        }]
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes,
    base: import.meta.env.BASE_URL
})

export default router
