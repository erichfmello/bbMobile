import { View } from "react-native";
import FooterNavigation from "../../../components/navigation/footerNavigation";
import SystemStyle from "../systemStyle";
import Logo from "../../../components/logo/logo";
import Black32Bold from "../../../components/label/black32Bold";
import Black16W400 from "../../../components/label/black16W400";

interface props {
    navigation: any;
}

const HomeStystem = ({ navigation }: props) => {
    return (

        <View style={SystemStyle.homeSystem}>
            <View style={SystemStyle.homeSystemInner}>
                <Logo />
                <View style={SystemStyle.homeSystemText}>
                    <Black32Bold text={"Bem vindo!"} />
                    <Black16W400 text={"No sistema você pode cadastrar ou consultar seus treinos, alem de poder controlar a evolução dos seus treinos."} />
                </View>
            </View>
            <FooterNavigation index={0} navigation={navigation} />
        </View>
    );
}

export default HomeStystem;