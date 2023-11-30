import { View, Text, TouchableOpacity } from "react-native";
import ButtonStyle from "./buttonStyle";
import White16Bold from "../label/white16Bold";

interface props {
    text: string;
}

const ActionButton = ({ text }: props) => {
    return (
        <View style={ButtonStyle.ActionButton}>
            <TouchableOpacity>
                <White16Bold text={text} />
            </TouchableOpacity>
        </View>
    );
}

export default ActionButton;