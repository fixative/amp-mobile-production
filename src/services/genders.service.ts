import {FormOption} from "@/types/FormOptionType";
import ApiService from "@/services/api.service";

export const GendersService = {
    id: 'gendersService',

    genders: () => [
        {id: 0, text: "Male", position: 0} as FormOption,
        {id: 1, text: "Female", position: 1} as FormOption,
        {id: 2, text: "Non-binary or gender non-conforming", position: 2} as FormOption,
        {id: 3, text: "Transgender man", position: 3} as FormOption,
        {id: 4, text: "Transgender woman", position: 4} as FormOption,
        {id: 5, text: "A different gender (Please specify)", position: 5} as FormOption,
    ],
    fetchGenders: async function () {

        try {
            ApiService.setHeader();
            return await ApiService.get(import.meta.env.VUE_APP_API_BASE_URL+ "/api/v1/gender_identities");

        } catch (error) {
            this.catchError(error);
            return this.genders();
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

        throw new GendersError(status, description);
    }
}

class GendersError extends Error {
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

export default GendersService