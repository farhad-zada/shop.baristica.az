import httpRequest from "../http";

class UsersService {
    #requestUrl = "users";

    getUserInfo = async (token) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.getAll(`${this.#requestUrl}/me`);
    }
    updateUser = async (token, data) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.updateOne(`${this.#requestUrl}/me`, data);
    }
}

export default UsersService;