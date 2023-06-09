import ApiService from "@/services/api.service";


const UserService = {
    userInfo: {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        age: "",
        email: "",
        zip: "",
        state: "",
        howLong: "",
        topics: []
    },
    async fetchUser(id: number) {
        if (id) {
            try {

                return await ApiService.get(import.meta.env.VUE_APP_API_BASE_URL + "/api/v1/users/" + id);
            } catch (error) {
                console.log(error);
            }
        }
    },

}

export {UserService};