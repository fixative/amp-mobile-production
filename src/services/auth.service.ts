import ApiService from "./api.service";
import { TokenService } from "./token.service";
import { AxiosRequestConfig } from "axios";
import qs from "qs";
import {User} from "@/types/UserTypes";

class AuthenticationError extends Error {
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

const AuthService = {

    signIn: async function(signInData: any) {
        const requestData: AxiosRequestConfig = {
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            url: import.meta.env.VITE_APP_API_BASE_URL + "/oauth/token",
            data:{
                "grant_type": "password",
                "email": signInData.username,
                "password": signInData.password,
                "client_id": "Xqz59AcyizwDVzPy-ukNMrEVNRnWxbhVfkb95Pc04VY",
                "client_secret": "BvcIi9137TpMUGcoZVQYglK8LKWDQqrIv2Z3Wqh2w4o"

            }
        };

        try {
            const response = await ApiService.customRequest(requestData);
            TokenService.saveToken(response.data.access_token);
            TokenService.saveRefreshToken(response.data.refresh_token);
            ApiService.setHeader();
            ApiService.mount401Interceptor();
            return response.data;
        } catch (error) {
            this.catchError(error);
        }
    },
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken();

        const requestData: AxiosRequestConfig = {
            method: "post",
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: 'Basic ' + btoa(import.meta.env.VITE_APP_CLIENT_ID + ':' + import.meta.env.VITE_APP_CLIENT_SECRET)
            },
            url: "/oauth/token",
            data: qs.stringify({
                "grant_type": "refresh_token",
                refreshToken: refreshToken
            })
        };

        try {
            const response = await ApiService.customRequest(requestData);

            TokenService.saveToken(response.data.access_token);
            TokenService.saveRefreshToken(response.data.refresh_token);
            ApiService.setHeader();

            return response.data.access_token;
        } catch (error:any) {
            throw new AuthenticationError(
                error.response.status,
                error.response.data.error_description
            );
        }
    },
    signOut() {
        TokenService.removeToken();
        TokenService.removeRefreshToken();
        ApiService.removeHeader();
        ApiService.unmount401Interceptor();
    },
    signup: async function(user:User) {
        console.log("auth signup called",JSON.stringify({client_id:"Xqz59AcyizwDVzPy-ukNMrEVNRnWxbhVfkb95Pc04VY",user:user}));
        const signupData: AxiosRequestConfig = {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: 'Basic ' + btoa(import.meta.env.VITE_APP_CLIENT_ID + ':' + import.meta.env.VITE_APP_CLIENT_SECRET)
            },
            url: import.meta.env.VITE_APP_API_BASE_URL + "/api/v1/users/create",
            data: {client_id:"Xqz59AcyizwDVzPy-ukNMrEVNRnWxbhVfkb95Pc04VY",user:user}
        };

        try {
            return await ApiService.customRequest(signupData);
        } catch (error) {
            console.log("AUTH SERVICE ERROR:",error)
            this.catchError(error);
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

        throw new AuthenticationError(status, description);
    }
}
export { AuthService, AuthenticationError }