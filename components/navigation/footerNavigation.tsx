import { View, Text } from "react-native";
import NavigationStyle from "./navigationStyle";
import IconButton from "../button/iconButton";

const FooterNavigation = () => {
    return (
        <View style={NavigationStyle.footerStyle}>
            <IconButton icon={"house"} isSelected={true} />
            <IconButton icon={"academia"} isSelected={false} />
            <IconButton icon={"muscle"} isSelected={false} />
        </View>
    );
}

export default FooterNavigation;