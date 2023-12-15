import { View } from "react-native";
import TableStyle from "../tableStyle";
import Black16Bold from "../../label/black16Bold";

const TableSerieHeader = () => {
    return (
        <View style={TableStyle.tableSerieHeader}>
            <View style={TableStyle.column2}>
                <Black16Bold text={"Nome"} />
            </View>
            <View style={TableStyle.column2}>
                <Black16Bold text={"Tipo de treino"} />
            </View>
            <View style={TableStyle.column2}>
                <Black16Bold text={"Musculo"} />
            </View>
            <View style={TableStyle.column1}>
                <Black16Bold text={""} />
            </View>
        </View>
    );
}

export default TableSerieHeader;