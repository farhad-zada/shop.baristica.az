import httpRequest from "../http";

class AuthService {
  #requestUrl = "auth";

  register = async (formData) => {

    return await httpRequest.post(`${this.#requestUrl}/register`, formData);
  }

  login = async (formData) => {

    return await httpRequest.post(`${this.#requestUrl}/login`, formData);
  }
}

export default AuthService;