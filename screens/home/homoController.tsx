import TestService from "../../service/testService";
import bbLib from "../../types/bbLib";
import { TestRequest, TestResponse } from "../../types/model";

export default class HomeController {
    constructor(
        private testService = new TestService(),
        private bb = new bbLib(),
    ) {
    }

    public test(): void {
        const self = this;
        self.bb.showLoading();

        let resquest: TestRequest = new TestRequest();
        self.testService.IsOnline(resquest)
            .then((response: TestResponse) => {
            }).catch((response: TestResponse) => {
            }).finally(() => {
                self.bb.hideLoading();
            });
    }
}