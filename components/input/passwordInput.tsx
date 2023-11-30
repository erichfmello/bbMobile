import { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import InputStyle from "./inputStyle";

const PasswordInput = () => {
    const [isVisible, isVisibleSet] = useState<boolean>(true);

    const changeVisibility = () => {
        isVisibleSet(!isVisible);
    }

    return (
        <View style={InputStyle.W320H32}>
            <Image source={require('../../assets/img/lock.png')} style={InputStyle.image16x16} />
            <TextInput placeholder="Senha" style={InputStyle.textInput} secureTextEntry={isVisible} />
            <TouchableOpacity onPress={changeVisibility}>
                {
                    isVisible ? (
                        <Image source={require('../../assets/img/hide.png')} style={InputStyle.image16x16} />
                    ) : (
                        <Image source={require('../../assets/img/view.png')} style={InputStyle.image16x16} />
                    )
                }
            </TouchableOpacity>
        </View>
    );
}

export default PasswordInput;