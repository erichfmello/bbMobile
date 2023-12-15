import { StyleSheet } from "react-native";

const SystemStyle = StyleSheet.create({
    homeSystem: {
        flex: 1,
    },
    homeSystemInner: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 80,
    },
    homeSystemText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
    },
    serieSystemInner: {
        flex: 1,
        paddingTop: 80,
    }
});

export default SystemStyle;