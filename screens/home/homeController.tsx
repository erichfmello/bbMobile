import UserService from "../../service/userService";
import bbLib from "../../types/bbLib";
import { Screen } from "../../types/enums";
import { User, UserLoginRequest, UserLoginResponse } from "../../types/model";

export default class HomeController {
    constructor(
        private userService = new UserService(),
        private bb = new bbLib(),
    ) {
    }

    public login(user: User, navigation: any ): void {
        const self = this;
        self.bb.navigate(Screen.homeSystem, navigation);

        
        // let resquest: UserLoginRequest = new UserLoginRequest();
        // resquest.item = user;
        // self.bb.showLoading();
        // self.userService.UserLogin(resquest)
        //     .then((response: UserLoginResponse) => {
        //         if (!response.success) {
        //             self.bb.showErrorMessage(response.message);
        //             return;
        //         }

        //         self.bb.navigate(Screen.homeSystem, navigation);
        //     }).catch((error: UserLoginResponse) => {
        //         self.bb.showErrorMessage(error.message);
        //     }).finally(() => {
        //         self.bb.hideLoading();
        //     });
    }
}