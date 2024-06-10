import Axios from "axios";
import { HOST_URL } from "../config/index.js";

class HttpRequest {
  _endpoint = "api/v1";
  _url = `${HOST_URL}/${this._endpoint}`;

  _headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Authorization,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
     "Content-Type": 'multipart/form-data'
  };

  get headers() {
    return this._headers;
  }

  set headers(config) {
    this._headers = { ...this._headers, ...config };
  }

  constructUrl = (urlRoute, id = "") =>
    `${this._url}/${urlRoute}${id ? "/" + id : ""}`;

  getByParams = async (urlRoute, params = {}) => {
    const response = await Axios.get(this.constructUrl(urlRoute), {
      headers: this._headers,
      params,
    });
    return response.data;
  };

  post = async (urlRoute, formData) => {
    const response = await Axios.post(this.constructUrl(urlRoute), formData, {
      headers: this._headers,
    });
    return response.data;
  };

  getAll = async (urlRoute) => {
    const response = await Axios.get(this.constructUrl(urlRoute), {
      headers: this._headers,
    });
    return response.data;
  };

  getOne = async (urlRoute, id) => {
    const response = await Axios.get(this.constructUrl(urlRoute, id), {
      headers: this._headers,
    });
    return response.data;
  };

  createOne = async (urlRoute, formData) => {
    const response = await Axios.post(this.constructUrl(urlRoute), formData, {
      headers: this._headers,
    });
    return response.data;
  };

  updateOne = async (urlRoute, formData, id) => {
    const response = await Axios.put(this.constructUrl(urlRoute,id), formData, {
      headers: this._headers,
    });
    return response.data;
  };

  deleteOne = async (urlRoute, id) => {
    const response = await Axios.delete(this.constructUrl(urlRoute, id), {
      headers: this._headers,
    });
    return response.data;
  };
  deleteItem = async (urlRoute, id) => {
    const response = await Axios.patch(this.constructUrl(urlRoute, id), {
      headers: this._headers,
    });
    return response.data;
  };
}

export default new HttpRequest();
