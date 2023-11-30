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


export class TestRequest extends BaseRequest {
}

export class TestResponse extends BaseResponse {
}