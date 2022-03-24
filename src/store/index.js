import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        articles: [],
        articlesWithOtherData: [],
        fetchStatus: {
            type: Boolean,
            required: true
                           }
    },
    getters: {},
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles.articles;
            state.articlesWithOtherData = articles;
        },
        SET_STATUS(state, status) {
            state.fetchStatus = status
        }
    },
    actions: {
        getPost({commit}) {
            axios.get("https://newsapi.org/v2/top-headlines?category=technology&sortBy=popularity&pageSize=50&apiKey=b04ad0967ac040f6af1753f437d4c3c8")
                .then(response => {
                    if (response.data.status === "ok") {
                        commit("SET_ARTICLES", response.data)
                    } else {
                        commit("SET_STATUS", response.data.status)
                    }
                })
        }
    },
    modules: {},
})

