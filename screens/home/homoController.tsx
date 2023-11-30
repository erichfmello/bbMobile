import TestService from "../../service/testService";
import { TestRequest, TestResponse } from "../../types/model";

export default class HomeController {
    constructor(
        private testService = new TestService()
    ) {
    }

    public test(): void {
        const self = this;

        let resquest: TestRequest = new TestRequest();
        self.testService.IsOnline(resquest)
            .then((response: TestResponse) => {

            }).catch((response: TestResponse) => {

            }).finally(() => {

            });
    }
}