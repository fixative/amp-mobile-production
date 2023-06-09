import ApiService from "@/services/api.service";

export const ArticlesService = {
    id: 'articlesService',

    articles: () => [

    ],
    fetchArticles: async function () {

        try {
            ApiService.setHeader();
            return await ApiService.get(import.meta.env.VUE_APP_API_BASE_URL+ "/api/v1/articles");

        } catch (error) {
            this.catchError(error);
            return this.articles();
        }
    },
    catchError: function(error: any) {
        let status;
        let description;

        if (error.response === undefined) {
            status = error.message;
            description = error.message;
        } else {
            status = error.response.status;
            description = error.response.data.error_description;
        }

        throw new ArticlesError(status, description);
    }
}

class ArticlesError extends Error {
    errorCode: any;
    constructor(errorCode: any, message: string | undefined) {
        super(message);
        this.name = this.constructor.name;
        if (message != null) {
            this.message = message;
        }
        this.errorCode = errorCode;
    }
}

export default ArticlesService