import { createContext, useState, useEffect } from "react";
import { View, Image } from "react-native";
import VariablesStyle from "../assets/css/variablesStyle";

export const LoadingContext = createContext<{
    loading: (visible: boolean) => void,
}>({
    loading: () => { },
});

const LoadingProvider = ({ children }: any) => {
    const [loading, loadingSet] = useState<boolean>(false);
    const [angle, angleSet] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            angleSet(angle + 5);
        }, 10)
    }, [angle])

    const loadingVisibility = (visible: boolean) => {
        loadingSet(visible);
    }

    return (
        <LoadingContext.Provider value={{ loading: (visibility: boolean) => loadingVisibility(visibility) }}>
            {children}
            {
                loading ? (
                    <View style={VariablesStyle.loaging}>
                        <Image source={require('../assets/img/loading.png')} style={{ transform: [{ rotate: `${angle} deg` }], width: 300, height: 300 }} />
                    </View>
                ) : null
            }
        </LoadingContext.Provider>
    );
}

export default LoadingProvider;