import httpRequest from "../http";

class ProductsService {
  #requestUrl = "products";


  getProducts = async (page) => {
    
    // pg = page, lt =limit (page size ) , ptp = products type (enum)
    return await httpRequest.getAll(`${this.#requestUrl}`);
  };
}

export default ProductsService;