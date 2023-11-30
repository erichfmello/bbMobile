import axios from "axios"; 'axios'

export default class ApiService {
    private baseUrl: string = '';

    constructor() {
        const self = this;
        self.baseUrl = 'http://192.168.1.199:5000/'
    }

    public post<T1, T2>(request: T1, endpoint: string): Promise<T2> {
        const self = this;
        let headersConfig: any = {
            'Content-Type': 'application/json',
        };

        let url = self.baseUrl + endpoint;

        let config = {
            headers: headersConfig
        }

        return new Promise<T2>((resolve, reject) => {
            axios.post(url, request, config)
                .then((resonse: any) => {
                    resolve(resonse.data);
                }).catch((error: any) => {
                    reject(error.response.data);
                });
        })
    }
}