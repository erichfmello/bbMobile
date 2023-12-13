import { createContext, useState } from "react";
import ModalError from "../components/modals/modalError";

export const MessageContext = createContext<{
    message: string,
    showMessage: (text: string) => void,
}>({
    message: '',
    showMessage: () => { },
});

const MessageProvider = ({ children }: any) => {
    const [errorMessage, errorMessageSet] = useState<string>('');
    const [messageVisibility, messageVisibilitySet] = useState<boolean>(false);

    const changeVisibility = (message: string): void => {
        messageVisibilitySet(!messageVisibility);
        errorMessageSet(message);
    }

    return (
        <MessageContext.Provider value={{ message: errorMessage, showMessage: (text: string) => changeVisibility(text) }}>
            {children}
            <ModalError text={errorMessage} isVisible={messageVisibility} callback={() => changeVisibility('')} />
        </MessageContext.Provider>
    );
}

export default MessageProvider;