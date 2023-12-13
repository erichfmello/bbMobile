import { Dimensions, StyleSheet } from 'react-native';

const VariablesStyle = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#CCC',
        display: 'flex',
    },
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
    loagingImage: {
        width: 50,
        height: 50,
    },
    

    // Background
    // $backgroudPages: #FFF;
    // $shadownColor: #888;

    //Colors
    // $primatyColor: #2C1DFE;
    // $secudaryColor: #CCC;
    // $whiteColor: #FFF;

    //Border
    // $borderRadius: 10px;
    // $borderRadiusInpur: 5px;
    // $border: 1px solid $primatyColor;
    // $boxShadwon: 3px 3px rgba(0,0,0,0.2);

    //Text
    // $font16: 16px;
    // $font48: 48px;
    // $weightBold: bold;
});

export default VariablesStyle;