import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        articles: [],
        articlesWithOtherData: []
    },
    getters: {},
    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles.articles;
            state.articlesWithOtherData = articles;
        }
    },
    actions: {
        getPost({commit}) {
            axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-02-27&sortBy=popularity&apiKey=b04ad0967ac040f6af1753f437d4c3c8")
                .then(response => commit("SET_ARTICLES", response.data))
        }
    },
    modules: {}
})