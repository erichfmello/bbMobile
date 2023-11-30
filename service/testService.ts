import { TestRequest, TestResponse } from "../types/model";
import ApiService from "./baseService/apiService";

export default class TestService {
    constructor(
        private apiService: ApiService,
    ) {

    }

    public IsOnline(request: TestRequest): Promise<TestResponse> {
        const self = this;
        let endpoint = 'v1/Test/IsOnline';
        return self.apiService.post(request, endpoint);
    }
}