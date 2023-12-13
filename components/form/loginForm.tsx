import { View } from "react-native";
import EmailInput from "../input/emailInput";
import FormStyle from "./formStyle";
import PasswordInput from "../input/passwordInput";
import ActionButton from "../button/Actionbutton";
import { User } from "../../types/model";
import { useState } from "react";

interface props {
    controller: any;
    navigation: any;
}

const LoginForm = ({ controller, navigation }: props ) => {
    const [user, userSet] = useState<User>(new User());

    const emailSet = (text: string): void => {
        user.email = text;
        userSet(user);
    }

    const passwordSet = (text: string): void => {
        user.password = text;
        userSet(user);
    }


    return (
        <View style={FormStyle.login}>
            <EmailInput callback={emailSet} />
            <PasswordInput callback={passwordSet} />
            <View style={FormStyle.button}>
                <ActionButton text={"Entrar"} callback={() => controller.login(user, navigation)} />
            </View>
        </View>
    );
}

export default LoginForm;