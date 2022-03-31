import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        articles: [],
        articlesIncludingMeta: [],
        articlePage: 1,
        fetchStatus: {
            type: Boolean, required: true
        }
    }, getters: {}, mutations: {
        SET_ARTICLES(state, articles) {
            state.articles.push(...articles.articles)
            state.articlesIncludingMeta = articles;
        },
        SET_ARTICLE_PAGE(state) {
            state.articlePage += 1;
        },
        SET_STATUS(state, status) {
            state.fetchStatus = status
        }
    }, actions: {
        getPost({commit, state}) {
            let link = `https://newsapi.org/v2/top-headlines?sortBy=popularity&pageSize=5&page=${state.articlePage}&language=en&apiKey=b04ad0967ac040f6af1753f437d4c3c8`
            axios.get(link)
                .then(response => {
                    if (response.data.status === "ok") {
                        console.log(response.data)
                        console.log(this.state.articlePage)
                        commit("SET_ARTICLES", response.data)
                        commit("SET_STATUS", response.data.status)
                    } else {
                        commit("SET_STATUS", response.data.status)
                    }
                })
        }
    }, modules: {},
})

