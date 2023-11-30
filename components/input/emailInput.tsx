import { Image, Text, TextInput, View } from "react-native";
import InputStyle from "./inputStyle";

const EmailInput = () => {
    return (
        <View style={InputStyle.W320H32}>
            <Image source={require('../../assets/img/mail.png')} style={InputStyle.image16x16} />
            <TextInput placeholder="E-mail" style={InputStyle.textInput} />
        </View>
    );
}

export default EmailInput;