import httpRequest from "../http";

class AppealsService {
  #requestUrl = "request";


  getAppeals = async (token, page) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.getAll(`${this.#requestUrl}?PageNumber=${page}&PageSize=20`);
  };
  getOneAppeal = async (id, token) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.getOne(`${this.#requestUrl}`, id)
  }
  createAppeal = async (formData, token) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.createOne(`${this.#requestUrl}/`, formData);
  };
  updateAppeal = async (formData, id, token) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.updateOne(`${this.#requestUrl}`, formData, id);
  }
  getByStatus = async (status, token, page) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.getAll(`${this.#requestUrl}/get-by-status?status=${status}&PageNumber=${page}&PageSize=20`)
  }
  getByAynaStatus = async (status, token, page) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.getAll(`${this.#requestUrl}/get-by-ayna-status?status=${status}&PageNumber=${page}&PageSize=20`)
  }
  cancelAppeal = async (token, id) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.updateOne(`${this.#requestUrl}/cancel`, {}, id)
  }
  filterAppeals = async (token, query, page) => {
    httpRequest.headers = {
      Authorization: "Bearer " + token,
    };
    return await httpRequest.getAll(`${this.#requestUrl}/${query}`);
  }
  signValidation = async (token, formData, requestId) => {
    httpRequest.headers = {
        Authorization: "Bearer " + token,
    };
    return await httpRequest.updateOne(`${this.#requestUrl}/signature/${requestId}`, formData)
};
}

export default AppealsService;