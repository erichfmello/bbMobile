import { View, Text } from "react-native";
import LabelStyle from "./labelStyle";

interface props {
    text: string;
}

const Black16W400 = ({ text }: props) => {
    return (
        <View>
            <Text style={LabelStyle.black16W400}>{text}</Text>
        </View>
    );
}

export default Black16W400;