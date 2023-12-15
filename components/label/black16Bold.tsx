import { View, Text } from "react-native";
import LabelStyle from "./labelStyle";

interface props {
    text: string;
}

const Black16Bold = ({ text }: props) => {
    return (
        <View>
            <Text style={LabelStyle.black16Bold}>{text}</Text>
        </View>
    );
}

export default Black16Bold;