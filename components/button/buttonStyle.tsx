import { StyleSheet } from "react-native";

const ButtonStyle = (isSelected: any) => StyleSheet.create({
    ActionButton: {
        backgroundColor: '#2C1DFE',
        width: 144,
        height: 40,
        alignItems: 'center',
        display: 'flex',
        justifyContent: "center",
        borderRadius: 5,
        marginEnd: 16,
    },
    CancelButton: {
        backgroundColor: '#CCC',
        width: 144,
        height: 32,
        alignItems: 'center',
        display: 'flex',
        justifyContent: "center",
        borderRadius: 5,
        marginEnd: 16,
    },
    IconButton: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isSelected ? 0.4 : 1,
    }
});

export default ButtonStyle;