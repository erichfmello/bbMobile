import { Text, View } from "react-native";
import EmailInput from "../input/emailInput";
import FormStyle from "./formStyle";
import PasswordInput from "../input/passwordInput";
import ActionButton from "../button/Actionbutton";

interface props {
    callback: any;
}

const LoginForm = ({ callback }: props) => {
    return (
        <View style={FormStyle.login}>
            <EmailInput />
            <PasswordInput />
            <View style={FormStyle.button}>
                <ActionButton text={"Entrar"} callback={callback} />
            </View>
        </View>
    );
}

export default LoginForm;