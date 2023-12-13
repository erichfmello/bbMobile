import { createContext, useState } from "react";
import LoadingModal from "../components/modals/loadingModal";

export const LoadingContext = createContext<{
    loading: (visible: boolean) => void,
}>({
    loading: () => { },
});

const LoadingProvider = ({ children }: any) => {
    const [loading, loadingSet] = useState<boolean>(false);

    const loadingVisibility = (visible: boolean) => {
        loadingSet(visible);
    }

    return (
        <LoadingContext.Provider value={{ loading: (visibility: boolean) => loadingVisibility(visibility) }}>
            {children}
            <LoadingModal loading={loading} />
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;