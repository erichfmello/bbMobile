import { Dimensions, StyleSheet } from "react-native";

const FormStyle = StyleSheet.create({
    login: {
        height: 112,
        display: 'flex',
        alignItems: "center",
        gap: 8,
    },
    button: {
        width: Dimensions.get("window").width,
        alignItems: 'flex-end',
        paddingRight: 24,
    }
});

export default FormStyle;