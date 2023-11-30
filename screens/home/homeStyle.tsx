import { StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
    homeContent: {
        backgroundColor: '#FFF',
        margin: 24,
        marginTop: 104,
        marginBottom: 104,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#2C1DFE',
        borderRadius: 10,
    },
    labelContent: {
        alignItems: 'flex-end',
        paddingEnd: 16,
        marginBottom: 16,
    }
});

export default HomeStyle;