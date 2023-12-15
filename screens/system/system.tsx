import { View, Text } from "react-native";
import FooterNavigation from "../../components/navigation/footerNavigation";
import SystemStyle from "./systemStyle";

interface props {
    navigation: any;
}

const System = ({ navigation }: props) => {
    return (

        <View style={SystemStyle.homeSystem}>
            <View style={SystemStyle.homeSystemInner}>
                <Text>Ola system</Text>
                <Text>Ola system</Text>
                <Text>Ola system</Text>
                <Text>Ola system</Text>
                <Text>Ola system</Text>
            </View>
            <FooterNavigation index={0} navigation={navigation} />
        </View>
    );
}

export default System ;