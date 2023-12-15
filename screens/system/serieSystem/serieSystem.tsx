import { View, Text } from "react-native";
import FooterNavigation from "../../../components/navigation/footerNavigation";
import SystemStyle from "../systemStyle";
import TableSerie from "../../../components/table/tableSerie";

interface props {
    navigation: any;
}

const SerieStystem = ({ navigation }: props) => {
    return (
        <View style={SystemStyle.homeSystem}>
            <View style={SystemStyle.serieSystemInner}>
                <TableSerie />
            </View>
            <FooterNavigation index={1} navigation={navigation} />
        </View>
    );
}

export default SerieStystem;