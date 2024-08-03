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
    addAddress = async (token, data) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.post(`${this.#requestUrl}/me/address`, data);
    }
    deleteAddress = async (token, id) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.deleteOne(`${this.#requestUrl}/me/address`, id);
    }
}

export default UsersService;