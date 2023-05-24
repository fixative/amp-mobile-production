import {AuthenticationError, AuthService} from "@/services/auth.service";
import {TokenService} from "@/services/token.service";
import {defineStore} from "pinia";
import {User} from "@/types/UserTypes"

interface AuthState {
    authenticating: boolean
    accessToken: string | null,
    authenticationErrorCode: number,
    authenticationError: string,
    refreshTokenPromise: any
}


export const useAuthStore = defineStore('authStore', {
    state: (): AuthState => ({
        authenticating: false,
        accessToken: TokenService.getToken(),
        authenticationErrorCode: 0,
        authenticationError: '',
        refreshTokenPromise: null
    }),
    getters: {},
    actions: {
        async signIn(signInData: any) {
            this.signInRequest();
            return new Promise((resolve, reject) => {
                AuthService.signIn(signInData).then(res => {
                    this.signInSuccess(res);
                    resolve(res);
                }).catch(err => {
                    if (err instanceof AuthenticationError) {
                        this.signInError({
                            errorCode: err.errorCode,
                            errorMessage: err.message
                        });
                        reject(err.message);
                    }
                });
            });
        },
        signOut() {
            this.signOutRequest()
            return new Promise((resolve: any) => {
                AuthService.signOut();
                resolve();
            });
        },
        refreshToken() {
            if (!this.refreshTokenPromise) {
                const p = AuthService.refreshToken();
                this.refreshTokenPromise = p;

                p.then(
                    response => {
                        this.refreshTokenPromise(null);
                        this.signInSuccess(response);
                    },
                    error => {
                        this.refreshTokenPromise(error);
                    }
                );
            }

            return this.refreshTokenPromise;
        },

        async signup(user: User) {
            try {
                await AuthService.signup({...user});
                this.processSuccess();
                return true;
            } catch (e) {
                if (e instanceof AuthenticationError) {
                    this.signInError(e)
                }
                return false;
            }
        },

        //FKA mutations
        signInRequest() {
            this.authenticating = true;
            this.authenticationError = "";
            this.authenticationErrorCode = 0;
        },
        signInSuccess(res: any) {
            this.accessToken = res.accessToken;
            this.authenticating = false;
        },
        signInError({errorCode, errorMessage}: any) {
            this.authenticating = false;
            this.authenticationErrorCode = errorCode;
            this.authenticationError = errorMessage;
        },
        signOutRequest() {
            this.authenticating = false;
        },
        refreshTokenPromise(state: AuthState, promise: any) {
            this.refreshTokenPromise = promise;
        },
        processSuccess() {
            this.authenticating = false;
        },
        setAuthenticatingStatus(status: any) {
            this.authenticating = status;
        }


    }
})