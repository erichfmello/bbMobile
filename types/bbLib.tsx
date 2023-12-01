import { useContext } from 'react';
import { LoadingContext } from '../context/loadingContext';

export default class bbLib {
    constructor(
        private loadContext = useContext(LoadingContext),
    ) {

    }

    //#region Loading
    public showLoading(): void {
        const self = this;
        self.loadContext.loading(true);
    }

    public hideLoading(): void {
        const self = this;
        self.loadContext.loading(false);
    }
    //#endregion Loading
}