import { View, Text } from "react-native";
import LabelStyle from "./labelStyle";

interface props {
    text: string;
}

const Black32Bold = ({ text }: props) => {
    return (
        <View>
            <Text style={LabelStyle.black32Bold}>{text}</Text>
        </View>
    );
}

export default Black32Bold ;