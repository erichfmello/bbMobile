import { UserTypeEnum } from "./enums";

//#region Base
export class BaseRequest {
    public id: number = 0;
}

export class BaseItemRequest<T>{
    public item: T | undefined;
}

export class BaseResponse {
    public success: boolean = false;
    public message: string = '';
    public errorMessage: string = '';
}

export class BaseItemResponse<T> extends BaseResponse {
    public item: T | undefined;
}

export class BaseListResponse<T> extends BaseResponse {
    public items: Array<T> = [];
}
//#endregion Base

//#region User
export class UserLoginRequest extends BaseItemRequest<User>
{
}

export class UserLoginResponse extends BaseResponse {
    public token: string = '';
}

export class User {
    public cPF: string = '';
    public name: string = '';
    public email: string = '';
    public password: string = '';
    public phone: string = '';
    public weigh: number = 0;
    public height: number = 0;
    public userType: UserTypeEnum = UserTypeEnum.Administrator;
}
//#endregion User