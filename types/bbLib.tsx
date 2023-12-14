import { useContext } from 'react';
import { LoadingContext } from '../context/loadingContext';
import { MessageContext } from '../context/messageContext';
import { Screen } from './enums';

export default class bbLib {
    constructor(
        private loadContext = useContext(LoadingContext),
        private messageContext = useContext(MessageContext),
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

    //#region Messages
    public showErrorMessage(text: string): void {
        const self = this;
        self.messageContext.showMessage(text);
    }
    //#endregion Messages

    //#region Navigation
    public navigate(screen: Screen, navigation: any) {
        switch (screen) {
            case Screen.home:
                navigation.navigate('Home');
                break;
            case Screen.homeSystem:
                navigation.navigate('HomeSystem');
                break;
            case Screen.serieSystem:
                navigation.navigate('SerieSystem');
                break;
            default:
                break;
        }
    }
    //#endregion Navigation
}