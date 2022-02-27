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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
