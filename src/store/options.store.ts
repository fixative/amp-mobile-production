import {defineStore} from "pinia";
import OptionsService from "@/services/options.service";

interface OptionState {
    optionGroups:object
}

export const useOptionStore = defineStore("options", {
    state: (): OptionState => ({
        optionGroups: {}
    }),
    actions: {
        async fetchOptions(propName:string,endpointUrl:string) {
            console.log("EPU",endpointUrl)
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
            console.log("RES",res)
            this.optionGroups[propName] = res.options.data;
        },
        getSubsetByAttr(optionSet:[],attrName:string,attrValue:any){
            return optionSet.filter((v: any) => v[attrName] === attrValue);
        }
    },
    getters: {
        getOptions(state: any) {
            return state.options
        }
    }
})