import { TouchableOpacity } from "react-native";
import ButtonStyle from "./buttonStyle";
import White16Bold from "../label/white16Bold";

interface props {
    text: string;
    callback: any;
}

const ActionButton = ({ text, callback }: props) => {
    return (
        <TouchableOpacity onPress={callback} style={ButtonStyle.ActionButton}>
            <White16Bold text={text} />
        </TouchableOpacity>
    );
}

export default ActionButton;