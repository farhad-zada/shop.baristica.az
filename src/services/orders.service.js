import httpRequest from "../http";

class OrdersService {
    #requestUrl = "orders";

    postOrder = async (token, data) => {
        httpRequest.headers = {
            Authorization: "Bearer " + token,
        };
        return await httpRequest.post(`${this.#requestUrl}`, data);
    }
}

export default OrdersService;