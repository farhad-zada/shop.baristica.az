import httpRequest from "../http";

class FavoritesService {
    #requestUrl = "favorites";

    getFavorites = async (token) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.getAll(`${this.#requestUrl}`);
    }
    postFavorite = async (token, id) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.post(`${this.#requestUrl}/${id}`);
    }
    deleteFavorite = async (token,id) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.deleteOne(`${this.#requestUrl}`, id);
    }
}

export default FavoritesService;