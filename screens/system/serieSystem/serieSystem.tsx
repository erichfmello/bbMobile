import { View, Text } from "react-native";
import FooterNavigation from "../../../components/navigation/footerNavigation";
import SystemStyle from "../systemStyle";

const SerieStystem = () => (
    <View style={SystemStyle.homeSystem}>
        <View style={SystemStyle.homeSystemInner}>
            <Text>Ola serie system</Text>
            <Text>Ola serie system</Text>
            <Text>Ola serie system</Text>
            <Text>Ola serie system</Text>
            <Text>Ola serie system</Text>
        </View>
        <FooterNavigation />
    </View>
)

export default SerieStystem;