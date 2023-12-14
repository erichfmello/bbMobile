import { TouchableOpacity } from "react-native";
import ButtonStyle from "./buttonStyle";
import Black16W400 from "../label/black16W400";

interface props {
    text: string;
    callback: any;
}

const CancelModalButton = ({ text, callback }: props) => {
    const isSelected: any = false;

    return (
        <TouchableOpacity onPress={callback} style={ButtonStyle(isSelected).CancelButton}>
            <Black16W400 text={text} />
        </TouchableOpacity>
    );
}

export default CancelModalButton;