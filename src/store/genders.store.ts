import {defineStore} from "pinia";
import {GendersService} from "@/services/genders.service";

interface GenderState {
    genders:any

}

export const useGenderStore = defineStore('genders', {
    state: (): GenderState => ({
        genders:[]
    }),
    actions: {
        async fetchGenders() {
            return new Promise((resolve, reject) => {
                GendersService.fetchGenders().then(res => {
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
            this.genders = res.data;
        }
    },
    getters: {
        getGenders(state: any) {
            return state.genders
        }
    }
})