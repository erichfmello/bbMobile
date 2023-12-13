import { useState } from 'react';
import { Image, TextInput, View } from "react-native";
import InputStyle from "./inputStyle";

interface props {
    callback: any;
}

const EmailInput = ({ callback }: props) => {
    const [value, valueSet] = useState<string>('');

    const valueChange = (textNew: string) => {
        valueSet(textNew);
        callback(textNew);
    }

    return (
        <View style={InputStyle.W320H32}>
            <Image source={require('../../assets/img/mail.png')} style={InputStyle.image16x16} />
            <TextInput placeholder="E-mail" style={InputStyle.textInput}
                value={value}
                onChangeText={(textNew: string) => valueChange(textNew)}
            />
        </View>
    );
}

export default EmailInput;