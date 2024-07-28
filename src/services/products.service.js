import httpRequest from "../http";

class ProductsService {
  #requestUrl = "products";


  getProducts = async (token) => {
    if (token) {
      httpRequest.headers = {
        Authorization: "Bearer " + token,
      };
    }
    // pg = page, lt =limit (page size ) , ptp = products type (enum)
    return await httpRequest.getAll(`${this.#requestUrl}`);
  };

  getFilteredProducts = async (token, query) => {
    if (token) {
      httpRequest.headers = {
        Authorization: "Bearer " + token,
      };
    }
    // pg = page, lt =limit (page size ) , ptp = products type (enum)
    return await httpRequest.getAll(`${this.#requestUrl}/?${query}`);
  };
}

export default ProductsService;