import { useState } from 'react';
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import InputStyle from "./inputStyle";

interface props {
    callback: any;
}

const PasswordInput = ({ callback }: props) => {
    const [isVisible, isVisibleSet] = useState<boolean>(true);
    const [text, textSet] = useState<string>('');
    
    const changeVisibility = () => {
        isVisibleSet(!isVisible);
    }
    
    const changeText = (value: string): void => {
        textSet(value);
        callback(value);
    }


    return (
        <View style={InputStyle.W320H32}>
            <Image source={require('../../assets/img/lock.png')} style={InputStyle.image16x16} />
            <TextInput placeholder="Senha" style={InputStyle.textInput} secureTextEntry={isVisible} value={text} onChangeText={(newValue: string) => changeText(newValue)} />
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