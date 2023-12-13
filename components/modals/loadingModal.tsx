import { useState, useEffect } from "react";
import { View, Image } from "react-native";
import ModalStyle from "./modalStyle";

interface props {
    loading: boolean;
}

const LoadingModal = ({ loading }: props) => {
    const [angle, angleSet] = useState<number>(0);
    const topPosition = 0;

    useEffect(() => {
        setTimeout(() => {
            angleSet(angle + 5);
        }, 10)
    }, [angle])

    return (
        <>
            {
                loading ? (
                    <View style={ModalStyle.loaging} >
                        <Image source={require('../../assets/img/loading.png')} style={{ transform: [{ rotate: `${angle} deg` }], width: 300, height: 300 }} />
                    </View >
                ) : null
            }
        </>
    );
}

export default LoadingModal;