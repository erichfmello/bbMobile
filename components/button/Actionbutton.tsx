import { TouchableOpacity } from "react-native";
import ButtonStyle from "./buttonStyle";
import White16Bold from "../label/white16Bold";

interface props {
    text: string;
    callback: any;
}

const ActionButton = ({ text, callback }: props) => {
    const isSelected: any = false;

    return (
        <TouchableOpacity onPress={callback} style={ButtonStyle(isSelected).ActionButton}>
            <White16Bold text={text} />
        </TouchableOpacity>
    );
}

export default ActionButton;