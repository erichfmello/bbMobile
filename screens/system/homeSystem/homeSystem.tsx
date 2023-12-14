import { View, Text } from "react-native";
import FooterNavigation from "../../../components/navigation/footerNavigation";
import SystemStyle from "../systemStyle";

const HomeStystem = () => (
    <View style={SystemStyle.homeSystem}>
        <View style={SystemStyle.homeSystemInner}>
            <Text>Ola home system</Text>
            <Text>Ola home system</Text>
            <Text>Ola home system</Text>
            <Text>Ola home system</Text>
            <Text>Ola home system</Text>
        </View>
        <FooterNavigation />
    </View>
)

export default HomeStystem;