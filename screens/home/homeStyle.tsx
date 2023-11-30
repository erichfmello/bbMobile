import { Dimensions, StyleSheet } from 'react-native';

const HomeStyle = StyleSheet.create({
    homeContent: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    component: {
        height: Dimensions.get("window").height,
        display: 'flex',
        justifyContent: 'center',
    },
    homeInner: {
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2C1DFE',
        borderRadius: 10,
        height: 480,
    },
    labelContent: {
        alignItems: 'flex-end',
        paddingEnd: 16,
        marginBottom: 16,
    }
});

export default HomeStyle;