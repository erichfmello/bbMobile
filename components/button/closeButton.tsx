import { View, Text, TouchableOpacity } from "react-native";

interface props {
    callback: any;
}

const CloseButton = ({ callback }: props) => {
    return (
        <View>
            <TouchableOpacity onPress={callback}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CloseButton;