import BaseApi from "./base";

class UserService extends BaseApi {
	findOne = async (id: number) => {
		return this.axios.get(`/users/${id}`);
	};
}

export default UserService;
