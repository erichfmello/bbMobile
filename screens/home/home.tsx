import { View, Text } from "react-native";
import HomeStyle from "./homeStyle";
import Logo from "../../components/logo/logo";
import LoginForm from "../../components/form/loginForm";
import Black16W400 from "../../components/label/black16W400";

const Home = () => {
    return (
        <View style={HomeStyle.homeContent}>
            <Logo />
            <LoginForm />
            <View style={HomeStyle.labelContent}>
                <Black16W400 text={'Ainda não é cadastrado? Acesse nosso site'} />
            </View>
        </View>
    );
}

export default Home;