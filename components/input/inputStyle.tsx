import { StyleSheet } from "react-native";

const InputStyle = StyleSheet.create({
    W320H32: {
        width: 320,
        height: 32,
        borderWidth: 1,
        borderColor: '#2C1DFE',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
    },
    image16x16: {
        margin: 8,
        width: 16,
        height: 16,
    },
    textInput: {
        flex: 1,
        alignItems: 'center'
    }
});

export default InputStyle;