import {defineStore} from "pinia";
import OptionsService from "@/services/options.service";
import {FormOptionGroup} from "@/types/FormOptionGroupType";

interface OptionState {
    optionGroups:(FormOptionGroup)[]
}

export const useOptionStore = defineStore("options", {
    state: (): OptionState => ({
        optionGroups:[]
    }),
    actions: {
        async fetchOptions(propName:string,endpointUrl:string) {

            return new Promise((resolve, reject) => {
                OptionsService.fetchOptions(propName,endpointUrl).then(res => {
                    this.fetchSuccess(propName,res);
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
        fetchSuccess(propName:string,res:any){
            this.optionGroups.push(res);
        }
    },
    getters: {
        getOptions(state: any) {
            return state.options
        }
    }
})