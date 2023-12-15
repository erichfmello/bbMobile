import { StyleSheet } from "react-native";

const TableStyle = StyleSheet.create({
    tableSerieHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 32,
        borderBottomWidth: 4,
        borderBlockColor: '#2C1DFE'
    },
    tableSerieBody: { 
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        borderBottomWidth: 1,
        borderBlockColor: '#2C1DFE'
    },
    column1: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    column2: {
        flex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TableStyle;