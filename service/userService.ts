import { UserLoginRequest, UserLoginResponse } from "../types/model";
import ApiService from "./baseService/apiService";

export default class UserService {
    constructor(
        private apiService = new ApiService(),
    ) {

    }

    public UserLogin(request: UserLoginRequest): Promise<UserLoginResponse> {
        const self = this;
        let endpoint = 'v1/User/UserLogin';
        return self.apiService.post(request, endpoint);
    }
}