import axios, { AxiosInstance } from "axios";
const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

class BaseApi {
	axios: AxiosInstance;
	constructor() {
		this.axios = axios.create({
			baseURL: API_ENDPOINT,
		});
	}
}

export default BaseApi;
