import { View, ScrollView } from "react-native";
import HomeStyle from "./homeStyle";
import Logo from "../../components/logo/logo";
import LoginForm from "../../components/form/loginForm";
import Black16W400 from "../../components/label/black16W400";
import HomeController from "./homeController";

const Home = ({ navigation }: any) => {
    const controller = new HomeController();

    return (
        <ScrollView style={HomeStyle.homeContent}>
            <View style={HomeStyle.component} >
                <View style={HomeStyle.homeInner} >
                    <Logo />
                    <LoginForm controller={controller} navigation={navigation} />
                    <View style={HomeStyle.labelContent}>
                        <Black16W400 text={'Ainda não é cadastrado? Acesse nosso site'} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Home;