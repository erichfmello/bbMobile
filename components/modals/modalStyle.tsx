import { Dimensions, StyleSheet } from 'react-native';

const ModalStyle = StyleSheet.create({
    loaging: {
        position: 'absolute',
        backgroundColor: '#CCC',
        opacity: 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    ModalError: {
        position: 'absolute',
        backgroundColor: '#CCC',
        opacity: 0.8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    ModalErrorInner: {
        position: 'absolute',
        top: 80,
        alignSelf: 'center',
        width: 300,
        height: 200,
        backgroundColor: '#FFF',
        borderColor: '#F00',
        borderWidth: 1,
        borderRadius: 10,
    },
    ModalErrorInnerHeader: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingTop: 8,
        paddingRight: 8,
        height: 32,
        borderBottomColor: '#2C1DFE',
        borderBottomWidth: 0.5,
    },
    content: {
        padding: 8,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 48,
        borderTopColor: '#2C1DFE',
        borderTopWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
});

export default ModalStyle;