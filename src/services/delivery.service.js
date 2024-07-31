import httpRequest from "../http";

class DeliveryService {
    #requestUrl = "delivery";


    getDeliveryPrice = async (token) => {
        if (token) {
            httpRequest.headers = {
                Authorization: "Bearer " + token,
            };
        }

        return await httpRequest.getAll(`${this.#requestUrl}/fee`);
    };
}

export default DeliveryService;