import { View, Text } from "react-native";
import LabelStyle from "./labelStyle";

interface props {
    text: string;
}

const White16Bold = ({ text }: props) => {
    return (
        <View >
            <Text style={LabelStyle.label}>{text}</Text>
        </View>
    );
}

export default White16Bold;