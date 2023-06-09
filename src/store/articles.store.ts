import {defineStore} from "pinia";
import ArticlesService from "../services/articles.service";
interface ArticleState {
    topics:any

}

export const useArticleStore = defineStore('articles', {
    state: (): ArticleState => ({
        topics:[]
    }),
    actions: {
        async fetchArticles() {
            return new Promise((resolve, reject) => {
                ArticlesService.fetchArticles().then(res => {
                    this.fetchSuccess(res);
                    resolve(res);
                }).catch(err => {
                    // if (err instanceof UserInfoError) {
                    // this.signInError({
                    //     errorCode: err.errorCode,
                    //     errorMessage: err.message
                    // });
                    reject(err.message);
                    // }
                });
            });
        },
        fetchSuccess(res:any){
            this.articles = res.data;
        }
    },
    getters: {
        getArticles(state: any) {
            return state.articles
        }
    }
})