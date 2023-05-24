import {User} from "@/types/UserTypes";
import {defineStore} from "pinia";
import {AxiosRequestConfig} from "axios";
import ApiService from "@/services/api.service";
import {UserService} from "@/services/user.service";

class UserInfoError extends Error {
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

export const useUserStore = defineStore("user", {
        //DEFAULT TO NULL, POPULATED BELOW FOR TESTING GOODNESS
        state: () => ({user:{
            first_name: "Tom",
            last_name: "Brokaw",
            username: "AnchorBoy1",
            email:"tom@nbcnews.com",
            age: 0,
            password: "asdf",
            how_long: "36",
            state: "NY",
            zip_code: "10101",
            race: "White",
            gender: "Male",
            topic_ids: ["sdfd"]
        } as User}),

        actions: {

            async fetchUser(id:number) {
                // this.signInRequest();
                return new Promise((resolve, reject) => {
                    UserService.fetchUser(id).then(res => {
                        this.fetchSuccess(res);
                        resolve(res);
                    }).catch(err => {
                        if (err instanceof UserInfoError) {
                            // this.signInError({
                            //     errorCode: err.errorCode,
                            //     errorMessage: err.message
                            // });
                            reject(err.message);
                        }
                    });
                });
            },
            signup: async function(username: any, password: any,firstname:any,lastname:any,email:any) {
                const signupData: AxiosRequestConfig = {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    url: "/auth/register",
                    data: {
                        username: username,
                        password: password,
                        firstname: firstname,
                        lastname: lastname,
                        email:email
                    }

                };

                try {
                    return await ApiService.customRequest(signupData);
                } catch (error) {
                    this.catchError(error);
                }
            },
            signup2: async function(user:User) {
                const userRequestConfig: AxiosRequestConfig = {
                    method: "post",
                    headers: {"Content-Type": "application/json"},
                    url: "users/create",
                    data: user
                }

                try {
                    return await ApiService.customRequest(userRequestConfig);
                } catch (error) {
                    this.catchError(error);
                }
            },
            fetchSuccess(res:any){
                this.user = res.data;
            }

        },
        getters: {
            getAllInfo(state: any) {
                return state.user
            }
        }
    })
;
