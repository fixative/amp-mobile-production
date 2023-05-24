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
        race: "",
        gender: "",
        topics: []
    },
    async fetchUser(id: number) {
        if (id) {
            try {
                ApiService.setHeader();
                return await ApiService.get(process.env.VUE_APP_API_BASE_URL + "/api/v1/users/" + id);
            } catch (error) {
                console.log(error);
            }
        }
    },

}

export {UserService};